// Cursurile încărcate de student, păstrate în telefon (IndexedDB), ca să poată genera din nou
// fără să mai aleagă fișierul. Textul nu pleacă nicăieri de aici.
// Un curs: { id, name, subjectId, text, createdAt, gen: { version, done: [indici de părți], total } | null }

const DB = 'steto-courses'
const STORE = 'courses'
const IMAGES = 'images' // pozele din cursuri (radiografii, scheme), cheie „<curs>:<pagină>”

function open() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') return reject(new Error('Fără IndexedDB'))
    const req = indexedDB.open(DB, 2)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: 'id' })
      if (!db.objectStoreNames.contains(IMAGES)) db.createObjectStore(IMAGES)
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function run(mode, fn, store = STORE) {
  const db = await open()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode)
    const req = fn(tx.objectStore(store))
    tx.oncomplete = () => resolve(req?.result)
    tx.onerror = () => reject(tx.error)
  })
}

export async function listCourses() {
  try {
    const all = (await run('readonly', (s) => s.getAll())) ?? []
    return all.sort((a, b) => b.createdAt - a.createdAt)
  } catch {
    return []
  }
}

export const getCourse = (id) => run('readonly', (s) => s.get(id)).catch(() => null)

// Întoarce false dacă telefonul nu permite salvarea (de exemplu navigare privată).
export async function putCourse(course) {
  try {
    await run('readwrite', (s) => s.put(course))
    return true
  } catch {
    return false
  }
}

export const deleteCourse = (id) => run('readwrite', (s) => s.delete(id)).catch(() => {})

export const newCourseId = () => 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)

// --- Pozele din cursuri ---
export async function putImage(key, blob) {
  try {
    await run('readwrite', (s) => s.put(blob, key), IMAGES)
    return true
  } catch {
    return false
  }
}
export const getImage = (key) => run('readonly', (s) => s.get(key), IMAGES).catch(() => null)
// Șterge toate pozele unui curs.
export const deleteCourseImages = (courseId) => run('readwrite', (s) => s.delete(IDBKeyRange.bound(`${courseId}:`, `${courseId}:\uffff`)), IMAGES).catch(() => {})
