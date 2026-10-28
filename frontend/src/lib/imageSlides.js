// Cartonașe și grile „Ce arată imaginea?” din slide-urile cu poze (radiografii, scheme, preparate).
// Totul se face în telefon: poza slide-ului, cu titlul acoperit, pe față; titlul pus de profesor, pe spate.
// Răspunsul e chiar titlul slide-ului, deci nimic nu e inventat; variantele greșite sunt titluri din același curs.
import { loadPdfjs, openPdf } from './slides'
import { openZip } from './zipLazy'

const WIDTH = 1000 // destul pentru ecranul telefonului, cât să nu ocupe mult loc
const flat = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

// Titluri care nu spun ce e în imagine („Ex 1”, „Prezentare”, „AP”)
const GENERIC = /^(ex(emplu|ercitiu)?|caz( clinic)?|imagine|figura|fig|slide|prezentare|presentare|intrebari|cuprins|bibliografie|ap|pa|profil|incidenta|rx|radiografie|ct|rmn|test|quiz|recapitulare|multumesc)( ?\d+)?$/
// Titlul slide-ului; la slide-urile cu foarte puțin text, titlul nu iese în evidență ca mărime, deci luăm primul rând scurt.
const slideTitle = (s) => (s.title || (s.lines?.[0]?.text?.length <= 80 ? s.lines[0].text : '')).replace(/\s*\|.*$/, '').trim()
const withTitles = (slides) => slides.map((s) => ({ ...s, title: slideTitle(s) })).filter((s) => meaningfulTitle(s.title))

export function meaningfulTitle(t) {
  const f = flat(t ?? '')
  return f.length >= 4 && /[a-z]{3}/.test(f) && !GENERIC.test(f) && !/^(ex|exemplu|exercitiu|caz|imagine|figura|fig)\b/.test(f)
}

async function canvasToJpeg(canvas) {
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), 'image/jpeg', 0.8))
}

// --- PDF: pagina randată, fără banda cu titlul ---
// Titlul îl luăm după mărimea literei: fragmentele cele mai mari din partea de sus a paginii, de mărimea
// titlurilor din tot cursul. Notițele scrise de mână (recunoscute automat, adesea greșit) sunt mai mici și rămân pe dinafară.
function topTitle(items, height, deckSize) {
  const top = items.filter((it) => it.str?.trim() && it.y > height * 0.62)
  if (!top.length) return null
  const max = Math.max(...top.map((it) => it.size))
  if (deckSize && max < deckSize * 0.8) return null
  const parts = top.filter((it) => it.size >= max * 0.9).sort((a, b) => b.y - a.y || a.x - b.x)
  return { text: parts.map((it) => it.str.trim()).join(' ').replace(/\s+/g, ' ').trim(), bottom: Math.min(...parts.map((it) => it.y)), size: max, parts }
}

async function fromPdf(file, slides, onProgress, shouldStop) {
  const pdfjs = await loadPdfjs()
  const { pdf, close } = await openPdf(pdfjs, file)
  const IMAGE_OPS = new Set([pdfjs.OPS.paintImageXObject, pdfjs.OPS.paintInlineImageXObject, pdfjs.OPS.paintImageXObjectRepeat, pdfjs.OPS.paintJpegXObject].filter(Boolean))
  const out = []
  try {
    // 1. Textul fiecărei pagini (rapid) și mărimea obișnuită a titlurilor din curs
    const pages = []
    for (const s of slides) {
      const page = await pdf.getPage(s.index)
      const base = page.getViewport({ scale: 1 })
      const tc = await page.getTextContent()
      const items = tc.items.map((it) => ({ str: it.str, x: it.transform[4], y: it.transform[5], width: it.width ?? 0, size: Math.hypot(it.transform[2], it.transform[3]) }))
      pages.push({ index: s.index, base, items, title: topTitle(items, base.height, 0) })
      page.cleanup()
    }
    const sizes = pages.map((p) => p.title?.size).filter(Boolean).sort((a, b) => a - b)
    const deckSize = sizes[Math.floor(sizes.length / 2)] ?? 0

    // 2. Paginile cu titlu clar și cu poză: le randăm fără banda titlului
    const candidates = pages
      .map((p) => ({ ...p, title: p.title && p.title.size >= deckSize * 0.8 ? p.title : null }))
      .filter((p) => p.title && meaningfulTitle(p.title.text))
    let done = 0
    for (const c of candidates) {
      if (shouldStop()) break
      const page = await pdf.getPage(c.index)
      const ops = await page.getOperatorList()
      if (ops.fnArray.some((fn) => IMAGE_OPS.has(fn))) {
        const scale = WIDTH / c.base.width
        const viewport = page.getViewport({ scale })
        const canvas = document.createElement('canvas')
        canvas.width = Math.ceil(viewport.width)
        canvas.height = Math.ceil(viewport.height)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        await page.render({ canvasContext: ctx, viewport }).promise
        // slide-ul întreg (cu titlu și notițe) merge pe spatele cartonașului
        const full = await canvasToJpeg(canvas)
        // pe față acoperim restul textului de pe slide (notițe, etichete scrise), care ar putea da răspunsul
        const titleParts = new Set(c.title.parts)
        for (const it of c.items) {
          if (!it.str?.trim() || titleParts.has(it)) continue
          const pad = it.size * scale * 0.6
          const x = it.x * scale - pad
          const y = (c.base.height - it.y - it.size) * scale - pad
          ctx.fillRect(x, y, Math.max(it.width, it.size) * scale + pad * 2, it.size * scale * 1.3 + pad * 2)
        }
        // decupăm tot ce e deasupra liniei de bază a titlului, plus coborâșurile literelor
        const top = Math.min(Math.ceil((c.base.height - c.title.bottom) * scale + c.title.size * scale * 0.35 + 6), canvas.height - 50)
        const crop = document.createElement('canvas')
        crop.width = canvas.width
        crop.height = canvas.height - top
        crop.getContext('2d').drawImage(canvas, 0, top, canvas.width, crop.height, 0, 0, canvas.width, crop.height)
        const blob = await canvasToJpeg(crop)
        canvas.width = canvas.height = crop.width = crop.height = 0
        if (blob) out.push({ index: c.index, title: c.title.text, blob, full })
      }
      page.cleanup()
      onProgress(++done, candidates.length)
    }
  } finally {
    close()
  }
  return out
}

// --- PPTX: cea mai mare poză de pe slide (titlul e text separat, deci nu apare în ea) ---
const IMG_EXT = /\.(png|jpe?g|gif|bmp|webp)$/i
async function shrink(bytes, name) {
  const type = /\.png$/i.test(name) ? 'image/png' : /\.gif$/i.test(name) ? 'image/gif' : /\.webp$/i.test(name) ? 'image/webp' : /\.bmp$/i.test(name) ? 'image/bmp' : 'image/jpeg'
  const bmp = await createImageBitmap(new Blob([bytes], { type }))
  const scale = Math.min(1, WIDTH / bmp.width)
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bmp.width * scale)
  canvas.height = Math.round(bmp.height * scale)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(bmp, 0, 0, canvas.width, canvas.height)
  bmp.close?.()
  const blob = await canvasToJpeg(canvas)
  canvas.width = canvas.height = 0
  return blob
}

async function fromPptx(file, slides, onProgress, shouldStop) {
  const zip = await openZip(file)
  const parser = new DOMParser()
  const A = 'http://schemas.openxmlformats.org/drawingml/2006/main'
  const P = 'http://schemas.openxmlformats.org/presentationml/2006/main'
  const R = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships'
  const out = []
  const candidates = withTitles(slides)
  let done = 0
  for (const s of candidates) {
    if (shouldStop()) break
    const relsPath = `ppt/slides/_rels/slide${s.index}.xml.rels`
    const xml = await zip.text(`ppt/slides/slide${s.index}.xml`)
    const rels = zip.names.includes(relsPath) ? parser.parseFromString(await zip.text(relsPath), 'application/xml') : null
    if (xml && rels) {
      const doc = parser.parseFromString(xml, 'application/xml')
      const target = (id) => [...rels.getElementsByTagName('Relationship')].find((r) => r.getAttribute('Id') === id)?.getAttribute('Target')
      let best = null
      for (const pic of doc.getElementsByTagNameNS(P, 'pic')) {
        const id = pic.getElementsByTagNameNS(A, 'blip')[0]?.getAttributeNS(R, 'embed')
        const t = id && target(id)
        if (!t) continue
        const path = 'ppt/' + t.replace(/^\.\.\//, '')
        if (!IMG_EXT.test(path) || !zip.names.includes(path)) continue
        const ext = pic.getElementsByTagNameNS(A, 'ext')[0]
        const area = Number(ext?.getAttribute('cx') ?? 0) * Number(ext?.getAttribute('cy') ?? 0)
        if (!best || area > best.area) best = { path, area }
      }
      // ignorăm siglele mici: poza trebuie să ocupe o parte bună din slide
      if (best && best.area > 914400 * 914400 * 2) {
        try {
          const blob = await shrink(await zip.bytes(best.path), best.path)
          if (blob) out.push({ index: s.index, title: s.title, blob })
        } catch {
          // format pe care browserul nu-l poate desena: sărim slide-ul
        }
      }
    }
    onProgress(++done, candidates.length)
  }
  return out
}

export async function findImageSlides(file, slides, { onProgress = () => {}, shouldStop = () => false } = {}) {
  const name = file.name.toLowerCase()
  if (name.endsWith('.pdf')) return fromPdf(file, slides, onProgress, shouldStop)
  if (name.endsWith('.pptx')) return fromPptx(file, slides, onProgress, shouldStop)
  return []
}

// Din slide-urile găsite: cartonașe pentru toate, grile acolo unde avem destule titluri diferite ca variante greșite.
// Titlurile prea asemănătoare cu cel corect („Fractura de claviculă operată” față de „Fractura de claviculă”) nu sunt folosite ca variante greșite.
export function buildImageItems(found, shuffle) {
  const words = (t) => new Set(flat(t).split(' ').filter((w) => w.length > 2))
  const close = (a, b) => {
    const wa = words(a)
    const wb = words(b)
    let inter = 0
    for (const w of wa) if (wb.has(w)) inter++
    return inter / Math.max(Math.min(wa.size, wb.size), 1) >= 0.67
  }
  const titles = [...new Map(found.map((f) => [flat(f.title), f.title])).values()]
  return found.map((f) => {
    const others = shuffle(titles.filter((t) => flat(t) !== flat(f.title) && !close(t, f.title)))
    const picked = []
    for (const t of others) if (picked.length < 4 && !picked.some((p) => close(p, t))) picked.push(t)
    const question =
      picked.length === 4
        ? (() => {
            const options = shuffle([f.title, ...picked])
            return { text: 'Ce arată imaginea?', options, answer: [options.indexOf(f.title)], type: 'single', explanation: `Titlul slide-ului din curs: „${f.title}”.` }
          })()
        : null
    return { index: f.index, title: f.title, card: { front: 'Ce arată imaginea?', back: f.title }, question }
  })
}
