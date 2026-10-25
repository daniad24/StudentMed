// Import „cu chatbotul tău”: construim un prompt, studentul îl duce într-un chatbot gratuit,
// apoi lipește răspunsul înapoi și îl validăm aici. Nimic nu pleacă din aplicație.

export const CHUNK_CHARS = 9000

// Crește când schimbăm regulile promptului; cursurile generate cu o versiune mai veche pot fi regenerate.
export const PROMPT_VERSION = 3

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

export function buildPrompt({ subjectName, text, questions = 8, cards = 8, summary = true }) {
  return `Ești asistent pentru un student la Medicină. Din TEXTUL de mai jos (curs la materia „${subjectName}”) fă grile și cartonașe de învățat, în limba română.

Reguli:
- Folosește DOAR informațiile din text. Nu adăuga nimic din cunoștințele tale și nu inventa.
- Nu pune doze, valori numerice sau praguri decât dacă apar clar în text.
- Ignoră părțile administrative din text (note despre drepturi de autor, pagina de titlu, autori, cuprins, bibliografie, mulțumiri) și nu face întrebări despre ele.
- Dacă textul conține deja grile sau întrebări cu răspunsuri (cheie de răspuns, „răspuns corect: …”, variante marcate), PRELUAI-LE EXACT, cu aceleași răspunsuri corecte. Nu schimba, nu completa și nu „corecta” niciun răspuns. Dacă în text nu se vede clar care e răspunsul corect, nu face grila respectivă.
- Răspunsurile corecte trebuie să rezulte direct din text. Nu marca drept corectă o variantă care nu e susținută de text, chiar dacă ți se pare adevărată.
- Fiecare grilă are câmpul „evidence”: o propoziție copiată cuvânt cu cuvânt din text, care susține răspunsul corect. Fără o astfel de propoziție, nu face grila.
- „explanation” trebuie să fie în acord cu „answer”: toate variantele corecte apar în explicație, iar cele greșite nu.
- Nu face două grile despre același lucru.
- Fă aproximativ ${questions} grile și ${cards} cartonașe${summary ? ' și un rezumat al textului' : ''}. Acoperă toate ideile importante din text, una câte una, fără să repeți. Dacă textul nu are destul conținut, fă mai puține în loc să inventezi.
- Fiecare grilă are exact 5 variante. Poate avea unul sau mai multe răspunsuri corecte (complement simplu sau multiplu, ca la examenele din facultate).
- „answer” = indicii variantelor corecte, începând de la 0.
- „explanation” = o propoziție care spune de ce e corect, bazată pe text.
- Cartonașele: „front” = întrebare scurtă, „back” = răspuns scurt.
${summary ? '- „summary” = rezumat în Markdown (titluri cu ##, liste scurte, termenii-cheie cu **bold**), 100–200 de cuvinte, doar din text, fără informații noi.\n' : ''}
Răspunde DOAR cu JSON valid, fără alt text înainte sau după, exact în forma:
{"questions":[{"text":"…","options":["…","…","…","…","…"],"answer":[0],"explanation":"…","evidence":"…"}],"cards":[{"front":"…","back":"…"}]${summary ? ',"summary":"…"' : ''}}

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

// Text comparabil: fără diacritice, litere mici, doar litere și cifre. Suportă rânduri rupte și cratime din PDF.
const flat = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

// Citatul trebuie să apară în text: întreg sau cel puțin 80% din secvențele de 3 cuvinte.
export function quoteInText(quote, flatText) {
  const q = flat(quote)
  if (q.split(' ').length < 3) return false
  if (flatText.includes(q)) return true
  const w = q.split(' ')
  let hit = 0
  for (let i = 0; i + 3 <= w.length; i++) if (flatText.includes(w.slice(i, i + 3).join(' '))) hit++
  return hit / Math.max(w.length - 2, 1) >= 0.8
}

// Două enunțuri aproape identice (de exemplu aceeași întrebare formulată puțin diferit).
export function sameQuestion(a, b) {
  const wa = new Set(flat(a).split(' ').filter((x) => x.length > 2))
  const wb = new Set(flat(b).split(' ').filter((x) => x.length > 2))
  if (!wa.size || !wb.size) return false
  let inter = 0
  for (const x of wa) if (wb.has(x)) inter++
  return inter / (wa.size + wb.size - inter) >= 0.6
}

const str = (x) => (typeof x === 'string' ? x.trim() : '')

// Întoarce { questions, cards, skipped: [motive] }; elementele invalide sunt omise, nu repară nimic pe ghicite.
export function parseAiResponse(raw, sourceText = '') {
  const data = extractJson(raw)
  const flatSource = sourceText ? flat(sourceText) : ''
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
    if (flatSource && !quoteInText(str(q.evidence), flatSource)) return skipped.push(`Grila ${i + 1}: răspunsul nu e susținut de un citat din text`)
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
  const summary = str(data.summary)
  return { questions, cards, skipped, summary: summary.length >= 60 ? summary : '' }
}
