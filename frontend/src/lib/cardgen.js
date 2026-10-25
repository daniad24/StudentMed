// Generare de cartonașe fără AI, din structura slide-urilor.
// Reguli, în ordinea priorității:
//  1. Termen îngroșat într-o propoziție   → „completează spațiul” (cloze)
//  2. „Termen – explicație” / „Termen: …”  → definiție
//  3. Titlu + listă scurtă de puncte       → „enumeră”

const SKIP_TITLES = /^(cuprins|bibliografie|referin|mulțum|întrebări|intrebari|obiective|curs\s*\d+|plan(ul)?\s+cursului)/i
const DEF_RE = /^(.{2,60}?)\s+[-–—:=]\s+(.{6,})$|^(.{2,60}?):\s+(.{6,})$/
const MAX_CARDS = 400

const sentence = (s) => s.replace(/\s+/g, ' ').trim()
const ends = (s) => (/[.!?]$/.test(s) ? s : s + '.')

function clozeCards(slide) {
  const cards = []
  for (const line of slide.lines) {
    if (line.text.length < 25) continue
    for (const term of line.bold) {
      // Termenul trebuie să fie o parte din propoziție, nu toată.
      if (term.length < 3 || term.length > line.text.length * 0.6 || !line.text.includes(term)) continue
      cards.push({
        kind: 'cloze',
        front: ends(line.text.replace(term, '_____')),
        back: term,
        context: slide.title,
      })
      break
    }
  }
  return cards
}

function definitionCards(slide) {
  const cards = []
  for (const line of slide.lines) {
    const m = line.text.match(DEF_RE)
    if (!m) continue
    const term = sentence(m[1] ?? m[3])
    const def = sentence(m[2] ?? m[4])
    // Evităm „Exemplu: …”, „Notă: …” și termeni care sunt deja propoziții.
    if (/^(ex|exemplu|notă|nota|obs|atenție|sursa|sursă)\b/i.test(term) || term.split(' ').length > 7) continue
    cards.push({
      kind: 'definition',
      front: slide.title && !term.toLowerCase().includes(slide.title.toLowerCase()) ? `${term} (${slide.title})?` : `${term}?`,
      back: def,
      context: slide.title,
    })
  }
  return cards
}

function listCard(slide) {
  const items = slide.lines.filter((l) => l.level === 0 && l.text.length <= 140)
  if (!slide.title || items.length < 2 || items.length > 8) return []
  // Dacă majoritatea punctelor sunt deja definiții sau au termeni îngroșați (cloze), nu mai facem și listă.
  if (items.filter((l) => DEF_RE.test(l.text) || l.bold.length).length > items.length / 2) return []
  // Listele de propoziții lungi nu se pot memora ca enumerare.
  if (items.reduce((a, l) => a + l.text.length, 0) / items.length > 80) return []
  return [
    {
      kind: 'list',
      front: `${slide.title} – enumeră (${items.length})`,
      back: items.map((l) => `• ${l.text}`).join('\n'),
      context: slide.title,
    },
  ]
}

export function generateCards(slides) {
  const out = []
  const seen = new Set()
  for (const slide of slides) {
    if (!slide.lines.length || SKIP_TITLES.test(slide.title ?? '')) continue
    for (const card of [...clozeCards(slide), ...definitionCards(slide), ...listCard(slide)]) {
      const key = card.front.toLowerCase()
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ ...card, slide: slide.index })
    }
  }
  return out.slice(0, MAX_CARDS)
}
