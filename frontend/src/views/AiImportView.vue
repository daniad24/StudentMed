<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import { AI_IMPORT } from '../lib/flags'
import { buildPrompt, parseAiResponse, splitText } from '../lib/aiimport'
import { extractSlides } from '../lib/slides'
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

const generating = ref(false)
const aiError = ref('')
async function generateWithAi() {
  aiError.value = ''
  generating.value = true
  try {
    const r = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: store.aiCode.code, text: parts.value[part.value] ?? parts.value[0], subjectName: subject.value.name, questions: 8, cards: 8 }),
    })
    const data = await r.json().catch(() => ({}))
    if (r.status === 401) store.clearAiCode()
    if (!r.ok) throw new Error(data.error || `Eroare ${r.status}`)
    result.value = parseAiResponse(data.raw)
    phase.value = 'review'
  } catch (e) {
    aiError.value = e.message === 'Failed to fetch' ? 'Nu am putut contacta serverul. Verifică internetul.' : e.message
  } finally {
    generating.value = false
  }
}

const raw = ref('')
const result = ref(null)
const error = ref('')
const saved = ref(0)
const phase = ref('edit') // edit | review | saved

async function onFile(e) {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (!file) return
  fileError.value = ''
  reading.value = true
  try {
    const slides = await extractSlides(file)
    text.value = slides.map((s) => [s.title, ...s.lines.map((l) => l.text)].filter(Boolean).join('\n')).join('\n\n')
    part.value = 0
    if (!text.value.trim()) fileError.value = 'Nu am găsit text în fișier.'
  } catch (err) {
    fileError.value = err.message || 'Nu am putut citi fișierul.'
  } finally {
    reading.value = false
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

const keptQ = computed(() => result.value?.questions.filter((q) => q.keep) ?? [])
const keptC = computed(() => result.value?.cards.filter((c) => c.keep) ?? [])

function save() {
  store.addAiContent(subjectId.value, keptQ.value, keptC.value)
  saved.value = keptQ.value.length + keptC.value.length
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
      <section class="card space-y-3 p-5">
        <h2 class="font-black">1. Textul din curs</h2>
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
        <textarea v-model="text" rows="6" class="input" placeholder="…sau lipește aici textul din curs"></textarea>
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
        <button class="btn btn-primary w-full" :disabled="generating" @click="generateWithAi">{{ generating ? '⏳ Generez… (până la un minut)' : '✨ Generează grile și cartonașe' }}</button>
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
      <p v-if="result.skipped.length" class="rounded-xl bg-gray-100 px-3 py-2 text-sm font-semibold text-muted">
        Am omis {{ result.skipped.length }}: {{ result.skipped.slice(0, 4).join(' · ') }}
      </p>

      <section v-if="result.questions.length" class="space-y-2">
        <h2 class="font-black">Grile ({{ keptQ.length }}/{{ result.questions.length }})</h2>
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
        <h2 class="font-black">Cartonașe ({{ keptC.length }}/{{ result.cards.length }})</h2>
        <label v-for="(c, i) in result.cards" :key="i" class="card flex items-start gap-3 p-4" :class="!c.keep && 'opacity-50'">
          <input v-model="c.keep" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
          <span class="text-sm"><span class="block font-extrabold">{{ c.front }}</span><span class="block font-semibold text-muted">{{ c.back }}</span></span>
        </label>
      </section>

      <div class="grid gap-2">
        <button class="btn btn-primary w-full" :disabled="!keptQ.length && !keptC.length" @click="save">Salvează {{ keptQ.length + keptC.length }} în {{ subject.name }}</button>
        <button class="btn btn-white w-full" @click="phase = 'edit'">Înapoi</button>
      </div>
    </template>

    <section v-else class="card space-y-3 p-6 text-center pop-in">
      <p class="text-5xl">🎉</p>
      <p class="text-xl font-black">Am salvat {{ saved }} elemente</p>
      <p class="text-sm font-semibold text-muted">Le găsești în grilele și cartonașele materiei, cu eticheta „AI”.</p>
      <RouterLink :to="`/materie/${subjectId}`" class="btn btn-primary w-full">Deschide materia</RouterLink>
      <button class="btn btn-white w-full" @click="again">{{ part + 1 < parts.length ? 'Următoarea parte' : 'Alt text' }}</button>
      <button class="mt-2 text-xs font-bold text-muted" @click="store.clearAiContent(); phase = 'edit'">Șterge tot ce am importat cu AI</button>
    </section>
  </div>
</template>
