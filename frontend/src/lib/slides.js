// Extrage textul din prezentări (PPTX) și PDF-uri, direct în browser – fișierul nu pleacă de pe dispozitiv.
// Rezultat: [{ index, title, lines: [{ text, level, bold: [fragmente îngroșate] }] }]

const PPTX_NS = {
  a: 'http://schemas.openxmlformats.org/drawingml/2006/main',
  p: 'http://schemas.openxmlformats.org/presentationml/2006/main',
}

const clean = (s) => s.replace(/\s+/g, ' ').trim()

export async function extractSlides(file) {
  const name = file.name.toLowerCase()
  if (name.endsWith('.pptx')) return extractPptx(file)
  if (name.endsWith('.pdf')) return extractPdf(file)
  throw new Error('Format nesuportat. Încarcă un fișier .pptx sau .pdf.')
}

async function extractPptx(file) {
  const { default: JSZip } = await import('jszip')
  let zip
  try {
    zip = await JSZip.loadAsync(file)
  } catch {
    throw new Error('Fișierul nu pare a fi o prezentare PowerPoint validă (.pptx).')
  }

  const slideFiles = Object.keys(zip.files)
    .map((path) => ({ path, n: Number(path.match(/^ppt\/slides\/slide(\d+)\.xml$/)?.[1]) }))
    .filter((f) => f.n)
    .sort((a, b) => a.n - b.n)

  const parser = new DOMParser()
  const slides = []
  for (const { path, n } of slideFiles) {
    const doc = parser.parseFromString(await zip.file(path).async('string'), 'application/xml')
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
  }
  return slides
}

async function extractPdf(file) {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const { default: workerUrl } = await import('pdfjs-dist/legacy/build/pdf.worker.min.mjs?url')
  pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

  let pdf
  try {
    pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise
  } catch {
    throw new Error('PDF-ul nu a putut fi deschis (poate e protejat cu parolă sau deteriorat).')
  }

  const slides = []
  for (let n = 1; n <= pdf.numPages; n++) {
    const page = await pdf.getPage(n)
    const { items } = await page.getTextContent()

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
  }
  return slides
}
