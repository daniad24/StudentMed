<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import { AI_IMPORT } from '../lib/flags'
import { PROMPT_VERSION, buildPrompt, detectGrile, grileInChunk, isBoilerplatePage, keyForChunk, parseAiResponse, similarSets, splitText, wordSet } from '../lib/aiimport'
import { deleteCourse, listCourses, newCourseId, putCourse, putImage } from '../lib/courses'
import { buildImageItems, findImageSlides } from '../lib/imageSlides'
import { shuffle } from '../lib/quiz'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { extractSlides } from '../lib/slides'
import { MAX_MB, sizeError } from '../lib/limits'
import { slideText, slidesToText } from '../lib/slidesText'
import { correctTexts } from '../lib/quiz'
import BackButton from '../components/BackButton.vue'

const route = useRoute()
const store = useAppStore()

// Fără materie aleasă nu încărcăm: altfel un curs de ortopedie ajunge din greșeală la prima materie din listă.
const subjectId = ref(route.query.materie || '')
const subject = computed(() => subjects.find((s) => s.id === subjectId.value))
const subjectName = computed(() => subject.value?.name ?? 'Medicină')

const text = ref('')
const part = ref(0)
// Paginile de început de carte (autori, editură, cuprins) nu ajung la AI, nici la cursurile salvate înainte de filtru.
const contentText = computed(() => text.value.split(/\n{2,}/).filter((p) => !isBoilerplatePage(p)).join('\n\n'))
const parts = computed(() => splitText(contentText.value))
const prompt = computed(() => (parts.value.length ? buildPrompt({ subjectName: subjectName.value, text: parts.value[part.value] ?? parts.value[0] }) : ''))
const copied = ref(false)
const reading = ref(false)
const readProgress = ref({ done: 0, total: 0 })
const fileError = ref('')
const skippedPages = ref(0)

const generating = ref(false)
const aiError = ref('')
const aiNote = ref('')
const progress = ref({ done: 0, total: 0, failed: 0 })
let cancelled = false
let wakeLock = null

// Pentru AI folosim bucăți mai mari decât pentru chatbot (AI-ul primește mult text deodată).
const AI_CHUNK = 12000
const aiChunks = computed(() => splitText(contentText.value, AI_CHUNK))

// --- Cursurile tale (păstrate în telefon) ---
const courses = ref([])
const course = ref(null) // cursul deschis acum; null pentru text lipit de mână
const courseNote = ref('')
const refreshCourses = async () => (courses.value = await listCourses())

// Cât mai poate genera codul azi (ca să avertizăm înainte de un curs foarte mare)
const usage = ref(null)
async function loadUsage() {
  if (!store.aiCode) return
  try {
    const r = await fetch('/api/check-code', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ code: store.aiCode.code }) })
    if (r.ok) usage.value = await r.json()
  } catch {
    // fără internet: fără avertisment
  }
}
const remainingToday = computed(() => (usage.value?.limit ? Math.max(usage.value.limit - usage.value.used, 0) : null))
// text foarte lung (sute de pagini): nu îl afișăm în casetă, ca să nu încetinim telefonul
const isLong = computed(() => text.value.length > 120000)

onMounted(async () => {
  loadUsage()
  await refreshCourses()
  // ?curs=<id>: deschis din „Cursurile mele”
  const wanted = courses.value.find((c) => c.id === route.query.curs)
  if (wanted) openCourse(wanted)
})

const nameOfSubject = (id) => subjects.find((s) => s.id === id)?.name ?? id
const statsOf = (c) => store.courseStats(c.id)
const partsOf = (c) => splitText(c.text, AI_CHUNK).length
function courseStatus(c) {
  const total = partsOf(c)
  if (!c.gen) return { label: 'negenerat', tone: 'text-muted' }
  if (c.gen.version < PROMPT_VERSION) return { label: 'generat cu reguli mai vechi', tone: 'text-amber-700' }
  const done = c.gen.done.length
  return done >= total ? { label: 'generat complet', tone: 'text-brand-700' } : { label: `generat ${done} din ${total} părți`, tone: 'text-sky-700' }
}

// Materia schimbată la un curs deschis: mutăm cursul și tot ce s-a generat din el la materia nouă.
watch(subjectId, async (id) => {
  const c = course.value
  if (!c || !id || c.subjectId === id) return
  course.value = { ...c, subjectId: id }
  await putCourse(JSON.parse(JSON.stringify(course.value)))
  store.moveCourse(c.id, id)
  refreshCourses()
})

function openCourse(c) {
  hasFile.value = false
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

async function callGenerate(chunk, per, extra = {}) {
  // per = { q, c }: câte grile și cartonașe cerem pentru bucata asta; extra = { key, avoid }
  let r
  try {
    r = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: store.aiCode.code, text: chunk, subjectName: subjectName.value, questions: per.q, cards: per.c, key: extra.key, avoid: extra.avoid }),
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
// Grilele gata făcute din curs și cheia lor de răspunsuri (adesea la final, deci o trimitem la fiecare bucată).
const grileInfo = computed(() => detectGrile(text.value))

// Grilele deja generate din același curs și aceeași parte: le trimitem ca „de evitat” la un set nou.
function avoidFor(part) {
  if (!course.value || part === undefined) return []
  const mine = store.myQuestions.filter((q) => q.courseId === course.value.id)
  const same = mine.filter((q) => q.part === part)
  // grilele vechi nu știu din ce parte sunt; la un curs mic le trimitem pe toate
  const list = same.length ? same : mine.length <= 60 ? mine : []
  return list.slice(0, 120).map((q) => q.text.slice(0, 140))
}

// mode: 'replace' = generare din nou (înlocuiește), 'extra' = încă un set (fără repetări), altfel normal
async function generateChunks(chunks, per, indices = null, mode = '') {
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
  // Duplicatele se caută și printre grilele deja salvate la materie (mai puțin cele care se înlocuiesc acum).
  const replacing = mode === 'replace' && course.value
  const existing = store.questionsFor(subjectId.value).filter((q) => q.source === 'ai' && !(replacing && q.courseId === course.value.id))
  const seenSets = existing.map((q) => wordSet(q.text))
  const seenQ = new Set(existing.map((q) => norm(q.text)))
  const seenC = new Set(store.cardsFor(subjectId.value).filter((c) => c.ai && !(replacing && c.courseId === course.value.id)).map((c) => norm(c.front)))
  let dupes = 0
  const okParts = []
  let next = 0
  let fatal = ''
  async function worker() {
    while (!cancelled && !fatal && next < chunks.length) {
      const i = next++
      let res
      for (let attempt = 0; attempt < 2 && !res; attempt++) {
        try {
          const part = indices ? indices[i] : undefined
          res = await callGenerate(chunks[i], per(chunks[i]), { key: keyForChunk(chunks[i], grileInfo.value.key), avoid: mode === 'replace' ? [] : avoidFor(part) })
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
          const ws = wordSet(q.text)
          // grilele preluate din curs se compară doar exact (două grile reale pot semăna mult)
          if (seenQ.has(norm(q.text)) || (!q.fromSource && seenSets.some((s) => similarSets(s, ws)))) {
            dupes++
            continue
          }
          seenQ.add(norm(q.text))
          seenSets.push(ws)
          q.part = indices ? indices[i] : undefined
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
  if (dupes) out.skipped.unshift(`${dupes} ${dupes === 1 ? 'grilă care exista deja' : 'grile care existau deja'}`)
  lastRun.value = { indices: okParts, full: !!indices && indices.length === aiChunks.value.length, extra: mode === 'extra' }
  // o regenerare completă înlocuiește implicit ce era înainte din curs; continuarea și „încă un set” doar adaugă
  replaceOld.value = mode === 'replace' && previousCount.value > 0
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

// Câte elemente cerem depinde de cât text e în bucată: mai mult text = mai multe grile și cartonașe.
const DENSITY = {
  rapid: { label: 'Rapid', hint: 'cele mai importante', per: 1400 },
  standard: { label: 'Standard', hint: 'echilibrat', per: 700 },
  complet: { label: 'Complet', hint: 'mult din curs', per: 450 },
  maxim: { label: 'Maxim', hint: 'până la 30/parte', per: 300 },
}
const MAX_PER_CALL = 30
const perFor = (chunk) => {
  let q = Math.min(MAX_PER_CALL, Math.max(3, Math.round(chunk.length / DENSITY[store.aiDensity].per)))
  // o parte plină de grile gata făcute: le preia pe acelea; grile noi facem puține, din restul textului
  const ready = grileInChunk(chunk)
  if (ready >= 5) q = Math.min(q, Math.max(3, MAX_PER_CALL - ready))
  return { q, c: Math.min(MAX_PER_CALL, Math.round(q * 1.3)), ready }
}
const estimate = computed(() => {
  const chunks = aiChunks.value.length ? aiChunks.value : parts.value
  return chunks.reduce((t, ch) => {
    const p = perFor(ch)
    return { q: t.q + p.q, c: t.c + p.c, ready: t.ready + p.ready }
  }, { q: 0, c: 0, ready: 0 })
})
// încercarea rapidă: prima parte cu materie din curs (aceeași împărțire ca la tot cursul)
const generateWithAi = () => (aiChunks.value.length ? generateChunks([aiChunks.value[0]], perFor, [0]) : generateChunks([parts.value[0]], perFor))
const allIdx = () => aiChunks.value.map((_, i) => i)
const generateAll = () => generateChunks(aiChunks.value, perFor, allIdx(), course.value?.gen ? 'replace' : '')
// „Încă un set”: cursul are deja grile generate cu regulile de acum
const canExtra = computed(() => !!course.value && previousCount.value > 0 && !oldRules.value)
const generateExtra = () => generateChunks(aiChunks.value, perFor, allIdx(), 'extra')
const generateMissing = () => generateChunks(missingParts.value.map((i) => aiChunks.value[i]), perFor, missingParts.value)
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
  fileError.value = sizeError(file)
  if (fileError.value) return
  reading.value = true
  scanned.value = []
  try {
    readProgress.value = { done: 0, total: 0 }
    const slides = await extractSlides(file, (done, total) => (readProgress.value = { done, total }))
    const kept = slides.filter((sl) => sl.empty || !isBoilerplatePage(slideText(sl)))
    skippedPages.value = slides.length - kept.length
    loadedSlides = kept
    loadedFile = file
    hasFile.value = true
    img.value = { running: false, done: 0, total: 0, result: null, error: '' }
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

// --- Cartonașe și grile cu imaginile din curs (fără AI, totul în telefon) ---
const hasFile = ref(false)
const img = ref({ running: false, done: 0, total: 0, result: null, error: '' })
let imgStop = false
const stopImages = () => (imgStop = true)
async function runImages() {
  const c = course.value
  if (!c || !loadedFile) return
  img.value = { running: true, done: 0, total: 0, result: null, error: '' }
  imgStop = false
  try {
    const found = await findImageSlides(loadedFile, loadedSlides, {
      onProgress: (done, total) => (img.value = { ...img.value, done, total }),
      shouldStop: () => imgStop,
    })
    const saved = []
    for (const f of found) {
      if (!(await putImage(`${c.id}:${f.index}`, f.blob))) continue
      f.hasFull = f.full ? await putImage(`${c.id}:${f.index}:full`, f.full) : false
      saved.push(f)
    }
    const items = buildImageItems(saved, shuffle).map((it) => ({ ...it, imageKey: `${c.id}:${it.index}`, fullKey: saved.find((f) => f.index === it.index)?.hasFull ? `${c.id}:${it.index}:full` : null }))
    store.addImageItems(c.id, subjectId.value, items)
    img.value = { ...img.value, result: { cards: items.length, questions: items.filter((i) => i.question).length } }
  } catch (err) {
    img.value = { ...img.value, error: err.message || 'Nu am putut citi imaginile.' }
  } finally {
    img.value = { ...img.value, running: false }
  }
}

async function saveAsCourse(file) {
  const c = { id: newCourseId(), name: file.name.replace(/\.(pdf|pptx)$/i, ''), subjectId: subjectId.value, text: text.value, createdAt: Date.now(), gen: null }
  if (await putCourse(c)) {
    store.registerCourse(c.id, c.name, c.subjectId, c.createdAt)
    course.value = c
    courseNote.value = 'Am păstrat cursul în telefon. Îl găsești oricând la „Cursurile mele” de pe Acasă, fără să-l mai încarci.'
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
    lastRun.value = { indices: [], full: false, chatbot: true }
    replaceOld.value = false
    phase.value = 'review'
  } catch (err) {
    error.value = err.message
  }
}

const setAll = (list, v) => list.forEach((x) => (x.keep = v))
const keptQ = computed(() => result.value?.questions.filter((q) => q.keep) ?? [])
const keptC = computed(() => result.value?.cards.filter((c) => c.keep) ?? [])
// Pe telefon, sute de carduri deodată încetinesc ecranul: arătăm câte 60 (selecția se aplică oricum tuturor).
const qShown = ref(60)
const cShown = ref(60)
const keepSummary = ref(true)
const summaryHtml = computed(() => DOMPurify.sanitize(marked.parse(result.value?.summary ?? '')))
const summaryTitle = ref('')
const summaryOn = computed(() => !!result.value?.summary && keepSummary.value)

async function save() {
  const summary = summaryOn.value ? { title: summaryTitle.value.trim() || `Rezumat AI – ${subjectName.value}`, content: result.value.summary } : null
  const c = course.value
  const fromCourse = c && lastRun.value.indices.length
  store.addAiContent(subjectId.value, keptQ.value, keptC.value, summary, c && (fromCourse || lastRun.value.chatbot) ? { courseId: c.id, promptVersion: PROMPT_VERSION, replace: replaceOld.value } : {})
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
        <h1 class="text-2xl font-black">📚 Încarcă un curs</h1>
        <p class="text-sm font-semibold text-muted">PDF sau PPTX → grile, cartonașe și rezumat. Cursul rămâne pe telefonul tău.</p>
      </div>
    </header>

    <template v-if="phase === 'edit'">
      <section v-if="courses.length" class="card space-y-2 p-5">
        <h2 class="flex items-baseline justify-between font-black">📚 Cursurile tale <RouterLink to="/cursuri" class="text-sm text-brand-600">Deschide lista ›</RouterLink></h2>
        <p class="text-xs font-semibold text-muted">Păstrate doar pe acest telefon. Le poți genera din nou fără să le mai încarci.</p>
        <div v-for="c in courses" :key="c.id" class="flex items-center gap-2 rounded-xl border-2 p-3" :class="course?.id === c.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200'">
          <button class="min-w-0 flex-1 text-left" @click="openCourse(c)">
            <span class="block truncate font-extrabold">{{ c.name }}</span>
            <span class="block text-xs font-bold text-muted">{{ nameOfSubject(c.subjectId) }} · {{ partsOf(c) }} {{ partsOf(c) === 1 ? 'parte' : 'părți' }} · <span :class="courseStatus(c).tone">{{ courseStatus(c).label }}</span></span>
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
          <select id="subject" v-model="subjectId" class="input" :class="!subjectId && 'border-amber-400'">
            <option value="" disabled>Alege materia cursului…</option>
            <optgroup v-for="y in years" :key="y.id" :label="y.name">
              <option v-for="s in subjects.filter((x) => x.years[0] === y.id)" :key="s.id" :value="s.id">{{ s.emoji }} {{ s.name }}</option>
            </optgroup>
          </select>
        </div>
        <p v-if="!subjectId" class="text-sm font-bold text-amber-700">Alege întâi materia, ca grilele să ajungă unde trebuie.</p>
        <label class="btn btn-white block w-full cursor-pointer text-center" :class="(reading || !subjectId) && 'pointer-events-none opacity-60'">
          {{ reading ? `⏳ Citesc ${readProgress.total ? `pagina ${readProgress.done} din ${readProgress.total}` : 'fișierul'}…` : '📤 Alege un PDF sau PPTX' }}
          <input type="file" accept=".pptx,.pdf" class="hidden" @change="onFile" />
        </label>
        <p class="text-xs font-semibold text-muted">PDF până la {{ MAX_MB.pdf }} MB (cam 300 de pagini pline) · PPTX până la {{ MAX_MB.pptx }} MB. Fișierul nu pleacă de pe telefon.</p>
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
        <div v-if="course && hasFile" class="space-y-2 rounded-xl bg-violet-50 p-3">
          <p class="text-sm font-black text-violet-800">🩻 Cartonașe cu imaginile din curs</p>
          <p class="text-xs font-semibold text-violet-800">Pentru slide-urile cu poze (radiografii, scheme, preparate): pe față imaginea fără titlu, pe spate titlul pus de profesor. Grilele „Ce arată imaginea?” au ca variante greșite alte titluri din curs. Fără AI, gratuit, rămâne în telefon.</p>
          <div v-if="img.running" class="space-y-2">
            <div class="h-3 overflow-hidden rounded-full bg-white">
              <div class="h-full rounded-full bg-violet-500 transition-all" :style="{ width: `${(img.done / Math.max(img.total, 1)) * 100}%` }"></div>
            </div>
            <p class="text-sm font-bold text-violet-800">Slide {{ img.done }} din {{ img.total }}</p>
            <button class="btn btn-white w-full" @click="stopImages">Oprește</button>
          </div>
          <template v-else-if="img.result">
            <p class="text-sm font-bold text-violet-800">
              {{ img.result.cards ? `Am făcut ${img.result.cards} cartonașe și ${img.result.questions} grile cu imagini.` : 'N-am găsit slide-uri cu imagini și titlu clar.' }}
            </p>
            <RouterLink v-if="img.result.cards" :to="`/flashcards/${subjectId}?curs=${course.id}`" class="btn btn-primary block w-full text-center">🃏 Repetă cu imaginile</RouterLink>
          </template>
          <button v-else class="btn btn-white w-full" @click="runImages">🩻 Fă cartonașe din imagini</button>
          <p v-if="img.error" class="text-sm font-bold text-red-600">{{ img.error }}</p>
        </div>
        <p v-if="skippedPages" class="text-sm font-semibold text-muted">Am lăsat deoparte {{ skippedPages }} {{ skippedPages === 1 ? 'pagină administrativă' : 'pagini administrative' }} (drepturi de autor, titlu, cuprins).</p>
        <p class="rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800">Folosește doar materiale pe care ai voie să le procesezi. Rezultatele rămân pe telefonul tău, dar textul se trimite la un serviciu de AI.</p>
        <div v-if="isLong" class="flex items-center gap-3 rounded-xl bg-gray-100 p-3">
          <p class="flex-1 text-sm font-bold text-muted">Textul extras are {{ text.length.toLocaleString('ro-RO') }} de caractere ({{ aiChunks.length }} părți). Nu îl afișăm întreg, ca să meargă repede.</p>
          <button class="shrink-0 text-sm font-bold text-brand-600" @click="text = ''; course = null">Șterge</button>
        </div>
        <textarea v-else v-model="text" rows="6" class="input" placeholder="…sau lipește aici textul din curs" @input="onTextInput"></textarea>
        <p v-if="parts.length > 1 && !store.aiCode" class="text-sm font-semibold text-muted">
          Textul e lung, așa că îl împărțim în {{ parts.length }} părți ca să încapă într-un chatbot gratuit.
        </p>
      </section>

      <section v-if="prompt && store.aiCode" class="card space-y-3 border-brand-500 p-5">
        <h2 class="font-black">2. Generează cu AI <span class="chip bg-brand-100 text-brand-700">cod: {{ store.aiCode.label }}</span></h2>
        <p class="text-sm font-semibold text-muted">
          Textul de mai sus se trimite la un serviciu de AI, care îți întoarce grile, cartonașe și un rezumat. Nu trimite materiale pe care nu ai voie să le dai mai departe.
        </p>
        <p v-if="aiError" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ aiError }}</p>
        <div class="space-y-2">
          <p class="label">Câte grile și cartonașe</p>
          <div class="grid grid-cols-2 gap-2">
            <button v-for="(d, id) in DENSITY" :key="id" class="btn flex-col gap-0 px-2 py-2 text-sm" :class="store.aiDensity === id ? 'btn-primary' : 'btn-white'" @click="store.aiDensity = id">
              {{ d.label }}<span class="text-[10px] font-bold normal-case opacity-80">{{ d.hint }}</span>
            </button>
          </div>
          <p class="text-sm font-bold text-muted">≈ {{ estimate.q }} grile noi și {{ estimate.c }} cartonașe din {{ aiChunks.length > 1 ? 'tot cursul' : 'text' }}, înainte de filtrare.</p>
          <p v-if="grileInfo.hasGrile" class="rounded-xl bg-sky-50 px-3 py-2 text-sm font-bold text-sky-800">
            📄 Cursul are deja grile (~{{ estimate.ready }}){{ Object.keys(grileInfo.key).length ? `, cu cheie de răspunsuri pentru ${Object.keys(grileInfo.key).length}` : '' }}. Le preiau exact cum sunt, cu răspunsurile din curs; cele fără răspuns în text sunt lăsate deoparte.
          </p>
        </div>
        <p v-if="remainingToday !== null && aiChunks.length > remainingToday" class="rounded-xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
          Cursul are {{ aiChunks.length }} părți, iar azi mai ai {{ remainingToday }} generări. Se oprește singur când se termină; mâine apeși „Continuă” și face restul, fără să încarci din nou fișierul.
        </p>
        <p v-if="oldRules" class="rounded-xl bg-amber-50 px-3 py-2 text-sm font-bold text-amber-800">
          Între timp am îmbunătățit regulile AI-ului (grile luate strict din curs, fără duplicate). Poți genera din nou cursul; la salvare, ce era generat înainte din el se înlocuiește.
        </p>
        <button v-if="!generating && missingParts.length && missingParts.length < aiChunks.length" class="btn btn-primary w-full" @click="generateMissing">
          ▶️ Continuă: generează restul ({{ missingParts.length }} {{ missingParts.length === 1 ? 'parte' : 'părți' }})
        </button>
        <button v-if="!generating && canExtra" class="btn btn-primary w-full" @click="generateExtra">
          ➕ Încă un set de grile și cartonașe (fără repetări)
        </button>
        <div v-if="generating && progress.total > 1" class="space-y-2">
          <div class="h-3 overflow-hidden rounded-full bg-gray-200">
            <div class="h-full rounded-full bg-brand-500 transition-all" :style="{ width: `${(progress.done / progress.total) * 100}%` }"></div>
          </div>
          <p class="text-sm font-bold text-muted">Partea {{ Math.min(progress.done + 1, progress.total) }} din {{ progress.total }} · ține ecranul deschis</p>
          <button class="btn btn-white w-full" @click="cancelAll">Oprește și păstrează ce s-a generat</button>
        </div>
        <button v-else class="btn w-full" :class="(missingParts.length && missingParts.length < aiChunks.length) || canExtra ? 'btn-white' : 'btn-primary'" :disabled="generating" @click="aiChunks.length > 1 || course ? generateAll() : generateWithAi()">
          {{ generating ? '⏳ Generez… (până la un minut)' : course?.gen ? `🔁 Generează din nou tot cursul (${aiChunks.length} ${aiChunks.length === 1 ? 'parte' : 'părți'})` : aiChunks.length > 1 ? `✨ Generează din tot cursul (${aiChunks.length} părți)` : '✨ Generează grile și cartonașe' }}
        </button>
        <button v-if="aiChunks.length > 1 && !generating" class="btn btn-white w-full text-sm" @click="generateWithAi">Doar prima parte (încercare rapidă)</button>
        <p v-if="aiChunks.length > 1" class="text-xs font-semibold text-muted">Tot cursul = {{ aiChunks.length }} apeluri, cam {{ Math.ceil(aiChunks.length / 3) }}–{{ Math.ceil(aiChunks.length / 3) * 2 }} minute. La final alegi ce păstrezi; grilele fără citat din text sunt omise.</p>
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
          <input v-model="summaryTitle" class="w-full rounded-xl border-2 border-gray-200 px-3 py-2 text-sm font-bold" :placeholder="`Rezumat AI – ${subjectName}`" />
          <div class="prose-med max-h-64 overflow-y-auto text-sm" v-html="summaryHtml"></div>
        </div>
      </section>

      <section v-if="result.questions.length" class="space-y-2">
        <div class="flex items-baseline justify-between">
          <h2 class="font-black">Grile ({{ keptQ.length }}/{{ result.questions.length }})</h2>
          <button class="text-sm font-bold text-brand-600" @click="setAll(result.questions, keptQ.length !== result.questions.length)">{{ keptQ.length === result.questions.length ? 'Deselectează tot' : 'Selectează tot' }}</button>
        </div>
        <div v-for="(q, i) in result.questions.slice(0, qShown)" :key="i" class="card space-y-1 p-4" :class="!q.keep && 'opacity-50'">
          <label class="flex items-start gap-3">
            <input v-model="q.keep" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
            <span class="font-extrabold"><span v-if="q.fromSource" class="chip mr-1 bg-sky-100 align-middle text-[10px] text-sky-700">📄 din curs</span>{{ q.text }}</span>
          </label>
          <ul class="pl-8 text-sm font-semibold">
            <li v-for="(o, j) in q.options" :key="j" :class="q.answer.includes(j) ? 'text-brand-700' : 'text-muted'">
              {{ q.answer.includes(j) ? '✓' : '·' }} {{ o }}
            </li>
          </ul>
          <p v-if="q.explanation" class="pl-8 text-sm font-semibold text-muted">💡 {{ q.explanation }}</p>
        </div>
      <button v-if="result.questions.length > qShown" class="btn btn-white w-full" @click="qShown += 60">Arată mai multe grile ({{ result.questions.length - qShown }})</button>
      </section>

      <section v-if="result.cards.length" class="space-y-2">
        <div class="flex items-baseline justify-between">
          <h2 class="font-black">Cartonașe ({{ keptC.length }}/{{ result.cards.length }})</h2>
          <button class="text-sm font-bold text-brand-600" @click="setAll(result.cards, keptC.length !== result.cards.length)">{{ keptC.length === result.cards.length ? 'Deselectează tot' : 'Selectează tot' }}</button>
        </div>
        <label v-for="(c, i) in result.cards.slice(0, cShown)" :key="i" class="card flex items-start gap-3 p-4" :class="!c.keep && 'opacity-50'">
          <input v-model="c.keep" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
          <span class="text-sm"><span class="block font-extrabold">{{ c.front }}</span><span class="block font-semibold text-muted">{{ c.back }}</span></span>
        </label>
      <button v-if="result.cards.length > cShown" class="btn btn-white w-full" @click="cShown += 60">Arată mai multe cartonașe ({{ result.cards.length - cShown }})</button>
      </section>

      <label v-if="course && lastRun.indices.length && previousCount" class="card flex items-start gap-3 p-4">
        <input v-model="replaceOld" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
        <span class="text-sm">
          <span class="block font-extrabold">Înlocuiește ce am generat înainte din „{{ course.name }}”</span>
          <span class="block font-semibold text-muted">{{ previousCount }} elemente vechi. Debifat, cele noi se adaugă lângă ele.</span>
        </span>
      </label>

      <div class="grid gap-2">
        <button class="btn btn-primary w-full" :disabled="!keptQ.length && !keptC.length && !summaryOn" @click="save">Salvează {{ keptQ.length + keptC.length + (summaryOn ? 1 : 0) }} în {{ subjectName }}</button>
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
