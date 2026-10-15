<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, topicMaps } from '../data/mock'

const store = useAppStore()
const route = useRoute()
const router = useRouter()

const mode = ref(route.query.mod === 'seara' ? 'seara' : 'tinta')
const MODES = [
  { id: 'tinta', label: '🎯 Pe subiecte', hint: 'Alegi subiectele și timpul, primești sesiunea.' },
  { id: 'seara', label: '🌙 Seara dinainte', hint: 'Esențialul, greșelile tale, cartonașele slabe și un test final.' },
]
const TIMES = [15, 30, 60, 120]

// Materiile cu subiecte: ale anului tău primele, apoi examenele programate.
const options = computed(() => {
  const withTopics = subjects.filter((s) => topicMaps[s.id])
  const mine = (s) => (store.studyYear && s.years.includes(store.studyYear) ? 0 : 1)
  const soon = (s) => (store.examDates[s.id] ? 0 : 1)
  return [...withTopics].sort((a, b) => soon(a) - soon(b) || mine(a) - mine(b))
})

const subjectId = ref(route.query.materie && topicMaps[route.query.materie] ? route.query.materie : '')
const topics = computed(() => (subjectId.value ? store.topicsFor(subjectId.value) : []))
const picked = ref([])
const minutes = ref(30)

watch(subjectId, () => (picked.value = topics.value.map((t) => t.id)), { immediate: true })

const allPicked = computed(() => picked.value.length === topics.value.length)
const subject = computed(() => subjects.find((s) => s.id === subjectId.value))
const examDays = computed(() => (subjectId.value ? store.examPlan(subjectId.value)?.daysLeft : null))

function toggle(id) {
  picked.value = picked.value.includes(id) ? picked.value.filter((x) => x !== id) : [...picked.value, id]
}

function start() {
  store.buildPlan(subjectId.value, picked.value, mode.value, minutes.value)
  router.push('/tinta/plan')
}
</script>

<template>
  <div class="space-y-5">
    <header class="slide-up">
      <h1 class="text-2xl font-black">Pregătire la țintă</h1>
      <p class="text-sm font-semibold text-muted">Ai test la câteva subiecte? Spune-ne care și îți facem planul.</p>
    </header>

    <div class="grid grid-cols-2 gap-2">
      <button
        v-for="m in MODES"
        :key="m.id"
        class="btn px-2 py-3 text-sm"
        :class="mode === m.id ? 'btn-primary' : 'btn-white'"
        @click="mode = m.id"
      >
        {{ m.label }}
      </button>
    </div>
    <p class="-mt-2 text-sm font-semibold text-muted">{{ MODES.find((m) => m.id === mode).hint }}</p>

    <section>
      <h2 class="mb-2 font-black">1. Materia</h2>
      <div class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <button
          v-for="s in options"
          :key="s.id"
          class="btn shrink-0 px-3 py-2 text-sm"
          :class="subjectId === s.id ? 'btn-primary' : 'btn-white'"
          @click="subjectId = s.id"
        >
          {{ s.emoji }} {{ s.name }}
        </button>
      </div>
    </section>

    <template v-if="subject">
      <p v-if="examDays !== null && examDays !== undefined && examDays >= 0" class="chip bg-violet-100 text-violet-700">
        📅 {{ examDays === 0 ? 'Examenul e azi' : `Mai sunt ${examDays} zile până la examen` }}
      </p>

      <section>
        <div class="mb-2 flex items-baseline justify-between">
          <h2 class="font-black">2. Subiectele</h2>
          <button class="text-sm font-bold text-brand-600" @click="picked = allPicked ? [] : topics.map((t) => t.id)">
            {{ allPicked ? 'Șterge tot' : 'Alege tot' }}
          </button>
        </div>
        <div class="space-y-2">
          <button
            v-for="t in topics"
            :key="t.id"
            class="card flex w-full items-center gap-3 p-3 text-left transition-transform active:translate-y-[2px]"
            :class="picked.includes(t.id) ? 'border-brand-500 bg-brand-50' : ''"
            @click="toggle(t.id)"
          >
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 font-black"
              :class="picked.includes(t.id) ? 'border-brand-600 bg-brand-500 text-white' : 'border-gray-300'"
            >
              {{ picked.includes(t.id) ? '✓' : '' }}
            </span>
            <span class="min-w-0 flex-1">
              <span class="block font-extrabold leading-tight">{{ t.name }}</span>
              <span class="block text-xs font-semibold text-muted">{{ t.summaries }} rezumate · {{ t.cards }} cartonașe · {{ t.questions }} grile</span>
            </span>
          </button>
        </div>
      </section>

      <section v-if="mode === 'tinta'">
        <h2 class="mb-2 font-black">3. Cât timp ai?</h2>
        <div class="grid grid-cols-4 gap-2">
          <button v-for="t in TIMES" :key="t" class="btn px-1 py-2" :class="minutes === t ? 'btn-primary' : 'btn-white'" @click="minutes = t">
            {{ t < 60 ? `${t} min` : `${t / 60} h` }}
          </button>
        </div>
      </section>

      <button class="btn btn-primary w-full" :disabled="!picked.length" @click="start">
        {{ mode === 'seara' ? 'Pregătește seara dinainte' : 'Fă-mi planul' }}
      </button>
    </template>
  </div>
</template>
