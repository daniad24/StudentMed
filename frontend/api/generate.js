import { clientIp, findCode, int, limitFor } from './_auth.js'
import { AiError, generate } from './_ai.js'
import { decr, incr, today } from './_store.js'
import { buildPrompt } from '../src/lib/aiimport.js'

const MAX_CHARS = 24000

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodă nepermisă.' })
  const body = req.body ?? {}

  const found = findCode(body.code)
  if (!found) {
    await incr(`ai:tries:${today()}:${clientIp(req)}`)
    return res.status(401).json({ error: 'Cod de invitație invalid.' })
  }

  const text = String(body.text ?? '').trim()
  if (text.length < 80) return res.status(400).json({ error: 'Textul e prea scurt ca să generez ceva din el.' })
  if (text.length > MAX_CHARS) return res.status(413).json({ error: 'Textul e prea lung. Trimite-l pe părți.' })
  const subjectName = String(body.subjectName ?? 'Medicină').slice(0, 80)

  // limite: pe cod și total, pe zi
  const perCode = limitFor(found)
  const total = int(process.env.AI_DAILY_TOTAL, 1500)
  const day = today()
  if ((await incr(`ai:use:${day}:${found.code}`)) > perCode) return res.status(429).json({ error: `Ai folosit toate cele ${perCode} apeluri de azi. Revino mâine.` })
  if ((await incr(`ai:use:${day}:ALL`)) > total) return res.status(429).json({ error: 'Limita zilnică a aplicației a fost atinsă. Revino mâine.' })

  const questions = Math.min(int(body.questions, 8), 30)
  const cards = Math.min(int(body.cards, 8), 30)
  // cheia de răspunsuri din curs pentru grilele din această bucată, și grilele deja făcute (de evitat)
  const key = String(body.key ?? '').slice(0, 3000)
  const avoid = (Array.isArray(body.avoid) ? body.avoid : []).slice(0, 120).map((a) => String(a).slice(0, 160)).filter(Boolean)
  try {
    const raw = await generate(buildPrompt({ subjectName, text, questions, cards, key, avoid }))
    return res.status(200).json({ raw, label: found.label })
  } catch (e) {
    // o generare eșuată nu se numără în limită
    await Promise.all([decr(`ai:use:${day}:${found.code}`), decr(`ai:use:${day}:ALL`)])
    if (e instanceof AiError) return res.status(e.status).json({ error: e.message })
    console.error('generate failed', e)
    return res.status(500).json({ error: 'Eroare neașteptată pe server.' })
  }
}
