<script setup>
import { computed, ref } from 'vue'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'

const store = useAppStore()
const year = ref(1)

const list = computed(() =>
  subjects
    .filter((s) => s.year === year.value)
    .map((s) => ({
      ...s,
      materials: store.materialsFor(s.id).length,
      ...store.cardStats(s.id),
      questions: store.questionsFor(s.id).length,
    })),
)
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black slide-up">Materii</h1>

    <div class="flex gap-2 overflow-x-auto pb-1">
      <button
        v-for="y in years"
        :key="y.id"
        class="btn px-4 py-2"
        :class="year === y.id ? 'btn-primary' : 'btn-white'"
        @click="year = y.id"
      >
        {{ y.name }}
      </button>
    </div>

    <div class="grid gap-3 sm:grid-cols-2">
      <RouterLink
        v-for="(s, i) in list"
        :key="s.id"
        :to="`/materie/${s.id}`"
        class="card p-4 transition-transform active:translate-y-[2px] pop-in"
        :style="{ animationDelay: `${i * 50}ms` }"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-3xl" :class="s.color">{{ s.emoji }}</span>
          <div class="flex-1">
            <p class="text-lg font-black">{{ s.name }}</p>
            <p class="text-xs font-bold text-muted">
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
      </RouterLink>
    </div>
  </div>
</template>
