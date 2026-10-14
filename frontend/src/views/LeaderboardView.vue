<script setup>
import { computed } from 'vue'
import { useAppStore, XP, weekStart, addDays } from '../stores/app'

const store = useAppStore()

const medals = ['🥇', '🥈', '🥉']
const myRank = computed(() => store.leaderboard.findIndex((r) => r.me) + 1)
const daysLeft = computed(() => {
  const end = addDays(weekStart(), 7)
  return Math.round((new Date(end) - new Date(addDays(weekStart(), 0))) / 864e5) - ((new Date().getDay() + 6) % 7)
})
const initials = (name) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
</script>

<template>
  <div class="space-y-5">
    <header class="slide-up">
      <h1 class="text-2xl font-black">🏆 Clasament săptămânal</h1>
      <p class="font-semibold text-muted">Se resetează luni · mai sunt {{ daysLeft }} {{ daysLeft === 1 ? 'zi' : 'zile' }}</p>
    </header>

    <section class="grid grid-cols-2 gap-2">
      <div class="card p-4 text-center">
        <p class="text-3xl font-black text-brand-600">{{ store.weekXp }}</p>
        <p class="text-xs font-bold text-muted">XP săptămâna asta</p>
      </div>
      <div class="card p-4 text-center">
        <p class="text-3xl font-black text-amber-500">{{ store.leaderboardOptIn ? `#${myRank}` : '–' }}</p>
        <p class="text-xs font-bold text-muted">locul tău</p>
      </div>
    </section>

    <section v-if="store.leaderboardOptIn" class="card divide-y-2 divide-gray-100 overflow-hidden">
      <div
        v-for="(r, i) in store.leaderboard"
        :key="r.name + i"
        class="flex items-center gap-3 px-4 py-3 pop-in"
        :class="r.me && 'bg-brand-50'"
        :style="{ animationDelay: `${i * 40}ms` }"
      >
        <span class="w-7 text-center text-lg font-black text-muted">{{ medals[i] ?? i + 1 }}</span>
        <span
          class="flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white"
          :class="r.me ? 'bg-brand-500' : 'bg-gray-300'"
        >
          {{ initials(r.name) }}
        </span>
        <span class="flex-1 font-extrabold" :class="r.me && 'text-brand-700'">{{ r.name }}{{ r.me ? ' (tu)' : '' }}</span>
        <span class="font-black">{{ r.xp }} <span class="text-xs text-muted">XP</span></span>
      </div>
    </section>

    <section v-else class="card p-6 text-center">
      <p class="text-4xl">🙈</p>
      <p class="font-extrabold">Nu apari în clasament</p>
      <p class="text-sm font-semibold text-muted">Îți strângi XP-ul în continuare, doar că nu te compari cu alții.</p>
    </section>

    <section class="card space-y-2 p-5">
      <h2 class="font-black">Cum câștigi XP</h2>
      <ul class="space-y-1 text-sm font-bold text-muted">
        <li>🃏 Cartonaș repetat: <span class="text-ink">+{{ XP.card }} XP</span></li>
        <li>✅ Grilă corectă: <span class="text-ink">+{{ XP.correct }} XP</span> · greșită: <span class="text-ink">+{{ XP.wrong }} XP</span></li>
        <li>🎓 Simulare de examen terminată: <span class="text-ink">+{{ XP.exam }} XP</span></li>
      </ul>
      <label class="flex cursor-pointer items-center justify-between gap-3 border-t-2 border-gray-100 pt-3 font-bold">
        <span>
          Apar în clasament
          <span class="block text-xs font-semibold text-muted">Opțional – dezactivează dacă te stresează.</span>
        </span>
        <input v-model="store.leaderboardOptIn" type="checkbox" class="h-6 w-6 accent-brand-600" />
      </label>
      <p class="text-xs font-semibold text-muted">Demo: colegii din listă sunt fictivi.</p>
    </section>
  </div>
</template>
