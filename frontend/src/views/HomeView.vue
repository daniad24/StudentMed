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

const dueSubjects = computed(() =>
  subjects
    .map((s) => ({ ...s, ...store.cardStats(s.id) }))
    .filter((s) => s.due > 0),
)

const recommended = computed(() =>
  store.allMaterials
    .filter((m) => m.recommended)
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3),
)

const subjectById = (id) => subjects.find((s) => s.id === id)
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center justify-between gap-3 slide-up">
      <div class="min-w-0">
        <p class="font-bold text-muted">{{ greeting }},</p>
        <h1 class="truncate text-2xl font-black">{{ firstName }} 👋</h1>
      </div>
      <div class="flex items-center gap-2">
        <RouterLink to="/cauta" class="btn btn-white px-3 py-2" aria-label="Caută">🔍</RouterLink>
        <RouterLink to="/statistici" class="chip bg-orange-100 text-orange-600 text-base px-4 py-2">
          <span class="flame">🔥</span> {{ store.currentStreak }}
        </RouterLink>
      </div>
    </header>

    <!-- Streak -->
    <section class="card p-5 slide-up">
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

    <!-- Pauza de gardă -->
    <RouterLink
      to="/pauza"
      class="block rounded-3xl border-b-4 border-[#0369a1] bg-gradient-to-br from-sky-400 to-sky-600 p-5 text-white transition-transform active:translate-y-[2px] slide-up"
    >
      <div class="flex items-center gap-4">
        <div class="text-5xl">⏱️</div>
        <div class="flex-1">
          <p class="text-xl font-black">Pauza de gardă</p>
          <p class="text-sm font-semibold text-white/90">10 grile rapide în 3 minute. Ideal la stagiu sau în tramvai.</p>
        </div>
        <AppIcon name="forward" :size="28" />
      </div>
    </RouterLink>

    <!-- Simulare examen -->
    <RouterLink to="/simulare" class="card flex items-center gap-4 p-4 transition-transform active:translate-y-[2px] slide-up">
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-violet-200 bg-violet-100 text-2xl">🎓</span>
      <div class="flex-1">
        <p class="font-black">Simulare de examen</p>
        <p class="text-sm font-semibold text-muted">20–50 de grile amestecate, ca la colocviu</p>
      </div>
      <AppIcon name="forward" class="text-violet-700" />
    </RouterLink>

    <!-- De repetat -->
    <section class="slide-up">
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
