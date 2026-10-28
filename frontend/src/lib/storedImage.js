import { onUnmounted, ref, watch } from 'vue'
import { getImage } from './courses'

// Imaginile din cursurile studentului stau în telefon (IndexedDB) și au adrese „idb:<cheie>”;
// le transformăm în adrese pe care <img> le poate afișa. Celelalte adrese rămân neschimbate.
export function useImageUrl(src) {
  const url = ref('')
  let made = ''
  const release = () => {
    if (made) URL.revokeObjectURL(made)
    made = ''
  }
  watch(
    src,
    async (s) => {
      release()
      if (!s?.startsWith('idb:')) return (url.value = s ?? '')
      url.value = ''
      const blob = await getImage(s.slice(4))
      if (blob && src() === s) url.value = made = URL.createObjectURL(blob)
    },
    { immediate: true },
  )
  onUnmounted(release)
  return url
}
