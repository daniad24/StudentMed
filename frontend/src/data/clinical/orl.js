// ORL – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'orl-c1',
      title: 'Copil cu durere de ureche și febră',
      setting: 'Cabinet – medicină de familie / ORL',
      presentation:
        'Fetiță de 2 ani adusă de părinți pentru febră, iritabilitate și plâns intens de o noapte, cu atingerea frecventă a urechii drepte. În ultimele zile a avut rinoree și tuse. Frecventează creșa. Nu a mai avut episoade similare și nu are alte boli.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul otalgiei, febra, iritabilitatea, tulburările de somn și de alimentație\n• Infecție de căi respiratorii superioare recentă\n• Otoree, scăderea auzului\n• Vărsături, letargie, cefalee, tumefacție retroauriculară (semne de complicații)\n• Episoade anterioare de otită, tratamente antibiotice recente, alergii\n• Factori de risc: colectivitate, fumat pasiv, alimentația la biberon în decubit, status vaccinal',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Otoscopie bilaterală: membrană timpanică dreaptă congestionată, opacă, bombată, cu reperele șterse\n• Eventual perforație cu otoree purulentă\n• Regiunea retroauriculară: tumefacție, eritem, pavilion împins înainte (mastoidită)\n• Examen faringian și al foselor nazale (rinofaringită)\n• Semne vitale, starea de hidratare, semne meningiene',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este clinic, otoscopic\n• Nu sunt necesare investigații de rutină în forma necomplicată\n• Examen bacteriologic din secreția otică dacă există otoree sau evoluție nefavorabilă\n• Hemoleucogramă, markeri inflamatori la stare generală alterată\n• CT de mastoidă la suspiciune de complicații\n• Timpanometrie și audiometrie la distanță, dacă persistă lichidul retrotimpanic',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Otită medie acută congestivă/supurată dreaptă, secundară unei rinofaringite.\nDiagnostic diferențial:\n• Otita medie seroasă (lichid retrotimpanic fără semne inflamatorii acute)\n• Otita externă (durere la tracțiunea pavilionului, conduct edemațiat)\n• Corp străin, dop de cerumen\n• Otalgie reflexă (dentară, faringiană)\n• Complicații: mastoidită acută',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Analgezice și antitermice – obligatorii\n• Antibioterapie (aminopenicilină ca primă intenție) în funcție de vârstă, severitate și bilateralitate; în cazuri selectate se poate aplica observarea atentă cu reevaluare\n• Dezobstrucție nazală, toaleta nazală cu ser fiziologic\n• Reevaluare dacă nu se ameliorează în câteva zile sau apar semne de complicații\n• Control otoscopic după vindecare; evaluarea auzului la persistența lichidului retrotimpanic',
        },
      ],
      takeaways: [
        'Diagnosticul de otită medie acută se pune otoscopic: timpan bombat, congestionat.',
        'Analgezia este parte esențială a tratamentului.',
        'Tumefacția retroauriculară cu pavilion împins anterior sugerează mastoidită.',
        'Otita medie acută la copilul mic urmează adesea unei rinofaringite.',
      ],
    },
    {
      id: 'orl-c2',
      title: 'Sângerare nazală la un vârstnic hipertensiv',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 72 de ani se prezintă pentru sângerare nazală din fosa nazală stângă, debutată în urmă cu o oră, care nu s-a oprit la compresiune. Are hipertensiune arterială și fibrilație atrială, pentru care primește tratament anticoagulant. Este anxios și a înghițit o cantitate de sânge.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, durata, cantitatea aproximativă de sânge pierdut, partea afectată, sângerare anterioară sau posterioară (scurgere în faringe)\n• Episoade anterioare\n• Medicație: anticoagulante, antiagregante, antiinflamatoare\n• Comorbidități: hipertensiune, boli hepatice, tulburări de coagulare, boli hematologice\n• Traumatisme, intervenții nazale, obstrucție nazală unilaterală cronică (tumoră)\n• Semne de hipovolemie: amețeală, lipotimie',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Evaluarea stării generale și hemodinamice: puls, tensiune arterială, paloare, transpirații\n• Pacientul șezând, aplecat ușor înainte, cu protecția personalului (mănuși, mască, ochelari)\n• Rinoscopie anterioară după evacuarea cheagurilor: identificarea punctului de sângerare (pata vasculară Kiesselbach pe sept, anterior)\n• Examinarea faringelui pentru scurgere de sânge posterioară\n• Semne de sângerare în alte teritorii (peteșii, echimoze)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă: hemoglobină (poate fi inițial normală în sângerarea acută), trombocite\n• Teste de coagulare: timp de protrombină și INR (efectul anticoagulantului), aPTT\n• Grup sanguin și Rh în sângerările importante\n• Endoscopie nazală la distanță sau în sângerările recidivante, posterioare\n• Imagistică (CT sinusal) la suspiciune de tumoră',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Epistaxis anterior stâng la un pacient vârstnic, hipertensiv, sub tratament anticoagulant.\nDe stabilit / diferențiat:\n• Epistaxis anterior vs. posterior (mai sever, frecvent la vârstnici)\n• Cauze locale: traumatism, infecții, tumori nazo-sinusale\n• Cauze generale: tulburări de coagulare, boli hematologice, boala Rendu-Osler\n• Hemoptizia sau hematemeza cu exteriorizare nazală',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Prim ajutor: poziție șezândă, aplecat înainte, compresiune fermă pe aripile nazale, continuă, câteva minute; scuiparea sângelui\n• Echilibrare hemodinamică dacă e necesar; controlul tensiunii arteriale\n• Anestezie și vasoconstricție locală, apoi cauterizarea punctului de sângerare vizibil\n• Tamponament anterior dacă sângerarea persistă; tamponament posterior sau tratament endoscopic/embolizare în epistaxisul posterior (în serviciul ORL)\n• Evaluarea anticoagulării împreună cu cardiologul, fără oprirea automată a tratamentului\n• Educație: evitarea traumatismelor nazale, umidifierea mucoasei',
        },
      ],
      takeaways: [
        'Compresiunea corectă: aripile nazale, cu capul aplecat înainte, nu pe spate.',
        'Evaluează întâi starea hemodinamică.',
        'Majoritatea epistaxisurilor sunt anterioare, din pata vasculară Kiesselbach.',
        'Epistaxisul unilateral recidivant cu obstrucție nazală impune excluderea unei tumori.',
      ],
    },
    {
      id: 'orl-c3',
      title: 'Răgușeală persistentă la un fumător',
      setting: 'Ambulatoriu – ORL',
      presentation:
        'Bărbat de 61 de ani se prezintă pentru răgușeală persistentă de aproximativ două luni, fără ameliorare după tratament simptomatic. Fumează de peste 30 de ani și consumă alcool frecvent. În ultimele săptămâni are senzație de corp străin în gât. Nu a avut febră.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și durata disfoniei, evoluția (progresivă, fluctuantă)\n• Simptome asociate: disfagie, odinofagie, otalgie reflexă, dispnee, stridor, tuse, hemoptizie\n• Scădere ponderală, adenopatii cervicale observate\n• Factori de risc: fumat, alcool, expunere profesională, reflux gastroesofagian, suprasolicitare vocală\n• Intervenții chirurgicale cervicale sau toracice (leziune de nerv laringeu recurent)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Calitatea vocii, prezența stridorului, a dispneei\n• Examen ORL complet: cavitate bucală, orofaringe\n• Laringoscopie indirectă sau fibroscopie: leziune vegetantă, ulcerată sau albicioasă pe o coardă vocală; mobilitatea corzilor vocale\n• Palparea gâtului: adenopatii laterocervicale, mobilitatea laringelui, glanda tiroidă\n• Starea generală, semne de denutriție',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Endoscopie laringiană (fibroscopie) – examen cheie\n• Laringoscopie directă sub anestezie cu biopsie și examen histopatologic: confirmă tipul tumorii (de regulă carcinom scuamocelular)\n• CT sau RMN cervical pentru extensia locală și ganglionară\n• Radiografie sau CT toracic (tumori sincrone, metastaze)\n• Evaluare generală preterapeutică, inclusiv nutrițională',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Suspiciune de neoplasm laringian (glotic) la un fumător – de confirmat histopatologic.\nDiagnostic diferențial:\n• Laringită cronică, leucoplazie, papilomatoză laringiană\n• Noduli, polipi sau chisturi ale corzilor vocale\n• Paralizie de coardă vocală (inclusiv prin neoplasm pulmonar, tiroidian sau esofagian)\n• Laringită de reflux',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Decizie în comisie multidisciplinară, în funcție de stadiu\n• Stadii precoce: chirurgie (inclusiv endoscopică) sau radioterapie, cu prezervarea funcției vocale\n• Stadii avansate: chirurgie extinsă (laringectomie, evidare ganglionară) și/sau radiochimioterapie\n• Renunțarea la fumat și alcool, suport nutrițional, reabilitare vocală\n• Urmărire periodică pentru recidive și al doilea cancer primar',
        },
      ],
      takeaways: [
        'Disfonia persistentă câteva săptămâni la un fumător impune examinarea laringelui.',
        'Diagnosticul de cancer laringian se pune prin biopsie.',
        'Stadiile precoce glotice au prognostic bun, deoarece disfonia apare devreme.',
        'Paralizia de coardă vocală poate fi semnul unei tumori la distanță (pulmonară, tiroidiană).',
      ],
    },
  ],
  skills: [
    {
      id: 'orl-s1',
      name: 'Otoscopia',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea, obții acordul; începi cu urechea sănătoasă sau cea nesimptomatică.',
        'Inspectezi și palpezi pavilionul și regiunea retroauriculară; verifici durerea la tracțiunea pavilionului și la presiunea pe tragus.',
        'Alegi specul de mărimea potrivită pentru conduct.',
        'Rectifici conductul auditiv: la adult tracționezi pavilionul în sus și înapoi; la copilul mic, în jos și înapoi.',
        'Ții otoscopul ca pe un creion, sprijinind mâna de obrazul pacientului, pentru a evita lezarea la mișcări bruște.',
        'Introduci specul cu blândețe și examinezi conductul: cerumen, corpi străini, secreții, edem.',
        'Examinezi membrana timpanică: culoare, transparență, poziție (bombată, retractată), triunghiul luminos, mânerul ciocanului, perforații.',
        'Compari cu urechea controlaterală și descrii constatările.',
      ],
      tips: 'Fără sprijinirea mâinii de capul pacientului riști leziuni, mai ales la copii. Triunghiul luminos absent nu este suficient singur pentru diagnosticul de otită.',
    },
    {
      id: 'orl-s2',
      name: 'Rinoscopia anterioară',
      category: 'Examen clinic',
      steps: [
        'Pacientul șezând, cu capul la nivelul examinatorului; sursă de lumină reflectată sau frontală.',
        'Inspectezi piramida nazală: deformări, tumefacții, leziuni tegumentare.',
        'Verifici permeabilitatea fiecărei fose nazale.',
        'Introduci speculul nazal închis, cu blândețe, în vestibul, apoi îl deschizi ușor, fără a atinge septul.',
        'Examinezi în prima poziție (capul drept): planșeul, cornetul inferior, partea anterioară a septului (pata vasculară Kiesselbach).',
        'Examinezi în a doua poziție (capul ușor extins): cornetul mijlociu, meatul mijlociu, partea superioară a septului.',
        'Descrii mucoasa (culoare, umiditate), secrețiile, deviațiile de sept, polipii sau formațiunile.',
        'Scoți speculul ușor deschis, pentru a nu prinde firele de păr din vestibul.',
      ],
      tips: 'Atingerea septului cu speculul este dureroasă și poate provoca sângerare. Polipul nazal este insensibil la palpare, spre deosebire de cornetul hipertrofiat.',
    },
    {
      id: 'orl-s3',
      name: 'Examenul faringelui',
      category: 'Examen clinic',
      steps: [
        'Pacientul șezând, cu gura larg deschisă; lumină frontală bună; mănuși.',
        'Examinezi buzele, mucoasa jugală, dinții, gingiile, limba și planșeul bucal.',
        'Apeși cu apăsătorul de limbă pe două treimi anterioare ale limbii, fără a atinge baza limbii (reflex de vomă).',
        'Examinezi vălul palatin și uvula: simetrie, mobilitate la fonația vocalei „a”.',
        'Examinezi amigdalele palatine: dimensiune, culoare, depozite, criptele, simetria; pilierii amigdalieni.',
        'Examinezi peretele posterior al faringelui: granulații, secreții, bombări.',
        'Palpezi regiunea cervicală pentru adenopatii asociate.',
        'Descrii constatările (ex. angină eritematoasă, eritemato-pultacee, flegmon periamigdalian – bombare unilaterală cu uvula deviată).',
      ],
      tips: 'Asimetria amigdalelor sau o ulcerație persistentă la adult necesită evaluare pentru neoplasm. Trismusul cu bombare periamigdaliană sugerează flegmon.',
    },
    {
      id: 'orl-s4',
      name: 'Probele acumetrice (Rinne, Weber)',
      category: 'Examen clinic',
      steps: [
        'Explici probele; folosești un diapazon (în practică frecvent de 512 Hz), pe care îl pui în vibrație prin lovire ușoară.',
        'Proba Weber: așezi diapazonul pe linia mediană a craniului (vertex sau frunte) și întrebi în ce ureche aude mai tare.',
        'Interpretare Weber: normal – sunet perceput median; lateralizat spre urechea bolnavă în hipoacuzia de transmisie și spre urechea sănătoasă în hipoacuzia de percepție.',
        'Proba Rinne: așezi diapazonul pe mastoidă (conducere osoasă) până când pacientul nu mai aude, apoi îl aduci în fața conductului auditiv (conducere aeriană).',
        'Interpretare Rinne: pozitiv (aerian mai bun decât osos) – normal sau hipoacuzie de percepție; negativ (osos mai bun) – hipoacuzie de transmisie.',
        'Repeți Rinne pentru cealaltă ureche și corelezi rezultatele celor două probe.',
        'Confirmi orice suspiciune prin audiometrie tonală.',
      ],
      tips: 'Studenții inversează frecvent lateralizarea Weber. Reține: în transmisie, Weber merge spre urechea bolnavă și Rinne este negativ pe acea ureche.',
    },
    {
      id: 'orl-s5',
      name: 'Examenul ganglionilor cervicali',
      category: 'Examen clinic',
      steps: [
        'Pacientul șezând, cu capul ușor flectat spre partea examinată pentru relaxarea mușchilor; examinatorul în spatele pacientului.',
        'Inspectezi gâtul: asimetrii, tumefacții, fistule, cicatrici.',
        'Palpezi bilateral, sistematic: submentonier, submandibular, preauricular, retroauricular, occipital.',
        'Palpezi lanțul jugular (anterior de sternocleidomastoidian, de sus în jos) și lanțul spinal (posterior).',
        'Palpezi regiunea supraclaviculară, inclusiv cu pacientul tușind sau cu umerii relaxați.',
        'Descrii fiecare ganglion: localizare, dimensiune, consistență, sensibilitate, mobilitate, aderență.',
        'Examinezi teritoriile de drenaj: cavitate bucală, faringe, laringe, tiroidă, glande salivare, scalp.',
        'Formulezi concluzia: adenopatie inflamatorie sau suspectă (dură, nedureroasă, fixă).',
      ],
      tips: 'O adenopatie cervicală persistentă la un adult fumător este suspectă de metastază a unui cancer ORL până la proba contrarie – examinează complet căile aerodigestive superioare.',
    },
  ],
}
