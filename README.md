# StudentMed

Platformă web (PWA) pentru studenții la medicină: materiale (rezumate și linkuri), flashcards cu repetiție spațiată și grile rapide („Pauza de gardă"), cu interfață gamificată.

> **Stadiu: mock.** Momentan există doar interfața (Vue), cu date de test. Progresul se salvează local, în browser. Backend-ul (Go + PostgreSQL) urmează după feedback.

## Stack

- **Frontend:** Vue 3, Vite, TailwindCSS, Pinia, Vue Router, `vite-plugin-pwa`
- **Backend (urmează):** Go, PostgreSQL

## Rulare locală

```bash
cd frontend
npm install
npm run dev
```

## Deploy pe Vercel

1. Pe [vercel.com](https://vercel.com) → **Add New → Project** → importă repo-ul `StudentMed`.
2. Nu schimba nimic la setări: `vercel.json` din rădăcină spune deja cum se construiește (`frontend/`).
3. **Deploy.** La fiecare push pe `main`, Vercel publică automat noua versiune.
4. Domeniu propriu: în proiectul Vercel → **Settings → Domains** → adaugă domeniul și setează înregistrările DNS indicate acolo.

## Instalare pe telefon / iPad

- **iPhone / iPad (Safari):** Share → **Add to Home Screen**
- **Android (Chrome):** meniul ⋮ → **Install app** / **Add to Home screen**

## Ce conține mock-ul

- Logare (orice email + parolă funcționează în demo)
- Materii pe ani, materiale cu upvote, badge ⭐ Recomandat / 👥 Comunitate, raportare greșeli
- Flashcards cu 3 butoane (Leitner: roșu → mâine, galben → 3 zile, verde → 7/14/30/60 zile); cele roșii reapar și la finalul sesiunii
- Pauza de gardă: 10 grile aleatorii, 3 minute
- Streak, insigne (inclusiv Contributor), adăugare rezumat / link / cartonaș
- Mod admin (din Profil): marcare Recomandat și pagină de moderare
