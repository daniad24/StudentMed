<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'

const store = useAppStore()
const router = useRouter()

const mode = ref('login')
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

function submit() {
  error.value = ''
  if (!/^\S+@\S+\.\S+$/.test(email.value)) return (error.value = 'Introdu o adresă de email validă.')
  if (password.value.length < 6) return (error.value = 'Parola trebuie să aibă minim 6 caractere.')
  if (mode.value === 'register' && !name.value.trim()) return (error.value = 'Spune-ne cum te cheamă.')
  const displayName = name.value.trim() || email.value.split('@')[0]
  store.login(displayName, email.value)
  router.push('/')
}
</script>

<template>
  <div class="flex min-h-[90dvh] flex-col justify-center">
    <div class="mb-8 text-center pop-in">
      <img src="/icon.svg" alt="" class="mx-auto mb-4 h-20 w-20 drop-shadow" />
      <h1 class="text-4xl font-black text-brand-700">StudentMed</h1>
      <p class="mt-2 font-semibold text-muted">Materiale, flashcards și grile pentru medicină.</p>
    </div>

    <div class="card p-6 slide-up">
      <div class="mb-5 grid grid-cols-2 rounded-2xl bg-gray-100 p-1 font-extrabold">
        <button
          class="rounded-xl py-2 transition-colors"
          :class="mode === 'login' ? 'bg-white shadow text-brand-700' : 'text-muted'"
          @click="mode = 'login'"
        >
          Intră în cont
        </button>
        <button
          class="rounded-xl py-2 transition-colors"
          :class="mode === 'register' ? 'bg-white shadow text-brand-700' : 'text-muted'"
          @click="mode = 'register'"
        >
          Cont nou
        </button>
      </div>

      <form class="space-y-4" @submit.prevent="submit">
        <div v-if="mode === 'register'">
          <label class="label" for="name">Nume</label>
          <input id="name" v-model="name" class="input" autocomplete="name" placeholder="ex. Ana Popescu" />
        </div>
        <div>
          <label class="label" for="email">Email</label>
          <input id="email" v-model="email" class="input" type="email" autocomplete="email" placeholder="nume@exemplu.ro" />
        </div>
        <div>
          <label class="label" for="password">Parolă</label>
          <input
            id="password"
            v-model="password"
            class="input"
            type="password"
            :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
            placeholder="minim 6 caractere"
          />
        </div>
        <p v-if="error" class="rounded-xl bg-red-50 px-3 py-2 text-sm font-bold text-red-600 shake">{{ error }}</p>
        <button class="btn btn-primary w-full" type="submit">
          {{ mode === 'login' ? 'Intră' : 'Creează cont' }}
        </button>
      </form>
    </div>

    <p class="mt-6 text-center text-xs font-semibold text-muted">
      Versiune demo: orice email și parolă funcționează. Datele rămân doar pe acest dispozitiv.
    </p>
  </div>
</template>
