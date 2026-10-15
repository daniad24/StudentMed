<script setup>
import { computed, ref } from 'vue'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()

// Se deschide pe anul studentului (din Profil); schimbarea tab-ului e doar pentru vizita curentă.
const year = ref(store.studyYear ?? 1)

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
    <header class="slide-up">
      <h1 class="text-2xl font-black">Materii</h1>
      <p class="text-sm font-semibold text-muted">Disciplinele pe ani, după planul de învățământ UMF „Carol Davila”.</p>
    </header>

    <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
      <button
        v-for="y in years"
        :key="y.id"
        class="btn shrink-0 px-4 py-2"
        :class="year === y.id ? 'btn-primary' : 'btn-white'"
        @click="year = y.id"
      >
        {{ y.name }}<span v-if="y.id === store.studyYear" class="ml-1 opacity-80">· al tău</span>
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
      La alte facultăți unele materii se fac în alt an.
    </p>

    <RouterLink
      to="/rezidentiat"
      class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
    >
      <span class="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-violet-200 bg-violet-100 text-xl">🎯</span>
      <span class="flex-1">
        <span class="block font-black">După facultate: rezidențiat</span>
        <span class="block text-xs font-semibold text-muted">Grile în formatul concursului, pe capitolele din bibliografie</span>
      </span>
      <AppIcon name="forward" class="text-muted" />
    </RouterLink>
  </div>
</template>
