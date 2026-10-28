import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from './stores/app'

const routes = [
  { path: '/login', name: 'login', component: () => import('./views/LoginView.vue'), meta: { public: true } },
  { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
  { path: '/materii', name: 'subjects', component: () => import('./views/SubjectsView.vue') },
  { path: '/materie/:id', name: 'subject', component: () => import('./views/SubjectView.vue') },
  { path: '/material/:id', name: 'material', component: () => import('./views/MaterialView.vue') },
  { path: '/flashcards/:subjectId', name: 'flashcards', component: () => import('./views/FlashcardsView.vue'), meta: { focus: true } },
  { path: '/tinta', name: 'target', component: () => import('./views/TargetView.vue') },
  { path: '/tinta/plan', name: 'plan', component: () => import('./views/PlanView.vue') },
  { path: '/pauza', name: 'quiz-pick', component: () => import('./views/QuizPickView.vue') },
  { path: '/pauza/:subjectId', name: 'quiz', component: () => import('./views/QuizView.vue'), meta: { focus: true } },
  { path: '/simulare', name: 'exam', component: () => import('./views/ExamView.vue'), meta: { focus: true } },
  { path: '/rezidentiat', name: 'rezidentiat', component: () => import('./views/RezidentiatView.vue') },
  { path: '/cauta', name: 'search', component: () => import('./views/SearchView.vue') },
  { path: '/clasament', name: 'leaderboard', component: () => import('./views/LeaderboardView.vue') },
  { path: '/statistici', name: 'stats', component: () => import('./views/StatsView.vue') },
  { path: '/caz/:caseId', name: 'case', component: () => import('./views/CaseView.vue'), meta: { focus: true } },
  { path: '/calendar', name: 'calendar', component: () => import('./views/CalendarView.vue') },
  { path: '/cursuri', name: 'courses', component: () => import('./views/CoursesView.vue') },
  { path: '/import', name: 'import', component: () => import('./views/ImportView.vue') },
  { path: '/import-ai', name: 'import-ai', component: () => import('./views/AiImportView.vue') },
  { path: '/adauga', name: 'add', component: () => import('./views/AddView.vue') },
  { path: '/profil', name: 'profile', component: () => import('./views/ProfileView.vue') },
  { path: '/moderare', name: 'moderation', component: () => import('./views/ModerationView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.beforeEach((to) => {
  const store = useAppStore()
  if (!to.meta.public && !store.user) return { name: 'login' }
  if (to.name === 'login' && store.user) return { name: 'home' }
})

export default router
