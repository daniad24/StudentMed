import { isStaleChunkError, reloadOnceIfStale } from './refresh'
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
  const slides = []
  for (const { path, n } of slideFiles) {
    const doc = parser.parseFromString(await zip.text(path), 'application/xml')
    let title = ''
    const lines = []

    for (const shape of doc.getElementsByTagNameNS(PPTX_NS.p, 'sp')) {
      const ph = shape.getElementsByTagNameNS(PPTX_NS.p, 'ph')[0]
      const phType = ph?.getAttribute('type')
      const isTitle = phType === 'title' || phType === 'ctrTitle'

      for (const para of shape.getElementsByTagNameNS(PPTX_NS.a, 'p')) {
        const runs = [...para.getElementsByTagNameNS(PPTX_NS.a, 'r')]
        const text = clean(runs.map((r) => r.getElementsByTagNameNS(PPTX_NS.a, 't')[0]?.textContent ?? '').join(''))
        if (!text) continue
        if (isTitle) {
          title = title ? `${title} ${text}` : text
          continue
        }
        const bold = runs
          .filter((r) => r.getElementsByTagNameNS(PPTX_NS.a, 'rPr')[0]?.getAttribute('b') === '1')
          .map((r) => clean(r.getElementsByTagNameNS(PPTX_NS.a, 't')[0]?.textContent ?? ''))
          .filter((t) => t.length > 1)
        const level = Number(para.getElementsByTagNameNS(PPTX_NS.a, 'pPr')[0]?.getAttribute('lvl') ?? 0)
        lines.push({ text, level, bold })
      }
    }

    // Fără titlu marcat: prima linie scurtă devine titlu.
    if (!title && lines.length && lines[0].text.length <= 80) title = lines.shift().text
    slides.push({ index: n, title, lines })
    onProgress(slides.length, slideFiles.length)
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
async function extractPdf(file, onProgress) {
  let pdfjs
  try {
    pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
    const { default: workerUrl } = await import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url')
    pdfjs.GlobalWorkerOptions.workerSrc = workerUrl
  } catch (err) {
    if (isStaleChunkError(err) && reloadOnceIfStale()) throw new ImportError('Aplicația s-a actualizat, o reîncarc… Alege din nou fișierul.')
    throw new ImportError('Aplicația are o versiune veche. Apasă „Actualizează aplicația” din Profil și încearcă din nou.')
  }

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
  const slides = []
  for (let n = 1; n <= pdf.numPages; n++) {
    const page = await pdf.getPage(n)
    const items = await pageTextItems(page)

    // Grupăm fragmentele de text pe rânduri, după poziția verticală.
    const rows = []
    for (const it of items) {
      if (!it.str?.trim()) continue
      const y = Math.round(it.transform[5])
      const size = Math.abs(it.transform[3])
      const row = rows.find((r) => Math.abs(r.y - y) <= Math.max(2, size * 0.3))
      if (row) {
        row.parts.push({ x: it.transform[4], str: it.str })
        row.size = Math.max(row.size, size)
      } else rows.push({ y, size, parts: [{ x: it.transform[4], str: it.str }] })
    }
    rows.sort((a, b) => b.y - a.y)
    const lines = rows
      .map((r) => ({ text: clean(r.parts.sort((a, b) => a.x - b.x).map((p) => p.str).join(' ')), size: r.size }))
      .filter((l) => l.text)

    // Titlul = rândul cu fontul cel mai mare dintre primele rânduri.
    let title = ''
    if (lines.length) {
      const head = lines.slice(0, 3)
      const biggest = head.reduce((a, b) => (b.size > a.size ? b : a))
      if (biggest.text.length <= 100 && biggest.size >= lines[lines.length - 1].size) {
        title = biggest.text
        lines.splice(lines.indexOf(biggest), 1)
      }
    }
    slides.push({
      index: n,
      title,
      lines: lines.map((l) => ({ text: l.text.replace(/^[•▪●◦\-–*]\s*/, ''), level: 0, bold: [] })),
    })
    page.cleanup()
    onProgress(n, pdf.numPages)
  }
  return slides
}
