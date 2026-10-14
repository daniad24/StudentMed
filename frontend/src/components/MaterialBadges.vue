<script setup>
import { RECOMMEND_VOTES } from '../stores/app'

defineProps({ material: { type: Object, required: true }, detailed: { type: Boolean, default: false } })
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <span v-if="material.source === 'trusted'" class="chip bg-sky-100 text-sky-700">✅ Sursă de încredere</span>
    <span v-else-if="material.mine" class="chip bg-violet-100 text-violet-700">👤 Al tău</span>
    <span v-else class="chip bg-gray-100 text-muted">👥 Comunitate</span>

    <span
      v-if="material.recommended"
      class="chip bg-amber-100 text-amber-700"
      :title="material.recommendedBy === 'admin' ? 'Ales de admin' : `Peste ${RECOMMEND_VOTES} de voturi de la colegi`"
    >
      {{ detailed ? `⭐ Recomandat ${material.recommendedBy === 'admin' ? 'de admin' : 'de colegi'}` : '⭐ Recomandat' }}
    </span>

    <span v-if="material.type === 'link'" class="chip bg-sky-100 text-sky-700">🔗 Link</span>
    <span v-else-if="material.readMinutes" class="chip bg-gray-100 text-muted">📖 {{ material.readMinutes }} min</span>
  </div>
</template>
