<script setup>
import { computed, ref, watch } from 'vue'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()

// Anul ales rămâne salvat pe dispozitiv.
const YEAR_KEY = 'studentmed-year'
const readYear = () => {
  try {
    return Number(localStorage.getItem(YEAR_KEY)) || 1
  } catch {
    return 1
  }
}
const year = ref(readYear())
watch(year, (y) => {
  try {
    localStorage.setItem(YEAR_KEY, String(y))
  } catch {
    // ignorat
  }
})

const list = computed(() =>
  subjects
    .filter((s) => s.years.includes(year.value))
    .map((s) => {
      const materials = store.materialsFor(s.id).length
      const cards = store.cardStats(s.id)
      const questions = store.questionsFor(s.id).length
      return { ...s, materials, ...cards, questions, empty: !materials && !cards.total && !questions }
    })
    .sort((a, b) => a.empty - b.empty),
)
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black slide-up">Materii</h1>

    <RouterLink
      to="/rezidentiat"
      class="flex items-center gap-3 rounded-3xl border-b-4 border-[#6d28d9] bg-gradient-to-br from-violet-500 to-violet-700 p-4 text-white transition-transform active:translate-y-[2px] slide-up"
    >
      <span class="text-4xl">🎯</span>
      <span class="flex-1">
        <span class="block text-lg font-black">Pregătire rezidențiat</span>
        <span class="block text-sm font-semibold text-white/90">Grile pe capitolele din Kumar & Clark și Lawrence</span>
      </span>
      <AppIcon name="forward" :size="26" />
    </RouterLink>

    <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      <button
        v-for="y in years"
        :key="y.id"
        class="btn shrink-0 px-4 py-2"
        :class="year === y.id ? 'btn-primary' : 'btn-white'"
        @click="year = y.id"
      >
        {{ y.name }}
      </button>
    </div>

    <div class="grid gap-3 sm:grid-cols-2">
      <component
        :is="s.empty ? 'div' : 'RouterLink'"
        v-for="(s, i) in list"
        :key="s.id"
        :to="s.empty ? undefined : `/materie/${s.id}`"
        class="card p-4 pop-in"
        :class="s.empty ? 'opacity-60' : 'transition-transform active:translate-y-[2px]'"
        :style="{ animationDelay: `${i * 40}ms` }"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 text-3xl" :class="s.color">{{ s.emoji }}</span>
          <div class="min-w-0 flex-1">
            <p class="text-lg font-black leading-tight">{{ s.name }}</p>
            <p v-if="s.empty" class="mt-1 text-xs font-bold text-muted">⏳ Conținut în curând</p>
            <p v-else class="mt-1 text-xs font-bold text-muted">
              {{ s.materials }} materiale · {{ s.total }} cartonașe · {{ s.questions }} grile
            </p>
            <span v-if="s.rez" class="chip mt-1 bg-violet-100 text-violet-700">🎯 Rezidențiat</span>
          </div>
        </div>
        <div v-if="s.total" class="mt-3">
          <div class="h-3 overflow-hidden rounded-full bg-gray-100">
            <div class="h-full rounded-full bg-brand-500 transition-all" :style="{ width: `${(s.known / s.total) * 100}%` }"></div>
          </div>
          <p class="mt-1 text-xs font-bold text-muted">{{ s.known }}/{{ s.total }} cartonașe știute</p>
        </div>
      </component>
    </div>

    <p class="text-center text-xs font-semibold text-muted">
      Ordinea pe ani urmează planul de învățământ UMF „Carol Davila” București. La alte facultăți unele materii se fac în alt an.
    </p>
  </div>
</template>
