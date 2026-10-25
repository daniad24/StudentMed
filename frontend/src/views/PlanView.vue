<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, topicMaps } from '../data/mock'
import BackButton from '../components/BackButton.vue'

const store = useAppStore()
const router = useRouter()
const session = computed(() => store.targetSession)

if (!store.targetSession) router.replace('/tinta')

const subject = computed(() => subjects.find((s) => s.id === session.value?.subjectId))
const topicNames = computed(() => {
  const set = new Set(session.value?.topicIds ?? [])
  return (topicMaps[session.value?.subjectId]?.topics ?? []).filter((t) => set.has(t.id)).map((t) => t.name)
})
const totalMinutes = computed(() => session.value?.blocks.reduce((a, b) => a + b.minutes, 0) ?? 0)
const allDone = computed(() => session.value && session.value.blocks.length && session.value.done.length >= session.value.blocks.length)

const ICON = { summaries: '📖', cards: '🃏', quiz: '📝', case: '🧩' }

function summaryTitle(id) {
  return store.allMaterials.find((m) => m.id === id)?.title ?? id
}

function link(b) {
  const sid = session.value.subjectId
  if (b.kind === 'cards') return `/flashcards/${sid}?bloc=${b.key}`
  if (b.kind === 'quiz') return `/pauza/${sid}?bloc=${b.key}&t=${Date.now()}`
  if (b.kind === 'case') return `/caz/${b.caseId}?bloc=${b.key}`
  return null
}
</script>

<template>
  <div v-if="session" class="space-y-4">
    <header class="flex items-center gap-3 slide-up">
      <BackButton :to="session.courseId ? '/cursuri' : '/tinta'" />
      <div class="min-w-0">
        <h1 class="truncate text-xl font-black">{{ session.mode === 'seara' ? '🌙 Seara dinainte' : '🎯 Planul tău' }}</h1>
        <p class="truncate text-sm font-semibold text-muted">{{ subject?.emoji }} {{ session.courseName ?? subject?.name }} · ~{{ totalMinutes }} min</p>
      </div>
    </header>

    <p v-if="session.courseId" class="text-xs font-semibold text-muted">📘 Din cursul tău, cu grilele și cartonașele generate din el.</p>
    <p v-else class="text-xs font-semibold text-muted">Subiecte: {{ topicNames.join(' · ') }}</p>

    <div v-if="!session.blocks.length" class="card p-5 text-center">
      <p class="text-3xl">🤷</p>
      <p class="font-extrabold">Nu avem încă nimic pentru subiectele alese.</p>
      <p class="text-sm font-semibold text-muted">Alege alte subiecte sau mărește timpul.</p>
    </div>

    <div v-for="(b, i) in session.blocks" :key="b.key" class="card space-y-2 p-4" :class="session.done.includes(b.key) ? 'opacity-70' : ''">
      <div class="flex items-center gap-3">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-2xl">
          {{ session.done.includes(b.key) ? '✅' : ICON[b.kind] }}
        </span>
        <div class="min-w-0 flex-1">
          <p class="font-black leading-tight">{{ i + 1 }}. {{ b.title }}</p>
          <p class="text-sm font-semibold text-muted">{{ b.note }} · ~{{ b.minutes }} min</p>
        </div>
      </div>

      <div v-if="b.kind === 'summaries'" class="space-y-1">
        <RouterLink v-for="id in b.summaryIds" :key="id" :to="`/material/${id}`" class="block rounded-xl bg-gray-100 px-3 py-2 text-sm font-bold">
          {{ summaryTitle(id) }}
        </RouterLink>
        <button class="btn btn-white mt-1 w-full py-2 text-sm" @click="store.toggleBlock(b.key)">
          {{ session.done.includes(b.key) ? 'Marchează ca necitit' : '✓ Le-am citit' }}
        </button>
      </div>
      <RouterLink v-else :to="link(b)" class="btn btn-primary block w-full text-center">
        {{ session.done.includes(b.key) ? 'Repetă' : 'Start' }}
      </RouterLink>
    </div>

    <div v-if="allDone" class="rounded-3xl bg-brand-100 p-5 text-center pop-in">
      <p class="text-5xl">🏁</p>
      <p class="text-xl font-black text-brand-700">Ai parcurs tot planul!</p>
      <p class="text-sm font-semibold text-muted">{{ session.mode === 'seara' ? 'Somn ușor și mult succes mâine 🍀' : 'Mult succes la test 🍀' }}</p>
      <RouterLink to="/" class="btn btn-primary mt-3 w-full">Acasă</RouterLink>
    </div>
  </div>
</template>
