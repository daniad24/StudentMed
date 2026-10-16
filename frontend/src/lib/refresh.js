// Șterge service worker-ul și cache-ul, apoi reîncarcă: aplicația ia versiunea de pe server.
export async function hardRefresh() {
  try {
    const regs = (await navigator.serviceWorker?.getRegistrations()) ?? []
    await Promise.all(regs.map((r) => r.unregister()))
    await Promise.all((await caches.keys()).map((k) => caches.delete(k)))
  } catch {
    // dacă nu merge, reîncărcarea de mai jos tot ajută
  }
  location.reload()
}

// După o actualizare, telefonul poate avea încă pagina veche, care cere fișiere cu nume vechi
// (serverul răspunde cu HTML în loc de JavaScript). Reîncărcăm o singură dată, automat.
export function reloadOnceIfStale() {
  try {
    if (sessionStorage.getItem('stale-reload')) return false
    sessionStorage.setItem('stale-reload', '1')
  } catch {
    return false
  }
  hardRefresh()
  return true
}

export function isStaleChunkError(err) {
  return /MIME type|dynamically imported module|Importing a module script failed|Failed to fetch dynamically/i.test(err?.message ?? '')
}

// Verifică pe server dacă există o versiune mai nouă decât cea încărcată. Întoarce true dacă da.
export async function newVersionAvailable(current) {
  if (!current || current === 'dev') return false
  try {
    const r = await fetch(`/version.json?t=${Date.now()}`, { cache: 'no-store' })
    if (!r.ok) return false
    const { version } = await r.json()
    return !!version && version !== 'dev' && version !== current
  } catch {
    return false
  }
}
