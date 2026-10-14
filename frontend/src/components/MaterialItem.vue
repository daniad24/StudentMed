<script setup>
import { useAppStore } from '../stores/app'

const props = defineProps({ material: { type: Object, required: true } })
const store = useAppStore()
</script>

<template>
  <div class="card flex items-stretch gap-3 p-3">
    <button
      class="flex w-14 shrink-0 flex-col items-center justify-center rounded-2xl border-2 font-black transition-all active:scale-90"
      :class="props.material.voted ? 'border-brand-500 bg-brand-50 text-brand-600' : 'border-gray-200 text-muted'"
      :aria-label="props.material.voted ? 'Retrage votul' : 'Votează'"
      @click="store.toggleVote(props.material.id)"
    >
      <span class="text-lg leading-none">▲</span>
      <span>{{ props.material.votes }}</span>
    </button>

    <RouterLink :to="`/material/${props.material.id}`" class="min-w-0 flex-1 py-1">
      <div class="mb-1 flex flex-wrap gap-1">
        <span v-if="props.material.recommended" class="chip bg-amber-100 text-amber-700">⭐ Recomandat</span>
        <span v-else class="chip bg-gray-100 text-muted">👥 Comunitate</span>
        <span class="chip" :class="props.material.type === 'link' ? 'bg-sky-100 text-sky-700' : 'bg-violet-100 text-violet-700'">
          {{ props.material.type === 'link' ? '🔗 Link' : '📝 Rezumat' }}
        </span>
      </div>
      <p class="font-extrabold leading-snug">{{ props.material.title }}</p>
      <p class="text-xs font-bold text-muted">de {{ props.material.author }}</p>
    </RouterLink>

    <button
      v-if="store.isAdmin"
      class="self-center rounded-xl border-2 px-2 py-1 text-xl transition-transform active:scale-90"
      :class="props.material.recommended ? 'border-amber-300 bg-amber-50' : 'border-gray-200 grayscale'"
      :title="props.material.recommended ? 'Scoate badge-ul Recomandat' : 'Marchează ca Recomandat'"
      @click="store.toggleRecommended(props.material.id)"
    >
      ⭐
    </button>
  </div>
</template>
