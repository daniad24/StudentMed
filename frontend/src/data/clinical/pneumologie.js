// Pneumologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'pne-c1',
      title: 'Tuse cu febră și junghi toracic',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 55 de ani se prezintă pentru febră cu frison, tuse cu expectorație ruginie și durere toracică dreaptă care se accentuează la inspir profund, apărute brusc de 2 zile. Este fumător și consumă alcool. Nu a fost internat recent și nu a primit antibiotice în ultimele luni.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debut (brusc sau insidios), febră, frison, caracterul expectorației\n• Durerea toracică: caracter pleuritic (accentuată de respirație și tuse)\n• Dispnee, confuzie (semne de gravitate)\n• Context: spitalizare sau antibiotice recente, aspirație, călătorii, contact cu bolnavi\n• Comorbidități: BPOC, diabet, insuficiență cardiacă, alcoolism, imunosupresie; vaccinări',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Febră, tahipnee, tahicardie, eventual herpes labial\n• Sindrom de condensare pulmonară în baza dreaptă: ampliații diminuate, freamăt pectoral accentuat, matitate\n• Auscultație: raluri crepitante, suflu tubar, eventual frecătură pleurală\n• Semne de gravitate: confuzie, hipotensiune, saturație scăzută, frecvență respiratorie crescută',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Radiografie toracică (față și profil): opacitate de tip alveolar, sistematizată, cu bronhogramă aerică\n• Hemoleucogramă: leucocitoză cu neutrofilie; proteina C reactivă crescută\n• Pulsoximetrie, gazometrie la pacientul sever\n• Uree, creatinină, glicemie, ionogramă\n• Hemoculturi și examenul sputei la pacientul internat',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: pneumonie comunitară lobară (tipic pneumococică).\nDiagnostic diferențial:\n• Infarct pulmonar prin embolie pulmonară\n• Neoplasm bronhopulmonar cu pneumonie retrostenotică (opacitate care nu se remite)\n• Tuberculoză pulmonară\n• Pleurezie, edem pulmonar, atelectazie',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Evaluarea severității cu un scor (de exemplu CURB-65) pentru decizia de tratament ambulator sau internare\n• Antibioterapie empirică inițiată precoce, adaptată după severitate și factori de risc, apoi după antibiogramă\n• Oxigenoterapie la hipoxemie, hidratare, antitermice\n• Reevaluare clinică după 48–72 de ore; control radiologic după vindecare la fumători\n• Prevenție: vaccinare antipneumococică și antigripală, oprirea fumatului',
        },
      ],
      takeaways: [
        'Febră + junghi + expectorație ruginie + sindrom de condensare = pneumonie lobară.',
        'Severitatea se evaluează cu un scor clinic, care decide locul tratamentului.',
        'La fumător, opacitatea trebuie urmărită până la dispariție (neoplasm ascuns).',
        'Lipsa ameliorării la 72 de ore impune reevaluarea.',
      ],
    },
    {
      id: 'pne-c2',
      title: 'Dispnee paroxistică cu wheezing',
      setting: 'Camera de gardă',
      presentation:
        'Femeie de 24 de ani se prezintă pentru dispnee cu respirație șuierătoare și tuse seacă, apărute în seara aceasta după ce a făcut curățenie prin casă. Are rinită alergică și a mai avut episoade asemănătoare, mai ușoare, ameliorate de un spray primit de la medic. Nu își folosește regulat tratamentul.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, factorul declanșator (alergeni, infecții, efort, aer rece, iritanți)\n• Severitatea: poate vorbi în propoziții, a folosit bronhodilatatorul și cât de des\n• Istoric de crize severe, internări în terapie intensivă, intubație\n• Tratamentul de fond și aderența, tehnica inhalatorie\n• Atopie personală și familială, simptome nocturne între crize',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Poziția (șezândă), capacitatea de a vorbi, tirajul, folosirea mușchilor accesori\n• Frecvența respiratorie și cardiacă, saturația\n• Auscultație: expir prelungit, raluri sibilante difuze bilaterale\n• Semne de criză amenințătoare de viață: torace „mut” la auscultație, cianoză, epuizare, confuzie, bradicardie',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Pulsoximetrie; gazometrie în criza severă (o PaCO2 normală sau crescută la un pacient tahipneic este semn de epuizare)\n• Debitul expirator de vârf (PEF), comparat cu valoarea personală sau prezisă\n• Radiografie toracică doar la suspiciune de complicații (pneumotorax, pneumonie)\n• Ulterior, în afara crizei: spirometrie cu test de bronhodilatație, evaluare alergologică',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: exacerbare de astm bronșic alergic, declanșată de expunerea la praf.\nDiagnostic diferențial:\n• Disfuncție de corzi vocale, corp străin (stridor, wheezing localizat)\n• Anafilaxie (urticarie, hipotensiune)\n• Pneumotorax\n• La vârstnici: BPOC, insuficiență cardiacă („astm cardiac”)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Bronhodilatator beta2-agonist cu durată scurtă, inhalator sau nebulizat, repetat\n• Corticoterapie sistemică precoce, oxigen la hipoxemie\n• Reevaluare frecventă: simptome, saturație, PEF; criza amenințătoare de viață se tratează în terapie intensivă\n• La externare: tratament de fond cu corticosteroid inhalator, plan de acțiune scris, verificarea tehnicii inhalatorii, evitarea alergenilor',
        },
      ],
      takeaways: [
        'Wheezingul reversibil la un tânăr atopic sugerează astmul.',
        'Toracele „mut” este semn de gravitate, nu de ameliorare.',
        'Corticosteroidul inhalator este baza tratamentului de fond.',
        'Multe crize se datorează aderenței și tehnicii inhalatorii deficitare.',
      ],
    },
    {
      id: 'pne-c3',
      title: 'Hemoptizie și scădere ponderală',
      setting: 'Secție de pneumologie',
      presentation:
        'Bărbat de 38 de ani, fără adăpost stabil, se internează pentru tuse productivă de peste 2 luni, cu striuri de sânge în spută în ultima săptămână. Acuză febră moderată seara, transpirații nocturne și o scădere ponderală importantă. Un membru al familiei a fost tratat pentru o boală pulmonară cu un an în urmă.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Confirmă că sângele provine din căile respiratorii (nu epistaxis sau hematemeză): sânge roșu, aerat, eliminat prin tuse\n• Cantitatea de sânge (hemoptizie mică sau masivă)\n• Durata tusei, febră, transpirații nocturne, scădere ponderală\n• Contact cu bolnavi de tuberculoză, tratamente antituberculoase anterioare\n• Factori de risc: condiții precare, alcool, fumat, HIV, diabet, imunosupresie',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Stare de nutriție precară, paloare, febră\n• Examenul pulmonar poate fi sărac; uneori raluri crepitante subclaviculare sau suflu cavitar\n• Adenopatii periferice\n• Semne de gravitate ale hemoptiziei: tahicardie, hipotensiune, dispnee, desaturare',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Radiografie toracică: infiltrate în lobii superiori, cu caverne\n• Examenul sputei (cel puțin două probe): microscopie pentru bacili acid-alcoolo-rezistenți, cultură, teste moleculare de detecție și rezistență\n• Hemoleucogramă, VSH, teste hepatice și renale (înainte de tratament), testare HIV\n• CT toracic și bronhoscopie dacă diagnosticul rămâne neclar sau se suspectează neoplasm',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: tuberculoză pulmonară cavitară.\nDiagnostic diferențial al hemoptiziei:\n• Neoplasm bronhopulmonar\n• Bronșiectazii\n• Pneumonie necrotizantă, abces pulmonar\n• Embolie pulmonară, stenoză mitrală\n• Pseudohemoptizie (sângerare nazofaringiană sau digestivă)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Izolare respiratorie până la negativarea frotiului și declararea obligatorie a cazului\n• Tratament antituberculos asociat (mai multe medicamente), de lungă durată, cu fază intensivă și fază de continuare, sub observație directă\n• Monitorizare: examene de spută de control, toleranță hepatică, aderență\n• Ancheta epidemiologică și investigarea contacților\n• Hemoptizia masivă: poziție pe partea afectată, protecția căilor aeriene, bronhoscopie sau embolizare',
        },
      ],
      takeaways: [
        'Tusea de peste 2–3 săptămâni cu febră și scădere ponderală impune excluderea tuberculozei.',
        'Diagnosticul de certitudine este bacteriologic.',
        'Tratamentul se face cu asociere de medicamente, sub observație directă.',
        'Investigarea contacților este parte a tratamentului.',
      ],
    },
    {
      id: 'pne-c4',
      title: 'Somnolență diurnă și sforăit',
      setting: 'Cabinet de medicină de familie',
      presentation:
        'Bărbat de 52 de ani, supraponderal, cu hipertensiune arterială greu de controlat sub tratament, se prezintă pentru somnolență în timpul zilei, cefalee dimineața și un episod de adormire la volan. Soția povestește că sforăie zgomotos și că observă pauze în respirație în timpul nopții. Nu fumează, consumă alcool seara.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Sforăit, pauze respiratorii martorizate, treziri cu senzație de sufocare, nicturie\n• Somnolență diurnă (scala Epworth), adormiri în situații periculoase, accidente sau aproape-accidente rutiere\n• Cefalee matinală, tulburări de concentrare, modificări de dispoziție\n• Greutate, alcool și sedative seara, medicamente, hipotiroidism\n• Antecedente cardiovasculare (hipertensiune, aritmii) și profesie (șofer profesionist?)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Indice de masă corporală și circumferința gâtului: obezitate centrală, gât gros\n• Examinarea orofaringelui: macroglosie, palat moale lung, amigdale mari, retrognație\n• Permeabilitatea nazală (deviație de sept, polipi)\n• Tensiunea arterială crescută\n• Auscultație cardiacă și pulmonară; semne de insuficiență dreaptă în formele avansate',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Poligrafie respiratorie sau polisomnografie nocturnă: apnei și hipopnei repetate, desaturări, treziri\n• Glicemie, profil lipidic, TSH\n• ECG și, la nevoie, ecocardiografie (cord drept, aritmii)\n• Gazometrie diurnă dacă se suspectează hipoventilație asociată obezității\n• Hemoleucogramă (poliglobulie posibilă)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: sindrom de apnee obstructivă în somn.\nDiagnostic diferențial al somnolenței diurnă:\n• Privare cronică de somn\n• Narcolepsie\n• Hipotiroidism\n• Efect de medicamente sau alcool\n• Depresie\n• Apnee centrală (insuficiență cardiacă, opioide)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Scădere ponderală, evitarea alcoolului și sedativelor seara, somn pe lateral\n• CPAP ca tratament de bază în forma moderată sau severă, cu verificarea aderenței\n• Tratamentul hipertensiunii și al comorbidităților; reevaluarea controlului tensional după CPAP\n• Sfat privind conducerea auto până la controlul somnolenței\n• Dispozitive de avansare mandibulară sau intervenții ORL în cazuri selectate',
        },
      ],
      takeaways: [
        'Obezitate, sforăit, pauze martorizate și somnolență diurnă sugerează apneea obstructivă în somn.',
        'Diagnosticul se stabilește prin poligrafie sau polisomnografie.',
        'CPAP este tratamentul de bază în formele moderate și severe.',
        'Apneea netratată contribuie la hipertensiune rezistentă și accidente rutiere.',
      ],
    },
    {
      id: 'pne-c5',
      title: 'Dispnee de efort și tuse uscată',
      setting: 'Ambulatoriu de pneumologie',
      presentation:
        'Bărbat de 66 de ani, fost fumător, se prezintă pentru dispnee de efort care s-a agravat lent în ultimul an și tuse uscată persistentă. Nu are febră sau scădere ponderală. Are hipertensiune arterială tratată cu medicație obișnuită și a lucrat ca zugrav în tinerețe. Nu are animale de companie sau păsări în gospodărie.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Evoluția dispneei (lentă, progresivă) și limitarea activităților zilnice\n• Tuse uscată, absența febrei, a hemoptiziei și a sputei purulente\n• Expuneri profesionale (azbest, siliciu, metale), pasiuni sau expuneri la păsări și mucegaiuri\n• Medicamente cu toxicitate pulmonară (amiodaronă, nitrofurantoin, citostatice), radioterapie toracică\n• Simptome de colagenoză: dureri articulare, fenomen Raynaud, uscăciunea ochilor și gurii\n• Fumat și antecedente familiale',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Frecvență respiratorie, saturație în repaus și la efort\n• Hipocratism digital\n• Auscultație: raluri crepitante bazale bilaterale, fine, „în velcro”\n• Semne de hipertensiune pulmonară sau insuficiență dreaptă în formele avansate\n• Căutarea semnelor de colagenoză: sclerodactilie, tumefacții articulare, erupții cutanate',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Radiografie toracică: opacități reticulare bazale, volume pulmonare reduse\n• CT toracic de înaltă rezoluție: reticulație subpleurală bazală, bronșiectazii de tracțiune, fagure de miere\n• Spirometrie: tipar restrictiv; DLCO scăzută\n• Gazometrie sau pulsoximetrie la efort: hipoxemie\n• Teste imunologice pentru colagenoze\n• Lavaj bronhoalveolar sau biopsie doar dacă imagistica este neconcludentă',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: fibroză pulmonară idiopatică (model UIP), după excluderea altor cauze.\nDiagnostic diferențial:\n• Boală pulmonară interstițială din colagenoze\n• Pneumonită de hipersensibilitate cronică\n• Pneumoconioze (azbestoză, silicoză)\n• Toxicitate medicamentoasă\n• Insuficiență cardiacă stângă',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Medicamente antifibrotice, care încetinesc declinul funcțional, inițiate de pneumolog\n• Oxigenoterapie la efort sau în repaus când există hipoxemie\n• Reabilitare respiratorie, vaccinări antigripală și antipneumococică, oprirea fumatului\n• Tratamentul refluxului gastroesofagian și al comorbidităților\n• Evaluare pentru transplant pulmonar la pacienți selectați\n• Monitorizare periodică a funcției pulmonare și plan de îngrijiri paliative în boala avansată',
        },
      ],
      takeaways: [
        'Dispneea de efort progresivă cu tuse uscată și raluri velcro bazale sugerează fibroză interstițială.',
        'HRCT cu model UIP poate stabili diagnosticul fără biopsie.',
        'FPI nu răspunde la corticoizi ca tratament de fond; se folosesc antifibrotice.',
        'Anamneza expunerilor și a medicamentelor este esențială înainte de eticheta idiopatică.',
      ],
    },
  ],
  skills: [
    {
      id: 'pne-s1',
      name: 'Examenul aparatului respirator',
      category: 'Examen clinic',
      steps: [
        'Igiena mâinilor, prezentare, pacient așezat cu toracele descoperit',
        'Inspecție generală: dispnee, cianoză, degete hipocratice, poziție, mușchi accesori',
        'Inspecția toracelui: formă, simetrie, frecvență și ritm respirator, tiraj',
        'Palpare: poziția traheei, ampliații respiratorii, freamăt pectoral comparativ',
        'Percuție comparativă: sonoritate, matitate, hipersonoritate; mobilitatea bazelor',
        'Auscultație comparativă în toate câmpurile: murmur vezicular, suflu, raluri, frecătură',
        'Bronhofonia și pectorilocvia afonă, când suspectezi condensare sau revărsat',
        'Încadrarea într-un sindrom: condensare, pleural lichidian, pneumotorax, obstructiv',
      ],
      tips:
        'Compară mereu zone simetrice. Greșeala frecventă este examinarea doar a toracelui posterior: nu uita regiunile axilare și anterioare.',
    },
    {
      id: 'pne-s2',
      name: 'Spirometria: principii și interpretare calitativă',
      category: 'Interpretare',
      steps: [
        'Verifici contraindicațiile recente (de exemplu infarct, pneumotorax, intervenții chirurgicale recente) și explici manevra',
        'Pacient așezat, clemă nazală, piesa bucală etanșă',
        'Inspir maxim, apoi expir forțat, rapid și complet, cu încurajarea pacientului',
        'Repeți manevra până obții curbe acceptabile și reproductibile',
        'Test de bronhodilatație: repeți după administrarea unui bronhodilatator',
        'Citești VEMS, CVF și raportul VEMS/CVF; analizezi forma curbei flux-volum',
        'Sindrom obstructiv: raport VEMS/CVF scăzut; reversibilitatea sugerează astmul',
        'Sindrom restrictiv suspectat: CVF scăzută cu raport normal sau crescut (se confirmă prin pletismografie)',
      ],
      tips:
        'Calitatea manevrei contează mai mult decât valorile: un expir oprit prea devreme falsifică rezultatul. Spirometria singură nu poate confirma restricția.',
    },
    {
      id: 'pne-s3',
      name: 'Utilizarea corectă a inhalatoarelor (educarea pacientului)',
      category: 'Comunicare',
      steps: [
        'Întrebi pacientul cum își folosește acum inhalatorul și îl rogi să îți arate',
        'Spray dozator: agiți, scoți capacul, expiri complet, departe de piesa bucală',
        'Etanșezi buzele, începi un inspir lent și profund și apeși o singură dată la începutul inspirului',
        'Ții respirația câteva secunde, apoi expiri lent; aștepți înainte de un nou puf',
        'Pentru pulberi uscate: încarci doza, expiri departe de dispozitiv, inspir rapid și puternic',
        'Recomanzi camera de inhalare la cei cu coordonare dificilă (copii, vârstnici)',
        'După corticosteroid inhalator: clătirea gurii',
        'Ceri pacientului să repete demonstrația și corectezi greșelile',
      ],
      tips:
        'Greșelile frecvente sunt lipsa coordonării apăsare-inspir și inspirul prea rapid la spray. Tehnica se reverifică la fiecare consultație.',
    },
    {
      id: 'pne-s4',
      name: 'Pulsoximetria',
      category: 'Manevră',
      steps: [
        'Explici pacientului procedura',
        'Alegi un deget cald, bine perfuzat, fără ojă sau unghii false',
        'Aplici senzorul și aștepți stabilizarea semnalului (curbă pletismografică bună)',
        'Citești saturația periferică și frecvența pulsului, verificând concordanța cu pulsul palpat',
        'Notezi valoarea și dacă pacientul primește oxigen (și cât)',
        'Interpretezi în context clinic: frecvență respiratorie, efort respirator',
      ],
      tips:
        'Pulsoximetria nu informează despre CO2 și poate fi falsă la extremități reci, mișcare, intoxicație cu monoxid de carbon. Pentru ventilație e nevoie de gazometrie.',
    },
    {
      id: 'pne-s5',
      name: 'Citirea radiografiei toracice',
      category: 'Interpretare',
      steps: [
        'Verifici identitatea, data, incidența (postero-anterioară, antero-posterioară, profil)',
        'Calitatea: centrare (apofizele spinoase la egală distanță de capetele claviculelor), inspir adecvat, penetrare',
        'Părțile moi și scheletul: coaste, clavicule, coloană',
        'Mediastinul și traheea: poziție, lărgire; hilurile',
        'Cordul: dimensiune (indice cardiotoracic pe incidența postero-anterioară), contur',
        'Diafragmele și sinusurile costodiafragmatice (revărsat pleural)',
        'Câmpurile pulmonare comparativ: opacități, hipertransparențe, linia pleurală (pneumotorax)',
        'Zonele de verificat suplimentar: apexuri, retrocardiac, sub diafragm (aer liber)',
      ],
      tips:
        'Folosește o schemă fixă, altfel ratezi leziuni. Indicele cardiotoracic nu se apreciază pe o radiografie antero-posterioară, la pat.',
    },
  ],
}
