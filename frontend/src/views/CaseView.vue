<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore, XP } from '../stores/app'
import { clinical, subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'

const route = useRoute()
const store = useAppStore()

const STEP_LABEL = {
  anamneza: { icon: '🗣️', label: 'Anamneza' },
  examen: { icon: '🩺', label: 'Examenul obiectiv' },
  investigatii: { icon: '🧪', label: 'Investigații' },
  diagnostic: { icon: '🎯', label: 'Diagnostic' },
  tratament: { icon: '💊', label: 'Tratament' },
}
const RATINGS = [
  { id: 'no', label: 'Nu știam', icon: '❌', cls: 'btn-red' },
  { id: 'partial', label: 'Parțial', icon: '🟡', cls: 'btn-yellow' },
  { id: 'yes', label: 'Știam', icon: '✅', cls: 'btn-green' },
]

const theCase = Object.values(clinical)
  .flatMap((c) => c.cases)
  .find((c) => c.id === route.params.caseId)
const subject = subjects.find((s) => s.id === theCase?.subjectId)

const fromPlan = !!route.query.bloc
const phase = ref('intro') // intro | steps | done
const index = ref(0)
const revealed = ref(false)
const notes = ref([])
const ratings = ref([])

const step = computed(() => theCase?.steps[index.value])
const progress = computed(() =>
  phase.value === 'done' ? 100 : phase.value === 'intro' ? 0 : ((index.value + (revealed.value ? 1 : 0)) / theCase.steps.length) * 100,
)
const score = computed(() => ratings.value.reduce((a, r) => a + (r === 'yes' ? 1 : r === 'partial' ? 0.5 : 0), 0))

function start() {
  phase.value = 'steps'
  index.value = 0
  revealed.value = false
  notes.value = theCase.steps.map(() => '')
  ratings.value = []
}

function rate(r) {
  ratings.value.push(r)
  if (index.value + 1 >= theCase.steps.length) {
    store.finishCase(theCase.id, ratings.value)
    if (fromPlan) store.completeBlock(route.query.bloc)
    phase.value = 'done'
    return
  }
  index.value++
  revealed.value = false
}
</script>

<template>
  <div v-if="theCase" class="flex min-h-[92dvh] flex-col">
    <header class="flex items-center gap-3">
      <BackButton icon="close" :to="fromPlan ? '/tinta/plan' : `/materie/${theCase.subjectId}?tab=stagiu`" />
      <div class="h-4 flex-1 overflow-hidden rounded-full bg-gray-200">
        <div class="h-full rounded-full bg-sky-500 transition-all duration-500" :style="{ width: `${progress}%` }"></div>
      </div>
      <span class="text-sm font-black text-muted">{{ phase === 'steps' ? `${index + 1}/${theCase.steps.length}` : '' }}</span>
    </header>

    <!-- Prezentarea pacientului (rămâne vizibilă pe tot parcursul) -->
    <section class="card mt-5 p-5 slide-up">
      <div class="mb-2 flex flex-wrap gap-1">
        <span class="chip bg-sky-100 text-sky-700">🧩 Caz clinic</span>
        <span class="chip bg-gray-100 text-muted">{{ subject?.emoji }} {{ subject?.name }}</span>
        <span v-if="theCase.setting" class="chip bg-gray-100 text-muted">📍 {{ theCase.setting }}</span>
      </div>
      <h1 class="text-xl font-black leading-snug">{{ theCase.title }}</h1>
      <p class="mt-2 font-semibold leading-relaxed">{{ theCase.presentation }}</p>
    </section>

    <!-- Început -->
    <template v-if="phase === 'intro'">
      <div class="mt-4 rounded-2xl bg-sky-50 p-4 text-sm font-semibold text-sky-800">
        Treci prin cei 5 pași ca la colocviu: anamneză, examen obiectiv, investigații, diagnostic, tratament. La fiecare pas
        gândește-te (sau scrie) ce ai face, apoi compară cu răspunsul.
      </div>
      <div class="flex-1"></div>
      <button class="btn btn-blue mt-6 w-full" @click="start">Începe cazul</button>
    </template>

    <!-- Pași -->
    <template v-else-if="phase === 'steps'">
      <section :key="index" class="mt-4 space-y-3 slide-up">
        <p class="text-sm font-black tracking-wide text-muted uppercase">
          {{ STEP_LABEL[step.kind]?.icon }} Pasul {{ index + 1 }} · {{ STEP_LABEL[step.kind]?.label ?? step.kind }}
        </p>
        <h2 class="text-lg font-black leading-snug">{{ step.prompt }}</h2>
        <textarea
          v-model="notes[index]"
          class="input text-sm"
          rows="3"
          :disabled="revealed"
          placeholder="Scrie pe scurt ce ai face (opțional)…"
        ></textarea>
        <div v-if="revealed" class="rounded-2xl border-2 border-brand-200 bg-brand-50 p-4 pop-in">
          <p class="text-xs font-black tracking-wide text-brand-700 uppercase">Răspuns</p>
          <p class="mt-1 whitespace-pre-line font-semibold leading-relaxed">{{ step.answer }}</p>
        </div>
      </section>
      <div class="flex-1"></div>
      <div v-if="revealed" class="mt-6 slide-up">
        <p class="mb-2 text-center text-sm font-bold text-muted">Cât de bine știai?</p>
        <div class="grid grid-cols-3 gap-2">
          <button v-for="r in RATINGS" :key="r.id" class="btn flex-col gap-0 px-2" :class="r.cls" @click="rate(r.id)">
            {{ r.icon }}<span class="text-xs">{{ r.label }}</span>
          </button>
        </div>
      </div>
      <button v-else class="btn btn-blue mt-6 w-full" @click="revealed = true">Arată răspunsul</button>
    </template>

    <!-- Final -->
    <template v-else>
      <section class="card mt-4 p-5 text-center pop-in">
        <p class="text-5xl">{{ score >= 4 ? '🏆' : score >= 2.5 ? '👏' : '📖' }}</p>
        <p class="mt-2 text-2xl font-black">Caz rezolvat</p>
        <p class="font-semibold text-muted">Ai știut {{ score }} din {{ theCase.steps.length }} pași · +{{ XP.case }} XP</p>
        <div class="mt-3 flex flex-wrap justify-center gap-1">
          <span v-for="(r, i) in ratings" :key="i" class="chip bg-gray-100 text-muted" :title="STEP_LABEL[theCase.steps[i].kind]?.label">
            {{ STEP_LABEL[theCase.steps[i].kind]?.icon }} {{ RATINGS.find((x) => x.id === r)?.icon }}
          </span>
        </div>
      </section>
      <section v-if="theCase.takeaways?.length" class="card mt-3 p-5">
        <h2 class="font-black">📌 De reținut</h2>
        <ul class="mt-2 list-disc space-y-1 pl-5 text-sm font-semibold">
          <li v-for="t in theCase.takeaways" :key="t">{{ t }}</li>
        </ul>
      </section>
      <div class="flex-1"></div>
      <div class="mt-6 grid gap-2">
        <RouterLink :to="fromPlan ? '/tinta/plan' : `/materie/${theCase.subjectId}?tab=stagiu`" class="btn btn-primary w-full">{{ fromPlan ? 'Înapoi la plan' : 'Înapoi la stagiu' }}</RouterLink>
        <button class="btn btn-white w-full" @click="start">Refă cazul</button>
      </div>
    </template>
  </div>
  <div v-else class="card mt-6 p-6 text-center font-bold">Cazul nu a fost găsit.</div>
</template>
