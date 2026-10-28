// Cititor ZIP „leneș” pentru fișiere mari (PPTX = arhivă ZIP).
// Citește din fișier doar bucățile necesare (sfârșitul arhivei + intrările cerute) cu File.slice,
// deci un PPTX de 300 MB cu poze nu ajunge întreg în memoria telefonului.

import { inflateSync } from 'fflate'

const SIG_EOCD = 0x06054b50
const SIG_CENTRAL = 0x02014b50
const SIG_LOCAL = 0x04034b50
const EOCD_MAX_TAIL = 22 + 0xffff // EOCD fix + comentariu maxim

export class ZipError extends Error {}

const u16 = (v, o) => v.getUint16(o, true)
const u32 = (v, o) => v.getUint32(o, true)

async function readRange(file, start, end) {
  return new Uint8Array(await file.slice(start, end).arrayBuffer())
}

export async function openZip(file) {
  if (file.size < 22) throw new ZipError('not a zip')

  // 1. End of Central Directory, în ultimii ~64 KB.
  const tail = await readRange(file, Math.max(0, file.size - EOCD_MAX_TAIL), file.size)
  const tv = new DataView(tail.buffer)
  let eocd = -1
  for (let i = tail.length - 22; i >= 0; i--) {
    if (u32(tv, i) === SIG_EOCD) {
      eocd = i
      break
    }
  }
  if (eocd < 0) throw new ZipError('not a zip')

  const total = u16(tv, eocd + 10)
  const cdSize = u32(tv, eocd + 12)
  const cdOffset = u32(tv, eocd + 16)
  if (total === 0xffff || cdSize === 0xffffffff || cdOffset === 0xffffffff) throw new ZipError('zip64 nesuportat')
  if (cdOffset + cdSize > file.size) throw new ZipError('not a zip')

  // 2. Directorul central: lista de fișiere din arhivă.
  const cd = await readRange(file, cdOffset, cdOffset + cdSize)
  const cv = new DataView(cd.buffer)
  const decoder = new TextDecoder()
  const entries = new Map()
  let p = 0
  for (let i = 0; i < total && p + 46 <= cd.length; i++) {
    if (u32(cv, p) !== SIG_CENTRAL) break
    const flags = u16(cv, p + 8)
    const method = u16(cv, p + 10)
    const csize = u32(cv, p + 20)
    const usize = u32(cv, p + 24)
    const nameLen = u16(cv, p + 28)
    const extraLen = u16(cv, p + 30)
    const commentLen = u16(cv, p + 32)
    const localOffset = u32(cv, p + 42)
    const name = decoder.decode(cd.subarray(p + 46, p + 46 + nameLen))
    entries.set(name, { flags, method, csize, usize, localOffset })
    p += 46 + nameLen + extraLen + commentLen
  }

  return {
    names: [...entries.keys()],

    // Conținutul unei intrări, ca octeți (pentru pozele din prezentări).
    async bytes(name) {
      const e = entries.get(name)
      if (!e) return null
      if (e.flags & 1) throw new ZipError('arhivă criptată')
      const head = await readRange(file, e.localOffset, e.localOffset + 30)
      const hv = new DataView(head.buffer)
      if (u32(hv, 0) !== SIG_LOCAL) throw new ZipError('not a zip')
      const dataStart = e.localOffset + 30 + u16(hv, 26) + u16(hv, 28)
      const raw = await readRange(file, dataStart, dataStart + e.csize)
      if (e.method === 0) return raw
      if (e.method === 8) return inflateSync(raw, { out: new Uint8Array(e.usize) })
      throw new ZipError('metodă de compresie nesuportată')
    },

    size: (name) => entries.get(name)?.usize ?? 0,

    // 3. Citește și decomprimă o singură intrare, ca text UTF-8.
    async text(name) {
      const e = entries.get(name)
      if (!e) return null
      if (e.flags & 1) throw new ZipError('arhivă criptată')

      const head = await readRange(file, e.localOffset, e.localOffset + 30)
      const hv = new DataView(head.buffer)
      if (u32(hv, 0) !== SIG_LOCAL) throw new ZipError('not a zip')
      const dataStart = e.localOffset + 30 + u16(hv, 26) + u16(hv, 28)
      const raw = await readRange(file, dataStart, dataStart + e.csize)

      let data
      if (e.method === 0) data = raw
      else if (e.method === 8) data = inflateSync(raw, { out: new Uint8Array(e.usize) })
      else throw new ZipError('metodă de compresie nesuportată')
      return decoder.decode(data)
    },
  }
}
