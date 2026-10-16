<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'

// Turul pentru prima intrare: evidențiază elementele reale ale aplicației, pas cu pas.
// `target` = valoarea atributului data-tour; fără target, cardul apare în mijlocul ecranului.
const STEPS = [
  { route: '/', title: 'Bun venit în Steto! 👋', text: 'Îți arătăm în aproximativ un minut ce poți face aici. Poți sări oricând peste tur.' },
  { route: '/', target: 'streak', title: 'Seria ta 🔥', text: 'Câte zile la rând ai învățat. Câteva cartonașe pe zi sunt de ajuns ca s-o păstrezi.' },
  { route: '/', target: 'tinta', title: 'Ai test? Pregătește-te la țintă 🎯', text: 'Alegi materia, subiectele din test și cât timp ai, iar aplicația îți face un plan: rezumate, cartonașe, grile și un caz clinic. Pentru ultima seară există modul „Seara dinainte”.' },
  { route: '/', target: 'pauza', title: 'Pauza de gardă ⏱️', text: '10 grile în 3 minute, cu explicații. Grilele greșite devin automat cartonașe de repetat.' },
  { route: '/', target: 'simulare', title: 'Simulare de examen 🎓', text: 'Grile amestecate din materiile alese, cu timp, ca la colocviu. Rezultatul îl vezi la final.' },
  { route: '/', target: 'repetat', title: 'De repetat azi 🃏', text: 'Cartonașele revin singure când e momentul să le repeți. Tu doar apeși Start și spui cât de bine le știai.' },
  { route: '/', target: 'cauta', title: 'Caută 🔍', text: 'Găsești rapid orice rezumat, grilă sau cartonaș după un cuvânt.' },
  { route: '/materii', target: 'ani', title: 'Materiile, pe ani 📚', text: 'Organizate după planul de învățământ UMF „Carol Davila”. Pagina se deschide direct pe anul tău.' },
  { route: '/materii', target: 'lista-materii', title: 'În fiecare materie', text: 'Rezumate verificate, cartonașe și grile. La materiile clinice ai și cazuri clinice pas cu pas și carnetul de stagiu.' },
  { route: '/adauga', target: 'nav-adauga', title: 'Adaugă 📄', text: 'Pui rezumatele și cartonașele tale sau le generezi direct din PPT-ul ori PDF-ul cursului.' },
  { route: '/profil', target: 'nav-profil', title: 'Profil 👤', text: 'Anul de studiu, tema luminoasă sau întunecată, insignele și backup-ul progresului. De aici poți relua oricând acest tur.' },
  { route: '/', title: 'Gata! 🍀', text: 'Începe cu ce ai nevoie azi. Spor la învățat!' },
]

const store = useAppStore()
const router = useRouter()
const index = ref(0)
const rect = ref(null) // { top, left, width, height } al elementului evidențiat
const step = computed(() => STEPS[index.value])
const last = computed(() => index.value === STEPS.length - 1)

function measure() {
  const el = step.value.target && document.querySelector(`[data-tour="${step.value.target}"]`)
  if (!el) return (rect.value = null)
  const r = el.getBoundingClientRect()
  const pad = 6
  const top = Math.max(r.top - pad, 8)
  const bottom = Math.min(r.bottom + pad, window.innerHeight - 8)
  rect.value = { top, left: Math.max(r.left - pad, 4), width: Math.min(r.width + pad * 2, window.innerWidth - 8), height: Math.max(bottom - top, 0) }
}

// Așteaptă ca pagina să apară (animațiile durează puțin), apoi aduce elementul în ecran.
async function show() {
  if (router.currentRoute.value.path !== step.value.route) await router.push(step.value.route)
  await nextTick()
  rect.value = null
  for (let i = 0; i < 30; i++) {
    const el = step.value.target && document.querySelector(`[data-tour="${step.value.target}"]`)
    if (!step.value.target || el) {
      // elementul urcă sus în ecran, iar cardul cu explicația stă jos (bara de jos rămâne pe loc)
      if (el && getComputedStyle(el.closest('nav') ?? el).position !== 'fixed') {
        window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 16 })
      }
      break
    }
    await new Promise((r) => setTimeout(r, 50))
  }
  await new Promise((r) => setTimeout(r, 380))
  measure()
}

function next() {
  if (last.value) return finish()
  index.value++
  show()
}
function back() {
  if (index.value === 0) return
  index.value--
  show()
}
function finish() {
  store.finishTour()
  if (router.currentRoute.value.path !== '/') router.push('/')
}

// Cardul stă jos; dacă elementul evidențiat e chiar jos (bara de navigare), cardul urcă sus.
const cardStyle = computed(() => {
  if (!rect.value) return { top: '50%', transform: 'translateY(-50%)' }
  return rect.value.top > window.innerHeight * 0.6 ? { top: '16px' } : { bottom: '16px' }
})

const onKey = (e) => {
  if (e.key === 'Escape') finish()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') back()
}
onMounted(() => {
  window.addEventListener('resize', measure)
  window.addEventListener('scroll', measure, true)
  window.addEventListener('keydown', onKey)
  show()
})
onUnmounted(() => {
  window.removeEventListener('resize', measure)
  window.removeEventListener('scroll', measure, true)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div class="fixed inset-0 z-[60]" role="dialog" aria-modal="true" :aria-label="step.title">
    <!-- fundal: blochează atingerile; „gaura” luminoasă e doar vizuală -->
    <div class="absolute inset-0" :class="rect ? '' : 'bg-black/60'" @click.stop></div>
    <div
      v-if="rect"
      class="pointer-events-none absolute rounded-2xl ring-4 ring-brand-400 transition-all duration-300"
      :style="{ top: rect.top + 'px', left: rect.left + 'px', width: rect.width + 'px', height: rect.height + 'px', boxShadow: '0 0 0 9999px rgba(0,0,0,.6)' }"
    ></div>

    <div class="absolute inset-x-4 mx-auto max-h-[calc(100dvh-32px)] max-w-md overflow-y-auto rounded-3xl" :style="cardStyle">
      <div :key="index" class="card p-5 pop-in">
        <div class="flex items-center justify-between gap-2">
          <p class="text-xs font-black tracking-widest text-muted uppercase">Pasul {{ index + 1 }} din {{ STEPS.length }}</p>
          <button v-if="!last" class="-my-2 whitespace-nowrap px-1 py-2 text-sm font-bold text-muted" @click="finish">Sari peste</button>
        </div>
        <h2 class="mt-1 text-xl font-black">{{ step.title }}</h2>
        <p class="mt-2 font-semibold leading-relaxed text-muted">{{ step.text }}</p>
        <div class="mt-3 flex gap-1">
          <span v-for="(_, i) in STEPS" :key="i" class="h-1.5 flex-1 rounded-full" :class="i <= index ? 'bg-brand-500' : 'bg-gray-200'"></span>
        </div>
        <div class="mt-4 flex items-center gap-2">
          <button v-if="index > 0" class="btn btn-white h-11 w-11 shrink-0 p-0 text-lg" aria-label="Înapoi" @click="back">‹</button>
          <button class="btn btn-primary flex-1 px-4 py-2 text-sm" @click="next">{{ last ? 'Începe' : index === 0 ? 'Hai să vedem' : 'Următorul ›' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
