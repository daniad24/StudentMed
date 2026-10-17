// Import „cu chatbotul tău”: construim un prompt, studentul îl duce într-un chatbot gratuit,
// apoi lipește răspunsul înapoi și îl validăm aici. Nimic nu pleacă din aplicație.

export const CHUNK_CHARS = 9000

export function splitText(text, size = CHUNK_CHARS) {
  const clean = text.replace(/\r/g, '').replace(/\n{3,}/g, '\n\n').trim()
  if (clean.length <= size) return clean ? [clean] : []
  const parts = []
  let cur = ''
  for (const para of clean.split(/\n\n+/)) {
    if (cur && cur.length + para.length > size) {
      parts.push(cur)
      cur = ''
    }
    // paragraf uriaș: îl tăiem pe lungime
    for (let i = 0; i < para.length; i += size) {
      const piece = para.slice(i, i + size)
      cur = cur ? cur + '\n\n' + piece : piece
      if (cur.length >= size) {
        parts.push(cur)
        cur = ''
      }
    }
  }
  if (cur) parts.push(cur)
  return parts
}

// Pagini care nu conțin materie: note de drepturi de autor, titlu, cuprins. Le scoatem înainte de generare.
const BOILERPLATE = /drepturile? de autor|material intern al|reproducere(a)? sau utilizare|copyright|toate drepturile rezervate|cuprins\b/i
export function isBoilerplatePage(pageText) {
  const t = pageText.trim()
  return t.length < 1500 && BOILERPLATE.test(t)
}

export function buildPrompt({ subjectName, text, questions = 8, cards = 8 }) {
  return `Ești asistent pentru un student la Medicină. Din TEXTUL de mai jos (curs la materia „${subjectName}”) fă grile și cartonașe de învățat, în limba română.

Reguli:
- Folosește DOAR informațiile din text. Nu adăuga nimic din cunoștințele tale și nu inventa.
- Nu pune doze, valori numerice sau praguri decât dacă apar clar în text.
- Ignoră părțile administrative din text (note despre drepturi de autor, pagina de titlu, autori, cuprins, bibliografie, mulțumiri) și nu face întrebări despre ele.
- Fă ${questions} grile și ${cards} cartonașe.
- Fiecare grilă are exact 5 variante. Poate avea unul sau mai multe răspunsuri corecte (complement simplu sau multiplu, ca la examenele din facultate).
- „answer” = indicii variantelor corecte, începând de la 0.
- „explanation” = o propoziție care spune de ce e corect, bazată pe text.
- Cartonașele: „front” = întrebare scurtă, „back” = răspuns scurt.

Răspunde DOAR cu JSON valid, fără alt text înainte sau după, exact în forma:
{"questions":[{"text":"…","options":["…","…","…","…","…"],"answer":[0],"explanation":"…"}],"cards":[{"front":"…","back":"…"}]}

TEXT:
"""
${text}
"""`
}

function extractJson(raw) {
  let s = raw.trim()
  const fence = s.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fence) s = fence[1].trim()
  const a = s.indexOf('{')
  const b = s.lastIndexOf('}')
  if (a === -1 || b <= a) throw new Error('Nu am găsit JSON în răspuns. Copiază tot răspunsul chatbotului, de la { până la }.')
  s = s.slice(a, b + 1).replace(/[“”]/g, '"').replace(/,\s*([}\]])/g, '$1')
  try {
    return JSON.parse(s)
  } catch {
    throw new Error('Răspunsul nu e JSON valid (probabil a fost tăiat). Cere chatbotului: „continuă” sau „dă-mi din nou doar JSON-ul”, apoi lipește-l.')
  }
}

const str = (x) => (typeof x === 'string' ? x.trim() : '')

// Întoarce { questions, cards, skipped: [motive] }; elementele invalide sunt omise, nu repară nimic pe ghicite.
export function parseAiResponse(raw) {
  const data = extractJson(raw)
  const skipped = []
  const questions = []
  ;(Array.isArray(data.questions) ? data.questions : []).forEach((q, i) => {
    const text = str(q?.text)
    const options = Array.isArray(q?.options) ? q.options.map(str) : []
    const answer = Array.isArray(q?.answer) ? [...new Set(q.answer)] : typeof q?.answer === 'number' ? [q.answer] : []
    if (!text) return skipped.push(`Grila ${i + 1}: fără enunț`)
    if (options.length !== 5 || options.some((o) => !o)) return skipped.push(`Grila ${i + 1}: nu are exact 5 variante`)
    if (new Set(options).size !== 5) return skipped.push(`Grila ${i + 1}: variante identice`)
    if (!answer.length || answer.length > 4 || answer.some((a) => !Number.isInteger(a) || a < 0 || a > 4))
      return skipped.push(`Grila ${i + 1}: răspunsuri corecte invalide`)
    questions.push({ text, options, answer: answer.sort(), type: answer.length > 1 ? 'multi' : 'single', explanation: str(q.explanation), keep: true })
  })
  const cards = []
  ;(Array.isArray(data.cards) ? data.cards : []).forEach((c, i) => {
    const front = str(c?.front)
    const back = str(c?.back)
    if (!front || !back) return skipped.push(`Cartonașul ${i + 1}: gol`)
    cards.push({ front, back, keep: true })
  })
  if (!questions.length && !cards.length) throw new Error(skipped[0] ?? 'Răspunsul nu conține grile sau cartonașe.')
  return { questions, cards, skipped }
}
