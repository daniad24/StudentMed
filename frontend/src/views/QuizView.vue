<script setup>
import { computed, onUnmounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import { correctTexts, formatTime, isCorrectSelection, prepareQuestion, shuffle } from '../lib/quiz'
import BackButton from '../components/BackButton.vue'
import QuestionCard from '../components/QuestionCard.vue'
import ReportDialog from '../components/ReportDialog.vue'

const QUIZ_SIZE = 10
const QUIZ_SECONDS = 180

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = subjects.find((s) => s.id === route.params.subjectId)
const block = route.query.bloc ? store.targetSession?.blocks.find((b) => b.key === route.query.bloc) : null
const questions = block
  ? block.questionIds.map((id) => store.questionsFor(subject.id).find((q) => q.id === id)).filter(Boolean).map(prepareQuestion)
  : shuffle(store.questionsFor(subject.id)).slice(0, QUIZ_SIZE).map(prepareQuestion)

const index = ref(0)
const selected = ref([])
const checked = ref(false)
const answers = ref([])
const finished = ref(false)
const secondsLeft = ref(block ? 24 * 3600 : QUIZ_SECONDS)
const streakBefore = store.currentStreak

const current = computed(() => questions[index.value])
const score = computed(() => answers.value.filter((a) => a.correct).length)
const lastAnswer = computed(() => answers.value[answers.value.length - 1])
const elapsed = computed(() => formatTime((block ? 24 * 3600 : QUIZ_SECONDS) - secondsLeft.value))

const timer = setInterval(() => {
  if (finished.value) return
  secondsLeft.value--
  if (secondsLeft.value <= 0) finish()
}, 1000)
onUnmounted(() => clearInterval(timer))

function check() {
  if (!selected.value.length) return
  checked.value = true
  const q = current.value
  const correct = isCorrectSelection(q, selected.value)
  answers.value.push({ question: q, chosen: selected.value.map((i) => q.shuffled[i].text), correct })
  store.recordAnswer(q, correct)
}

function next() {
  if (index.value + 1 >= questions.length) return finish()
  index.value++
  selected.value = []
  checked.value = false
  reported.value = false
}

function finish() {
  if (finished.value) return
  finished.value = true
  clearInterval(timer)
  store.recordQuiz(subject.id, score.value, questions.length)
  if (block) store.completeBlock(block.key)
}

function restart() {
  if (block) return router.push('/tinta/plan')
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
      <BackButton icon="close" :to="block ? '/tinta/plan' : '/pauza'" />
      <div class="h-4 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div
          class="h-full rounded-full bg-sky-500 transition-all duration-500"
          :style="{ width: `${((index + (checked || finished ? 1 : 0)) / questions.length) * 100}%` }"
        ></div>
      </div>
      <span v-if="!block" class="chip text-sm" :class="secondsLeft <= 30 ? 'bg-red-100 text-red-600' : 'bg-sky-100 text-sky-700'">
        ⏱ {{ formatTime(Math.max(secondsLeft, 0)) }}
      </span>
    </header>

    <!-- Întrebare -->
    <template v-if="!finished">
      <p class="mt-5 mb-2 text-sm font-extrabold text-muted">
        {{ subject.emoji }} {{ subject.name }} · Întrebarea {{ index + 1 }} din {{ questions.length }}
      </p>
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
      <h1 class="mt-3 text-3xl font-black">{{ score }} / {{ questions.length }}</h1>
      <p class="font-semibold text-muted">{{ block ? 'Bloc terminat' : secondsLeft <= 0 ? 'Timpul a expirat!' : `Terminat în ${elapsed}` }}</p>

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
        <RouterLink v-if="wrong.length" :to="`/flashcards/${subject.id}`" class="btn btn-white w-full">🃏 Repetă greșelile</RouterLink>
        <button class="btn btn-white w-full" @click="router.push('/')">Acasă</button>
      </div>
    </div>

    <ReportDialog v-if="reporting" @close="reporting = false" @submit="onReport" />
  </div>
</template>
