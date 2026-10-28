import { buildIcs, decodeIcsData } from '../src/lib/ics.js'

// GET /api/ics?d=<date codate> → fișier de calendar. Telefonul îl deschide în aplicația Calendar
// („Adaugă toate”), iar notificările vin de la calendarul telefonului. Nu păstrăm nimic pe server.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  let data
  try {
    const raw = String(req.query?.d ?? '')
    if (!raw || raw.length > 60000) throw new Error('lipsă')
    data = decodeIcsData(raw)
  } catch {
    return res.status(400).send('Link de calendar invalid.')
  }
  const clean = (list, max) => (Array.isArray(list) ? list.slice(0, max) : [])
  const ics = buildIcs({ exams: clean(data.exams, 100), classes: clean(data.classes, 100), weeks: Math.min(Number(data.weeks) || 16, 30) })
  res.setHeader('Content-Type', 'text/calendar; charset=utf-8')
  res.setHeader('Content-Disposition', 'attachment; filename="steto.ics"')
  return res.status(200).send(ics)
}
