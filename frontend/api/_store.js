// Contoare pe zi (limite pe cod). Cu UPSTASH_REDIS_REST_URL/TOKEN merg între instanțe;
// fără ele se păstrează doar în memoria instanței (bun pentru teste, nu pentru pilot).
const mem = new Map()

async function upstash(commands) {
  const r = await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  })
  if (!r.ok) throw new Error(`Upstash ${r.status}`)
  return r.json()
}

export const persistent = () => !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)

// Crește contorul și întoarce noua valoare. Expiră după `ttl` secunde.
export async function incr(key, ttl = 90000) {
  if (persistent()) {
    const out = await upstash([['INCR', key], ['EXPIRE', key, ttl]])
    return Number(out[0].result)
  }
  const n = (mem.get(key) ?? 0) + 1
  mem.set(key, n)
  if (mem.size > 5000) mem.clear()
  return n
}

// Scade contorul (la o generare eșuată, ca studentul să nu piardă din limită).
export async function decr(key) {
  if (persistent()) return Number((await upstash([['DECR', key]]))[0].result)
  const n = Math.max((mem.get(key) ?? 0) - 1, 0)
  mem.set(key, n)
  return n
}

export async function get(key) {
  if (persistent()) return Number((await upstash([['GET', key]]))[0].result ?? 0)
  return mem.get(key) ?? 0
}

export const today = () => new Date().toISOString().slice(0, 10)
