<script setup>
import { computed } from 'vue'
import { useAppStore, today } from '../stores/app'
import { subjects } from '../data/mock'
import BackButton from '../components/BackButton.vue'
import AppIcon from '../components/AppIcon.vue'

const store = useAppStore()

// Data concursului, conform calendarului publicat pe rezidentiat.ms.ro.
const EXAM_DATE = '2026-11-15'
const daysLeft = computed(() => Math.round((new Date(EXAM_DATE) - new Date(today())) / 864e5))

const chapters = computed(() =>
  subjects
    .filter((s) => s.rez)
    .map((s) => {
      const questions = store.questionsFor(s.id).length
      const acc = store.accuracyFor(s.id)
      return { ...s, questions, pct: acc ? Math.round((acc.correct / acc.answered) * 100) : null }
    }),
)
const byBook = computed(() => {
  const groups = {}
  for (const c of chapters.value) (groups[c.rez.book] ??= []).push(c)
  return Object.entries(groups)
})
const totalQuestions = computed(() => chapters.value.reduce((a, c) => a + c.questions, 0))
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <BackButton to="/materii" history />
      <h1 class="text-2xl font-black">🎯 Rezidențiat</h1>
    </header>

    <section class="rounded-3xl border-b-4 border-[#6d28d9] bg-gradient-to-br from-violet-500 to-violet-700 p-5 text-white slide-up">
      <p v-if="daysLeft > 0" class="text-4xl font-black">{{ daysLeft }} {{ daysLeft === 1 ? 'zi' : 'zile' }}</p>
      <p v-else class="text-2xl font-black">Mult succes la concurs!</p>
      <p class="font-semibold text-white/90">până la concursul din 15 noiembrie 2026 (domeniul Medicină)</p>
      <div class="mt-4 grid grid-cols-3 gap-2 text-center">
        <div class="rounded-2xl bg-white/15 p-2"><p class="text-xl font-black">200</p><p class="text-xs font-bold text-white/90">întrebări</p></div>
        <div class="rounded-2xl bg-white/15 p-2"><p class="text-xl font-black">4 h</p><p class="text-xs font-bold text-white/90">timp</p></div>
        <div class="rounded-2xl bg-white/15 p-2"><p class="text-xl font-black whitespace-nowrap">50+150</p><p class="text-xs font-bold text-white/90">CS / CM</p></div>
      </div>
    </section>

    <RouterLink
      to="/simulare?mod=rezidentiat"
      class="card flex items-center gap-3 p-4 transition-transform active:translate-y-[2px]"
      :class="!totalQuestions && 'pointer-events-none opacity-50'"
    >
      <span class="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-violet-200 bg-violet-100 text-2xl">📝</span>
      <span class="flex-1">
        <span class="block font-black">Simulare în format rezidențiat</span>
        <span class="block text-sm font-semibold text-muted">Grile amestecate din toate capitolele · {{ totalQuestions }} disponibile</span>
      </span>
      <AppIcon name="forward" class="text-violet-700" />
    </RouterLink>

    <section v-for="[book, list] in byBook" :key="book" class="space-y-2">
      <h2 class="font-black">📕 {{ book }}</h2>
      <component
        :is="c.questions ? 'RouterLink' : 'div'"
        v-for="c in list"
        :key="c.id"
        :to="c.questions ? `/materie/${c.id}?tab=grile` : undefined"
        class="card flex items-center gap-3 p-3"
        :class="c.questions ? 'transition-transform active:translate-y-[2px]' : 'opacity-60'"
      >
        <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 text-xl" :class="c.color">{{ c.emoji }}</span>
        <span class="min-w-0 flex-1">
          <span class="block font-extrabold">{{ c.name }}</span>
          <span class="block text-xs font-bold text-muted">
            {{ c.rez.weight }} · {{ c.questions ? `${c.questions} grile` : 'în curând' }}
            <template v-if="c.pct !== null"> · {{ c.pct }}% corecte</template>
          </span>
        </span>
        <AppIcon v-if="c.questions" name="forward" class="text-muted" />
      </component>
    </section>

    <section class="card space-y-2 p-5 text-sm font-semibold text-muted">
      <h2 class="text-base font-black text-ink">Despre concurs</h2>
      <p>
        Bibliografia oficială (Medicină): <strong class="text-ink">Kumar & Clark – Medicină clinică</strong> (ed. 10),
        <strong class="text-ink">Lawrence – Chirurgie generală și specialități chirurgicale</strong> (ed. 6) și
        <strong class="text-ink">Sinopsis de medicină</strong> (ed. 5), capitolele din tematică.
      </p>
      <p>Grilele cu complement multiplu au 2–4 răspunsuri corecte din 5. În aplicație o grilă e corectă doar dacă bifezi exact variantele bune.</p>
      <p>
        Tematica și calendarul oficial:
        <a href="https://rezidentiat.ms.ro/" target="_blank" rel="noopener noreferrer" class="font-bold text-sky-600 underline">rezidentiat.ms.ro</a>.
        Ponderea capitolelor e orientativă, după analizele grilelor din anii trecuți.
      </p>
    </section>
  </div>
</template>
