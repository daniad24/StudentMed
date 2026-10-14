<script setup>
import { useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'

// `to` = unde mergem dacă pagina a fost deschisă direct (fără istoric în aplicație).
const props = defineProps({ to: { type: String, default: '/' }, icon: { type: String, default: 'back' }, history: { type: Boolean, default: false } })
const router = useRouter()

function go() {
  if (props.history && window.history.state?.back) router.back()
  else router.push(props.to)
}
</script>

<template>
  <button
    class="btn btn-white h-11 w-11 shrink-0 p-0"
    :aria-label="icon === 'close' ? 'Închide' : 'Înapoi'"
    @click="go"
  >
    <AppIcon :name="icon" />
  </button>
</template>
