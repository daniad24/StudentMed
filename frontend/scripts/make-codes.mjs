// Generează coduri de invitație: node scripts/make-codes.mjs 20 "Grupa"
// Lipește rezultatul în variabila INVITE_CODES din Vercel (Settings › Environment Variables).
import { randomInt } from 'node:crypto'

const n = Number(process.argv[2] ?? 10)
const label = process.argv[3] ?? ''
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // fără caractere ușor de confundat (0/O, 1/I)
const part = () => Array.from({ length: 4 }, () => ALPHABET[randomInt(ALPHABET.length)]).join('')
const codes = Array.from({ length: n }, (_, i) => `${part()}-${part()}${label ? `:${label} ${i + 1}` : ''}`)
console.log(codes.join(','))
