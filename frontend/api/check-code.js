import { clientIp, findCode, limitFor } from './_auth.js'
import { get, incr, persistent, today } from './_store.js'

const MAX_TRIES_PER_IP = 30

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodă nepermisă.' })
  // se numără doar încercările greșite, ca verificarea consumului să nu blocheze pe nimeni
  const triesKey = `ai:tries:${today()}:${clientIp(req)}`
  if ((await get(triesKey)) >= MAX_TRIES_PER_IP) return res.status(429).json({ error: 'Prea multe încercări. Revino mâine.' })
  const found = findCode(req.body?.code)
  if (!found) {
    await incr(triesKey)
    return res.status(401).json({ error: 'Cod invalid.' })
  }
  const limit = limitFor(found)
  const used = await get(`ai:use:${today()}:${found.code}`)
  // limit: null = fără limită pe cod; persistent: false = contoarele nu sunt încă sigure (lipsește Upstash)
  return res.status(200).json({ ok: true, label: found.label, limit: Number.isFinite(limit) ? limit : null, used, persistent: persistent() })
}
