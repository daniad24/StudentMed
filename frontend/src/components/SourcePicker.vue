<script setup>
import { computed } from 'vue'

// Alegerea „din ce document”: Toate sau una ori mai multe surse (Steto, fiecare curs încărcat, AI, ale mele).
// modelValue: null = toate; altfel lista de chei alese.
const props = defineProps({
  sources: { type: Array, required: true }, // [{ key, label, count }]
  modelValue: { type: Array, default: null },
  accent: { type: String, default: 'sky' },
  // alegerea e cea implicită (studentul n-a ales încă): prima atingere înseamnă „doar asta”
  fresh: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const total = computed(() => props.sources.reduce((a, s) => a + s.count, 0))
const valid = computed(() => (props.modelValue ?? []).filter((k) => props.sources.some((s) => s.key === k)))
const isAll = computed(() => !valid.value.length)
const isOn = (key) => !isAll.value && valid.value.includes(key)

function toggle(key) {
  // din „Toate”, prima apăsare înseamnă „doar asta”; apoi se pot adăuga și altele
  const next = isAll.value || (props.fresh && !isOn(key)) ? [key] : isOn(key) ? valid.value.filter((k) => k !== key) : [...valid.value, key]
  emit('update:modelValue', next.length && next.length < props.sources.length ? next : null)
}
const on = computed(() => (props.accent === 'brand' ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-sky-500 bg-sky-50 text-sky-700'))
</script>

<template>
  <div class="grid gap-2">
    <button class="flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm font-extrabold" :class="isAll ? on : 'border-gray-200 bg-surface text-muted'" @click="emit('update:modelValue', null)">
      <span class="flex-1">🔀 Toate sursele</span><span class="opacity-70">{{ total }}</span>
    </button>
    <button
      v-for="s in sources"
      :key="s.key"
      class="flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm font-extrabold"
      :class="isOn(s.key) ? on : 'border-gray-200 bg-surface text-muted'"
      @click="toggle(s.key)"
    >
      <span class="w-5 shrink-0 text-center">{{ isOn(s.key) ? '✓' : '' }}</span>
      <span class="min-w-0 flex-1 truncate">{{ s.label }}</span>
      <span class="opacity-70">{{ s.count }}</span>
    </button>
    <p v-if="sources.length > 1" class="text-xs font-semibold text-muted">Atinge o sursă ca să lucrezi doar din ea; atinge și altele ca să le combini.</p>
  </div>
</template>
