// Chirurgie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'chi-c1',
      title: 'Durere în fosa iliacă dreaptă',
      setting: 'Camera de gardă',
      presentation:
        'Tânăr de 22 de ani se prezintă pentru durere abdominală apărută de aproximativ 18 ore, inițial periombilicală, apoi localizată în fosa iliacă dreaptă. Acuză greață, a vărsat o dată și nu are poftă de mâncare. Are o subfebrilitate. Nu are antecedente patologice sau intervenții chirurgicale.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Cronologia durerii: debut periombilical, migrare în fosa iliacă dreaptă\n• Greață, vărsături (apar după durere), inapetență, febră\n• Tranzit intestinal, simptome urinare (disurie, hematurie)\n• La femei: data ultimei menstruații, posibilă sarcină, scurgeri vaginale\n• Antecedente chirurgicale, episoade asemănătoare',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Febră moderată, tahicardie ușoară\n• Sensibilitate maximă în punctul McBurney\n• Semne de iritație peritoneală: Blumberg pozitiv, apărare musculară în fosa iliacă dreaptă\n• Semnul Rovsing, semnul psoasului, durere la tuse\n• Tușeul rectal poate evidenția sensibilitate în fundul de sac Douglas drept',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă: leucocitoză cu neutrofilie; proteina C reactivă crescută\n• Sumar de urină (excluderea infecției urinare/litiazei)\n• Test de sarcină la femeile de vârstă fertilă\n• Ecografie abdominală: apendice mărit, necompresibil, lichid periapendicular\n• CT abdominal în cazurile neclare, mai ales la vârstnici',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: apendicită acută.\nDiagnostic diferențial:\n• Adenită mezenterică, gastroenterită\n• Colică renală dreaptă, pielonefrită\n• Diverticulită Meckel, boală Crohn ileală\n• La femei: sarcină ectopică, chist ovarian rupt sau torsionat, anexită',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Repaus alimentar, hidratare intravenoasă, analgezie\n• Antibioprofilaxie/antibioterapie\n• Apendicectomie (laparoscopică sau clasică)\n• Monitorizare postoperatorie: durere, febră, tranzit, plagă (infecție), abces rezidual\n• Apendicita complicată (plastron, abces) poate necesita tratament conservator și drenaj inițial',
        },
      ],
      takeaways: [
        'Durerea care migrează din periombilical în fosa iliacă dreaptă este tipică apendicitei.',
        'La femeia tânără exclude întotdeauna sarcina ectopică.',
        'Analgezia nu maschează diagnosticul și nu trebuie amânată.',
        'Formele atipice sunt frecvente la copii, vârstnici și gravide.',
      ],
    },
    {
      id: 'chi-c2',
      title: 'Vărsături și oprirea tranzitului',
      setting: 'Camera de gardă',
      presentation:
        'Femeie de 72 de ani, operată în trecut pentru colecistectomie clasică și histerectomie, se prezintă pentru dureri abdominale colicative și vărsături repetate, apărute de o zi. Nu a mai avut scaun și nu a mai eliminat gaze de aproximativ 24 de ore. Abdomenul i s-a mărit progresiv.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterul durerii: colicativă (ocluzie mecanică) sau continuă și intensă (suferință vasculară, strangulare)\n• Vărsăturile: momentul apariției, aspectul (alimentar, bilios, fecaloid)\n• Ultimul scaun și ultima eliminare de gaze\n• Intervenții abdominale anterioare (aderențe), hernii cunoscute\n• Modificări de tranzit și scădere ponderală anterioare (neoplasm de colon), sângerări digestive',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Semne de deshidratare: mucoase uscate, tahicardie, hipotensiune, oligurie\n• Abdomen destins, cicatrici, peristaltism vizibil\n• Percuție: timpanism\n• Auscultație: zgomote hidroaerice intensificate, metalice (în fazele tardive pot lipsi)\n• Examinarea obligatorie a orificiilor herniare\n• Semne de iritație peritoneală (sugerează strangulare sau perforație); tușeul rectal: ampulă goală, mase',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Radiografie abdominală simplă în ortostatism: nivele hidroaerice, anse dilatate\n• CT abdominal cu substanță de contrast: sediul și cauza obstrucției, semne de ischemie\n• Hemoleucogramă, ionogramă (hipopotasemie, alcaloză prin vărsături), uree, creatinină\n• Lactat, gazometrie (suferință ischemică)\n• Grup sanguin, coagulare (pregătire preoperatorie)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: ocluzie intestinală mecanică pe intestinul subțire, prin aderențe postoperatorii.\nDiagnostic diferențial al cauzei și al tipului:\n• Hernie strangulată\n• Ocluzie colică prin neoplasm, volvulus de sigmoid\n• Ileus paralitic (postoperator, peritonită, tulburări electrolitice)\n• Ischemie mezenterică',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Repaus alimentar, sondă nazogastrică de decompresie\n• Reechilibrare hidroelectrolitică intravenoasă, sondă urinară și bilanț hidric\n• Ocluzia aderențială fără semne de suferință poate fi tratată conservator, sub supraveghere chirurgicală\n• Intervenție chirurgicală de urgență la semne de strangulare, peritonită sau lipsa ameliorării\n• Monitorizare: durere, distensie, semne vitale, debit pe sonda nazogastrică, reluarea tranzitului',
        },
      ],
      takeaways: [
        'Tetrada ocluziei: durere colicativă, vărsături, oprirea tranzitului, distensie abdominală.',
        'La orice ocluzie se examinează orificiile herniare.',
        'Durerea continuă, febra și iritația peritoneală sugerează strangulare.',
        'Corectarea pierderilor de lichide și electroliți este urgentă.',
      ],
    },
    {
      id: 'chi-c3',
      title: 'Tumefacție în regiunea inghinală',
      setting: 'Ambulatoriu de chirurgie',
      presentation:
        'Bărbat de 60 de ani, cu tuse cronică de fumător și efort la micțiune, se prezintă pentru o „umflătură” în regiunea inghinală dreaptă, apărută de câteva luni. Tumefacția apare în ortostatism și la efort și dispare când stă culcat. Acuză doar o jenă locală. Tranzitul intestinal este normal.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, evoluția, dacă tumefacția se reduce spontan sau manual\n• Durere, episoade în care tumefacția a devenit dureroasă și nu s-a mai redus\n• Factori care cresc presiunea abdominală: tuse cronică, constipație, disurie (prostată), efort fizic\n• Tranzit intestinal, vărsături (semne de complicație)\n• Intervenții anterioare în regiune, comorbidități (evaluare preoperatorie)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Examinare în ortostatism și apoi în decubit, bilateral, comparativ\n• Tumefacție deasupra ligamentului inghinal, care crește la tuse (impuls la tuse), reductibilă\n• Explorarea canalului inghinal prin invaginarea scrotului\n• Diferențierea de hernia femurală (sub ligamentul inghinal) și de patologia scrotală (hidrocel, varicocel)\n• Semne de încarcerare/strangulare: tumefacție dureroasă, ireductibilă, fără impuls la tuse',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este în principal clinic\n• Ecografie de părți moi în cazurile neclare\n• Investigații preoperatorii: hemoleucogramă, coagulare, glicemie, funcție renală, ECG, radiografie toracică după vârstă și comorbidități\n• Evaluarea cauzelor de presiune abdominală crescută (de exemplu prostata)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: hernie inghinală dreaptă necomplicată (reductibilă).\nDiagnostic diferențial:\n• Hernie femurală (mai frecventă la femei, risc mare de strangulare)\n• Hidrocel, chist de cordon spermatic, varicocel\n• Adenopatie inghinală\n• Testicul necoborât, lipom al cordonului, anevrism femural',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Tratamentul este chirurgical (cură de hernie, de regulă cu plasă), programat, deschis sau laparoscopic\n• Controlul factorilor favorizanți: tusea, constipația, disuria\n• Educarea pacientului privind semnele de strangulare: durere, ireductibilitate, vărsături, oprirea tranzitului\n• Hernia strangulată este o urgență chirurgicală\n• Postoperator: mobilizare precoce, evitarea efortului fizic intens o perioadă, urmărirea plăgii și a recidivei',
        },
      ],
      takeaways: [
        'Herniile se examinează în ortostatism, cu manevra de tuse.',
        'Hernia inghinală este deasupra, cea femurală sub ligamentul inghinal.',
        'Hernia ireductibilă și dureroasă este o urgență.',
        'Tratează și factorul care crește presiunea abdominală.',
      ],
    },
    {
      id: 'chi-c4',
      title: 'Durere abdominală după un accident rutier',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 28 de ani, adus de echipajul ambulanței după un accident rutier în care a lovit volanul cu abdomenul. Acuză durere în hipocondrul stâng, cu iradiere în umărul stâng, și amețeală. Este palid, transpirat, cu extremitățile reci. Nu are antecedente semnificative cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Mecanismul traumatismului: viteză, centura de siguranță, impact direct\n• Localizarea și iradierea durerii, apariția amețelii sau a leșinului\n• Alte leziuni: torace, cap, bazin, membre\n• Antecedente medicale, medicație (anticoagulante), alergii, ultima masă, vaccinare antitetanică\n• Folosirea alcoolului sau a drogurilor, care pot masca simptomele',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Evaluare ABCDE cu protecția coloanei cervicale\n• Tahicardie, hipotensiune sau semne de hipoperfuzie: piele rece, palidă, timp de reumplere capilară crescut\n• Inspecția abdomenului: echimoze, excoriații, distensie\n• Palpare: durere și apărare în hipocondrul stâng, posibil semne de iritație peritoneală\n• Examinarea toracelui, bazinului și a membrelor pentru leziuni asociate\n• Semnul Kehr: durere referită în umărul stâng',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Acces venos de calibru mare, grup sanguin și compatibilitate, hemoleucogramă, coagulare, biochimie\n• Ecografie FAST la pat: lichid liber intraperitoneal\n• La pacientul instabil cu FAST pozitiv nu se pierde timp cu CT\n• CT abdominal cu contrast doar dacă pacientul devine stabil, pentru stadializarea leziunilor\n• Radiografie toracică și de bazin în evaluarea primară',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: traumatism abdominal contuz cu ruptură splenică și hemoperitoneu, în șoc hemoragic.\nDiagnostic diferențial al sursei de sângerare:\n• Leziune hepatică\n• Leziune de mezenter sau vase mari\n• Hemotorace sau hemoragie retroperitoneală, fractură de bazin\n• Leziune de organ cavitar (intestin), mai rar șoc hemoragic precoce',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Resuscitare după principiile ATLS: oxigen, două linii venoase, înlocuirea volemiei, preferabil cu sânge și produse de sânge\n• Controlul hemoragiei: laparotomie de urgență pentru pacientul instabil cu FAST pozitiv\n• Intervenția poate fi splenectomie sau, dacă leziunea permite, tehnici de cruțare a splinei\n• Profilaxie antitetanică și analgezie\n• După splenectomie: vaccinări împotriva germenilor încapsulați și educarea pacientului privind riscul infecțiilor severe',
        },
      ],
      takeaways: [
        'Șocul la traumatizat este hemoragic până la proba contrarie.',
        'FAST pozitiv la instabil înseamnă laparotomie, nu CT.',
        'Durerea în umărul stâng după traumatism sugerează ruptură splenică.',
        'După splenectomie sunt necesare vaccinări și vigilență la infecții.',
      ],
    },
    {
      id: 'chi-c5',
      title: 'Durere anală intensă cu tumefacție',
      setting: 'Cabinet de chirurgie',
      presentation:
        'Bărbat de 38 de ani, cu diabet zaharat de tip 2, se prezintă pentru durere anală pulsatilă, în creștere de trei zile, care îl împiedică să stea pe scaun. Are febră mică și a observat o tumefacție dureroasă lângă anus. Durerea este accentuată de defecație.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, durata și caracterul durerii; legătura cu defecația\n• Febră, frisoane, secreție purulentă sau sângerare\n• Episoade anterioare de abcese sau fistule, boală Crohn, boli inflamatorii intestinale\n• Diabet, imunosupresie, tratamente\n• Tranzit intestinal și disurie',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Inspecția regiunii perianale: tumefacție eritematoasă, caldă, dureroasă, uneori fluctuentă\n• Palpare blândă: sensibilitate, fluctuență\n• Tușeul rectal, dacă este tolerat, pentru colecții profunde; poate necesita anestezie\n• Semne sistemice: febră, tahicardie\n• Căutarea unui orificiu fistulos extern',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă: leucocitoză; markeri inflamatori crescuți\n• Glicemie și hemoglobină glicată în diabet\n• Ecografie endoanală sau RMN pelvin pentru abcese profunde sau fistule complexe\n• Culturi din puroi, dacă se evacuează\n• Diagnosticul este în principal clinic',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: abces perianal de origine criptoglandulară.\nDiagnostic diferențial:\n• Hemoroid extern trombozat\n• Fisură anală complicată\n• Chist pilonidal infectat\n• Hidrosadenită supurativă\n• Abces în boala Crohn',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Incizie și drenaj chirurgical, de regulă sub anestezie\n• Antibioticele singure nu sunt suficiente; se pot asocia la pacienți cu risc, cum este diabetul\n• Controlul glicemiei\n• Analgezie, băi de șezut, igienă locală\n• Urmărire pentru formarea unei fistule perianale, care necesită tratament chirurgical ulterior',
        },
      ],
      takeaways: [
        'Abcesul perianal se drenează chirurgical.',
        'Diabetul crește riscul de infecții și complicații.',
        'Un abces poate lăsa o fistulă perianală.',
        'Fisura anală doare, hemoroidul intern sângerează nedureros.',
      ],
    },
  ],
  skills: [
    {
      id: 'chi-s1',
      name: 'Examenul abdomenului acut',
      category: 'Examen clinic',
      steps: [
        'Aprecierea stării generale și a semnelor vitale (șoc, febră, deshidratare)',
        'Atitudinea pacientului: imobil (peritonită) sau agitat (colică)',
        'Inspecție: distensie, cicatrici, mișcările respiratorii ale peretelui abdominal, orificii herniare',
        'Auscultație: zgomote hidroaerice prezente, intensificate sau absente',
        'Percuție: timpanism, dispariția matității hepatice (pneumoperitoneu), sensibilitate la percuție',
        'Palpare blândă, de la zona nedureroasă spre cea dureroasă: apărare, contractură, Blumberg',
        'Semne specifice: McBurney, Rovsing, Murphy, psoas',
        'Tușeul rectal și examinarea orificiilor herniare; la femei, orientarea spre cauze ginecologice',
      ],
      tips:
        'Contractura abdominală („abdomen de lemn”) indică peritonită generalizată. Nu uita orificiile herniare și testul de sarcină la femeile de vârstă fertilă.',
    },
    {
      id: 'chi-s2',
      name: 'Examenul orificiilor herniare',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea, asiguri intimitatea, descoperi regiunile inghinale bilateral',
        'Examinezi pacientul în ortostatism: inspecția tumefacțiilor în repaus și la tuse',
        'Palpezi tumefacția: consistență, sensibilitate, impuls la tuse, reductibilitate',
        'La bărbat, invaginezi scrotul cu indexul spre orificiul inghinal superficial și ceri pacientului să tușească',
        'Stabilești raportul cu ligamentul inghinal (hernie inghinală sau femurală)',
        'Repeți examinarea în decubit dorsal; verifici reducerea spontană',
        'Examinezi și regiunea ombilicală, linia albă și cicatricile postoperatorii',
        'Compari cu partea opusă și examinezi scrotul',
      ],
      tips:
        'Hernia poate să nu fie vizibilă în decubit, de aceea examinarea începe în ortostatism. Nu forța reducerea unei hernii dureroase: poate fi strangulată.',
    },
    {
      id: 'chi-s3',
      name: 'Sutura unei plăgi simple (principii)',
      category: 'Manevră',
      steps: [
        'Evaluezi plaga: mecanism, vechime, contaminare, profunzime, leziuni de vase, nervi, tendoane; statusul vaccinal antitetanic',
        'Igiena mâinilor, mănuși sterile, câmp steril',
        'Dezinfectezi tegumentul din jurul plăgii, de la centru spre periferie',
        'Anestezie locală prin infiltrare la marginile plăgii, după verificarea alergiilor',
        'Toaleta plăgii: spălare abundentă cu ser fiziologic, îndepărtarea corpilor străini, excizia țesutului devitalizat',
        'Hemostaza',
        'Sutura cu fire separate, cu acul perpendicular pe tegument, prinzând distanțe egale de o parte și de alta; nodurile pe o parte, fără tensiune excesivă',
        'Pansament steril; indicații privind îngrijirea, profilaxia antitetanică și momentul scoaterii firelor',
      ],
      tips:
        'Plăgile foarte contaminate, mușcăturile și plăgile vechi nu se suturează de regulă primar. Greșeala frecventă: strângerea prea tare a firelor, cu ischemia marginilor.',
    },
    {
      id: 'chi-s4',
      name: 'Pansamentul',
      category: 'Manevră',
      steps: [
        'Explici procedura pacientului, pregătești materialele sterile',
        'Igiena mâinilor, mănuși de unică folosință',
        'Îndepărtezi pansamentul vechi (umezit cu ser fiziologic dacă aderă) și îl arunci în recipientul pentru deșeuri infecțioase',
        'Schimbi mănușile cu mănuși sterile (sau folosești pense sterile)',
        'Inspectezi plaga: roșeață, edem, secreții, dehiscență, aspectul firelor',
        'Cureți plaga de la zona curată spre cea mai murdară, cu câte o compresă pentru fiecare trecere',
        'Aplici comprese sterile și le fixezi',
        'Notezi aspectul plăgii în foaia de observație',
      ],
      tips:
        'Principiul de bază: dinspre curat spre contaminat și o compresă nouă pentru fiecare ștergere. Semnele de infecție a plăgii se raportează medicului.',
    },
    {
      id: 'chi-s5',
      name: 'Spălătura chirurgicală a mâinilor și echiparea sterilă',
      category: 'Manevră',
      steps: [
        'Îndepărtezi bijuteriile și ceasul, unghii scurte, fără ojă; boneta și masca puse corect înainte',
        'Spălare preliminară a mâinilor și antebrațelor, curățarea spațiilor subunghiale',
        'Spălare sau frecare chirurgicală cu antiseptic, sistematic, pe toate fețele degetelor, mâinilor și antebrațelor, până deasupra cotului, cât timp indică produsul',
        'Ții mâinile deasupra nivelului coatelor, ca apa să se scurgă spre coate',
        'Usuci mâinile cu un câmp steril, de la degete spre cot, câte o parte a prosopului pentru fiecare mână',
        'Îmbraci halatul steril ținându-l de partea interioară, fără să atingi fața exterioară; asistenta îl leagă la spate',
        'Îmbraci mănușile sterile prin tehnica închisă (sau deschisă), fără contact între piele și fața exterioară a mănușii',
        'După echipare, mâinile rămân în fața corpului, deasupra taliei și sub nivelul umerilor',
      ],
      tips:
        'Orice atingere a unei suprafețe nesterile impune reluarea echipării. La colocviu se urmărește mai ales poziția mâinilor și respectarea zonei sterile.',
    },
  ],
}
