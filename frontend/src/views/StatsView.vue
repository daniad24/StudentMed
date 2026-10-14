<script setup>
import { computed, ref } from 'vue'
import { useAppStore, today, addDays } from '../stores/app'
import { subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'

const store = useAppStore()

const DAYS = 14
const dayLetters = ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']

const days = computed(() =>
  Array.from({ length: DAYS }, (_, i) => {
    const date = addDays(today(), i - (DAYS - 1))
    return {
      date,
      xp: store.activity[date] ?? 0,
      letter: dayLetters[new Date(date + 'T00:00:00').getDay()],
      label: new Date(date + 'T00:00:00').toLocaleDateString('ro-RO', { weekday: 'long', day: 'numeric', month: 'short' }),
    }
  }),
)
const maxXp = computed(() => Math.max(10, ...days.value.map((d) => d.xp)))
const activeDays = computed(() => days.value.filter((d) => d.xp > 0).length)
const hovered = ref(null)
const shownDay = computed(() => hovered.value ?? days.value[DAYS - 1])

const answered = computed(() => store.answerLog.length)
const accuracy = computed(() =>
  answered.value ? Math.round((store.answerLog.filter((a) => a.correct).length / answered.value) * 100) : null,
)

const perSubject = computed(() =>
  subjects
    .map((s) => {
      const acc = store.accuracyFor(s.id)
      const cards = store.cardStats(s.id)
      return {
        ...s,
        answered: acc?.answered ?? 0,
        pct: acc ? Math.round((acc.correct / acc.answered) * 100) : null,
        known: cards.known,
        totalCards: cards.total,
      }
    })
    .sort((a, b) => (a.pct ?? 101) - (b.pct ?? 101)),
)

const weakest = computed(() => perSubject.value.find((s) => s.pct !== null && s.answered >= 5 && s.pct < 70))

function level(pct) {
  if (pct >= 80) return { bar: 'bg-brand-500', label: 'stăpânită', text: 'text-brand-700' }
  if (pct >= 60) return { bar: 'bg-amber-400', label: 'de consolidat', text: 'text-amber-700' }
  return { bar: 'bg-red-400', label: 'de lucrat', text: 'text-red-600' }
}
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/profil" history />
      <h1 class="text-2xl font-black">📊 Statistici</h1>
    </header>

    <section class="grid grid-cols-3 gap-2">
      <div class="card p-3 text-center">
        <p class="text-2xl font-black">{{ store.totalXp }}</p>
        <p class="text-xs font-bold text-muted">XP total</p>
      </div>
      <div class="card p-3 text-center">
        <p class="text-2xl font-black">{{ answered }}</p>
        <p class="text-xs font-bold text-muted">grile rezolvate</p>
      </div>
      <div class="card p-3 text-center">
        <p class="text-2xl font-black">{{ accuracy === null ? '–' : accuracy + '%' }}</p>
        <p class="text-xs font-bold text-muted">răspunsuri corecte</p>
      </div>
    </section>

    <!-- Activitate pe zile -->
    <section class="card p-5">
      <div class="flex items-baseline justify-between">
        <h2 class="font-black">XP pe zile</h2>
        <p class="text-xs font-bold text-muted">{{ activeDays }} din {{ DAYS }} zile active</p>
      </div>
      <p class="mt-1 text-sm font-semibold text-muted">
        <span class="capitalize">{{ shownDay.label }}</span>: <span class="font-black text-ink">{{ shownDay.xp }} XP</span>
      </p>
      <div class="mt-3 flex h-36 items-end gap-[2px] border-b-2 border-gray-200" @mouseleave="hovered = null">
        <button
          v-for="d in days"
          :key="d.date"
          class="group flex h-full flex-1 items-end justify-center"
          :aria-label="`${d.label}: ${d.xp} XP`"
          @mouseenter="hovered = d"
          @focus="hovered = d"
          @click="hovered = d"
        >
          <span
            class="block w-full max-w-6 rounded-t-[4px] transition-all"
            :class="[d.xp ? 'bg-brand-500' : 'bg-gray-200', shownDay.date === d.date && 'bg-brand-700']"
            :style="{ height: d.xp ? `${Math.max(6, (d.xp / maxXp) * 100)}%` : '3px' }"
          ></span>
        </button>
      </div>
      <div class="mt-1 flex gap-[2px]">
        <span
          v-for="d in days"
          :key="d.date"
          class="flex-1 text-center text-[10px] font-bold"
          :class="d.date === today() ? 'text-ink' : 'text-muted'"
        >
          {{ d.letter }}
        </span>
      </div>
    </section>

    <p v-if="weakest" class="rounded-2xl bg-amber-50 px-4 py-3 text-sm font-bold text-amber-800">
      💡 La {{ weakest.emoji }} {{ weakest.name }} ai {{ weakest.pct }}% răspunsuri corecte. Încearcă o Pauză de gardă pe ea!
    </p>

    <!-- Pe materii -->
    <section class="card p-5">
      <h2 class="font-black">Pe materii</h2>
      <p class="text-xs font-semibold text-muted">Procent de grile corecte · cele mai slabe sus</p>
      <div class="mt-3 space-y-3">
        <div v-for="s in perSubject" :key="s.id">
          <div class="flex items-center justify-between gap-2 text-sm font-bold">
            <span>{{ s.emoji }} {{ s.name }}</span>
            <span v-if="s.pct !== null" :class="level(s.pct).text">{{ s.pct }}% · {{ level(s.pct).label }}</span>
            <span v-else class="text-muted">nicio grilă încă</span>
          </div>
          <div class="mt-1 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              v-if="s.pct !== null"
              class="h-full rounded-full"
              :class="level(s.pct).bar"
              :style="{ width: `${Math.max(s.pct, 3)}%` }"
              :title="`${s.answered} rezolvate`"
            ></div>
          </div>
          <p class="mt-0.5 text-xs font-semibold text-muted">
            {{ s.answered }} {{ s.answered === 1 ? 'grilă' : 'grile' }} · {{ s.known }}/{{ s.totalCards }} cartonașe știute
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
