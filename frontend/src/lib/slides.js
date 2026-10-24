import { isStaleChunkError, reloadOnceIfStale } from './refresh'
import { cleanPages, readingRows, toBlocks } from './pdfLayout'
// Extrage textul din prezentări (PPTX) și PDF-uri, direct în browser – fișierul nu pleacă de pe dispozitiv.
// Rezultat: [{ index, title, lines: [{ text, level, bold: [fragmente îngroșate] }] }]

const PPTX_NS = {
  a: 'http://schemas.openxmlformats.org/drawingml/2006/main',
  p: 'http://schemas.openxmlformats.org/presentationml/2006/main',
}

import { openZip, ZipError } from './zipLazy'

const clean = (s) => s.replace(/\s+/g, ' ').trim()

export class ImportError extends Error {}

// onProgress(făcute, total) e apelat după fiecare slide/pagină, ca interfața să arate progresul.
export async function extractSlides(file, onProgress = () => {}) {
  const name = file.name.toLowerCase()
  try {
    if (name.endsWith('.pptx')) return await extractPptx(file, onProgress)
    if (name.endsWith('.pdf')) return await extractPdf(file, onProgress)
  } catch (err) {
    if (err instanceof ImportError) throw err
    console.error(err)
    if (err instanceof RangeError || /memory|allocation/i.test(err?.message ?? '')) {
      throw new ImportError('Fișierul e prea mare pentru memoria telefonului. Încearcă să-l comprimi sau să-l împarți în mai multe fișiere.')
    }
    throw new ImportError(`Nu am putut citi fișierul. Detalii tehnice: ${err?.message ?? err}`)
  }
  throw new ImportError('Format nesuportat. Încarcă un fișier .pptx sau .pdf.')
}

async function extractPptx(file, onProgress) {
  let zip
  try {
    zip = await openZip(file)
  } catch (err) {
    if (err instanceof ZipError && err.message === 'arhivă criptată') throw new ImportError('Prezentarea e protejată cu parolă.')
    throw new ImportError('Fișierul nu pare a fi o prezentare PowerPoint validă (.pptx). Fișierele vechi .ppt trebuie salvate ca .pptx.')
  }

  const slideFiles = zip.names
    .map((path) => ({ path, n: Number(path.match(/^ppt\/slides\/slide(\d+)\.xml$/)?.[1]) }))
    .filter((f) => f.n)
    .sort((a, b) => a.n - b.n)
  if (!slideFiles.length) throw new ImportError('Nu am găsit slide-uri în fișier. Pare a fi un .pptx gol sau deteriorat.')

  const parser = new DOMParser()
  const A = PPTX_NS.a
  const P = PPTX_NS.p
  const first = (node, ns, tag) => node.getElementsByTagNameNS(ns, tag)[0]
  const textOf = (node) => clean([...node.getElementsByTagNameNS(A, 't')].map((t) => t.textContent).join(''))
  const SKIP_PH = new Set(['sldNum', 'ftr', 'dt', 'hdr']) // numere de slide, subsoluri, date: nu sunt conținut

  // Poziția unui element pe slide (pentru ordinea de citire: de sus în jos, apoi de la stânga la dreapta)
  const posOf = (node) => {
    const off = first(node, A, 'off')
    return { y: Number(off?.getAttribute('y') ?? 0), x: Number(off?.getAttribute('x') ?? 0) }
  }

  const paragraphLines = (shape, isBody) => {
    const out = []
    for (const para of shape.getElementsByTagNameNS(A, 'p')) {
      const runs = [...para.getElementsByTagNameNS(A, 'r')]
      const text = clean(runs.map((r) => first(r, A, 't')?.textContent ?? '').join(''))
      if (!text) continue
      const bold = runs
        .filter((r) => first(r, A, 'rPr')?.getAttribute('b') === '1')
        .map((r) => clean(first(r, A, 't')?.textContent ?? ''))
        .filter((t) => t.length > 1)
      const pPr = first(para, A, 'pPr')
      const level = Number(pPr?.getAttribute('lvl') ?? 0)
      const noBullet = !!(pPr && first(pPr, A, 'buNone'))
      const bullet = !noBullet && (!!(pPr && (first(pPr, A, 'buChar') || first(pPr, A, 'buAutoNum'))) || level > 0 || isBody)
      out.push({ text, level, bold, bullet })
    }
    return out
  }

  const slides = []
  for (const { path, n } of slideFiles) {
    const doc = parser.parseFromString(await zip.text(path), 'application/xml')
    let title = ''
    const found = []

    for (const shape of doc.getElementsByTagNameNS(P, 'sp')) {
      const ph = first(shape, P, 'ph')
      const phType = ph?.getAttribute('type')
      if (SKIP_PH.has(phType)) continue
      if (phType === 'title' || phType === 'ctrTitle') {
        const t = clean([...shape.getElementsByTagNameNS(A, 'p')].map(textOf).join(' '))
        if (t) title = title ? `${title} ${t}` : t
        continue
      }
      const isBody = phType === 'body' || (!!ph && !phType) // casetele „Conținut” din layout au listă cu buline
      const lines = paragraphLines(shape, isBody)
      if (lines.length) found.push({ ...posOf(shape), lines })
    }

    // Tabele: fiecare rând devine o linie „celulă | celulă”
    for (const frame of doc.getElementsByTagNameNS(P, 'graphicFrame')) {
      const lines = []
      for (const tr of frame.getElementsByTagNameNS(A, 'tr')) {
        const cells = [...tr.getElementsByTagNameNS(A, 'tc')].map(textOf)
        if (cells.some(Boolean)) lines.push({ text: cells.join(' | '), level: 0, bold: [], table: true })
      }
      if (lines.length) {
        const xfrm = first(frame, P, 'xfrm')
        const off = xfrm && first(xfrm, A, 'off')
        found.push({ y: Number(off?.getAttribute('y') ?? 0), x: Number(off?.getAttribute('x') ?? 0), lines })
      }
    }

    // Ordinea de citire; elementele aproape pe același rând se citesc de la stânga la dreapta.
    found.sort((a, b) => (Math.abs(a.y - b.y) < 150000 ? a.x - b.x : a.y - b.y))
    let lines = found.flatMap((f) => f.lines)

    // Notițele vorbitorului (de multe ori conțin explicațiile)
    try {
      const rels = zip.names.includes(`ppt/slides/_rels/slide${n}.xml.rels`) ? await zip.text(`ppt/slides/_rels/slide${n}.xml.rels`) : ''
      const target = rels.match(/Target="\.\.\/notesSlides\/(notesSlide\d+\.xml)"/)?.[1]
      if (target && zip.names.includes(`ppt/notesSlides/${target}`)) {
        const nd = parser.parseFromString(await zip.text(`ppt/notesSlides/${target}`), 'application/xml')
        for (const sp of nd.getElementsByTagNameNS(P, 'sp')) {
          if (first(sp, P, 'ph')?.getAttribute('type') !== 'body') continue
          for (const l of paragraphLines(sp, false)) lines.push({ text: l.text, level: 0, bold: [], note: true })
        }
      }
    } catch {
      // notițele sunt un bonus; dacă nu se pot citi, mergem mai departe
    }

    // Fără titlu marcat: prima linie scurtă devine titlu.
    if (!title && lines.length && lines[0].text.length <= 80 && !lines[0].table) title = lines.shift().text
    slides.push({ index: n, title, lines })
    onProgress(slides.length, slideFiles.length)
  }

  // Linii care apar pe jumătate dintre slide-uri (subsoluri puse ca text obișnuit) nu sunt conținut.
  if (slides.length >= 4) {
    const counts = new Map()
    for (const sl of slides) for (const t of new Set(sl.lines.map((l) => l.text.toLowerCase()))) counts.set(t, (counts.get(t) ?? 0) + 1)
    const limit = Math.max(4, slides.length * 0.6)
    const isFooter = (l) => !l.bullet && !l.table && !l.note && l.text.length <= 60 && (counts.get(l.text.toLowerCase()) ?? 0) >= limit
    for (const sl of slides) sl.lines = sl.lines.filter((l) => !isFooter(l))
  }
  return slides
}

// Citim textul paginii cu reader-ul stream-ului. `page.getTextContent()` folosește `for await`
// pe ReadableStream, care lipsește din Safari (iPhone/iPad) și dă „undefined is not a function".
async function pageTextItems(page) {
  const reader = page.streamTextContent().getReader()
  const items = []
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    for (const item of value.items) items.push(item)
  }
  return items
}

// PDF: pdf.js încarcă și pozele din slide-uri când trece prin ele, deci citirea pe intervale nu
// ajută la PDF-urile cu multe poze. Citim fișierul întreg (memoria folosită ≈ mărimea lui).
export async function loadPdfjs() {
  try {
    const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
    const { default: workerUrl } = await import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url')
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
    return pdfjs
  } catch (err) {
    if (isStaleChunkError(err) && reloadOnceIfStale()) throw new ImportError('Aplicația s-a actualizat, o reîncarc… Alege din nou fișierul.')
    throw new ImportError('Aplicația are o versiune veche. Apasă „Actualizează aplicația” din Profil și încearcă din nou.')
  }
}

async function extractPdf(file, onProgress) {
  const pdfjs = await loadPdfjs()

  const task = pdfjs.getDocument({ data: await file.arrayBuffer() })
  let pdf
  try {
    pdf = await task.promise
  } catch (err) {
    task.destroy()
    if (err?.name === 'PasswordException') throw new ImportError('PDF-ul e protejat cu parolă.')
    throw new ImportError('PDF-ul nu a putut fi deschis (poate e deteriorat).')
  }
  try {
    return await readPdfPages(pdf, onProgress)
  } finally {
    task.destroy()
  }
}

async function readPdfPages(pdf, onProgress) {
  const pages = []
  for (let n = 1; n <= pdf.numPages; n++) {
    const page = await pdf.getPage(n)
    const view = page.getViewport({ scale: 1 })
    const width = view.width
    const items = (await pageTextItems(page))
      .filter((it) => it.str?.trim() && Math.abs(it.transform[1]) < 0.3) // fără text rotit (ștampile, margini)
      .map((it) => ({ str: it.str, x: it.transform[4], y: it.transform[5], width: it.width ?? 0, size: Math.hypot(it.transform[2], it.transform[3]) }))
    pages.push({ index: n, rows: readingRows(items, width), height: view.height, hadText: items.length > 0 })
    page.cleanup()
    onProgress(n, pdf.numPages)
  }

  const { body } = cleanPages(pages)
  const lens = pages.flatMap((p) => p.rows.map((r) => r.xEnd - r.x)).sort((a, b) => a - b)
  const maxLine = lens[Math.floor(lens.length * 0.9)] ?? 400

  return pages.map((p) => {
    const blocks = toBlocks(p.rows, body, maxLine)
    // titlul paginii: primul titlu, dacă e printre primele blocuri
    const first = blocks.findIndex((b) => b.heading)
    const title = first !== -1 && first <= 1 ? blocks.splice(first, 1)[0].text : ''
    return {
      index: p.index,
      title,
      empty: !p.hadText, // pagină fără text: probabil scanată
      lines: blocks.map((b) => ({ text: b.text, level: b.level ?? 0, bold: [], heading: b.heading || 0, bullet: !!b.bullet })),
    }
  })
}
