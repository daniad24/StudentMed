<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { questions, subjects } from '../data/mock'
import { normalize, snippet } from '../lib/text'
import { correctTexts } from '../lib/quiz'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const query = ref(route.query.q ?? '')
const input = ref(null)
onMounted(() => input.value?.focus())
watch(query, (q) => router.replace({ query: q ? { q } : {} }))

const subjectById = (id) => subjects.find((s) => s.id === id)
const LIMIT = 20

const results = computed(() => {
  const q = normalize(query.value.trim())
  if (q.length < 2) return null
  const has = (...fields) => fields.some((f) => normalize(f).includes(q))
  return {
    materials: store.allMaterials.filter((m) => has(m.title, m.content)).sort((a, b) => b.votes - a.votes),
    cards: store.allCards.filter((c) => has(c.front, c.back)),
    questions: questions.filter((x) => has(x.text, ...x.options, x.explanation)),
  }
})

const total = computed(() =>
  results.value ? results.value.materials.length + results.value.cards.length + results.value.questions.length : 0,
)

const suggestions = ['nervul frenic', 'glicoliza', 'surfactant', 'Gram', 'beta-blocante', 'icter']
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <button class="btn btn-white px-3 py-2" aria-label="Înapoi" @click="router.back()">‹</button>
      <div class="relative flex-1">
        <span class="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-lg">🔍</span>
        <input
          ref="input"
          v-model="query"
          type="search"
          class="input pl-11"
          placeholder="Caută în materiale, cartonașe, grile…"
          aria-label="Caută"
        />
      </div>
    </header>

    <div v-if="!results" class="card p-5">
      <p class="font-extrabold">Încearcă:</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <button v-for="s in suggestions" :key="s" class="chip border-2 border-gray-200 bg-surface py-1.5 text-sm text-muted" @click="query = s">
          {{ s }}
        </button>
      </div>
    </div>

    <div v-else-if="!total" class="card p-6 text-center">
      <p class="text-4xl">🤷</p>
      <p class="font-extrabold">Niciun rezultat pentru „{{ query }}”</p>
      <p class="text-sm font-semibold text-muted">Încearcă un termen mai scurt sau fără diacritice.</p>
    </div>

    <template v-else>
      <section v-if="results.materials.length">
        <h2 class="mb-2 font-black">📚 Materiale <span class="text-muted">({{ results.materials.length }})</span></h2>
        <div class="space-y-2">
          <RouterLink v-for="m in results.materials.slice(0, LIMIT)" :key="m.id" :to="`/material/${m.id}`" class="card block p-4">
            <p class="text-xs font-bold text-muted">{{ subjectById(m.subjectId)?.emoji }} {{ subjectById(m.subjectId)?.name }} · ▲ {{ m.votes }}</p>
            <p class="font-extrabold">{{ m.title }}</p>
            <p v-if="m.content" class="mt-1 text-sm font-semibold text-muted">{{ snippet(m.content, query.trim()) }}</p>
          </RouterLink>
        </div>
      </section>

      <section v-if="results.cards.length">
        <h2 class="mb-2 font-black">🃏 Cartonașe <span class="text-muted">({{ results.cards.length }})</span></h2>
        <div class="space-y-2">
          <RouterLink v-for="c in results.cards.slice(0, LIMIT)" :key="c.id" :to="`/materie/${c.subjectId}?tab=flashcards`" class="card block p-4">
            <p class="text-xs font-bold text-muted">{{ subjectById(c.subjectId)?.emoji }} {{ subjectById(c.subjectId)?.name }}</p>
            <p class="font-extrabold">{{ c.front }}</p>
            <p class="text-sm font-semibold text-brand-700">{{ c.back }}</p>
          </RouterLink>
        </div>
      </section>

      <section v-if="results.questions.length">
        <h2 class="mb-2 font-black">✅ Grile <span class="text-muted">({{ results.questions.length }})</span></h2>
        <div class="space-y-2">
          <details v-for="q in results.questions.slice(0, LIMIT)" :key="q.id" class="card p-4">
            <summary class="cursor-pointer list-none">
              <p class="text-xs font-bold text-muted">{{ subjectById(q.subjectId)?.emoji }} {{ subjectById(q.subjectId)?.name }} · atinge pentru răspuns</p>
              <p class="font-extrabold">{{ q.text }}</p>
            </summary>
            <p class="mt-2 text-sm font-bold text-brand-700">✓ {{ correctTexts(q).join(' · ') }}</p>
            <p v-if="q.explanation" class="mt-1 text-sm font-semibold text-muted">💡 {{ q.explanation }}</p>
          </details>
        </div>
      </section>
    </template>
  </div>
</template>
