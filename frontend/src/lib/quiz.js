export function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function isMulti(q) {
  return q.type === 'multi'
}

export function correctTexts(q) {
  return q.answer.map((i) => q.options[i])
}

// Grila cu variantele amestecate; fiecare variantă știe dacă e corectă.
export function prepareQuestion(q) {
  return { ...q, shuffled: shuffle(q.options.map((text, i) => ({ text, correct: q.answer.includes(i) }))) }
}

// Corect doar dacă s-au bifat exact variantele corecte (ca la examen, fără punctaj parțial).
export function isCorrectSelection(prepared, selected) {
  return prepared.shuffled.every((o, i) => o.correct === selected.includes(i))
}

export function formatTime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
}
