// Dermatologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'der-c1',
      title: 'Plăci descuamative pe coate și genunchi',
      setting: 'Ambulatoriu de dermatologie',
      presentation:
        'Bărbat de 34 de ani se prezintă pentru leziuni roșii, acoperite de scuame albicioase, pe coate, genunchi și în pielea capului, apărute de câțiva ani și agravate în ultimele luni, după o perioadă stresantă. Uneori are mâncărimi ușoare. Fumează și consumă alcool frecvent. Tatăl său a avut leziuni asemănătoare.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, evoluția în pusee, factorii declanșatori (stres, infecții, traumatisme, medicamente – betablocante, litiu)\n• Simptome: prurit, durere, impactul asupra calității vieții\n• Dureri și tumefieri articulare, redoare matinală (artropatie psoriazică)\n• Istoric familial de psoriazis\n• Comorbidități: obezitate, diabet, dislipidemie, HTA, depresie; consum de alcool și fumat\n• Tratamente anterioare și răspunsul la ele (inclusiv oprirea bruscă a unor corticoizi sistemici)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Plăci eritematoase, bine delimitate, acoperite de scuame albe-argintii, pe coate, genunchi, scalp\n• Gratajul metodic: semnul spermanțetului, al peliculei și al picăturii de sânge (Auspitz)\n• Leziuni liniare pe zone de traumatism (fenomen Koebner)\n• Unghii: depresiuni punctiforme, pete de ulei, onicoliză\n• Examinarea întregului tegument: ombilic, regiunea lombosacrată, pliuri, regiunea genitală\n• Examenul articulațiilor: dactilită, artrite ale interfalangienelor distale\n• Estimarea suprafeței afectate',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este în principal clinic\n• Biopsie cutanată doar în cazurile atipice: hiperkeratoză cu parakeratoză, acantoză, microabcese neutrofilice\n• Examen micologic dacă se suspectează o micoză (plăci unice, inelare) sau onicomicoză\n• Bilanț metabolic: glicemie, profil lipidic, funcție hepatică (inclusiv înaintea unui tratament sistemic)\n• Radiografii articulare și evaluare reumatologică la suspiciunea de artropatie',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Psoriazis vulgar în plăci, cu afectarea scalpului.\nDiagnostic diferențial:\n• Dermatită seboreică (scalp, față, scuame grăsoase)\n• Eczemă cronică lichenificată\n• Tinea corporis (plăci inelare, margine activă, examen micologic pozitiv)\n• Lichen plan (papule violacee, poligonale, pruriginoase)\n• Pitiriazis rozat (formă gutată)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Educarea pacientului: boală cronică, necontagioasă, cu pusee; controlul factorilor declanșatori\n• Formă ușoară: emoliente, keratolitice, corticoizi topici, analogi de vitamina D, tratamente pentru scalp\n• Formă moderat-severă sau artropatie: fototerapie, tratament sistemic clasic sau biologic, cu monitorizarea efectelor adverse\n• Renunțarea la fumat, reducerea alcoolului, controlul greutății\n• Evaluarea și tratarea comorbidităților cardiovasculare și a afectării psihologice',
        },
      ],
      takeaways: [
        'Plăci eritemato-scuamoase pe extensie + Auspitz = psoriazis.',
        'Examinează unghiile, scalpul și articulațiile.',
        'Psoriazisul se asociază cu sindrom metabolic și boli cardiovasculare.',
        'Evită corticoizii sistemici – oprirea lor poate declanșa forme severe.',
      ],
    },
    {
      id: 'der-c2',
      title: 'Erupție generalizată cu mâncărime și umflarea buzelor',
      setting: 'Camera de gardă',
      presentation:
        'Femeie de 30 de ani se prezintă cu o erupție intens pruriginoasă apărută în urmă cu o oră pe trunchi și membre, la scurt timp după ce a luat un antiinflamator pentru o durere de dinți. Buzele și pleoapele s-au umflat. Spune că simte o ușoară jenă la înghițire. Are rinită alergică sezonieră.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și relația temporală cu expunerea: medicamente, alimente, înțepături de insecte, latex, efort\n• Simptome de anafilaxie: dispnee, wheezing, disfonie, disfagie, amețeli, sincopă, vărsături, dureri abdominale\n• Episoade anterioare de urticarie sau angioedem și durata leziunilor individuale\n• Atopie personală și familială, alergii cunoscute\n• Medicație cronică (inclusiv inhibitori ai enzimei de conversie, asociați cu angioedem fără urticarie)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Prioritar: căile aeriene, respirația, circulația – frecvență respiratorie, stridor, wheezing, saturație, TA, puls\n• Urtici: papule și plăci edematoase, roz-albicioase, pruriginoase, cu contur schimbător\n• Angioedem: tumefiere a buzelor și pleoapelor; se examinează limba, uvula, vocea\n• Leziunile dispar la vitropresiune și se schimbă de la o oră la alta\n• Absența leziunilor purpurice sau a bulelor (care ar sugera alt diagnostic)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este clinic; tratamentul nu se amână pentru investigații\n• Monitorizare: TA, puls, saturație, eventual ECG\n• Triptaza serică în suspiciunea de anafilaxie, recoltată precoce, poate susține diagnosticul\n• Ulterior, la alergolog: anamneză detaliată, teste cutanate sau teste de provocare în condiții controlate, după caz\n• Urticaria acută izolată, cu cauză evidentă, nu necesită investigații extinse',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Urticarie acută cu angioedem, probabil indusă de antiinflamatorul nesteroidian; se evaluează atent posibilitatea unei anafilaxii (jenă la înghițire).\nDiagnostic diferențial:\n• Anafilaxie (afectare respiratorie sau cardiovasculară)\n• Angioedem bradikininic (fără urtici, ereditar sau medicamentos)\n• Vasculită urticariană (leziuni persistente, dureroase, cu purpură reziduală)\n• Erupții medicamentoase de alt tip (exantem, eritem polimorf)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Semne de anafilaxie: adrenalină intramusculară imediat, oxigen, abord venos, fluide, monitorizare\n• Oprirea și evitarea medicamentului suspectat\n• Antihistaminice H1 nesedative pentru urticarie și prurit; corticoizi sistemici pe termen scurt în formele extinse, ca adjuvant\n• Supraveghere până la remiterea simptomelor (risc de reacție bifazică după anafilaxie)\n• La externare: lista medicamentelor de evitat, informarea pacientei, trimitere la alergolog, eventual stilou cu adrenalină dacă a avut anafilaxie',
        },
      ],
      takeaways: [
        'În urticaria acută, evaluezi întâi căile aeriene, respirația și circulația.',
        'Angioedemul cu disfagie sau disfonie poate anunța obstrucția căilor aeriene.',
        'Adrenalina intramusculară este primul tratament în anafilaxie.',
        'Leziunea urticariană individuală este fugace; persistența sugerează vasculită.',
      ],
    },
    {
      id: 'der-c3',
      title: 'Aluniță care s-a schimbat',
      setting: 'Cabinetul medicului de familie',
      presentation:
        'Femeie de 52 de ani, cu piele deschisă și pistrui, vine pentru o aluniță de pe spate pe care soțul a observat-o mărită și mai închisă la culoare în ultimele luni. Uneori o mănâncă și a sângerat o dată la frecarea cu hainele. În tinerețe a avut frecvent arsuri solare. Sora ei a fost operată pentru „un cancer de piele”.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Vechimea leziunii și modificările: creștere, culoare, formă, sângerare, prurit\n• Expunerea la soare: arsuri solare în copilărie, expunere intermitentă intensă, solar\n• Fototipul: culoarea pielii, a părului și a ochilor, tendința la arsuri\n• Istoric personal sau familial de melanom ori alte cancere cutanate\n• Numărul de nevi, imunosupresie, tratamente anterioare ale leziunii\n• Simptome generale (scădere ponderală, adenopatii) – rare, dar importante',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Leziunea după ABCDE: asimetrie, margini neregulate, culori multiple (maro, negru, zone roșiatice), dimensiune mai mare decât a celorlalți nevi, evoluție documentată\n• Semnul „rățuștii urâte”: leziunea diferă de ceilalți nevi\n• Examinarea întregului tegument, inclusiv scalp, palme, plante, unghii, mucoase\n• Palparea ganglionilor limfatici regionali (axilari, inghinali, cervicali)\n• Dermatoscopie, dacă este disponibilă: rețea pigmentară atipică, structuri neregulate',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Trimitere la dermatolog pentru dermatoscopie și decizie chirurgicală\n• Excizie completă, cu margine îngustă, și examen histopatologic – stabilesc diagnosticul și grosimea tumorii (Breslow), ulcerația\n• Stadializarea ulterioară (biopsia ganglionului santinelă, imagistică) se decide în funcție de rezultatul histopatologic\n• Fotografie a leziunilor și a nevilor pentru urmărire',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Suspiciune de melanom cutanat (probabil cu extensie superficială).\nDiagnostic diferențial:\n• Nev displazic (atipic)\n• Keratoză seboreică pigmentată (aspect „lipit”, suprafață verucoasă)\n• Carcinom bazocelular pigmentat\n• Hemangiom trombozat sau dermatofibrom\nDiagnosticul de certitudine este histopatologic.',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Trimitere rapidă la dermatolog; excizie completă, fără distrugerea leziunii prin metode care împiedică examenul histologic\n• După confirmare: lărgirea marginilor de excizie conform stadiului, evaluare oncologică, eventual tratament sistemic în formele avansate\n• Urmărire dermatologică periodică pe termen lung (recidive, al doilea melanom)\n• Consiliere privind fotoprotecția și autoexaminarea lunară a pielii\n• Recomandarea controlului dermatologic pentru rudele de gradul I',
        },
      ],
      takeaways: [
        'Un nev care se modifică este suspect până la proba contrarie.',
        'Leziunea suspectă se excizează complet, pentru histologie.',
        'Breslow și ulcerația determină prognosticul melanomului localizat.',
        'Examinezi întotdeauna tot tegumentul și ganglionii regionali.',
      ],
    },
  ],
  skills: [
    {
      id: 'der-s1',
      name: 'Descrierea unei leziuni cutanate (morfologie și distribuție)',
      category: 'Examen clinic',
      steps: [
        'Te prezinți, obții acordul, asiguri intimitatea și o lumină bună, preferabil naturală; examinezi întregul tegument, nu doar zona arătată.',
        'Identifici leziunea elementară primară (maculă, papulă, placă, nodul, veziculă, bulă, pustulă, urtică) și eventualele leziuni secundare (scuamă, crustă, eroziune, ulcerație, lichenificare).',
        'Descrii culoarea și faci vitropresiunea: eritemul dispare, purpura persistă.',
        'Notezi dimensiunea, forma și marginile (nete sau difuze, regulate sau neregulate).',
        'Descrii suprafața și palpezi: consistență, sensibilitate, temperatură locală, mobilitate.',
        'Precizezi numărul și aranjamentul: izolate, grupate, inelare, liniare, confluente.',
        'Descrii distribuția: localizare, simetrie, zone fotoexpuse, fețe de extensie sau pliuri.',
        'Examinezi mucoasele, părul, unghiile și ganglionii regionali.',
        'Formulezi o descriere sintetică, apoi diagnosticul prezumtiv și diferențial.',
      ],
      tips: 'Greșeala frecventă este folosirea diagnosticului în loc de descriere („văd un psoriazis”). Asistentul urmărește terminologia corectă și dacă ai examinat întregul tegument.',
    },
    {
      id: 'der-s2',
      name: 'Examinarea unui nev după criteriile ABCDE',
      category: 'Examen clinic',
      steps: [
        'Afli istoricul leziunii: vechime, modificări recente, sângerare, prurit, factori de risc.',
        'Asimetria: împarți imaginar leziunea în două axe și compari jumătățile ca formă și culoare.',
        'Bordura: verifici dacă marginile sunt regulate sau neregulate, festonate, estompate.',
        'Culoarea: urmărești omogenitatea; mai multe nuanțe (maro, negru, roșu, albastru, alb) sunt suspecte.',
        'Diametrul: măsori leziunea și o compari cu ceilalți nevi.',
        'Evoluția: întrebi și, dacă există, compari cu fotografii anterioare.',
        'Aplici semnul „rățuștii urâte”: un nev care diferă de restul este suspect.',
        'Completezi cu dermatoscopia (dacă este disponibilă) și palparea ganglionilor regionali.',
        'Decizi conduita: urmărire documentată sau trimitere pentru excizie și examen histopatologic.',
      ],
      tips: 'Criteriul E (evoluția) este cel mai important în practică. Melanomul nodular poate să nu respecte ABCDE – orice leziune nouă, fermă, cu creștere rapidă este suspectă.',
    },
    {
      id: 'der-s3',
      name: 'Recoltarea pentru examen micologic',
      category: 'Manevră',
      steps: [
        'Verifici dacă pacientul a aplicat recent tratamente antifungice topice sau sistemice (pot negativa rezultatul) și notezi acest lucru.',
        'Explici procedura, folosești mănuși și dezinfectezi zona cu alcool, lăsând să se usuce.',
        'Pentru leziunile cutanate: razi cu o lamă sterilă sau o chiuretă marginea activă a leziunii, de la periferie spre centru.',
        'Pentru unghii: tai fragmente din zona afectată și recoltezi detritusul subunghial cât mai proximal.',
        'Pentru scalp: recoltezi scuame și fire de păr rupte, smulse cu pensa.',
        'Colectezi materialul pe o lamă sau într-un recipient steril, etichetat corect, cu datele pacientului și localizarea.',
        'Trimiți proba pentru examen microscopic direct cu KOH și cultură.',
        'Interpretezi: filamente miceliene la microscopie; specia se identifică prin cultură.',
      ],
      tips: 'Recoltarea din centrul leziunii în loc de marginea activă și tratamentul antifungic recent sunt cauze frecvente de rezultat fals negativ.',
    },
    {
      id: 'der-s4',
      name: 'Examenul cu lampa Wood (principii)',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea; lampa emite radiații ultraviolete cu lungime de undă lungă.',
        'Examinarea se face într-o cameră complet întunecată, după adaptarea ochilor examinatorului.',
        'Zona de examinat trebuie să fie curată, fără creme, cosmetice sau unguente (pot da fluorescență falsă).',
        'Ții lampa la mică distanță de piele și examinezi sistematic zona suspectă și pielea normală, comparativ.',
        'Interpretezi fluorescența: roșu-coral în eritrasmă, verde în unele tinea capitis cu Microsporum, galben-verzui în pitiriazisul versicolor.',
        'Pentru tulburările de pigmentare: depigmentarea din vitiligo devine mult mai evidentă.',
        'Notezi rezultatul și confirmi, la nevoie, prin examen micologic sau alte investigații.',
      ],
      tips: 'Lipsa fluorescenței nu exclude o micoză (majoritatea dermatofiților nu fluorescă). Asistentul urmărește dacă știi asocierile clasice și limitele metodei.',
    },
    {
      id: 'der-s5',
      name: 'Consilierea privind fotoprotecția',
      category: 'Comunicare',
      steps: [
        'Evaluezi riscul pacientului: fototip, nevi numeroși, istoric personal sau familial de cancer cutanat, expunere profesională, imunosupresie.',
        'Explici pe înțeles legătura dintre radiația ultravioletă, arsurile solare și cancerele cutanate.',
        'Recomanzi evitarea expunerii în orele cu radiație UV maximă și căutarea umbrei.',
        'Recomanzi protecția fizică: îmbrăcăminte acoperitoare, pălărie cu boruri largi, ochelari de soare.',
        'Explici folosirea corectă a produselor de protecție solară cu spectru larg: aplicare generoasă înainte de expunere și reaplicare după transpirație, înot sau ștergere.',
        'Descurajezi folosirea solarului și subliniezi protecția specială a copiilor.',
        'Înveți pacientul autoexaminarea pielii și semnele ABCDE, inclusiv folosirea unei oglinzi sau ajutorul unei alte persoane.',
        'Verifici înțelegerea și stabilești, la pacienții cu risc, controlul dermatologic periodic.',
      ],
      tips: 'Greșeala frecventă este prezentarea cremei de protecție ca singura măsură; ea completează, nu înlocuiește, evitarea expunerii și protecția vestimentară.',
    },
  ],
}
