<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import ReportDialog from '../components/ReportDialog.vue'

const QUIZ_SIZE = 10
const QUIZ_SECONDS = 180

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = subjects.find((s) => s.id === route.params.subjectId)
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5)

const questions = shuffle(store.questionsFor(subject.id))
  .slice(0, QUIZ_SIZE)
  .map((q) => ({ ...q, shuffled: shuffle(q.options.map((text, i) => ({ text, correct: i === q.answer }))) }))

const index = ref(0)
const selected = ref(null)
const checked = ref(false)
const answers = ref([])
const finished = ref(false)
const secondsLeft = ref(QUIZ_SECONDS)

const current = computed(() => questions[index.value])
const score = computed(() => answers.value.filter((a) => a.correct).length)
const isCorrect = computed(() => checked.value && current.value.shuffled[selected.value]?.correct)
const correctText = computed(() => current.value.shuffled.find((o) => o.correct)?.text)
const timeLabel = computed(() => `${Math.floor(secondsLeft.value / 60)}:${String(secondsLeft.value % 60).padStart(2, '0')}`)
const elapsedLabel = computed(() => {
  const s = QUIZ_SECONDS - secondsLeft.value
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
})
const streakBefore = store.currentStreak

const timer = setInterval(() => {
  if (finished.value) return
  secondsLeft.value--
  if (secondsLeft.value <= 0) finish()
}, 1000)
onUnmounted(() => clearInterval(timer))

function check() {
  if (selected.value === null) return
  checked.value = true
  answers.value.push({ question: current.value, chosen: current.value.shuffled[selected.value].text, correct: isCorrect.value })
}

function next() {
  if (index.value + 1 >= questions.length) return finish()
  index.value++
  selected.value = null
  checked.value = false
  reported.value = false
}

function finish() {
  if (finished.value) return
  finished.value = true
  clearInterval(timer)
  store.recordQuiz(subject.id, score.value, questions.length)
}

function restart() {
  router.replace({ path: `/pauza/${subject.id}`, query: { t: Date.now() } })
}

const resultEmoji = computed(() => {
  const ratio = score.value / questions.length
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
</script>

<template>
  <div class="flex min-h-[92dvh] flex-col">
    <header class="flex items-center gap-3">
      <button class="btn btn-white px-3 py-2" aria-label="Închide" @click="router.push('/pauza')">✕</button>
      <div class="h-4 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          class="h-full rounded-full bg-sky-500 transition-all duration-500"
          :style="{ width: `${((index + (checked || finished ? 1 : 0)) / questions.length) * 100}%` }"
        ></div>
      </div>
      <span class="chip text-sm" :class="secondsLeft <= 30 ? 'bg-red-100 text-red-600' : 'bg-sky-100 text-sky-700'">⏱ {{ timeLabel }}</span>
    </header>

    <!-- Întrebare -->
    <template v-if="!finished">
      <p class="mt-5 text-sm font-extrabold text-muted">{{ subject.emoji }} {{ subject.name }} · Întrebarea {{ index + 1 }} din {{ questions.length }}</p>
      <h1 :key="current.id" class="mt-2 text-2xl font-black leading-snug slide-up">{{ current.text }}</h1>

      <div class="mt-6 space-y-3">
        <button
          v-for="(opt, i) in current.shuffled"
          :key="current.id + i"
          class="flex w-full items-center gap-3 rounded-2xl border-2 border-b-4 bg-white p-4 text-left font-bold transition-all active:translate-y-[2px]"
          :class="[
            !checked && selected === i && 'border-sky-400 bg-sky-50 text-sky-800',
            !checked && selected !== i && 'border-gray-200',
            checked && opt.correct && 'border-brand-500 bg-brand-50 text-brand-800',
            checked && !opt.correct && selected === i && 'border-red-400 bg-red-50 text-red-700 shake',
            checked && !opt.correct && selected !== i && 'border-gray-200 opacity-50',
          ]"
          :disabled="checked"
          @click="selected = i"
        >
          <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border-2 border-current text-sm font-black">
            {{ 'ABCD'[i] }}
          </span>
          {{ opt.text }}
        </button>
      </div>

      <div class="flex-1"></div>

      <!-- Feedback în stil Duolingo -->
      <div
        v-if="checked"
        class="-mx-4 mt-6 rounded-t-3xl px-4 pt-4 pb-2 slide-up"
        :class="isCorrect ? 'bg-brand-100' : 'bg-red-100'"
      >
        <p class="text-xl font-black" :class="isCorrect ? 'text-brand-700' : 'text-red-600'">
          {{ isCorrect ? '✅ Corect!' : '❌ Greșit' }}
        </p>
        <p v-if="!isCorrect" class="font-bold text-red-700">Răspuns corect: {{ correctText }}</p>
        <button class="btn mt-3 w-full" :class="isCorrect ? 'btn-green' : 'btn-red'" @click="next">Continuă</button>
        <button class="mt-2 w-full text-sm font-bold text-muted" @click="reporting = true">
          {{ reported ? 'Raportare trimisă ✓' : '🚩 Grila are o greșeală?' }}
        </button>
      </div>
      <button v-else class="btn btn-blue mt-6 w-full" :disabled="selected === null" @click="check">Verifică</button>
    </template>

    <!-- Rezultat -->
    <div v-else class="mt-6 flex flex-1 flex-col items-center text-center">
      <p class="text-7xl pop-in">{{ resultEmoji }}</p>
      <h1 class="mt-3 text-3xl font-black">{{ score }} / {{ questions.length }}</h1>
      <p class="font-semibold text-muted">
        {{ secondsLeft <= 0 ? 'Timpul a expirat!' : `Terminat în ${elapsedLabel}` }}
      </p>

      <div v-if="store.currentStreak > streakBefore" class="mt-4 w-full rounded-3xl bg-orange-100 p-4 pop-in">
        <p class="font-black text-orange-600"><span class="flame">🔥</span> Seria ta a crescut la {{ store.currentStreak }} {{ store.currentStreak === 1 ? 'zi' : 'zile' }}!</p>
      </div>

      <div v-if="wrong.length" class="mt-6 w-full space-y-2 text-left">
        <h2 class="font-black">De recitit:</h2>
        <div v-for="a in wrong" :key="a.question.id" class="card p-4">
          <p class="font-extrabold">{{ a.question.text }}</p>
          <p class="text-sm font-bold text-red-600">✗ {{ a.chosen }}</p>
          <p class="text-sm font-bold text-brand-700">✓ {{ a.question.options[a.question.answer] }}</p>
        </div>
      </div>

      <div class="mt-8 grid w-full gap-2">
        <button class="btn btn-blue w-full" @click="restart">Încă un quiz</button>
        <button class="btn btn-white w-full" @click="router.push('/')">Acasă</button>
      </div>
    </div>

    <ReportDialog v-if="reporting" @close="reporting = false" @submit="onReport" />
  </div>
</template>
