// Genetică medicală – rezumate verificate (echipa Steto)
export default [
  {
    id: 'gen-t1',
    title: 'Tipuri de transmitere ereditară și arbori genealogici',
    topic: 'Tipuri de transmitere',
    readMinutes: 3,
    content: `## Noțiuni de bază

- **Genă** și **alelă**: variantele aceleiași gene la un locus.
- **Homozigot** (două alele identice) și **heterozigot** (două alele diferite).
- **Genotip** (constituția genetică) și **fenotip** (trăsătura observabilă).
- **Penetranța**: proporția purtătorilor genotipului care exprimă fenotipul; **expresivitatea**: gradul de manifestare la cei afectați.

## Modelele de transmitere monogenică

| Model | Cum se recunoaște | Risc tipic |
|---|---|---|
| **Autozomal dominant (AD)** | apare în fiecare generație; ambele sexe; posibilă transmitere tată-fiu | 50% la copilul unui părinte heterozigot afectat |
| **Autozomal recesiv (AR)** | poate sări generații; părinți purtători sănătoși; ambele sexe; mai frecvent la consangvini | 25% la părinții purtători |
| **X-linkat recesiv** | afectează mai ales bărbații; fără transmitere tată-fiu; femeile pot fi purtătoare | fiii unei purtătoare au 50% risc de boală |
| **X-linkat dominant** | afectate și femeile; tatăl afectat transmite boala tuturor fiicelor | variabil |
| **Mitocondrial** | transmitere maternă; fiii și fiicele afectați; tatăl nu transmite | de la mamă la toți copiii, cu variabilitate de expresie |

### Detalii utile

- În **AD** o mutație nouă (de novo) poate apărea la un copil cu părinți sănătoși.
- În **AR** multe boli sunt enzimatice (deficit de enzimă), iar purtătorii sunt de regulă asimptomatici.
- În **X-linkat recesiv** bărbatul are un singur cromozom X (hemizigot), deci o singură alelă mutantă îl îmbolnăvește. Exemple: hemofilia A și B, distrofia musculară Duchenne.
- La femei, unul dintre cromozomii X este inactivat (**inactivarea X**, fenomenul Lyon), de aceea purtătoarele pot avea manifestări ușoare.
- **Heteroplasmia** (amestec de ADN mitocondrial normal și mutant) explică variabilitatea bolilor mitocondriale.

## Arborele genealogic

Este reprezentarea grafică a istoricului familial. Convenții:
- **pătrat** = bărbat; **cerc** = femeie; **romb** = sex nespecificat;
- simbol **plin** = persoană afectată; simbol parțial = purtător, unde se marchează;
- linie dublă = **consangvinitate**;
- **probandul** (propositus) este persoana prin care a fost descoperită familia, marcat cu o săgeată;
- generațiile se notează cu cifre romane, iar indivizii dintr-o generație cu cifre arabe.

Arborele permite recunoașterea tipului de transmitere și estimarea riscului de recurență. Pentru a fi util, trebuie să acopere cel puțin trei generații și să includă și rudele sănătoase.

## Excepții de la modelele clasice

Mozaicismul germinal, penetranța redusă, anticipația și imprimarea genomică pot face ca un arbore să pară atipic.

## De reținut pentru examen

- AD: **50%** la copilul unui părinte heterozigot; AR între purtători: **25%**.
- X-linkat recesiv: **fără transmitere tată-fiu**; hemofilia este exemplul clasic.
- Mitocondrial: transmitere **maternă**, la toți copiii.
- Consangvinitatea crește riscul bolilor **autozomal recesive**.
- Pătrat = bărbat, cerc = femeie, simbol plin = afectat.
`,
    references: [
      'Thompson and Thompson Genetics and Genomics in Medicine – Modele de transmitere monogenică',
      'Emery’s Elements of Medical Genetics and Genomics – Analiza arborilor genealogici',
    ],
  },
  {
    id: 'gen-t2',
    title: 'Cariotipul și aneuploidiile',
    topic: 'Cariotip și aneuploidii',
    readMinutes: 3,
    content: `## Cariotipul

Cariotipul este setul de cromozomi al unei persoane, ordonat după mărime și poziția centromerului. Normal: **46 de cromozomi** (22 de perechi de autozomi și o pereche de gonozomi): 46,XX la femeie și 46,XY la bărbat. Cromozomii se studiază la **metafază** (condensare maximă), după bandare.

## Anomalii cromozomiale

- **Numerice**: euploidii (multipli ai setului haploid, de exemplu poliploidia) și **aneuploidii** (câștig sau pierdere a unui cromozom: trisomie sau monosomie).
- **Structurale**: deleții, duplicații, inversii, translocații (echilibrate sau neechilibrate).

### Mecanismul aneuploidiilor

Cauza principală este **nedisjuncția**: cromozomii omologi (meioza I) sau cromatidele surori (meioza II) nu se separă. Rezultă gameți cu un cromozom în plus sau lipsă. Riscul unor trisomii crește cu **vârsta maternă**.

## Aneuploidii principale

| Sindrom | Cariotip | Aspecte principale |
|---|---|---|
| **Down** | trisomie 21 (47,XX sau XY,+21) | dizabilitate intelectuală, hipotonie, facies caracteristic, risc de malformații cardiace |
| **Edwards** | trisomie 18 | malformații multiple, prognostic grav |
| **Patau** | trisomie 13 | malformații severe, prognostic grav |
| **Turner** | 45,X | sex feminin, statură mică, disgenezie gonadală, amenoree primară |
| **Klinefelter** | 47,XXY | sex masculin, hipogonadism, infertilitate |

### Sindromul Down

Majoritatea cazurilor sunt **trisomii 21 libere**, prin nedisjuncție meiotică. O minoritate se datorează **translocației robertsoniene** (cu risc de recurență familial mai mare) sau mozaicismului. Screeningul prenatal combină vârsta maternă, markeri serici și ecografie; diagnosticul de certitudine se face prin cariotip pe celule fetale.

### Sindroamele gonozomale

- Prezența sau absența unor cromozomi X suplimentari se reflectă în **corpusculii Barr** (cromatina X inactivată): numărul lor este numărul de cromozomi X minus unu. La Turner nu se observă, la Klinefelter se observă unul.
- Trisomia X (47,XXX) este adesea slab simptomatică.

## Diagnostic

- **Cariotip clasic** pe limfocite sau celule fetale.
- **FISH** și tehnicile moleculare (microarray) pentru anomalii mici.
- Diagnostic prenatal prin biopsie de vilozități coriale sau amniocenteză, la indicație.

## De reținut pentru examen

- Down = **trisomie 21**; Turner = **45,X**; Klinefelter = **47,XXY**.
- Cauza = **nedisjuncția**; riscul crește cu vârsta maternă (pentru trisomii).
- Turner = fenotip feminin; Klinefelter = fenotip **masculin**.
- Translocația robertsoniană = Down familial, cu risc de recurență diferit.
- Cariotipul se analizează în **metafază**.
`,
    references: [
      'Thompson and Thompson Genetics and Genomics in Medicine – Principiile citogeneticii clinice',
      'Emery’s Elements of Medical Genetics and Genomics – Anomalii cromozomiale',
    ],
  },
  {
    id: 'gen-t3',
    title: 'Mutațiile și bolile monogenice clasice',
    topic: 'Mutații și boli monogenice',
    readMinutes: 4,
    content: `## Mutațiile

Mutația este o modificare permanentă a materialului genetic. Poate fi **spontană** (erori de replicare) sau indusă (radiații, substanțe chimice).

| Tip | Efect |
|---|---|
| **Silențioasă** | schimbă un codon în unul sinonim; proteina rămâne la fel |
| **Missense** | înlocuiește un aminoacid cu altul |
| **Nonsens** | creează un codon de stop prematur; proteină scurtată |
| **Frameshift** | inserție sau deleție care nu e multiplu de 3; decalează cadrul de citire |
| **Expansiune de repetiții** | număr crescut de repetiții trinucleotidice (Huntington) |

Mutațiile pot fi **pierdere de funcție** (frecvent recesive) sau **câștig de funcție** (frecvent dominante). Mutațiile **somatice** nu se transmit descendenților, cele **germinale** da. Anomaliile cromozomiale (nedisjuncție, translocații) sunt alt capitol.

## Boli monogenice clasice

### Fibroza chistică
- Autozomal **recesivă**, gena **CFTR** (canal de clor).
- Secreții vâscoase: manifestări pulmonare (infecții repetate, bronșiectazii), pancreatice (insuficiență pancreatică exocrină) și digestive; la bărbați, infertilitate prin absența bilaterală a canalelor deferente.

### Hemofilia
- **X-linkată recesivă**; hemofilia A = deficit de factor **VIII**, hemofilia B = deficit de factor **IX**.
- Afectează mai ales bărbații; sângerări articulare și musculare. Fiii unui bărbat afectat nu moștenesc boala de la el, dar fiicele lui sunt purtătoare obligate.

### Boala Huntington
- Autozomal **dominantă**, expansiune a repetiției **CAG** în gena huntingtinei.
- Boală neurodegenerativă cu mișcări involuntare, tulburări psihice și declin cognitiv, cu debut de obicei la adult.
- Prezintă **anticipație**: la generațiile următoare, expansiunea poate crește, iar debutul poate fi mai precoce.

### Fenilcetonuria
- Autozomal **recesivă**, deficit de **fenilalanin-hidroxilază**.
- Fenilalanina se acumulează; netratată produce afectare neurologică.
- Se depistează prin **screening neonatal**, iar tratamentul este **dietetic** (restricție de fenilalanină), început precoce.

## Alte exemple utile

- **AD**: sindromul Marfan, acondroplazia, hipercolesterolemia familială.
- **AR**: siclemia (hemoglobina S), talasemiile, majoritatea bolilor metabolice enzimatice.
- **X-linkat recesiv**: distrofia musculară Duchenne, daltonismul.

## De reținut pentru examen

- **CFTR** = fibroză chistică (AR); **factor VIII** = hemofilia A (XR).
- Huntington = AD, repetiții **CAG**, anticipație.
- Fenilcetonurie = AR, **screening neonatal** și dietă.
- Nonsens = codon de stop; missense = alt aminoacid; frameshift = nu multiplu de 3.
- Mutațiile germinale se transmit, cele somatice nu.
`,
    references: [
      'Thompson and Thompson Genetics and Genomics in Medicine – Mutațiile și bolile monogenice',
      'Lippincott Illustrated Reviews: Biochemistry – Mutații și boli genetice',
    ],
  },
  {
    id: 'gen-t4',
    title: 'Ereditatea multifactorială, Hardy-Weinberg și consilierea genetică',
    topic: 'Ereditate multifactorială',
    readMinutes: 4,
    content: `## Ereditatea multifactorială

Multe afecțiuni frecvente rezultă din interacțiunea dintre **mai multe gene** (cu efect mic fiecare) și **factori de mediu**. Nu urmează modelele mendeliene simple.

- Exemple: hipertensiunea arterială esențială, diabetul zaharat tip 2, boala coronariană, multe malformații izolate (defecte de tub neural, buză despicată), schizofrenia.
- Modelul **pragului**: boala apare când încărcarea cumulată (genetică și de mediu) depășește un prag.
- Riscul de recurență în familie este mai mare decât în populația generală și **scade rapid** odată cu depărtarea gradului de rudenie; crește cu numărul de rude afectate și cu severitatea bolii.

### Heritabilitatea și studiile pe gemeni

**Heritabilitatea** exprimă proporția din variabilitatea unei trăsături dintr-o populație care se datorează diferențelor genetice. Se estimează prin **studii pe gemeni**: **monozigoții** au același genom, **dizigoții** împart în medie jumătate dintre alele. O concordanță mai mare la monozigoți decât la dizigoți indică o componentă genetică; concordanța incompletă la monozigoți arată rolul mediului.

## Principiul Hardy-Weinberg

Într-o populație mare, cu împerechere aleatoare, fără selecție, mutații semnificative sau migrare, **frecvențele alelice și genotipice rămân constante** de la o generație la alta.

Cu alelele de frecvență **p** și **q** (p + q = 1):
- homozigoți p²; heterozigoți **2pq**; homozigoți q²; suma = 1.

| Situație | Consecință |
|---|---|
| Boală AR rară | purtătorii (2pq) sunt mult mai numeroși decât bolnavii (q²) |
| Consangvinizare | crește frecvența homozigoților, deci a bolilor AR |
| Selecție, deriva genetică, migrare | modifică frecvențele alelice |

Aplicația practică este estimarea frecvenței purtătorilor pornind de la incidența unei boli recesive.

## Consilierea genetică

Este un proces de **comunicare** în care familia primește informații despre diagnostic, modul de transmitere, **riscul de recurență** și opțiunile disponibile (testare, diagnostic prenatal, opțiuni reproductive).

Principii:
- abordare **non-directivă**: decizia aparține familiei;
- **confidențialitate** și consimțământ informat;
- sprijin psihologic.

Indicații frecvente: istoric familial de boală genetică, **vârstă maternă avansată**, consangvinitate, copil anterior afectat, anomalii depistate prenatal, avorturi repetate.

## De reținut pentru examen

- Multifactorial = **mai multe gene plus mediu**; risc familial mai mare, dar nu mendelian.
- Heritabilitate: componenta genetică a variabilității; se studiază la **gemeni**.
- Hardy-Weinberg: **p² + 2pq + q² = 1**; heterozigoții = **2pq**.
- Consilierea genetică este **non-directivă**.
- Consangvinizarea crește frecvența bolilor recesive.
`,
    references: [
      'Thompson and Thompson Genetics and Genomics in Medicine – Genetica populațiilor, ereditatea multifactorială, consilierea genetică',
      'Emery’s Elements of Medical Genetics and Genomics – Boli multifactoriale și consiliere',
    ],
  },
]
