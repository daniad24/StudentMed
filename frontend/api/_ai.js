// Furnizorul de AI se alege cu AI_PROVIDER ("gemini" acum; "claude" se adaugă în același loc).
export class AiError extends Error {
  constructor(message, status = 502) {
    super(message)
    this.status = status
  }
}

// Gemini apelat o dată; `thinking` = nivelul de „gândire” cerut (null = nu trimitem câmpul).
async function geminiRequest(prompt, model, key, thinking, signal) {
  const generationConfig = { responseMimeType: 'application/json', temperature: 0.3, maxOutputTokens: 8192 }
  if (thinking) generationConfig.thinkingConfig = { thinkingLevel: thinking }
  return fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig }),
    signal,
  })
}

async function callGemini(prompt, timeoutMs = 55000) {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new AiError('Serverul nu are încă o cheie de AI configurată.', 503)
  const model = process.env.GEMINI_MODEL || 'gemini-3.8-flash'
  // Modelele noi „gândesc” implicit mult și pot depăși timpul; cerem gândire redusă (GEMINI_THINKING=off dezactivează câmpul).
  const thinking = (process.env.GEMINI_THINKING ?? 'low') === 'off' ? null : process.env.GEMINI_THINKING ?? 'low'
  const ctl = new AbortController()
  const t0 = Date.now()
  const timer = setTimeout(() => ctl.abort(), timeoutMs)
  let r
  try {
    r = await geminiRequest(prompt, model, key, thinking, ctl.signal)
    if (r.status === 400 && thinking) {
      // modelul nu acceptă câmpul de gândire: reîncercăm fără el
      console.warn('Gemini a refuzat thinkingConfig, reîncerc fără', await r.text().catch(() => ''))
      r = await geminiRequest(prompt, model, key, null, ctl.signal)
    }
  } catch (e) {
    throw new AiError(e.name === 'AbortError' ? 'AI-ul a durat prea mult. Încearcă un text mai scurt.' : 'Nu am putut contacta serviciul de AI.', 504)
  } finally {
    clearTimeout(timer)
  }
  if (r.status === 429) throw new AiError('Serviciul de AI e ocupat sau a atins limita. Încearcă peste câteva minute.', 503)
  if (!r.ok) {
    console.error('Gemini error', r.status, model, (await r.text().catch(() => '')).slice(0, 500))
    throw new AiError(
      r.status === 404 ? `Modelul „${model}” nu există. Verifică GEMINI_MODEL în Vercel.` : r.status === 403 || r.status === 401 ? 'Cheia de API nu are acces. Verifică GEMINI_API_KEY.' : `Serviciul de AI a răspuns cu eroare (${r.status}).`,
      502,
    )
  }
  const data = await r.json()
  const cand = data.candidates?.[0]
  const text = (cand?.content?.parts ?? []).map((p) => p.text ?? '').join('')
  if (!text) throw new AiError(data.promptFeedback?.blockReason ? 'AI-ul a refuzat acest text.' : 'AI-ul nu a întors niciun răspuns.', 502)
  if (cand.finishReason === 'MAX_TOKENS') throw new AiError('Răspunsul a fost tăiat. Încearcă un text mai scurt.', 502)
  const u = data.usageMetadata ?? {}
  return { text, ms: Date.now() - t0, model, thinking, usage: { in: u.promptTokenCount, out: u.candidatesTokenCount, thoughts: u.thoughtsTokenCount } }
}

// Întoarce { text, ms, model, thinking, usage }
export async function generateDetailed(prompt, timeoutMs) {
  const provider = (process.env.AI_PROVIDER || 'gemini').toLowerCase()
  if (provider === 'gemini') return callGemini(prompt, timeoutMs)
  throw new AiError(`Furnizor de AI necunoscut: ${provider}`, 500)
}

export async function generate(prompt) {
  return (await generateDetailed(prompt)).text
}
