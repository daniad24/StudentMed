<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore, RECOMMEND_VOTES, SKILL_LEVELS, today } from '../stores/app'
import { subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'
import MaterialItem from '../components/MaterialItem.vue'
import SourcePicker from '../components/SourcePicker.vue'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subject = computed(() => subjects.find((s) => s.id === route.params.id))
const tab = computed(() => route.query.tab || 'materiale')
const setTab = (t) => router.replace({ query: { tab: t } })

const filter = ref('all')
const filters = computed(() => allFilters.filter((f) => f.id !== 'ai' || allMaterials.value.some((m) => m.source === 'ai')))
const allFilters = [
  { id: 'all', label: 'Toate' },
  { id: 'trusted', label: '✅ De încredere' },
  { id: 'recommended', label: '⭐ Recomandate' },
  { id: 'community', label: '👥 Comunitate' },
  { id: 'ai', label: '🤖 Generate AI' },
  { id: 'mine', label: '👤 Ale mele' },
]

const allMaterials = computed(() => store.materialsFor(route.params.id))
const filterTests = {
  all: () => true,
  trusted: (m) => m.source === 'trusted',
  recommended: (m) => m.recommended,
  community: (m) => m.source !== 'trusted' && !m.mine,
  ai: (m) => m.source === 'ai',
  mine: (m) => m.mine && m.source !== 'ai',
}
const countFor = (id) => allMaterials.value.filter(filterTests[id]).length
const materials = computed(() => allMaterials.value.filter(filterTests[filter.value]))

// Din ce document: Steto, fiecare curs încărcat, AI, ale mele. Aceeași alegere ca în quiz și în sesiunea de cartonașe.
const prefs = store.quizPrefs
const pickFor = (field) =>
  computed({
    get: () => {
      const list = field === 'cardSources' ? cardSources.value : questionSources.value
      return prefs[field]?.[route.params.id] ?? (list.some((s) => s.key === 'steto') && list.length > 1 ? ['steto'] : null)
    },
    set: (v) => (prefs[field] = { ...(prefs[field] ?? {}), [route.params.id]: v }),
  })
const myCourses = computed(() => Object.values(store.courses).filter((c) => c.subjectId === route.params.id))
const cardSources = computed(() => store.sourcesFor(route.params.id, 'cards'))
const questionSources = computed(() => store.sourcesFor(route.params.id, 'questions'))
const pickedCardSources = pickFor('cardSources')
const pickedQuestionSources = pickFor('sources')
const inPick = (picked, kind) => (x) => !picked.value?.length || picked.value.includes(store.sourceKeyOf(x, kind))
const cards = computed(() => store.cardsFor(route.params.id).filter(inPick(pickedCardSources, 'cards')))
const stats = computed(() => {
  const due = new Set(store.dueCardsFor(route.params.id).map((c) => c.id))
  return { total: cards.value.length, due: cards.value.filter((c) => due.has(c.id)).length, known: cards.value.filter((c) => (store.cardState[c.id]?.box ?? 0) >= 3).length }
})
const pickedQuestions = computed(() => store.questionsFor(route.params.id).filter(inPick(pickedQuestionSources, 'questions')))
const questionCount = computed(() => pickedQuestions.value.length)
const multiCount = computed(() => pickedQuestions.value.filter((q) => q.type === 'multi').length)
const aiPicked = computed(() => pickedQuestions.value.some((q) => q.source === 'ai'))

// --- Colocviu ---
const plan = computed(() => store.examPlan(route.params.id))
const editingDate = ref(false)
const dateInput = ref('')
function openDate() {
  dateInput.value = plan.value?.date ?? ''
  editingDate.value = true
}
function saveDate() {
  store.setExamDate(route.params.id, dateInput.value || null)
  editingDate.value = false
}
const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('ro-RO', { day: 'numeric', month: 'long' })

// --- Stagiu ---
const clinical = computed(() => store.clinicalFor(route.params.id))
const hasStagiu = computed(() => clinical.value.cases.length > 0 || clinical.value.skills.length > 0)
const stagiu = computed(() => store.stagiuStats(route.params.id))
const tabs = computed(() => [
  { id: 'materiale', icon: '📚', label: 'Materiale' },
  { id: 'flashcards', icon: '🃏', label: 'Cartonașe' },
  { id: 'grile', icon: '✅', label: 'Grile' },
  ...(hasStagiu.value ? [{ id: 'stagiu', icon: '🩺', label: 'Stagiu' }] : []),
])
const levelOf = (skillId) => store.skillStatus[skillId] ?? 0
</script>

<template>
  <div v-if="subject" class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/materii" />
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-2xl" :class="subject.color">{{ subject.emoji }}</span>
      <h1 class="text-2xl font-black leading-tight">{{ subject.name }}</h1>
    </header>

    <!-- Materia ta la această materie: separat, în „Ale mele” -->
    <RouterLink v-if="myCourses.length" to="/cursuri" class="card flex items-center gap-3 border-brand-300 p-3">
      <span class="text-2xl">📂</span>
      <span class="min-w-0 flex-1">
        <span class="block font-extrabold">Materia ta: {{ myCourses.length }} {{ myCourses.length === 1 ? 'curs' : 'cursuri' }}</span>
        <span class="block truncate text-sm font-semibold text-muted">{{ myCourses.map((c) => c.name).join(' · ') }}</span>
      </span>
      <span class="shrink-0 text-sm font-bold text-brand-600">Ale mele ›</span>
    </RouterLink>

    <!-- Colocviu -->
    <section class="card p-3">
      <div v-if="!editingDate" class="flex items-center gap-3">
        <span class="text-2xl">📅</span>
        <button class="min-w-0 flex-1 text-left" @click="openDate">
          <template v-if="plan">
            <span class="block font-extrabold">
              Colocviu {{ plan.daysLeft === 0 ? 'azi' : plan.daysLeft > 0 ? `în ${plan.daysLeft} ${plan.daysLeft === 1 ? 'zi' : 'zile'}` : 'trecut' }}
              <span class="font-semibold text-muted">· {{ fmtDate(plan.date) }}</span>
            </span>
            <span v-if="plan.daysLeft > 0 && plan.remaining" class="block text-sm font-semibold text-muted">
              Plan: ~{{ plan.perDay }} grile/zi ({{ plan.remaining }} nerezolvate) + cartonașele de azi
            </span>
            <span v-else-if="plan.daysLeft >= 0" class="block text-sm font-semibold text-muted">Ai rezolvat corect toate grilele 💪</span>
          </template>
          <template v-else>
            <span class="block font-extrabold">Când ai colocviul?</span>
            <span class="block text-sm font-semibold text-muted">Setează data și îți facem un plan pe zile.</span>
          </template>
        </button>
        <button
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-gray-200 bg-surface"
          :aria-label="plan ? 'Schimbă data colocviului' : 'Setează data colocviului'"
          @click="openDate"
        >
          ✏️
        </button>
      </div>
      <div v-else class="flex flex-wrap items-center gap-2">
        <input v-model="dateInput" type="date" :min="today()" class="input min-w-0 flex-1 py-2" aria-label="Data colocviului" />
        <button class="btn btn-primary px-4 py-2" @click="saveDate">Salvează</button>
        <button v-if="plan" class="btn btn-white px-3 py-2" @click="dateInput = ''; saveDate()">Șterge</button>
      </div>
    </section>

    <div class="grid rounded-2xl bg-gray-100 p-1 font-extrabold" :class="tabs.length === 4 ? 'grid-cols-4' : 'grid-cols-3'">
      <button
        v-for="t in tabs"
        :key="t.id"
        class="flex flex-col items-center rounded-xl py-1.5 text-xs leading-tight transition-colors sm:flex-row sm:justify-center sm:gap-1 sm:py-2 sm:text-sm"
        :class="tab === t.id ? 'bg-surface shadow text-brand-700' : 'text-muted'"
        @click="setTab(t.id)"
      >
        <span class="text-base sm:text-sm">{{ t.icon }}</span>{{ t.label }}
      </button>
    </div>

    <!-- Materiale -->
    <section v-if="tab === 'materiale'" class="space-y-3">
      <div class="flex gap-2 overflow-x-auto pb-1">
        <button
          v-for="f in filters"
          :key="f.id"
          class="chip max-w-full whitespace-normal border-2 py-1.5 text-left text-sm"
          :class="filter === f.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'"
          @click="filter = f.id"
        >
          {{ f.label }} <span class="opacity-60">{{ countFor(f.id) }}</span>
        </button>
      </div>
      <p v-if="store.isAdmin" class="rounded-2xl bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
        Mod admin: apasă ⭐ ca să recomanzi un material. Materialele cu peste {{ RECOMMEND_VOTES }} de voturi devin recomandate automat.
      </p>
      <TransitionGroup name="fade" tag="div" class="space-y-2">
        <MaterialItem v-for="m in materials" :key="m.id" :material="m" />
      </TransitionGroup>
      <div v-if="!materials.length" class="card p-6 text-center">
        <p class="text-3xl">📭</p>
        <p class="font-extrabold">{{ filter === 'mine' ? 'Nu ai adăugat încă nimic aici' : 'Niciun material în această categorie' }}</p>
        <p class="text-sm font-semibold text-muted">Fii primul care adaugă ceva util!</p>
      </div>
      <RouterLink :to="`/adauga?materie=${subject.id}&tip=material`" class="btn btn-white w-full">➕ Adaugă material</RouterLink>
    </section>

    <!-- Flashcards -->
    <section v-else-if="tab === 'flashcards'" class="space-y-3">
      <SourcePicker v-if="cardSources.length > 1" v-model="pickedCardSources" :sources="cardSources" accent="brand" :fresh="prefs.cardSources?.[route.params.id] === undefined" />
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
          <span v-if="c.fromQuiz" class="chip mb-1 bg-violet-100 text-violet-700">din grilele greșite</span>
          <span v-else-if="c.courseId" class="chip mb-1 bg-brand-100 text-brand-700">{{ store.sourceLabel('c:' + c.courseId) }}</span>
          <span v-else-if="c.ai" class="chip mb-1 bg-amber-100 text-amber-700">🤖 generat de AI</span>
          <p class="font-extrabold">{{ c.front }}</p>
          <p class="whitespace-pre-line text-sm font-semibold text-muted">{{ c.back }}</p>
        </div>
      </div>
      <div v-else class="card p-6 text-center">
        <p class="text-3xl">🃏</p>
        <p class="font-extrabold">Niciun cartonaș încă</p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <RouterLink :to="`/adauga?materie=${subject.id}&tip=flashcard`" class="btn btn-white px-2">➕ Cartonaș</RouterLink>
        <RouterLink :to="`/import?materie=${subject.id}`" class="btn btn-white px-2">📄 Din PPT/PDF</RouterLink>
      </div>
    </section>

    <!-- Stagiu: cazuri clinice + carnet de abilități -->
    <section v-else-if="tab === 'stagiu'" class="space-y-5">
      <div class="grid grid-cols-2 gap-2">
        <div class="card p-3 text-center">
          <p class="text-2xl font-black text-sky-600">{{ stagiu.casesDone }}/{{ stagiu.cases }}</p>
          <p class="text-xs font-bold text-muted">cazuri rezolvate</p>
        </div>
        <div class="card p-3 text-center">
          <p class="text-2xl font-black text-brand-600">{{ stagiu.skillsDone }}/{{ stagiu.skills }}</p>
          <p class="text-xs font-bold text-muted">abilități stăpânite</p>
        </div>
      </div>

      <div v-if="clinical.cases.length">
        <h2 class="mb-2 font-black">🧩 Cazuri clinice</h2>
        <p class="mb-2 text-sm font-semibold text-muted">Ca la colocviu: pornești de la pacient și ajungi la diagnostic și tratament, pas cu pas.</p>
        <div class="space-y-2">
          <RouterLink
            v-for="c in clinical.cases"
            :key="c.id"
            :to="`/caz/${c.id}`"
            class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
          >
            <span class="text-2xl">{{ store.caseProgress[c.id] ? '✅' : '🧑‍⚕️' }}</span>
            <span class="min-w-0 flex-1">
              <span class="block font-extrabold">{{ c.title }}</span>
              <span class="block text-xs font-bold text-muted">{{ c.setting }}{{ store.caseProgress[c.id] ? ' · rezolvat' : '' }}</span>
            </span>
          </RouterLink>
        </div>
      </div>

      <div v-if="clinical.skills.length">
        <h2 class="mb-2 font-black">📋 Carnet de abilități practice</h2>
        <p class="mb-2 text-sm font-semibold text-muted">Bifează ce ai văzut și ce ai făcut la stagiu. Deschide o abilitate ca să vezi pașii.</p>
        <div class="space-y-2">
          <details v-for="sk in clinical.skills" :key="sk.id" class="card p-4">
            <summary class="flex cursor-pointer list-none items-center gap-3">
              <span class="text-xl" :title="SKILL_LEVELS[levelOf(sk.id)].label">{{ SKILL_LEVELS[levelOf(sk.id)].short }}</span>
              <span class="min-w-0 flex-1">
                <span class="block font-extrabold">{{ sk.name }}</span>
                <span class="block text-xs font-bold text-muted">{{ sk.category }} · {{ SKILL_LEVELS[levelOf(sk.id)].label }}</span>
              </span>
            </summary>
            <ol class="mt-3 list-decimal space-y-1 pl-5 text-sm font-semibold">
              <li v-for="(step, i) in sk.steps" :key="i">{{ step }}</li>
            </ol>
            <p v-if="sk.tips" class="mt-3 rounded-xl bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">💡 {{ sk.tips }}</p>
            <div class="mt-3 grid grid-cols-2 gap-1.5">
              <button
                v-for="lvl in SKILL_LEVELS"
                :key="lvl.id"
                class="rounded-xl border-2 px-2 py-1.5 text-xs font-bold transition-colors"
                :class="levelOf(sk.id) === lvl.id ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-muted'"
                @click="store.setSkillLevel(sk.id, lvl.id)"
              >
                {{ lvl.short }} {{ lvl.label }}
              </button>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- Grile -->
    <section v-else class="space-y-3">
      <SourcePicker v-if="questionSources.length > 1" v-model="pickedQuestionSources" :sources="questionSources" :fresh="prefs.sources?.[route.params.id] === undefined" />
      <div class="card p-6 text-center">
        <p class="text-5xl">✅</p>
        <p class="mt-2 text-xl font-black">{{ questionCount }} grile disponibile</p>
        <p class="text-sm font-semibold text-muted">
          {{ questionCount - multiCount }} cu complement simplu · {{ multiCount }} cu complement multiplu. La început alegi tipul, câte și dacă vrei cronometru.
        </p>
        <p v-if="aiPicked" class="mt-2 text-xs font-bold text-amber-700">🤖 Grile generate de AI: pot conține greșeli, compară cu cursul.</p>
        <RouterLink v-if="questionCount" :to="`/pauza/${subject.id}`" class="btn btn-blue mt-4 w-full">{{ store.quizSessions[subject.id] ? '▶️ Continuă quiz-ul' : '⏱️ Începe quiz-ul' }}</RouterLink>
        <RouterLink v-if="questionCount" :to="`/simulare?materie=${subject.id}`" class="btn btn-white mt-2 w-full">🎓 Simulare de colocviu</RouterLink>
        <p v-else class="mt-3 text-sm font-bold text-muted">Nicio grilă în această categorie. Alege altă categorie sus.</p>
      </div>
    </section>
  </div>
</template>
