# Generare cu AI (funcții Vercel)

Variabile de mediu (Vercel › Settings › Environment Variables). **Nu le pune niciodată în cod sau în chat.**

| Variabilă | Rol |
|---|---|
| `GEMINI_API_KEY` | cheia de API (Google AI Studio) |
| `GEMINI_MODEL` | modelul folosit (implicit `gemini-3.8-flash`; pune unul dintre cele listate în AI Studio) |
| `AI_PROVIDER` | `gemini` (singurul implementat acum) |
| `INVITE_CODES` | `COD1:Etichetă,COD2:Etichetă` – generează cu `node scripts/make-codes.mjs 20 "Grupa"` |
| `AI_DAILY_PER_CODE` | apeluri pe zi pentru un cod (implicit 120; un curs mare folosește zeci) |
| `AI_DAILY_TOTAL` | apeluri pe zi, total (implicit 1500) |
| `GEMINI_THINKING` | nivelul de „gândire” (implicit `low`; `off` nu mai trimite câmpul) |
| `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` | contoare persistente; fără ele limitele se țin doar în memoria instanței (bun pentru teste) |

Rute: `POST /api/check-code` (verifică un cod), `POST /api/generate` (text → grile și cartonașe, răspunsul îl validează aplicația).
Un cod se revocă scoțându-l din `INVITE_CODES` și redeploy.
