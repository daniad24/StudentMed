// Import „cu chatbotul tău”: construim un prompt, studentul îl duce într-un chatbot gratuit,
// apoi lipește răspunsul înapoi și îl validăm aici. Nimic nu pleacă din aplicație.

export const CHUNK_CHARS = 9000

// Crește când schimbăm regulile promptului; cursurile generate cu o versiune mai veche pot fi regenerate.
export const PROMPT_VERSION = 5

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

// --- Cursuri care au deja grile (cu sau fără cheie de răspunsuri) ---
// Variante de tipul „A. …”, „b) …” la început de rând.
const OPTION_LINE = /^\s*(?:[-–•]\s*)?[A-Ea-e]\s*[.)]\s+\S/
// Enunț numerotat: „12. …” sau „12) …”
const NUMBERED = /^\s*(?:[-–•]\s*)?(\d{1,3})\s*[.)]\s+\S/

// Cheia de răspunsuri: „1. A, C”, „2 - BD”, „3) ACE”, chiar și mai multe pe un rând („1.A 2.BC 3.D”).
const KEY_PAIR = /(?<=^|[\s;,|])(\d{1,3})\s*[.):\-–]\s*([A-E](?:\s*[,+]?\s*[A-E]){0,4})(?=$|[\s;,|.])/g

export function detectGrile(text) {
  const lines = text.split('\n')
  const optionLines = lines.filter((l) => OPTION_LINE.test(l)).length
  const key = {}
  for (const l of lines) {
    if (OPTION_LINE.test(l)) continue
    const pairs = [...l.matchAll(KEY_PAIR)]
    // un rând de cheie are doar perechi număr–litere (fără alt text lung)
    const rest = l.replace(KEY_PAIR, ' ').replace(/r[ăa]spuns(uri)?|cheie|barem|grile|corecte?|:/gi, ' ').trim()
    if (pairs.length && rest.length <= 12) for (const m of pairs) key[Number(m[1])] = m[2].replace(/[^A-E]/g, '').split('').join(', ')
  }
  const keyCount = Object.keys(key).length
  return { hasGrile: optionLines >= 8, key: keyCount >= 5 ? key : {}, optionLines }
}

// Cheia pentru grilele care apar într-o bucată (numerele enunțurilor din ea), ca AI-ul să o aibă chiar dacă e la final de curs.
export function keyForChunk(chunk, key) {
  if (!Object.keys(key).length) return ''
  const nums = [...new Set(chunk.split('\n').map((l) => l.match(NUMBERED)?.[1]).filter(Boolean).map(Number))]
  const pairs = nums.filter((n) => key[n]).map((n) => `${n}: ${key[n]}`)
  return pairs.length ? pairs.join('; ') : ''
}

// Câte grile gata făcute (cu variante) sunt într-o bucată, aproximativ.
export const grileInChunk = (chunk) => Math.round(chunk.split('\n').filter((l) => OPTION_LINE.test(l)).length / 5)

export function buildPrompt({ subjectName, text, questions = 8, cards = 8, summary = true, key = '', avoid = [] }) {
  const avoidList = avoid.length ? `\nAI FĂCUT DEJA aceste grile din același curs. NU le repeta și nu reformula aceeași idee; caută alte informații din text, încă neacoperite:\n${avoid.map((a) => `- ${a}`).join('\n')}\n` : ''
  return `Ești asistent pentru un student la Medicină. Din TEXTUL de mai jos (curs la materia „${subjectName}”) fă grile și cartonașe de învățat, în limba română.

Reguli:
- Folosește DOAR informațiile din text. Nu adăuga nimic din cunoștințele tale și nu inventa.
- Nu pune doze, valori numerice sau praguri decât dacă apar clar în text.
- Ignoră părțile administrative din text (note despre drepturi de autor, pagina de titlu, autori, cuprins, bibliografie, mulțumiri) și nu face întrebări despre ele.
- GRILE GATA FĂCUTE: dacă textul conține deja grile (enunț + variante A–E), preia-le pe TOATE, exact cum sunt scrise (enunț și variante neschimbate), cu „origin”: "curs". Răspunsul corect îl iei DOAR din text: din cheia de răspunsuri, din „răspuns corect: …” sau din variantele marcate. Nu schimba, nu completa și nu „corecta” nimic. Dacă pentru o grilă nu există răspunsul în text, nu o include. Grilele preluate nu intră în numărul cerut mai jos.
- Grilele noi, făcute de tine, au „origin”: "nou".
- Răspunsurile corecte trebuie să rezulte direct din text. Nu marca drept corectă o variantă care nu e susținută de text, chiar dacă ți se pare adevărată.
- Fiecare grilă are câmpul „evidence”: o propoziție copiată cuvânt cu cuvânt din text, care susține răspunsul (la grilele preluate, poate fi chiar enunțul). Fără o astfel de propoziție, nu face grila.
- „explanation” trebuie să fie în acord cu „answer”: toate variantele corecte apar în explicație, iar cele greșite nu. La grilele preluate fără explicație în text, scrie „Conform cheii din curs.”
- Nu face două grile despre același lucru.
- Fă aproximativ ${questions} grile noi și ${cards} cartonașe${summary ? ' și un rezumat al textului' : ''}. Acoperă toate ideile importante din text, una câte una, fără să repeți. Dacă textul nu are destul conținut, fă mai puține în loc să inventezi.
- Grilele noi au exact 5 variante. Pot avea unul sau mai multe răspunsuri corecte (complement simplu sau multiplu, ca la examenele din facultate).
- „answer” = indicii variantelor corecte, începând de la 0 (A = 0, B = 1, C = 2, D = 3, E = 4).
- Cartonașele: „front” = întrebare scurtă, „back” = răspuns scurt.
${summary ? '- „summary” = rezumat în Markdown (titluri cu ##, liste scurte, termenii-cheie cu **bold**), 100–200 de cuvinte, doar din text, fără informații noi.\n' : ''}${avoidList}
Răspunde DOAR cu JSON valid, fără alt text înainte sau după, exact în forma:
{"questions":[{"text":"…","options":["…","…","…","…","…"],"answer":[0],"explanation":"…","evidence":"…","origin":"nou"}],"cards":[{"front":"…","back":"…"}]${summary ? ',"summary":"…"' : ''}}

TEXT:
"""
${text}
"""${key ? `\n\nCHEIA DE RĂSPUNSURI DIN CURS (pentru grilele numerotate din text): ${key}` : ''}`
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
export const wordSet = (t) => new Set(flat(t).split(' ').filter((x) => x.length > 2))
export function similarSets(wa, wb) {
  if (!wa.size || !wb.size) return false
  let inter = 0
  for (const x of wa) if (wb.has(x)) inter++
  return inter / (wa.size + wb.size - inter) >= 0.6
}
export function sameQuestion(a, b) {
  const wa = wordSet(a)
  const wb = wordSet(b)
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
    // grilele preluate din curs pot avea 3–6 variante; cele noi au exact 5
    const fromSource = str(q?.origin).toLowerCase() === 'curs'
    const n = options.length
    if (!text) return skipped.push(`Grila ${i + 1}: fără enunț`)
    if ((fromSource ? n < 3 || n > 6 : n !== 5) || options.some((o) => !o)) return skipped.push(`Grila ${i + 1}: nu are ${fromSource ? 'între 3 și 6' : 'exact 5'} variante`)
    if (new Set(options).size !== n) return skipped.push(`Grila ${i + 1}: variante identice`)
    if (!answer.length || answer.length >= n || answer.some((a) => !Number.isInteger(a) || a < 0 || a >= n))
      return skipped.push(`Grila ${i + 1}: răspunsuri corecte invalide`)
    if (flatSource && !quoteInText(str(q.evidence), flatSource)) return skipped.push(`Grila ${i + 1}: răspunsul nu e susținut de un citat din text`)
    questions.push({ text, options, answer: answer.sort(), type: answer.length > 1 ? 'multi' : 'single', explanation: str(q.explanation), fromSource, keep: true })
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
