import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerSW } from 'virtual:pwa-register'
import App from './App.vue'
import router from './router'
import './style.css'

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
