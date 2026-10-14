<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '../stores/app'

const store = useAppStore()
const router = useRouter()
</script>

<template>
  <div class="space-y-5">
    <header class="flex items-center gap-3 slide-up">
      <button class="btn btn-white px-3 py-2" aria-label="Înapoi" @click="router.push('/profil')">‹</button>
      <h1 class="text-2xl font-black">🛡️ Moderare</h1>
    </header>

    <p v-if="!store.isAdmin" class="card p-5 font-bold">Activează modul admin din Profil ca să vezi această pagină.</p>

    <template v-else>
      <p class="text-sm font-semibold text-muted">Raportările trimise de studenți. Verifică și corectează, apoi marchează ca rezolvat.</p>

      <div v-if="!store.reports.length" class="card p-6 text-center">
        <p class="text-4xl">✨</p>
        <p class="font-extrabold">Nicio raportare deschisă</p>
      </div>

      <TransitionGroup name="fade" tag="div" class="space-y-2">
        <div v-for="r in store.reports" :key="r.id" class="card p-4">
          <div class="flex flex-wrap items-center gap-1">
            <span class="chip bg-red-100 text-red-600">🚩 {{ r.kind }}</span>
            <span class="text-xs font-bold text-muted">{{ r.date }} · de {{ r.by }}</span>
          </div>
          <p class="mt-2 font-extrabold">{{ r.title }}</p>
          <p class="text-sm font-semibold text-muted">{{ r.reason }}</p>
          <div class="mt-3 flex gap-2">
            <RouterLink v-if="r.kind === 'material'" :to="`/material/${r.targetId}`" class="btn btn-white flex-1 py-2">Vezi</RouterLink>
            <button class="btn btn-primary flex-1 py-2" @click="store.resolveReport(r.id)">Rezolvat</button>
          </div>
        </div>
      </TransitionGroup>
    </template>
  </div>
</template>
