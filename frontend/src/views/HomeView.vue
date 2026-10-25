<script setup>
import { computed } from 'vue'
import { useAppStore, today, addDays } from '../stores/app'
import { subjects } from '../data/mock'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 11) return 'Bună dimineața'
  if (h < 18) return 'Salut'
  return 'Bună seara'
})

const firstName = computed(() => (store.user?.name ?? '').split(/\s+/)[0])

const dayLetters = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']
const week = computed(() => {
  const { count, lastDate } = store.streak
  const first = lastDate ? addDays(lastDate, -(count - 1)) : null
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(today(), i - 6)
    const studied = !!lastDate && date >= first && date <= lastDate
    return { date, studied, letter: dayLetters[new Date(date + 'T00:00:00').getDay()], isToday: i === 6 }
  })
})

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI']

// Materiile anului studentului care au deja conținut.
const mySubjects = computed(() =>
  store.studyYear
    ? subjects.filter((s) => s.years.includes(store.studyYear) && (store.questionsFor(s.id).length || store.cardsFor(s.id).length))
    : [],
)

// De repetat: materiile anului tău + cele la care ai început deja cartonașe.
const dueSubjects = computed(() =>
  subjects
    .filter((s) => !store.studyYear || s.years.includes(store.studyYear) || store.cardsFor(s.id).some((c) => store.cardState[c.id]))
    .map((s) => ({ ...s, ...store.cardStats(s.id) }))
    .filter((s) => s.due > 0),
)

const exams = computed(() => store.upcomingExams.map((e) => ({ ...e, subject: subjects.find((s) => s.id === e.subjectId) })))

const recommended = computed(() => {
  const inMyYear = (m) => !store.studyYear || subjectById(m.subjectId)?.years.includes(store.studyYear)
  return store.allMaterials
    .filter((m) => m.recommended && inMyYear(m))
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3)
})

const subjectById = (id) => subjects.find((s) => s.id === id)
const courseCount = computed(() => Object.keys(store.courses).length)
const unfinished = computed(() =>
  Object.entries(store.quizSessions)
    .map(([key, s]) => {
      const [id, curs] = key.split('#')
      return { key, id, curs, name: curs ? store.courses[curs]?.name : subjectById(id)?.name, done: s.answers.length, total: s.ids.length, at: s.savedAt }
    })
    .filter((r) => r.name)
    .sort((a, b) => b.at - a.at)
    .slice(0, 2),
)
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center justify-between gap-3 slide-up">
      <div class="min-w-0">
        <p class="font-bold text-muted">{{ greeting }},</p>
        <h1 class="truncate text-2xl font-black">{{ firstName }} 👋</h1>
      </div>
      <div class="flex items-center gap-2">
        <RouterLink to="/cauta" data-tour="cauta" class="btn btn-white px-3 py-2" aria-label="Caută">🔍</RouterLink>
        <RouterLink to="/statistici" class="chip bg-orange-100 text-orange-600 text-base px-4 py-2">
          <span class="flame">🔥</span> {{ store.currentStreak }}
        </RouterLink>
      </div>
    </header>

    <!-- Streak -->
    <section class="card p-5 slide-up" data-tour="streak">
      <div class="flex items-center gap-4">
        <div class="text-5xl" :class="store.studiedToday ? 'flame' : 'grayscale opacity-60'">🔥</div>
        <div>
          <p class="text-xl font-black">
            {{ store.currentStreak }} {{ store.currentStreak === 1 ? 'zi' : 'zile' }} la rând
          </p>
          <p class="text-sm font-semibold text-muted">
            {{ store.studiedToday ? 'Bravo, ai studiat azi! Revino mâine.' : 'Repetă câteva cartonașe ca să-ți păstrezi seria.' }}
          </p>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-7 gap-1 text-center">
        <div v-for="d in week" :key="d.date" class="flex flex-col items-center gap-1">
          <span class="text-[11px] font-extrabold" :class="d.isToday ? 'text-ink' : 'text-muted'">{{ d.letter }}</span>
          <span
            class="flex h-8 w-8 items-center justify-center rounded-full text-sm font-black"
            :class="d.studied ? 'bg-orange-400 text-white' : 'bg-gray-100 text-gray-300'"
          >
            {{ d.studied ? '✓' : '·' }}
          </span>
        </div>
      </div>
    </section>

    <!-- Anul de studiu -->
    <RouterLink
      v-if="!store.studyYear"
      to="/profil"
      class="card flex items-center gap-3 border-amber-300 bg-amber-50 p-4 slide-up"
    >
      <span class="text-3xl">🎓</span>
      <span class="flex-1">
        <span class="block font-black">În ce an ești?</span>
        <span class="block text-sm font-semibold text-muted">Alege-l în Profil și îți arătăm materiile tale.</span>
      </span>
      <AppIcon name="forward" class="text-muted" />
    </RouterLink>

    <section v-else-if="mySubjects.length" class="slide-up">
      <div class="mb-2 flex items-baseline justify-between">
        <h2 class="text-lg font-black">Anul {{ ROMAN[store.studyYear - 1] }}</h2>
        <RouterLink to="/materii" class="px-1 py-2 text-sm font-bold text-brand-600">Toate materiile</RouterLink>
      </div>
      <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <RouterLink
          v-for="s in mySubjects"
          :key="s.id"
          :to="`/materie/${s.id}`"
          class="card flex w-28 shrink-0 flex-col items-center gap-1 p-3 text-center transition-transform active:translate-y-[2px]"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-xl border-2 text-2xl" :class="s.color">{{ s.emoji }}</span>
          <span class="text-xs font-extrabold leading-tight">{{ s.name }}</span>
        </RouterLink>
      </div>
    </section>

    <!-- Colocvii -->
    <section v-if="exams.length" class="slide-up">
      <h2 class="mb-2 text-lg font-black">📅 Colocvii</h2>
      <div class="space-y-2">
        <RouterLink
          v-for="e in exams"
          :key="e.subjectId"
          :to="`/tinta?materie=${e.subjectId}${e.daysLeft <= 1 ? '&mod=seara' : ''}`"
          class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
        >
          <span class="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl bg-violet-100 leading-none text-violet-700">
            <span class="text-lg font-black">{{ e.daysLeft }}</span>
            <span class="text-[10px] font-bold">{{ e.daysLeft === 1 ? 'zi' : 'zile' }}</span>
          </span>
          <span class="min-w-0 flex-1">
            <span class="block truncate font-extrabold">{{ e.subject?.emoji }} {{ e.subject?.name }}</span>
            <span class="block text-sm font-semibold text-muted">
              <template v-if="e.daysLeft === 0">E azi! Mult succes 🍀</template>
              <template v-else-if="e.remaining">~{{ e.perDay }} grile/zi · {{ e.remaining }} din {{ e.total }} rămase</template>
              <template v-else>Ai rezolvat corect toate grilele 💪</template>
            </span>
          </span>
          <AppIcon name="forward" class="text-muted" />
        </RouterLink>
      </div>
    </section>

    <!-- Pregătire la țintă -->
    <RouterLink
      to="/tinta"
      data-tour="tinta"
      class="block rounded-3xl border-b-4 border-[#15803d] bg-gradient-to-br from-brand-400 to-brand-600 p-5 text-white transition-transform active:translate-y-[2px] slide-up"
    >
      <div class="flex items-center gap-4">
        <div class="text-5xl">🎯</div>
        <div class="flex-1">
          <p class="text-xl font-black">Ai test? Pregătește-te la țintă</p>
          <p class="text-sm font-semibold text-white/90">Alegi subiectele și timpul, primești planul. Sau „Seara dinainte”.</p>
        </div>
        <AppIcon name="forward" :size="28" />
      </div>
    </RouterLink>

    <!-- Cursurile studentului: ce a încărcat el e miezul aplicației -->
    <RouterLink
      to="/cursuri"
      data-tour="cursuri"
      class="block rounded-3xl border-b-4 border-[#15803d] bg-gradient-to-br from-brand-500 to-brand-600 p-5 text-white transition-transform active:translate-y-[2px] slide-up"
    >
      <div class="flex items-center gap-4">
        <div class="text-5xl">📚</div>
        <div class="flex-1">
          <p class="text-xl font-black">{{ courseCount ? 'Cursurile mele' : 'Încarcă primul tău curs' }}</p>
          <p class="text-sm font-semibold text-white/90">
            {{ courseCount ? `${courseCount} ${courseCount === 1 ? 'curs' : 'cursuri'} · grile, cartonașe și rezumate din PDF-urile și PPT-urile tale` : 'PDF sau PPT de la facultate → grile, cartonașe și rezumat, gata de învățat.' }}
          </p>
        </div>
        <AppIcon name="forward" :size="28" />
      </div>
    </RouterLink>

    <!-- Ce n-ai știut azi -->
    <RouterLink
      v-if="store.missedToday.length"
      to="/flashcards/azi"
      class="card flex items-center gap-4 border-amber-400 p-4 transition-transform active:translate-y-[2px] slide-up"
    >
      <span class="text-3xl">🔁</span>
      <div class="flex-1">
        <p class="font-black">Repetă ce n-ai știut azi</p>
        <p class="text-sm font-semibold text-muted">{{ store.missedToday.length }} {{ store.missedToday.length === 1 ? 'cartonaș' : 'cartonașe' }} · o rundă rapidă înainte să închizi</p>
      </div>
      <AppIcon name="forward" class="text-amber-500" />
    </RouterLink>

    <!-- Quiz-uri lăsate la jumătate -->
    <RouterLink
      v-for="r in unfinished"
      :key="r.key"
      :to="`/pauza/${r.id}${r.curs ? `?curs=${r.curs}` : ''}`"
      class="card flex items-center gap-4 border-sky-400 p-4 transition-transform active:translate-y-[2px] slide-up"
    >
      <span class="text-3xl">⏸</span>
      <div class="flex-1">
        <p class="font-black">Continuă grilele: {{ r.name }}</p>
        <p class="text-sm font-semibold text-muted">{{ r.done }} din {{ r.total }} răspunse</p>
      </div>
      <AppIcon name="forward" class="text-sky-500" />
    </RouterLink>

    <!-- Pauza de gardă -->
    <RouterLink
      to="/pauza"
      data-tour="pauza"
      class="block rounded-3xl border-b-4 border-[#0369a1] bg-gradient-to-br from-sky-400 to-sky-600 p-5 text-white transition-transform active:translate-y-[2px] slide-up"
    >
      <div class="flex items-center gap-4">
        <div class="text-5xl">⏱️</div>
        <div class="flex-1">
          <p class="text-xl font-black">Pauza de gardă</p>
          <p class="text-sm font-semibold text-white/90">Grile rapide, cu sau fără cronometru. Ideal la stagiu sau în tramvai.</p>
        </div>
        <AppIcon name="forward" :size="28" />
      </div>
    </RouterLink>

    <!-- Simulare examen -->
    <RouterLink to="/simulare" data-tour="simulare" class="card flex items-center gap-4 p-4 transition-transform active:translate-y-[2px] slide-up">
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-violet-200 bg-violet-100 text-2xl">🎓</span>
      <div class="flex-1">
        <p class="font-black">Simulare de examen</p>
        <p class="text-sm font-semibold text-muted">20–50 de grile amestecate, ca la colocviu</p>
      </div>
      <AppIcon name="forward" class="text-violet-700" />
    </RouterLink>

    <!-- De repetat -->
    <section class="slide-up" data-tour="repetat">
      <h2 class="mb-2 text-lg font-black">De repetat azi</h2>
      <div v-if="dueSubjects.length" class="space-y-2">
        <RouterLink
          v-for="s in dueSubjects"
          :key="s.id"
          :to="`/flashcards/${s.id}`"
          class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
        >
          <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-2xl" :class="s.color">{{ s.emoji }}</span>
          <div class="flex-1">
            <p class="font-extrabold">{{ s.name }}</p>
            <p class="text-sm font-semibold text-muted">{{ s.due }} cartonașe de repetat</p>
          </div>
          <span class="btn btn-primary px-4 py-2 text-xs">Start</span>
        </RouterLink>
      </div>
      <div v-else class="card p-5 text-center">
        <p class="text-3xl">🎉</p>
        <p class="font-extrabold">Nimic de repetat azi!</p>
        <p class="text-sm font-semibold text-muted">Cartonașele revin automat când e momentul.</p>
      </div>
    </section>

    <!-- Recomandate -->
    <section class="slide-up">
      <h2 class="mb-2 text-lg font-black">⭐ Recomandate</h2>
      <div class="space-y-2">
        <RouterLink
          v-for="m in recommended"
          :key="m.id"
          :to="`/material/${m.id}`"
          class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
        >
          <span class="text-2xl">{{ subjectById(m.subjectId)?.emoji }}</span>
          <div class="min-w-0 flex-1">
            <p class="truncate font-extrabold">{{ m.title }}</p>
            <p class="text-sm font-semibold text-muted">{{ subjectById(m.subjectId)?.name }} · ▲ {{ m.votes }}</p>
          </div>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
