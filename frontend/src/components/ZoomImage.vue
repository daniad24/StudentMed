<script setup>
import { onUnmounted, ref, watch } from 'vue'

// Imagine care se mărește la atingere (util pentru traseele ECG și schemele de pe telefon).
defineProps({ src: { type: String, required: true }, alt: { type: String, default: '' }, credit: { type: Object, default: null } })
const open = ref(false)

function onKey(e) {
  if (e.key === 'Escape') open.value = false
}
watch(open, (v) => (v ? window.addEventListener('keydown', onKey) : window.removeEventListener('keydown', onKey)))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <figure class="my-3">
    <img :src="src" :alt="alt" loading="lazy" class="w-full cursor-zoom-in rounded-2xl border-2 border-gray-200 bg-white" @click.stop="open = true" />
    <figcaption class="mt-1 text-center text-xs font-bold text-muted">Atinge imaginea ca s-o mărești</figcaption>
    <p v-if="credit" class="mt-0.5 text-center text-[11px] font-semibold text-muted">
      Foto: {{ credit.author || 'autor necunoscut' }} · {{ credit.license }} ·
      <a :href="credit.source" target="_blank" rel="noopener" class="underline">sursa</a>
    </p>
  </figure>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3" @click="open = false">
      <div class="max-h-full w-full max-w-4xl overflow-auto rounded-2xl bg-white p-2">
        <img :src="src" :alt="alt" class="w-full" />
      </div>
      <button class="absolute right-3 top-3 h-11 w-11 rounded-full bg-white text-xl font-black" aria-label="Închide" @click.stop="open = false">✕</button>
    </div>
  </Teleport>
</template>
