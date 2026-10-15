// Semiologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'sem-c1',
      title: 'Dispnee progresivă la efort',
      setting: 'Secție de medicină internă',
      presentation:
        'Bărbat de 68 de ani, fumător de peste 40 de ani, se internează pentru dispnee apărută de câțiva ani, agravată progresiv, acum la eforturi mici. Acuză tuse cu expectorație mucoasă matinală, mai ales iarna. În ultimele zile expectorația a devenit purulentă și dispneea s-a accentuat. Nu are antecedente cardiace cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterul dispneei: de efort sau de repaus, debut, evoluție, ortopnee, dispnee paroxistică nocturnă (orientează spre cauză cardiacă)\n• Tusea și expectorația: durată, aspect, cantitate, hemoptizie\n• Expunere: fumat (pachete-an), noxe profesionale\n• Simptome asociate: febră, durere toracică, wheezing, edeme gambiere, scădere ponderală\n• Antecedente: infecții respiratorii repetate, boli cardiace, medicație',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Inspecție: torace în butoi, respirație cu buzele țuguiate, folosirea mușchilor respiratori accesori, cianoză\n• Palpare: ampliații respiratorii diminuate, freamăt pectoral diminuat\n• Percuție: hipersonoritate, matitatea cardiacă redusă\n• Auscultație: murmur vezicular diminuat, expir prelungit, raluri bronșice (ronflante, sibilante)\n• Căutăm semne de cord pulmonar: turgescență jugulară, hepatomegalie, edeme',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Pulsoximetrie și gazometrie arterială: hipoxemie, eventual hipercapnie\n• Hemoleucogramă, markeri de inflamație (leucocitoză în exacerbarea infecțioasă)\n• Radiografie toracică: hiperinflație, diafragme coborâte și aplatizate, excluderea pneumoniei\n• Spirometrie (după exacerbare): sindrom obstructiv persistent după bronhodilatator\n• ECG: semne de suprasolicitare a cordului drept',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: bronhopneumopatie obstructivă cronică (BPOC) în exacerbare infecțioasă.\nDiagnostic diferențial:\n• Astm bronșic (debut tânăr, reversibilitate, atopie)\n• Insuficiență cardiacă (ortopnee, raluri crepitante bazale, edeme)\n• Pneumonie, pneumotorax\n• Bronșiectazii, neoplasm bronhopulmonar (fumător, scădere ponderală)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Oxigenoterapie controlată, cu țintirea unei saturații moderate (risc de hipercapnie)\n• Bronhodilatatoare inhalatorii, corticoterapie sistemică pe termen scurt, antibiotic la expectorație purulentă\n• Monitorizare: saturație, frecvență respiratorie, gazometrie, stare de conștiență\n• Pe termen lung: oprirea fumatului, tratament inhalator de fond, vaccinări, reabilitare respiratorie',
        },
      ],
      takeaways: [
        'Dispneea se caracterizează întâi: efort/repaus, ortopnee, debut acut sau cronic.',
        'Hipersonoritatea și murmurul vezicular diminuat sugerează emfizemul.',
        'Ortopneea și ralurile crepitante bazale orientează spre cauza cardiacă.',
        'Oxigenul se administrează controlat la pacientul cu BPOC.',
      ],
    },
    {
      id: 'sem-c2',
      title: 'Edeme gambiere bilaterale',
      setting: 'Ambulatoriu',
      presentation:
        'Femeie de 45 de ani se prezintă pentru umflarea picioarelor și a pleoapelor, apărută în ultimele 3 săptămâni. Edemele sunt mai evidente dimineața la nivelul feței. Observă că urina face spumă. Nu are dispnee și nu are antecedente cardiace sau hepatice cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debut, localizare, evoluție diurnă (facial dimineața în cauzele renale, declive seara în cele cardiace)\n• Simptome urinare: urină spumoasă, hematurie, scăderea diurezei\n• Dispnee, ortopnee (cauză cardiacă), icter, consum de alcool (cauză hepatică)\n• Medicamente (antiinflamatoare, blocante de calciu), diabet, boli autoimune\n• Infecții recente (faringită), scădere ponderală, alimentație',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Caracterele edemului: moale, alb, nedureros, cu godeu, simetric, inclusiv palpebral\n• Căutăm revărsate: ascită, pleurezie (anasarcă)\n• Excludem cauza cardiacă: fără turgescență jugulară, fără raluri crepitante, fără hepatomegalie de stază\n• Excludem cauza hepatică: fără icter, steluțe vasculare, circulație colaterală\n• Tensiunea arterială, greutatea, aspectul urinei',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Sumar de urină: proteinurie importantă, eventual cilindri\n• Proteinurie cantitativă (urina din 24 de ore sau raport proteine/creatinină)\n• Proteine totale și albumina serică: scăzute\n• Profil lipidic: hipercolesterolemie\n• Uree, creatinină, ionogramă; ecografie renală\n• Biopsia renală, indicată de nefrolog, stabilește tipul de leziune',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: sindrom nefrotic (proteinurie masivă, hipoalbuminemie, edeme, dislipidemie).\nDiagnostic diferențial al edemelor generalizate:\n• Insuficiență cardiacă (stază, dispnee)\n• Ciroză hepatică (ascită predominantă, stigmate hepatice)\n• Edeme carențiale, hipotiroidie (mixedem, fără godeu)\n• Edeme medicamentoase',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Tratamentul bolii renale cauzale, după diagnosticul histologic (în serviciul de nefrologie)\n• Restricție de sare, diuretice pentru edeme\n• Reducerea proteinuriei (inhibitori ai enzimei de conversie sau sartani), tratamentul dislipidemiei\n• Atenție la riscul de tromboză și de infecții\n• Monitorizare: greutate, diureză, tensiune arterială, proteinurie, funcție renală',
        },
      ],
      takeaways: [
        'Edemul renal este alb, moale, cu godeu și apare dimineața facial.',
        'Edemul cardiac este declive, vesperal, însoțit de semne de stază.',
        'Urina spumoasă sugerează proteinurie.',
        'Edemele unilaterale ridică suspiciunea de tromboză venoasă profundă.',
      ],
    },
    {
      id: 'sem-c3',
      title: 'Icter cu prurit și scădere ponderală',
      setting: 'Secție de medicină internă',
      presentation:
        'Bărbat de 70 de ani se internează pentru colorarea în galben a pielii și a sclerelor, observată de familie de aproximativ 3 săptămâni. Acuză prurit intens, urini închise la culoare și scaune decolorate. A slăbit mai multe kilograme în ultimele luni și are inapetență. Nu acuză colici biliare.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul icterului: brusc sau insidios, cu sau fără durere (icterul nedureros, progresiv, sugerează neoplazie)\n• Culoarea urinei și a scaunului (urini hipercrome și scaune acolice: colestază)\n• Prurit, febră, frisoane (angiocolită), colici biliare (litiază)\n• Scădere ponderală, inapetență, diabet nou apărut\n• Consum de alcool, medicamente, transfuzii, contact cu hepatite',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Icterul se examinează la lumină naturală: sclere, mucoasa sublinguală, tegumente; leziuni de grataj\n• Palparea abdomenului: hepatomegalie, vezică biliară palpabilă nedureroasă (semnul Courvoisier-Terrier)\n• Mase palpabile epigastrice, adenopatii (inclusiv supraclaviculară stângă)\n• Ascită, circulație colaterală\n• Stare de nutriție',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Bilirubină totală și directă: creștere predominant a celei directe (conjugate)\n• Fosfatază alcalină și GGT crescute (colestază), transaminaze moderat crescute\n• Timp de protrombină, hemoleucogramă\n• Ecografie abdominală: dilatarea căilor biliare intra- și extrahepatice, vezică destinsă\n• CT abdominal pentru stadializare; markeri tumorali (CA 19-9) orientativ',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: icter obstructiv prin neoplasm de cap de pancreas.\nDiagnostic diferențial:\n• Litiază coledociană (icter cu colică, fluctuant)\n• Colangiocarcinom, ampulom vaterian\n• Icter hepatocelular (hepatite, ciroză)\n• Icter hemolitic (bilirubină indirectă, anemie, fără colestază)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Evaluare multidisciplinară (gastroenterolog, chirurg, oncolog)\n• Rezecție chirurgicală când tumora este rezecabilă\n• Drenaj biliar (endoscopic prin stent sau percutan) pentru ameliorarea icterului\n• Tratament simptomatic: prurit, durere, suport nutrițional\n• Monitorizare: bilirubină, coagulare, semne de angiocolită',
        },
      ],
      takeaways: [
        'Icterul se caută la lumină naturală, întâi la sclere.',
        'Urini hipercrome + scaune acolice + prurit = colestază.',
        'Vezica palpabilă nedureroasă la un pacient icteric sugerează obstrucție neoplazică.',
        'Ecografia abdominală este prima investigație imagistică în icter.',
      ],
    },
  ],
  skills: [
    {
      id: 'sem-s1',
      name: 'Anamneza și foaia de observație',
      category: 'Comunicare',
      steps: [
        'Te prezinți, verifici identitatea pacientului și ceri acordul pentru discuție',
        'Date personale: vârstă, sex, ocupație, mediu de proveniență',
        'Motivele internării, formulate cu cuvintele pacientului',
        'Antecedente heredo-colaterale și personale fiziologice și patologice',
        'Condiții de viață și de muncă, comportamente (fumat, alcool), medicație curentă, alergii',
        'Istoricul bolii actuale: debut, evoluție cronologică, caracterele fiecărui simptom, tratamente urmate',
        'Examenul obiectiv pe aparate și sisteme, consemnat ordonat',
        'Sinteză: diagnostic prezumtiv, plan de investigații și tratament, evoluție zilnică',
      ],
      tips:
        'Folosește întrebări deschise la început și închise pentru clarificare; nu sări peste medicație și alergii. La colocviu se urmărește ca istoricul să fie cronologic și ca simptomul principal să fie caracterizat complet.',
    },
    {
      id: 'sem-s2',
      name: 'Examenul obiectiv general',
      category: 'Examen clinic',
      steps: [
        'Igiena mâinilor, prezentare, poziționarea și dezbrăcarea pacientului cu respectarea intimității',
        'Starea generală, starea de conștiență, atitudinea (poziția) și facies',
        'Talia, greutatea, starea de nutriție (indice de masă corporală)',
        'Tegumente și mucoase: culoare, umiditate, leziuni, fanere',
        'Țesut celular subcutanat: edeme (cu godeu sau nu)',
        'Sistem ganglionar: palparea grupelor ganglionare superficiale',
        'Sistem osteo-articular și muscular: deformări, mobilitate, tonus',
        'Semne vitale: temperatură, tensiune arterială, puls, frecvență respiratorie, saturație',
      ],
      tips:
        'Examenul începe de la ușă: aspectul general și poziția pacientului dau multe indicii. Greșeală frecventă: omiterea examinării ganglionilor și a edemelor.',
    },
    {
      id: 'sem-s3',
      name: 'Examenul aparatului respirator',
      category: 'Examen clinic',
      steps: [
        'Pacientul așezat, toracele descoperit, examinatorul în spatele și apoi în fața lui',
        'Inspecție: forma toracelui, tipul și frecvența respirației, tiraj, cianoză, degete hipocratice',
        'Palpare: ampliațiile respiratorii (bazale și apicale), freamătul pectoral comparativ',
        'Percuție: comparativ, simetric, de sus în jos, posterior, lateral și anterior; mobilitatea bazelor',
        'Auscultație: cu pacientul respirând pe gură, comparativ, simetric, în toate câmpurile',
        'Descrii murmurul vezicular și zgomotele supraadăugate (raluri, frecătură pleurală)',
        'Integrezi datele într-un sindrom (condensare, pleural lichidian, obstructiv etc.)',
      ],
      tips:
        'Examinarea trebuie să fie mereu comparativă stânga-dreapta. Asistentul urmărește dacă poți încadra datele într-un sindrom, nu doar enumerarea lor.',
    },
    {
      id: 'sem-s4',
      name: 'Examenul aparatului cardiovascular',
      category: 'Examen clinic',
      steps: [
        'Pacient în decubit dorsal cu toracele ridicat, examinatorul în dreapta',
        'Inspecție: facies, cianoză, turgescența jugularelor, șocul apexian vizibil, deformări toracice',
        'Palpare: șocul apexian (sediu, amplitudine), freamăt, pulsații anormale',
        'Percuția matității cardiace (opțional, valoare limitată)',
        'Auscultație în focarele mitral, tricuspidian, aortic, pulmonar și Erb, cu membrana și clopotul',
        'Descrii zgomotele cardiace, ritmul, frecvența, zgomotele supraadăugate și suflurile',
        'Manevre: decubit lateral stâng (focar mitral), aplecat înainte în expir (sufluri aortice)',
        'Examenul vaselor: pulsuri periferice, tensiune arterială, auscultația carotidelor',
      ],
      tips:
        'Palpează pulsul carotidian sau radial în timp ce asculți, ca să identifici sistola. Un suflu se descrie complet: localizare, timp, intensitate, iradiere, timbru.',
    },
    {
      id: 'sem-s5',
      name: 'Examenul abdomenului',
      category: 'Examen clinic',
      steps: [
        'Pacient în decubit dorsal, relaxat, cu genunchii ușor flectați; mâinile examinatorului calde',
        'Inspecție: formă, cicatrici, circulație colaterală, mișcările respiratorii, orificii herniare',
        'Auscultație înainte de palpare: zgomote hidroaerice, sufluri vasculare',
        'Percuție: timpanism și matitate, matitatea deplasabilă la ascită, limitele ficatului',
        'Palpare superficială pe cadrane, începând de la zona nedureroasă',
        'Palpare profundă: mase, sensibilitate, apărare musculară',
        'Palparea ficatului și splinei, a rinichilor (manevrele de balotare)',
        'Căutarea semnelor de iritație peritoneală (Blumberg) și examinarea orificiilor herniare',
      ],
      tips:
        'Privește fața pacientului în timpul palpării, ca să observi durerea. Auscultația se face înaintea palpării, ca să nu modifici peristaltica.',
    },
    {
      id: 'sem-s6',
      name: 'Măsurarea TA și a pulsului',
      category: 'Manevră',
      steps: [
        'Pacientul în repaus de câteva minute, așezat, cu brațul sprijinit la nivelul inimii',
        'Alegi o manșetă de dimensiuni potrivite pentru circumferința brațului',
        'Aplici manșeta pe braț, deasupra plicii cotului, cu artera brahială palpată',
        'Umfli manșeta până la dispariția pulsului radial, apoi încă puțin',
        'Desumfli lent și asculți cu stetoscopul pe artera brahială: primul zgomot = TA sistolică, dispariția zgomotelor = TA diastolică',
        'La prima consultație măsori la ambele brațe și repeți măsurarea',
        'Pulsul radial: palpezi cu degetele 2–4, numeri un minut, apreciezi ritmul, amplitudinea și simetria',
        'Notezi valorile, brațul și poziția pacientului',
      ],
      tips:
        'Greșeli frecvente: manșetă prea mică, brațul nesprijinit, desumflare prea rapidă. Pulsul nu se palpează cu policele, care are puls propriu.',
    },
  ],
}
