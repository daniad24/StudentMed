<script setup>
const items = [
  { to: '/', label: 'Acasă', icon: '🏠', exact: true, tour: 'nav-acasa' },
  { to: '/materii', label: 'Materii', icon: '📚', tour: 'nav-materii' },
  { to: '/adauga', label: 'Adaugă', icon: '➕', tour: 'nav-adauga' },
  { to: '/tinta', label: 'Țintă', icon: '🎯', tour: 'nav-tinta' },
  { to: '/profil', label: 'Profil', icon: '👤', tour: 'nav-profil' },
]
</script>

<template>
  <nav class="fixed inset-x-0 bottom-0 z-20 border-t-2 border-gray-200 bg-surface/95 backdrop-blur safe-bottom">
    <ul class="mx-auto flex max-w-2xl justify-around px-2 py-2">
      <li v-for="item in items" :key="item.to" class="flex-1" :data-tour="item.tour">
        <RouterLink
          :to="item.to"
          class="flex flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[11px] font-extrabold text-muted transition-colors"
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
