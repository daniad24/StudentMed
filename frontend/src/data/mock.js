// Date de test pentru mock. Vor fi înlocuite de API-ul Go + PostgreSQL.
import anatomie from './content/anatomie'
import biochimie from './content/biochimie'
import histologie from './content/histologie'
import fiziologie from './content/fiziologie'
import microbiologie from './content/microbiologie'
import farmacologie from './content/farmacologie'
import semiologie from './content/semiologie'

const content = { anatomie, biochimie, histologie, fiziologie, microbiologie, farmacologie, semiologie }

export const years = [
  { id: 1, name: 'Anul I' },
  { id: 2, name: 'Anul II' },
  { id: 3, name: 'Anul III' },
]

export const subjects = [
  { id: 'anatomie', name: 'Anatomie', year: 1, emoji: '🦴', color: 'bg-rose-100 text-rose-700 border-rose-200' },
  { id: 'biochimie', name: 'Biochimie', year: 1, emoji: '🧪', color: 'bg-violet-100 text-violet-700 border-violet-200' },
  { id: 'histologie', name: 'Histologie', year: 1, emoji: '🔬', color: 'bg-sky-100 text-sky-700 border-sky-200' },
  { id: 'fiziologie', name: 'Fiziologie', year: 2, emoji: '❤️', color: 'bg-red-100 text-red-700 border-red-200' },
  { id: 'microbiologie', name: 'Microbiologie', year: 2, emoji: '🦠', color: 'bg-lime-100 text-lime-700 border-lime-200' },
  { id: 'farmacologie', name: 'Farmacologie', year: 3, emoji: '💊', color: 'bg-amber-100 text-amber-700 border-amber-200' },
  { id: 'semiologie', name: 'Semiologie', year: 3, emoji: '🩺', color: 'bg-teal-100 text-teal-700 border-teal-200' },
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

export const materials = [...baseMaterials, ...withSubject('materials')]
export const flashcards = withSubject('flashcards')

// Grile: `type` 'single' (complement simplu) sau 'multi' (complement multiplu); `answer` = indicii corecți.
export const questions = withSubject('questions')
