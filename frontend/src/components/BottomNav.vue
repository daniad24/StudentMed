<script setup>
const items = [
  { to: '/', label: 'Acasă', icon: '🏠', exact: true },
  { to: '/materii', label: 'Materii', icon: '📚' },
  { to: '/adauga', label: 'Adaugă', icon: '➕' },
  { to: '/profil', label: 'Profil', icon: '👤' },
]
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-20 border-t-2 border-gray-200 bg-white/95 backdrop-blur safe-bottom">
    <ul class="mx-auto flex max-w-2xl justify-around px-2 py-2">
      <li v-for="item in items" :key="item.to" class="flex-1">
        <RouterLink
          :to="item.to"
          class="flex flex-col items-center gap-0.5 rounded-2xl py-1.5 text-xs font-extrabold text-muted transition-colors"
          :active-class="item.exact ? '' : 'nav-active'"
          :exact-active-class="item.exact ? 'nav-active' : ''"
        >
          <span class="text-2xl leading-none">{{ item.icon }}</span>
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-active {
  color: var(--color-brand-600);
  background: var(--color-brand-50);
}
</style>
