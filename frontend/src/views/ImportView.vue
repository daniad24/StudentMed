<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'
import { extractSlides } from '../lib/slides'
import { generateCards } from '../lib/cardgen'
import BackButton from '../components/BackButton.vue'

// PPTX se citește pe bucăți (memorie mică); PDF se citește întreg, deci limita e mai mică.
const MAX_MB = { pptx: 500, pdf: 150 }
const KIND_LABEL = { cloze: '✏️ Completează', definition: '📖 Definiție', list: '📋 Enumerare', manual: '✍️ Manual' }

const route = useRoute()
const store = useAppStore()

const subjectId = ref(route.query.materie || subjects[0].id)
const subject = computed(() => subjects.find((s) => s.id === subjectId.value))

const phase = ref('pick') // pick | working | review | saved
const progress = ref({ done: 0, total: 0 })
const error = ref('')
const fileName = ref('')
const slides = ref([])
const cards = ref([])
const savedCount = ref(0)
const showText = ref(false)

const selectedCount = computed(() => cards.value.filter((c) => c.keep && c.front.trim() && c.back.trim()).length)
const allSelected = computed(() => cards.value.length > 0 && cards.value.every((c) => c.keep))

async function onFile(e) {
  const file = e.target.files?.[0]
  e.target.value = ''
  if (!file) return
  error.value = ''
  const kind = file.name.toLowerCase().endsWith('.pdf') ? 'pdf' : 'pptx'
  if (file.size > MAX_MB[kind] * 1024 * 1024) {
    return (error.value =
      kind === 'pdf'
        ? `PDF-ul are ${Math.round(file.size / 1048576)} MB, iar limita e ${MAX_MB.pdf} MB. Salvează cursul ca .pptx (merge până la ${MAX_MB.pptx} MB) sau comprimă PDF-ul.`
        : `Prezentarea are ${Math.round(file.size / 1048576)} MB, iar limita e ${MAX_MB.pptx} MB.`)
  }

  fileName.value = file.name
  progress.value = { done: 0, total: 0 }
  phase.value = 'working'
  try {
    slides.value = await extractSlides(file, (done, total) => (progress.value = { done, total }))
    const textCount = slides.value.reduce((a, s) => a + s.lines.length, 0)
    if (!textCount) {
      phase.value = 'pick'
      error.value = 'Nu am găsit text în fișier. Dacă slide-urile sunt poze sau scanuri, textul nu poate fi citit încă.'
      return
    }
    cards.value = generateCards(slides.value).map((c) => ({ ...c, keep: true }))
    phase.value = 'review'
  } catch (err) {
    phase.value = 'pick'
    error.value = err.message || 'Nu am putut citi fișierul.'
  }
}

function toggleAll() {
  const v = !allSelected.value
  cards.value.forEach((c) => (c.keep = v))
}

function addManual() {
  cards.value.push({ kind: 'manual', front: '', back: '', keep: true, slide: null })
}

function save() {
  const chosen = cards.value.filter((c) => c.keep && c.front.trim() && c.back.trim())
  store.addCards(subjectId.value, chosen, fileName.value)
  savedCount.value = chosen.length
  phase.value = 'saved'
}

function reset() {
  phase.value = 'pick'
  cards.value = []
  slides.value = []
  error.value = ''
}

// Textareele cresc odată cu textul.
function autosize(e) {
  e.target.style.height = 'auto'
  e.target.style.height = e.target.scrollHeight + 'px'
}
const vAutosize = { mounted: (el) => autosize({ target: el }) }
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton :to="`/materie/${subjectId}?tab=flashcards`" history />
      <h1 class="text-2xl font-black">📄 Cartonașe din PPT/PDF</h1>
    </header>

    <!-- Alegere fișier -->
    <template v-if="phase === 'pick' || phase === 'working'">
      <section class="card space-y-4 p-5">
        <div>
          <label class="label" for="subject">Materia</label>
          <select id="subject" v-model="subjectId" class="input">
            <optgroup v-for="y in years" :key="y.id" :label="y.name">
              <option v-for="s in subjects.filter((x) => x.years[0] === y.id)" :key="s.id" :value="s.id">
                {{ s.emoji }} {{ s.name }}
              </option>
            </optgroup>
          </select>
        </div>

        <label
          class="flex cursor-pointer flex-col items-center gap-2 rounded-3xl border-2 border-dashed border-brand-500 bg-brand-50 p-8 text-center transition-transform active:scale-[0.99]"
          :class="phase === 'working' && 'pointer-events-none opacity-60'"
        >
          <span class="text-5xl">{{ phase === 'working' ? '⏳' : '📤' }}</span>
          <span class="text-lg font-black text-brand-700">
            {{ phase === 'working' ? `Citesc ${fileName}…` : 'Alege o prezentare sau un PDF' }}
          </span>
          <template v-if="phase === 'working'">
            <span class="h-3 w-full max-w-xs overflow-hidden rounded-full bg-gray-200">
              <span
                class="block h-full rounded-full bg-brand-500 transition-all"
                :style="{ width: progress.total ? `${(progress.done / progress.total) * 100}%` : '8%' }"
              ></span>
            </span>
            <span class="text-sm font-semibold text-muted">
              {{ progress.total ? `slide/pagina ${progress.done} din ${progress.total}` : 'Deschid fișierul…' }}
            </span>
          </template>
          <span v-else class="text-sm font-semibold text-muted">.pptx (până la {{ MAX_MB.pptx }} MB) · .pdf (până la {{ MAX_MB.pdf }} MB)</span>
          <input type="file" accept=".pptx,.pdf,application/pdf,application/vnd.openxmlformats-officedocument.presentationml.presentation" class="hidden" @change="onFile" />
        </label>

        <p v-if="error" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ error }}</p>
      </section>

      <section class="card space-y-2 p-5 text-sm font-semibold text-muted">
        <h2 class="text-base font-black text-ink">Cum funcționează</h2>
        <p>🔒 Fișierul e citit direct pe dispozitivul tău și nu se încarcă nicăieri. Se citește doar textul, nu pozele, deci merge și cu fișiere mari.</p>
        <p>✏️ Termenii scriși <strong class="text-ink">îngroșat</strong> devin cartonașe „completează spațiul”.</p>
        <p>📖 Rândurile de forma „Termen – explicație” devin definiții.</p>
        <p>📋 Slide-urile cu o listă scurtă devin cartonașe „enumeră”.</p>
        <p>Înainte de salvare vezi toate cartonașele și le poți corecta sau șterge.</p>
        <p class="text-xs">Fișierele vechi .ppt nu sunt suportate: salvează-le ca .pptx sau PDF. Slide-urile scanate (poze) nu pot fi citite încă.</p>
      </section>
    </template>

    <!-- Verificare -->
    <template v-else-if="phase === 'review'">
      <section class="card p-4">
        <p class="font-black">{{ fileName }}</p>
        <p class="text-sm font-semibold text-muted">
          {{ slides.length }} slide-uri citite · {{ cards.length }} cartonașe propuse pentru {{ subject?.emoji }} {{ subject?.name }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <button class="chip border-2 border-gray-200 bg-surface py-1.5 text-sm text-muted" @click="toggleAll">
            {{ allSelected ? 'Deselectează tot' : 'Selectează tot' }}
          </button>
          <button class="chip border-2 border-gray-200 bg-surface py-1.5 text-sm text-muted" @click="showText = !showText">
            {{ showText ? 'Ascunde textul extras' : 'Vezi textul extras' }}
          </button>
          <button class="chip border-2 border-gray-200 bg-surface py-1.5 text-sm text-muted" @click="reset">Alt fișier</button>
        </div>
      </section>

      <section v-if="showText" class="card max-h-80 space-y-3 overflow-y-auto p-4 text-sm">
        <div v-for="s in slides" :key="s.index">
          <p class="font-black">{{ s.index }}. {{ s.title || '(fără titlu)' }}</p>
          <p v-for="(l, i) in s.lines" :key="i" class="font-semibold text-muted" :style="{ paddingLeft: `${l.level * 12}px` }">• {{ l.text }}</p>
        </div>
      </section>

      <div v-if="!cards.length" class="card p-6 text-center">
        <p class="text-4xl">🤔</p>
        <p class="font-extrabold">N-am găsit structuri din care să fac cartonașe</p>
        <p class="text-sm font-semibold text-muted">
          Merge cel mai bine cu termeni îngroșați, definiții „Termen – explicație” și liste. Poți adăuga cartonașe manual, cu textul extras alături.
        </p>
      </div>

      <TransitionGroup name="fade" tag="div" class="space-y-3">
        <div
          v-for="(c, i) in cards"
          :key="i"
          class="card space-y-2 p-4 transition-opacity"
          :class="!c.keep && 'opacity-50'"
        >
          <div class="flex items-center gap-2">
            <input v-model="c.keep" type="checkbox" class="h-5 w-5 accent-brand-600" :aria-label="`Păstrează cartonașul ${i + 1}`" />
            <span class="chip bg-gray-100 text-muted">{{ KIND_LABEL[c.kind] }}</span>
            <span v-if="c.slide" class="text-xs font-bold text-muted">slide {{ c.slide }}</span>
            <button class="ml-auto px-2 py-1 text-sm font-bold text-red-500" @click="cards.splice(i, 1)">Șterge</button>
          </div>
          <label class="block">
            <span class="text-xs font-black tracking-wider text-muted uppercase">Față</span>
            <textarea v-model="c.front" v-autosize rows="1" class="input mt-1 resize-none py-2 text-sm" @input="autosize"></textarea>
          </label>
          <label class="block">
            <span class="text-xs font-black tracking-wider text-muted uppercase">Spate</span>
            <textarea v-model="c.back" v-autosize rows="1" class="input mt-1 resize-none py-2 text-sm" @input="autosize"></textarea>
          </label>
        </div>
      </TransitionGroup>

      <button class="btn btn-white w-full" @click="addManual">➕ Adaugă un cartonaș manual</button>

      <div class="sticky bottom-24 z-10">
        <button class="btn btn-primary w-full shadow-lg" :disabled="!selectedCount" @click="save">
          Salvează {{ selectedCount }} {{ selectedCount === 1 ? 'cartonaș' : 'cartonașe' }}
        </button>
      </div>
    </template>

    <!-- Salvat -->
    <section v-else class="card p-6 text-center pop-in">
      <p class="text-6xl">🎉</p>
      <h2 class="mt-2 text-2xl font-black">{{ savedCount }} cartonașe salvate</h2>
      <p class="font-semibold text-muted">Le găsești la {{ subject?.emoji }} {{ subject?.name }}, gata de repetat.</p>
      <div class="mt-5 grid gap-2">
        <RouterLink :to="`/flashcards/${subjectId}`" class="btn btn-primary w-full">Repetă acum</RouterLink>
        <button class="btn btn-white w-full" @click="reset">Încă un fișier</button>
      </div>
    </section>
  </div>
</template>
