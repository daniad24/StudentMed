// Histologie – conținut demo
export default {
  materials: [
    {
      id: 'his-m1',
      type: 'summary',
      title: 'Țesutul conjunctiv – tipuri de celule și fibre',
      author: 'Ioana R.',
      upvotes: 14,
      recommended: false,
      createdAt: '2026-10-06',
      content: `## Componentele țesutului conjunctiv

Țesutul conjunctiv este format din **celule**, **fibre** și **substanță fundamentală**. Fibrele și substanța fundamentală alcătuiesc împreună matricea extracelulară.

## Celulele

- **Fibroblastul** – celula principală; sintetizează fibrele și substanța fundamentală. Forma inactivă se numește fibrocit.
- **Adipocitul** – depozitează lipide; în țesutul adipos alb are o singură picătură mare de grăsime, cu nucleul împins la periferie.
- **Macrofagul (histiocitul)** – derivă din monocite; fagocitează și prezintă antigene.
- **Mastocitul** – granule cu histamină și heparină; are receptori pentru IgE și participă la reacțiile alergice.
- **Plasmocitul** – derivă din limfocitul B; secretă anticorpi. Nucleul are aspect de „roată de car”.
- **Leucocitele** – migrează din sânge, mai ales în inflamație.

## Fibrele

| Fibră | Componentă principală | Exemple de localizare |
|---|---|---|
| Colagene | Colagen tip I | Derm, tendoane, os |
| Reticulare | Colagen tip III | Stroma organelor limfoide, ficat, măduvă |
| Elastice | Elastină și fibrilină | Artere elastice, pulmon, ligamente galbene |

Fibrele colagene sunt rezistente la tracțiune, cele elastice permit revenirea la forma inițială, iar cele reticulare formează o rețea fină de susținere. Fibrele reticulare se evidențiază prin impregnare argentică.

## Substanța fundamentală

Este un gel hidratat format din **glicozaminoglicani** (de exemplu acid hialuronic), **proteoglicani** și **glicoproteine de adeziune** (de exemplu fibronectina). Permite difuzia nutrienților între capilare și celule.

> Reține: fibroblastul produce matricea, macrofagul curăță, mastocitul și plasmocitul țin de apărare. Tipul de colagen „trădează” țesutul: I în os și tendon, II în cartilaj, III în fibrele reticulare, IV în membrana bazală.`,
    },
  ],
  flashcards: [
    { id: 'his-f1', front: 'Ce tip de epiteliu este endoteliul?', back: 'Epiteliu pavimentos simplu' },
    { id: 'his-f2', front: 'Ce celulă produce mielina în sistemul nervos periferic?', back: 'Celula Schwann' },
    { id: 'his-f3', front: 'Ce celule alveolare secretă surfactantul?', back: 'Pneumocitele de tip II' },
    { id: 'his-f4', front: 'Ce tip de colagen formează fibrele reticulare?', back: 'Colagenul de tip III' },
    { id: 'his-f5', front: 'Ce celulă resoarbe matricea osoasă?', back: 'Osteoclastul, celulă multinucleată' },
    { id: 'his-f6', front: 'Care este unitatea structurală a osului compact?', back: 'Osteonul (sistemul Havers)' },
    { id: 'his-f7', front: 'Ce sunt corpii Nissl?', back: 'Reticul endoplasmatic rugos și ribozomi din pericarionul neuronului' },
    { id: 'his-f8', front: 'Ce structuri unesc cardiomiocitele între ele?', back: 'Discurile intercalare' },
    { id: 'his-f9', front: 'Ce delimitează un sarcomer?', back: 'Două linii Z consecutive' },
    { id: 'his-f10', front: 'Ce secretă celulele parietale gastrice?', back: 'Acid clorhidric și factor intrinsec' },
    { id: 'his-f11', front: 'Din ce celule provin trombocitele?', back: 'Din megacariocitele din măduva osoasă' },
    { id: 'his-f12', front: 'Ce tip de cartilaj formează pavilionul urechii?', back: 'Cartilajul elastic' },
  ],
  questions: [
    {
      id: 'his-q1',
      type: 'single',
      text: 'Mucoasa vezicii urinare este căptușită de:',
      options: [
        'Epiteliu pavimentos stratificat necheratinizat',
        'Epiteliu cilindric simplu',
        'Epiteliu cubic simplu',
        'Uroteliu (epiteliu de tranziție)',
        'Epiteliu pseudostratificat cilindric ciliat',
      ],
      answer: [3],
      explanation: 'Căile urinare sunt căptușite de uroteliu, ale cărui celule superficiale („în umbrelă”) permit distensia și formează o barieră față de urină.',
    },
    {
      id: 'his-q2',
      type: 'single',
      text: 'Epiteliul traheei este de tip:',
      options: [
        'Pavimentos simplu',
        'Pseudostratificat cilindric ciliat, cu celule caliciforme',
        'Pavimentos stratificat cheratinizat',
        'Cubic stratificat',
        'Uroteliu',
      ],
      answer: [1],
      explanation: 'Epiteliul respirator tipic este pseudostratificat cilindric ciliat cu celule caliciforme; mucusul reține particulele, iar cilii le deplasează spre faringe.',
    },
    {
      id: 'his-q3',
      type: 'single',
      text: 'Surfactantul pulmonar este secretat de:',
      options: ['Pneumocitele de tip I', 'Macrofagele alveolare', 'Pneumocitele de tip II', 'Celulele caliciforme', 'Celulele endoteliale'],
      answer: [2],
      explanation: 'Pneumocitele de tip II conțin corpi lamelari cu surfactant, care scade tensiunea superficială alveolară. Pneumocitele de tip I sunt celule turtite implicate în schimbul gazos.',
    },
    {
      id: 'his-q4',
      type: 'single',
      text: 'Epiteliul mucoasei esofagiene la om este:',
      options: [
        'Cilindric simplu',
        'Pseudostratificat ciliat',
        'Cubic simplu',
        'Uroteliu',
        'Pavimentos stratificat necheratinizat',
      ],
      answer: [4],
      explanation: 'Esofagul are epiteliu pavimentos stratificat necheratinizat, adaptat frecării bolului alimentar. La joncțiunea esogastrică trece brusc în epiteliul cilindric simplu gastric.',
    },
    {
      id: 'his-q5',
      type: 'single',
      text: 'Vilozitățile intestinului subțire sunt acoperite de:',
      options: [
        'Epiteliu cilindric simplu cu platou striat și celule caliciforme',
        'Epiteliu pavimentos stratificat',
        'Epiteliu pseudostratificat ciliat',
        'Epiteliu cubic stratificat',
        'Uroteliu',
      ],
      answer: [0],
      explanation: 'Enterocitele sunt celule cilindrice cu microvili apicali (platou striat), care măresc suprafața de absorbție; printre ele se găsesc celule caliciforme.',
    },
    {
      id: 'his-q6',
      type: 'multi',
      text: 'Fac parte din complexul joncțional apical al enterocitelor:',
      options: ['Zonula occludens', 'Hemidesmozomul', 'Zonula adherens', 'Desmozomul (macula adherens)', 'Contactele focale'],
      answer: [0, 2, 3],
      explanation: 'Complexul joncțional este format, dinspre apex, din zonula occludens, zonula adherens și desmozom. Hemidesmozomii și contactele focale ancorează celula de membrana bazală.',
    },
    {
      id: 'his-q7',
      type: 'multi',
      text: 'Granulele mastocitelor conțin:',
      options: ['Histamină', 'Colagen de tip I', 'Heparină', 'Imunoglobulină A', 'Melanină'],
      answer: [0, 2],
      explanation: 'Granulele mastocitare conțin histamină și heparină, eliberate la legarea antigenului de IgE fixate pe membrană. Colagenul este produs de fibroblaste, iar melanina de melanocite.',
    },
    {
      id: 'his-q8',
      type: 'single',
      text: 'Plasmocitul derivă din:',
      options: ['Monocit', 'Limfocitul T', 'Fibroblast', 'Mastocit', 'Limfocitul B'],
      answer: [4],
      explanation: 'Plasmocitul este limfocitul B activat și diferențiat, specializat în secreția de anticorpi; are reticul endoplasmatic rugos foarte bogat.',
    },
    {
      id: 'his-q9',
      type: 'single',
      text: 'Colagenul de tip II este caracteristic pentru:',
      options: ['Derm', 'Cartilajul hialin', 'Membrana bazală', 'Fibrele reticulare', 'Tendon'],
      answer: [1],
      explanation: 'Colagenul de tip II se găsește în cartilajul hialin și elastic. Dermul și tendonul conțin colagen I, membrana bazală colagen IV, iar fibrele reticulare colagen III.',
    },
    {
      id: 'his-q10',
      type: 'single',
      text: 'Fibrele reticulare sunt formate în principal din:',
      options: ['Elastină', 'Colagen de tip I', 'Colagen de tip III', 'Colagen de tip IV', 'Fibronectină'],
      answer: [2],
      explanation: 'Fibrele reticulare sunt alcătuite din colagen de tip III și sunt argirofile. Ele formează stroma organelor limfoide, a ficatului și a măduvei hematogene.',
    },
    {
      id: 'his-q11',
      type: 'multi',
      text: 'Cartilaj elastic se găsește în:',
      options: ['Pavilionul urechii', 'Discul intervertebral', 'Epiglotă', 'Cartilajele costale', 'Inelele traheale'],
      answer: [0, 2],
      explanation: 'Pavilionul urechii și epiglota conțin cartilaj elastic. Cartilajele costale și traheale sunt hialine, iar discul intervertebral este fibrocartilaj.',
    },
    {
      id: 'his-q12',
      type: 'multi',
      text: 'Sunt formate din fibrocartilaj:',
      options: [
        'Epiglota',
        'Inelul fibros al discului intervertebral',
        'Cartilajul tiroid',
        'Cartilajele costale',
        'Meniscurile genunchiului',
      ],
      answer: [1, 4],
      explanation: 'Fibrocartilajul, bogat în colagen de tip I, rezistă la compresiune și tracțiune: meniscuri, inelul fibros, simfiza pubiană. Cartilajul tiroid și cartilajele costale sunt hialine, iar epiglota e cartilaj elastic.',
    },
    {
      id: 'his-q13',
      type: 'single',
      text: 'Cartilajul hialin articular se caracterizează prin:',
      options: [
        'Prezența unui pericondru gros',
        'Bogăția în vase de sânge',
        'Lipsa pericondrului',
        'Conținut mare de fibre elastice',
        'Inervație senzitivă abundentă',
      ],
      answer: [2],
      explanation: 'Cartilajul articular nu are pericondru și este avascular, fiind nutrit în principal din lichidul sinovial; de aceea se regenerează foarte slab.',
    },
    {
      id: 'his-q14',
      type: 'single',
      text: 'Osteoclastul derivă din:',
      options: [
        'Celulele osteoprogenitoare',
        'Osteocite',
        'Fibroblaste',
        'Linia monocit–macrofag',
        'Condroblaste',
      ],
      answer: [3],
      explanation: 'Osteoclastul este o celulă multinucleată formată prin fuziunea precursorilor din linia monocit–macrofag. Osteoblastele, în schimb, provin din celulele osteoprogenitoare mezenchimale.',
    },
    {
      id: 'his-q15',
      type: 'single',
      text: 'Unitatea structurală și funcțională a osului compact este:',
      options: ['Trabecula', 'Osteonul (sistemul Havers)', 'Condronul', 'Lacuna Howship', 'Periostul'],
      answer: [1],
      explanation: 'Osteonul este format din lamele osoase concentrice în jurul unui canal Havers ce conține vase și nervi. Trabeculele caracterizează osul spongios.',
    },
    {
      id: 'his-q16',
      type: 'single',
      text: 'Canalele Volkmann:',
      options: [
        'Sunt dispuse paralel cu axul lung al osului, în centrul osteonului',
        'Leagă canalele Havers între ele și cu periostul și cavitatea medulară',
        'Conțin prelungirile osteocitelor',
        'Apar doar în osul spongios',
        'Sunt căptușite de condrocite',
      ],
      answer: [1],
      explanation: 'Canalele Volkmann sunt orientate transversal sau oblic și conectează vascular canalele Havers între ele și cu suprafețele osului. Prelungirile osteocitelor ocupă canaliculele osoase.',
    },
    {
      id: 'his-q17',
      type: 'multi',
      text: 'Celulele musculare cardiace se caracterizează prin:',
      options: [
        'Unul sau doi nuclei situați central',
        'Prezența striațiilor transversale',
        'Celule ramificate',
        'Discuri intercalare',
        'Nuclei numeroși, dispuși periferic',
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Cardiomiocitele sunt striate, ramificate, cu 1–2 nuclei centrali, unite prin discuri intercalare. Nucleii multipli periferici sunt tipici fibrei musculare scheletice.',
    },
    {
      id: 'his-q18',
      type: 'single',
      text: 'Sarcomerul este delimitat de:',
      options: ['Două linii M', 'Două benzi A', 'Două zone H', 'Două linii Z consecutive', 'Două discuri intercalare'],
      answer: [3],
      explanation: 'Sarcomerul este unitatea contractilă cuprinsă între două linii Z; conține o bandă A centrală și câte o jumătate de bandă I la fiecare capăt.',
    },
    {
      id: 'his-q19',
      type: 'single',
      text: 'În timpul contracției fibrei musculare striate, își păstrează lungimea:',
      options: ['Banda A', 'Banda I', 'Zona H', 'Sarcomerul', 'Distanța dintre liniile Z'],
      answer: [0],
      explanation: 'Filamentele alunecă unele pe lângă altele fără să se scurteze, deci banda A (lungimea filamentelor groase) rămâne constantă, în timp ce banda I și zona H se micșorează.',
    },
    {
      id: 'his-q20',
      type: 'single',
      text: 'În sistemul nervos central, teaca de mielină este produsă de:',
      options: ['Celulele Schwann', 'Astrocite', 'Oligodendrocite', 'Microglie', 'Ependimocite'],
      answer: [2],
      explanation: 'Oligodendrocitele mielinizează axonii din SNC, un singur oligodendrocit putând mieliniza segmente din mai mulți axoni. În SNP mielina este produsă de celulele Schwann.',
    },
    {
      id: 'his-q21',
      type: 'multi',
      text: 'Sunt celule gliale ale sistemului nervos central:',
      options: [
        'Astrocitele',
        'Microglia',
        'Celulele Schwann',
        'Oligodendrocitele',
        'Ependimocitele',
      ],
      answer: [0, 1, 3, 4],
      explanation: 'Nevroglia centrală cuprinde astrocite, oligodendrocite, microglie și ependimocite. Celulele Schwann aparțin sistemului nervos periferic, unde realizează mielinizarea.',
    },
    {
      id: 'his-q22',
      type: 'single',
      text: 'Corpii Nissl din pericarionul neuronal corespund:',
      options: [
        'Aparatului Golgi',
        'Reticulului endoplasmatic rugos și ribozomilor',
        'Mitocondriilor',
        'Lizozomilor',
        'Neurofilamentelor',
      ],
      answer: [1],
      explanation: 'Corpii Nissl sunt aglomerări de reticul endoplasmatic rugos și ribozomi liberi, bazofile, care reflectă sinteza proteică intensă; lipsesc din conul axonal și din axon.',
    },
    {
      id: 'his-q23',
      type: 'single',
      text: 'Nodurile Ranvier sunt:',
      options: [
        'Zone ale axonului neacoperite de mielină, între două segmente internodale',
        'Sinapse axodendritice',
        'Corpi celulari ai celulelor Schwann',
        'Aglomerări de corpi Nissl',
        'Terminații nervoase libere',
      ],
      answer: [0],
      explanation: 'Nodurile Ranvier sunt întreruperi ale tecii de mielină unde se concentrează canalele de sodiu, permițând conducerea saltatorie a impulsului nervos.',
    },
    {
      id: 'his-q24',
      type: 'single',
      text: 'Eritrocitul matur uman:',
      options: [
        'Are un nucleu central',
        'Conține numeroase mitocondrii',
        'Are granulații azurofile',
        'Este anucleat și are formă de disc biconcav',
        'Are reticul endoplasmatic bine dezvoltat',
      ],
      answer: [3],
      explanation: 'Eritrocitul matur uman își pierde nucleul și organitele în cursul maturării; forma de disc biconcav îi crește suprafața și deformabilitatea.',
    },
    {
      id: 'his-q25',
      type: 'multi',
      text: 'Sunt granulocite:',
      options: ['Monocitul', 'Neutrofilul', 'Limfocitul', 'Eozinofilul', 'Bazofilul'],
      answer: [1, 3, 4],
      explanation: 'Granulocitele au granulații specifice și sunt neutrofilele, eozinofilele și bazofilele. Limfocitele și monocitele sunt agranulocite.',
    },
    {
      id: 'his-q26',
      type: 'multi',
      text: 'Bariera de filtrare glomerulară este alcătuită din:',
      options: [
        'Endoteliul fenestrat al capilarelor glomerulare',
        'Macula densa',
        'Membrana bazală glomerulară',
        'Celulele juxtaglomerulare',
        'Podocitele, cu fantele de filtrare dintre pedicele',
      ],
      answer: [0, 2, 4],
      explanation: 'Filtratul glomerular traversează endoteliul fenestrat, membrana bazală glomerulară și fantele dintre pedicelele podocitelor. Macula densa și celulele juxtaglomerulare fac parte din aparatul juxtaglomerular.',
    },
    {
      id: 'his-q27',
      type: 'single',
      text: 'Trombocitele provin din:',
      options: ['Megacariocite', 'Monocite', 'Eritroblaste', 'Mastocite', 'Plasmocite'],
      answer: [0],
      explanation: 'Trombocitele sunt fragmente citoplasmatice anucleate desprinse din megacariocitele din măduva osoasă hematogenă.',
    },
    {
      id: 'his-q28',
      type: 'single',
      text: 'Acidul clorhidric gastric este secretat de:',
      options: ['Celulele principale', 'Celulele mucoase ale coletului', 'Celulele parietale (oxintice)', 'Celulele enteroendocrine', 'Celulele Paneth'],
      answer: [2],
      explanation: 'Celulele parietale secretă HCl și factor intrinsec. Celulele principale secretă pepsinogen, iar celulele Paneth se găsesc în intestinul subțire.',
    },
    {
      id: 'his-q29',
      type: 'multi',
      text: 'Spațiul port (Kiernan) din ficat conține:',
      options: [
        'Vena centrolobulară',
        'O ramură a venei porte',
        'O ramură a arterei hepatice',
        'Un duct biliar interlobular',
        'Celule Kupffer',
      ],
      answer: [1, 2, 3],
      explanation: 'Spațiul port conține triada portală: ramură a venei porte, ramură a arterei hepatice și duct biliar interlobular. Vena centrolobulară se află în centrul lobulului, iar celulele Kupffer în sinusoide.',
    },
    {
      id: 'his-q30',
      type: 'multi',
      text: 'Celulele Paneth:',
      options: [
        'Au granule apicale eozinofile',
        'Secretă lizozim',
        'Derivă din celulele stem ale criptelor intestinale',
        'Se găsesc la baza criptelor Lieberkühn',
        'Secretă acid clorhidric',
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Celulele Paneth provin din celulele stem ale criptelor, se află la baza criptelor intestinului subțire și au granule eozinofile cu substanțe antimicrobiene, ca lizozimul. Acidul clorhidric este secretat de celulele parietale gastrice.',
    },
  ],
}
