// Psihiatrie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'psy-c1',
      title: 'Tristețe, insomnie și „nu mai am rost”',
      setting: 'Ambulatoriu de psihiatrie',
      presentation:
        'Bărbat de 52 de ani, trimis de medicul de familie, care de aproximativ două luni se simte trist, nu mai are plăcere pentru nimic, se trezește foarte devreme și nu mai poate adormi. A slăbit, a lipsit de la serviciu și spune că este „o povară pentru familie”. A divorțat recent și locuiește singur. Consumă alcool zilnic, în cantitate crescută în ultima perioadă.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și durata simptomelor, factori declanșatori (divorț, pierderi), impactul asupra funcționării\n• Simptomele depresive: dispoziție, anhedonie, somn, apetit, energie, concentrare, vinovăție\n• Întrebarea directă despre ideația suicidară: gânduri de moarte, intenție, plan, pregătiri, acces la mijloace, tentative anterioare\n• Episoade anterioare de depresie sau de manie/hipomanie (exclude tulburarea bipolară)\n• Consumul de alcool și de alte substanțe\n• Boli somatice și medicație (hipotiroidism, corticoterapie), antecedente familiale de depresie sau suicid\n• Rețeaua de suport: familie, prieteni, copii',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Examen psihic: ținută neglijată, mimică tristă, contact vizual redus, lentoare psihomotorie\n• Vorbire lentă, monotonă, cu latență a răspunsurilor\n• Dispoziție depresivă, afect congruent, idei de inutilitate și vinovăție, lipsă de speranță\n• Ideație suicidară pasivă, fără plan structurat (se consemnează exact)\n• Fără halucinații sau idei delirante; orientat, cu insight parțial\n• Examen somatic general: greutate, semne de hipotiroidism, semne de consum cronic de alcool',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă, glicemie, ionogramă, funcție renală și hepatică (consum de alcool: macrocitoză, GGT crescută)\n• TSH – exclude hipotiroidismul\n• La nevoie: vitamina B12, acid folic\n• Scale de severitate a depresiei, ca instrument complementar\n• Imagistică cerebrală doar dacă există semne neurologice, debut atipic sau deficit cognitiv\n• Rezultatele sunt de obicei normale; investigațiile servesc excluderii cauzelor organice',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Episod depresiv major, cu risc suicidar crescut (sex masculin, divorț recent, izolare, consum de alcool, lipsă de speranță).\nDiagnostic diferențial:\n• Depresie în cadrul unei tulburări bipolare (se caută episoade maniacale anterioare)\n• Tulburare depresivă indusă de alcool\n• Depresie secundară unei boli somatice (hipotiroidism) sau medicamentelor\n• Reacție de doliu sau tulburare de adaptare\n• Debutul unei demențe (la vârstnic)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Prioritar: siguranța – evaluarea gradului de risc; risc înalt = internare, inclusiv nevoluntară dacă există pericol iminent\n• Implicarea familiei (cu acordul pacientului), îndepărtarea mijloacelor letale\n• Antidepresiv (de regulă ISRS) și psihoterapie; explici că efectul apare după câteva săptămâni\n• Tratamentul consumului de alcool (abstinență, prevenirea sevrajului)\n• Reevaluare frecventă la început: răspuns, efecte adverse, ideație suicidară\n• Continuarea tratamentului după remisiune pentru prevenirea recăderii',
        },
      ],
      takeaways: [
        'Ideația suicidară se întreabă direct, la fiecare pacient depresiv.',
        'Înainte de antidepresiv, caută episoade maniacale în antecedente.',
        'Bărbat, izolat, cu alcool și lipsă de speranță = risc suicidar crescut.',
        'Excluzi cauzele organice: TSH, medicație, substanțe.',
      ],
    },
    {
      id: 'psy-c2',
      title: 'Pacient confuz și agitat după o intervenție chirurgicală',
      setting: 'Secția de chirurgie (consult psihiatric de gardă)',
      presentation:
        'Bărbat de 58 de ani, operat de urgență în urmă cu trei zile pentru o hernie încarcerată. Din noaptea trecută este agitat, își smulge perfuzia, spune că vede gândaci pe pereți și nu recunoaște unde se află. Familia relatează că bea zilnic de mulți ani. Este transpirat și tremură.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• De la familie: cantitatea și durata consumului de alcool, data ultimului consum, episoade anterioare de sevraj sau convulsii\n• Debutul și evoluția confuziei (acut, fluctuant, agravare nocturnă)\n• Alte substanțe, medicație actuală (opioide postoperatorii, sedative)\n• Boli cunoscute: ciroză, diabet, epilepsie, traumatisme craniene recente\n• Simptome de infecție, durere, retenție urinară',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Semne vitale: tahicardie, hipertensiune, febră, tahipnee, saturație\n• Examen psihic: conștiență fluctuantă, dezorientare temporo-spațială, inatenție, halucinații vizuale zoopsice, agitație\n• Tremor amplu, transpirații, midriază\n• Examen neurologic: nistagmus, oftalmoplegie, ataxie (encefalopatie Wernicke), semne de focar, semne de traumatism cranian\n• Plaga operatorie, abdomen, semne de infecție, glob vezical\n• Stigmate de hepatopatie cronică',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Glicemie imediat\n• Ionogramă (sodiu, potasiu, magneziu, fosfor), funcție renală și hepatică, amoniemie dacă se suspectează encefalopatie hepatică\n• Hemoleucogramă, markeri inflamatori, hemoculturi și sumar de urină dacă e febril\n• Gazometrie, saturație de oxigen\n• CT cerebral dacă există traumatism, semne de focar sau evoluție atipică\n• Așteptat: hipokaliemie, hipomagneziemie, macrocitoză, GGT crescută',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Delirium tremens (sevraj alcoolic complicat) la un pacient internat, cu oprirea bruscă a consumului.\nDiagnostic diferențial:\n• Delirium de altă cauză: infecție postoperatorie, hipoxie, tulburări electrolitice, medicamente\n• Encefalopatie Wernicke (poate coexista)\n• Encefalopatie hepatică\n• Hipoglicemie\n• Hematom subdural după o cădere nedeclarată',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Urgență medicală: monitorizare continuă, eventual terapie intensivă\n• Benzodiazepine, titrate după simptome, ca tratament de bază al sevrajului\n• Tiamină parenteral, înaintea glucozei\n• Rehidratare, corectarea potasiului și magneziului\n• Mediu liniștit, luminat, reorientare; contenție doar ca ultimă soluție, conform protocolului\n• După stabilizare: discuție motivațională, trimitere pentru tratamentul dependenței',
        },
      ],
      takeaways: [
        'La orice pacient internat cu consum cronic de alcool, anticipezi sevrajul.',
        'Halucinații vizuale + disautonomie + confuzie = delirium tremens.',
        'Tiamina înaintea glucozei, benzodiazepinele ca bază a tratamentului.',
        'Caută mereu și alte cauze de delirium: infecție, hipoglicemie, traumatism.',
      ],
    },
    {
      id: 'psy-c3',
      title: 'Tânăr care aude voci și se închide în cameră',
      setting: 'Camera de gardă psihiatrie',
      presentation:
        'Bărbat de 21 de ani, student, adus de părinți. De câteva luni s-a retras de la cursuri și de prieteni, stă închis în cameră și și-a acoperit laptopul cu bandă adezivă. Spune că vecinii îl urmăresc și îi „citesc gândurile”, iar o voce îi comentează tot ce face. Fumează canabis ocazional. Nu are antecedente psihiatrice cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și evoluția: perioada prodromală (izolare, scăderea randamentului), durata simptomelor psihotice\n• Conținutul halucinațiilor (voci care comentează sau dau comenzi – inclusiv de a se răni sau de a răni pe alții)\n• Ideile delirante și comportamentul determinat de ele\n• Consumul de substanțe: canabis, stimulante, alcool\n• Simptome afective: episoade depresive sau maniacale\n• Antecedente familiale de psihoză, boli neurologice, traumatisme craniene\n• Heteroanamneza de la părinți: schimbările observate',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Examen psihic: suspiciozitate, contact vizual redus, afect aplatizat\n• Halucinații auditive comentative, idei delirante de persecuție și de transmitere a gândurilor\n• Gândire cu tendință la dezorganizare\n• Conștiență clară, orientat temporo-spațial (sugerează o psihoză funcțională, nu delirium)\n• Insight absent\n• Evaluarea riscului: comenzi imperative, ideație suicidară sau heteroagresivă\n• Examen somatic și neurologic pentru excluderea unei cauze organice',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Test toxicologic urinar (canabis, stimulante)\n• Hemoleucogramă, glicemie, ionogramă, funcție renală, hepatică și tiroidiană\n• Serologie pentru sifilis și HIV, la indicație\n• Imagistică cerebrală (RMN sau CT) la primul episod psihotic sau la semne neurologice\n• EEG dacă se suspectează epilepsie\n• Valori de referință înainte de antipsihotic: greutate, glicemie, lipide, ECG',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Prim episod psihotic, cu tablou sugestiv pentru schizofrenie (diagnosticul se confirmă în timp, după durata evoluției).\nDiagnostic diferențial:\n• Tulburare psihotică indusă de substanțe (canabis, stimulante)\n• Tulburare schizofreniformă sau psihotică scurtă (durată mai mică)\n• Tulburare bipolară sau depresie cu simptome psihotice\n• Cauze organice: tumori cerebrale, encefalite, epilepsie de lob temporal, boli endocrine',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Internare dacă există risc pentru sine sau pentru alții sau incapacitate de autoîngrijire\n• Antipsihotic, de obicei atipic, cu titrare progresivă și monitorizarea efectelor adverse (extrapiramidale, metabolice)\n• Psihoeducația pacientului și a familiei, oprirea consumului de canabis\n• Plan de urmărire: aderență, recădere, risc suicidar\n• Reabilitare psihosocială: reluarea studiilor, suport',
        },
      ],
      takeaways: [
        'Primul episod psihotic impune excluderea cauzelor organice și toxice.',
        'Conștiența clară deosebește psihoza funcțională de delirium.',
        'Canabisul poate declanșa sau agrava psihoza.',
        'Monitorizarea metabolică începe înaintea antipsihoticului.',
      ],
    },
  ],
  skills: [
    {
      id: 'psy-s1',
      name: 'Examenul psihic structurat',
      category: 'Examen clinic',
      steps: [
        'Te prezinți, explici scopul discuției, asiguri un loc liniștit și confidențialitatea; începi cu întrebări deschise.',
        'Descrii aspectul și comportamentul: ținută, igienă, mimică, contact vizual, atitudine, activitate psihomotorie.',
        'Evaluezi conștiența și orientarea temporală, spațială și față de propria persoană.',
        'Notezi caracteristicile vorbirii: ritm, debit, volum, coerență.',
        'Evaluezi dispoziția (cum se simte, în cuvintele pacientului) și afectul observat.',
        'Explorezi gândirea: forma (fuga de idei, incoerență) și conținutul (idei delirante, obsesii, idei de suicid sau heteroagresivitate).',
        'Întrebi despre tulburări de percepție: voci, imagini, alte senzații neobișnuite.',
        'Evaluezi pe scurt funcțiile cognitive, conștiința bolii (insight) și capacitatea de judecată.',
        'Redactezi examenul psihic descriptiv, folosind cuvintele pacientului pentru fenomenele importante.',
      ],
      tips: 'Greșeala clasică este confuzia dintre iluzie și halucinație sau dintre obsesie și idee delirantă. Asistentul urmărește dacă ai întrebat explicit despre suicid.',
    },
    {
      id: 'psy-s2',
      name: 'Evaluarea riscului suicidar',
      category: 'Comunicare',
      steps: [
        'Stabilești un climat empatic, fără judecată; explici că întrebările sunt puse tuturor pacienților în situații asemănătoare.',
        'Pornești de la întrebări generale: „Ați simțit că viața nu mai merită trăită?”.',
        'Continui gradat: gânduri de moarte, idei de suicid, frecvența și intensitatea lor.',
        'Întrebi despre intenție și plan concret: metodă, moment, loc, pregătiri, scrisori de adio.',
        'Verifici accesul la mijloace (medicamente, arme, înălțimi).',
        'Afli tentativele anterioare și circumstanțele lor.',
        'Identifici factorii de risc (alcool, izolare, boală cronică, pierderi) și de protecție (familie, copii, credință, speranță).',
        'Stabilești nivelul de risc și planul: supraveghere, îndepărtarea mijloacelor, implicarea familiei, internare la risc înalt.',
        'Documentezi în foaia de observație evaluarea și decizia luată.',
      ],
      tips: 'Întrebarea directă nu crește riscul; ocolirea ei este greșeala majoră. Atenție la ameliorarea bruscă, neexplicată, a unui pacient sever deprimat.',
    },
    {
      id: 'psy-s3',
      name: 'Evaluarea cognitivă de bază (orientare, atenție, memorie)',
      category: 'Examen clinic',
      steps: [
        'Verifici că pacientul aude și vede bine (ochelari, aparat auditiv) și că înțelege limba; notezi nivelul de școlarizare.',
        'Orientarea temporală: an, lună, zi, anotimp; orientarea spațială: țară, oraș, instituție, secție.',
        'Memoria imediată: spui trei cuvinte și ceri repetarea lor imediată.',
        'Atenția: numărare inversă din 7 în 7 de la 100 sau spunerea lunilor anului în ordine inversă.',
        'Memoria de scurtă durată: ceri reamintirea celor trei cuvinte după câteva minute.',
        'Limbajul: denumirea unor obiecte, repetarea unei propoziții, executarea unei comenzi în trei timpi.',
        'Praxia constructivă și funcțiile executive: copierea unui desen sau testul ceasului.',
        'Interpretezi rezultatul în context (vârstă, școlarizare, stare de conștiență) și menționezi că testul este de screening.',
      ],
      tips: 'Un pacient cu atenție fluctuantă poate avea delirium, nu demență – nu trage concluzii dintr-o singură evaluare. Testele de screening nu pun diagnosticul etiologic.',
    },
    {
      id: 'psy-s4',
      name: 'Interviul cu pacientul agitat',
      category: 'Comunicare',
      steps: [
        'Îți asiguri siguranța: nu rămâi singur, ușa liberă în spatele tău, obiectele periculoase îndepărtate, personal disponibil.',
        'Păstrezi o distanță adecvată, poziție deschisă, fără mișcări bruște; te prezinți calm, pe nume.',
        'Vorbești rar, cu voce joasă, propoziții scurte; asculți și recunoști emoția pacientului („văd că sunteți foarte supărat”).',
        'Eviți confruntarea, ironia și promisiunile pe care nu le poți ține; oferi alegeri simple (un pahar cu apă, un loc să se așeze).',
        'Cauți cauzele organice ale agitației: hipoxie, hipoglicemie, durere, intoxicație, sevraj, delirium.',
        'Dacă de-escaladarea verbală eșuează, propui medicație pe cale orală; tratamentul parenteral și contenția sunt ultima opțiune.',
        'Contenția se aplică doar conform protocolului, de către o echipă instruită, cu monitorizare și documentare.',
        'După episod: reevaluezi pacientul și notezi motivele măsurilor luate.',
      ],
      tips: 'Siguranța echipei vine întâi, dar agitația are adesea o cauză somatică ce trebuie căutată. Asistentul urmărește dacă încerci de-escaladarea verbală înaintea oricărei constrângeri.',
    },
    {
      id: 'psy-s5',
      name: 'Comunicarea cu familia pacientului psihiatric',
      category: 'Comunicare',
      steps: [
        'Obții acordul pacientului înainte de a discuta informații medicale cu familia (cu excepțiile prevăzute de lege).',
        'Alegi un spațiu liniștit, te prezinți și afli ce știe deja familia și ce o îngrijorează.',
        'Asculți heteroanamneza: schimbările observate, comportamente de risc, consumul de substanțe.',
        'Explici boala pe înțeles, fără jargon, subliniind că este o afecțiune medicală tratabilă, nu o vină a cuiva.',
        'Prezinți planul de tratament, rolul medicației și durata estimată.',
        'Explici semnele de alarmă pentru recădere sau risc suicidar și ce trebuie făcut în acea situație.',
        'Recunoști efortul familiei și oferi informații despre suport (grupuri, servicii comunitare).',
        'Verifici înțelegerea și lași posibilitatea unor întrebări ulterioare.',
      ],
      tips: 'Confidențialitatea se respectă și în psihiatrie; informațiile primite de la familie sunt însă oricând binevenite. Evită stigmatizarea și promisiunile de vindecare rapidă.',
    },
  ],
}
