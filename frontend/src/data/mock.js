// Date de test pentru mock. Vor fi înlocuite de API-ul Go + PostgreSQL.

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

export const materials = [
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

export const flashcards = [
  // Anatomie
  { id: 'f1', subjectId: 'anatomie', front: 'Câte vertebre cervicale are omul?', back: '7 vertebre cervicale (C1–C7)' },
  { id: 'f2', subjectId: 'anatomie', front: 'Ce nerv inervează diafragmul?', back: 'Nervul frenic (rădăcinile C3–C5)' },
  { id: 'f3', subjectId: 'anatomie', front: 'Care este cel mai lung os din corp?', back: 'Femurul' },
  { id: 'f4', subjectId: 'anatomie', front: 'Ce valvă separă atriul stâng de ventriculul stâng?', back: 'Valva mitrală (bicuspidă)' },
  { id: 'f5', subjectId: 'anatomie', front: 'Câte perechi de nervi cranieni există?', back: '12 perechi' },
  { id: 'f6', subjectId: 'anatomie', front: 'Ce nerv cranian inervează mușchiul oblic superior al ochiului?', back: 'Nervul trohlear (IV)' },
  { id: 'f7', subjectId: 'anatomie', front: 'Ce nerv inervează mușchiul deltoid?', back: 'Nervul axilar' },
  { id: 'f8', subjectId: 'anatomie', front: 'Din ce porțiune a aortei pornesc arterele coronare?', back: 'Din aorta ascendentă' },
  // Biochimie
  { id: 'f9', subjectId: 'biochimie', front: 'Enzima limitantă de viteză a glicolizei?', back: 'Fosfofructokinaza-1 (PFK-1)' },
  { id: 'f10', subjectId: 'biochimie', front: 'Câte ATP produce net glicoliza per moleculă de glucoză?', back: '2 ATP' },
  { id: 'f11', subjectId: 'biochimie', front: 'Unde are loc ciclul Krebs?', back: 'În matricea mitocondrială' },
  { id: 'f12', subjectId: 'biochimie', front: 'Enzima limitantă a sintezei colesterolului?', back: 'HMG-CoA reductaza (ținta statinelor)' },
  { id: 'f13', subjectId: 'biochimie', front: 'Acceptorul final de electroni din lanțul respirator?', back: 'Oxigenul (O₂)' },
  { id: 'f14', subjectId: 'biochimie', front: 'Din ce aminoacid se sintetizează serotonina?', back: 'Triptofan' },
  // Fiziologie
  { id: 'f15', subjectId: 'fiziologie', front: 'Valoarea normală a pH-ului sângelui arterial?', back: '7,35 – 7,45' },
  { id: 'f16', subjectId: 'fiziologie', front: 'Unde este generat în mod normal impulsul cardiac?', back: 'În nodul sinoatrial' },
  { id: 'f17', subjectId: 'fiziologie', front: 'Formula debitului cardiac?', back: 'Frecvența cardiacă × volumul bătaie' },
  { id: 'f18', subjectId: 'fiziologie', front: 'Ce celule produc surfactantul pulmonar?', back: 'Pneumocitele de tip II' },
  { id: 'f19', subjectId: 'fiziologie', front: 'Ce hormon secretă celulele alfa pancreatice?', back: 'Glucagonul' },
]

// Grile cu un singur răspuns corect (indexul din `options`).
export const questions = [
  // Anatomie
  { id: 'q1', subjectId: 'anatomie', text: 'Nervul frenic provine din rădăcinile:', options: ['C3–C5', 'C5–C8', 'T1–T2', 'C1–C2'], answer: 0 },
  { id: 'q2', subjectId: 'anatomie', text: 'Valva tricuspidă se află între:', options: ['Atriul drept și ventriculul drept', 'Atriul stâng și ventriculul stâng', 'Ventriculul drept și trunchiul pulmonar', 'Ventriculul stâng și aortă'], answer: 0 },
  { id: 'q3', subjectId: 'anatomie', text: 'Nervul cranian VII este nervul:', options: ['Trigemen', 'Facial', 'Vag', 'Vestibulocohlear'], answer: 1 },
  { id: 'q4', subjectId: 'anatomie', text: 'Câte oase are, în medie, scheletul unui adult?', options: ['186', '226', '206', '256'], answer: 2 },
  { id: 'q5', subjectId: 'anatomie', text: 'Principalul mușchi al inspirației este:', options: ['Sternocleidomastoidianul', 'Diafragmul', 'Intercostalii interni', 'Dreptul abdominal'], answer: 1 },
  { id: 'q6', subjectId: 'anatomie', text: 'Artera femurală continuă artera:', options: ['Iliacă internă', 'Poplitee', 'Iliacă externă', 'Mezenterică inferioară'], answer: 2 },
  { id: 'q7', subjectId: 'anatomie', text: 'Ficatul este situat predominant în:', options: ['Hipocondrul drept', 'Hipocondrul stâng', 'Fosa iliacă dreaptă', 'Flancul stâng'], answer: 0 },
  { id: 'q8', subjectId: 'anatomie', text: 'Mușchiul deltoid este inervat de nervul:', options: ['Radial', 'Musculocutanat', 'Median', 'Axilar'], answer: 3 },
  { id: 'q9', subjectId: 'anatomie', text: 'Nervul trohlear inervează mușchiul:', options: ['Drept lateral', 'Oblic superior', 'Oblic inferior', 'Drept medial'], answer: 1 },
  { id: 'q10', subjectId: 'anatomie', text: 'Ventriculul stâng pompează sângele în:', options: ['Trunchiul pulmonar', 'Vena cavă superioară', 'Aortă', 'Venele pulmonare'], answer: 2 },
  { id: 'q11', subjectId: 'anatomie', text: 'Ce os carpian este cel mai frecvent fracturat?', options: ['Scafoidul', 'Pisiformul', 'Osul cu cârlig', 'Trapezul'], answer: 0 },
  { id: 'q12', subjectId: 'anatomie', text: 'Leziunea Erb–Duchenne afectează rădăcinile:', options: ['C8–T1', 'C5–C6', 'C7', 'T1–T2'], answer: 1 },
  // Biochimie
  { id: 'q13', subjectId: 'biochimie', text: 'Enzima limitantă de viteză a glicolizei este:', options: ['Hexokinaza', 'Piruvat kinaza', 'Fosfofructokinaza-1', 'Aldolaza'], answer: 2 },
  { id: 'q14', subjectId: 'biochimie', text: 'Statinele inhibă:', options: ['HMG-CoA reductaza', 'Acetil-CoA carboxilaza', 'Lipoprotein lipaza', 'Carnitin palmitoiltransferaza'], answer: 0 },
  { id: 'q15', subjectId: 'biochimie', text: 'Ciclul ureei are loc în principal în:', options: ['Rinichi', 'Ficat', 'Mușchi', 'Creier'], answer: 1 },
  { id: 'q16', subjectId: 'biochimie', text: 'Acceptorul final de electroni din lanțul respirator este:', options: ['NAD⁺', 'FAD', 'Coenzima Q', 'O₂'], answer: 3 },
  { id: 'q17', subjectId: 'biochimie', text: 'Deficitul de tiamină (vit. B1) afectează în primul rând:', options: ['Lactat dehidrogenaza', 'Piruvat dehidrogenaza', 'Hexokinaza', 'Glucozo-6-fosfataza'], answer: 1 },
  { id: 'q18', subjectId: 'biochimie', text: 'Eritrocitele își obțin ATP-ul prin:', options: ['Glicoliză anaerobă', 'Ciclul Krebs', 'Beta-oxidare', 'Fosforilare oxidativă'], answer: 0 },
  { id: 'q19', subjectId: 'biochimie', text: 'Precursorul catecolaminelor este:', options: ['Triptofanul', 'Histidina', 'Tirozina', 'Glicina'], answer: 2 },
  { id: 'q20', subjectId: 'biochimie', text: 'Gluconeogeneza are loc în principal în:', options: ['Ficat', 'Mușchiul scheletic', 'Creier', 'Eritrocite'], answer: 0 },
  { id: 'q21', subjectId: 'biochimie', text: 'Câte NADH rezultă dintr-o tură a ciclului Krebs?', options: ['1', '2', '3', '4'], answer: 2 },
  { id: 'q22', subjectId: 'biochimie', text: 'Oxigenul se leagă în hemoglobină de:', options: ['Fe³⁺ din hem', 'Fe²⁺ din hem', 'Lanțurile de globină', '2,3-BPG'], answer: 1 },
  // Fiziologie
  { id: 'q23', subjectId: 'fiziologie', text: 'Pacemakerul normal al inimii este:', options: ['Nodul atrioventricular', 'Fasciculul His', 'Nodul sinoatrial', 'Fibrele Purkinje'], answer: 2 },
  { id: 'q24', subjectId: 'fiziologie', text: 'pH-ul normal al sângelui arterial este:', options: ['7,00–7,20', '7,35–7,45', '7,50–7,70', '6,80–7,00'], answer: 1 },
  { id: 'q25', subjectId: 'fiziologie', text: 'ADH acționează în principal la nivelul:', options: ['Tubului colector', 'Glomerulului', 'Tubului contort proximal', 'Capsulei Bowman'], answer: 0 },
  { id: 'q26', subjectId: 'fiziologie', text: 'Surfactantul pulmonar este produs de:', options: ['Pneumocitele de tip I', 'Macrofagele alveolare', 'Celulele caliciforme', 'Pneumocitele de tip II'], answer: 3 },
  { id: 'q27', subjectId: 'fiziologie', text: 'Celulele alfa pancreatice secretă:', options: ['Glucagon', 'Insulină', 'Somatostatină', 'Polipeptid pancreatic'], answer: 0 },
  { id: 'q28', subjectId: 'fiziologie', text: 'Potențialul de repaus al neuronului este de aproximativ:', options: ['+30 mV', '0 mV', '−20 mV', '−70 mV'], answer: 3 },
  { id: 'q29', subjectId: 'fiziologie', text: 'Aldosteronul determină la nivel renal:', options: ['Reabsorbție de Na⁺ și secreție de K⁺', 'Secreție de Na⁺ și reabsorbție de K⁺', 'Reabsorbție de glucoză', 'Filtrare glomerulară crescută'], answer: 0 },
  { id: 'q30', subjectId: 'fiziologie', text: 'Volumul curent la un adult în repaus este de aproximativ:', options: ['150 mL', '500 mL', '1500 mL', '3000 mL'], answer: 1 },
  { id: 'q31', subjectId: 'fiziologie', text: 'Faza 0 a potențialului de acțiune al cardiomiocitului ventricular se datorează influxului de:', options: ['Ca²⁺', 'K⁺', 'Na⁺', 'Cl⁻'], answer: 2 },
  { id: 'q32', subjectId: 'fiziologie', text: 'Zgomotul cardiac I corespunde închiderii valvelor:', options: ['Semilunare', 'Atrioventriculare', 'Aortice și mitrale', 'Pulmonare și tricuspide'], answer: 1 },
]
