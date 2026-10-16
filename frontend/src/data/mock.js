// Date de test pentru mock. Vor fi înlocuite de API-ul Go + PostgreSQL.
// Conținut pe materii: data/content/<materie>.js (grile, cartonașe, materiale ale comunității).
const loadDir = (modules) =>
  Object.fromEntries(Object.entries(modules).map(([path, mod]) => [path.match(/([\w-]+)\.js$/)[1], mod]))

const content = loadDir(import.meta.glob('./content/*.js', { eager: true, import: 'default' }))

// Rezumate scrise și verificate de echipa aplicației („Surse de încredere"): data/trusted/<materie>.js
const trusted = loadDir(import.meta.glob('./trusted/*.js', { eager: true, import: 'default' }))

export const years = [
  { id: 1, name: 'Anul I' },
  { id: 2, name: 'Anul II' },
  { id: 3, name: 'Anul III' },
  { id: 4, name: 'Anul IV' },
  { id: 5, name: 'Anul V' },
  { id: 6, name: 'Anul VI' },
]

// Ordinea pe ani după planul de învățământ UMF „Carol Davila” București (2025–2026).
// `years` = anii în care se studiază; `rez` = capitol de rezidențiat (carte + pondere orientativă).
const C = {
  rose: 'bg-rose-100 text-rose-700 border-rose-200',
  violet: 'bg-violet-100 text-violet-700 border-violet-200',
  sky: 'bg-sky-100 text-sky-700 border-sky-200',
  red: 'bg-red-100 text-red-700 border-red-200',
  lime: 'bg-lime-100 text-lime-700 border-lime-200',
  amber: 'bg-amber-100 text-amber-700 border-amber-200',
  teal: 'bg-teal-100 text-teal-700 border-teal-200',
  orange: 'bg-orange-100 text-orange-700 border-orange-200',
  gray: 'bg-gray-100 text-muted border-gray-200',
}

export const subjects = [
  // Anul I
  { id: 'anatomie', name: 'Anatomie și embriologie', years: [1, 2], emoji: '🦴', color: C.rose },
  { id: 'biochimie', name: 'Biochimie', years: [1], emoji: '🧪', color: C.violet },
  { id: 'fiziologie', name: 'Fiziologie', years: [1, 2], emoji: '❤️', color: C.red },
  { id: 'biologie-celulara', name: 'Biologie celulară și moleculară', years: [1], emoji: '🧬', color: C.teal },
  { id: 'biofizica', name: 'Biofizică', years: [1], emoji: '⚡', color: C.amber },
  { id: 'genetica', name: 'Genetică medicală', years: [1], emoji: '🧬', color: C.violet },
  { id: 'psihologie-medicala', name: 'Psihologie medicală și comunicare', years: [1], emoji: '💬', color: C.sky },
  // Anul II
  { id: 'histologie', name: 'Histologie', years: [2], emoji: '🔬', color: C.sky },
  { id: 'biochimie-clinica', name: 'Biochimie clinică', years: [2], emoji: '🧫', color: C.violet },
  // Anul III
  { id: 'semiologie', name: 'Semiologie medicală', years: [3], emoji: '🩺', color: C.teal },
  { id: 'fiziopatologie', name: 'Fiziopatologie', years: [3], emoji: '🌡️', color: C.orange },
  { id: 'farmacologie', name: 'Farmacologie', years: [3], emoji: '💊', color: C.amber },
  { id: 'microbiologie', name: 'Microbiologie', years: [3], emoji: '🦠', color: C.lime },
  { id: 'imunologie', name: 'Imunologie', years: [3], emoji: '🛡️', color: C.sky },
  { id: 'anatomie-patologica', name: 'Anatomie patologică', years: [3], emoji: '🔎', color: C.rose },
  { id: 'igiena', name: 'Igienă', years: [3], emoji: '🧼', color: C.lime },
  // Anul IV
  { id: 'cardiologie', name: 'Cardiologie', years: [4], emoji: '🫀', color: C.red, rez: { book: 'Kumar & Clark', weight: 'cel mai mare capitol' } },
  { id: 'pneumologie', name: 'Pneumologie', years: [4], emoji: '🫁', color: C.sky, rez: { book: 'Kumar & Clark', weight: 'frecvent' } },
  { id: 'gastroenterologie', name: 'Gastroenterologie și hepatologie', years: [4], emoji: '🍽️', color: C.orange, rez: { book: 'Kumar & Clark', weight: 'frecvent' } },
  { id: 'chirurgie', name: 'Chirurgie generală și semiologie chirurgicală', years: [4, 5], emoji: '🔪', color: C.gray, rez: { book: 'Lawrence', weight: 'frecvent' } },
  { id: 'ortopedie', name: 'Ortopedie și traumatologie', years: [4], emoji: '🦿', color: C.amber, rez: { book: 'Lawrence', weight: 'cel mai mare capitol din Lawrence' } },
  { id: 'oncologie', name: 'Oncologie medicală', years: [4], emoji: '🎗️', color: C.violet },
  { id: 'radiologie', name: 'Radiologie și imagistică', years: [4], emoji: '🩻', color: C.gray },
  { id: 'farmacologie-clinica', name: 'Farmacologie clinică', years: [4], emoji: '💉', color: C.amber },
  // Anul V
  { id: 'nefrologie', name: 'Nefrologie', years: [5], emoji: '🫘', color: C.rose, rez: { book: 'Kumar & Clark', weight: 'frecvent' } },
  { id: 'neurologie', name: 'Neurologie', years: [5], emoji: '🧠', color: C.violet, rez: { book: 'Kumar & Clark', weight: 'frecvent' } },
  { id: 'endocrinologie-si-diabet', name: 'Endocrinologie, diabet și nutriție', years: [5], emoji: '🩸', color: C.orange, rez: { book: 'Kumar & Clark', weight: 'frecvent' } },
  { id: 'reumatologie', name: 'Reumatologie', years: [5], emoji: '🦴', color: C.teal, rez: { book: 'Kumar & Clark', weight: 'mediu' } },
  { id: 'pediatrie', name: 'Pediatrie și puericultură', years: [5], emoji: '🧸', color: C.sky },
  { id: 'urologie', name: 'Urologie', years: [5], emoji: '💧', color: C.lime, rez: { book: 'Lawrence', weight: 'frecvent' } },
  { id: 'sanatate-publica', name: 'Sănătate publică și management', years: [5], emoji: '🏥', color: C.gray },
  // Anul VI
  { id: 'obstetrica-ginecologie', name: 'Obstetrică-ginecologie', years: [6], emoji: '🤰', color: C.rose },
  { id: 'boli-infectioase', name: 'Boli infecțioase', years: [6], emoji: '🦠', color: C.lime, rez: { book: 'Kumar & Clark', weight: 'mediu' } },
  { id: 'hematologie', name: 'Hematologie', years: [6], emoji: '🩸', color: C.red, rez: { book: 'Kumar & Clark', weight: 'mediu' } },
  { id: 'psihiatrie', name: 'Psihiatrie', years: [6], emoji: '🧠', color: C.sky },
  { id: 'orl', name: 'ORL', years: [6], emoji: '👂', color: C.amber, rez: { book: 'Lawrence', weight: 'frecvent' } },
  { id: 'oftalmologie', name: 'Oftalmologie', years: [6], emoji: '👁️', color: C.teal },
  { id: 'dermatologie', name: 'Dermatovenerologie', years: [6], emoji: '🧴', color: C.orange },
  { id: 'medicina-legala', name: 'Medicină legală', years: [6], emoji: '⚖️', color: C.gray },
  { id: 'medicina-de-familie', name: 'Medicină de familie', years: [6], emoji: '👨‍⚕️', color: C.teal },
  { id: 'ati-urgente', name: 'ATI și medicină de urgență', years: [6], emoji: '🚑', color: C.red },
]

const baseMaterials = [
  {
    id: 'm1',
    subjectId: 'anatomie',
    type: 'summary',
    title: 'Plexul brahial – schemă de memorat',
    author: 'Ana M.',
    upvotes: 42,
    recommended: true,
    createdAt: '2026-09-28',
    content: `## Rădăcini → Ramuri terminale

Plexul brahial se formează din ramurile ventrale ale nervilor spinali **C5–T1**.

> Mnemotehnică pentru ordinea componentelor: **R**ădăcini, **T**runchiuri, **D**iviziuni, **F**ascicule, **R**amuri.

### Trunchiuri
- **Superior**: C5–C6
- **Mijlociu**: C7
- **Inferior**: C8–T1

Fiecare trunchi se împarte într-o diviziune **anterioară** și una **posterioară**.

### Fascicule (denumite după poziția față de artera axilară)
- **Lateral**: diviziunile anterioare ale trunchiurilor superior și mijlociu
- **Posterior**: toate cele 3 diviziuni posterioare
- **Medial**: diviziunea anterioară a trunchiului inferior

### Ramuri terminale
| Fascicul | Nervi |
|---|---|
| Lateral | n. musculocutanat, rădăcina laterală a n. median |
| Posterior | n. axilar, n. radial |
| Medial | n. ulnar, rădăcina medială a n. median |

## Leziuni clasice
- **Erb–Duchenne** (C5–C6): „poziția de chelner" – braț în adducție și rotație internă.
- **Klumpke** (C8–T1): afectarea mușchilor mici ai mâinii, „mână în gheară".`,
  },
  {
    id: 'm2',
    subjectId: 'anatomie',
    type: 'summary',
    title: 'Inima: cavități, valve, vase coronare',
    author: 'Mihai P.',
    upvotes: 31,
    recommended: false,
    createdAt: '2026-10-02',
    content: `## Cavități
Inima are 4 cavități: **atriul drept, ventriculul drept, atriul stâng, ventriculul stâng**.

## Valve
| Valvă | Între |
|---|---|
| Tricuspidă | atriul drept → ventriculul drept |
| Pulmonară | ventriculul drept → trunchiul pulmonar |
| Mitrală (bicuspidă) | atriul stâng → ventriculul stâng |
| Aortică | ventriculul stâng → aortă |

## Vascularizație
Arterele coronare pornesc din **aorta ascendentă**:
- **Coronara stângă** → artera interventriculară anterioară + artera circumflexă
- **Coronara dreaptă** → irigă în mod obișnuit nodul sinoatrial și, la majoritatea oamenilor, dă artera interventriculară posterioară (dominanță dreaptă)`,
  },
  {
    id: 'm3',
    subjectId: 'anatomie',
    type: 'link',
    title: 'Membrul superior – articol de referință (EN)',
    author: 'Ioana R.',
    upvotes: 12,
    recommended: false,
    createdAt: '2026-10-05',
    url: 'https://en.wikipedia.org/wiki/Upper_limb',
  },
  {
    id: 'm4',
    subjectId: 'biochimie',
    type: 'summary',
    title: 'Glicoliza pe scurt',
    author: 'Daniel H.',
    upvotes: 27,
    recommended: true,
    createdAt: '2026-09-30',
    content: `## Ce este
Degradarea glucozei la **2 molecule de piruvat**, în **citosol**. Are 10 reacții.

## Bilanț net per glucoză
- **2 ATP**
- **2 NADH**
- **2 piruvat**

## Cele 3 reacții ireversibile (punctele de reglare)
1. **Hexokinaza / glucokinaza** – glucoză → glucozo-6-fosfat
2. **Fosfofructokinaza-1 (PFK-1)** – *enzima limitantă de viteză*
3. **Piruvat kinaza** – fosfoenolpiruvat → piruvat

## Reglarea PFK-1
- Activată de: **AMP**, **fructozo-2,6-bisfosfat**
- Inhibată de: **ATP**, **citrat**

> Eritrocitele nu au mitocondrii, deci își obțin ATP-ul exclusiv prin glicoliză anaerobă.`,
  },
  {
    id: 'm5',
    subjectId: 'biochimie',
    type: 'summary',
    title: 'Ciclul Krebs – ordinea intermediarilor',
    author: 'Andrei C.',
    upvotes: 19,
    recommended: false,
    createdAt: '2026-10-08',
    content: `## Unde
În **matricea mitocondrială**.

## Ordinea intermediarilor
Citrat → izocitrat → α-cetoglutarat → succinil-CoA → succinat → fumarat → malat → oxaloacetat

> Mnemotehnică (EN): *„Citrate Is Krebs' Starting Substrate For Making Oxaloacetate"*

## Bilanț pe o tură a ciclului
- **3 NADH**
- **1 FADH₂**
- **1 GTP** (echivalent ATP)
- **2 CO₂**`,
  },
  {
    id: 'm6',
    subjectId: 'fiziologie',
    type: 'summary',
    title: 'Ciclul cardiac',
    author: 'Ana M.',
    upvotes: 22,
    recommended: true,
    createdAt: '2026-10-01',
    content: `## Sistola ventriculară
1. **Contracția izovolumetrică** – toate valvele sunt închise, presiunea crește.
2. **Ejecția** – se deschid valvele semilunare (aortică și pulmonară).

## Diastola ventriculară
1. **Relaxarea izovolumetrică** – toate valvele sunt închise.
2. **Umplerea rapidă** – se deschid valvele atrioventriculare.
3. **Umplerea lentă (diastazis)**.
4. **Sistola atrială** – completează umplerea ventriculară.

## Zgomotele cardiace
- **Zgomotul I** – închiderea valvelor atrioventriculare (mitrală, tricuspidă)
- **Zgomotul II** – închiderea valvelor semilunare (aortică, pulmonară)

> Debit cardiac = frecvența cardiacă × volumul bătaie`,
  },
  {
    id: 'm7',
    subjectId: 'histologie',
    type: 'summary',
    title: 'Tipuri de epitelii – tabel',
    author: 'Ioana R.',
    upvotes: 9,
    recommended: false,
    createdAt: '2026-10-10',
    content: `| Epiteliu | Exemplu |
|---|---|
| Simplu pavimentos | endoteliu, alveole pulmonare |
| Simplu cubic | tubii renali, foliculii tiroidieni |
| Simplu cilindric | mucoasa gastrică și intestinală |
| Pseudostratificat ciliat | trahee, bronhii |
| Stratificat pavimentos nekeratinizat | esofag, cavitatea bucală |
| Stratificat pavimentos keratinizat | epiderm |
| Uroteliu (de tranziție) | vezica urinară, uretere |`,
  },
]

// Conținutul pe materii, cu `subjectId` completat automat.
const withSubject = (key) =>
  Object.entries(content).flatMap(([subjectId, c]) => (c[key] ?? []).map((x) => ({ ...x, subjectId })))

// Voturi demo pentru rezumatele de încredere: ~3 pe materie trec pragul de „Recomandat".
const DEMO_VOTES = [34, 12, 27, 8, 19, 41, 15, 22]

const trustedMaterials = Object.entries(trusted).flatMap(([subjectId, list]) =>
  list.map((t, i) => ({
    ...t,
    subjectId,
    type: 'summary',
    source: 'trusted',
    author: 'Echipa Steto',
    upvotes: DEMO_VOTES[i % DEMO_VOTES.length],
    recommended: false,
    createdAt: '2026-10-01',
  })),
)

// `recommended` din date = marcat de admin; recomandarea prin voturi se calculează în store.
export const materials = [
  ...trustedMaterials,
  ...[...baseMaterials, ...withSubject('materials')].map((m) => ({ source: 'community', ...m })),
]
export const flashcards = withSubject('flashcards')

// Grile: `type` 'single' (complement simplu) sau 'multi' (complement multiplu); `answer` = indicii corecți.
export const questions = withSubject('questions')

// Stagiu: cazuri clinice și abilități practice, din data/clinical/<materie>.js
export const clinical = Object.fromEntries(
  Object.entries(loadDir(import.meta.glob('./clinical/*.js', { eager: true, import: 'default' }))).map(([subjectId, c]) => [
    subjectId,
    {
      cases: (c.cases ?? []).map((x) => ({ ...x, subjectId })),
      skills: (c.skills ?? []).map((x) => ({ ...x, subjectId })),
    },
  ]),
)

// Subiectele (capitolele) fiecărei materii și asignarea conținutului: data/topics/<materie>.js
export const topicMaps = loadDir(import.meta.glob('./topics/*.js', { eager: true, import: 'default' }))
