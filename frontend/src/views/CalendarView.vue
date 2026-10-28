<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { isoWeek, today, useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import { encodeIcsData } from '../lib/ics'
import BackButton from '../components/BackButton.vue'

const store = useAppStore()
const route = useRoute()
const router = useRouter()
const tab = ref(route.query.tab === 'orar' ? 'orar' : 'examene')

const DAYS = ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică']
const KINDS_CLASS = ['Curs', 'LP', 'Seminar', 'Stagiu', 'Altceva']
const KINDS_EXAM = ['Colocviu', 'Examen', 'Parțial', 'Test LP', 'Practic', 'Restanță']
const subjectOf = (id) => subjects.find((s) => s.id === id)
const todayIdx = ((new Date().getDay() + 6) % 7) + 1
const oddWeek = isoWeek() % 2 === 1
const fmtDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('ro-RO', { weekday: 'short', day: 'numeric', month: 'long' })
const daysLeft = (d) => Math.round((new Date(d + 'T00:00:00') - new Date(today() + 'T00:00:00')) / 864e5)
const whenLabel = (n) => (n === 0 ? 'azi' : n === 1 ? 'mâine' : `în ${n} zile`)

// --- Examene ---
const upcoming = computed(() =>
  store.exams
    .filter((e) => e.date >= today())
    .sort((a, b) => (a.date + (a.time || '')).localeCompare(b.date + (b.time || '')))
    .map((e) => ({ ...e, subject: subjectOf(e.subjectId), left: daysLeft(e.date) })),
)
const past = computed(() => store.exams.filter((e) => e.date < today()).sort((a, b) => b.date.localeCompare(a.date)))
const coursesFor = (subjectId) =>
  Object.entries(store.courses)
    .filter(([, c]) => c.subjectId === subjectId)
    .map(([id, c]) => ({ id, name: c.name }))

const editExam = ref(null)
function newExam() {
  editExam.value = { id: '', subjectId: '', kind: 'Colocviu', date: '', time: '', place: '', courseIds: [], note: '' }
}
function saveExam() {
  const e = editExam.value
  if (!e.subjectId || !e.date) return
  store.saveExam({ ...e, courseIds: e.courseIds.filter((id) => store.courses[id]) })
  editExam.value = null
}
function toggleCourse(id) {
  const list = editExam.value.courseIds
  editExam.value.courseIds = list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
}

// De la examen direct la învățat: din documentele alese (sau, fără ele, „Țintă” pe materie)
function study(e, mode) {
  const ids = e.courseIds.filter((id) => store.courses[id])
  if (ids.length === 1) {
    store.buildCoursePlan(ids[0], e.subjectId, store.courses[ids[0]].name, mode, mode === 'seara' ? 60 : 60)
    return router.push('/tinta/plan')
  }
  if (ids.length > 1) {
    // mai multe documente: grilele din ele, alese deja în ecranul de grile
    store.quizPrefs.sources = { ...store.quizPrefs.sources, [e.subjectId]: ids.map((id) => 'c:' + id) }
    return router.push(`/pauza/${e.subjectId}`)
  }
  router.push({ path: '/tinta', query: { materie: e.subjectId, mod: mode } })
}

// --- Orar ---
const byDay = computed(() =>
  DAYS.map((name, i) => ({
    day: i + 1,
    name,
    items: store.schedule.filter((c) => Number(c.day) === i + 1).sort((a, b) => a.start.localeCompare(b.start)),
  })),
)
const thisWeek = (c) => c.weeks === 'all' || (c.weeks === 'odd') === oddWeek
const editClass = ref(null)
function newClass(day = todayIdx <= 5 ? todayIdx : 1) {
  editClass.value = { id: '', day, start: '08:00', end: '10:00', subjectId: '', title: '', kind: 'Curs', place: '', weeks: 'all' }
}
function saveClass() {
  const c = editClass.value
  const title = c.title.trim() || subjectOf(c.subjectId)?.name
  if (!title || !c.start) return
  store.saveClass({ ...c, title })
  editClass.value = null
}

// --- Calendarul telefonului (notificări fără server) ---
function exportCalendar() {
  const data = {
    exams: upcoming.value.map((e) => ({
      id: e.id,
      title: `${e.kind} ${e.subject?.name ?? ''}`.trim(),
      date: e.date,
      time: e.time,
      place: e.place,
      note: [e.note, e.courseIds.length ? `Din: ${e.courseIds.map((id) => store.courses[id]?.name).filter(Boolean).join(', ')}` : ''].filter(Boolean).join('\n'),
    })),
    classes: store.schedule.map((c) => ({ id: c.id, title: `${c.kind} ${c.title}`, day: c.day, start: c.start, end: c.end, place: c.place, weeks: c.weeks })),
  }
  window.open(`/api/ics?d=${encodeIcsData(data)}`, '_blank')
}
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/" />
      <div>
        <h1 class="text-2xl font-black">📅 Orar și examene</h1>
        <p class="text-sm font-semibold text-muted">Ale tale, cu documentele din care înveți pentru fiecare.</p>
      </div>
    </header>

    <div class="grid grid-cols-2 gap-1 rounded-2xl bg-gray-100 p-1">
      <button class="rounded-xl py-2 text-sm font-black" :class="tab === 'examene' ? 'bg-surface text-brand-700 shadow' : 'text-muted'" @click="tab = 'examene'">🎓 Examene</button>
      <button class="rounded-xl py-2 text-sm font-black" :class="tab === 'orar' ? 'bg-surface text-brand-700 shadow' : 'text-muted'" @click="tab = 'orar'">🗓️ Orar</button>
    </div>

    <!-- EXAMENE -->
    <template v-if="tab === 'examene'">
      <button v-if="!editExam" class="btn btn-primary w-full" @click="newExam">➕ Adaugă un examen</button>

      <section v-if="editExam" class="card space-y-3 p-5">
        <h2 class="font-black">{{ editExam.id ? 'Modifică examenul' : 'Examen nou' }}</h2>
        <select v-model="editExam.subjectId" class="input" aria-label="Materia">
          <option value="" disabled>Materia…</option>
          <optgroup v-for="y in years" :key="y.id" :label="y.name">
            <option v-for="s in subjects.filter((x) => x.years[0] === y.id)" :key="s.id" :value="s.id">{{ s.emoji }} {{ s.name }}</option>
          </optgroup>
        </select>
        <div class="flex flex-wrap gap-2">
          <button v-for="k in KINDS_EXAM" :key="k" class="chip border-2 py-1.5 text-sm" :class="editExam.kind === k ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'" @click="editExam.kind = k">{{ k }}</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <label class="text-sm font-bold text-muted">Data<input v-model="editExam.date" type="date" class="input mt-1" /></label>
          <label class="text-sm font-bold text-muted">Ora (opțional)<input v-model="editExam.time" type="time" class="input mt-1" /></label>
        </div>
        <input v-model="editExam.place" class="input" placeholder="Unde (sala, spitalul)" maxlength="80" />
        <div v-if="editExam.subjectId">
          <p class="label">Din ce documente înveți</p>
          <div v-if="coursesFor(editExam.subjectId).length" class="grid gap-2">
            <button
              v-for="c in coursesFor(editExam.subjectId)"
              :key="c.id"
              class="flex items-center gap-2 rounded-xl border-2 px-3 py-2 text-left text-sm font-extrabold"
              :class="editExam.courseIds.includes(c.id) ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 text-muted'"
              @click="toggleCourse(c.id)"
            >
              <span class="w-5 text-center">{{ editExam.courseIds.includes(c.id) ? '✓' : '' }}</span><span class="truncate">📘 {{ c.name }}</span>
            </button>
          </div>
          <p v-else class="text-sm font-semibold text-muted">Încă nu ai încărcat cursuri la materia asta. Le poți lega și mai târziu.</p>
        </div>
        <textarea v-model="editExam.note" rows="2" class="input" placeholder="Notă (ce se cere, capitole, profesor)" maxlength="400"></textarea>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-white" @click="editExam = null">Renunță</button>
          <button class="btn btn-primary" :disabled="!editExam.subjectId || !editExam.date" @click="saveExam">Salvează</button>
        </div>
      </section>

      <div v-if="!upcoming.length && !editExam" class="card p-6 text-center">
        <p class="text-4xl">🎓</p>
        <p class="font-black">Niciun examen adăugat</p>
        <p class="text-sm font-semibold text-muted">Pune data, ora și documentele din care înveți. Aplicația îți arată cât a mai rămas și te duce direct la planul de învățat.</p>
      </div>

      <article v-for="e in upcoming" :key="e.id" class="card space-y-3 p-4" :class="e.left <= 1 && 'border-orange-400'">
        <div class="flex items-start gap-3">
          <span class="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl text-center" :class="e.left <= 3 ? 'bg-orange-100 text-orange-700' : 'bg-brand-100 text-brand-700'">
            <span class="text-lg font-black leading-none">{{ e.left }}</span><span class="text-[9px] font-black uppercase">{{ e.left === 1 ? 'zi' : 'zile' }}</span>
          </span>
          <div class="min-w-0 flex-1">
            <p class="font-black leading-tight">{{ e.kind }} · {{ e.subject?.name }}</p>
            <p class="text-sm font-semibold text-muted">{{ fmtDate(e.date) }}{{ e.time ? ` · ${e.time}` : '' }}{{ e.place ? ` · ${e.place}` : '' }} · {{ whenLabel(e.left) }}</p>
            <p v-if="e.courseIds.length" class="truncate text-xs font-bold text-brand-700">📘 {{ e.courseIds.map((id) => store.courses[id]?.name).filter(Boolean).join(' · ') }}</p>
            <p v-if="e.note" class="mt-1 whitespace-pre-line text-xs font-semibold text-muted">{{ e.note }}</p>
          </div>
          <button class="shrink-0 px-1 text-lg text-muted" aria-label="Modifică" @click="editExam = { ...e, courseIds: [...e.courseIds] }">✏️</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-primary px-2 py-2.5 text-sm" @click="study(e, 'tinta')">🎯 Învață pentru el</button>
          <button class="btn btn-white px-2 py-2.5 text-sm" @click="study(e, 'seara')">🌙 Seara dinainte</button>
        </div>
        <button class="w-full text-right text-xs font-bold text-muted" @click="store.removeExam(e.id)">Șterge</button>
      </article>

      <details v-if="past.length" class="card p-4">
        <summary class="cursor-pointer text-sm font-black text-muted">Examene trecute ({{ past.length }})</summary>
        <div v-for="e in past" :key="e.id" class="mt-2 flex items-center gap-2 text-sm font-semibold text-muted">
          <span class="flex-1">{{ e.kind }} · {{ subjectOf(e.subjectId)?.name }} · {{ fmtDate(e.date) }}</span>
          <button class="text-xs font-bold" @click="store.removeExam(e.id)">Șterge</button>
        </div>
      </details>
    </template>

    <!-- ORAR -->
    <template v-else>
      <p class="text-sm font-bold text-muted">Săptămâna aceasta e <b class="text-ink">{{ oddWeek ? 'impară' : 'pară' }}</b>.</p>
      <button v-if="!editClass" class="btn btn-primary w-full" @click="newClass()">➕ Adaugă o oră în orar</button>

      <section v-if="editClass" class="card space-y-3 p-5">
        <h2 class="font-black">{{ editClass.id ? 'Modifică ora' : 'Oră nouă' }}</h2>
        <div class="flex flex-wrap gap-2">
          <button v-for="(d, i) in DAYS" :key="d" class="chip border-2 py-1.5 text-sm" :class="Number(editClass.day) === i + 1 ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'" @click="editClass.day = i + 1">{{ d.slice(0, 2) }}</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <label class="text-sm font-bold text-muted">De la<input v-model="editClass.start" type="time" class="input mt-1" /></label>
          <label class="text-sm font-bold text-muted">Până la<input v-model="editClass.end" type="time" class="input mt-1" /></label>
        </div>
        <select v-model="editClass.subjectId" class="input" aria-label="Materia">
          <option value="">Materia (opțional)…</option>
          <optgroup v-for="y in years" :key="y.id" :label="y.name">
            <option v-for="s in subjects.filter((x) => x.years[0] === y.id)" :key="s.id" :value="s.id">{{ s.emoji }} {{ s.name }}</option>
          </optgroup>
        </select>
        <input v-model="editClass.title" class="input" :placeholder="subjectOf(editClass.subjectId)?.name ?? 'Denumire (dacă nu e în listă)'" maxlength="80" />
        <div class="flex flex-wrap gap-2">
          <button v-for="k in KINDS_CLASS" :key="k" class="chip border-2 py-1.5 text-sm" :class="editClass.kind === k ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 bg-surface text-muted'" @click="editClass.kind = k">{{ k }}</button>
        </div>
        <input v-model="editClass.place" class="input" placeholder="Unde (sala, spitalul)" maxlength="80" />
        <div class="grid grid-cols-3 gap-2">
          <button v-for="w in [{ id: 'all', l: 'Săptămânal' }, { id: 'odd', l: 'Impare' }, { id: 'even', l: 'Pare' }]" :key="w.id" class="btn px-1 py-2 text-sm" :class="editClass.weeks === w.id ? 'btn-primary' : 'btn-white'" @click="editClass.weeks = w.id">{{ w.l }}</button>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button class="btn btn-white" @click="editClass = null">Renunță</button>
          <button class="btn btn-primary" :disabled="!(editClass.title.trim() || editClass.subjectId)" @click="saveClass">Salvează</button>
        </div>
      </section>

      <section v-for="d in byDay.filter((x) => x.items.length || x.day === todayIdx)" :key="d.day" class="space-y-2">
        <h2 class="font-black" :class="d.day === todayIdx && 'text-brand-700'">{{ d.name }}{{ d.day === todayIdx ? ' · azi' : '' }}</h2>
        <p v-if="!d.items.length" class="text-sm font-semibold text-muted">Nimic azi.</p>
        <div v-for="c in d.items" :key="c.id" class="card flex items-center gap-3 p-3" :class="!thisWeek(c) && 'opacity-50'">
          <div class="w-14 shrink-0 text-center text-sm font-black leading-tight">{{ c.start }}<br /><span class="text-xs text-muted">{{ c.end }}</span></div>
          <div class="min-w-0 flex-1">
            <p class="truncate font-extrabold">{{ c.title }}</p>
            <p class="truncate text-xs font-bold text-muted">{{ c.kind }}{{ c.place ? ` · ${c.place}` : '' }}{{ c.weeks !== 'all' ? ` · săpt. ${c.weeks === 'odd' ? 'impare' : 'pare'}` : '' }}</p>
          </div>
          <RouterLink v-if="c.subjectId" :to="`/materie/${c.subjectId}`" class="shrink-0 text-sm font-bold text-brand-600">Materia ›</RouterLink>
          <button class="shrink-0 px-1 text-muted" aria-label="Modifică" @click="editClass = { ...c }">✏️</button>
          <button class="shrink-0 px-1 text-muted" aria-label="Șterge" @click="store.removeClass(c.id)">✕</button>
        </div>
      </section>
    </template>

    <section v-if="store.exams.length || store.schedule.length" class="card space-y-2 p-4">
      <p class="font-black">🔔 Notificări</p>
      <p class="text-sm font-semibold text-muted">
        Pune examenele și orarul în calendarul telefonului: primești notificare cu o zi și cu 2 ore înainte de examen, și cu 15 minute înainte de fiecare oră. Dacă schimbi ceva, adaugă-le din nou.
      </p>
      <button class="btn btn-white w-full" @click="exportCalendar">📅 Adaugă în calendarul telefonului</button>
    </section>
  </div>
</template>
