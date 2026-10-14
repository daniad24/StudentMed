<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close', 'submit'])
const reasons = ['Informație medicală greșită', 'Conținut copiat / drepturi de autor', 'Link nefuncțional', 'Altceva']
const reason = ref(reasons[0])
const details = ref('')

function submit() {
  emit('submit', details.value.trim() ? `${reason.value}: ${details.value.trim()}` : reason.value)
}
</script>

<template>
  <div class="fixed inset-0 z-30 flex items-end justify-center bg-black/40 p-4 sm:items-center" @click.self="emit('close')">
    <div class="card w-full max-w-md p-5 slide-up">
      <h2 class="text-xl font-black">🚩 Raportează o problemă</h2>
      <div class="mt-4 space-y-2">
        <label
          v-for="r in reasons"
          :key="r"
          class="flex cursor-pointer items-center gap-3 rounded-2xl border-2 px-4 py-3 font-bold"
          :class="reason === r ? 'border-brand-500 bg-brand-50' : 'border-gray-200'"
        >
          <input v-model="reason" type="radio" :value="r" class="accent-brand-600" />
          {{ r }}
        </label>
      </div>
      <textarea v-model="details" class="input mt-3" rows="3" placeholder="Detalii (opțional): ce e greșit și care e varianta corectă?"></textarea>
      <div class="mt-4 grid grid-cols-2 gap-2">
        <button class="btn btn-white" @click="emit('close')">Anulează</button>
        <button class="btn btn-red" @click="submit">Trimite</button>
      </div>
    </div>
  </div>
</template>
