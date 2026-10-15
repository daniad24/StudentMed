import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import * as mock from '../data/mock'
import { correctTexts } from '../lib/quiz'

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

// Luni din săptămâna curentă.
export function weekStart() {
  const day = new Date(today() + 'T00:00:00Z').getUTCDay()
  return addDays(today(), -((day + 6) % 7))
}

// Leitner simplificat: Roșu → mâine, Galben → peste 3 zile, Verde → 7, 14, 30, 60 de zile.
const GREEN_INTERVALS = [7, 14, 30, 60]

// De la câte voturi un material devine automat „Recomandat".
export const RECOMMEND_VOTES = 25

export const XP = { card: 2, correct: 5, wrong: 1, exam: 20, case: 10 }

// Colegi fictivi pentru clasamentul demo (XP pe o săptămână întreagă).
const DEMO_RIVALS = [
  { name: 'Ana M.', weekXp: 640 },
  { name: 'Mihai P.', weekXp: 455 },
  { name: 'Ioana R.', weekXp: 380 },
  { name: 'Andrei C.', weekXp: 290 },
  { name: 'Bianca T.', weekXp: 210 },
  { name: 'Radu S.', weekXp: 150 },
  { name: 'Elena V.', weekXp: 95 },
  { name: 'Vlad D.', weekXp: 40 },
]

const KEYS = [
  'user', 'isAdmin', 'theme', 'streak', 'cardState', 'votes', 'recommendedOverrides', 'reports',
  'myMaterials', 'myCards', 'quizCards', 'quizHistory', 'examHistory', 'answerLog', 'activity', 'leaderboardOptIn',
  'examDates', 'caseProgress', 'skillStatus',
]

// Carnetul de abilități practice: nivelul atins pentru fiecare manevră/examinare.
export const SKILL_LEVELS = [
  { id: 0, label: 'Neînceput', short: '–' },
  { id: 1, label: 'Am văzut', short: '👀' },
  { id: 2, label: 'Am făcut sub supraveghere', short: '🧑‍⚕️' },
  { id: 3, label: 'Fac singur(ă)', short: '✅' },
]

export const useAppStore = defineStore('app', () => {
  const saved = load()

  const user = ref(saved.user ?? null)
  const isAdmin = ref(saved.isAdmin ?? false)
  const theme = ref(saved.theme ?? 'auto')
  const streak = ref(saved.streak ?? { count: 0, lastDate: null })
  const cardState = ref(saved.cardState ?? {})
  const votes = ref(saved.votes ?? {})
  const recommendedOverrides = ref(saved.recommendedOverrides ?? {})
  const reports = ref(saved.reports ?? [])
  const myMaterials = ref(saved.myMaterials ?? [])
  const myCards = ref(saved.myCards ?? [])
  const quizCards = ref(saved.quizCards ?? [])
  const quizHistory = ref(saved.quizHistory ?? [])
  const examHistory = ref(saved.examHistory ?? [])
  const answerLog = ref(saved.answerLog ?? [])
  const activity = ref(saved.activity ?? {})
  const leaderboardOptIn = ref(saved.leaderboardOptIn ?? true)
  const examDates = ref(saved.examDates ?? {}) // { subjectId: 'YYYY-MM-DD' }
  const caseProgress = ref(saved.caseProgress ?? {}) // { caseId: { date, ratings: ['yes'|'partial'|'no'] } }
  const skillStatus = ref(saved.skillStatus ?? {}) // { skillId: 0..3 }

  const refs = {
    user, isAdmin, theme, streak, cardState, votes, recommendedOverrides, reports,
    myMaterials, myCards, quizCards, quizHistory, examHistory, answerLog, activity, leaderboardOptIn,
    examDates, caseProgress, skillStatus,
  }
  watch(
    KEYS.map((k) => refs[k]),
    () => save(Object.fromEntries(KEYS.map((k) => [k, refs[k].value]))),
    { deep: true },
  )

  // --- Cont ---
  function login(name, email, year = null) {
    user.value = { name, email, year: year ?? user.value?.year ?? null }
  }

  // Anul de studiu (1–6) al studentului; null până îl alege.
  const studyYear = computed(() => user.value?.year ?? null)
  function setStudyYear(year) {
    if (user.value) user.value = { ...user.value, year }
  }
  function logout() {
    user.value = null
    isAdmin.value = false
  }

  // --- Streak și XP ---
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

  function addXp(n) {
    const t = today()
    activity.value = { ...activity.value, [t]: (activity.value[t] ?? 0) + n }
    markStudied()
  }

  const totalXp = computed(() => Object.values(activity.value).reduce((a, b) => a + b, 0))
  const weekXp = computed(() => {
    const start = weekStart()
    return Object.entries(activity.value)
      .filter(([d]) => d >= start)
      .reduce((a, [, xp]) => a + xp, 0)
  })

  const leaderboard = computed(() => {
    // Colegii demo „acumulează" XP pe parcursul săptămânii, ca să pară vii.
    const dayIndex = (new Date(today() + 'T00:00:00Z').getUTCDay() + 6) % 7
    const rows = DEMO_RIVALS.map((r) => ({ name: r.name, xp: Math.round((r.weekXp * (dayIndex + 1)) / 7), me: false }))
    if (leaderboardOptIn.value) rows.push({ name: user.value?.name ?? 'Tu', xp: weekXp.value, me: true })
    return rows.sort((a, b) => b.xp - a.xp)
  })

  // --- Materiale ---
  const allMaterials = computed(() =>
    [...mock.materials, ...myMaterials.value].map((m) => {
      const adminPick = recommendedOverrides.value[m.id] ?? m.recommended
      const count = m.upvotes + (votes.value[m.id] ? 1 : 0)
      const byVotes = count >= RECOMMEND_VOTES
      return {
        ...m,
        adminPick,
        recommended: adminPick || byVotes,
        recommendedBy: adminPick ? 'admin' : byVotes ? 'votes' : null,
        votes: count,
        voted: !!votes.value[m.id],
        mine: myMaterials.value.some((x) => x.id === m.id),
      }
    }),
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
    recommendedOverrides.value = { ...recommendedOverrides.value, [id]: !m.adminPick }
  }

  function addMaterial(data) {
    const m = {
      id: 'u' + Date.now(),
      author: user.value?.name ?? 'Tu',
      upvotes: 0,
      recommended: false,
      source: 'community',
      createdAt: today(),
      ...data,
    }
    myMaterials.value.push(m)
    return m
  }

  // --- Flashcards ---
  const allCards = computed(() => [...mock.flashcards, ...myCards.value, ...quizCards.value])

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

  // Cartonașe importate dintr-un fișier (PPT/PDF), salvate deodată.
  function addCards(subjectId, cards, source) {
    const stamp = Date.now()
    const author = user.value?.name ?? 'Tu'
    const added = cards.map((c, i) => ({ id: `uc${stamp}-${i}`, author, subjectId, source, front: c.front, back: c.back }))
    myCards.value.push(...added)
    return added
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
    addXp(XP.card)
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

  // O grilă greșită devine cartonaș de repetat (o singură dată per grilă).
  // Întoarce true dacă s-a creat un cartonaș nou.
  function addQuizCard(q) {
    const id = 'qc-' + q.id
    if (quizCards.value.some((c) => c.id === id)) {
      // deja există: îl readucem la repetare de azi
      cardState.value = { ...cardState.value, [id]: { box: 1, due: today() } }
      return false
    }
    quizCards.value.push({
      id,
      subjectId: q.subjectId,
      front: q.text,
      back: correctTexts(q).join(' · '),
      note: q.explanation,
      fromQuiz: true,
    })
    return true
  }

  function recordAnswer(q, correct) {
    answerLog.value.push({ qid: q.id, subjectId: q.subjectId, correct, date: today() })
    if (answerLog.value.length > 2000) answerLog.value.splice(0, answerLog.value.length - 2000)
    addXp(correct ? XP.correct : XP.wrong)
    if (!correct) addQuizCard(q)
  }

  function recordQuiz(subjectId, score, total) {
    quizHistory.value.push({ subjectId, score, total, date: today() })
    markStudied()
  }

  function recordExam(subjectIds, score, total, seconds) {
    examHistory.value.push({ subjectIds, score, total, seconds, date: today() })
    addXp(XP.exam)
  }

  // --- Statistici ---
  function accuracyFor(subjectId) {
    const log = answerLog.value.filter((a) => a.subjectId === subjectId)
    if (!log.length) return null
    return { answered: log.length, correct: log.filter((a) => a.correct).length }
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
    { id: 'exam', emoji: '🎓', name: 'Gata de colocviu', desc: 'Prima simulare de examen', earned: examHistory.value.length > 0 },
    { id: 'case', emoji: '🧩', name: 'Clinician', desc: 'Primul caz clinic rezolvat', earned: Object.keys(caseProgress.value).length > 0 },
    { id: 'skills', emoji: '📋', name: 'Mâini sigure', desc: '5 abilități practice făcute singur(ă)', earned: Object.values(skillStatus.value).filter((l) => l >= 3).length >= 5 },
    { id: 'helper', emoji: '🚩', name: 'Ochi de vultur', desc: 'Ai raportat o greșeală', earned: reports.value.some((r) => r.by === user.value?.name) },
  ])

  // --- Colocvii ---
  function setExamDate(subjectId, date) {
    const next = { ...examDates.value }
    if (date) next[subjectId] = date
    else delete next[subjectId]
    examDates.value = next
  }

  // Câte zile mai sunt și câte grile pe zi ar trebui rezolvate ca să le treci pe toate o dată.
  function examPlan(subjectId) {
    const date = examDates.value[subjectId]
    if (!date) return null
    const daysLeft = Math.round((new Date(date + 'T00:00:00') - new Date(today() + 'T00:00:00')) / 864e5)
    const qs = questionsFor(subjectId)
    const solved = new Set(answerLog.value.filter((a) => a.subjectId === subjectId && a.correct).map((a) => a.qid))
    const remaining = qs.filter((q) => !solved.has(q.id)).length
    return {
      date,
      daysLeft,
      total: qs.length,
      remaining,
      perDay: daysLeft > 0 ? Math.ceil(remaining / daysLeft) : remaining,
      dueCards: dueCardsFor(subjectId).length,
    }
  }

  const upcomingExams = computed(() =>
    Object.keys(examDates.value)
      .map((id) => ({ subjectId: id, ...examPlan(id) }))
      .filter((e) => e.daysLeft >= 0)
      .sort((a, b) => a.daysLeft - b.daysLeft),
  )

  // --- Stagiu: cazuri clinice și abilități practice ---
  function clinicalFor(subjectId) {
    return mock.clinical[subjectId] ?? { cases: [], skills: [] }
  }

  function finishCase(caseId, ratings) {
    caseProgress.value = { ...caseProgress.value, [caseId]: { date: today(), ratings } }
    addXp(XP.case)
  }

  function setSkillLevel(skillId, level) {
    skillStatus.value = { ...skillStatus.value, [skillId]: level }
  }

  function stagiuStats(subjectId) {
    const { cases, skills } = clinicalFor(subjectId)
    return {
      cases: cases.length,
      casesDone: cases.filter((c) => caseProgress.value[c.id]).length,
      skills: skills.length,
      skillsDone: skills.filter((sk) => (skillStatus.value[sk.id] ?? 0) >= 3).length,
    }
  }

  function resetDemo() {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignorat
    }
    location.href = '/'
  }

  return {
    user, isAdmin, theme, streak, cardState, reports, myMaterials, myCards, quizCards,
    quizHistory, examHistory, answerLog, activity, leaderboardOptIn,
    examDates, caseProgress, skillStatus,
    login, logout, studyYear, setStudyYear,
    setExamDate, examPlan, upcomingExams, clinicalFor, finishCase, setSkillLevel, stagiuStats,
    currentStreak, studiedToday, markStudied, totalXp, weekXp, leaderboard,
    allMaterials, materialsFor, toggleVote, toggleRecommended, addMaterial,
    allCards, cardsFor, dueCardsFor, addCard, addCards, rateCard, cardStats,
    questionsFor, recordAnswer, recordQuiz, recordExam, accuracyFor,
    report, resolveReport,
    contributions, badges, resetDemo,
  }
})
