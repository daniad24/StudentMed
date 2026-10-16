// Microbiologie – conținut demo
export default {
  materials: [
    {
      id: 'mic-m1',
      type: 'summary',
      title: 'Colorația Gram și structura peretelui bacterian',
      author: 'Ioana R.',
      upvotes: 21,
      recommended: true,
      createdAt: '2026-10-06',
      content: `## De ce contează colorația Gram

Colorația Gram este prima examinare microscopică făcută în laborator. Împarte bacteriile în două mari grupe, după structura peretelui celular, și orientează rapid diagnosticul și tratamentul empiric.

## Etapele colorației

1. **Cristal violet** – colorantul primar; colorează toate bacteriile în violet.
2. **Lugol** – mordant; formează cu cristalul violet un complex insolubil.
3. **Alcool-acetonă** – decolorare; etapa critică, care diferențiază cele două grupe.
4. **Fucsină** (sau safranină) – colorant de contrast.

**Rezultat:** bacteriile Gram-pozitive rămân **violet**, iar cele Gram-negative apar **roșii**.

## Structura peretelui

| Caracteristică | Gram-pozitive | Gram-negative |
|---|---|---|
| Peptidoglican | strat gros, multistratificat | strat subțire |
| Acizi teicoici | prezenți | absenți |
| Membrană externă | absentă | prezentă |
| Lipopolizaharid (LPS) | absent | prezent (endotoxina) |
| Spațiu periplasmic | absent sau redus | prezent |

## Explicația mecanismului

La Gram-pozitive, stratul gros de peptidoglican reține complexul cristal violet–iod după decolorare. La Gram-negative, alcoolul dizolvă lipidele membranei externe, iar stratul subțire de peptidoglican nu reține complexul, astfel încât celulele preiau colorantul de contrast.

## Excepții de reținut

- **Micobacteriile** au perete bogat în acizi micolici și se colorează slab Gram; se folosește colorația **Ziehl-Neelsen**.
- Bacteriile fără perete (ex. *Mycoplasma*) nu se colorează Gram.

> Atenție la etapa de decolorare: o decolorare excesivă poate face ca o bacterie Gram-pozitivă să apară Gram-negativă.`,
    },
    {
      id: 'mic-m2',
      type: 'summary',
      title: 'Coci Gram-pozitivi: Staphylococcus vs Streptococcus',
      author: 'Mihai P.',
      upvotes: 17,
      recommended: false,
      createdAt: '2026-10-09',
      content: `## Elementele de diferențiere

Ambele genuri sunt coci Gram-pozitivi, dar se deosebesc prin dispunere și prin câteva teste simple de laborator.

| Criteriu | Staphylococcus | Streptococcus |
|---|---|---|
| Dispunere pe frotiu | în grămezi (ciorchine) | în lanțuri sau perechi |
| Catalază | pozitivă | negativă |
| Principalul patogen | *S. aureus* | *S. pyogenes*, *S. pneumoniae* |

## Staphylococcus

- ***S. aureus*** – **coagulază pozitiv**; produce infecții cutanate supurative (furuncul, abces), pneumonii, osteomielite, endocardite, intoxicații alimentare prin enterotoxine și sindromul șocului toxic.
- **Stafilococii coagulazo-negativi** (ex. *S. epidermidis*) – flora normală a pielii; implicați în infecții pe dispozitive medicale (catetere, proteze).

## Streptococcus

Clasificare după hemoliza pe geloză-sânge:

- **β-hemolitici** (hemoliză completă): *S. pyogenes* (grup A Lancefield), *S. agalactiae* (grup B).
- **α-hemolitici** (hemoliză parțială, verzuie): *S. pneumoniae*, streptococii viridans.

### S. pyogenes

- Angină, scarlatină, erizipel, impetigo.
- Sechele nesupurative: **reumatismul articular acut** și **glomerulonefrita acută poststreptococică**.

### S. pneumoniae

- Diplococ lanceolat, încapsulat; **sensibil la optochină** (spre deosebire de streptococii viridans).
- Pneumonie, otită medie, sinuzită, meningită.

### S. agalactiae

- Cauză importantă de sepsis și meningită la nou-născut.

> Regula rapidă: catalaza separă stafilococii de streptococi, coagulaza identifică S. aureus, iar optochina separă pneumococul de viridans.`,
    },
  ],
  flashcards: [
    { id: 'mic-f1', front: 'Ce culoare au bacteriile Gram-pozitive la colorația Gram?', back: 'Violet' },
    { id: 'mic-f2', front: 'Ce componentă a bacteriilor Gram-negative are rol de endotoxină?', back: 'Lipopolizaharidul (LPS) din membrana externă' },
    { id: 'mic-f3', front: 'Ce coeficient de sedimentare au ribozomii bacterieni?', back: '70S (subunități 30S și 50S)' },
    { id: 'mic-f4', front: 'Ce genuri bacteriene formează spori?', back: 'Bacillus și Clostridium' },
    { id: 'mic-f5', front: 'Cum sterilizează autoclavul?', back: 'Prin vapori de apă sub presiune (căldură umedă)' },
    { id: 'mic-f6', front: 'Ce test separă stafilococii de streptococi?', back: 'Testul catalazei (stafilococi pozitivi, streptococi negativi)' },
    { id: 'mic-f7', front: 'Ce test identifică Staphylococcus aureus?', back: 'Testul coagulazei (pozitiv)' },
    { id: 'mic-f8', front: 'Ce streptococ este sensibil la optochină?', back: 'Streptococcus pneumoniae' },
    { id: 'mic-f9', front: 'Ce colorație se folosește pentru micobacterii?', back: 'Ziehl-Neelsen (bacili acid-alcoolo-rezistenți)' },
    { id: 'mic-f10', front: 'Mediul de cultură clasic pentru Mycobacterium tuberculosis?', back: 'Löwenstein-Jensen' },
    { id: 'mic-f11', front: 'Ce celule infectează în principal HIV?', back: 'Limfocitele T CD4+' },
    { id: 'mic-f12', front: 'Ce sterol conține membrana celulelor fungice?', back: 'Ergosterol (ținta antifungicelor azolice și a amfotericinei B)' },
  ],
  questions: [
    {
      id: 'mic-q1',
      type: 'single',
      text: 'Lipopolizaharidul (endotoxina) bacterian este localizat în:',
      options: ['Capsula bacteriilor Gram-pozitive', 'Membrana citoplasmatică', 'Membrana externă a bacteriilor Gram-negative', 'Stratul de peptidoglican al bacteriilor Gram-pozitive', 'Peretele micobacteriilor'],
      answer: [2],
      explanation: 'LPS este componenta caracteristică a foiței externe a membranei externe la bacteriile Gram-negative; lipidul A este responsabil de efectele toxice (endotoxina).',
    },
    {
      id: 'mic-q2',
      type: 'multi',
      text: 'Care dintre următoarele sunt caracteristici ale bacteriilor Gram-pozitive?',
      options: ['Lipopolizaharid în perete', 'Acizi teicoici', 'Membrană externă', 'Strat gros de peptidoglican', 'Se colorează în roșu la colorația Gram'],
      answer: [1, 3],
      explanation: 'Gram-pozitivele au peptidoglican gros cu acizi teicoici, care reține complexul cristal violet–iod, deci se colorează în violet. Membrana externă, LPS și colorația roșie la Gram sunt caracteristice bacteriilor Gram-negative.',
    },
    {
      id: 'mic-q3',
      type: 'single',
      text: 'În colorația Gram, etapa de decolorare se realizează cu:',
      options: ['Lugol', 'Fucsină', 'Albastru de metilen', 'Alcool-acetonă', 'Cristal violet'],
      answer: [3],
      explanation: 'Alcool-acetona extrage colorantul din bacteriile Gram-negative; Lugolul este mordant, iar fucsina este colorantul de contrast.',
    },
    {
      id: 'mic-q4',
      type: 'single',
      text: 'Acid-alcoolo-rezistența micobacteriilor se datorează conținutului ridicat al peretelui în:',
      options: ['Acizi teicoici', 'Acizi micolici', 'Lipopolizaharid', 'Chitină', 'Acid dipicolinic'],
      answer: [1],
      explanation: 'Acizii micolici fac peretele foarte hidrofob; odată colorate cu fucsină la cald (Ziehl-Neelsen), micobacteriile nu se decolorează cu acid-alcool. Acidul dipicolinic este caracteristic sporilor.',
    },
    {
      id: 'mic-q5',
      type: 'multi',
      text: 'Care dintre următoarele genuri bacteriene formează spori?',
      options: ['Staphylococcus', 'Bacillus', 'Escherichia', 'Clostridium', 'Streptococcus'],
      answer: [1, 3],
      explanation: 'Sporii sunt forme de rezistență produse de bacili Gram-pozitivi din genurile Bacillus și Clostridium. Stafilococii, streptococii și E. coli nu sporulează.',
    },
    {
      id: 'mic-q6',
      type: 'single',
      text: 'Ribozomii bacterieni au coeficientul de sedimentare:',
      options: ['80S', '60S', '70S', '50S', '40S'],
      answer: [2],
      explanation: 'Ribozomii procariotelor sunt 70S (subunitățile 30S și 50S), diferiți de cei 80S ai eucariotelor – bază pentru toxicitatea selectivă a unor antibiotice.',
    },
    {
      id: 'mic-q7',
      type: 'single',
      text: 'Plasmidele bacteriene sunt:',
      options: [
        'Molecule de ADN extracromozomial, cu replicare autonomă',
        'Incluziuni de rezervă cu polifosfați',
        'Organite de mobilitate',
        'Structuri de aderență la celula gazdă',
        'Molecule de ARN ribozomal',
      ],
      answer: [0],
      explanation: 'Plasmidele sunt molecule de ADN, de obicei circulare, care se replică independent de cromozom și pot purta gene de rezistență la antibiotice sau de virulență.',
    },
    {
      id: 'mic-q8',
      type: 'single',
      text: 'Autoclavul realizează sterilizarea prin:',
      options: ['Aer cald uscat', 'Radiații ultraviolete', 'Oxid de etilenă', 'Filtrare', 'Vapori de apă sub presiune'],
      answer: [4],
      explanation: 'Autoclavarea folosește căldura umedă (vapori saturați sub presiune), care distruge inclusiv sporii bacterieni. Aerul cald uscat este principiul pupinelului (etuvei).',
    },
    {
      id: 'mic-q9',
      type: 'multi',
      text: 'Care dintre următoarele metode realizează sterilizarea (nu doar dezinfecția)?',
      options: ['Pasteurizarea', 'Autoclavarea', 'Sterilizarea cu oxid de etilenă', 'Căldura uscată (pupinel)', 'Radiațiile ionizante'],
      answer: [1, 2, 3, 4],
      explanation: 'Autoclavarea, căldura uscată, radiațiile ionizante și oxidul de etilenă distrug toate formele microbiene, inclusiv sporii. Pasteurizarea nu distruge sporii, deci nu este o metodă de sterilizare.',
    },
    {
      id: 'mic-q10',
      type: 'single',
      text: 'Diferența esențială dintre sterilizare și dezinfecție este că sterilizarea:',
      options: [
        'Se aplică doar pe țesuturi vii',
        'Distruge toate microorganismele, inclusiv sporii',
        'Folosește exclusiv agenți chimici',
        'Distruge doar bacteriile patogene',
        'Se realizează doar la temperatura camerei',
      ],
      answer: [1],
      explanation: 'Sterilizarea înseamnă eliminarea tuturor formelor de viață microbiană, inclusiv sporii, în timp ce dezinfecția reduce microorganismele (în special formele vegetative) de pe obiecte și suprafețe.',
    },
    {
      id: 'mic-q11',
      type: 'single',
      text: 'Testul care diferențiază genul Staphylococcus de genul Streptococcus este:',
      options: ['Testul coagulazei', 'Testul catalazei', 'Sensibilitatea la optochină', 'Testul oxidazei', 'Testul ureazei'],
      answer: [1],
      explanation: 'Stafilococii sunt catalază-pozitivi, iar streptococii catalază-negativi. Coagulaza diferențiază S. aureus de ceilalți stafilococi.',
    },
    {
      id: 'mic-q12',
      type: 'single',
      text: 'Staphylococcus aureus se deosebește de Staphylococcus epidermidis prin:',
      options: ['Testul catalazei', 'Colorația Gram', 'Testul coagulazei', 'Dispoziția în ciorchine', 'Capacitatea de a crește pe geloză-sânge'],
      answer: [2],
      explanation: 'S. aureus este coagulază-pozitiv, iar S. epidermidis coagulază-negativ; ambele sunt coci Gram-pozitivi, catalază-pozitivi, dispuși în grămezi.',
    },
    {
      id: 'mic-q13',
      type: 'multi',
      text: 'Despre Staphylococcus aureus sunt corecte afirmațiile:',
      options: ['Este catalază-pozitiv', 'Se dispune în lanțuri lungi', 'Este coagulază-pozitiv', 'Este coc Gram-negativ', 'Produce frecvent infecții cutanate supurative'],
      answer: [0, 2, 4],
      explanation: 'S. aureus este coc Gram-pozitiv, dispus în ciorchine, catalază- și coagulază-pozitiv, cauză clasică de furuncule și abscese. Dispoziția în lanțuri este caracteristică streptococilor.',
    },
    {
      id: 'mic-q14',
      type: 'single',
      text: 'Streptococul β-hemolitic de grup A Lancefield este:',
      options: ['Streptococcus pneumoniae', 'Streptococcus agalactiae', 'Enterococcus faecalis', 'Streptococcus pyogenes', 'Streptococcus mutans'],
      answer: [3],
      explanation: 'S. pyogenes este streptococul β-hemolitic de grup A; S. agalactiae aparține grupului B, iar S. pneumoniae este α-hemolitic.',
    },
    {
      id: 'mic-q15',
      type: 'single',
      text: 'Sensibilitatea la optochină este utilizată pentru identificarea:',
      options: ['Streptococcus pneumoniae', 'Streptococcus pyogenes', 'Staphylococcus aureus', 'Enterococcus faecalis', 'Neisseria meningitidis'],
      answer: [0],
      explanation: 'Pneumococul este sensibil la optochină, ceea ce îl diferențiază de streptococii viridans, tot α-hemolitici, dar rezistenți.',
    },
    {
      id: 'mic-q16',
      type: 'multi',
      text: 'Care dintre următoarele sunt sechele nesupurative ale infecției cu Streptococcus pyogenes?',
      options: ['Sindromul hemolitic-uremic', 'Reumatismul articular acut', 'Sindromul Guillain-Barré', 'Glomerulonefrita acută poststreptococică', 'Erizipelul'],
      answer: [1, 3],
      explanation: 'Reumatismul articular acut și glomerulonefrita acută sunt complicații imunologice tardive ale infecției streptococice. Erizipelul este o infecție directă (supurativă), iar SHU este asociat clasic cu E. coli enterohemoragic.',
    },
    {
      id: 'mic-q17',
      type: 'single',
      text: 'Neisseria meningitidis este, din punct de vedere morfologic și tinctorial:',
      options: ['Coc Gram-pozitiv în lanțuri', 'Bacil Gram-negativ', 'Diplococ Gram-negativ', 'Coc Gram-pozitiv în ciorchine', 'Bacil acid-alcoolo-rezistent'],
      answer: [2],
      explanation: 'Neisseriile (meningococul și gonococul) sunt diplococi Gram-negativi, cu fețele adiacente turtite (aspect de boabe de cafea).',
    },
    {
      id: 'mic-q18',
      type: 'single',
      text: 'Toxina botulinică produce:',
      options: [
        'Contracturi spastice prin blocarea eliberării neurotransmițătorilor inhibitori',
        'Diaree secretorie prin activarea adenilat ciclazei',
        'Paralizie flască prin blocarea eliberării de acetilcolină',
        'Hemoliză prin formarea de pori în membrană',
        'Necroza mucoasei colonice',
      ],
      answer: [2],
      explanation: 'Toxina botulinică blochează eliberarea acetilcolinei la joncțiunea neuromusculară, rezultând paralizie flască. Contracturile spastice sunt caracteristice toxinei tetanice.',
    },
    {
      id: 'mic-q19',
      type: 'multi',
      text: 'Care dintre următoarele bacterii sunt bacili Gram-negativi?',
      options: ['Pseudomonas aeruginosa', 'Escherichia coli', 'Proteus mirabilis', 'Listeria monocytogenes', 'Klebsiella pneumoniae'],
      answer: [0, 1, 2, 4],
      explanation: 'E. coli, Klebsiella, Proteus și Pseudomonas sunt bacili Gram-negativi. Listeria monocytogenes este bacil Gram-pozitiv.',
    },
    {
      id: 'mic-q20',
      type: 'single',
      text: 'Colita pseudomembranoasă asociată tratamentului cu antibiotice este produsă de:',
      options: ['Clostridium perfringens', 'Clostridium tetani', 'Bacillus cereus', 'Clostridioides (Clostridium) difficile', 'Clostridium botulinum'],
      answer: [3],
      explanation: 'C. difficile se multiplică după distrugerea florei intestinale normale de către antibiotice și produce toxine care determină colita pseudomembranoasă.',
    },
    {
      id: 'mic-q21',
      type: 'single',
      text: 'Mediul de cultură clasic pentru izolarea Mycobacterium tuberculosis este:',
      options: ['Geloza-sânge', 'Mediul Löwenstein-Jensen', 'Mediul Sabouraud', 'Mediul Thayer-Martin', 'Mediul MacConkey'],
      answer: [1],
      explanation: 'Mediul Löwenstein-Jensen (pe bază de ou) este mediul clasic pentru micobacterii. Sabouraud este folosit pentru fungi, iar MacConkey pentru enterobacterii.',
    },
    {
      id: 'mic-q22',
      type: 'multi',
      text: 'Despre Mycobacterium tuberculosis sunt corecte afirmațiile:',
      options: [
        'Are creștere lentă în cultură',
        'Se colorează intens prin metoda Gram',
        'Se evidențiază prin colorația Ziehl-Neelsen',
        'Produce o exotoxină puternică, responsabilă de leziuni',
        'Este bacil acid-alcoolo-rezistent',
      ],
      answer: [0, 2, 4],
      explanation: 'Bacilul Koch crește lent (săptămâni), este acid-alcoolo-rezistent și se evidențiază prin Ziehl-Neelsen; se colorează slab Gram. Leziunile sunt datorate răspunsului imun celular, nu unei exotoxine.',
    },
    {
      id: 'mic-q23',
      type: 'single',
      text: 'Agentul etiologic al leprei este:',
      options: ['Mycobacterium bovis', 'Mycobacterium avium', 'Mycobacterium tuberculosis', 'Mycobacterium leprae', 'Nocardia asteroides'],
      answer: [3],
      explanation: 'Lepra (boala Hansen) este produsă de Mycobacterium leprae, care nu poate fi cultivat pe medii artificiale.',
    },
    {
      id: 'mic-q24',
      type: 'multi',
      text: 'Despre structura și multiplicarea virusurilor sunt corecte afirmațiile:',
      options: [
        'Conțin un singur tip de acid nucleic (ADN sau ARN)',
        'Au ribozomi proprii',
        'Capsida este formată din capsomere',
        'Se multiplică prin diviziune binară',
        'Se replică doar în interiorul celulelor vii',
      ],
      answer: [0, 2, 4],
      explanation: 'Virionul conține fie ADN, fie ARN, protejat de o capsidă proteică alcătuită din capsomere; virusurile sunt paraziți intracelulari obligatorii. Nu au ribozomi și nu se divid binar, ci se asamblează din componente sintetizate de celula gazdă.',
    },
    {
      id: 'mic-q25',
      type: 'multi',
      text: 'Care dintre următoarele virusuri au genom ARN?',
      options: ['Virusul hepatitic C', 'Virusul herpes simplex', 'Virusul gripal', 'Virusul rujeolic', 'HIV'],
      answer: [0, 2, 3, 4],
      explanation: 'Virusurile gripal, rujeolic, hepatitic C și HIV au genom ARN. Virusurile herpetice au genom ADN.',
    },
    {
      id: 'mic-q26',
      type: 'single',
      text: 'Singurul virus hepatitic clasic (A–E) cu genom ADN este:',
      options: ['Virusul hepatitic A', 'Virusul hepatitic C', 'Virusul hepatitic D', 'Virusul hepatitic E', 'Virusul hepatitic B'],
      answer: [4],
      explanation: 'VHB (familia Hepadnaviridae) are genom ADN și se replică printr-un intermediar ARN cu ajutorul unei revers-transcriptaze; celelalte virusuri hepatitice au genom ARN.',
    },
    {
      id: 'mic-q27',
      type: 'single',
      text: 'HIV infectează în principal:',
      options: ['Limfocitele B', 'Limfocitele T CD8+', 'Eritrocitele', 'Limfocitele T CD4+', 'Neutrofilele'],
      answer: [3],
      explanation: 'Glicoproteina gp120 a HIV se leagă de receptorul CD4 (și de coreceptori), infectând limfocitele T helper CD4+, al căror declin duce la imunodepresie.',
    },
    {
      id: 'mic-q28',
      type: 'single',
      text: 'Sterolul caracteristic membranei celulelor fungice, țintă a antifungicelor azolice, este:',
      options: ['Colesterolul', 'Ergosterolul', 'Lanosterolul', 'Sitosterolul', 'Acidul micolic'],
      answer: [1],
      explanation: 'Membrana fungică conține ergosterol în locul colesterolului; azolii inhibă sinteza lui, iar amfotericina B se leagă de el.',
    },
    {
      id: 'mic-q29',
      type: 'multi',
      text: 'Despre fungi sunt corecte afirmațiile:',
      options: [
        'Au ribozomi 70S',
        'Sunt microorganisme eucariote',
        'Peretele celular conține chitină',
        'Membrana celulară conține ergosterol',
        'Sunt sensibili la penicilină',
      ],
      answer: [1, 2, 3],
      explanation: 'Fungii sunt eucariote cu ribozomi 80S, perete cu chitină și membrană cu ergosterol. Nu au peptidoglican, deci nu sunt sensibili la penicilină.',
    },
    {
      id: 'mic-q30',
      type: 'single',
      text: 'Mediul de cultură clasic utilizat pentru izolarea fungilor este:',
      options: ['Mediul Löwenstein-Jensen', 'Geloza-sânge', 'Mediul MacConkey', 'Mediul Thayer-Martin', 'Mediul Sabouraud'],
      answer: [4],
      explanation: 'Mediul Sabouraud (acid, cu glucoză) favorizează creșterea fungilor și inhibă parțial bacteriile. Thayer-Martin este un mediu selectiv pentru Neisseria.',
    },
    {
        "id": "mic-qi1",
        "type": "single",
        "image": {
            "src": "/img/perete-bacterian.svg",
            "alt": "Două tipuri de perete bacterian cu structuri numerotate"
        },
        "text": "În imaginea cu cele două celule, structura marcată cu 3 este caracteristică bacteriilor Gram-negative. Ea este:",
        "options": [
            "Membrana externă, cu lipopolizaharid (LPS)",
            "Stratul gros de peptidoglican",
            "Capsula",
            "Membrana citoplasmatică",
            "Spațiul periplasmic"
        ],
        "answer": [
            0
        ],
        "explanation": "Bacteriile Gram-negative au o membrană externă ce poartă LPS (endotoxina); bacteriile Gram-pozitive nu o au."
    },
    {
        "id": "mic-qi2",
        "type": "multi",
        "image": {
            "src": "/img/perete-bacterian.svg",
            "alt": "Două tipuri de perete bacterian cu structuri numerotate"
        },
        "text": "Care afirmații despre celula 1 (Gram-pozitivă) sunt corecte?",
        "options": [
            "Structura 1 este stratul gros de peptidoglican, care reține colorantul la colorația Gram",
            "Nu are membrană externă",
            "Peretele ei conține lipopolizaharid (LPS)",
            "Structura 2 este membrana citoplasmatică",
            "Peptidoglicanul ei este subțire, ca la celula 2"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Bacteriile Gram-pozitive au peptidoglican gros și nu au membrană externă sau LPS; sub perete se află membrana citoplasmatică. Peptidoglicanul subțire este al Gram-negativelor."
    },
  ],
}
