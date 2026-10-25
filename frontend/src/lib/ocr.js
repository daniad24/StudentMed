// Citirea paginilor scanate (poze fără text) cu OCR în română, direct în telefon.
// Încărcat doar când studentul îl cere: motorul și datele limbii se descarcă o dată (câțiva MB) și cer internet.
import { ImportError, loadPdfjs, openPdf } from './slides'

const clean = (s) => s.replace(/\s+/g, ' ').trim()
const BULLET = /^(?:[•▪●◦○■□▫‣·]|[-–—*]\s|\d{1,2}[.)]\s)/

// Textul recunoscut → { title, lines } în aceeași formă ca la restul extragerilor.
export function ocrToSlide(index, text) {
  const paras = text
    .replace(/\r/g, '')
    .split(/\n{2,}/)
    .map((p) => p.split('\n').map(clean).filter(Boolean))
    .filter((p) => p.length)
  const lines = []
  for (const p of paras) {
    let cur = null
    for (const l of p) {
      const bullet = BULLET.test(l)
      if (cur && !bullet && !/[.!?:;]$/.test(cur.text)) {
        cur.text = /[a-zăâîșț]-$/.test(cur.text) && /^[a-zăâîșț]/.test(l) ? cur.text.slice(0, -1) + l : cur.text + ' ' + l
      } else {
        cur = { text: l.replace(BULLET, ''), level: 0, bold: [], bullet, heading: 0 }
        lines.push(cur)
      }
    }
  }
  const title = lines.length && lines[0].text.length <= 90 && !/[.!?]$/.test(lines[0].text) && !lines[0].bullet ? lines.shift().text : ''
  return { index, title, lines, ocr: true }
}

// pageNumbers: paginile fără text. Întoarce { [pagină]: slide }.
export async function ocrPdfPages(file, pageNumbers, { onProgress = () => {}, shouldStop = () => false } = {}) {
  const pdfjs = await loadPdfjs()
  let worker
  const out = {}
  let closePdf = () => {}
  try {
    const opened = await openPdf(pdfjs, file)
    const pdf = opened.pdf
    closePdf = opened.close
    let tess
    try {
      tess = await import('tesseract.js')
      worker = await tess.createWorker('ron')
    } catch {
      throw new ImportError('Nu am putut descărca motorul de citire a paginilor scanate. Verifică internetul și încearcă din nou.')
    }
    let done = 0
    for (const n of pageNumbers) {
      if (shouldStop()) break
      const page = await pdf.getPage(n)
      const base = page.getViewport({ scale: 1 })
      const viewport = page.getViewport({ scale: Math.min(2.5, 1700 / base.width) })
      const canvas = document.createElement('canvas')
      canvas.width = Math.ceil(viewport.width)
      canvas.height = Math.ceil(viewport.height)
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
      const { data } = await worker.recognize(canvas)
      canvas.width = canvas.height = 0
      page.cleanup()
      out[n] = ocrToSlide(n, data.text ?? '')
      onProgress(++done, pageNumbers.length)
    }
  } finally {
    await worker?.terminate()
    closePdf()
  }
  return out
}
