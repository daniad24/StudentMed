// Fiziologie – conținut demo
export default {
  materials: [],
  flashcards: [
    { id: 'fiz-f1', front: 'Valoarea normală a pH-ului sângelui arterial?', back: '7,35 – 7,45' },
    { id: 'fiz-f2', front: 'Unde este generat în mod normal impulsul cardiac?', back: 'În nodul sinoatrial' },
    { id: 'fiz-f3', front: 'Formula debitului cardiac?', back: 'Frecvența cardiacă × volumul bătaie' },
    { id: 'fiz-f4', front: 'Ce celule produc surfactantul pulmonar?', back: 'Pneumocitele de tip II' },
    { id: 'fiz-f5', front: 'Ce hormon secretă celulele alfa pancreatice?', back: 'Glucagonul' },
    { id: 'fiz-f6', front: 'Ce transportă pompa Na⁺/K⁺-ATP-ază la un ciclu?', back: '3 Na⁺ în afara celulei și 2 K⁺ în celulă' },
    { id: 'fiz-f7', front: 'Ce afirmă legea Frank-Starling?', back: 'Forța contracției crește odată cu volumul telediastolic (umplerea ventriculară)' },
    { id: 'fiz-f8', front: 'Unde acționează în principal ADH?', back: 'Pe tubul colector, crescând reabsorbția de apă' },
    { id: 'fiz-f9', front: 'Unde se secretă în principal eritropoietina la adult?', back: 'În rinichi' },
    { id: 'fiz-f10', front: 'Care sunt factorii de coagulare dependenți de vitamina K?', back: 'II, VII, IX și X' },
    { id: 'fiz-f11', front: 'Ce celule gastrice secretă factorul intrinsec?', back: 'Celulele parietale (oxintice)' },
    { id: 'fiz-f12', front: 'Sub ce formă se transportă majoritatea CO₂ în sânge?', back: 'Sub formă de bicarbonat (HCO₃⁻)' },
  ],
  questions: [
    // Fiziologie celulară și potențial de acțiune
    {
      id: 'fiz-q1',
      type: 'single',
      text: 'Potențialul de repaus al neuronului este de aproximativ:',
      options: ['+30 mV', '0 mV', '−20 mV', '−70 mV', '+60 mV'],
      answer: [3],
      explanation: 'Potențialul de repaus neuronal este de circa −70 mV, determinat în principal de permeabilitatea membranei pentru K⁺. Valorile pozitive (+30 mV) corespund vârfului potențialului de acțiune.',
    },
    {
      id: 'fiz-q2',
      type: 'single',
      text: 'La fiecare ciclu, pompa Na⁺/K⁺-ATP-ază transportă:',
      options: [
        '2 Na⁺ în afara celulei și 3 K⁺ în celulă',
        '3 Na⁺ în afara celulei și 2 K⁺ în celulă',
        '3 Na⁺ în celulă și 2 K⁺ în afara celulei',
        '1 Na⁺ și 1 K⁺ în același sens',
        '3 Na⁺ în afara celulei și 3 K⁺ în celulă',
      ],
      answer: [1],
      explanation: 'Pompa scoate 3 Na⁺ și introduce 2 K⁺ cu consum de ATP, fiind electrogenică. Ea menține gradienții ionici necesari potențialului de repaus.',
    },
    {
      id: 'fiz-q3',
      type: 'single',
      text: 'Faza de depolarizare a potențialului de acțiune neuronal se datorează în principal:',
      options: [
        'Ieșirii de K⁺ din celulă',
        'Intrării de Cl⁻ în celulă',
        'Intrării de Na⁺ prin canale voltaj-dependente',
        'Activității pompei Na⁺/K⁺-ATP-ază',
        'Intrării de Ca²⁺ prin canale de tip L',
      ],
      answer: [2],
      explanation: 'Deschiderea rapidă a canalelor de Na⁺ voltaj-dependente produce influxul de Na⁺ și depolarizarea. Ieșirea de K⁺ este responsabilă de repolarizare.',
    },
    {
      id: 'fiz-q4',
      type: 'multi',
      text: 'Despre perioada refractară absolută sunt adevărate:',
      options: [
        'Un stimul suprapragal poate declanșa un nou potențial de acțiune',
        'Niciun stimul, oricât de intens, nu poate declanșa un nou potențial de acțiune',
        'Se datorează inactivării canalelor de Na⁺ voltaj-dependente',
        'Limitează frecvența maximă de descărcare a fibrei',
        'Permite tetanizarea miocardului ventricular',
      ],
      answer: [1, 2, 3],
      explanation: 'În perioada refractară absolută canalele de Na⁺ sunt inactivate, deci niciun stimul nu produce un nou potențial, ceea ce limitează frecvența de descărcare. Răspunsul la stimuli suprapragali caracterizează perioada refractară relativă, iar perioada refractară lungă a miocardului împiedică tetanizarea.',
    },
    {
      id: 'fiz-q5',
      type: 'multi',
      text: 'Cresc viteza de conducere a impulsului nervos:',
      options: [
        'Creșterea diametrului axonului',
        'Prezența tecii de mielină',
        'Reducerea diametrului axonului',
        'Demielinizarea',
        'Răcirea locală a nervului',
      ],
      answer: [0, 1],
      explanation: 'Diametrul mare scade rezistența internă, iar mielina permite conducerea saltatorie între nodurile Ranvier. Demielinizarea și răcirea încetinesc conducerea.',
    },
    {
      id: 'fiz-q6',
      type: 'single',
      text: 'În mușchiul scheletic, Ca²⁺ inițiază contracția prin legarea de:',
      options: ['Tropomiozină', 'Troponina C', 'Miozină', 'Actină', 'Calmodulină'],
      answer: [1],
      explanation: 'Ca²⁺ eliberat din reticulul sarcoplasmic se leagă de troponina C, care deplasează tropomiozina și descoperă situsurile de legare ale actinei. Calmodulina are acest rol în mușchiul neted.',
    },
    // Cardiovascular
    {
      id: 'fiz-q7',
      type: 'single',
      text: 'Pacemakerul normal al inimii este:',
      options: ['Nodul atrioventricular', 'Fasciculul His', 'Fibrele Purkinje', 'Miocardul ventricular', 'Nodul sinoatrial'],
      answer: [4],
      explanation: 'Nodul sinoatrial are cea mai mare frecvență de depolarizare spontană și impune ritmul inimii. Nodul AV și sistemul His-Purkinje sunt pacemakeri secundari, cu frecvență mai mică.',
    },
    {
      id: 'fiz-q8',
      type: 'single',
      text: 'Faza 0 a potențialului de acțiune al cardiomiocitului ventricular se datorează influxului de:',
      options: ['Ca²⁺', 'K⁺', 'Na⁺', 'Cl⁻', 'Mg²⁺'],
      answer: [2],
      explanation: 'Depolarizarea rapidă (faza 0) a cardiomiocitului contractil se datorează influxului de Na⁺ prin canale rapide. În celulele nodului sinoatrial, faza 0 este dată de Ca²⁺.',
    },
    {
      id: 'fiz-q9',
      type: 'single',
      text: 'Platoul (faza 2) al potențialului de acțiune ventricular este menținut în principal de:',
      options: [
        'Influxul de Na⁺ prin canale rapide',
        'Influxul de Ca²⁺ prin canale de tip L',
        'Efluxul masiv de K⁺ neechilibrat',
        'Influxul de Cl⁻',
        'Inactivarea completă a tuturor canalelor ionice',
      ],
      answer: [1],
      explanation: 'Influxul lent de Ca²⁺ prin canalele de tip L echilibrează efluxul de K⁺ și menține platoul. Acest Ca²⁺ declanșează și eliberarea de Ca²⁺ din reticulul sarcoplasmic.',
    },
    {
      id: 'fiz-q10',
      type: 'single',
      text: 'Zgomotul cardiac I corespunde în principal închiderii valvelor:',
      options: ['Semilunare', 'Aortică și pulmonară', 'Atrioventriculare', 'Aortică și mitrală', 'Pulmonară și tricuspidă'],
      answer: [2],
      explanation: 'Zgomotul I marchează începutul sistolei ventriculare și se datorează închiderii valvelor mitrală și tricuspidă. Închiderea valvelor semilunare produce zgomotul II.',
    },
    {
      id: 'fiz-q11',
      type: 'multi',
      text: 'Debitul cardiac crește prin:',
      options: [
        'Stimularea simpatică',
        'Creșterea întoarcerii venoase',
        'Creșterea frecvenței cardiace',
        'Creșterea volumului bătaie',
        'Stimularea vagală',
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Debitul cardiac este produsul dintre frecvența cardiacă și volumul bătaie; simpaticul le crește pe amândouă, iar creșterea întoarcerii venoase mărește volumul bătaie prin mecanismul Frank–Starling. Stimularea vagală reduce frecvența și debitul.',
    },
    {
      id: 'fiz-q12',
      type: 'single',
      text: 'Conform legii Frank-Starling, forța contracției ventriculare crește odată cu:',
      options: [
        'Scăderea volumului telediastolic',
        'Creșterea volumului telediastolic',
        'Creșterea postsarcinii',
        'Scăderea frecvenței cardiace',
        'Scăderea întoarcerii venoase',
      ],
      answer: [1],
      explanation: 'O umplere mai mare întinde fibrele miocardice spre lungimea optimă, crescând forța contracției. Astfel inima ejectează sângele primit prin întoarcerea venoasă.',
    },
    {
      id: 'fiz-q13',
      type: 'single',
      text: 'Creșterea bruscă a tensiunii arteriale stimulează baroreceptorii sinocarotidieni, cu efect reflex de:',
      options: [
        'Tahicardie și vasoconstricție',
        'Tahicardie și vasodilatație',
        'Creșterea secreției de catecolamine',
        'Bradicardie și vasodilatație periferică',
        'Bradicardie și vasoconstricție',
      ],
      answer: [3],
      explanation: 'Reflexul baroreceptor crește tonusul vagal și scade tonusul simpatic, producând bradicardie și vasodilatație. Astfel tensiunea arterială revine spre normal.',
    },
    {
      id: 'fiz-q14',
      type: 'single',
      text: 'Principalul sediu al rezistenței vasculare periferice îl reprezintă:',
      options: ['Aorta', 'Arterele mari elastice', 'Arteriolele', 'Capilarele', 'Venele'],
      answer: [2],
      explanation: 'Arteriolele au perete muscular bogat și își pot modifica mult diametrul, determinând rezistența periferică. Pe ele se înregistrează cea mai mare scădere de presiune din circulație.',
    },
    // Respirator
    {
      id: 'fiz-q15',
      type: 'single',
      text: 'Surfactantul pulmonar este produs de:',
      options: ['Pneumocitele de tip I', 'Macrofagele alveolare', 'Pneumocitele de tip II', 'Celulele caliciforme', 'Celulele ciliate bronșice'],
      answer: [2],
      explanation: 'Pneumocitele de tip II sintetizează surfactantul, bogat în fosfolipide. Pneumocitele de tip I formează suprafața de schimb gazos.',
    },
    {
      id: 'fiz-q16',
      type: 'multi',
      text: 'Despre surfactantul pulmonar sunt adevărate:',
      options: [
        'Crește tensiunea superficială alveolară',
        'Este secretat de pneumocitele de tip I',
        'Previne colabarea alveolelor în expir',
        'Scade tensiunea superficială alveolară',
        'Scade complianța pulmonară',
      ],
      answer: [2, 3],
      explanation: 'Surfactantul, secretat de pneumocitele de tip II, reduce tensiunea superficială, stabilizează alveolele mici și crește complianța pulmonară. Deficitul său la prematuri produce sindromul de detresă respiratorie.',
    },
    {
      id: 'fiz-q17',
      type: 'single',
      text: 'Principalul stimul pentru chemoreceptorii centrali bulbari este:',
      options: [
        'Scăderea PaO₂',
        'Creșterea PaO₂',
        'Scăderea hematocritului',
        'Creșterea PaCO₂ (prin H⁺ din lichidul cefalorahidian)',
        'Scăderea temperaturii corporale',
      ],
      answer: [3],
      explanation: 'CO₂ difuzează în LCR, unde generează H⁺ care stimulează chemoreceptorii centrali. Hipoxemia este sesizată de chemoreceptorii periferici (glomusurile carotidiene și aortice).',
    },
    {
      id: 'fiz-q18',
      type: 'multi',
      text: 'Deplasează spre dreapta curba de disociere a oxihemoglobinei:',
      options: [
        'Acidoza',
        'Alcaloza',
        'Creșterea temperaturii',
        'Creșterea 2,3-difosfogliceratului',
        'Creșterea pCO₂',
      ],
      answer: [0, 2, 3, 4],
      explanation: 'Acidoza, hipertermia, creșterea pCO₂ și a 2,3-DPG scad afinitatea hemoglobinei pentru O₂, favorizând cedarea lui în țesuturi. Alcaloza deplasează curba spre stânga.',
    },
    {
      id: 'fiz-q19',
      type: 'single',
      text: 'Cea mai mare parte a CO₂ este transportată în sânge sub formă de:',
      options: ['CO₂ dizolvat fizic', 'Carbaminohemoglobină', 'Bicarbonat', 'Carboxihemoglobină', 'Acid carbonic nedisociat'],
      answer: [2],
      explanation: 'Majoritatea CO₂ este transformată în eritrocit, sub acțiunea anhidrazei carbonice, în bicarbonat. Carboxihemoglobina este compusul hemoglobinei cu monoxidul de carbon, nu cu CO₂.',
    },
    // Renal
    {
      id: 'fiz-q20',
      type: 'single',
      text: 'ADH (vasopresina) acționează în principal la nivelul:',
      options: ['Glomerulului', 'Tubului contort proximal', 'Capsulei Bowman', 'Tubului colector', 'Ramurii ascendente a ansei Henle'],
      answer: [3],
      explanation: 'ADH inserează aquaporine (AQP2) în membrana celulelor tubului colector, crescând reabsorbția de apă. Rezultatul este o urină concentrată.',
    },
    {
      id: 'fiz-q21',
      type: 'single',
      text: 'Aldosteronul determină la nivel renal:',
      options: [
        'Secreție de Na⁺ și reabsorbție de K⁺',
        'Reabsorbție de Na⁺ și secreție de K⁺',
        'Reabsorbție de glucoză',
        'Creșterea filtrării glomerulare',
        'Reabsorbție de apă fără sodiu',
      ],
      answer: [1],
      explanation: 'Aldosteronul acționează pe tubul distal și colector, crescând reabsorbția de Na⁺ și secreția de K⁺ (și H⁺). Excesul său produce hipopotasemie.',
    },
    {
      id: 'fiz-q22',
      type: 'single',
      text: 'În condiții normale, glucoza filtrată este reabsorbită aproape în totalitate în:',
      options: ['Tubul contort proximal', 'Ansa Henle', 'Tubul contort distal', 'Tubul colector', 'Bazinet'],
      answer: [0],
      explanation: 'Glucoza este reabsorbită în tubul proximal prin cotransport cu Na⁺ (SGLT). Glicozuria apare doar când este depășită capacitatea maximă de transport.',
    },
    {
      id: 'fiz-q23',
      type: 'multi',
      text: 'Despre sistemul renină–angiotensină–aldosteron sunt adevărate:',
      options: [
        'Renina este secretată de aparatul juxtaglomerular',
        'Enzima de conversie transformă angiotensinogenul în angiotensină I',
        'Angiotensina II produce vasoconstricție',
        'Angiotensina II stimulează secreția de aldosteron',
        'Secreția de renină crește la creșterea presiunii de perfuzie renală',
      ],
      answer: [0, 2, 3],
      explanation: 'Renina, secretată de aparatul juxtaglomerular la scăderea perfuziei renale, transformă angiotensinogenul în angiotensină I. Enzima de conversie formează angiotensina II, vasoconstrictor care stimulează secreția de aldosteron.',
    },
    // Digestiv
    {
      id: 'fiz-q24',
      type: 'multi',
      text: 'Celulele parietale (oxintice) gastrice secretă:',
      options: ['Acid clorhidric', 'Pepsinogen', 'Factor intrinsec', 'Gastrină', 'Somatostatină'],
      answer: [0, 2],
      explanation: 'Celulele parietale secretă HCl și factorul intrinsec, necesar absorbției vitaminei B12 în ileon. Pepsinogenul provine din celulele principale, gastrina din celulele G, iar somatostatina din celulele D.',
    },
    {
      id: 'fiz-q25',
      type: 'multi',
      text: 'Despre colecistokinină (CCK) sunt adevărate:',
      options: [
        'Este secretată de celulele I din mucoasa duodenală',
        'Este secretată de celulele G antrale',
        'Stimulează contracția colecistului',
        'Stimulează secreția de enzime pancreatice',
        'Accelerează golirea gastrică',
      ],
      answer: [0, 2, 3],
      explanation: 'CCK este eliberată de celulele I duodenale ca răspuns la lipide și proteine, contractă colecistul și stimulează secreția enzimatică pancreatică. Ea încetinește golirea gastrică.',
    },
    // Endocrin
    {
      id: 'fiz-q26',
      type: 'single',
      text: 'Celulele alfa ale insulelor Langerhans secretă:',
      options: ['Insulină', 'Somatostatină', 'Polipeptid pancreatic', 'Glucagon', 'Gastrină'],
      answer: [3],
      explanation: 'Celulele alfa secretă glucagon, hormon hiperglicemiant. Celulele beta secretă insulină, iar celulele delta somatostatină.',
    },
    {
      id: 'fiz-q27',
      type: 'multi',
      text: 'Efectele insulinei includ:',
      options: [
        'Stimularea captării glucozei în mușchi și țesut adipos',
        'Stimularea gluconeogenezei hepatice',
        'Stimularea glicogenogenezei',
        'Stimularea lipolizei',
        'Stimularea lipogenezei',
      ],
      answer: [0, 2, 4],
      explanation: 'Insulina este un hormon anabolic: crește captarea glucozei prin GLUT4, depozitarea ei ca glicogen și sinteza de lipide. Gluconeogeneza și lipoliza sunt inhibate de insulină.',
    },
    {
      id: 'fiz-q28',
      type: 'single',
      text: 'Creșterea concentrației plasmatice a hormonilor tiroidieni (T3, T4) determină asupra secreției de TSH:',
      options: [
        'Creștere, prin feedback pozitiv',
        'Nicio modificare',
        'Scădere, prin feedback negativ',
        'Creștere, prin stimularea TRH',
        'Oscilații fără legătură cu nivelul T3/T4',
      ],
      answer: [2],
      explanation: 'Hormonii tiroidieni inhibă secreția de TSH hipofizar (și de TRH hipotalamic) prin feedback negativ. De aceea în hipertiroidismul primar TSH-ul este scăzut.',
    },
    // Sânge
    {
      id: 'fiz-q29',
      type: 'single',
      text: 'pH-ul normal al sângelui arterial este:',
      options: ['7,00–7,20', '6,80–7,00', '7,50–7,70', '7,35–7,45', '7,20–7,30'],
      answer: [3],
      explanation: 'pH-ul arterial normal este 7,35–7,45. Sub 7,35 vorbim de acidemie, peste 7,45 de alcalemie.',
    },
    {
      id: 'fiz-q30',
      type: 'multi',
      text: 'Sunt factori de coagulare dependenți de vitamina K:',
      options: [
        'Factorul IX',
        'Factorul VIII',
        'Factorul VII',
        'Factorul X',
        'Factorul II',
      ],
      answer: [0, 2, 3, 4],
      explanation: 'Factorii II, VII, IX și X necesită vitamina K pentru gama-carboxilare în ficat. Factorul VIII nu depinde de vitamina K.',
    },
    {
        "id": "fiz-qi1",
        "type": "single",
        "image": {
            "src": "/img/curba-oxihemoglobina.svg",
            "alt": "Trei curbe de disociere a oxihemoglobinei"
        },
        "text": "Pe grafic, curba B este curba normală. Care afirmație descrie corect curba C?",
        "options": [
        "Afinitate crescută a hemoglobinei pentru oxigen",
        "Curba este tipică pentru hemoglobina fetală",
        "Hemoglobină complet saturată la orice presiune a oxigenului",
        "Afinitate scăzută a hemoglobinei pentru oxigen, cu cedare mai ușoară la țesuturi",
        "Reprezintă o scădere a capacității de transport a oxigenului"
    ],
        "answer": [3],
        "explanation": "Deplasarea la dreapta (C) înseamnă afinitate mai mică și cedare mai ușoară a O₂ la țesuturi; deplasarea la stânga (A) crește afinitatea."
    },
    {
        "id": "fiz-qi2",
        "type": "multi",
        "image": {
            "src": "/img/curba-oxihemoglobina.svg",
            "alt": "Trei curbe de disociere a oxihemoglobinei"
        },
        "text": "Curba A este deplasată la stânga față de curba normală (B). Care afirmații sunt corecte?",
        "options": [
        "Afinitatea hemoglobinei pentru oxigen este crescută",
        "P50 este mai mic decât cel normal",
        "Poate apărea în alcaloză sau în prezența hemoglobinei fetale",
        "Cedarea oxigenului la țesuturi este facilitată",
        "Este deplasarea produsă de acidoză și febră"
    ],
        "answer": [0,1,2],
        "explanation": "Deplasarea la stânga înseamnă afinitate mai mare și P50 mai mic; apare în alcaloză, cu HbF, și face cedarea mai dificilă. Acidoza și febra deplasează la dreapta."
    },
    {
        "id": "fiz-qi3",
        "type": "single",
        "image": {
            "src": "/img/potential-actiune-ventricular.svg",
            "alt": "Potențial de acțiune ventricular cu faze numerotate"
        },
        "text": "În potențialul de acțiune al miocitului ventricular din imagine, ce se petrece în faza marcată cu 0?",
        "options": [
        "Intrare rapidă de Na⁺ în celulă, cu depolarizare rapidă",
        "Ieșire de K⁺, cu repolarizare finală",
        "Platou prin intrare de Ca²⁺",
        "Potențial de repaus, menținut de pompa Na⁺/K⁺",
        "Intrare de Cl⁻ în celulă"
    ],
        "answer": [0],
        "explanation": "Faza 0 este depolarizarea rapidă prin deschiderea canalelor de Na⁺ voltaj-dependente."
    },
    {
        "id": "fiz-qi4",
        "type": "multi",
        "image": {
            "src": "/img/potential-actiune-ventricular.svg",
            "alt": "Potențial de acțiune ventricular cu faze numerotate"
        },
        "text": "Despre faza marcată cu 2 (platoul) a potențialului de acțiune ventricular sunt corecte:",
        "options": [
        "Lipsește la celulele miocardice ventriculare",
        "Se datorează intrării rapide de Na⁺",
        "Contribuie la perioada refractară lungă a miocardului",
        "Este echilibrată de o ieșire de K⁺",
        "Se datorează în principal intrării de Ca²⁺ prin canale de tip L"
    ],
        "answer": [2,3,4],
        "explanation": "Platoul apare când intrarea de Ca²⁺ echilibrează ieșirea de K⁺ și prelungește perioada refractară, protejând inima de tetanos."
    },
    {
        "id": "fiz-qi5",
        "type": "single",
        "image": {
            "src": "/img/potential-actiune-neuron.svg",
            "alt": "Potențial de acțiune neuronal cu porțiuni marcate A–D"
        },
        "text": "În potențialul de acțiune neuronal din imagine, ce se petrece în porțiunea marcată cu B (panta ascendentă)?",
        "options": [
        "Ieșire de K⁺ prin canale voltaj-dependente",
        "Intrare masivă de Na⁺ prin canale voltaj-dependente",
        "Intrare de Cl⁻",
        "Ieșire de Ca²⁺",
        "Activarea pompei Na⁺/K⁺ ca mecanism principal"
    ],
        "answer": [1],
        "explanation": "Panta ascendentă este depolarizarea: după atingerea pragului se deschid canalele de Na⁺ voltaj-dependente și Na⁺ intră în celulă."
    },
    {
        "id": "fiz-qi6",
        "type": "single",
        "image": {
            "src": "/img/potential-actiune-neuron.svg",
            "alt": "Potențial de acțiune neuronal cu porțiuni marcate A–D"
        },
        "text": "Care este explicația principală a porțiunii marcate cu D (hiperpolarizarea de după potențial)?",
        "options": [
        "Pompa Na⁺/K⁺ se oprește",
        "Se închid toate canalele de K⁺ imediat",
        "Canalele de Na⁺ se redeschid",
        "Canalele de K⁺ rămân deschise o scurtă perioadă după repolarizare",
        "Intră Ca²⁺ în celulă"
    ],
        "answer": [3],
        "explanation": "Canalele de K⁺ voltaj-dependente se închid lent, așa că ieșirea de K⁺ continuă și potențialul coboară sub nivelul de repaus."
    },
    {
        "id": "fiz-qi7",
        "type": "single",
        "image": {
            "src": "/img/bucla-presiune-volum.svg",
            "alt": "Bucla presiune–volum a ventriculului stâng"
        },
        "text": "Pe bucla presiune–volum a ventriculului stâng, contracția izovolumică (ambele valve închise, presiunea crește) corespunde segmentului:",
        "options": [
            "Segmentul A",
            "Segmentul B",
            "Segmentul C",
            "Segmentul D",
            "Nu apare pe bucla presiune–volum"
        ],
        "answer": [
            1
        ],
        "explanation": "În contracția izovolumică volumul rămâne constant, iar presiunea crește: segment vertical, în partea dreaptă a buclei (B)."
    },
    {
        "id": "fiz-qi8",
        "type": "multi",
        "image": {
            "src": "/img/bucla-presiune-volum.svg",
            "alt": "Bucla presiune–volum a ventriculului stâng"
        },
        "text": "Despre segmentul C al buclei sunt corecte:",
        "options": [
        "Valva aortică este deschisă",
        "Volumul ventricular scade",
        "Sângele este ejectat în aortă",
        "Valva mitrală este deschisă",
        "Volumul ventricular crește"
    ],
        "answer": [0,1,2],
        "explanation": "Segmentul C este ejecția: valva aortică este deschisă, ventriculul se golește parțial, iar valva mitrală este închisă."
    },
    {
        "id": "fiz-qi9",
        "type": "single",
        "image": {
            "src": "/img/bucla-presiune-volum.svg",
            "alt": "Bucla presiune–volum a ventriculului stâng"
        },
        "text": "Segmentul D al buclei reprezintă:",
        "options": [
        "Sistola atrială",
        "Contracția izovolumică",
        "Relaxarea izovolumică, cu valvele mitrală și aortică închise",
        "Umplerea ventriculară rapidă",
        "Ejecția ventriculară"
    ],
        "answer": [2],
        "explanation": "După închiderea valvei aortice, presiunea scade la volum constant, deoarece ambele valve sunt închise."
    },
    {
        "id": "fiz-qi10",
        "type": "single",
        "image": {
            "src": "/img/bucla-presiune-volum.svg",
            "alt": "Bucla presiune–volum a ventriculului stâng"
        },
        "text": "Distanța orizontală dintre VTS și VTD pe bucla presiune–volum reprezintă:",
        "options": [
        "Rezistența vasculară periferică",
        "Debitul cardiac pe minut",
        "Frecvența cardiacă",
        "Presiunea pulsată",
        "Volumul bătaie"
    ],
        "answer": [4],
        "explanation": "Lățimea buclei este diferența dintre volumul telediastolic și cel telesistolic, adică volumul de sânge ejectat la o bătaie."
    },
    {
        "id": "fiz-qi11",
        "type": "single",
        "image": {
            "src": "/img/raas.svg",
            "alt": "Schema sistemului renină–angiotensină–aldosteron"
        },
        "text": "Enzima care acționează la nivelul marcat cu A în schemă, secretată de celulele juxtaglomerulare renale, este:",
        "options": [
        "Aldosteronul",
        "Enzima de conversie a angiotensinei",
        "Hormonul antidiuretic",
        "Renina",
        "Angiotensinogenul"
    ],
        "answer": [3],
        "explanation": "Renina transformă angiotensinogenul în angiotensină I; este secretată de celulele juxtaglomerulare renale."
    },
    {
        "id": "fiz-qi12",
        "type": "single",
        "image": {
            "src": "/img/ecg-normal-marcat.svg",
            "alt": "ECG normal cu componente marcate de la 1 la 6"
        },
        "text": "Pe ECG-ul din imagine, ce se petrece în ventricule în timpul segmentului marcat cu 4 (între QRS și unda T)?",
        "options": [
        "Se repolarizează rapid",
        "Sunt depolarizate, în faza de platou a potențialului de acțiune",
        "Se depolarizează atriile",
        "Sunt în repaus electric, repolarizate complet",
        "Se depolarizează rapid"
    ],
        "answer": [1],
        "explanation": "Segmentul ST corespunde platoului potențialului de acțiune ventricular, când miocitele sunt depolarizate și nu există diferențe mari de potențial între ele."
    },
  ],
}
