<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useAppStore } from '../stores/app'
import { subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'
import MaterialBadges from '../components/MaterialBadges.vue'
import ReportDialog from '../components/ReportDialog.vue'

const route = useRoute()
const store = useAppStore()

const material = computed(() => store.allMaterials.find((m) => m.id === route.params.id))
const subject = computed(() => subjects.find((s) => s.id === material.value?.subjectId))
const html = computed(() => DOMPurify.sanitize(marked.parse(material.value?.content ?? '')))
const host = computed(() => {
  try {
    return new URL(material.value.url).hostname
  } catch {
    return ''
  }
})

const reporting = ref(false)
const thanks = ref(false)
function onReport(reason) {
  store.report('material', material.value.id, material.value.title, reason)
  reporting.value = false
  thanks.value = true
}
</script>

<template>
  <div v-if="material" class="space-y-4">
    <header class="flex items-center gap-3 slide-up">
      <BackButton :to="`/materie/${material.subjectId}`" history />
      <p class="font-extrabold text-muted">{{ subject?.emoji }} {{ subject?.name }}</p>
    </header>

    <article class="card p-5 slide-up">
      <MaterialBadges :material="material" detailed class="mb-2" />
      <h1 class="text-2xl font-black leading-tight">{{ material.title }}</h1>
      <p class="mt-1 text-sm font-bold text-muted">
        <template v-if="material.topic">{{ material.topic }} · </template>de {{ material.author }}
      </p>

      <div v-if="material.type === 'summary'" class="prose-med mt-4" v-html="html"></div>

      <div v-if="material.references?.length" class="mt-6 rounded-2xl bg-gray-50 p-4">
        <p class="text-sm font-black">📚 Bibliografie</p>
        <ul class="mt-1 list-disc space-y-0.5 pl-5 text-sm font-semibold text-muted">
          <li v-for="r in material.references" :key="r">{{ r }}</li>
        </ul>
        <p class="mt-2 text-xs font-semibold text-muted">
          Sinteză scrisă de echipa Steto după manualele de mai sus. Ai găsit o greșeală? Folosește 🚩 Raportează.
        </p>
      </div>

      <a
        v-else
        :href="material.url"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 flex items-center gap-3 rounded-2xl border-2 border-sky-200 bg-sky-50 p-4"
      >
        <span class="text-3xl">🔗</span>
        <span class="min-w-0 flex-1">
          <span class="block font-extrabold text-sky-700">Deschide materialul</span>
          <span class="block truncate text-sm font-semibold text-muted">{{ host }}</span>
        </span>
        <span class="text-2xl text-sky-600">↗</span>
      </a>
    </article>

    <div class="grid grid-cols-2 gap-2">
      <button class="btn" :class="material.voted ? 'btn-primary' : 'btn-white'" @click="store.toggleVote(material.id)">
        ▲ {{ material.voted ? 'Votat' : 'Util' }} · {{ material.votes }}
      </button>
      <button class="btn btn-white" @click="reporting = true">🚩 Raportează</button>
    </div>
    <button
      v-if="store.isAdmin"
      class="btn w-full"
      :class="material.adminPick ? 'btn-white' : 'btn-yellow'"
      @click="store.toggleRecommended(material.id)"
    >
      ⭐ {{ material.adminPick ? 'Scoate recomandarea de admin' : 'Recomandă ca admin' }}
    </button>

    <p v-if="thanks" class="rounded-2xl bg-brand-50 px-4 py-3 text-center font-bold text-brand-700 pop-in">
      Mulțumim! Am trimis raportarea la moderare.
    </p>

    <ReportDialog v-if="reporting" @close="reporting = false" @submit="onReport" />
  </div>
  <div v-else class="card p-6 text-center font-bold">Materialul nu a fost găsit.</div>
</template>
