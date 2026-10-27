<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import { correctTexts, formatTime, isCorrectSelection, prepareQuestion, shuffle } from '../lib/quiz'
import BackButton from '../components/BackButton.vue'
import QuestionCard from '../components/QuestionCard.vue'
import ReportDialog from '../components/ReportDialog.vue'
import SourcePicker from '../components/SourcePicker.vue'

const SECONDS_PER_QUESTION = 18 // 10 grile = 3 minute, ca „Pauza de gardă” dintotdeauna
const SIZES = [10, 20, 50, 0] // 0 = toate

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = subjects.find((s) => s.id === route.params.subjectId)
// ?curs=<id>: grile doar din cursul încărcat de student
const cursId = route.query.curs ? String(route.query.curs) : ''
const block = route.query.bloc ? store.targetSession?.blocks.find((b) => b.key === route.query.bloc) : null

// --- Alegerea grilelor (ecranul de început) ---
const topics = computed(() => store.topicsFor(subject.id).filter((t) => t.questions > 0))
const pickedTopics = ref([])
const toggleTopic = (id) => (pickedTopics.value = pickedTopics.value.includes(id) ? pickedTopics.value.filter((x) => x !== id) : [...pickedTopics.value, id])
// Din ce surse (documente) vin grilele; alegerea se ține minte pe materie.
const sources = computed(() => store.sourcesFor(subject.id, 'questions'))
const prefs = store.quizPrefs
if (cursId) prefs.sources = { ...prefs.sources, [subject.id]: ['c:' + cursId] }
const pickedSources = computed({
  get: () => prefs.sources?.[subject.id] ?? null,
  set: (v) => (prefs.sources = { ...prefs.sources, [subject.id]: v }),
})
const activeSources = computed(() => {
  const keys = (pickedSources.value ?? []).filter((k) => sources.value.some((s) => s.key === k))
  return keys.length ? new Set(keys) : null
})
const stetoOn = computed(() => !activeSources.value || activeSources.value.has('steto'))
const bySource = computed(() => store.questionsFor(subject.id).filter((q) => !activeSources.value || activeSources.value.has(store.sourceKeyOf(q))))
const typeCounts = computed(() => ({
  all: bySource.value.length,
  single: bySource.value.filter((q) => q.type !== 'multi').length,
  multi: bySource.value.filter((q) => q.type === 'multi').length,
}))
const pool = computed(() => {
  let list = bySource.value
  if (prefs.qtype === 'single') list = list.filter((q) => q.type !== 'multi')
  else if (prefs.qtype === 'multi') list = list.filter((q) => q.type === 'multi')
  if (pickedTopics.value.length && stetoOn.value) {
    // subiectele țin doar de grilele Steto; grilele din cursuri rămân în listă
    const ids = store.idsInTopics(subject.id, pickedTopics.value)
    list = list.filter((q) => store.sourceKeyOf(q) !== 'steto' || ids.has(q.id))
  }
  return list
})
const sourceSummary = computed(() => (activeSources.value ? [...activeSources.value].map((k) => sources.value.find((s) => s.key === k)?.label).filter(Boolean).join(' + ') : 'toate sursele'))
const starredPool = computed(() => pool.value.filter((q) => store.starred.includes(q.id)))
const last = computed(() => store.lastAnswers(subject.id))
const wrongPool = computed(() => pool.value.filter((q) => last.value[q.id] === false))
const unseenCount = computed(() => pool.value.filter((q) => last.value[q.id] === undefined).length)

function pickQuestions() {
  const { size, mode } = prefs
  let list
  if (mode === 'wrong') list = shuffle(wrongPool.value)
  else if (mode === 'starred') list = shuffle(starredPool.value)
  else if (mode === 'new') {
    // nevăzute, apoi greșite, apoi cele știute
    const rank = (q) => (last.value[q.id] === undefined ? 0 : last.value[q.id] === false ? 1 : 2)
    list = shuffle(pool.value).sort((a, b) => rank(a) - rank(b))
  } else list = shuffle(pool.value)
  return size ? list.slice(0, size) : list
}
const plannedCount = computed(() => {
  const n = prefs.mode === 'wrong' ? wrongPool.value.length : prefs.mode === 'starred' ? starredPool.value.length : pool.value.length
  return prefs.size ? Math.min(prefs.size, n) : n
})

// --- Starea quiz-ului ---
const phase = ref(block ? 'running' : 'setup') // setup | running | finished
const questions = ref([])
const index = ref(0)
const selected = ref([])
const checked = ref(false)
const answers = ref([])
const usedSeconds = ref(0)
const secondsLeft = ref(0)
const timed = ref(false) // cronometrul pentru quiz-ul curent
const paused = ref(false)
const timeUp = ref(false)
const streakBefore = store.currentStreak

const finished = computed(() => phase.value === 'finished')
const current = computed(() => questions.value[index.value])
const score = computed(() => answers.value.filter((a) => a.correct).length)
const lastAnswer = computed(() => answers.value[answers.value.length - 1])
const elapsed = computed(() => formatTime(usedSeconds.value))

// Quiz lăsat la jumătate în materia asta
function retryWrong() {
  begin(shuffle(wrong.value.map((a) => store.questionsFor(subject.id).find((q) => q.id === a.question.id)).filter(Boolean)), { timed: false })
}

const sessKey = cursId ? `${subject.id}#${cursId}` : subject.id
const savedSession = computed(() => (block ? null : store.quizSessions[sessKey] ?? null))

function begin(list, opts = {}) {
  questions.value = list.map(prepareQuestion)
  index.value = opts.index ?? 0
  answers.value = opts.answers ?? []
  usedSeconds.value = opts.usedSeconds ?? 0
  timed.value = opts.timed ?? (!block && store.timerOn)
  secondsLeft.value = opts.secondsLeft ?? list.length * SECONDS_PER_QUESTION
  selected.value = []
  checked.value = false
  paused.value = false
  timeUp.value = false
  phase.value = questions.value.length ? 'running' : 'setup'
  saveSession()
}

function startNew() {
  if (savedSession.value) dropSession()
  begin(pickQuestions())
}

function resume() {
  const s = savedSession.value
  const byId = Object.fromEntries(store.questionsFor(subject.id).map((q) => [q.id, q]))
  const list = s.ids.map((id) => byId[id]).filter(Boolean)
  const done = s.answers.filter((a) => byId[a.qid])
  begin(list, {
    index: Math.min(done.length, list.length - 1),
    answers: done.map((a) => ({ question: prepareQuestion(byId[a.qid]), chosen: a.chosen, correct: a.correct })),
    usedSeconds: s.usedSeconds,
    secondsLeft: s.secondsLeft,
    timed: s.timed,
  })
}

// Se salvează după fiecare răspuns, ca la revenire să continui de unde ai rămas.
function saveSession() {
  if (block || phase.value !== 'running') return
  store.quizSessions = {
    ...store.quizSessions,
    [sessKey]: {
      ids: questions.value.map((q) => q.id),
      answers: answers.value.map((a) => ({ qid: a.question.id, chosen: a.chosen, correct: a.correct })),
      usedSeconds: usedSeconds.value,
      secondsLeft: secondsLeft.value,
      timed: timed.value,
      savedAt: Date.now(),
    },
  }
}
function dropSession() {
  const rest = { ...store.quizSessions }
  delete rest[sessKey]
  store.quizSessions = rest
}

if (block) begin(block.questionIds.map((id) => store.questionsFor(subject.id).find((q) => q.id === id)).filter(Boolean), { timed: false })

// --- Cronometru: merge doar cât ești în quiz și aplicația e deschisă ---
const timer = setInterval(() => {
  if (phase.value !== 'running' || paused.value || timeUp.value || document.hidden) return
  usedSeconds.value++
  if (!timed.value) return
  secondsLeft.value--
  if (secondsLeft.value <= 0) timeUp.value = true
}, 1000)
// la ieșire din aplicație (alt tab, telefon blocat) salvăm progresul
const onHide = () => document.hidden && saveSession()
onMounted(() => document.addEventListener('visibilitychange', onHide))
onUnmounted(() => {
  clearInterval(timer)
  document.removeEventListener('visibilitychange', onHide)
  saveSession()
})

function toggleTimer() {
  timed.value = !timed.value
  store.timerOn = timed.value
}
function continueWithoutTime() {
  timed.value = false
  timeUp.value = false
}

function check() {
  if (!selected.value.length) return
  checked.value = true
  const q = current.value
  const correct = isCorrectSelection(q, selected.value)
  answers.value.push({ question: q, chosen: selected.value.map((i) => q.shuffled[i].text), correct })
  store.recordAnswer(q, correct)
  saveSession()
}

function next() {
  if (index.value + 1 >= questions.value.length) return finish()
  index.value++
  selected.value = []
  checked.value = false
  reported.value = false
  saveSession()
}

function finish() {
  if (finished.value) return
  phase.value = 'finished'
  timeUp.value = false
  paused.value = false
  if (!block) dropSession()
  if (answers.value.length) store.recordQuiz(subject.id, score.value, answers.value.length)
  if (block) store.completeBlock(block.key)
}

function exitQuiz() {
  saveSession()
  router.push(block ? '/tinta/plan' : cursId ? '/cursuri' : `/materie/${subject.id}?tab=grile`)
}

function restart() {
  if (block) return router.push('/tinta/plan')
  phase.value = 'setup'
}

const total = computed(() => answers.value.length || questions.value.length)
const resultEmoji = computed(() => {
  const ratio = score.value / Math.max(total.value, 1)
  if (ratio === 1) return '🏆'
  if (ratio >= 0.7) return '🎉'
  if (ratio >= 0.4) return '💪'
  return '📖'
})
const wrong = computed(() => answers.value.filter((a) => !a.correct))

const reporting = ref(false)
const reported = ref(false)
function onReport(reason) {
  store.report('grilă', current.value.id, current.value.text, reason)
  reporting.value = false
  reported.value = true
}

const sizeLabel = (n) => (n ? String(n) : `Toate (${prefs.mode === 'wrong' ? wrongPool.value.length : prefs.mode === 'starred' ? starredPool.value.length : pool.value.length})`)
const ago = (t) => {
  const min = Math.round((Date.now() - t) / 60000)
  return min < 60 ? `acum ${Math.max(min, 1)} min` : min < 1440 ? `acum ${Math.round(min / 60)} h` : `acum ${Math.round(min / 1440)} zile`
}
</script>

<template>
  <div class="flex min-h-[92dvh] flex-col">
    <!-- Alegerea grilelor -->
    <template v-if="phase === 'setup'">
      <header class="flex items-center gap-3">
        <BackButton :to="cursId ? '/cursuri' : `/materie/${subject.id}?tab=grile`" history />
        <div>
          <h1 class="text-2xl font-black">{{ subject.emoji }} Grile</h1>
          <p class="text-sm font-semibold text-muted">{{ subject.name }}</p>
        </div>
      </header>

      <section v-if="savedSession" class="card mt-5 space-y-3 border-sky-400 p-5">
        <p class="font-black">⏸ Ai un quiz neterminat</p>
        <p class="text-sm font-semibold text-muted">
          Ai răspuns la {{ savedSession.answers.length }} din {{ savedSession.ids.length }} grile · {{ ago(savedSession.savedAt) }}
        </p>
        <button class="btn btn-blue w-full" @click="resume">▶️ Continuă de unde ai rămas</button>
      </section>

      <section class="card mt-4 space-y-4 p-5">
        <div v-if="sources.length > 1">
          <p class="label">Din ce document</p>
          <SourcePicker v-model="pickedSources" :sources="sources" />
        </div>

        <div>
          <p class="label">Tipul grilelor</p>
          <div class="grid grid-cols-3 gap-2">
            <button class="btn flex-col gap-0 px-1 py-2 text-sm" :class="prefs.qtype === 'all' ? 'btn-blue' : 'btn-white'" @click="prefs.qtype = 'all'">
              Amestecate<span class="text-[10px] font-bold normal-case opacity-80">{{ typeCounts.all }}</span>
            </button>
            <button class="btn flex-col gap-0 px-1 py-2 text-sm" :class="prefs.qtype === 'single' ? 'btn-blue' : 'btn-white'" :disabled="!typeCounts.single" @click="prefs.qtype = 'single'">
              Simplu<span class="text-[10px] font-bold normal-case opacity-80">un răspuns · {{ typeCounts.single }}</span>
            </button>
            <button class="btn flex-col gap-0 px-1 py-2 text-sm" :class="prefs.qtype === 'multi' ? 'btn-blue' : 'btn-white'" :disabled="!typeCounts.multi" @click="prefs.qtype = 'multi'">
              Multiplu<span class="text-[10px] font-bold normal-case opacity-80">mai multe · {{ typeCounts.multi }}</span>
            </button>
          </div>
        </div>

        <div>
          <p class="label">Câte grile</p>
          <div class="grid grid-cols-4 gap-2">
            <button v-for="n in SIZES" :key="n" class="btn px-2 py-2 text-sm" :class="prefs.size === n ? 'btn-blue' : 'btn-white'" @click="prefs.size = n">
              {{ sizeLabel(n) }}
            </button>
          </div>
        </div>

        <div>
          <p class="label">Ce grile</p>
          <div class="grid gap-2">
            <button class="btn justify-start text-left text-sm" :class="prefs.mode === 'mix' ? 'btn-blue' : 'btn-white'" @click="prefs.mode = 'mix'">🔀 Amestecate</button>
            <button class="btn justify-start text-left text-sm" :class="prefs.mode === 'new' ? 'btn-blue' : 'btn-white'" @click="prefs.mode = 'new'">
              🆕 Întâi cele nevăzute <span class="opacity-70">({{ unseenCount }})</span>
            </button>
            <button class="btn justify-start text-left text-sm" :class="prefs.mode === 'wrong' ? 'btn-blue' : 'btn-white'" :disabled="!wrongPool.length" @click="prefs.mode = 'wrong'">
              ❌ Doar cele greșite <span class="opacity-70">({{ wrongPool.length }})</span>
            </button>
            <button class="btn justify-start text-left text-sm" :class="prefs.mode === 'starred' ? 'btn-blue' : 'btn-white'" :disabled="!starredPool.length" @click="prefs.mode = 'starred'">
              ⭐ Doar cele marcate <span class="opacity-70">({{ starredPool.length }})</span>
            </button>
          </div>
        </div>

        <div v-if="topics.length && stetoOn">
          <p class="label">Subiect <span class="font-semibold text-muted">(opțional)</span></p>
          <div class="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
            <button
              v-for="t in topics"
              :key="t.id"
              class="chip shrink-0 border-2 py-1.5 text-sm"
              :class="pickedTopics.includes(t.id) ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-gray-200 bg-surface text-muted'"
              @click="toggleTopic(t.id)"
            >
              {{ t.name }} <span class="opacity-60">{{ t.questions }}</span>
            </button>
          </div>
        </div>


        <label class="flex items-center gap-3">
          <input v-model="store.timerOn" type="checkbox" class="h-6 w-6 accent-sky-600" />
          <span class="flex-1 text-sm">
            <span class="block font-extrabold">Cu cronometru</span>
            <span class="block font-semibold text-muted">
              {{ store.timerOn ? `${formatTime(plannedCount * SECONDS_PER_QUESTION)} min pentru ${plannedCount} grile. La final poți continua fără timp.` : 'Fără limită de timp' }}
            </span>
          </span>
        </label>
      </section>

      <div class="flex-1"></div>
      <p class="mt-4 text-center text-xs font-bold text-muted">Din: {{ sourceSummary }}{{ prefs.qtype === 'single' ? ' · doar complement simplu' : prefs.qtype === 'multi' ? ' · doar complement multiplu' : '' }}</p>
      <button class="btn btn-blue mt-2 w-full" :disabled="!plannedCount" @click="startNew">
        {{ plannedCount ? `Începe · ${plannedCount} ${plannedCount === 1 ? 'grilă' : 'grile'}` : 'Nu sunt grile pentru alegerea asta' }}
      </button>
    </template>

    <template v-else>
      <header class="flex items-center gap-3">
        <BackButton v-if="finished" icon="close" :to="block ? '/tinta/plan' : cursId ? '/cursuri' : `/materie/${subject.id}?tab=grile`" />
        <button v-else class="btn btn-white px-3 py-2" aria-label="Pauză" @click="paused = true">⏸</button>
        <div class="h-4 flex-1 overflow-hidden rounded-full bg-gray-200">
          <div
            class="h-full rounded-full bg-sky-500 transition-all duration-500"
            :style="{ width: `${((index + (checked || finished ? 1 : 0)) / questions.length) * 100}%` }"
          ></div>
        </div>
        <button
          v-if="!block && !finished"
          class="chip text-sm"
          :class="!timed ? 'bg-gray-100 text-muted' : secondsLeft <= 30 ? 'bg-red-100 text-red-600' : 'bg-sky-100 text-sky-700'"
          :aria-label="timed ? 'Oprește cronometrul' : 'Pornește cronometrul'"
          @click="toggleTimer"
        >
          {{ timed ? `⏱ ${formatTime(Math.max(secondsLeft, 0))}` : '⏱ Fără timp' }}
        </button>
      </header>

      <!-- Întrebare -->
      <template v-if="!finished">
        <div class="mt-5 mb-2 flex items-center gap-2">
          <p class="flex-1 text-sm font-extrabold text-muted">
            {{ subject.emoji }} {{ subject.name }} · Întrebarea {{ index + 1 }} din {{ questions.length }}
          
            <span v-if="current.courseId" class="mt-0.5 block truncate text-xs font-bold text-brand-700">{{ store.sourceLabel(store.sourceKeyOf(current)) }}</span>
          </p>
          <button
            class="px-2 text-2xl leading-none"
            :class="store.starred.includes(current.id) ? '' : 'opacity-30 grayscale'"
            :aria-label="store.starred.includes(current.id) ? 'Scoate marcajul' : 'Marchează grila pentru revăzut'"
            @click="store.toggleStar(current.id)"
          >⭐</button>
        </div>
        <QuestionCard v-model:selected="selected" :question="current" :checked="checked" />

        <div class="flex-1"></div>

        <!-- Feedback în stil Duolingo -->
        <div
          v-if="checked"
          class="-mx-4 mt-6 rounded-t-3xl px-4 pt-4 pb-2 slide-up"
          :class="lastAnswer.correct ? 'bg-brand-100' : 'bg-red-100'"
        >
          <p class="text-xl font-black" :class="lastAnswer.correct ? 'text-brand-700' : 'text-red-600'">
            {{ lastAnswer.correct ? '✅ Corect!' : '❌ Greșit' }}
          </p>
          <p v-if="!lastAnswer.correct" class="font-bold text-red-700">
            Corect: {{ correctTexts(current).join(' · ') }}
          </p>
          <p v-if="current.explanation" class="mt-2 text-sm font-semibold leading-relaxed">💡 {{ current.explanation }}</p>
          <p v-if="!lastAnswer.correct" class="mt-2 text-xs font-bold text-muted">🃏 Am pus grila la repetare în cartonașe.</p>
          <button class="btn mt-3 w-full" :class="lastAnswer.correct ? 'btn-green' : 'btn-red'" @click="next">Continuă</button>
          <button class="mt-2 w-full text-sm font-bold text-muted" :disabled="reported" @click="reporting = true">
            {{ reported ? 'Raportare trimisă ✓' : '🚩 Grila are o greșeală?' }}
          </button>
        </div>
        <button v-else class="btn btn-blue mt-6 w-full" :disabled="!selected.length" @click="check">Verifică</button>
      </template>

      <!-- Rezultat -->
      <div v-else class="mt-6 flex flex-1 flex-col items-center text-center">
        <p class="text-7xl pop-in">{{ resultEmoji }}</p>
        <h1 class="mt-3 text-3xl font-black">{{ score }} / {{ total }}</h1>
        <p class="font-semibold text-muted">
          {{ block ? 'Bloc terminat' : `Terminat în ${elapsed}` }}<template v-if="answers.length < questions.length"> · ai răspuns la {{ answers.length }} din {{ questions.length }}</template>
        </p>

        <div v-if="store.currentStreak > streakBefore" class="mt-4 w-full rounded-3xl bg-orange-100 p-4 pop-in">
          <p class="font-black text-orange-600">
            <span class="flame">🔥</span> Seria ta a crescut la {{ store.currentStreak }} {{ store.currentStreak === 1 ? 'zi' : 'zile' }}!
          </p>
        </div>

        <div v-if="wrong.length" class="mt-6 w-full space-y-2 text-left">
          <h2 class="font-black">De recitit <span class="text-sm font-bold text-muted">(adăugate la cartonașe)</span></h2>
          <div v-for="a in wrong" :key="a.question.id" class="card p-4">
            <p class="font-extrabold">{{ a.question.text }}</p>
            <p class="text-sm font-bold text-red-600">✗ {{ a.chosen.join(' · ') }}</p>
            <p class="text-sm font-bold text-brand-700">✓ {{ correctTexts(a.question).join(' · ') }}</p>
            <p v-if="a.question.explanation" class="mt-1 text-sm font-semibold text-muted">💡 {{ a.question.explanation }}</p>
          </div>
        </div>

        <div class="mt-8 grid w-full gap-2">
          <button class="btn btn-blue w-full" @click="restart">{{ block ? 'Înapoi la plan' : 'Încă un quiz' }}</button>
          <button v-if="wrong.length && !block" class="btn btn-white w-full" @click="retryWrong">🔁 Repetă acum doar ce ai greșit ({{ wrong.length }})</button>
          <RouterLink v-if="wrong.length" :to="`/flashcards/${subject.id}`" class="btn btn-white w-full">🃏 Repetă greșelile ca cartonașe</RouterLink>
          <button class="btn btn-white w-full" @click="router.push('/')">Acasă</button>
        </div>
      </div>
    </template>

    <!-- Pauză -->
    <div v-if="paused" class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div class="card w-full max-w-sm space-y-3 p-6 text-center pop-in">
        <p class="text-5xl">⏸</p>
        <p class="text-xl font-black">Pauză</p>
        <p class="text-sm font-semibold text-muted">Ai răspuns la {{ answers.length }} din {{ questions.length }}. Cronometrul stă pe loc.</p>
        <button class="btn btn-blue w-full" @click="paused = false">▶️ Continuă</button>
        <button v-if="!block" class="btn btn-white w-full" @click="exitQuiz">Ieși și continui mai târziu</button>
        <button class="btn btn-white w-full" @click="finish">Termină acum și vezi rezultatul</button>
      </div>
    </div>

    <!-- Timpul a expirat: nu mai oprim quiz-ul singuri, studentul alege -->
    <div v-if="timeUp" class="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div class="card w-full max-w-sm space-y-3 p-6 text-center pop-in">
        <p class="text-5xl">⏰</p>
        <p class="text-xl font-black">Timpul a expirat</p>
        <p class="text-sm font-semibold text-muted">Ai răspuns la {{ answers.length }} din {{ questions.length }} grile.</p>
        <button class="btn btn-blue w-full" @click="continueWithoutTime">Continuă fără timp</button>
        <button class="btn btn-white w-full" @click="finish">Vezi rezultatul</button>
      </div>
    </div>

    <ReportDialog v-if="reporting" @close="reporting = false" @submit="onReport" />
  </div>
</template>
