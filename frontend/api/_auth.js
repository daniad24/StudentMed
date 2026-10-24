import { timingSafeEqual } from 'node:crypto'

// INVITE_CODES = "COD1:Etichetă,COD2:Altă etichetă:300,COD3:Etichetă:*"
// Eticheta e opțională. La final poate avea o limită proprie pe zi (număr) sau * = fără limită pe cod
// (rămâne doar plafonul total al aplicației, AI_DAILY_TOTAL).
export function parseCodes(raw = process.env.INVITE_CODES ?? '') {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => {
      const i = s.indexOf(':')
      const code = (i === -1 ? s : s.slice(0, i)).trim().toUpperCase()
      let label = i === -1 ? '' : s.slice(i + 1).trim()
      let limit = null
      const m = label.match(/^(.*):\s*(\d+|\*)$/) ?? (/^(\d+|\*)$/.test(label) ? [label, '', label] : null)
      if (m) {
        label = m[1].trim()
        limit = m[2] === '*' ? Infinity : Number(m[2])
      }
      return { code, label: label || code, limit }
    })
}

const same = (a, b) => a.length === b.length && timingSafeEqual(Buffer.from(a), Buffer.from(b))

// Întoarce { code, label, limit } sau null; limit = null înseamnă limita implicită.
export function findCode(input) {
  const wanted = String(input ?? '').trim().toUpperCase()
  if (!wanted || wanted.length > 64) return null
  return parseCodes().find((c) => same(c.code, wanted)) ?? null
}

export const int = (v, d) => (Number.isFinite(Number(v)) && Number(v) > 0 ? Math.floor(Number(v)) : d)
export const limitFor = (found) => found.limit ?? int(process.env.AI_DAILY_PER_CODE, 120)

export function clientIp(req) {
  return String(req.headers['x-forwarded-for'] ?? req.socket?.remoteAddress ?? 'necunoscut').split(',')[0].trim()
}
