import { clientIp, findCode } from './_auth.js'
import { AiError, generateDetailed, listGeminiModels } from './_ai.js'
import { incr, today } from './_store.js'
import { buildPrompt } from '../src/lib/aiimport.js'

// Diagnostic: cât durează Gemini? POST {code, size: "tiny" | "sample"}; folosește un apel din limita codului.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodă nepermisă.' })
  const found = findCode(req.body?.code)
  if (!found) {
    await incr(`ai:tries:${today()}:${clientIp(req)}`)
    return res.status(401).json({ error: 'Cod invalid.' })
  }
  if (req.body?.action === 'models') {
    try {
      return res.status(200).json({ ok: true, models: await listGeminiModels() })
    } catch (e) {
      return res.status(e instanceof AiError ? e.status : 500).json({ ok: false, error: e.message, detail: e.detail })
    }
  }
  const model = /^[a-z0-9.\-]{3,60}$/.test(req.body?.model ?? '') ? req.body.model : undefined
  const thinking = ['off', 'minimal', 'low', 'medium', 'high'].includes(req.body?.thinking) ? req.body.thinking : undefined
  const size = req.body?.size === 'sample' ? 'sample' : 'tiny'
  const sample = 'Fractura de col femural apare mai frecvent la vârstnici, după traumatisme minore. Membrul inferior apare scurtat și rotat extern. Tratamentul este de regulă chirurgical. '.repeat(55)
  const prompt = size === 'tiny' ? 'Răspunde doar cu JSON valid: {"ok":true}' : buildPrompt({ subjectName: 'Ortopedie', text: sample, questions: 6, cards: 6 })
  const t0 = Date.now()
  try {
    const r = await generateDetailed(prompt, 50000, { model, thinking })
    return res.status(200).json({ ok: true, size, ms: r.ms, model: r.model, thinking: r.thinking, usage: r.usage, chars: prompt.length, preview: r.text.slice(0, 120) })
  } catch (e) {
    return res.status(e instanceof AiError ? e.status : 500).json({ ok: false, size, ms: Date.now() - t0, error: e.message, detail: e.detail })
  }
}
