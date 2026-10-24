<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore, XP } from '../stores/app'
import { subjects } from '../data/mock'
import { correctTexts, formatTime, isCorrectSelection, prepareQuestion, shuffle } from '../lib/quiz'
import BackButton from '../components/BackButton.vue'
import AppIcon from '../components/AppIcon.vue'
import QuestionCard from '../components/QuestionCard.vue'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

// --- Configurare ---
// ?mod=rezidentiat preselectează capitolele de rezidențiat.
const rezMode = route.query.mod === 'rezidentiat'
const available = subjects
  .map((s) => ({ ...s, count: store.questionsFor(s.id, store.sourceFilter).length }))
  .filter((s) => s.count > 0 && (!rezMode || s.rez))
// ?materie=<id> = simulare de colocviu doar din materia respectivă.
const onlySubject = available.find((s) => s.id === route.query.materie)?.id
const picked = ref(onlySubject ? [onlySubject] : available.map((s) => s.id))
const size = ref(rezMode ? 50 : 30)
const pool = computed(() => picked.value.flatMap((id) => store.questionsFor(id, store.sourceFilter)))

function togglePick(id) {
  picked.value = picked.value.includes(id) ? picked.value.filter((x) => x !== id) : [...picked.value, id]
}

// --- Desfășurare ---
const phase = ref('setup') // setup | running | done
const questions = ref([])
const selections = ref([])
const index = ref(0)
const totalSeconds = ref(0)
const secondsLeft = ref(0)
const usedSeconds = ref(0)
const confirmFinish = ref(false)
const timeUp = ref(false)
let timer = null

function start() {
  questions.value = shuffle(pool.value).slice(0, size.value).map(prepareQuestion)
  selections.value = questions.value.map(() => [])
  index.value = 0
  // 1 minut pe grilă, ca la colocviu
  totalSeconds.value = questions.value.length * 60
  secondsLeft.value = totalSeconds.value
  usedSeconds.value = 0
  phase.value = 'running'
  timer = setInterval(() => {
    if (timeUp.value || document.hidden) return
    usedSeconds.value++
    if (!store.timerOn) return
    secondsLeft.value--
    // nu predăm singuri: studentul alege dacă termină sau continuă fără timp
    if (secondsLeft.value <= 0) timeUp.value = true
  }, 1000)
}
onUnmounted(() => clearInterval(timer))

const current = computed(() => questions.value[index.value])
const answeredCount = computed(() => selections.value.filter((s) => s.length).length)

const currentSelection = computed({
  get: () => selections.value[index.value],
  set: (v) => (selections.value[index.value] = v),
})

// --- Rezultate ---
const results = ref([])

function finish() {
  if (phase.value !== 'running') return
  clearInterval(timer)
  confirmFinish.value = false
  timeUp.value = false
  results.value = questions.value.map((q, i) => {
    const correct = isCorrectSelection(q, selections.value[i])
    store.recordAnswer(q, correct)
    return { question: q, chosen: selections.value[i].map((j) => q.shuffled[j].text), correct }
  })
  store.recordExam(picked.value, score.value, questions.value.length, usedSeconds.value)
  phase.value = 'done'
}

const score = computed(() => results.value.filter((r) => r.correct).length)
const percent = computed(() => (questions.value.length ? Math.round((score.value / questions.value.length) * 100) : 0))
const bySubject = computed(() =>
  subjects
    .map((s) => {
      const rs = results.value.filter((r) => r.question.subjectId === s.id)
      return { ...s, total: rs.length, correct: rs.filter((r) => r.correct).length }
    })
    .filter((s) => s.total),
)
const wrong = computed(() => results.value.filter((r) => !r.correct))
</script>

<template>
  <div>
    <!-- Configurare -->
    <div v-if="phase === 'setup'" class="space-y-5">
      <header class="flex items-center gap-3 slide-up">
        <BackButton :to="rezMode ? '/rezidentiat' : '/'" />
        <h1 class="text-2xl font-black">{{ rezMode ? '🎯 Simulare rezidențiat' : '🎓 Simulare examen' }}</h1>
      </header>
      <p class="font-semibold text-muted">
        Grile amestecate din materiile alese, fără feedback pe parcurs. Ai 1 minut pe grilă. Rezultatele le vezi la final.
      </p>

      <section class="card space-y-3 p-5">
        <h2 class="font-black">Materii</h2>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="s in available"
            :key="s.id"
            class="chip max-w-full whitespace-normal border-2 py-1.5 text-left text-sm"
            :class="picked.includes(s.id) ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'"
            @click="togglePick(s.id)"
          >
            {{ s.emoji }} {{ s.name }} <span class="opacity-70">({{ s.count }})</span>
          </button>
        </div>

        <h2 class="pt-2 font-black">Număr de grile</h2>
        <div class="grid grid-cols-3 gap-2">
          <button v-for="n in rezMode ? [50, 100, 200] : [20, 30, 50]" :key="n" class="btn py-2" :class="size === n ? 'btn-primary' : 'btn-white'" @click="size = n">
            {{ n }}
          </button>
        </div>
        <p class="text-sm font-bold text-muted">
          {{ Math.min(size, pool.length) }} grile · {{ Math.min(size, pool.length) }} minute
          <span v-if="pool.length < size"> (doar {{ pool.length }} disponibile în materiile alese)</span>
        </p>
      </section>

      <button class="btn btn-primary w-full" :disabled="!pool.length" @click="start">Începe simularea</button>
    </div>

    <!-- Desfășurare -->
    <div v-else-if="phase === 'running'" class="flex min-h-[92dvh] flex-col">
      <header class="flex items-center gap-3">
        <button class="btn btn-white px-3 py-2 text-xs" @click="confirmFinish = true">Termină</button>
        <p class="flex-1 text-center text-sm font-black text-muted">{{ answeredCount }}/{{ questions.length }} răspunse</p>
        <button
          class="chip text-sm"
          :class="!store.timerOn ? 'bg-gray-100 text-muted' : secondsLeft <= 60 ? 'bg-red-100 text-red-600' : 'bg-sky-100 text-sky-700'"
          :aria-label="store.timerOn ? 'Oprește cronometrul' : 'Pornește cronometrul'"
          @click="store.timerOn = !store.timerOn"
        >
          {{ store.timerOn ? `⏱ ${formatTime(Math.max(secondsLeft, 0))}` : '⏱ Fără timp' }}
        </button>
      </header>

      <!-- Navigator -->
      <div class="mt-4 flex gap-1.5 overflow-x-auto pb-2">
        <button
          v-for="(q, i) in questions"
          :key="q.id"
          class="h-9 w-9 shrink-0 rounded-xl border-2 text-sm font-black"
          :class="[
            i === index ? 'border-sky-500 bg-sky-500 text-white' : selections[i].length ? 'border-sky-300 bg-sky-50 text-sky-700' : 'border-gray-200 bg-surface text-muted',
          ]"
          @click="index = i"
        >
          {{ i + 1 }}
        </button>
      </div>

      <p class="mt-3 mb-2 text-sm font-extrabold text-muted">
        {{ subjects.find((s) => s.id === current.subjectId)?.emoji }} {{ subjects.find((s) => s.id === current.subjectId)?.name }}
        · {{ index + 1 }} din {{ questions.length }}
      </p>
      <QuestionCard v-model:selected="currentSelection" :question="current" />

      <div class="flex-1"></div>
      <div class="mt-6 grid grid-cols-2 gap-2">
        <button class="btn btn-white" :disabled="index === 0" @click="index--"><AppIcon name="back" :size="18" /> Înapoi</button>
        <button v-if="index < questions.length - 1" class="btn btn-blue" @click="index++">Următoarea <AppIcon name="forward" :size="18" /></button>
        <button v-else class="btn btn-primary" @click="confirmFinish = true">Predă</button>
      </div>

      <div v-if="timeUp" class="fixed inset-0 z-30 flex items-end justify-center bg-black/40 p-4 sm:items-center">
        <div class="card w-full max-w-md p-5 text-center slide-up">
          <p class="text-4xl">⏰</p>
          <h2 class="mt-2 text-xl font-black">Timpul a expirat</h2>
          <p class="font-semibold text-muted">Ai răspuns la {{ answeredCount }} din {{ questions.length }} grile.</p>
          <div class="mt-4 grid grid-cols-2 gap-2">
            <button class="btn btn-white" @click="store.timerOn = false; timeUp = false">Continuă fără timp</button>
            <button class="btn btn-primary" @click="finish">Predă</button>
          </div>
        </div>
      </div>

      <div v-if="confirmFinish" class="fixed inset-0 z-30 flex items-end justify-center bg-black/40 p-4 sm:items-center" @click.self="confirmFinish = false">
        <div class="card w-full max-w-md p-5 text-center slide-up">
          <p class="text-4xl">📝</p>
          <h2 class="mt-2 text-xl font-black">Predai lucrarea?</h2>
          <p class="font-semibold text-muted">
            Ai răspuns la {{ answeredCount }} din {{ questions.length }} grile.
            <span v-if="answeredCount < questions.length">Grilele fără răspuns se notează ca greșite.</span>
          </p>
          <div class="mt-4 grid grid-cols-2 gap-2">
            <button class="btn btn-white" @click="confirmFinish = false">Mai lucrez</button>
            <button class="btn btn-primary" @click="finish">Predă</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Rezultate -->
    <div v-else class="space-y-5">
      <section class="card p-6 text-center pop-in">
        <p class="text-6xl">{{ percent >= 90 ? '🏆' : percent >= 70 ? '🎉' : percent >= 50 ? '💪' : '📖' }}</p>
        <h1 class="mt-2 text-4xl font-black">{{ percent }}%</h1>
        <p class="font-bold text-muted">
          {{ score }} din {{ questions.length }} corecte · {{ formatTime(usedSeconds) }} min
        </p>
        <p class="mt-2 chip bg-brand-100 text-brand-700">+{{ XP.exam }} XP bonus pentru simulare</p>
      </section>

      <section class="card space-y-3 p-5">
        <h2 class="font-black">Pe materii</h2>
        <div v-for="s in bySubject" :key="s.id">
          <div class="flex justify-between text-sm font-bold">
            <span>{{ s.emoji }} {{ s.name }}</span>
            <span class="text-muted">{{ s.correct }}/{{ s.total }}</span>
          </div>
          <div class="mt-1 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              class="h-full rounded-full"
              :class="s.correct / s.total >= 0.7 ? 'bg-brand-500' : s.correct / s.total >= 0.5 ? 'bg-amber-400' : 'bg-red-400'"
              :style="{ width: `${(s.correct / s.total) * 100}%` }"
            ></div>
          </div>
        </div>
      </section>

      <section v-if="wrong.length" class="space-y-2">
        <h2 class="font-black">Greșeli <span class="text-sm font-bold text-muted">(adăugate la cartonașe)</span></h2>
        <div v-for="r in wrong" :key="r.question.id" class="card p-4">
          <p class="font-extrabold">{{ r.question.text }}</p>
          <p class="text-sm font-bold text-red-600">✗ {{ r.chosen.length ? r.chosen.join(' · ') : 'fără răspuns' }}</p>
          <p class="text-sm font-bold text-brand-700">✓ {{ correctTexts(r.question).join(' · ') }}</p>
          <p v-if="r.question.explanation" class="mt-1 text-sm font-semibold text-muted">💡 {{ r.question.explanation }}</p>
        </div>
      </section>

      <div class="grid gap-2">
        <button class="btn btn-primary w-full" @click="phase = 'setup'">Altă simulare</button>
        <button class="btn btn-white w-full" @click="router.push('/')">Acasă</button>
      </div>
    </div>
  </div>
</template>
