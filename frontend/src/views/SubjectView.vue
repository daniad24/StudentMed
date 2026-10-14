<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import MaterialItem from '../components/MaterialItem.vue'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = computed(() => subjects.find((s) => s.id === route.params.id))
const tab = computed(() => route.query.tab || 'materiale')
const setTab = (t) => router.replace({ query: { tab: t } })

const filter = ref('all')
const filters = [
  { id: 'all', label: 'Toate' },
  { id: 'recommended', label: '⭐ Recomandate' },
  { id: 'summary', label: '📝 Rezumate' },
  { id: 'link', label: '🔗 Linkuri' },
]

const materials = computed(() => {
  const list = store.materialsFor(route.params.id)
  if (filter.value === 'recommended') return list.filter((m) => m.recommended)
  if (filter.value === 'summary' || filter.value === 'link') return list.filter((m) => m.type === filter.value)
  return list
})

const stats = computed(() => store.cardStats(route.params.id))
const cards = computed(() => store.cardsFor(route.params.id))
const questionCount = computed(() => store.questionsFor(route.params.id).length)
</script>

<template>
  <div v-if="subject" class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <button class="btn btn-white px-3 py-2" aria-label="Înapoi" @click="router.push('/materii')">‹</button>
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-2xl" :class="subject.color">{{ subject.emoji }}</span>
      <h1 class="text-2xl font-black">{{ subject.name }}</h1>
    </header>

    <div class="grid grid-cols-3 rounded-2xl bg-gray-100 p-1 text-sm font-extrabold">
      <button
        v-for="t in [{ id: 'materiale', label: '📚 Materiale' }, { id: 'flashcards', label: '🃏 Cartonașe' }, { id: 'grile', label: '✅ Grile' }]"
        :key="t.id"
        class="rounded-xl py-2 transition-colors"
        :class="tab === t.id ? 'bg-white shadow text-brand-700' : 'text-muted'"
        @click="setTab(t.id)"
      >
        {{ t.label }}
      </button>
    </div>

    <!-- Materiale -->
    <section v-if="tab === 'materiale'" class="space-y-3">
      <div class="flex gap-2 overflow-x-auto pb-1">
        <button
          v-for="f in filters"
          :key="f.id"
          class="chip border-2 py-1.5 text-sm"
          :class="filter === f.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-white text-muted'"
          @click="filter = f.id"
        >
          {{ f.label }}
        </button>
      </div>
      <p v-if="store.isAdmin" class="rounded-2xl bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
        Mod admin: apasă ⭐ ca să marchezi un material ca Recomandat.
      </p>
      <TransitionGroup name="fade" tag="div" class="space-y-2">
        <MaterialItem v-for="m in materials" :key="m.id" :material="m" />
      </TransitionGroup>
      <div v-if="!materials.length" class="card p-6 text-center">
        <p class="text-3xl">📭</p>
        <p class="font-extrabold">Niciun material încă</p>
        <p class="text-sm font-semibold text-muted">Fii primul care adaugă ceva util!</p>
      </div>
      <RouterLink :to="`/adauga?materie=${subject.id}&tip=material`" class="btn btn-white w-full">➕ Adaugă material</RouterLink>
    </section>

    <!-- Flashcards -->
    <section v-else-if="tab === 'flashcards'" class="space-y-3">
      <div class="card p-5">
        <div class="grid grid-cols-3 text-center">
          <div><p class="text-2xl font-black">{{ stats.total }}</p><p class="text-xs font-bold text-muted">total</p></div>
          <div><p class="text-2xl font-black text-orange-500">{{ stats.due }}</p><p class="text-xs font-bold text-muted">de repetat</p></div>
          <div><p class="text-2xl font-black text-brand-600">{{ stats.known }}</p><p class="text-xs font-bold text-muted">știute</p></div>
        </div>
        <div class="mt-4 grid gap-2">
          <RouterLink v-if="stats.due" :to="`/flashcards/${subject.id}`" class="btn btn-primary w-full">Începe repetarea ({{ stats.due }})</RouterLink>
          <RouterLink v-if="stats.total" :to="`/flashcards/${subject.id}?toate=1`" class="btn btn-white w-full">Repetă toate cartonașele</RouterLink>
        </div>
      </div>
      <div v-if="cards.length" class="space-y-2">
        <div v-for="c in cards" :key="c.id" class="card p-3">
          <p class="font-extrabold">{{ c.front }}</p>
          <p class="text-sm font-semibold text-muted">{{ c.back }}</p>
        </div>
      </div>
      <div v-else class="card p-6 text-center">
        <p class="text-3xl">🃏</p>
        <p class="font-extrabold">Niciun cartonaș încă</p>
      </div>
      <RouterLink :to="`/adauga?materie=${subject.id}&tip=flashcard`" class="btn btn-white w-full">➕ Adaugă cartonaș</RouterLink>
    </section>

    <!-- Grile -->
    <section v-else class="space-y-3">
      <div class="card p-6 text-center">
        <p class="text-5xl">✅</p>
        <p class="mt-2 text-xl font-black">{{ questionCount }} grile disponibile</p>
        <p class="text-sm font-semibold text-muted">Primești 10 întrebări aleatorii, ai 3 minute.</p>
        <RouterLink v-if="questionCount" :to="`/pauza/${subject.id}`" class="btn btn-blue mt-4 w-full">⏱️ Începe quiz-ul</RouterLink>
        <p v-else class="mt-3 text-sm font-bold text-muted">Grilele pentru această materie vin în curând.</p>
      </div>
    </section>
  </div>
</template>
