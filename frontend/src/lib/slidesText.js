// Slide-urile extrase → text cu structură (titluri ##, liste cu -, paragrafe), pentru AI și pentru lizibilitate.
// Păstrează ierarhia din curs; așa AI-ul vede ce e titlu, ce e enumerare și ce e explicație.

export function slideText(s) {
  const out = []
  if (s.title) out.push(`## ${s.title}`)
  for (const l of s.lines) {
    if (l.heading) out.push(`${l.heading === 1 ? '##' : '###'} ${l.text}`)
    else if (l.table) out.push(l.text)
    else if (l.note) out.push(`Notă: ${l.text}`)
    else if (l.bullet || l.level > 0) out.push(`${'  '.repeat(l.level ?? 0)}- ${l.text}`)
    else out.push(l.text)
  }
  return out.join('\n')
}

export const slidesToText = (slides) => slides.map(slideText).filter(Boolean).join('\n\n')
