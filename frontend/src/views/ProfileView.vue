<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'
import { hardRefresh } from '../lib/refresh'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()
const router = useRouter()

const initials = computed(() =>
  (store.user?.name ?? '?')
    .split(/\s+/)
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase(),
)
const known = computed(() => Object.values(store.cardState).filter((s) => s.box >= 3).length)
const isContributor = computed(() => store.contributions > 0)

const version = __APP_VERSION__
const updating = ref(false)

async function updateApp() {
  updating.value = true
  await hardRefresh()
}

function logout() {
  store.logout()
  router.push('/login')
}
</script>

<template>
  <div class="space-y-5">
    <header class="card flex items-center gap-4 p-5 slide-up">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-2xl font-black text-white">{{ initials }}</div>
      <div class="min-w-0 flex-1">
        <h1 class="truncate text-2xl font-black">{{ store.user?.name }}</h1>
        <p class="truncate text-sm font-semibold text-muted">{{ store.user?.email }}</p>
        <div class="mt-1 flex flex-wrap gap-1">
          <span v-if="isContributor" class="chip bg-amber-100 text-amber-700">🏅 Contributor</span>
          <span v-if="store.isAdmin" class="chip bg-violet-100 text-violet-700">🛡️ Admin</span>
        </div>
      </div>
    </header>

    <section class="grid grid-cols-3 gap-2">
      <div class="card p-3 text-center">
        <p class="text-2xl font-black text-orange-500"><span class="flame">🔥</span>{{ store.currentStreak }}</p>
        <p class="text-xs font-bold text-muted">zile la rând</p>
      </div>
      <div class="card p-3 text-center">
        <p class="text-2xl font-black text-brand-600">{{ known }}</p>
        <p class="text-xs font-bold text-muted">cartonașe știute</p>
      </div>
      <div class="card p-3 text-center">
        <p class="text-2xl font-black text-sky-600">{{ store.totalXp }}</p>
        <p class="text-xs font-bold text-muted">XP total</p>
      </div>
    </section>

    <RouterLink to="/statistici" class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]">
      <span class="text-3xl">📊</span>
      <span class="flex-1">
        <span class="block font-black">Statistici</span>
        <span class="block text-sm font-semibold text-muted">Activitate pe zile și unde greșești cel mai des</span>
      </span>
      <AppIcon name="forward" class="text-muted" />
    </RouterLink>

    <RouterLink to="/clasament" class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]">
      <span class="text-3xl">🏆</span>
      <span class="flex-1">
        <span class="block font-black">Clasament</span>
        <span class="block text-sm font-semibold text-muted">XP-ul tău față de colegi, pe săptămână</span>
      </span>
      <AppIcon name="forward" class="text-muted" />
    </RouterLink>

    <section class="card p-5">
      <h2 class="font-black">🎓 Anul de studiu</h2>
      <p class="mb-3 text-sm font-semibold text-muted">Acasă și Materii îți arată mai întâi materiile anului tău.</p>
      <div class="grid grid-cols-6 gap-1.5">
        <button
          v-for="y in 6"
          :key="y"
          class="rounded-xl border-2 border-b-4 py-2 font-black transition-colors"
          :class="store.studyYear === y ? 'border-[#15803d] bg-brand-500 text-white' : 'border-gray-200 bg-surface text-muted'"
          @click="store.setStudyYear(y)"
        >
          {{ ['I', 'II', 'III', 'IV', 'V', 'VI'][y - 1] }}
        </button>
      </div>
    </section>

    <section class="card p-5">
      <h2 class="mb-3 font-black">🌓 Temă</h2>
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="t in [{ id: 'auto', label: '📱 Auto' }, { id: 'light', label: '☀️ Luminos' }, { id: 'dark', label: '🌙 Întunecat' }]"
          :key="t.id"
          class="btn px-2 py-2 text-xs"
          :class="store.theme === t.id ? 'btn-primary' : 'btn-white'"
          @click="store.theme = t.id"
        >
          {{ t.label }}
        </button>
      </div>
    </section>

    <section>
      <h2 class="mb-2 text-lg font-black">Insigne</h2>
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <div
          v-for="b in store.badges"
          :key="b.id"
          class="card p-4 text-center"
          :class="b.earned ? 'pop-in' : 'opacity-50 grayscale'"
        >
          <p class="text-4xl">{{ b.emoji }}</p>
          <p class="mt-1 font-black">{{ b.name }}</p>
          <p class="text-xs font-semibold text-muted">{{ b.desc }}</p>
        </div>
      </div>
    </section>

    <section v-if="store.myMaterials.length || store.myCards.length">
      <h2 class="mb-2 text-lg font-black">Contribuțiile mele</h2>
      <div class="space-y-2">
        <RouterLink v-for="m in store.myMaterials" :key="m.id" :to="`/material/${m.id}`" class="card block p-3 font-extrabold">
          {{ m.type === 'link' ? '🔗' : '📝' }} {{ m.title }}
        </RouterLink>
        <div v-if="store.myCards.length" class="card p-3 font-extrabold">🃏 {{ store.myCards.length }} cartonașe adăugate</div>
      </div>
    </section>

    <section class="card space-y-3 p-5">
      <h2 class="font-black">🔄 Versiunea aplicației</h2>
      <p class="text-sm font-semibold text-muted">
        Ai versiunea <code class="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-xs">{{ version }}</code>.
        Dacă lipsește ceva ce ți-am spus că e nou, apasă butonul de mai jos. Progresul și cartonașele tale rămân salvate.
      </p>
      <button class="btn btn-white w-full" :disabled="updating" @click="updateApp">
        {{ updating ? 'Se actualizează…' : '🔄 Actualizează aplicația' }}
      </button>
    </section>

    <!-- Doar pentru demo -->
    <section class="card space-y-3 p-5">
      <h2 class="text-lg font-black">⚙️ Setări demo</h2>
      <label class="flex cursor-pointer items-center justify-between gap-3 font-bold">
        <span>
          Mod admin
          <span class="block text-xs font-semibold text-muted">Vezi butonul ⭐ Recomandat și pagina de moderare.</span>
        </span>
        <input v-model="store.isAdmin" type="checkbox" class="h-6 w-6 accent-brand-600" />
      </label>
      <RouterLink v-if="store.isAdmin" to="/moderare" class="btn btn-white w-full">
        🛡️ Moderare ({{ store.reports.length }})
      </RouterLink>
      <button class="btn btn-white w-full" @click="store.resetDemo()">↺ Resetează datele demo</button>
      <button class="btn btn-red w-full" @click="logout">Ieși din cont</button>
    </section>
  </div>
</template>
