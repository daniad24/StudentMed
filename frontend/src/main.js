import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import router from './router'
import './style.css'
import { hardRefresh, newVersionAvailable, reloadOnceIfStale } from './lib/refresh'

window.addEventListener('vite:preloadError', (e) => {
  if (reloadOnceIfStale()) e.preventDefault()
})

createApp(App).use(createPinia()).use(router).mount('#app')

// Actualizare automată: când apare o versiune nouă pe server, aplicația se reîncarcă singură.
// Verificăm și la revenirea în aplicație (pe telefon PWA-ul stă deschis mult timp în fundal).
registerSW({
  immediate: true,
  onRegisteredSW(_url, registration) {
    if (!registration) return
    const check = () => registration.update().catch(() => {})
    document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && check())
    setInterval(check, 60 * 60 * 1000)
  },
})

// Versiune nouă: o aflăm la pornire, la revenirea în aplicație și din 10 în 10 minute.
// Reîncărcăm automat, dar nu în mijlocul unui test sau al unei sesiuni de cartonașe: atunci așteptăm următoarea pagină.
let updatePending = false
async function checkForUpdate() {
  if (!updatePending && !(await newVersionAvailable(__APP_VERSION__))) return
  updatePending = true
  if (router.currentRoute.value.meta.focus) return
  hardRefresh()
}
router.afterEach(() => {
  if (updatePending && !router.currentRoute.value.meta.focus) hardRefresh()
})
checkForUpdate()
document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && checkForUpdate())
setInterval(checkForUpdate, 10 * 60 * 1000)
