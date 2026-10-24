<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import { AI_IMPORT } from '../lib/flags'
import { PROMPT_VERSION, buildPrompt, isBoilerplatePage, parseAiResponse, sameQuestion, splitText } from '../lib/aiimport'
import { deleteCourse, listCourses, newCourseId, putCourse } from '../lib/courses'
import { extractSlides } from '../lib/slides'
import { slideText, slidesToText } from '../lib/slidesText'
import { correctTexts } from '../lib/quiz'
import BackButton from '../components/BackButton.vue'

const route = useRoute()
const store = useAppStore()

const subjectId = ref(route.query.materie || subjects[0].id)
const subject = computed(() => subjects.find((s) => s.id === subjectId.value))

const text = ref('')
const part = ref(0)
const parts = computed(() => splitText(text.value))
const prompt = computed(() => (parts.value.length ? buildPrompt({ subjectName: subject.value.name, text: parts.value[part.value] ?? parts.value[0] }) : ''))
const copied = ref(false)
const reading = ref(false)
const fileError = ref('')
const skippedPages = ref(0)

const generating = ref(false)
const aiError = ref('')
const aiNote = ref('')
const progress = ref({ done: 0, total: 0, failed: 0 })
let cancelled = false
let wakeLock = null

// Pentru AI folosim bucăți mai mari decât pentru chatbot (AI-ul primește mult text deodată).
const AI_CHUNK = 16000
const aiChunks = computed(() => splitText(text.value, AI_CHUNK))

// --- Cursurile tale (păstrate în telefon) ---
const courses = ref([])
const course = ref(null) // cursul deschis acum; null pentru text lipit de mână
const courseNote = ref('')
const refreshCourses = async () => (courses.value = await listCourses())
onMounted(refreshCourses)

const subjectName = (id) => subjects.find((s) => s.id === id)?.name ?? id
const statsOf = (c) => store.courseStats(c.id)
const partsOf = (c) => splitText(c.text, AI_CHUNK).length
function courseStatus(c) {
  const total = partsOf(c)
  if (!c.gen) return { label: 'negenerat', tone: 'text-muted' }
  if (c.gen.version < PROMPT_VERSION) return { label: 'generat cu reguli mai vechi', tone: 'text-amber-700' }
  const done = c.gen.done.length
  return done >= total ? { label: 'generat complet', tone: 'text-brand-700' } : { label: `generat ${done} din ${total} părți`, tone: 'text-sky-700' }
}

function openCourse(c) {
  course.value = c
  subjectId.value = c.subjectId
  text.value = c.text
  part.value = 0
  skippedPages.value = 0
  fileError.value = ''
  courseNote.value = ''
}

async function removeCourse(c) {
  await deleteCourse(c.id)
  if (course.value?.id === c.id) course.value = null
  refreshCourses()
}

// Dacă studentul editează textul de mână, nu mai e „cursul salvat”.
function onTextInput() {
  if (course.value && text.value !== course.value.text) course.value = null
}

// Părțile încă negenerate din cursul deschis, cu regulile de acum.
const missingParts = computed(() => {
  const c = course.value
  if (!c?.gen || c.gen.version < PROMPT_VERSION) return []
  const done = new Set(c.gen.done)
  return aiChunks.value.map((_, i) => i).filter((i) => !done.has(i))
})
const oldRules = computed(() => !!course.value?.gen && course.value.gen.version < PROMPT_VERSION)
const lastRun = ref({ indices: [], full: false }) // ce părți a acoperit ultima generare
const replaceOld = ref(false)
const previousCount = computed(() => (course.value ? store.aiCountFor(course.value.id) : 0))

class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function callGenerate(chunk, per) {
  let r
  try {
    r = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: store.aiCode.code, text: chunk, subjectName: subject.value.name, questions: per, cards: per }),
    })
  } catch {
    throw new ApiError('Nu am putut contacta serverul. Verifică internetul.', 0)
  }
  const data = await r.json().catch(() => ({}))
  if (r.status === 401) store.clearAiCode()
  if (!r.ok) throw new ApiError(data.error || `Eroare ${r.status}`, r.status)
  return parseAiResponse(data.raw, chunk)
}

const norm = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim()

// Procesează părțile (una sau tot cursul) cu 3 cereri în paralel; ce a ieșit până la o eroare se păstrează.
async function generateChunks(chunks, per, indices = null) {
  aiError.value = ''
  aiNote.value = ''
  generating.value = true
  cancelled = false
  progress.value = { done: 0, total: chunks.length, failed: 0 }
  try {
    wakeLock = await navigator.wakeLock?.request('screen')
  } catch {
    // ecranul se poate stinge; progresul parțial rămâne oricum
  }
  const out = { questions: [], cards: [], skipped: [], summary: '' }
  const sums = []
  const seenQ = new Set()
  const seenC = new Set()
  const okParts = []
  let next = 0
  let fatal = ''
  async function worker() {
    while (!cancelled && !fatal && next < chunks.length) {
      const i = next++
      let res
      for (let attempt = 0; attempt < 2 && !res; attempt++) {
        try {
          res = await callGenerate(chunks[i], per)
        } catch (e) {
          // cod invalid / limită atinsă / lipsă cheie: nu are rost să continuăm
          if (e.status === 401 || e.status === 429 || (e.status === 503 && /cheie/.test(e.message))) {
            fatal = e.message
            break
          }
          if (attempt === 1) {
            progress.value.failed++
            if (!aiNote.value) aiNote.value = e.message
          }
        }
      }
      if (res) {
        for (const q of res.questions) {
          if (seenQ.has(norm(q.text)) || out.questions.some((o) => sameQuestion(o.text, q.text))) {
            out.skipped.push('Grilă duplicat: ' + q.text.slice(0, 50))
            continue
          }
          seenQ.add(norm(q.text))
          out.questions.push(q)
        }
        for (const c of res.cards) if (!seenC.has(norm(c.front))) (seenC.add(norm(c.front)), out.cards.push(c))
        out.skipped.push(...res.skipped)
        if (res.summary) sums.push({ i, n: indices ? indices[i] + 1 : i + 1, text: res.summary })
        if (indices) okParts.push(indices[i])
      }
      progress.value.done++
    }
  }
  await Promise.all([worker(), worker(), worker()])
  generating.value = false
  try {
    await wakeLock?.release()
  } catch {
    // nimic
  }
  sums.sort((a, b) => a.i - b.i)
  out.summary = sums.length > 1 || indices?.length > 1 ? sums.map((x) => `## Partea ${x.n}\n\n${x.text}`).join('\n\n') : (sums[0]?.text ?? '')
  lastRun.value = { indices: okParts, full: !!indices && indices.length === aiChunks.value.length }
  // o regenerare completă înlocuiește implicit ce era înainte din curs; continuarea doar adaugă
  replaceOld.value = lastRun.value.full && previousCount.value > 0
  if (out.questions.length || out.cards.length || out.summary) {
    result.value = out
    phase.value = 'review'
    if (fatal) aiNote.value = `Am oprit la ${progress.value.done} din ${chunks.length} părți: ${fatal}`
    else if (cancelled) aiNote.value = `Anulat la ${progress.value.done} din ${chunks.length} părți.`
    else if (progress.value.failed) aiNote.value = `${progress.value.failed} din ${chunks.length} părți nu au mers (de exemplu: ${aiNote.value}).`
  } else {
    aiError.value = fatal || aiNote.value || 'Nu am primit nimic de la AI. Încearcă din nou.'
  }
}

const generateWithAi = () => generateChunks([parts.value[part.value] ?? parts.value[0]], 8)
const generateAll = () => generateChunks(aiChunks.value, 6, aiChunks.value.map((_, i) => i))
const generateMissing = () => generateChunks(missingParts.value.map((i) => aiChunks.value[i]), 6, missingParts.value)
const cancelAll = () => (cancelled = true)
onUnmounted(() => (cancelled = true))

const raw = ref('')
const result = ref(null)
const error = ref('')
const saved = ref(0)
const phase = ref('edit') // edit | review | saved

let loadedSlides = [] // slide-urile fișierului curent (fără paginile administrative)
let loadedFile = null
const scanned = ref([]) // paginile fără text, de citit cu OCR
const ocr = ref({ running: false, done: 0, total: 0, error: '' })
let ocrStop = false
const stopOcr = () => (ocrStop = true)

async function onFile(e) {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (!file) return
  fileError.value = ''
  reading.value = true
  scanned.value = []
  try {
    const slides = await extractSlides(file)
    const kept = slides.filter((sl) => sl.empty || !isBoilerplatePage(slideText(sl)))
    skippedPages.value = slides.length - kept.length
    loadedSlides = kept
    loadedFile = file
    scanned.value = kept.filter((sl) => sl.empty).map((sl) => sl.index)
    text.value = slidesToText(kept)
    part.value = 0
    course.value = null
    if (!text.value.trim() && !scanned.value.length) fileError.value = 'Nu am găsit text în fișier.'
    else if (text.value.trim()) await saveAsCourse(file)
  } catch (err) {
    fileError.value = err.message || 'Nu am putut citi fișierul.'
  } finally {
    reading.value = false
  }
}

async function saveAsCourse(file) {
  const c = { id: newCourseId(), name: file.name.replace(/\.(pdf|pptx)$/i, ''), subjectId: subjectId.value, text: text.value, createdAt: Date.now(), gen: null }
  if (await putCourse(c)) {
    course.value = c
    courseNote.value = 'Am păstrat cursul în telefon. Data viitoare îl găsești la „Cursurile tale”, fără să-l mai încarci.'
    refreshCourses()
  }
}

async function runOcr() {
  ocr.value = { running: true, done: 0, total: scanned.value.length, error: '' }
  ocrStop = false
  try {
    const { ocrPdfPages } = await import('../lib/ocr')
    const res = await ocrPdfPages(loadedFile, scanned.value, { onProgress: (done, total) => (ocr.value = { ...ocr.value, done, total }), shouldStop: () => ocrStop })
    const recognized = Object.keys(res).map(Number)
    loadedSlides = loadedSlides.map((sl) => (res[sl.index] ? { ...res[sl.index] } : sl))
    scanned.value = scanned.value.filter((n) => !recognized.includes(n))
    text.value = slidesToText(loadedSlides)
    if (recognized.length && text.value.trim()) {
      if (course.value) {
        course.value = { ...course.value, text: text.value, gen: null }
        await putCourse(JSON.parse(JSON.stringify(course.value)))
        refreshCourses()
      } else await saveAsCourse(loadedFile)
    }
  } catch (err) {
    ocr.value = { ...ocr.value, error: err.message || 'Citirea a eșuat.' }
  } finally {
    ocr.value = { ...ocr.value, running: false }
  }
}

async function copy() {
  try {
    await navigator.clipboard.writeText(prompt.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2500)
  } catch {
    document.getElementById('prompt')?.select()
  }
}

function check() {
  error.value = ''
  try {
    result.value = parseAiResponse(raw.value)
    phase.value = 'review'
  } catch (err) {
    error.value = err.message
  }
}

const setAll = (list, v) => list.forEach((x) => (x.keep = v))
const keptQ = computed(() => result.value?.questions.filter((q) => q.keep) ?? [])
const keptC = computed(() => result.value?.cards.filter((c) => c.keep) ?? [])
const keepSummary = ref(true)
const summaryTitle = ref('')
const summaryOn = computed(() => !!result.value?.summary && keepSummary.value)

async function save() {
  const summary = summaryOn.value ? { title: summaryTitle.value.trim() || `Rezumat AI – ${subject.value.name}`, content: result.value.summary } : null
  const c = course.value
  const fromCourse = c && lastRun.value.indices.length
  store.addAiContent(subjectId.value, keptQ.value, keptC.value, summary, fromCourse ? { courseId: c.id, promptVersion: PROMPT_VERSION, replace: replaceOld.value } : {})
  if (fromCourse) {
    const sameRules = c.gen?.version === PROMPT_VERSION && !replaceOld.value
    const done = [...new Set([...(sameRules ? c.gen.done : []), ...lastRun.value.indices])].sort((a, b) => a - b)
    course.value = { ...c, subjectId: subjectId.value, gen: { version: PROMPT_VERSION, done } }
    await putCourse(JSON.parse(JSON.stringify(course.value)))
    refreshCourses()
  }
  lastRun.value = { indices: [], full: false }
  saved.value = keptQ.value.length + keptC.value.length + (summary ? 1 : 0)
  phase.value = 'saved'
}

function again() {
  raw.value = ''
  result.value = null
  phase.value = 'edit'
  if (part.value + 1 < parts.value.length) part.value++
}
</script>

<template>
  <div v-if="!AI_IMPORT" class="card p-5 text-center font-bold">Funcția nu mai e disponibilă.</div>
  <div v-else class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/adauga" history />
      <div>
        <h1 class="text-2xl font-black">🤖 Grile cu chatbotul tău</h1>
        <p class="text-sm font-semibold text-muted">Funcție de test. Nimic nu pleacă din aplicație: tu duci textul în chatbot.</p>
      </div>
    </header>

    <template v-if="phase === 'edit'">
      <section v-if="courses.length" class="card space-y-2 p-5">
        <h2 class="font-black">📚 Cursurile tale</h2>
        <p class="text-xs font-semibold text-muted">Păstrate doar pe acest telefon. Le poți genera din nou fără să le mai încarci.</p>
        <div v-for="c in courses" :key="c.id" class="flex items-center gap-2 rounded-xl border-2 p-3" :class="course?.id === c.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200'">
          <button class="min-w-0 flex-1 text-left" @click="openCourse(c)">
            <span class="block truncate font-extrabold">{{ c.name }}</span>
            <span class="block text-xs font-bold text-muted">{{ subjectName(c.subjectId) }} · {{ partsOf(c) }} {{ partsOf(c) === 1 ? 'parte' : 'părți' }} · <span :class="courseStatus(c).tone">{{ courseStatus(c).label }}</span></span>
            <span v-if="statsOf(c).total" class="block text-xs font-bold text-muted">
              ✅ {{ statsOf(c).answered ? `${Math.round((statsOf(c).correct / statsOf(c).answered) * 100)}% corecte din ${statsOf(c).answered} rezolvate` : 'nimic rezolvat încă' }} · {{ statsOf(c).total }} grile generate
            </span>
          </button>
          <button class="shrink-0 px-2 text-sm font-bold text-muted" :aria-label="`Șterge ${c.name}`" @click="removeCourse(c)">✕</button>
        </div>
      </section>

      <section class="card space-y-3 p-5">
        <h2 class="font-black">1. Textul din curs</h2>
        <p v-if="course" class="rounded-xl bg-brand-50 px-3 py-2 text-sm font-bold text-brand-700">📘 {{ course.name }}</p>
        <div>
          <label class="label" for="subject">Materia</label>
          <select id="subject" v-model="subjectId" class="input">
            <optgroup v-for="y in years" :key="y.id" :label="y.name">
              <option v-for="s in subjects.filter((x) => x.years[0] === y.id)" :key="s.id" :value="s.id">{{ s.emoji }} {{ s.name }}</option>
            </optgroup>
          </select>
        </div>
        <label class="btn btn-white block w-full cursor-pointer text-center" :class="reading && 'pointer-events-none opacity-60'">
          {{ reading ? '⏳ Citesc fișierul…' : '📤 Ia textul dintr-un PPTX/PDF' }}
          <input type="file" accept=".pptx,.pdf" class="hidden" @change="onFile" />
        </label>
        <p v-if="fileError" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600">{{ fileError }}</p>
        <p v-if="courseNote" class="text-sm font-semibold text-brand-700">{{ courseNote }}</p>
        <div v-if="scanned.length || ocr.running" class="space-y-2 rounded-xl bg-sky-50 p-3">
          <p class="text-sm font-bold text-sky-800">
            📷 {{ scanned.length }} {{ scanned.length === 1 ? 'pagină nu are text' : 'pagini nu au text' }} (par scanate). Le pot citi din poză cu OCR.
          </p>
          <p class="text-xs font-semibold text-sky-800">Durează cam 5–15 secunde pe pagină și prima dată descarcă motorul de citire (câțiva MB), deci ai nevoie de internet. Ține ecranul deschis.</p>
          <div v-if="ocr.running" class="space-y-2">
            <div class="h-3 overflow-hidden rounded-full bg-white">
              <div class="h-full rounded-full bg-sky-500 transition-all" :style="{ width: `${(ocr.done / Math.max(ocr.total, 1)) * 100}%` }"></div>
            </div>
            <p class="text-sm font-bold text-sky-800">Pagina {{ Math.min(ocr.done + 1, ocr.total) }} din {{ ocr.total }}</p>
            <button class="btn btn-white w-full" @click="stopOcr">Oprește și păstrează ce s-a citit</button>
          </div>
          <button v-else class="btn btn-blue w-full" @click="runOcr">📷 Citește paginile scanate</button>
          <p v-if="ocr.error" class="text-sm font-bold text-red-600">{{ ocr.error }}</p>
        </div>
        <p v-if="skippedPages" class="text-sm font-semibold text-muted">Am lăsat deoparte {{ skippedPages }} {{ skippedPages === 1 ? 'pagină administrativă' : 'pagini administrative' }} (drepturi de autor, titlu, cuprins).</p>
        <p class="rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">Folosește doar materiale pe care ai voie să le procesezi. Rezultatele rămân pe telefonul tău, dar textul se trimite la un serviciu de AI.</p>
        <textarea v-model="text" rows="6" class="input" placeholder="…sau lipește aici textul din curs" @input="onTextInput"></textarea>
        <p v-if="parts.length > 1" class="text-sm font-semibold text-muted">
          Textul e lung, așa că îl împărțim în {{ parts.length }} părți ca să încapă într-un chatbot gratuit.
        </p>
      </section>

      <section v-if="prompt && store.aiCode" class="card space-y-3 border-brand-500 p-5">
        <h2 class="font-black">2. Generează cu AI <span class="chip bg-brand-100 text-brand-700">cod: {{ store.aiCode.label }}</span></h2>
        <p class="text-sm font-semibold text-muted">
          Textul de mai sus (partea selectată) se trimite la un serviciu de AI, care întoarce 8 grile și 8 cartonașe. Nu trimite materiale pe care nu ai voie să le dai mai departe.
        </p>
        <p v-if="aiError" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ aiError }}</p>
        <p v-if="oldRules" class="rounded-xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
          Între timp am îmbunătățit regulile AI-ului (grile luate strict din curs, fără duplicate). Poți genera din nou cursul; la salvare, ce era generat înainte din el se înlocuiește.
        </p>
        <button v-if="!generating && missingParts.length && missingParts.length < aiChunks.length" class="btn btn-primary w-full" @click="generateMissing">
          ▶️ Continuă: generează restul ({{ missingParts.length }} {{ missingParts.length === 1 ? 'parte' : 'părți' }})
        </button>
        <div v-if="generating && progress.total > 1" class="space-y-2">
          <div class="h-3 overflow-hidden rounded-full bg-gray-200">
            <div class="h-full rounded-full bg-brand-500 transition-all" :style="{ width: `${(progress.done / progress.total) * 100}%` }"></div>
          </div>
          <p class="text-sm font-bold text-muted">Partea {{ Math.min(progress.done + 1, progress.total) }} din {{ progress.total }} · ține ecranul deschis</p>
          <button class="btn btn-white w-full" @click="cancelAll">Oprește și păstrează ce s-a generat</button>
        </div>
        <button v-else class="btn w-full" :class="missingParts.length && missingParts.length < aiChunks.length ? 'btn-white' : 'btn-primary'" :disabled="generating" @click="aiChunks.length > 1 || course ? generateAll() : generateWithAi()">
          {{ generating ? '⏳ Generez… (până la un minut)' : course?.gen ? `🔁 Generează din nou tot cursul (${aiChunks.length} ${aiChunks.length === 1 ? 'parte' : 'părți'})` : aiChunks.length > 1 ? `✨ Generează din tot cursul (${aiChunks.length} părți)` : '✨ Generează grile și cartonașe' }}
        </button>
        <button v-if="aiChunks.length > 1 && !generating" class="btn btn-white w-full text-sm" @click="generateWithAi">Doar partea {{ part + 1 }} (încercare rapidă)</button>
        <p v-if="aiChunks.length > 1" class="text-xs font-semibold text-muted">Tot cursul = {{ aiChunks.length }} apeluri, cam {{ Math.ceil(aiChunks.length / 3) }}–{{ Math.ceil(aiChunks.length / 3) * 2 }} minute. Fiecare parte dă ~6 grile și ~6 cartonașe; la final alegi ce păstrezi.</p>
      </section>
      <p v-else-if="prompt" class="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold text-muted">
        Ai cod de invitație? Îl introduci în Profil și apare aici butonul de generare cu AI. Fără cod, folosește chatbotul tău, mai jos.
      </p>

      <section v-if="prompt" class="card space-y-3 p-5">
        <h2 class="font-black">{{ store.aiCode ? 'Sau: ' : '' }}2. Copiază promptul în chatbot</h2>
        <div v-if="parts.length > 1" class="flex gap-2 overflow-x-auto">
          <button v-for="(_, i) in parts" :key="i" class="btn shrink-0 px-3 py-1.5 text-sm" :class="part === i ? 'btn-primary' : 'btn-white'" @click="part = i">
            Partea {{ i + 1 }}
          </button>
        </div>
        <textarea id="prompt" :value="prompt" readonly rows="5" class="input font-mono text-xs"></textarea>
        <button class="btn btn-primary w-full" @click="copy">{{ copied ? '✓ Copiat!' : '📋 Copiază promptul' }}</button>
        <p class="text-sm font-semibold text-muted">Lipește-l în ChatGPT, Gemini sau Claude (varianta gratuită merge) și așteaptă răspunsul.</p>
      </section>

      <section v-if="prompt" class="card space-y-3 p-5">
        <h2 class="font-black">3. Lipește răspunsul</h2>
        <textarea v-model="raw" rows="6" class="input font-mono text-xs" placeholder='{"questions":[…],"cards":[…]}'></textarea>
        <p v-if="error" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ error }}</p>
        <button class="btn btn-primary w-full" :disabled="!raw.trim()" @click="check">Verifică răspunsul</button>
      </section>
    </template>

    <template v-else-if="phase === 'review'">
      <section class="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-sm font-bold text-amber-800">
        ⚠️ Generate de un AI, pot conține greșeli. Citește-le și compară cu cursul. Rămân marcate „neverificate”.
      </section>
      <p v-if="aiNote" class="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold text-muted">{{ aiNote }}</p>
      <p v-if="result.skipped.length" class="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold text-muted">
        Am omis {{ result.skipped.length }}: {{ result.skipped.slice(0, 4).join(' · ') }}
      </p>

      <section v-if="result.summary" class="space-y-2">
        <h2 class="font-black">Rezumat</h2>
        <div class="card space-y-2 p-4" :class="!keepSummary && 'opacity-50'">
          <label class="flex items-center gap-3 text-sm font-extrabold">
            <input v-model="keepSummary" type="checkbox" class="h-5 w-5 accent-brand-600" /> Salvează rezumatul în Materiale
          </label>
          <input v-model="summaryTitle" class="w-full rounded-xl border-2 border-gray-200 px-3 py-2 text-sm font-bold" :placeholder="`Rezumat AI – ${subject.name}`" />
          <p class="max-h-48 overflow-y-auto whitespace-pre-line text-sm font-semibold text-muted">{{ result.summary }}</p>
        </div>
      </section>

      <section v-if="result.questions.length" class="space-y-2">
        <div class="flex items-baseline justify-between">
          <h2 class="font-black">Grile ({{ keptQ.length }}/{{ result.questions.length }})</h2>
          <button class="text-sm font-bold text-brand-600" @click="setAll(result.questions, keptQ.length !== result.questions.length)">{{ keptQ.length === result.questions.length ? 'Deselectează tot' : 'Selectează tot' }}</button>
        </div>
        <div v-for="(q, i) in result.questions" :key="i" class="card space-y-1 p-4" :class="!q.keep && 'opacity-50'">
          <label class="flex items-start gap-3">
            <input v-model="q.keep" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
            <span class="font-extrabold">{{ q.text }}</span>
          </label>
          <ul class="pl-8 text-sm font-semibold">
            <li v-for="(o, j) in q.options" :key="j" :class="q.answer.includes(j) ? 'text-brand-700' : 'text-muted'">
              {{ q.answer.includes(j) ? '✓' : '·' }} {{ o }}
            </li>
          </ul>
          <p v-if="q.explanation" class="pl-8 text-sm font-semibold text-muted">💡 {{ q.explanation }}</p>
        </div>
      </section>

      <section v-if="result.cards.length" class="space-y-2">
        <div class="flex items-baseline justify-between">
          <h2 class="font-black">Cartonașe ({{ keptC.length }}/{{ result.cards.length }})</h2>
          <button class="text-sm font-bold text-brand-600" @click="setAll(result.cards, keptC.length !== result.cards.length)">{{ keptC.length === result.cards.length ? 'Deselectează tot' : 'Selectează tot' }}</button>
        </div>
        <label v-for="(c, i) in result.cards" :key="i" class="card flex items-start gap-3 p-4" :class="!c.keep && 'opacity-50'">
          <input v-model="c.keep" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
          <span class="text-sm"><span class="block font-extrabold">{{ c.front }}</span><span class="block font-semibold text-muted">{{ c.back }}</span></span>
        </label>
      </section>

      <label v-if="course && lastRun.indices.length && previousCount" class="card flex items-start gap-3 p-4">
        <input v-model="replaceOld" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
        <span class="text-sm">
          <span class="block font-extrabold">Înlocuiește ce am generat înainte din „{{ course.name }}”</span>
          <span class="block font-semibold text-muted">{{ previousCount }} elemente vechi. Debifat, cele noi se adaugă lângă ele.</span>
        </span>
      </label>

      <div class="grid gap-2">
        <button class="btn btn-primary w-full" :disabled="!keptQ.length && !keptC.length && !summaryOn" @click="save">Salvează {{ keptQ.length + keptC.length + (summaryOn ? 1 : 0) }} în {{ subject.name }}</button>
        <button class="btn btn-white w-full" @click="phase = 'edit'">Înapoi</button>
      </div>
    </template>

    <section v-else class="card space-y-3 p-6 text-center pop-in">
      <p class="text-5xl">🎉</p>
      <p class="text-xl font-black">Am salvat {{ saved }} elemente</p>
      <p class="text-sm font-semibold text-muted">Le găsești în materie, la Grile, Cartonașe și Materiale, sub filtrul „Generate AI”, separate de conținutul Steto.</p>
      <RouterLink :to="`/materie/${subjectId}`" class="btn btn-primary w-full">Deschide materia</RouterLink>
      <button class="btn btn-white w-full" @click="again">{{ part + 1 < parts.length ? 'Următoarea parte' : 'Alt text' }}</button>
      <button class="mt-2 text-xs font-bold text-muted" @click="store.clearAiContent(); phase = 'edit'">Șterge tot ce am importat cu AI</button>
    </section>
  </div>
</template>
