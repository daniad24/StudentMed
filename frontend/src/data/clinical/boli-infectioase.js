// Boli infecțioase – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'inf-c1',
      title: 'Copil febril cu erupție generalizată',
      setting: 'Camera de gardă – boli infecțioase',
      presentation:
        'Băiat de 3 ani, adus de mamă pentru febră înaltă de 4 zile, tuse, rinoree și ochi roșii, lăcrimoși. De o zi a apărut o erupție roșie care a început după urechi și pe față, extinzându-se apoi pe trunchi. Copilul este nevaccinat. În colectivitatea pe care o frecventează au mai fost cazuri similare.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Cronologia: perioada prodromală (febră, catar oculo-nazal, tuse) și momentul apariției erupției\n• Modul de apariție și extindere a erupției (cranio-caudal), prurit\n• Statusul vaccinal (vaccinarea ROR)\n• Contact cu cazuri similare, colectivitate, călătorii\n• Semne de complicații: dispnee, convulsii, alterarea stării de conștiență, diaree, otalgie\n• Medicamente administrate recent (erupție medicamentoasă)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Erupție maculo-papuloasă, roșie, catifelată, cu tegument normal între elemente, tendință la confluare, debut retroauricular și pe față, extindere descendentă\n• Conjunctivită, rinită, tuse – facies „plâns”\n• Semnul Koplik: mici puncte albe pe fond roșu pe mucoasa jugală (prezent înaintea erupției, poate dispărea la apariția ei)\n• Semne vitale, hidratare, frecvență respiratorie, auscultație pulmonară (bronhopneumonie)\n• Otoscopie (otită medie), examen neurologic (encefalită)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este în primul rând clinic și epidemiologic\n• Confirmare de laborator: anticorpi IgM specifici și/sau detecția virusului (PCR) din exsudat faringian sau urină, conform metodologiei de supraveghere\n• Hemoleucogramă: leucopenie\n• Radiografie toracică dacă există semne de afectare pulmonară\n• Alte investigații după complicații (puncție lombară la suspiciune de encefalită)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Rujeolă (pojar), formă comună.\nDiagnostic diferențial al erupțiilor febrile:\n• Rubeolă (stare generală bună, adenopatii retroauriculare și occipitale)\n• Scarlatină (erupție micropapuloasă, aspră, angină, limbă zmeurie)\n• Exantem subit, eritem infecțios\n• Boala Kawasaki\n• Erupții medicamentoase\n• Meningococcemie (erupție peteșială/purpurică – urgență)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Tratament simptomatic: antitermice, hidratare, igiena tegumentelor și mucoaselor\n• Suplimentare cu vitamina A la copil, conform recomandărilor\n• Antibioterapie doar pentru suprainfecții bacteriene documentate (otită, pneumonie)\n• Izolare respiratorie (transmitere aeriană) și declararea cazului (boală cu declarare obligatorie)\n• Monitorizarea complicațiilor: pneumonie, otită, laringită, encefalită\n• Ancheta epidemiologică și vaccinarea contacților susceptibili',
        },
      ],
      takeaways: [
        'Rujeola: febră și catar înaintea erupției, care începe retroauricular și coboară.',
        'Semnul Koplik apare înaintea erupției.',
        'Rujeola se transmite aerian – izolare și declarare obligatorie.',
        'Orice erupție peteșială cu febră impune excluderea meningococcemiei.',
      ],
    },
    {
      id: 'inf-c2',
      title: 'Febră, cefalee și vărsături la un tânăr',
      setting: 'Camera de gardă',
      presentation:
        'Student de 19 ani, din cămin, este adus pentru febră înaltă cu frisoane, cefalee intensă, fotofobie și vărsături, debutate brusc în urmă cu câteva ore. Colegii observă că a devenit somnolent. Nu are boli cunoscute. Pe membrele inferioare au apărut câteva pete roșii-violacee.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și evoluția: brusc, în ore (bacterian) sau progresiv\n• Triada cefalee, febră, vărsături; fotofobie, convulsii, modificarea stării de conștiență\n• Apariția și evoluția erupției\n• Infecții recente ORL (otită, sinuzită), traumatisme craniene, intervenții neurochirurgicale\n• Imunodepresie, splenectomie, status vaccinal\n• Contacte cu cazuri similare, colectivitate; alergii la antibiotice',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Semne vitale și semne de șoc: tahicardie, hipotensiune, extremități reci, timp de reumplere capilară prelungit\n• Sindrom meningian: redoare de ceafă, semnele Kernig și Brudzinski\n• Starea de conștiență (scala Glasgow), semne neurologice de focar, convulsii\n• Erupție peteșială sau purpurică, care nu dispare la presiune (test cu paharul) – sugerează meningococcemie\n• Fundul de ochi, focare ORL',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoculturi recoltate imediat, fără a întârzia antibioterapia\n• Puncție lombară (dacă nu există contraindicații): LCR tulbure, presiune crescută, pleiocitoză cu predominanța neutrofilelor, proteine crescute, glucoză scăzută; frotiu Gram, cultură, teste antigenice sau PCR\n• CT cerebral înaintea puncției în prezența semnelor de focar, edemului papilar, convulsiilor sau comei\n• Hemoleucogramă (leucocitoză cu neutrofilie), proteina C reactivă, procalcitonină, coagulare (CID), funcția renală, lactat',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Meningită bacteriană acută, cel mai probabil meningococică, cu meningococcemie.\nDiagnostic diferențial:\n• Meningită virală (LCR clar, limfocitar, glucoză normală)\n• Meningită tuberculoasă (debut lent)\n• Encefalită (tulburări de comportament, convulsii, focar)\n• Hemoragie subarahnoidiană (debut brusc, fără febră inițial)\n• Abces cerebral, meningism în alte infecții',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Urgență absolută: antibioterapie empirică intravenoasă cât mai repede (cefalosporină de generația a III-a, cu ajustare după vârstă și factori de risc), fără a aștepta imagistica sau puncția\n• Corticoterapie adjuvantă, conform protocolului, administrată înainte sau odată cu prima doză de antibiotic\n• Tratamentul șocului: reechilibrare volemică, suport vasopresor în terapie intensivă\n• Izolare (transmitere prin picături) și declarare obligatorie\n• Chimioprofilaxia contacților apropiați\n• Monitorizare neurologică și hemodinamică, depistarea complicațiilor (edem cerebral, CID, surditate)',
        },
      ],
      takeaways: [
        'Meningita bacteriană este o urgență: antibioticul nu se amână pentru investigații.',
        'Erupția purpurică care nu dispare la presiune înseamnă meningococcemie până la proba contrarie.',
        'CT-ul înaintea puncției lombare doar dacă există semne de hipertensiune intracraniană sau focar.',
        'Contacții apropiați primesc chimioprofilaxie.',
      ],
    },
    {
      id: 'inf-c3',
      title: 'Diaree cu febră după o masă în oraș',
      setting: 'Ambulatoriu – boli infecțioase',
      presentation:
        'Femeie de 32 de ani se prezintă pentru diaree apoasă, apoi cu scaune numeroase, cu mucus și striuri de sânge, crampe abdominale și febră, debutate la o zi după ce a mâncat la o petrecere preparate cu ouă și carne de pasăre. Alți invitați au simptome asemănătoare. Nu a mai luat antibiotice recent. Nu are boli cronice.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Numărul și aspectul scaunelor (apoase, cu mucus, sânge, puroi), tenesme\n• Febră, vărsături, dureri abdominale, semne de deshidratare (sete, oligurie, amețeală)\n• Ancheta alimentară: ce a consumat, când, cine a mai mâncat și cine s-a îmbolnăvit (perioadă de incubație)\n• Călătorii recente, sursa de apă, contact cu animale\n• Antibiotice sau spitalizări recente (Clostridioides difficile)\n• Comorbidități, imunodepresie, sarcină',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Starea de hidratare: mucoase uscate, pliu cutanat leneș, tahicardie, hipotensiune ortostatică, diureză\n• Temperatura, starea generală, starea de conștiență\n• Abdomen: sensibilitate difuză, zgomote intestinale accentuate, fără semne de iritație peritoneală\n• Greutatea (pentru aprecierea pierderilor)\n• Semne de complicații: abdomen destins, semne de sepsis',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Coprocultură (diaree invazivă, febrilă, cu sânge, focar epidemic): izolarea agentului etiologic, de exemplu Salmonella\n• Examen coproparazitologic și teste pentru Clostridioides difficile, după context\n• Hemoleucogramă, proteina C reactivă\n• Uree, creatinină, ionogramă (deshidratare, tulburări electrolitice)\n• Hemoculturi dacă febra este mare sau pacientul este imunodeprimat\n• Anunțarea focarului către direcția de sănătate publică',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Diaree acută infecțioasă de tip invaziv, toxiinfecție alimentară, cel mai probabil cu Salmonella.\nDiagnostic diferențial:\n• Alte cauze bacteriene: Shigella, Campylobacter, E. coli enterohemoragic\n• Diaree cu Clostridioides difficile\n• Gastroenterite virale (de obicei fără sânge)\n• Parazitoze (amibiază)\n• Debutul unei boli inflamatorii intestinale, apendicită, ischemie mezenterică la vârstnic',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Rehidratare: orală cu soluții de rehidratare când este posibilă, intravenoasă la deshidratare severă sau vărsături incoercibile\n• Realimentare precoce, dietă ușoară\n• Evitarea antidiareicelor care încetinesc tranzitul în diareea cu sânge și febră\n• Antibioterapie doar în situații selectate (forme severe, imunodeprimați, vârstnici, bacteriemie), după ghid și antibiogramă\n• Igienă riguroasă a mâinilor, excluderea temporară din activități cu risc (alimentație publică)\n• Declararea cazului și ancheta epidemiologică a focarului',
        },
      ],
      takeaways: [
        'Rehidratarea este tratamentul principal al oricărei diarei acute.',
        'Febra și sângele în scaun indică diaree invazivă – coprocultură.',
        'Antidiareicele care încetinesc tranzitul sunt de evitat în diareea invazivă.',
        'Cazurile multiple după aceeași masă definesc un focar care se declară.',
      ],
    },
  ],
  skills: [
    {
      id: 'inf-s1',
      name: 'Recunoașterea semnelor de sepsis la patul bolnavului',
      category: 'Examen clinic',
      steps: [
        'Pornești de la suspiciunea de infecție: febră sau hipotermie, focar infecțios aparent, context (postoperator, cateter, imunodepresie).',
        'Evaluezi starea de conștiență: confuzie, agitație sau somnolență nou apărută.',
        'Măsori frecvența respiratorie și saturația oxigenului; tahipneea este un semn precoce și adesea neglijat.',
        'Măsori pulsul și tensiunea arterială; urmărești hipotensiunea și tahicardia.',
        'Examinezi perfuzia periferică: extremități reci, tegument marmorat, timp de reumplere capilară prelungit.',
        'Urmărești diureza (oligurie) și ceri analize: lactat, hemoleucogramă, funcție renală și hepatică, coagulare, hemoculturi.',
        'Aplici un scor de triaj folosit în spital (de exemplu qSOFA sau scorul de avertizare precoce) și anunți imediat medicul.',
        'Inițiezi conform protocolului: hemoculturi, antibiotic precoce, fluide, monitorizare, identificarea și controlul sursei.',
      ],
      tips: 'Frecvența respiratorie și starea mentală sunt cele mai des neglijate. Vârstnicii și imunodeprimații pot avea sepsis fără febră.',
    },
    {
      id: 'inf-s2',
      name: 'Examenul tegumentelor pentru erupții',
      category: 'Examen clinic',
      steps: [
        'Examinezi la lumină naturală sau bună, cu pacientul dezbrăcat complet, inclusiv scalp, palme, plante și mucoase.',
        'Stabilești tipul leziunii elementare: maculă, papulă, veziculă, pustulă, peteșie, purpură, crustă.',
        'Descrii culoarea, dimensiunea, forma, confluența și dacă tegumentul dintre leziuni este normal.',
        'Precizezi distribuția (centrală, periferică, pe dermatoame) și ordinea apariției.',
        'Verifici dacă erupția dispare la presiune (test cu paharul sau digitopresiune) – peteșiile și purpura nu dispar.',
        'Cauți polimorfismul elementelor (leziuni în stadii diferite, ca în varicelă).',
        'Examinezi mucoasele (enantem, semnul Koplik, limba), ganglionii, ficatul și splina.',
        'Corelezi cu prodromul, febra, statusul vaccinal și expunerea; consemnezi descrierea completă.',
      ],
      tips: 'Orice erupție peteșială sau purpurică la un pacient febril este o urgență până la excluderea meningococcemiei. Nu uita palmele, plantele și mucoasele.',
    },
    {
      id: 'inf-s3',
      name: 'Recoltarea hemoculturilor (principii și asepsie)',
      category: 'Manevră',
      steps: [
        'Recoltezi înaintea administrării antibioticului, dar fără a-l întârzia semnificativ; verifici identitatea pacientului.',
        'Pregătești flacoanele (aerob și anaerob), verifici data de expirare și dezinfectezi dopurile.',
        'Igiena mâinilor și mănuși; alegi o venă periferică, nu prin cateterul existent (decât dacă se suspectează infecția cateterului).',
        'Dezinfectezi tegumentul cu antiseptic, lași să acționeze și să se usuce; nu mai palpezi locul după dezinfecție.',
        'Recoltezi volumul de sânge recomandat de laborator și inoculezi flacoanele (de regulă întâi cel aerob la sistemele cu ac și fluture).',
        'Recoltezi mai multe seturi, din locuri de puncție diferite, conform protocolului.',
        'Etichetezi corect flacoanele (ora, locul recoltării, antibiotice deja administrate) și le trimiți rapid la laborator, fără refrigerare.',
      ],
      tips: 'Cea mai frecventă greșeală este contaminarea prin dezinfecție insuficientă sau palparea venei după dezinfecție. Un volum prea mic de sânge scade sensibilitatea.',
    },
    {
      id: 'inf-s4',
      name: 'Echipamentul de protecție și izolarea',
      category: 'Manevră',
      steps: [
        'Identifici calea de transmitere: contact, picături sau aeriană, și tipul de izolare necesar.',
        'Igiena mâinilor înaintea echipării.',
        'Echiparea în ordine: halat sau combinezon, mască (chirurgicală pentru picături, de tip respirator pentru transmitere aeriană), ochelari sau vizieră, apoi mănuși trase peste manșetele halatului.',
        'Verifici etanșeitatea măștii de tip respirator (testul de etanșeitate).',
        'În salon: eviți atingerea feței și a suprafețelor nenecesare; echipamentul medical dedicat pacientului.',
        'Dezechiparea, considerată etapa cu cel mai mare risc: mănuși, igiena mâinilor, ochelari, halat (rulat cu fața contaminată spre interior), apoi masca la final, prinsă de bride.',
        'Igiena mâinilor după dezechipare și eliminarea echipamentului în recipientele pentru deșeuri infecțioase.',
      ],
      tips: 'Greșelile frecvente apar la dezechipare (atingerea feței exterioare a echipamentului). Mănușile nu înlocuiesc igiena mâinilor.',
    },
    {
      id: 'inf-s5',
      name: 'Anamneza epidemiologică',
      category: 'Comunicare',
      steps: [
        'Explici pacientului de ce pui întrebări despre viața personală și asiguri confidențialitatea.',
        'Contactul cu bolnavi cu simptome similare: în familie, colectivitate, la locul de muncă.',
        'Călătorii recente: în țară și străinătate, zone endemice, profilaxie efectuată (antimalarică, vaccinări).',
        'Alimentația: alimente consumate, sursa apei, preparate de casă, produse nepasteurizate, mese comune.',
        'Contact cu animale, înțepături de insecte, mușcături de căpușe, activități în natură.',
        'Profesia și expunerile profesionale (personal medical, agricultori, veterinari).',
        'Statusul vaccinal, comportamente cu risc (contacte sexuale neprotejate, consum de droguri injectabile), transfuzii, intervenții recente.',
        'Stabilești perioada de expunere în raport cu perioada de incubație a bolii suspectate.',
      ],
      tips: 'Întrebările despre comportamente sensibile se pun fără judecată și fără prezența aparținătorilor, dacă pacientul dorește. Corelează întotdeauna expunerea cu incubația.',
    },
  ],
}
