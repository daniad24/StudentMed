<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'
import ZoomImage from '../components/ZoomImage.vue'
import ReportDialog from '../components/ReportDialog.vue'
import SourcePicker from '../components/SourcePicker.vue'
import { useImageUrl } from '../lib/storedImage'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

// „azi” = cartonașele pe care nu le-ai știut azi, din toate materiile
const cursId = route.query.curs ? String(route.query.curs) : ''
const mixed = route.params.subjectId === 'azi'
const subject = mixed ? { id: 'azi', emoji: '🔁', name: 'Ce n-ai știut azi' } : subjects.find((s) => s.id === route.params.subjectId)
const block = route.query.bloc ? store.targetSession?.blocks.find((b) => b.key === route.query.bloc) : null
const source = cursId
  ? store.cardsFor(subject.id).filter((c) => c.courseId === cursId)
  : mixed
  ? store.missedToday.map((id) => store.allCards.find((c) => c.id === id)).filter(Boolean)
  : block
  ? block.cardIds.map((id) => store.allCards.find((c) => c.id === id)).filter(Boolean)
  : route.query.toate ? store.cardsFor(subject.id) : store.dueCardsFor(subject.id)
const backTo = block ? '/tinta/plan' : cursId ? '/cursuri' : mixed ? '/' : `/materie/${subject.id}?tab=flashcards`
const practice = ref(mixed) // repetare în aceeași zi: nu schimbă calendarul de repetiție
const shuffled = [...source].sort(() => Math.random() - 0.5)
const free = !block && !mixed && !cursId // sesiune obișnuită pe materie: studentul alege sursa și câte

// Din ce document (Steto, fiecare curs încărcat, AI, ale mele); alegerea se ține minte pe materie.
const prefs = store.quizPrefs
const order = (k) => (k === 'steto' ? 0 : k.startsWith('c:') ? 1 : k === 'ai' ? 2 : 3)
const sources = computed(() => {
  const counts = new Map()
  for (const c of shuffled) counts.set(store.sourceKeyOf(c, 'cards'), (counts.get(store.sourceKeyOf(c, 'cards')) ?? 0) + 1)
  return [...counts.entries()].map(([key, count]) => ({ key, count, label: store.sourceLabel(key) })).sort((a, b) => order(a.key) - order(b.key) || (store.courses[b.key.slice(2)]?.createdAt ?? 0) - (store.courses[a.key.slice(2)]?.createdAt ?? 0))
})
const pickedSources = computed({
  get: () => prefs.cardSources?.[subject.id] ?? (sources.value.some((s) => s.key === 'steto') && sources.value.length > 1 ? ['steto'] : null),
  set: (v) => (prefs.cardSources = { ...(prefs.cardSources ?? {}), [subject.id]: v }),
})
const all = computed(() => {
  if (!free) return shuffled
  const keys = (pickedSources.value ?? []).filter((k) => sources.value.some((s) => s.key === k))
  return keys.length ? shuffled.filter((c) => keys.includes(store.sourceKeyOf(c, 'cards'))) : shuffled
})

// Sesiune lungă sau cartonașe din mai multe documente: studentul alege înainte.
const BIG = 30
const choosing = ref(free && (shuffled.length > BIG || sources.value.length > 1))
const queue = ref(choosing.value ? [] : all.value)
const initialCount = ref(queue.value.length)
function startWith(n) {
  queue.value = n ? all.value.slice(0, n) : all.value
  initialCount.value = queue.value.length
  choosing.value = false
}

const flipped = ref(false)
const done = ref(0)
// Prima notă dată fiecărui cartonaș în sesiune (repetările roșii nu se numără din nou).
const firstRatings = ref({})
const tally = computed(() => {
  const t = { red: 0, yellow: 0, green: 0 }
  Object.values(firstRatings.value).forEach((r) => t[r]++)
  return t
})
const streakBefore = store.currentStreak

const current = computed(() => queue.value[0])
const imageUrl = useImageUrl(() => current.value?.image?.src)
const backImageUrl = useImageUrl(() => current.value?.backImage?.src)
const progress = computed(() => (initialCount.value ? (done.value / initialCount.value) * 100 : 100))
const finished = computed(() => !current.value)
watch(finished, (f) => {
  if (f && block && initialCount.value) store.completeBlock(block.key)
})

function nextIntervalLabel(rating) {
  if (rating === 'red') return 'mâine'
  if (rating === 'yellow') return 'în 3 zile'
  const box = store.cardState[current.value?.id]?.box ?? 0
  const days = [7, 14, 30, 60][Math.min(Math.max(box + 1, 3), 6) - 3]
  return `în ${days} zile`
}

function rate(rating) {
  const card = queue.value.shift()
  if (practice.value) store.practiceCard(card.id, rating)
  else store.rateCard(card.id, rating)
  if (!firstRatings.value[card.id]) firstRatings.value[card.id] = rating
  // Cartonașele roșii reapar la finalul sesiunii.
  if (rating === 'red') queue.value.push(card)
  else done.value++
  flipped.value = false
}

// Cartonașele la care prima notă din sesiune a fost „Mai repetă” sau „Mediu”, și care mai sunt în lista de azi.
const notKnown = computed(() => Object.keys(firstRatings.value).filter((id) => firstRatings.value[id] !== 'green' && store.missedToday.includes(id)))
function repeatMissed() {
  const cards = notKnown.value.map((id) => store.allCards.find((c) => c.id === id)).filter(Boolean)
  practice.value = true
  queue.value = cards.sort(() => Math.random() - 0.5)
  initialCount.value = cards.length
  done.value = 0
  firstRatings.value = {}
  flipped.value = false
}

const reporting = ref(false)
const reported = ref(false)
function onReport(reason) {
  store.report('flashcard', current.value.id, current.value.front, reason)
  reporting.value = false
  reported.value = true
  setTimeout(() => (reported.value = false), 2000)
}
</script>

<template>
  <div class="flex min-h-[92dvh] flex-col">
    <header class="flex items-center gap-3">
      <BackButton icon="close" :to="backTo" />
      <div class="h-4 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div class="h-full rounded-full bg-brand-500 transition-all duration-500" :style="{ width: `${progress}%` }"></div>
      </div>
      <span class="text-sm font-black text-muted">{{ done }}/{{ initialCount }}</span>
    </header>

    <!-- Alegerea mărimii sesiunii -->
    <div v-if="choosing" class="flex flex-1 flex-col text-center">
      <p class="mt-4 text-5xl">🃏</p>
      <h1 class="mt-2 text-2xl font-black">{{ all.length }} {{ all.length === 1 ? 'cartonaș' : 'cartonașe' }} de repetat</h1>
      <p class="mt-1 text-sm font-semibold text-muted">{{ subject.emoji }} {{ subject.name }}</p>
      <div v-if="sources.length > 1" class="mt-5 text-left">
        <p class="label">Din ce document</p>
        <SourcePicker v-model="pickedSources" :sources="sources" accent="brand" :fresh="prefs.cardSources?.[subject.id] === undefined" />
      </div>
      <p class="label mt-5 text-left">Câte faci acum? <span class="font-semibold text-muted">Restul rămân la rând.</span></p>
      <div class="grid w-full gap-2">
        <button v-for="n in [10, 20, 50].filter((x) => x < all.length)" :key="n" class="btn btn-white w-full" @click="startWith(n)">{{ n }} cartonașe</button>
        <button class="btn btn-primary w-full" :disabled="!all.length" @click="startWith(0)">{{ all.length ? `Toate (${all.length})` : 'Nimic de repetat din sursa aleasă' }}</button>
      </div>
    </div>

    <!-- Sesiune -->
    <template v-else-if="!finished">
      <p class="mt-4 text-center font-extrabold text-muted">{{ subject.emoji }} {{ subject.name }}</p>

      <div class="flip-scene my-6 flex-1">
        <div
          class="flip-card h-full min-h-72 cursor-pointer"
          :class="{ flipped }"
          role="button"
          tabindex="0"
          @click="flipped = !flipped"
          @keydown.space.prevent="flipped = !flipped"
        >
          <div class="flip-face card flex flex-col items-center justify-center p-6 text-center">
            <p class="text-xs font-black tracking-widest text-muted uppercase">Întrebare</p>
            <span v-if="current.courseId" class="chip mt-2 max-w-full truncate bg-brand-100 text-brand-700">{{ store.sourceLabel('c:' + current.courseId) }}</span>
            <span v-if="current.ai" class="chip mt-2 bg-amber-100 text-amber-700">🤖 generat de AI · neverificat</span>
            <span v-if="current.fromQuiz" class="chip mt-2 bg-violet-100 text-violet-700">din grilele greșite</span>
            <img v-if="current.image" :src="imageUrl" :alt="current.image.alt" class="mt-3 w-full rounded-xl border-2 border-gray-200 bg-white object-contain" :class="current.kind === 'image' ? 'max-h-80' : 'max-h-56'" />
            <p v-if="current.image?.credit" class="mt-1 text-[10px] font-semibold text-muted">Foto: {{ current.image.credit.author }} · {{ current.image.credit.license }}</p>
            <p class="mt-3 font-black leading-snug" :class="current.front.length > 90 || current.image ? 'text-lg' : 'text-2xl'">{{ current.front }}</p>
            <p class="mt-6 text-sm font-bold text-muted">Atinge ca să vezi răspunsul</p>
          </div>
          <div class="flip-face flip-back card flex flex-col items-center justify-center border-brand-200 bg-brand-50 p-6 text-center">
            <p class="text-xs font-black tracking-widest text-brand-700 uppercase">Răspuns</p>
            <img v-if="current.backImage" :src="backImageUrl" :alt="current.backImage.alt" class="mt-3 max-h-64 w-full rounded-xl border-2 border-brand-200 bg-white object-contain" />
            <p class="mt-3 whitespace-pre-line font-black leading-snug text-brand-800" :class="current.back.length > 60 ? 'text-lg text-left' : 'text-2xl'">{{ current.back }}</p>
            <p v-if="current.note" class="mt-3 text-sm font-semibold text-muted">💡 {{ current.note }}</p>
          </div>
        </div>
      </div>

      <div v-if="flipped" class="grid grid-cols-3 gap-2 slide-up">
        <button class="btn btn-red flex-col gap-0 px-2" @click="rate('red')">
          Mai repetă<span class="text-[10px] font-bold normal-case opacity-90">{{ nextIntervalLabel('red') }}</span>
        </button>
        <button class="btn btn-yellow flex-col gap-0 px-2" @click="rate('yellow')">
          Mediu<span class="text-[10px] font-bold normal-case opacity-90">{{ nextIntervalLabel('yellow') }}</span>
        </button>
        <button class="btn btn-green flex-col gap-0 px-2" @click="rate('green')">
          Știu deja<span class="text-[10px] font-bold normal-case opacity-90">{{ nextIntervalLabel('green') }}</span>
        </button>
      </div>
      <button v-else class="btn btn-primary w-full" @click="flipped = true">Arată răspunsul</button>

      <button class="mt-2 py-2.5 text-sm font-bold text-muted" @click="reporting = true">🚩 Raportează cartonașul</button>
      <p v-if="reported" class="mt-2 text-center text-sm font-bold text-brand-700 pop-in">Mulțumim, am trimis raportarea!</p>
    </template>

    <!-- Final -->
    <div v-else class="flex flex-1 flex-col items-center justify-center text-center">
      <div class="relative">
        <p class="text-7xl pop-in">{{ initialCount ? '🎉' : '😴' }}</p>
        <span v-if="initialCount" class="float-up absolute left-1/2 top-0 text-3xl">⭐</span>
      </div>
      <h1 class="mt-4 text-3xl font-black">{{ initialCount ? 'Sesiune terminată!' : 'Nimic de repetat' }}</h1>
      <p v-if="initialCount" class="mt-1 font-semibold text-muted">Ai trecut prin {{ initialCount }} cartonașe.</p>
      <p v-if="practice && initialCount" class="mt-1 text-sm font-semibold text-muted">Repetarea de azi nu schimbă calendarul de repetiție, doar scoate din listă ce știi acum.</p>

      <div v-if="initialCount" class="mt-6 grid w-full grid-cols-3 gap-2">
        <div class="card p-3"><p class="text-2xl font-black text-red-500">{{ tally.red }}</p><p class="text-xs font-bold text-muted">de repetat</p></div>
        <div class="card p-3"><p class="text-2xl font-black text-amber-500">{{ tally.yellow }}</p><p class="text-xs font-bold text-muted">mediu</p></div>
        <div class="card p-3"><p class="text-2xl font-black text-brand-600">{{ tally.green }}</p><p class="text-xs font-bold text-muted">știute</p></div>
      </div>

      <div v-if="store.currentStreak > streakBefore" class="mt-6 w-full rounded-3xl bg-orange-100 p-4 pop-in">
        <p class="text-4xl"><span class="flame">🔥</span></p>
        <p class="font-black text-orange-600">Seria ta a crescut la {{ store.currentStreak }} {{ store.currentStreak === 1 ? 'zi' : 'zile' }}!</p>
      </div>

      <button v-if="notKnown.length" class="btn btn-yellow mt-8 w-full" @click="repeatMissed">🔁 Repetă acum ce nu ai știut ({{ notKnown.length }})</button>
      <button class="btn btn-primary w-full" :class="notKnown.length ? 'mt-2' : 'mt-8'" @click="router.push(block ? '/tinta/plan' : '/')">{{ block ? 'Înapoi la plan' : 'Continuă' }}</button>
    </div>

    <ReportDialog v-if="reporting" @close="reporting = false" @submit="onReport" />
  </div>
</template>
