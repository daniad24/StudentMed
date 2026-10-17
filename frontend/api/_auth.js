import { timingSafeEqual } from 'node:crypto'

// INVITE_CODES = "COD1:Etichetă,COD2:Altă etichetă" (eticheta e opțională)
export function parseCodes(raw = process.env.INVITE_CODES ?? '') {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const i = s.indexOf(':')
      const code = (i === -1 ? s : s.slice(0, i)).trim().toUpperCase()
      return { code, label: i === -1 ? code : s.slice(i + 1).trim() || code }
    })
}

const same = (a, b) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b))

// Întoarce { code, label } sau null.
export function findCode(input) {
  const wanted = String(input ?? '').trim().toUpperCase()
  if (!wanted || wanted.length > 64) return null
  return parseCodes().find((c) => same(c.code, wanted)) ?? null
}

export function clientIp(req) {
  return String(req.headers['x-forwarded-for'] ?? req.socket?.remoteAddress ?? 'necunoscut').split(',')[0].trim()
}
