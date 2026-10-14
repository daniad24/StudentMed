<script setup>
import { computed } from 'vue'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()
const list = computed(() =>
  subjects.map((s) => ({ ...s, count: store.questionsFor(s.id).length })).filter((s) => s.count > 0),
)
</script>

<template>
  <div class="space-y-5">
    <header class="rounded-3xl border-b-4 border-[#0369a1] bg-gradient-to-br from-sky-400 to-sky-600 p-6 text-center text-white slide-up">
      <p class="text-5xl">⏱️</p>
      <h1 class="mt-2 text-2xl font-black">Pauza de gardă</h1>
      <p class="font-semibold text-white/90">10 grile aleatorii · 3 minute. Alege materia:</p>
    </header>

    <div class="grid gap-2 sm:grid-cols-2">
      <component
        :is="s.count ? 'RouterLink' : 'div'"
        v-for="(s, i) in list"
        :key="s.id"
        :to="s.count ? `/pauza/${s.id}` : undefined"
        class="card flex items-center gap-3 p-4 pop-in"
        :class="s.count ? 'transition-transform active:translate-y-[2px]' : 'opacity-50'"
        :style="{ animationDelay: `${i * 40}ms` }"
      >
        <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-2xl" :class="s.color">{{ s.emoji }}</span>
        <div class="flex-1">
          <p class="font-extrabold">{{ s.name }}</p>
          <p class="text-xs font-bold text-muted">{{ s.count ? `${s.count} grile` : 'în curând' }}</p>
        </div>
        <AppIcon v-if="s.count" name="forward" class="text-sky-500" />
      </component>
    </div>
  </div>
</template>
