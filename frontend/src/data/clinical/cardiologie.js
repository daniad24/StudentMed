// Cardiologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'car-c1',
      title: 'Durere toracică intensă de repaus',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 58 de ani, fumător, hipertensiv și diabetic, se prezintă cu o durere retrosternală constrictivă apărută în repaus în urmă cu aproximativ 2 ore. Durerea iradiază în brațul stâng și mandibulă și nu cedează la repaus. Este transpirat, anxios și a avut o senzație de greață. În ultimele săptămâni a avut dureri asemănătoare, mai scurte, la efort.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterele durerii: sediu, caracter, iradiere, durată, factori declanșatori și de ameliorare, ora debutului (important pentru reperfuzie)\n• Simptome asociate: dispnee, transpirații, greață, sincopă, palpitații\n• Factori de risc cardiovascular: fumat, HTA, diabet, dislipidemie, ereditate\n• Antecedente de angină, infarct, revascularizare\n• Contraindicații posibile la anticoagulare/tromboliză: sângerări, AVC, intervenții recente',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Starea generală: anxietate, paloare, transpirații reci\n• TA la ambele brațe, puls, frecvență respiratorie, saturație\n• Auscultație cardiacă: zgomote cardiace eventual asurzite, zgomot de galop, sufluri noi\n• Auscultație pulmonară: raluri crepitante (insuficiență ventriculară stângă)\n• Semne de șoc cardiogen: hipotensiune, extremități reci, oligurie\n• Examenul poate fi normal',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• ECG cu 12 derivații imediat (în primele minute): supradenivelare ST în derivații contigue, cu subdenivelare în oglindă\n• Troponina cardiacă (dinamica valorilor)\n• Hemoleucogramă, glicemie, funcție renală, ionogramă, coagulare, profil lipidic\n• Ecocardiografie: tulburări de kinetică segmentară, funcția VS, complicații mecanice\n• Coronarografie în cadrul reperfuziei',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: sindrom coronarian acut cu supradenivelare de segment ST (infarct miocardic acut).\nDiagnostic diferențial al durerii toracice cu risc vital:\n• Disecție de aortă (durere sfâșietoare, asimetrie de puls/TA)\n• Embolie pulmonară (dispnee, tahicardie, factori de risc tromboembolici)\n• Pericardită acută (durere ameliorată la aplecare, frecătură pericardică)\n• Pneumotorax; cauze digestive și parietale',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Reperfuzie cât mai rapidă: angioplastie coronariană primară sau tromboliză dacă angioplastia nu e disponibilă la timp\n• Antiagregare plachetară dublă, anticoagulare, analgezie, oxigen doar la hipoxemie\n• Monitorizare ECG continuă în unitatea coronariană (aritmii), TA, diureză\n• După faza acută: betablocant, IECA, statină, controlul factorilor de risc, reabilitare cardiacă',
        },
      ],
      takeaways: [
        'ECG-ul se face în primele minute la orice durere toracică.',
        'Timpul este miocard: reperfuzia precoce reduce mortalitatea.',
        'Exclude mereu disecția de aortă înainte de anticoagulare.',
        'Un ECG normal inițial nu exclude sindromul coronarian acut: se repetă.',
      ],
    },
    {
      id: 'car-c2',
      title: 'Dispnee cu edeme gambiere',
      setting: 'Secție de cardiologie',
      presentation:
        'Femeie de 74 de ani, cu hipertensiune arterială veche și infarct miocardic în antecedente, se internează pentru dispnee agravată în ultimele două săptămâni. Doarme pe trei perne și se trezește noaptea cu sufocare. Are edeme ale gambelor și a luat în greutate câteva kilograme. Recunoaște că nu și-a mai luat regulat medicamentele.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Dispneea: de efort, ortopnee, dispnee paroxistică nocturnă; clasa funcțională NYHA\n• Edeme, creștere ponderală, scăderea diurezei, nicturie\n• Factori precipitanți: nerespectarea tratamentului sau a regimului hiposodat, infecții, aritmii, ischemie, HTA necontrolată, antiinflamatoare\n• Antecedente: cardiopatie ischemică, valvulopatii, HTA\n• Medicația curentă și aderența la ea',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Ortopnee, tahipnee, cianoză\n• Turgescență jugulară, reflux hepatojugular pozitiv\n• Raluri crepitante bazale bilateral, eventual semne de revărsat pleural\n• Cord: tahicardie, zgomot de galop, eventual suflu de insuficiență mitrală, șoc apexian deplasat\n• Hepatomegalie de stază, edeme gambiere cu godeu, simetrice\n• TA, greutate, perfuzia periferică',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Peptide natriuretice (BNP/NT-proBNP): crescute\n• ECG: sechele de infarct, hipertrofie VS, aritmii (fibrilație atrială)\n• Radiografie toracică: cardiomegalie, redistribuție vasculară, edem interstițial, revărsat pleural\n• Ecocardiografie: fracția de ejecție, cinetică, valve, presiuni de umplere\n• Uree, creatinină, ionogramă, hemoleucogramă, troponină, funcție tiroidiană',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: insuficiență cardiacă decompensată (globală), de etiologie ischemică și hipertensivă, precipitată de nerespectarea tratamentului.\nDiagnostic diferențial:\n• BPOC exacerbat, pneumonie\n• Embolie pulmonară\n• Sindrom nefrotic, insuficiență renală cu retenție hidrosalină\n• Ciroză hepatică (edeme și ascită)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Poziție semișezândă, oxigen la hipoxemie\n• Diuretic de ansă intravenos pentru decongestie; vasodilatatoare dacă TA permite\n• Tratarea factorului precipitant\n• Tratament de fond care ameliorează prognosticul la fracție de ejecție redusă: IECA/ARNI, betablocant, antagonist de mineralocorticoizi, inhibitor SGLT2\n• Monitorizare: greutate zilnică, diureză, TA, funcție renală și potasiu; educarea pacientului',
        },
      ],
      takeaways: [
        'Ortopneea și dispneea paroxistică nocturnă sunt foarte sugestive pentru insuficiența cardiacă.',
        'Caută întotdeauna factorul precipitant al decompensării.',
        'Ecocardiografia stabilește tipul de insuficiență cardiacă după fracția de ejecție.',
        'Greutatea zilnică este cel mai simplu indicator al retenției de lichide.',
      ],
    },
    {
      id: 'car-c3',
      title: 'Palpitații cu ritm neregulat',
      setting: 'Ambulatoriu de cardiologie',
      presentation:
        'Bărbat de 67 de ani, hipertensiv, se prezintă pentru palpitații neregulate și oboseală la efort, apărute în urmă cu câteva zile. Nu a avut sincope sau durere toracică. Nu a mai avut episoade asemănătoare cunoscute. Consumă alcool ocazional, mai mult în weekend.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterul palpitațiilor: regulate sau neregulate, debut și oprire brusc sau progresiv, durată, frecvență\n• Debutul episodului actual (important pentru strategia de conversie)\n• Simptome de gravitate: sincopă, durere toracică, dispnee\n• Factori declanșatori: alcool, cafea, efort, hipertiroidie, medicamente\n• Antecedente: HTA, valvulopatii, insuficiență cardiacă, AVC/AIT, diabet, sângerări',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Pulsul radial: neregulat ca ritm și amplitudine\n• Auscultație: zgomote cardiace neregulate, cu intensitate variabilă\n• Deficit de puls (frecvența la apex mai mare decât la radială)\n• TA, semne de insuficiență cardiacă\n• Căutăm cauze: sufluri valvulare, semne de hipertiroidie',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• ECG cu 12 derivații: absența undelor P, unde f, intervale RR neregulate, QRS îngust\n• Holter ECG pentru episoadele paroxistice\n• TSH, ionogramă (potasiu, magneziu), funcție renală, hemoleucogramă\n• Ecocardiografie: dimensiunea atriului stâng, valve, funcția VS, trombi (transesofagian)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: fibrilație atrială.\nDiagnostic diferențial al ritmului neregulat:\n• Extrasistole atriale sau ventriculare frecvente\n• Flutter atrial cu conducere variabilă\n• Tahicardie atrială multifocală\n• Tahicardie sinusală cu extrasistole',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Evaluarea riscului tromboembolic (scor CHA2DS2-VASc) și a riscului hemoragic, cu decizia de anticoagulare orală\n• Controlul frecvenței (betablocant, blocante de calciu nondihidropiridinice, digoxin) sau al ritmului (conversie electrică/farmacologică, ablație)\n• Conversia ritmului după un timp de la debut necesită anticoagulare prealabilă sau excluderea trombilor\n• Instabilitate hemodinamică: cardioversie electrică de urgență\n• Tratarea factorilor favorizanți: HTA, alcool, hipertiroidie',
        },
      ],
      takeaways: [
        'Puls neregulat ca ritm și amplitudine + deficit de puls: gândește-te la fibrilație atrială.',
        'Riscul principal al fibrilației atriale este embolia (AVC).',
        'Decizia de anticoagulare se bazează pe scorul de risc, nu pe tipul de fibrilație.',
        'Instabilitatea hemodinamică impune cardioversie electrică.',
      ],
    },
    {
      "id": "car-c4",
      "title": "Durere toracică posterioară cu debut brusc",
      "setting": "Camera de gardă",
      "presentation": "Bărbat de 60 de ani, hipertensiv cunoscut, cu tratament neregulat, fumător. Se prezintă cu durere toracică posterioară, instalată brusc cu o oră în urmă, foarte intensă, cu iradiere între omoplați. Nu are antecedente de boală coronariană. Este agitat și transpirat.",
      "steps": [
        {
          "kind": "anamneza",
          "prompt": "Ce întrebări de anamneză sunt esențiale?",
          "answer": "• Caracterul durerii: debut brusc, maximă de la început, „în sfâșiere”, iradiere spre spate sau abdomen\n• Simptome asociate: sincopă, deficit neurologic, durere abdominală, slăbiciune a unui membru\n• Factori de risc: hipertensiune, fumat, boli ale țesutului conjunctiv, valvă aortică bicuspidă, sarcină, traumatism, consum de cocaină\n• Antecedente familiale de anevrism sau disecție\n• Aderența la tratamentul antihipertensiv"
        },
        {
          "kind": "examen",
          "prompt": "Ce urmărești la examenul obiectiv? Ce găsești?",
          "answer": "• TA măsurată la ambele brațe: valori diferite între brațe, deficit de puls\n• Suflu diastolic de insuficiență aortică nou, apărut în context\n• Semne de tamponadă: jugulare turgescente, hipotensiune, zgomote cardiace asurzite\n• Examen neurologic pentru deficite focale\n• Palparea pulsurilor periferice și a abdomenului\n• Pacient palid, transpirat, tahicardic"
        },
        {
          "kind": "investigatii",
          "prompt": "Ce investigații ceri și ce rezultate te aștepți?",
          "answer": "• ECG: pentru a exclude infarctul; poate fi normal sau cu modificări nespecifice\n• Radiografie toracică: posibilă lărgire a mediastinului\n• Angiografie CT aortică: examenul de elecție la pacientul stabil, arată flapul intimal și falsul lumen\n• Ecocardiografie (transtoracică sau transesofagiană): evaluează aorta ascendentă, insuficiența aortică și lichidul pericardic\n• Analize de bază, grup sanguin și compatibilitate pentru eventuală intervenție"
        },
        {
          "kind": "diagnostic",
          "prompt": "Care e diagnosticul cel mai probabil și diagnosticul diferențial?",
          "answer": "• Diagnostic probabil: disecție acută de aortă; clasificarea Stanford (A sau B) decide conduita\n• Diferențial: infarct miocardic acut, embolie pulmonară, pericardită acută, anevrism aortic rupt, perforație ulceroasă sau pancreatită acută\n• Argumente: debut maxim brusc, durere în sfâșiere, iradiere interscapulară, hipertensiune, diferența de TA între brațe"
        },
        {
          "kind": "tratament",
          "prompt": "Care sunt principiile de tratament și de monitorizare?",
          "answer": "• Transfer în terapie intensivă, monitorizare continuă, acces venos\n• Analgezie eficientă, de obicei cu opioid intravenos\n• Scăderea frecvenței cardiace și a TA cu beta-blocant intravenos, pentru a reduce stresul pe peretele aortic\n• Se evită trombolizarea și anticoagularea\n• Tipul A: chirurgie cardiovasculară de urgență; tipul B necomplicat: tratament medical și supraveghere imagistică\n• Pe termen lung: control strict al TA și monitorizarea aortei"
        }
      ],
      "takeaways": [
        "Durerea toracică „în sfâșiere” cu TA diferită între brațe impune excluderea disecției",
        "Nu administra trombolitic sau anticoagulant înainte să excluzi disecția",
        "Angio-CT-ul aortic este examenul de elecție la pacientul stabil",
        "Tipul A se operează de urgență"
      ]
    },
    {
      "id": "car-c5",
      "title": "Durere la gambă la mers",
      "setting": "Cabinet de medicină de familie",
      "presentation": "Bărbat de 64 de ani, fumător de 40 de ani, cu diabet zaharat de tip 2 și dislipidemie. Se prezintă pentru dureri în gambe care apar când merge o distanță mai lungă și dispar după câteva minute de oprire. În ultimele luni distanța de mers s-a redus.",
      "steps": [
        {
          "kind": "anamneza",
          "prompt": "Ce întrebări de anamneză sunt esențiale?",
          "answer": "• Caracterul durerii: crampă în gambă la mers, reproductibilă, care cedează la oprire\n• Distanța de mers până la apariția durerii și evoluția ei\n• Durere de repaus nocturnă, ulcere sau răni care nu se vindecă\n• Factori de risc: fumat, diabet, hipertensiune, dislipidemie, antecedente familiale\n• Alte localizări ale aterosclerozei: boală coronariană, accident vascular cerebral\n• Diferențierea de stenoza de canal spinal și de patologia articulară"
        },
        {
          "kind": "examen",
          "prompt": "Ce urmărești la examenul obiectiv? Ce găsești?",
          "answer": "• Inspecția: tegumente subțiri și lucioase, pilozitate scăzută, unghii îngroșate, ulcerații sau zone de necroză\n• Palpare: pulsuri femural, popliteu, pedios și tibial posterior diminuate sau absente, extremități reci\n• Timp de reumplere capilară prelungit; paloare la ridicarea membrului\n• Auscultația arterelor femurale: sufluri\n• Examenul piciorului diabetic și sensibilitatea\n• Tensiunea arterială și examenul cardiovascular general"
        },
        {
          "kind": "investigatii",
          "prompt": "Ce investigații ceri și ce rezultate te aștepți?",
          "answer": "• Indicele gleznă–braț: valoare scăzută care confirmă boala arterială\n• Ecografie Doppler arterială a membrelor inferioare: localizează stenozele\n• Angiografie CT sau prin rezonanță, dacă se ia în calcul revascularizarea\n• Profil lipidic, glicemie și hemoglobină glicată, creatinină\n• ECG și evaluarea riscului cardiovascular global"
        },
        {
          "kind": "diagnostic",
          "prompt": "Care e diagnosticul cel mai probabil și diagnosticul diferențial?",
          "answer": "• Diagnostic: boală arterială periferică (arteriopatie obliterantă) cu claudicație intermitentă\n• Diferențial: stenoză de canal spinal (durere ameliorată la aplecarea înainte), insuficiență venoasă cronică, neuropatie diabetică, artroză, sindrom de loje\n• Stadializare: claudicație, durere de repaus, ulcer sau gangrenă (ischemie critică)"
        },
        {
          "kind": "tratament",
          "prompt": "Care sunt principiile de tratament și de monitorizare?",
          "answer": "• Renunțare completă la fumat\n• Program de mers supravegheat\n• Antiagregant și statină\n• Controlul tensiunii arteriale și al glicemiei\n• Îngrijirea piciorului, pantofi potriviți, inspecție zilnică\n• Evaluare pentru revascularizare dacă simptomele limitează major activitatea sau apare ischemie critică\n• Supraveghere periodică și atenție la durerea de repaus sau leziunile tisulare"
        }
      ],
      "takeaways": [
        "Claudicația este durerea ischemică de efort care cedează la oprire",
        "Indicele gleznă–braț este testul de prim intenție",
        "Fumatul și diabetul sunt factorii-cheie, iar pacientul are risc cardiovascular global crescut",
        "Durerea de repaus sau ulcerul indică ischemie critică și necesită evaluare pentru revascularizare"
      ]
    },
  ],
  skills: [
    {
      id: 'car-s1',
      name: 'Înregistrarea ECG cu 12 derivații',
      category: 'Manevră',
      steps: [
        'Identifici pacientul, explici procedura și obții acordul',
        'Pacient în decubit dorsal, relaxat, toracele și gleznele/încheieturile descoperite',
        'Degresezi pielea; aplici electrozii periferici: roșu la brațul drept, galben la brațul stâng, verde la piciorul stâng, negru la piciorul drept',
        'V1 în spațiul IV intercostal parasternal drept, V2 în spațiul IV parasternal stâng',
        'V4 în spațiul V intercostal stâng pe linia medioclaviculară, V3 la mijlocul distanței V2–V4',
        'V5 pe linia axilară anterioară și V6 pe linia axilară medie, la nivelul lui V4',
        'Verifici calibrarea (10 mm/mV) și viteza (25 mm/s), ceri pacientului să nu se miște',
        'Înregistrezi, verifici calitatea traseului, notezi numele, data și ora pe traseu',
      ],
      tips:
        'Inversarea electrozilor periferici (mai ales brațul drept cu stângul) este cea mai frecventă greșeală. Poziționarea greșită a precordialelor poate simula modificări patologice.',
    },
    {
      id: 'car-s2',
      name: 'Citirea sistematică a ECG',
      category: 'Interpretare',
      steps: [
        'Verifici datele pacientului, calibrarea și viteza de derulare',
        'Ritmul: sinusal (undă P înaintea fiecărui QRS, pozitivă în DII) sau nu; regularitatea',
        'Frecvența cardiacă (300 împărțit la numărul de pătrate mari dintre două R, la ritm regulat)',
        'Axul electric al QRS (DI și aVF)',
        'Unda P și intervalul PR (tulburări de conducere atrioventriculară)',
        'Complexul QRS: durată (blocuri de ramură), amplitudine (hipertrofii), unde Q patologice',
        'Segmentul ST și unda T: supra- sau subdenivelare, inversiuni, în ce teritoriu',
        'Intervalul QT și concluzia finală',
      ],
      tips:
        'Citește mereu în aceeași ordine, ca să nu omiți nimic. Compară, dacă există, cu un ECG anterior.',
    },
    {
      id: 'car-s3',
      name: 'Auscultația cordului',
      category: 'Examen clinic',
      steps: [
        'Cameră liniștită, pacient în decubit dorsal la 30–45 de grade, examinatorul în dreapta',
        'Palpezi șocul apexian înainte de auscultație',
        'Asculți pe rând focarele: mitral, tricuspidian, Erb, pulmonar, aortic',
        'Folosești membrana (zgomote înalte) și clopotul (zgomote joase, de exemplu uruitura)',
        'Identifici Z1 și Z2, sincronizând cu pulsul carotidian',
        'Apreciezi ritmul, frecvența și zgomotele supraadăugate (galop, clacmente, frecătură)',
        'Descrii suflurile: sediu, timp (sistolic/diastolic), intensitate, iradiere, timbru',
        'Manevre: decubit lateral stâng pentru focarul mitral, aplecat înainte în expir pentru focarul aortic',
      ],
      tips:
        'Nu asculta prin haine. Greșeala frecventă este încadrarea greșită a suflului în sistolă sau diastolă: palpează simultan carotida.',
    },
    {
      id: 'car-s4',
      name: 'Examenul pulsurilor periferice',
      category: 'Examen clinic',
      steps: [
        'Pacient în decubit dorsal, relaxat',
        'Palpezi bilateral și comparativ: carotidian (pe rând, niciodată simultan), radial, brahial',
        'Femural (sub ligamentul inghinal), popliteu (genunchi ușor flectat), tibial posterior (retromaleolar intern), pedios (pe fața dorsală a piciorului)',
        'Apreciezi prezența, amplitudinea și simetria fiecărui puls',
        'Auscultezi carotidele, aorta abdominală și arterele femurale pentru sufluri',
        'Inspectezi tegumentele membrelor: culoare, temperatură, pilozitate, ulcerații',
        'Notezi rezultatele sub forma unei scheme cu pulsurile prezente, diminuate sau absente',
      ],
      tips:
        'Pulsul carotidian nu se palpează bilateral simultan și nu se comprimă puternic. Absența pulsului pedios izolat poate fi o variantă anatomică: interpretează împreună cu tibialul posterior.',
    },
    {
      id: 'car-s5',
      name: 'Evaluarea pacientului cu insuficiență cardiacă',
      category: 'Examen clinic',
      steps: [
        'Anamneză: dispnee (efort, ortopnee, dispnee paroxistică nocturnă), oboseală, edeme, clasa NYHA',
        'Medicația și aderența, factorii precipitanți',
        'Greutatea și comparația cu greutatea anterioară',
        'Semne vitale: TA, frecvență cardiacă și ritm, frecvență respiratorie, saturație',
        'Presiunea venoasă jugulară cu pacientul la 45 de grade; reflux hepatojugular',
        'Auscultație cardiacă (galop, sufluri) și pulmonară (raluri crepitante, revărsat pleural)',
        'Hepatomegalie, ascită, edeme declive (gambe sau sacrat la pacientul culcat)',
        'Perfuzia periferică: extremități reci, timp de reumplere capilară, stare de conștiență',
      ],
      tips:
        'La pacientul imobilizat la pat edemele se caută în regiunea sacrată. Asistentul urmărește dacă știi să apreciezi atât congestia, cât și perfuzia.',
    },
  ],
}
