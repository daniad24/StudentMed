import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import * as mock from '../data/mock'

// În mock totul se salvează local, pe dispozitiv. Backend-ul Go va înlocui asta.
const STORAGE_KEY = 'studentmed-mock-v1'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // stocare indisponibilă (ex. navigare privată) – aplicația merge și fără
  }
}

export function today() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function addDays(date, days) {
  const d = new Date(date + 'T00:00:00Z')
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

// Leitner simplificat: Roșu → mâine, Galben → peste 3 zile, Verde → 7, 14, 30, 60 de zile.
const GREEN_INTERVALS = [7, 14, 30, 60]

export const useAppStore = defineStore('app', () => {
  const saved = load()

  const user = ref(saved.user ?? null)
  const isAdmin = ref(saved.isAdmin ?? false)
  const streak = ref(saved.streak ?? { count: 0, lastDate: null })
  const cardState = ref(saved.cardState ?? {})
  const votes = ref(saved.votes ?? {})
  const recommendedOverrides = ref(saved.recommendedOverrides ?? {})
  const reports = ref(saved.reports ?? [])
  const myMaterials = ref(saved.myMaterials ?? [])
  const myCards = ref(saved.myCards ?? [])
  const quizHistory = ref(saved.quizHistory ?? [])

  watch(
    [user, isAdmin, streak, cardState, votes, recommendedOverrides, reports, myMaterials, myCards, quizHistory],
    () =>
      save({
        user: user.value,
        isAdmin: isAdmin.value,
        streak: streak.value,
        cardState: cardState.value,
        votes: votes.value,
        recommendedOverrides: recommendedOverrides.value,
        reports: reports.value,
        myMaterials: myMaterials.value,
        myCards: myCards.value,
        quizHistory: quizHistory.value,
      }),
    { deep: true },
  )

  // --- Cont ---
  function login(name, email) {
    user.value = { name, email }
  }
  function logout() {
    user.value = null
    isAdmin.value = false
  }

  // --- Streak ---
  const currentStreak = computed(() => {
    const { count, lastDate } = streak.value
    if (!lastDate) return 0
    return lastDate === today() || lastDate === addDays(today(), -1) ? count : 0
  })
  const studiedToday = computed(() => streak.value.lastDate === today())

  function markStudied() {
    const t = today()
    const { count, lastDate } = streak.value
    if (lastDate === t) return
    streak.value = { count: lastDate === addDays(t, -1) ? count + 1 : 1, lastDate: t }
  }

  // --- Materiale ---
  const allMaterials = computed(() =>
    [...mock.materials, ...myMaterials.value].map((m) => ({
      ...m,
      recommended: recommendedOverrides.value[m.id] ?? m.recommended,
      votes: m.upvotes + (votes.value[m.id] ? 1 : 0),
      voted: !!votes.value[m.id],
      mine: myMaterials.value.some((x) => x.id === m.id),
    })),
  )

  function materialsFor(subjectId) {
    return allMaterials.value
      .filter((m) => m.subjectId === subjectId)
      .sort((a, b) => b.votes - a.votes)
  }

  function toggleVote(id) {
    votes.value = { ...votes.value, [id]: !votes.value[id] }
  }

  function toggleRecommended(id) {
    const m = allMaterials.value.find((x) => x.id === id)
    recommendedOverrides.value = { ...recommendedOverrides.value, [id]: !m.recommended }
  }

  function addMaterial(data) {
    const m = {
      id: 'u' + Date.now(),
      author: user.value?.name ?? 'Tu',
      upvotes: 0,
      recommended: false,
      createdAt: today(),
      ...data,
    }
    myMaterials.value.push(m)
    return m
  }

  // --- Flashcards ---
  const allCards = computed(() => [...mock.flashcards, ...myCards.value])

  function cardsFor(subjectId) {
    return allCards.value.filter((c) => c.subjectId === subjectId)
  }

  function dueCardsFor(subjectId) {
    const t = today()
    return cardsFor(subjectId).filter((c) => {
      const s = cardState.value[c.id]
      return !s || s.due <= t
    })
  }

  function addCard(data) {
    const c = { id: 'uc' + Date.now(), author: user.value?.name ?? 'Tu', ...data }
    myCards.value.push(c)
    return c
  }

  // rating: 'red' | 'yellow' | 'green'
  function rateCard(cardId, rating) {
    const prev = cardState.value[cardId]?.box ?? 0
    let box
    let days
    if (rating === 'red') {
      box = 1
      days = 1
    } else if (rating === 'yellow') {
      box = 2
      days = 3
    } else {
      box = Math.min(Math.max(prev + 1, 3), 3 + GREEN_INTERVALS.length - 1)
      days = GREEN_INTERVALS[box - 3]
    }
    cardState.value = { ...cardState.value, [cardId]: { box, due: addDays(today(), days) } }
    markStudied()
    return days
  }

  function cardStats(subjectId) {
    const cards = cardsFor(subjectId)
    const known = cards.filter((c) => (cardState.value[c.id]?.box ?? 0) >= 3).length
    return { total: cards.length, due: dueCardsFor(subjectId).length, known }
  }

  // --- Grile ---
  function questionsFor(subjectId) {
    return mock.questions.filter((q) => q.subjectId === subjectId)
  }

  function recordQuiz(subjectId, score, total) {
    quizHistory.value.push({ subjectId, score, total, date: today() })
    markStudied()
  }

  // --- Raportări ---
  function report(kind, targetId, title, reason) {
    reports.value.push({
      id: 'r' + Date.now(),
      kind,
      targetId,
      title,
      reason,
      by: user.value?.name ?? 'Anonim',
      date: today(),
    })
  }

  function resolveReport(id) {
    reports.value = reports.value.filter((r) => r.id !== id)
  }

  // --- Insigne ---
  const contributions = computed(() => myMaterials.value.length + myCards.value.length)

  const badges = computed(() => [
    { id: 'contributor', emoji: '🏅', name: 'Contributor', desc: 'Ai adăugat material sau flashcards', earned: contributions.value > 0 },
    { id: 'streak3', emoji: '🔥', name: 'În formă', desc: '3 zile de studiu la rând', earned: streak.value.count >= 3 },
    { id: 'firstQuiz', emoji: '⏱️', name: 'De gardă', desc: 'Primul quiz rapid terminat', earned: quizHistory.value.length > 0 },
    { id: 'perfect', emoji: '🎯', name: 'Fără greșeală', desc: '10/10 la un quiz', earned: quizHistory.value.some((q) => q.score === q.total && q.total >= 10) },
    { id: 'helper', emoji: '🚩', name: 'Ochi de vultur', desc: 'Ai raportat o greșeală', earned: reports.value.some((r) => r.by === user.value?.name) },
  ])

  function resetDemo() {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignorat
    }
    location.href = '/'
  }

  return {
    user, isAdmin, streak, cardState, reports, myMaterials, myCards, quizHistory,
    login, logout,
    currentStreak, studiedToday, markStudied,
    allMaterials, materialsFor, toggleVote, toggleRecommended, addMaterial,
    allCards, cardsFor, dueCardsFor, addCard, rateCard, cardStats,
    questionsFor, recordQuiz,
    report, resolveReport,
    contributions, badges, resetDemo,
  }
})
