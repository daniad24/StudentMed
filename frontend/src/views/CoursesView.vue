<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import { deleteCourse, listCourses } from '../lib/courses'
import { PROMPT_VERSION, splitText } from '../lib/aiimport'
import BackButton from '../components/BackButton.vue'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()
const router = useRouter()
const AI_CHUNK = 8000 // aceeași mărime de bucată ca la generare

const stored = ref({}) // id -> curs din telefon (cu text și starea generării)
const loading = ref(true)

onMounted(async () => {
  // Cursurile salvate înainte să existe indexul din aplicație intră în listă.
  for (const c of await listCourses()) {
    stored.value[c.id] = c
    if (!store.courses[c.id]) store.registerCourse(c.id, c.name, c.subjectId, c.createdAt)
  }
  loading.value = false
})

const subjectOf = (id) => subjects.find((s) => s.id === id)
const list = computed(() =>
  Object.entries(store.courses)
    .map(([id, c]) => ({ id, ...c, subject: subjectOf(c.subjectId), stats: store.courseContent(id), stored: stored.value[id] }))
    .sort((a, b) => b.createdAt - a.createdAt),
)

function status(c) {
  const g = c.stored?.gen
  if (!c.stored) return { label: loading.value ? '…' : 'textul nu mai e în telefon', tone: 'text-muted' }
  const total = splitText(c.stored.text, AI_CHUNK).length
  if (!g) return { label: 'negenerat încă', tone: 'text-muted' }
  if (g.version < PROMPT_VERSION) return { label: 'generat cu reguli mai vechi', tone: 'text-amber-700' }
  return g.done.length >= total ? { label: 'generat complet', tone: 'text-brand-700' } : { label: `generat ${g.done.length} din ${total} părți`, tone: 'text-sky-700' }
}

// Plan la țintă din curs
const planFor = ref(null) // id-ul cursului pentru care se alege timpul
function startPlan(c, mode, minutes) {
  store.buildCoursePlan(c.id, c.subjectId, c.name, mode, minutes)
  router.push('/tinta/plan')
}

// Redenumire și ștergere
const renaming = ref(null)
const newName = ref('')
function startRename(c) {
  renaming.value = c.id
  newName.value = c.name
}
function saveRename(c) {
  const n = newName.value.trim()
  if (n) store.renameCourse(c.id, n)
  renaming.value = null
}
const deleting = ref(null)
async function remove(c, withContent) {
  await deleteCourse(c.id)
  store.forgetCourse(c.id, withContent)
  delete stored.value[c.id]
  deleting.value = null
}

const pct = (s) => (s.answered ? Math.round((s.correct / s.answered) * 100) : null)
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/" />
      <div>
        <h1 class="text-2xl font-black">📚 Cursurile mele</h1>
        <p class="text-sm font-semibold text-muted">PDF-urile și PPT-urile tale, transformate în grile, cartonașe și rezumate.</p>
      </div>
    </header>

    <RouterLink to="/import-ai" class="btn btn-primary block w-full text-center">➕ Încarcă un curs nou</RouterLink>

    <div v-if="!list.length && !loading" class="card space-y-2 p-6 text-center">
      <p class="text-5xl">📄</p>
      <p class="font-black">Niciun curs încă</p>
      <p class="text-sm font-semibold text-muted">
        Încarcă un PDF sau un PPTX de la facultate. Textul rămâne pe telefonul tău, iar din el poți face grile, cartonașe și un rezumat, apoi planuri de învățat pe timpul pe care îl ai.
      </p>
    </div>

    <article v-for="c in list" :key="c.id" class="card space-y-3 p-4">
      <div class="flex items-start gap-3">
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 text-2xl" :class="c.subject?.color">{{ c.subject?.emoji ?? '📘' }}</span>
        <div class="min-w-0 flex-1">
          <template v-if="renaming === c.id">
            <input v-model="newName" class="input w-full py-1.5" maxlength="80" @keyup.enter="saveRename(c)" />
            <div class="mt-2 flex gap-2">
              <button class="btn btn-primary px-3 py-1.5 text-sm" @click="saveRename(c)">Salvează</button>
              <button class="btn btn-white px-3 py-1.5 text-sm" @click="renaming = null">Renunță</button>
            </div>
          </template>
          <template v-else>
            <p class="truncate font-black leading-tight">{{ c.name }}</p>
            <p class="text-xs font-bold text-muted">{{ c.subject?.name }} · <span :class="status(c).tone">{{ status(c).label }}</span></p>
          </template>
        </div>
        <button v-if="renaming !== c.id" class="shrink-0 px-1 text-lg text-muted" aria-label="Redenumește" @click="startRename(c)">✏️</button>
      </div>

      <div class="grid grid-cols-3 gap-2 text-center">
        <div class="rounded-xl bg-gray-100 p-2"><p class="text-lg font-black">{{ c.stats.questions }}</p><p class="text-[11px] font-bold text-muted">grile</p></div>
        <div class="rounded-xl bg-gray-100 p-2"><p class="text-lg font-black">{{ c.stats.cards }}</p><p class="text-[11px] font-bold text-muted">cartonașe</p></div>
        <div class="rounded-xl bg-gray-100 p-2"><p class="text-lg font-black">{{ pct(c.stats) === null ? '–' : `${pct(c.stats)}%` }}</p><p class="text-[11px] font-bold text-muted">corecte</p></div>
      </div>

      <template v-if="c.stats.questions || c.stats.cards || c.stats.summaries.length">
        <div class="grid grid-cols-2 gap-2">
          <RouterLink v-if="c.stats.questions" :to="`/pauza/${c.subjectId}?curs=${c.id}`" class="btn btn-blue px-2 py-2.5 text-center text-sm">📝 Grile</RouterLink>
          <RouterLink v-if="c.stats.cards" :to="`/flashcards/${c.subjectId}?curs=${c.id}`" class="btn btn-green px-2 py-2.5 text-center text-sm">🃏 Cartonașe</RouterLink>
          <RouterLink v-for="m in c.stats.summaries.slice(0, 1)" :key="m.id" :to="`/material/${m.id}`" class="btn btn-white px-2 py-2.5 text-center text-sm">📖 Rezumat</RouterLink>
          <button class="btn btn-white px-2 py-2.5 text-sm" @click="planFor = planFor === c.id ? null : c.id">🎯 Țintă din curs</button>
        </div>

        <div v-if="planFor === c.id" class="space-y-2 rounded-xl bg-brand-50 p-3">
          <p class="text-sm font-black text-brand-700">Cât timp ai?</p>
          <div class="grid grid-cols-4 gap-2">
            <button v-for="m in [15, 30, 60, 120]" :key="m" class="btn btn-white px-1 py-2 text-sm" @click="startPlan(c, 'tinta', m)">{{ m < 60 ? `${m} min` : `${m / 60} h` }}</button>
          </div>
          <button class="btn btn-white w-full py-2 text-sm" @click="startPlan(c, 'seara', 60)">🌙 Seara dinainte</button>
        </div>
      </template>
      <p v-else class="text-sm font-semibold text-muted">Încă nu ai generat nimic din acest curs.</p>

      <RouterLink :to="`/import-ai?curs=${c.id}`" class="btn btn-white block w-full py-2.5 text-center text-sm">
        {{ c.stats.questions || c.stats.cards ? '✨ Generează mai mult sau din nou' : '✨ Generează grile și cartonașe' }}
      </RouterLink>

      <div class="text-right">
        <button v-if="deleting !== c.id" class="text-xs font-bold text-muted" @click="deleting = c.id">Șterge cursul</button>
        <div v-else class="space-y-2 rounded-xl bg-red-50 p-3 text-left">
          <p class="text-sm font-bold text-red-700">Ștergi cursul din telefon?</p>
          <button class="btn btn-white w-full py-2 text-sm" @click="remove(c, false)">Doar cursul (păstrez grilele și cartonașele)</button>
          <button v-if="c.stats.questions || c.stats.cards || c.stats.summaries.length" class="btn btn-red w-full py-2 text-sm" @click="remove(c, true)">Cursul și tot ce am generat din el</button>
          <button class="w-full text-sm font-bold text-muted" @click="deleting = null">Renunță</button>
        </div>
      </div>
    </article>
  </div>
</template>
