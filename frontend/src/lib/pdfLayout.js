// Din fragmentele de text ale unui PDF (poziție, mărime) reconstruim textul așa cum îl citește un om:
// rânduri, coloane, titluri, paragrafe fără rupturi de rând, fără antete/subsoluri și numere de pagină repetate.
// Funcțiile sunt pure (nu depind de pdf.js), ca să se poată testa separat.
//
// item: { str, x, y, width, size }  (y crește în sus, ca în PDF)

const median = (arr) => {
  const a = [...arr].sort((x, y) => x - y)
  return a.length ? a[Math.floor(a.length / 2)] : 0
}

const PAGE_NUMBER = /^(?:[-–—]\s*)?(?:pag(?:ina)?\.?\s*)?\d{1,4}(?:\s*(?:\/|din|of)\s*\d{1,4})?(?:\s*[-–—])?$/i
const BULLET = /^(?:[•▪●◦○■□▫‣·]|[-–—*]\s|\d{1,2}[.)]\s|[a-z][.)]\s)/
const SENTENCE_END = /[.!?…:;]["”)»]?$/

// Rânduri dintr-o listă de fragmente: grupăm după poziția verticală, apoi lipim fragmentele de la stânga la dreapta.
function buildRows(items) {
  const rows = []
  for (const it of [...items].sort((a, b) => b.y - a.y || a.x - b.x)) {
    const row = rows.find((r) => Math.abs(r.y - it.y) <= Math.max(2, it.size * 0.35))
    if (row) row.items.push(it)
    else rows.push({ y: it.y, items: [it] })
  }
  return rows.map((r) => {
    const parts = r.items.sort((a, b) => a.x - b.x)
    let text = ''
    let prevEnd = null
    for (const p of parts) {
      const gap = prevEnd === null ? 0 : p.x - prevEnd
      if (prevEnd !== null) {
        if (gap > p.size * 2.2) text += ' | '
        else if (gap > p.size * 0.15 && !/\s$/.test(text) && !/^\s/.test(p.str)) text += ' '
      }
      text += p.str
      prevEnd = p.x + p.width
    }
    text = text.replace(/\s+/g, ' ').trim()
    const chars = parts.reduce((n, p) => n + p.str.length, 0)
    // mărimea dominantă a rândului (după numărul de litere), nu cea mai mare: un indice mic nu schimbă rândul
    const sizeBy = new Map()
    for (const p of parts) sizeBy.set(Math.round(p.size * 2) / 2, (sizeBy.get(Math.round(p.size * 2) / 2) ?? 0) + p.str.length)
    const size = [...sizeBy.entries()].sort((a, b) => b[1] - a[1])[0][0]
    return { text, size, y: r.y, x: parts[0].x, xEnd: prevEnd, chars }
  }).filter((r) => r.text)
}

// Ordinea de citire: dacă pagina are două coloane, întâi cea din stânga, apoi cea din dreapta;
// rândurile care traversează pagina (titluri) împart pagina în benzi.
export function readingRows(items, pageWidth) {
  const usable = items.filter((i) => i.str?.trim())
  if (!usable.length) return []
  const mid = pageWidth / 2
  const zone = pageWidth * 0.03
  const crosses = (i) => i.x < mid - zone && i.x + i.width > mid + zone
  const left = usable.filter((i) => i.x + i.width / 2 < mid)
  const right = usable.filter((i) => i.x + i.width / 2 >= mid)
  const crossing = usable.filter(crosses)
  const twoCols = usable.length > 30 && crossing.length / usable.length < 0.08 && left.length > usable.length * 0.25 && right.length > usable.length * 0.25 &&
    // în dreapta trebuie să înceapă text la o margine stângă proprie, nu doar capete de rânduri
    median(right.map((i) => i.x)) > mid * 1.02
  if (!twoCols) return buildRows(usable)

  const fullY = crossing.map((i) => i.y) // rândurile cu un fragment care traversează pagina
  const isFull = (i) => fullY.some((y) => Math.abs(y - i.y) <= Math.max(2, i.size * 0.35))
  const bands = []
  let band = []
  for (const it of [...usable].sort((a, b) => b.y - a.y)) {
    if (isFull(it)) {
      if (band.length) bands.push({ cols: band })
      band = []
      bands.push({ full: it })
    } else band.push(it)
  }
  if (band.length) bands.push({ cols: band })

  const out = []
  let fullBuf = []
  const flushFull = () => {
    if (fullBuf.length) out.push(...buildRows(fullBuf))
    fullBuf = []
  }
  for (const b of bands) {
    if (b.full) {
      fullBuf.push(b.full)
      continue
    }
    flushFull()
    out.push(...buildRows(b.cols.filter((i) => i.x + i.width / 2 < mid)), ...buildRows(b.cols.filter((i) => i.x + i.width / 2 >= mid)))
  }
  flushFull()
  return out
}

// pages: [{ rows, height }]. Scoate numerele de pagină și antetele/subsolurile care se repetă (doar din marginea
// de sus/jos a paginii și doar dacă nu sunt mai mari decât textul obișnuit: titlurile slide-urilor se repetă legitim).
// Întoarce mărimea textului obișnuit.
export function cleanPages(pages) {
  const n = pages.length
  const key = (t) => t.toLowerCase().replace(/\d+/g, '#').replace(/\s+/g, ' ').trim()

  const bySize = new Map()
  for (const p of pages) for (const r of p.rows) bySize.set(r.size, (bySize.get(r.size) ?? 0) + r.chars)
  const body = [...bySize.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? 12

  const inMargin = (r, p) => !p.height || r.y > p.height * 0.91 || r.y < p.height * 0.09
  const counts = new Map()
  for (const p of pages) for (const k of new Set(p.rows.filter((r) => inMargin(r, p) && r.size <= body * 1.1).map((r) => key(r.text)))) counts.set(k, (counts.get(k) ?? 0) + 1)
  const repeated = (r) => n >= 3 && (counts.get(key(r.text)) ?? 0) >= Math.max(3, n * 0.4)

  let removed = 0
  for (const p of pages) {
    p.rows = p.rows.filter((r) => {
      const drop = inMargin(r, p) && r.size <= body * 1.1 && (PAGE_NUMBER.test(r.text) || repeated(r))
      if (drop) removed++
      return !drop
    })
  }
  return { body, removed }
}

// Rânduri → blocuri: { text, level, heading } (heading: 1 sau 2) unde paragraful rupt în rânduri e lipit la loc.
export function toBlocks(rows, body, maxLine) {
  const blocks = []
  let prev = null // ultimul rând adăugat la ultimul bloc
  for (const r of rows) {
    const heading = r.size >= body * 1.15 && r.chars <= 140 && !BULLET.test(r.text) ? (r.size >= body * 1.5 ? 1 : 2) : 0
    const last = blocks[blocks.length - 1]
    if (heading) {
      // titlu pe mai multe rânduri: același font, rânduri apropiate
      if (last?.heading && prev && Math.abs(prev.size - r.size) < 0.6 && prev.y - r.y <= r.size * 1.7) last.text += ' ' + r.text
      else blocks.push({ text: r.text, heading, level: 0 })
      prev = r
      continue
    }
    const bullet = BULLET.test(r.text)
    const text = bullet ? r.text.replace(/^(?:[•▪●◦○■□▫‣·]|[-–—*])\s*/, '') : r.text
    const close = prev && prev.y - r.y <= Math.max(prev.size, r.size) * 1.8
    const sameSize = prev && Math.abs(prev.size - r.size) < 1
    const prevEnds = last && SENTENCE_END.test(last.text)
    const prevShort = prev && prev.xEnd - prev.x < maxLine * 0.6 * (prev.size / body)
    const lower = /^[a-zăâîșțß(„"]/.test(r.text)
    const continues = last && !last.heading && !bullet && close && sameSize && (lower || (!prevEnds && !prevShort))
    if (continues) {
      last.text = /[a-zăâîșț]-$/.test(last.text) && lower ? last.text.slice(0, -1) + r.text : last.text + ' ' + r.text
    } else {
      blocks.push({ text, heading: 0, level: 0, bullet })
    }
    prev = r
  }
  return blocks
}
