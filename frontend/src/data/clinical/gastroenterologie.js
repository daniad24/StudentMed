// Gastroenterologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'gas-c1',
      title: 'Durere epigastrică recurentă',
      setting: 'Ambulatoriu',
      presentation:
        'Bărbat de 42 de ani se prezintă pentru dureri epigastrice cu caracter de arsură, apărute de câteva luni. Durerile apar la câteva ore după masă și noaptea și se ameliorează după alimentație. Fumează și ia ocazional antiinflamatoare pentru dureri lombare. Nu a observat scaune negre și nu a slăbit.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterele durerii: sediu, caracter, ritmicitate față de mese, periodicitate, iradiere\n• Semne de alarmă: scădere ponderală, disfagie, vărsături persistente, melenă sau hematemeză, anemie, vârstă înaintată la debut\n• Consum de antiinflamatoare nesteroidiene, aspirină, anticoagulante\n• Fumat, alcool; antecedente familiale de neoplasm gastric\n• Pirozis, regurgitații (boală de reflux)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• De obicei sensibilitate epigastrică la palpare, fără apărare musculară\n• Paloare (anemie prin sângerare ocultă)\n• Mase palpabile epigastrice, adenopatie supraclaviculară stângă, hepatomegalie (semne de neoplazie)\n• Semne de perforație: apărare sau contractură, dispariția matității hepatice',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Testarea infecției cu Helicobacter pylori (test respirator cu uree, antigen fecal sau biopsie)\n• Endoscopie digestivă superioară la pacienții cu semne de alarmă sau peste o anumită vârstă: nișă ulceroasă, de obicei bulbară\n• Biopsie pentru ulcerul gastric (excluderea malignității)\n• Hemoleucogramă (anemie), sideremie',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: boală ulceroasă duodenală (asociată cu Helicobacter pylori și/sau antiinflamatoare).\nDiagnostic diferențial:\n• Dispepsie funcțională\n• Boală de reflux gastroesofagian\n• Neoplasm gastric\n• Colică biliară, pancreatită cronică\n• Cardiopatie ischemică cu durere epigastrică (la pacientul cu factori de risc)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Inhibitor de pompă de protoni\n• Eradicarea Helicobacter pylori cu schemă combinată (antisecretor + antibiotice), cu confirmarea eradicării\n• Oprirea antiinflamatoarelor nesteroidiene și a fumatului\n• Ulcerul gastric se controlează endoscopic până la vindecare\n• Educarea pacientului privind semnele de complicație (sângerare, perforație)',
        },
      ],
      takeaways: [
        'Durerea ritmată de mese și periodică orientează spre ulcer.',
        'Principalele cauze ale ulcerului sunt Helicobacter pylori și antiinflamatoarele.',
        'Semnele de alarmă impun endoscopie.',
        'Ulcerul gastric se biopsiază întotdeauna.',
      ],
    },
    {
      id: 'gas-c2',
      title: 'Scaune negre și lipotimie',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 68 de ani se prezintă pentru scaune negre, lucioase, urât mirositoare, din ultimele 24 de ore, și o lipotimie la ridicarea din pat. Ia aspirină zilnic după un infarct și a luat de curând antiinflamatoare pentru dureri articulare. În această dimineață a vărsat un conținut brun, „ca zațul de cafea”.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Aspectul sângerării: hematemeză (roșie sau „zaț de cafea”), melenă, hematochezie\n• Simptome de hipovolemie: amețeli, lipotimie, sincopă, sete\n• Medicație: antiagregante, anticoagulante, antiinflamatoare, fier sau bismut (colorează scaunul)\n• Antecedente: ulcer, boală hepatică/ciroză, consum de alcool, sângerări anterioare\n• Vărsături repetate înainte de sângerare (sindrom Mallory-Weiss)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Semne vitale: tahicardie, hipotensiune, hipotensiune ortostatică\n• Paloare, extremități reci, timp de reumplere capilară prelungit, stare de conștiență\n• Abdomen: sensibilitate epigastrică; căutarea stigmatelor de ciroză (icter, steluțe vasculare, ascită, circulație colaterală)\n• Tușeul rectal: confirmă melena',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă (hemoglobina poate fi inițial normală, scade după hemodiluție), grup sanguin și Rh, probă de compatibilitate\n• Uree crescută disproporționat față de creatinină (digestia sângelui)\n• Coagulare, teste hepatice, ionogramă\n• Endoscopie digestivă superioară precoce, după stabilizare: ulcer cu stigmate de sângerare, cu posibilitate de hemostază',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: hemoragie digestivă superioară prin ulcer peptic, favorizată de aspirină și antiinflamatoare.\nDiagnostic diferențial:\n• Hemoragie variceală (ciroză, hipertensiune portală)\n• Sindrom Mallory-Weiss\n• Esofagită, gastrită erozivă\n• Neoplasm gastric\n• Sângerare digestivă inferioară cu tranzit rapid',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Resuscitare: două căi venoase periferice de calibru mare, soluții cristaloide, transfuzie la nevoie (strategie restrictivă)\n• Evaluarea riscului cu un scor (de exemplu Glasgow-Blatchford, Rockall)\n• Inhibitor de pompă de protoni intravenos\n• Endoscopie cu hemostază endoscopică; la eșec, radiologie intervențională sau chirurgie\n• Monitorizare: puls, TA, diureză, hemoglobină, recidiva sângerării; reevaluarea antiagregării împreună cu cardiologul',
        },
      ],
      takeaways: [
        'Melena indică de regulă o sângerare de deasupra unghiului Treitz.',
        'Hemoglobina inițială subestimează pierderea de sânge.',
        'Mai întâi stabilizarea hemodinamică, apoi endoscopia.',
        'Antiagregantul nu se oprește definitiv fără evaluarea riscului cardiovascular.',
      ],
    },
    {
      id: 'gas-c3',
      title: 'Abdomen mărit de volum',
      setting: 'Secție de gastroenterologie',
      presentation:
        'Bărbat de 56 de ani, consumator cronic de alcool de mulți ani, se internează pentru creșterea progresivă a volumului abdominal în ultima lună și edeme gambiere. Acuză astenie și inapetență. Familia a observat că a devenit „galben la ochi” și ceva mai confuz în ultimele zile.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Cantitatea și durata consumului de alcool\n• Factori de risc pentru hepatite virale: transfuzii, intervenții, tatuaje, droguri intravenoase\n• Evoluția volumului abdominal, durere abdominală sau febră (peritonită bacteriană spontană)\n• Episoade de hemoragie digestivă, tulburări de somn și de comportament (encefalopatie)\n• Medicație, constipație, infecții recente (factori precipitanți)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Abdomen destins, ombilic deplisat, matitate deplasabilă pe flancuri, semnul valului\n• Circulație colaterală porto-cavă, splenomegalie\n• Stigmate hepatice: icter, steluțe vasculare, eritem palmar, ginecomastie, contractură Dupuytren\n• Ficat mic sau mărit, ferm, cu margine ascuțită\n• Asterixis (flapping tremor), confuzie: encefalopatie hepatică\n• Edeme gambiere',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Paracenteză diagnostică: număr de celule (neutrofile, pentru peritonita bacteriană spontană), albumină, proteine, cultură; gradientul albuminic ser-ascită crescut în hipertensiunea portală\n• Bilirubină, albumină scăzută, timp de protrombină prelungit (funcția de sinteză)\n• Hemoleucogramă: trombocitopenie (hipersplenism)\n• Ecografie abdominală cu Doppler: ficat neomogen, contur neregulat, splenomegalie, ascită, vena portă\n• Markeri virali, endoscopie pentru varice',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Cel mai probabil: ciroză hepatică alcoolică decompensată (ascită, icter, encefalopatie hepatică).\nDiagnostic diferențial al ascitei:\n• Carcinomatoză peritoneală\n• Insuficiență cardiacă, pericardită constrictivă\n• Sindrom nefrotic\n• Tuberculoză peritoneală\n• Tromboză de venă portă sau sindrom Budd-Chiari; carcinom hepatocelular pe ciroză',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Abstinență completă de la alcool\n• Ascită: restricție de sare, diuretice (spironolactonă, eventual furosemid); paracenteză evacuatorie cu albumină pentru ascita voluminoasă\n• Encefalopatie: corectarea factorilor precipitanți, lactuloză\n• Monitorizare: greutate, diureză, ionogramă, funcție renală\n• Screening pentru varice esofagiene și carcinom hepatocelular; evaluare pentru transplant hepatic',
        },
      ],
      takeaways: [
        'Orice ascită nou apărută sau orice pacient cirotic cu ascită internat necesită paracenteză diagnostică.',
        'Gradientul albuminic ser-ascită separă ascita portală de cea neportală.',
        'Encefalopatia hepatică are aproape întotdeauna un factor precipitant.',
        'Abstinența de alcool schimbă prognosticul cirozei alcoolice.',
      ],
    },
  ],
  skills: [
    {
      id: 'gas-s1',
      name: 'Examenul abdomenului',
      category: 'Examen clinic',
      steps: [
        'Pacient în decubit dorsal, brațele pe lângă corp, abdomenul descoperit de la xifoid la pubis',
        'Inspecție: formă, simetrie, cicatrici, circulație colaterală, ombilic, peristaltică vizibilă',
        'Auscultație: zgomote hidroaerice, sufluri vasculare (aortă, artere renale)',
        'Percuție: distribuția timpanismului și matității, matitatea deplasabilă',
        'Palpare superficială pe toate regiunile, pornind de la zona nedureroasă',
        'Palpare profundă: sensibilitate, mase, apărare musculară',
        'Ficatul, splina, rinichii; semne peritoneale',
        'Orificiile herniare și, la indicație, tușeul rectal',
      ],
      tips:
        'Urmărește fața pacientului și începe departe de zona dureroasă. Descrie o masă abdominală prin sediu, dimensiune, consistență, sensibilitate, mobilitate.',
    },
    {
      id: 'gas-s2',
      name: 'Tușeul rectal (principii)',
      category: 'Manevră',
      steps: [
        'Explici procedura și motivul ei, obții acordul, asiguri intimitatea și prezența unui însoțitor',
        'Pacient în decubit lateral stâng cu genunchii flectați (sau poziție genupectorală)',
        'Mănuși, inspecția regiunii perianale: hemoroizi, fisuri, fistule, tumori',
        'Introduci lent indexul lubrifiat, cerând pacientului să se relaxeze',
        'Apreciezi tonusul sfincterian și palpezi circumferențial peretele rectal',
        'La bărbat palpezi prostata pe fața anterioară; la femeie colul uterin',
        'Retragi degetul și examinezi conținutul de pe mănușă: scaun normal, melenă, sânge, mucus',
        'Explici pacientului rezultatul și notezi constatările',
      ],
      tips:
        'Tușeul rectal face parte din examenul complet al abdomenului și nu se omite la suspiciunea de sângerare digestivă. Comunicarea și respectarea intimității sunt evaluate la fel ca tehnica.',
    },
    {
      id: 'gas-s3',
      name: 'Evaluarea pacientului cu hemoragie digestivă',
      category: 'Examen clinic',
      steps: [
        'Evaluare rapidă ABC: căi aeriene (risc de aspirație la hematemeză), respirație, circulație',
        'Semne vitale: puls, TA, inclusiv ortostatic dacă pacientul tolerează; stare de conștiență',
        'Semne de hipoperfuzie: paloare, extremități reci, timp de reumplere capilară, diureză',
        'Montarea a două căi venoase periferice de calibru mare și recoltarea analizelor (inclusiv grup sanguin)',
        'Anamneza țintită: aspectul sângerării, medicație (antiagregante, anticoagulante), boală hepatică',
        'Examenul abdomenului și tușeul rectal',
        'Încadrarea în hemoragie digestivă superioară sau inferioară și estimarea severității',
        'Anunți medicul și pregătești pacientul pentru endoscopie',
      ],
      tips:
        'Tahicardia apare înaintea hipotensiunii; o TA normală nu exclude o pierdere importantă. La betablocați tahicardia poate lipsi.',
    },
    {
      id: 'gas-s4',
      name: 'Examenul ficatului și splinei',
      category: 'Examen clinic',
      steps: [
        'Percuția ficatului: limita superioară (spațiul intercostal) și inferioară pe linia medioclaviculară dreaptă, estimarea înălțimii matității',
        'Palparea ficatului pornind din fosa iliacă dreaptă, urcând către rebord, sincron cu inspirul profund',
        'Descrii marginea (ascuțită sau rotunjită), consistența, suprafața, sensibilitatea',
        'Căutarea refluxului hepatojugular la suspiciunea de stază',
        'Palparea splinei pornind din fosa iliacă dreaptă spre rebordul costal stâng, în inspir profund',
        'Repeți palparea splinei în decubit lateral drept (poziția Schuster)',
        'Percuția spațiului Traube (matitate în splenomegalie)',
      ],
      tips:
        'Începe palparea de jos, altfel ratezi un organ foarte mărit. Splina normală nu se palpează.',
    },
    {
      id: 'gas-s5',
      name: 'Identificarea semnelor de hipertensiune portală',
      category: 'Examen clinic',
      steps: [
        'Inspecția abdomenului: circulație colaterală periombilicală (aspect de „cap de meduză”)',
        'Stabilirea sensului fluxului venos (dinspre ombilic în sus și în jos în tipul porto-cav)',
        'Căutarea ascitei: matitate deplasabilă pe flancuri, semnul valului',
        'Palparea și percuția splinei (splenomegalie)',
        'Căutarea stigmatelor de boală hepatică cronică asociată',
        'Anamneza sângerărilor digestive (varice esofagiene) și a hemoroizilor',
        'Corelarea cu trombocitopenia și cu ecografia (vena portă dilatată, splenomegalie)',
      ],
      tips:
        'Triada clasică a hipertensiunii portale: splenomegalie, circulație colaterală, ascită. Varicele esofagiene se confirmă doar endoscopic.',
    },
  ],
}
