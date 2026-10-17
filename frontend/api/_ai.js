// Furnizorul de AI se alege cu AI_PROVIDER ("gemini" acum; "claude" se adaugă în același loc).
export class AiError extends Error {
  constructor(message, status = 502) {
    super(message)
    this.status = status
  }
}

async function callGemini(prompt) {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new AiError('Serverul nu are încă o cheie de AI configurată.', 503)
  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), 55000)
  let r
  try {
    r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: 'application/json', temperature: 0.3, maxOutputTokens: 8192 },
      }),
      signal: ctl.signal,
    })
  } catch (e) {
    throw new AiError(e.name === 'AbortError' ? 'AI-ul a durat prea mult. Încearcă un text mai scurt.' : 'Nu am putut contacta serviciul de AI.', 504)
  } finally {
    clearTimeout(timer)
  }
  if (r.status === 429) throw new AiError('Serviciul de AI e ocupat sau a atins limita. Încearcă peste câteva minute.', 503)
  if (!r.ok) throw new AiError(`Serviciul de AI a răspuns cu eroare (${r.status}).`, 502)
  const data = await r.json()
  const cand = data.candidates?.[0]
  const text = (cand?.content?.parts ?? []).map((p) => p.text ?? '').join('')
  if (!text) throw new AiError(data.promptFeedback?.blockReason ? 'AI-ul a refuzat acest text.' : 'AI-ul nu a întors niciun răspuns.', 502)
  if (cand.finishReason === 'MAX_TOKENS') throw new AiError('Răspunsul a fost tăiat. Încearcă un text mai scurt.', 502)
  return text
}

export async function generate(prompt) {
  const provider = (process.env.AI_PROVIDER || 'gemini').toLowerCase()
  if (provider === 'gemini') return callGemini(prompt)
  throw new AiError(`Furnizor de AI necunoscut: ${provider}`, 500)
}
