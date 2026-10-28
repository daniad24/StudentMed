// Fișier de calendar (.ics) cu examenele și orarul: odată adăugat în calendarul telefonului,
// studentul primește notificările telefonului, fără server de notificări.
// Folosit și în aplicație, și de funcția /api/ics.

const pad = (n) => String(n).padStart(2, '0')
const esc = (t = '') => String(t).replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n')
const ymd = (d) => `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`
const dateOf = (s) => new Date(s + 'T00:00:00')
const local = (date, time) => `${date.replace(/-/g, '')}T${time.replace(':', '')}00`
const addMin = (time, min) => {
  const [h, m] = time.split(':').map(Number)
  const t = h * 60 + m + min
  return `${pad(Math.floor(t / 60) % 24)}:${pad(t % 60)}`
}
const alarm = (trigger, text) => ['BEGIN:VALARM', 'ACTION:DISPLAY', `TRIGGER:${trigger}`, `DESCRIPTION:${esc(text)}`, 'END:VALARM']
const fold = (line) => {
  // rândurile lungi se împart la 73 de caractere, cum cere formatul
  const out = []
  let s = line
  while (s.length > 73) {
    out.push(s.slice(0, 73))
    s = ' ' + s.slice(73)
  }
  out.push(s)
  return out.join('\r\n')
}

// data: { exams: [{ id, title, date, time, place, note }], classes: [{ id, title, day, start, end, place, weeks }], weeks }
export function buildIcs({ exams = [], classes = [], weeks = 16 }, now = new Date()) {
  const stamp = `${ymd(now)}T${pad(now.getHours())}${pad(now.getMinutes())}00`
  const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Steto//RO', 'CALSCALE:GREGORIAN', 'X-WR-CALNAME:Steto']
  for (const e of exams) {
    lines.push('BEGIN:VEVENT', `UID:${e.id}@steto`, `DTSTAMP:${stamp}`, `SUMMARY:${esc(e.title)}`)
    if (e.time) {
      lines.push(`DTSTART:${local(e.date, e.time)}`, `DTEND:${local(e.date, addMin(e.time, 120))}`)
      lines.push(...alarm('-P1D', `Mâine: ${e.title}`), ...alarm('-PT2H', `În 2 ore: ${e.title}`))
    } else {
      const next = dateOf(e.date)
      next.setDate(next.getDate() + 1)
      lines.push(`DTSTART;VALUE=DATE:${e.date.replace(/-/g, '')}`, `DTEND;VALUE=DATE:${ymd(next)}`)
      lines.push(...alarm('-PT15H', `Mâine: ${e.title}`))
    }
    if (e.place) lines.push(`LOCATION:${esc(e.place)}`)
    if (e.note) lines.push(`DESCRIPTION:${esc(e.note)}`)
    lines.push('END:VEVENT')
  }
  for (const c of classes) {
    // prima zi din săptămâna aceasta sau următoare care cade în ziua orei (1 = luni)
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    while (((d.getDay() + 6) % 7) + 1 !== Number(c.day)) d.setDate(d.getDate() + 1)
    if (c.weeks === 'odd' || c.weeks === 'even') {
      const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
      t.setUTCDate(t.getUTCDate() + 4 - (t.getUTCDay() || 7))
      const week = Math.ceil(((t - new Date(Date.UTC(t.getUTCFullYear(), 0, 1))) / 864e5 + 1) / 7)
      if ((week % 2 === 1) !== (c.weeks === 'odd')) d.setDate(d.getDate() + 7)
    }
    const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    const interval = c.weeks === 'odd' || c.weeks === 'even' ? 2 : 1
    lines.push('BEGIN:VEVENT', `UID:${c.id}@steto`, `DTSTAMP:${stamp}`, `SUMMARY:${esc(c.title)}`)
    lines.push(`DTSTART:${local(date, c.start)}`, `DTEND:${local(date, c.end || addMin(c.start, 120))}`)
    lines.push(`RRULE:FREQ=WEEKLY;INTERVAL=${interval};COUNT=${Math.ceil(weeks / interval)}`)
    if (c.place) lines.push(`LOCATION:${esc(c.place)}`)
    lines.push(...alarm('-PT15M', `${c.title} începe în 15 minute`), 'END:VEVENT')
  }
  lines.push('END:VCALENDAR')
  return lines.map(fold).join('\r\n') + '\r\n'
}

// Datele merg în adresă (fără server care să le păstreze): JSON → base64url.
export function encodeIcsData(data) {
  const bytes = new TextEncoder().encode(JSON.stringify(data))
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
export function decodeIcsData(s) {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/'))
  return JSON.parse(new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0))))
}
