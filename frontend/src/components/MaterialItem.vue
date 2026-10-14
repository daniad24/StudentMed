<script setup>
import { useAppStore } from '../stores/app'
import MaterialBadges from './MaterialBadges.vue'

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
      <MaterialBadges :material="props.material" class="mb-1" />
      <p class="font-extrabold leading-snug">{{ props.material.title }}</p>
      <p class="text-xs font-bold text-muted">
        <template v-if="props.material.topic">{{ props.material.topic }} · </template>{{ props.material.author }}
      </p>
    </RouterLink>

    <button
      v-if="store.isAdmin"
      class="self-center rounded-xl border-2 px-2 py-1 text-xl transition-transform active:scale-90"
      :class="props.material.adminPick ? 'border-amber-300 bg-amber-50' : 'border-gray-200 grayscale'"
      :title="props.material.adminPick ? 'Scoate recomandarea de admin' : 'Recomandă ca admin'"
      @click="store.toggleRecommended(props.material.id)"
    >
      ⭐
    </button>
  </div>
</template>
