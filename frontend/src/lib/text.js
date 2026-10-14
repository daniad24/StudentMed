// Normalizare pentru căutare: fără diacritice, litere mici.
export function normalize(s) {
  return (s ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Fragment scurt din `text` în jurul primei potriviri.
export function snippet(text, query, radius = 60) {
  const plain = (text ?? '').replace(/[#>*|`_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  const i = normalize(plain).indexOf(normalize(query))
  if (i < 0) return plain.slice(0, radius * 2)
  const start = Math.max(0, i - radius)
  return (start > 0 ? '…' : '') + plain.slice(start, i + query.length + radius) + (i + query.length + radius < plain.length ? '…' : '')
}
