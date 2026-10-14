<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useAppStore } from '../stores/app'
import { subjects, years } from '../data/mock'

const route = useRoute()
const router = useRouter()
const store = useAppStore()

const subjectId = ref(route.query.materie || subjects[0].id)
const kind = ref(route.query.tip === 'flashcard' ? 'flashcard' : 'summary')

const title = ref('')
const content = ref('')
const url = ref('')
const front = ref('')
const back = ref('')
const ownWork = ref(false)
const preview = ref(false)
const error = ref('')
const success = ref(false)

const previewHtml = computed(() => DOMPurify.sanitize(marked.parse(content.value || '*Nimic de afișat încă.*')))

function submit() {
  error.value = ''
  if (kind.value === 'flashcard') {
    if (!front.value.trim() || !back.value.trim()) return (error.value = 'Completează și întrebarea, și răspunsul.')
    store.addCard({ subjectId: subjectId.value, front: front.value.trim(), back: back.value.trim() })
    front.value = ''
    back.value = ''
    success.value = true
    setTimeout(() => (success.value = false), 2500)
    return
  }

  if (title.value.trim().length < 4) return (error.value = 'Dă-i materialului un titlu (minim 4 caractere).')
  if (kind.value === 'summary' && content.value.trim().length < 20) return (error.value = 'Rezumatul e prea scurt.')
  if (kind.value === 'link' && !/^https:\/\/\S+\.\S+/.test(url.value.trim())) return (error.value = 'Introdu un link valid care începe cu https://')
  if (!ownWork.value) return (error.value = 'Confirmă că ai dreptul să distribui acest material.')

  const m = store.addMaterial({
    subjectId: subjectId.value,
    type: kind.value,
    title: title.value.trim(),
    ...(kind.value === 'summary' ? { content: content.value } : { url: url.value.trim() }),
  })
  router.push(`/material/${m.id}`)
}
</script>

<template>
  <div class="space-y-5">
    <h1 class="text-2xl font-black slide-up">Adaugă</h1>

    <div class="grid grid-cols-3 rounded-2xl bg-gray-100 p-1 text-sm font-extrabold">
      <button
        v-for="k in [{ id: 'summary', label: '📝 Rezumat' }, { id: 'link', label: '🔗 Link' }, { id: 'flashcard', label: '🃏 Cartonaș' }]"
        :key="k.id"
        class="rounded-xl py-2 transition-colors"
        :class="kind === k.id ? 'bg-surface shadow text-brand-700' : 'text-muted'"
        @click="kind = k.id; error = ''"
      >
        {{ k.label }}
      </button>
    </div>

    <form class="card space-y-4 p-5" @submit.prevent="submit">
      <div>
        <label class="label" for="subject">Materie</label>
        <select id="subject" v-model="subjectId" class="input">
          <optgroup v-for="y in years" :key="y.id" :label="y.name">
            <option v-for="s in subjects.filter((x) => x.year === y.id)" :key="s.id" :value="s.id">{{ s.emoji }} {{ s.name }}</option>
          </optgroup>
        </select>
      </div>

      <template v-if="kind === 'flashcard'">
        <div>
          <label class="label" for="front">Întrebare (fața cartonașului)</label>
          <textarea id="front" v-model="front" class="input" rows="2" placeholder="ex. Ce nerv inervează diafragmul?"></textarea>
        </div>
        <div>
          <label class="label" for="back">Răspuns (spatele cartonașului)</label>
          <textarea id="back" v-model="back" class="input" rows="2" placeholder="ex. Nervul frenic (C3–C5)"></textarea>
        </div>
      </template>

      <template v-else>
        <div>
          <label class="label" for="title">Titlu</label>
          <input id="title" v-model="title" class="input" placeholder="ex. Nervii cranieni – tabel recapitulativ" />
        </div>

        <div v-if="kind === 'summary'">
          <div class="mb-1 flex items-center justify-between">
            <label class="label mb-0" for="content">Rezumat</label>
            <button type="button" class="chip bg-gray-100 px-4 py-2 text-muted" @click="preview = !preview">
              {{ preview ? '✏️ Editează' : '👁️ Previzualizare' }}
            </button>
          </div>
          <div v-if="preview" class="prose-med min-h-48 rounded-2xl border-2 border-gray-200 p-4" v-html="previewHtml"></div>
          <textarea
            v-else
            id="content"
            v-model="content"
            class="input font-mono text-sm"
            rows="10"
            placeholder="## Titlu secțiune&#10;- punct important&#10;- **text îngroșat**&#10;&#10;> notă de reținut"
          ></textarea>
          <p class="mt-1 text-xs font-semibold text-muted">Poți folosi Markdown: ## titluri, - liste, **bold**, tabele.</p>
        </div>

        <div v-else>
          <label class="label" for="url">Link</label>
          <input id="url" v-model="url" class="input" type="url" placeholder="https://drive.google.com/..." />
          <p class="mt-2 rounded-2xl bg-sky-50 px-3 py-2 text-xs font-bold text-sky-800">
            💡 Nu încărcăm PDF-uri pe server. Pune fișierele mari (atlase, cursuri) pe Google Drive sau OneDrive și adaugă aici linkul public.
          </p>
        </div>

        <label class="flex cursor-pointer items-start gap-3 text-sm font-bold">
          <input v-model="ownWork" type="checkbox" class="mt-1 h-5 w-5 accent-brand-600" />
          <span>Confirm că materialul e făcut de mine sau că am dreptul să-l distribui (nu e un curs protejat de drepturi de autor).</span>
        </label>
      </template>

      <p v-if="error" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ error }}</p>
      <p v-if="success" class="rounded-xl bg-brand-50 px-3 py-2 text-sm font-bold text-brand-700 pop-in">
        ✅ Cartonaș adăugat! Mai adaugi unul?
      </p>

      <button class="btn btn-primary w-full" type="submit">Publică</button>
    </form>

    <p class="text-center text-xs font-semibold text-muted">
      Materialele noi apar cu eticheta 👥 Comunitate. Cele mai bune primesc ⭐ Recomandat.
    </p>
  </div>
</template>
