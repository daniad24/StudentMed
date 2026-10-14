<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BottomNav from './components/BottomNav.vue'

const route = useRoute()
const showNav = computed(() => route.name && !route.meta.public && !route.meta.focus)
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
  </div>
</template>
