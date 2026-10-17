import { clientIp, findCode } from './_auth.js'
import { incr, today } from './_store.js'

const MAX_TRIES_PER_IP = 30

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodă nepermisă.' })
  const tries = await incr(`ai:tries:${today()}:${clientIp(req)}`)
  if (tries > MAX_TRIES_PER_IP) return res.status(429).json({ error: 'Prea multe încercări. Revino mâine.' })
  const found = findCode(req.body?.code)
  if (!found) return res.status(401).json({ error: 'Cod invalid.' })
  return res.status(200).json({ ok: true, label: found.label })
}
