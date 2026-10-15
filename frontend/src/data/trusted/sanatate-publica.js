// Sănătate publică – rezumate verificate (echipa StudentMed)
export default [
  {
    id: 'sap-t1',
    title: 'Indicatorii de sănătate: demografie, morbiditate, mortalitate',
    topic: 'Măsurarea stării de sănătate',
    readMinutes: 4,
    content: `## De ce avem nevoie de indicatori

Starea de sănătate a unei populații nu se poate descrie prin cazuri individuale. Folosim **indicatori** – rapoarte standardizate care permit comparații în timp și între populații. Un indicator are un **numărător** (evenimentele), un **numitor** (populația din care provin) și o **perioadă** de referință.

## Noțiuni de bază: proporție, rată, raport

- **Proporția**: numărătorul este inclus în numitor (ex. procentul de fumători).
- **Rata**: include timpul – evenimente apărute într-o perioadă raportate la populația expusă riscului.
- **Raportul**: numărătorul nu face parte din numitor (ex. raportul de masculinitate).

## Indicatori demografici

- **Natalitatea**: născuți vii într-un an raportați la populația medie a anului, la 1000 de locuitori.
- **Fertilitatea**: născuți vii raportați la femeile de vârstă fertilă – mai precisă decât natalitatea.
- **Mortalitatea generală**: decese într-un an raportate la populația medie, la 1000.
- **Sporul natural**: diferența dintre natalitate și mortalitatea generală.
- **Speranța de viață la naștere**: numărul mediu de ani pe care i-ar trăi un nou-născut dacă s-ar menține mortalitatea pe vârste din acel moment.

## Indicatori de morbiditate

| Indicator | Numărător | Ce măsoară |
|---|---|---|
| **Incidența** | Cazuri **noi** într-o perioadă | Riscul de îmbolnăvire, viteza apariției bolii |
| **Prevalența** | Toate cazurile **existente** (noi + vechi) | Povara bolii la un moment dat |

Relația dintre ele: **prevalența ≈ incidența × durata medie a bolii** (pentru boli în situație stabilă). O boală cronică, cu durată lungă, are prevalență mare chiar cu incidență mică. Un tratament care **prelungește supraviețuirea fără vindecare crește prevalența**.

Incidența se obține din **studii de cohortă** sau registre, prevalența din **studii transversale**.

## Indicatori de mortalitate

- **Mortalitatea specifică** (pe cauză, vârstă sau sex): decesele din grupul respectiv raportate la populația grupului.
- **Letalitatea**: decese printr-o boală raportate la **numărul de bolnavi** de acea boală – exprimă **gravitatea** bolii.
- **Mortalitatea infantilă**: decese **sub 1 an** raportate la **născuții vii** din același an, la 1000 – indicator sensibil al nivelului socio-economic și al calității îngrijirilor.
- Alte componente: mortalitatea neonatală (primele 4 săptămâni de viață), mortalitatea maternă.

## Standardizarea

Două populații cu structuri de vârstă diferite nu se compară prin ratele brute: o populație îmbătrânită are mortalitate brută mai mare chiar dacă riscul pe fiecare grupă de vârstă este același. Se folosesc **rate standardizate** (metoda directă sau indirectă).

## Indicatori sintetici

**Anii de viață ajustați pentru dizabilitate (DALY)** combină anii pierduți prin deces prematur cu anii trăiți cu dizabilitate, permițând compararea poverii unor boli foarte diferite.

## De reținut pentru examen

- Incidența = cazuri **noi**; prevalența = cazuri **existente**.
- Letalitatea se raportează la **bolnavi**, mortalitatea la **populație**.
- Mortalitatea infantilă: decese sub 1 an / **născuți vii**.
- Prevalența crește dacă boala durează mai mult.
- Comparațiile între populații cer **rate standardizate** pe vârstă.`,
    references: [
      'Gordis Epidemiology (Celentano, Szklo) – Measuring the Occurrence of Disease',
      'Bonita, Beaglehole, Kjellström – Basic Epidemiology (WHO) – Measuring health and disease',
    ],
  },
  {
    id: 'sap-t2',
    title: 'Tipuri de studii epidemiologice și măsuri de asociere',
    topic: 'Epidemiologie analitică',
    readMinutes: 4,
    content: `## Clasificarea studiilor

### Studii descriptive
Descriu distribuția bolii după **persoană, loc și timp** și generează ipoteze.
- **Raportarea de caz** și **seria de cazuri**.
- **Studiul ecologic**: unitatea de analiză este grupul (țară, oraș), nu individul. Riscul major: **eroarea ecologică** – o asociere la nivel de grup nu este neapărat valabilă la nivel individual.
- **Studiul transversal**: expunerea și boala se măsoară în același moment; dă **prevalența**, dar nu poate stabili succesiunea în timp.

### Studii analitice observaționale
- **Studiul caz-control**: pornește de la **boală** – se compară bolnavii (cazuri) cu persoane fără boală (martori) în privința expunerii din trecut. Este rapid și ieftin, ideal pentru **boli rare**. Măsura de asociere: **odds ratio (OR)**. Vulnerabil la **biasul de reamintire** și la alegerea greșită a martorilor.
- **Studiul de cohortă**: pornește de la **expunere** – expuși și neexpuși sunt urmăriți în timp pentru apariția bolii. Calculează **incidența** și **riscul relativ (RR)**; potrivit pentru **expuneri rare** și pentru a studia mai multe efecte ale aceleiași expuneri. Poate fi prospectiv sau retrospectiv (istoric). Dezavantaje: costuri, durată, pierderi din urmărire.

### Studii experimentale
- **Studiul clinic randomizat controlat**: investigatorul alocă intervenția **aleatoriu**. Randomizarea distribuie egal factorii de confuzie, cunoscuți și necunoscuți. **Orbirea** reduce biasul de evaluare. Este standardul pentru evaluarea eficacității unui tratament.

## Tabelul 2×2 și măsurile de asociere

| | Boală prezentă | Boală absentă |
|---|---|---|
| Expuși | a | b |
| Neexpuși | c | d |

- **Riscul relativ (RR)** = [a / (a + b)] / [c / (c + d)] – incidența la expuși împărțită la incidența la neexpuși.
- **Odds ratio (OR)** = (a × d) / (b × c) – raportul șanselor de expunere la cazuri față de martori.
- În bolile rare, OR aproximează bine RR.
- **Riscul atribuibil** (diferența de risc) = incidența la expuși − incidența la neexpuși: cât din risc se datorează expunerii.

### Interpretare

- RR sau OR **= 1**: nicio asociere.
- **> 1**: expunerea este asociată cu risc crescut.
- **< 1**: expunerea pare protectoare.

## Asociere nu înseamnă cauzalitate

O asociere poate fi explicată de **întâmplare**, **bias** sau **confuzie**. Pentru a susține o relație cauzală se folosesc **criteriile Bradford Hill**: forța asocierii, consistența, specificitatea, **temporalitatea** (singurul criteriu obligatoriu – cauza precede efectul), gradientul doză–răspuns, plauzibilitatea biologică, coerența, dovezile experimentale, analogia.

## De reținut pentru examen

- Caz-control pornește de la **boală** → **OR**; ideal pentru **boli rare**.
- Cohorta pornește de la **expunere** → **incidență și RR**; ideală pentru **expuneri rare**.
- Studiul transversal dă **prevalență**, nu incidență.
- Randomizarea controlează și confuzia **necunoscută**.
- Temporalitatea este criteriul Bradford Hill indispensabil.`,
    references: [
      'Gordis Epidemiology (Celentano, Szklo) – Case-Control and Cohort Studies',
      'Rothman – Epidemiology: An Introduction – Types of Epidemiologic Studies',
    ],
  },
  {
    id: 'sap-t3',
    title: 'Screeningul și nivelurile de prevenție',
    topic: 'Prevenție',
    readMinutes: 4,
    content: `## Nivelurile de prevenție

| Nivel | Obiectiv | Exemple |
|---|---|---|
| **Primară** | Împiedică apariția bolii | Vaccinare, renunțarea la fumat, fluorizarea apei, centura de siguranță |
| **Secundară** | Depistează boala în faza preclinică | Screening: citologie cervicală, mamografie, test pentru sânge ocult în scaun |
| **Terțiară** | Limitează complicațiile și dizabilitatea | Recuperare post-AVC, îngrijirea piciorului diabetic |

Unii autori adaugă **prevenția primordială** (împiedicarea apariției factorilor de risc, ex. politici alimentare) și **prevenția cuaternară** (protejarea pacientului de intervenții medicale inutile).

## Screeningul

**Screeningul** înseamnă aplicarea unui test la persoane **asimptomatice** pentru a identifica pe cele cu probabilitate mare de a avea boala. Un test de screening pozitiv **nu este diagnostic** – trebuie urmat de confirmare.

### Criteriile Wilson–Jungner (selecție)

- Boala este o **problemă importantă** de sănătate.
- Istoria naturală este cunoscută și există o **fază latentă/preclinică** detectabilă.
- Există un **tratament eficient**, mai bun în stadiul precoce.
- Testul este **acceptabil** pentru populație, sigur și cu performanță bună.
- Există resurse pentru diagnostic și tratament; costul este justificat.

## Performanța unui test

| | Boală prezentă | Boală absentă |
|---|---|---|
| Test pozitiv | a (adevărat pozitivi) | b (fals pozitivi) |
| Test negativ | c (fals negativi) | d (adevărat negativi) |

- **Sensibilitatea** = a / (a + c): capacitatea de a detecta bolnavii.
- **Specificitatea** = d / (b + d): capacitatea de a identifica sănătoșii.
- **Valoarea predictivă pozitivă** = a / (a + b): probabilitatea de boală dacă testul este pozitiv.
- **Valoarea predictivă negativă** = d / (c + d): probabilitatea de a nu avea boala dacă testul este negativ.

**Sensibilitatea și specificitatea** sunt proprietăți ale testului. **Valorile predictive depind de prevalență**: în aceeași populație, dacă prevalența crește, VPP crește și VPN scade. De aceea, același test dă mulți fals pozitivi într-o populație cu prevalență mică.

Între sensibilitate și specificitate există un **compromis**: modificarea pragului de pozitivitate crește una în detrimentul celeilalte (vizualizat prin **curba ROC**).

## Evaluarea unui program de screening

Indicatorul corect al eficienței este **reducerea mortalității** prin boala respectivă, nu doar creșterea supraviețuirii de la diagnostic. Biasuri care fac screeningul să pară mai eficient:

- **Lead-time bias**: diagnosticul mai precoce prelungește aparent supraviețuirea fără a amâna decesul.
- **Length-time bias**: screeningul detectează preferențial formele cu evoluție lentă, de prognostic mai bun.
- **Supradiagnosticul**: depistarea unor leziuni care nu ar fi devenit niciodată clinic manifeste.
- **Biasul voluntarului sănătos**: participanții sunt în general mai sănătoși decât populația.

## De reținut pentru examen

- Screeningul este **prevenție secundară**; vaccinarea este **primară**.
- Sensibilitate mare = puțini **fals negativi**; specificitate mare = puțini **fals pozitivi**.
- **VPP crește cu prevalența**; Se și Sp nu depind de prevalență.
- Un program se judecă după **scăderea mortalității specifice**.
- Supraviețuirea mai lungă poate fi doar un efect **lead-time**.`,
    references: [
      'Gordis Epidemiology (Celentano, Szklo) – Assessing the Validity and Reliability of Diagnostic and Screening Tests',
      'Wilson JMG, Jungner G – Principles and Practice of Screening for Disease (WHO, 1968)',
    ],
  },
  {
    id: 'sap-t4',
    title: 'Bias, confuzie și medicina bazată pe dovezi',
    topic: 'Citirea critică a literaturii',
    readMinutes: 4,
    content: `## Trei explicații alternative pentru o asociere

Înainte de a accepta un rezultat, întrebăm dacă se poate explica prin:
1. **Întâmplare** (eroare aleatorie) – evaluată prin teste statistice și intervale de încredere; scade când eșantionul crește.
2. **Bias** (eroare sistematică) – nu se corectează prin mărirea eșantionului.
3. **Confuzie** – amestecul efectului unui al treilea factor.

## Biasul

| Tip | Mecanism | Exemplu |
|---|---|---|
| **De selecție** | Participanții diferă sistematic de populația-țintă sau grupurile sunt alese diferit | Martori recrutați din spital, cu boli legate de expunere |
| **De informare (măsurare)** | Expunerea sau boala se măsoară diferit între grupuri | **Biasul de reamintire** în studiile caz-control |
| **Al pierderilor din urmărire** | Cei pierduți diferă de cei rămași | Abandon mai mare la pacienții cu efecte adverse |
| **De publicare** | Studiile cu rezultate pozitive se publică mai ușor | Supraestimarea efectului în meta-analize |

## Confuzia

Un **factor de confuzie** este asociat cu **expunerea**, este factor de risc pentru **boală** independent de expunere și **nu se află pe lanțul cauzal** între ele. Exemplu clasic: asocierea dintre consumul de cafea și cancerul pulmonar este confundată de fumat.

**Controlul confuziei**:
- la proiectare: **randomizare**, **restricție**, **împerechere (matching)**;
- la analiză: **stratificare**, **analiză multivariată**.

## Intervalul de încredere

**Intervalul de încredere 95%** arată plaja de valori compatibile cu datele pentru efectul din populație. Un interval **îngust** indică o estimare precisă (eșantion mare).

- Pentru **RR sau OR**: dacă intervalul **include 1**, rezultatul nu este semnificativ statistic.
- Pentru o **diferență** de medii sau de riscuri: dacă intervalul **include 0**, rezultatul nu este semnificativ.
- Lipsa semnificației **nu dovedește** lipsa efectului – poate fi un studiu cu putere insuficientă.
- Semnificația statistică nu înseamnă automat **relevanță clinică**.

## Medicina bazată pe dovezi (EBM)

EBM înseamnă integrarea **celor mai bune dovezi** disponibile cu **experiența clinicianului** și **valorile pacientului**. Etapele:
1. **Întrebarea** clinică structurată **PICO** – pacient, intervenție, comparator, rezultat (outcome).
2. **Căutarea** dovezilor (baze de date, ghiduri).
3. **Evaluarea critică**: validitate, mărimea efectului, aplicabilitate.
4. **Aplicarea** la pacient.
5. **Evaluarea** propriei practici.

### Ierarhia dovezilor (pentru întrebări de tratament)

Revizuirile sistematice și meta-analizele de studii randomizate → studii randomizate individuale → studii de cohortă → studii caz-control → serii de cazuri → opinia expertului.

### Măsuri utile clinic

- **Reducerea absolută a riscului (RAR)** = riscul în grupul de control − riscul în grupul tratat.
- **NNT** = 1 / RAR – câți pacienți trebuie tratați pentru a preveni un eveniment.
- Reducerea relativă a riscului poate părea impresionantă chiar când beneficiul absolut este mic.

## De reținut pentru examen

- Biasul **nu dispare** prin creșterea eșantionului; eroarea aleatorie da.
- Confuzia: legat de expunere **și** de boală, **nu** pe lanțul cauzal.
- IC 95% pentru RR/OR care **include 1** = nesemnificativ.
- **NNT = 1 / RAR**.
- Opinia expertului este la **baza** ierarhiei dovezilor.`,
    references: [
      'Guyatt et al. – Users’ Guides to the Medical Literature (JAMA)',
      'Straus et al. – Evidence-Based Medicine: How to Practice and Teach EBM',
      'Gordis Epidemiology (Celentano, Szklo) – More on Causal Inference: Bias, Confounding, and Interaction',
    ],
  },
]
