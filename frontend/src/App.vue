<script setup>
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from './stores/app'
import BottomNav from './components/BottomNav.vue'
import TourOverlay from './components/TourOverlay.vue'

const route = useRoute()
const store = useAppStore()
const showNav = computed(() => route.name && !route.meta.public && !route.meta.focus)

// Turul de prezentare pornește singur la prima intrare (după cont nou sau logare), pe paginile principale.
watch(
  () => [store.user, route.name],
  () => {
    if (store.user && !store.tourDone && route.name && !route.meta.public && !route.meta.focus) store.tourOpen = true
  },
  { immediate: true },
)

// Tema: 'auto' urmează setarea telefonului.
const media = window.matchMedia('(prefers-color-scheme: dark)')
const systemDark = ref(media.matches)
const onChange = (e) => (systemDark.value = e.matches)
onMounted(() => media.addEventListener('change', onChange))
onUnmounted(() => media.removeEventListener('change', onChange))

watchEffect(() => {
  const dark = store.theme === 'dark' || (store.theme === 'auto' && systemDark.value)
  document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0f1720' : '#16a34a')
})
</script>

<template>
  <div class="min-h-dvh safe-top">
    <main class="mx-auto w-full max-w-2xl px-4 pt-4" :class="showNav ? 'pb-28' : 'pb-8'">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <BottomNav v-if="showNav" />
    <TourOverlay v-if="store.tourOpen" />
  </div>
</template>
