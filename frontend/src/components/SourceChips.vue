<script setup>
import { computed } from 'vue'
import { useAppStore } from '../stores/app'

// Filtru pe origine: ce exersezi (scris de Steto, generat de AI sau făcut de tine). Alegerea se păstrează.
const props = defineProps({ counts: { type: Object, required: true } })
const store = useAppStore()
const options = computed(() =>
  [
    { id: 'all', label: 'Toate' },
    { id: 'steto', label: '✅ Steto' },
    { id: 'ai', label: '🤖 Generate AI' },
    { id: 'mine', label: '👤 Ale mele' },
  ].filter((o) => o.id === 'all' || o.id === 'steto' || props.counts[o.id] > 0),
)
</script>

<template>
  <div class="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label="Filtrează după origine">
    <button
      v-for="o in options"
      :key="o.id"
      class="chip shrink-0 border-2 py-1.5 text-sm"
      :class="store.sourceFilter === o.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'"
      @click="store.sourceFilter = o.id"
    >
      {{ o.label }} <span class="opacity-60">{{ counts[o.id] }}</span>
    </button>
  </div>
</template>
