// Oftalmologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'oft-c1',
      title: 'Ochi roșu foarte dureros, cu greață și vărsături',
      setting: 'Camera de gardă',
      presentation:
        'Femeie de 67 de ani se prezintă seara cu durere intensă la ochiul stâng, cefalee frontală, greață și două vărsături, debutate brusc după ce a stat câteva ore într-o sală de cinema. Vede încețoșat și observă halouri colorate în jurul luminilor. Poartă ochelari pentru hipermetropie. Nu a mai avut episoade similare.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul (brusc), circumstanțele (întuneric, stres, medicamente noi – midriatice, anticolinergice)\n• Caracterul durerii, scăderea vederii, halouri colorate în jurul luminilor\n• Episoade anterioare mai scurte, care s-au remis spontan\n• Viciul de refracție (hipermetropie), chirurgie oculară anterioară\n• Simptome generale: cefalee, greață, vărsături (pot orienta greșit spre o cauză neurologică sau abdominală)\n• Traumatisme, secreție, purtarea lentilelor de contact (diagnostic diferențial)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Acuitate vizuală mult scăzută la ochiul stâng\n• Hiperemie conjunctivală și pericheratică difuză\n• Cornee tulbure, edemațiată\n• Pupilă semidilatată, ovalară, areactivă la lumină\n• Cameră anterioară îngustă (iluminare laterală cu lanterna)\n• Glob dur la palparea bidigitală prin pleoapă, comparativ cu ochiul drept\n• Ochiul drept: cameră anterioară tot îngustă (predispoziție bilaterală)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Tonometrie: presiune intraoculară foarte crescută\n• Examen la biomicroscop: edem corneean, cameră anterioară îngustă\n• Gonioscopie (după clarificarea corneei): unghi camerular închis\n• Examenul ochiului congener: unghi îngust\n• Diagnosticul este clinic; nu se amână tratamentul pentru investigații suplimentare',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Glaucom acut cu unghi închis la ochiul stâng.\nDiagnostic diferențial:\n• Uveită anterioară acută (mioză, presiune de obicei normală sau scăzută)\n• Keratită (leziune corneeană la fluoresceină, pupilă normală)\n• Conjunctivită (vedere și pupilă normale)\n• Cauze neurologice ale cefaleei cu vărsături (migrenă, hemoragie subarahnoidiană) – capcana de a nu examina ochiul',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Urgență: trimitere imediată la oftalmolog\n• Scăderea rapidă a presiunii intraoculare: medicamente topice și sistemice hipotensoare oculare (inhibitori de anhidrază carbonică, agenți osmotici, picături hipotensoare, miotic după scăderea presiunii)\n• Tratament simptomatic: analgezic, antiemetic\n• Tratament definitiv: iridotomie periferică cu laser\n• Iridotomie profilactică la ochiul congener\n• Evitarea medicamentelor midriatice și anticolinergice; urmărirea ulterioară a presiunii și a nervului optic',
        },
      ],
      takeaways: [
        'Cefaleea cu vărsături și ochi roșu poate fi glaucom acut – examinează ochiul.',
        'Pupilă semidilatată fixă și glob dur sunt semnele-cheie.',
        'Hipermetropii vârstnici au unghi îngust și risc crescut.',
        'Iridotomia se face la ambii ochi.',
      ],
    },
    {
      id: 'oft-c2',
      title: 'Fulgere luminoase și o umbră în câmpul vizual',
      setting: 'Ambulatoriu de oftalmologie (consult de urgență)',
      presentation:
        'Bărbat de 54 de ani, cu miopie forte, se prezintă pentru că de două zile vede „fulgere” la marginea câmpului vizual drept și numeroase puncte negre care plutesc. De azi-dimineață observă o umbră, ca o perdea, care vine din partea de sus și acoperă tot mai mult din vedere. Nu are durere. A fost operat de cataractă la acest ochi în urmă cu un an.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul și succesiunea simptomelor: fosfene, miodezopsii noi, umbră progresivă\n• Direcția din care avansează umbra (indică zona de retină dezlipită) și dacă a afectat vederea centrală\n• Absența durerii și a ochiului roșu\n• Factori de risc: miopie forte, chirurgie de cataractă, traumatisme, dezlipire la ochiul congener, istoric familial\n• Boli generale: diabet (dezlipire tracțională), HTA',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Acuitate vizuală (normală dacă macula nu e încă dezlipită)\n• Câmp vizual prin confruntare: defect în câmpul inferior, corespunzător dezlipirii retinei superioare\n• Reflexe pupilare: posibil defect pupilar aferent relativ în dezlipirile extinse\n• Ochi alb, nedureros, segment anterior normal\n• Fundul de ochi după dilatare (efectuat de oftalmolog): retină dezlipită, cenușie, ondulată, cu ruptură retiniană periferică',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Examenul fundului de ochi cu pupila dilatată (oftalmoscopie indirectă) – confirmă dezlipirea și localizează rupturile\n• Ecografie oculară în modul B dacă mediile nu sunt transparente (hemoragie vitreană)\n• Tomografie în coerență optică pentru a evalua dacă macula este afectată\n• Examenul atent al ochiului congener',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Dezlipire de retină regmatogenă la ochiul drept.\nDiagnostic diferențial:\n• Dezlipire posterioară de vitros fără ruptură (fosfene și muște, fără perdea)\n• Hemoragie vitreană\n• Ocluzie vasculară retiniană (debut brusc, fără fosfene)\n• Aură migrenoasă (fosfene bilaterale, tranzitorii, urmate de cefalee)',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Trimitere de urgență la chirurgul vitreoretinian, mai ales dacă macula nu este încă dezlipită\n• Tratament chirurgical: închiderea rupturii și reatașarea retinei (indentație sclerală, vitrectomie, eventual tamponament intern)\n• Rupturile fără dezlipire se tratează profilactic cu laser sau crioterapie\n• Prognosticul vizual depinde de afectarea maculei și de rapiditatea intervenției\n• Educarea pacientului: revine imediat la apariția simptomelor la oricare ochi',
        },
      ],
      takeaways: [
        'Fosfene + muște noi + perdea = dezlipire de retină până la proba contrarie.',
        'Dezlipirea este nedureroasă.',
        'Miopia forte și chirurgia cataractei sunt factori de risc.',
        'Prognosticul depinde de afectarea maculei – intervenția este urgentă.',
      ],
    },
    {
      id: 'oft-c3',
      title: 'Pacient diabetic trimis pentru control oftalmologic',
      setting: 'Cabinet de oftalmologie',
      presentation:
        'Bărbat de 60 de ani, cu diabet zaharat de tip 2 cunoscut de mulți ani, prost controlat, și hipertensiune arterială, este trimis de medicul diabetolog pentru examenul fundului de ochi. Nu a mai fost la oftalmolog de mult timp. Afirmă că vede „destul de bine”, dar în ultima vreme citește mai greu.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Durata diabetului, controlul glicemic, tratamentul\n• Comorbidități: HTA, dislipidemie, nefropatie, fumat\n• Simptome vizuale: scăderea vederii de aproape sau de departe, distorsiuni ale imaginilor, pete negre bruște (hemoragie vitreană)\n• Ultimul examen oftalmologic, tratamente laser sau injecții anterioare\n• Folosirea ochelarilor (presbiopie, care poate explica dificultatea la citit)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Acuitate vizuală la distanță și aproape, cu corecție\n• Examenul segmentului anterior: cataractă incipientă, neovase iriene (rubeoză – stadiu avansat)\n• Măsurarea presiunii intraoculare\n• Fundul de ochi după dilatare: microanevrisme, hemoragii punctiforme, exsudate dure, eventual exsudate vătoase\n• Căutarea neovaselor pe papilă și pe retină\n• Semne de edem macular (exsudate în jurul maculei)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Fotografie de fund de ochi pentru documentare și urmărire\n• Tomografie în coerență optică maculară: îngroșare retiniană în edemul macular\n• Angiografie cu fluoresceină în cazuri selectate: zone de neperfuzie, neovase\n• Colaborare cu diabetologul: hemoglobina glicată, profil lipidic, funcție renală, albuminurie',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Retinopatie diabetică neproliferativă, cu posibil edem macular diabetic, la un pacient cu HTA asociată.\nDiagnostic diferențial / asocieri:\n• Retinopatie hipertensivă (modificări arteriolare, încrucișări arteriovenoase)\n• Ocluzie de ram venos retinian\n• Cataractă sau presbiopie ca explicație a dificultății la citit',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Controlul glicemic, tensional și lipidic, renunțarea la fumat – în colaborare cu diabetologul și medicul de familie\n• Edem macular semnificativ: injecții intravitreene cu anti-VEGF sau laser, după decizia oftalmologului\n• Retinopatie proliferativă: fotocoagulare panretiniană, la nevoie vitrectomie\n• Reexaminare periodică, cu intervale stabilite în funcție de stadiu\n• Educarea pacientului: retinopatia poate fi asimptomatică; prezentare imediată la scăderea bruscă a vederii',
        },
      ],
      takeaways: [
        'Retinopatia diabetică poate fi asimptomatică până în stadii avansate.',
        'Microanevrismele sunt primele leziuni; neovasele definesc stadiul proliferativ.',
        'Edemul macular este cauza principală de scădere a vederii la diabetic.',
        'Controlul sistemic (glicemie, TA, lipide) este parte a tratamentului ocular.',
      ],
    },
  ],
  skills: [
    {
      id: 'oft-s1',
      name: 'Măsurarea acuității vizuale',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea; pacientul stă la distanța standard de optotip, cu iluminare adecvată.',
        'Examinezi pe rând fiecare ochi, începând de obicei cu ochiul drept; celălalt ochi se acoperă cu palma sau cu un ocluzor, fără apăsare.',
        'Ceri citirea rândurilor de sus în jos și notezi ultimul rând citit corect.',
        'Repeți examinarea cu corecția optică proprie (ochelari, lentile de contact), dacă pacientul o are.',
        'Dacă vederea este scăzută, folosești fanta stenopeică: ameliorarea sugerează un viciu de refracție.',
        'Dacă pacientul nu citește nici primul rând: numărarea degetelor, mișcarea mâinii, percepția luminii, la distanțe notate.',
        'Testezi vederea de aproape cu un optotip pentru aproape, la distanța de citit.',
        'Notezi rezultatul pentru fiecare ochi, cu și fără corecție.',
      ],
      tips: 'Greșeli frecvente: examinarea simultană a ambilor ochi, apăsarea pe ochiul acoperit, uitarea corecției proprii. Fanta stenopeică diferențiază viciul de refracție de o boală oculară.',
    },
    {
      id: 'oft-s2',
      name: 'Examenul reflexelor pupilare',
      category: 'Examen clinic',
      steps: [
        'Examinezi în lumină ambientală redusă, pacientul privește la distanță (pentru a evita reflexul de acomodare).',
        'Inspectezi pupilele: formă, mărime, simetrie (anizocorie).',
        'Reflexul fotomotor direct: luminezi un ochi și urmărești contracția pupilei aceluiași ochi.',
        'Reflexul consensual: luminezi un ochi și urmărești contracția pupilei celuilalt ochi.',
        'Testul lanternei oscilante: muți lumina ritmic de la un ochi la altul; dilatarea pupilei la iluminarea unui ochi indică defect pupilar aferent relativ la acel ochi.',
        'Reflexul de acomodare-convergență: pacientul privește un obiect apropiat; pupilele se contractă.',
        'Notezi rezultatele pentru fiecare ochi și interpretezi (leziune aferentă vs eferentă).',
      ],
      tips: 'Defectul aferent nu produce anizocorie; anizocoria sugerează o leziune eferentă (nerv oculomotor, sindrom Horner) sau o cauză locală. Asistentul urmărește dacă știi să faci corect testul lanternei oscilante.',
    },
    {
      id: 'oft-s3',
      name: 'Examenul câmpului vizual prin confruntare',
      category: 'Examen clinic',
      steps: [
        'Te așezi în fața pacientului, la aceeași înălțime a ochilor, la o distanță de aproximativ un braț.',
        'Pacientul își acoperă un ochi, iar tu închizi ochiul opus (ochiul drept al pacientului corespunde ochiului tău stâng).',
        'Pacientul fixează ochiul tău deschis pe toată durata testului.',
        'Aduci un deget sau un obiect mic din periferie spre centru, la jumătatea distanței dintre voi, pe rând în cele patru cadrane.',
        'Pacientul spune când vede obiectul; compari cu propriul câmp vizual.',
        'Poți testa și numărarea degetelor în fiecare cadran și comparația culorii roșii între hemicâmpuri.',
        'Repeți pentru celălalt ochi și notezi defectele (hemianopsie, cvadranopsie, defect altitudinal).',
      ],
      tips: 'Testul este grosier și presupune un câmp vizual normal al examinatorului; nu înlocuiește perimetria. Greșeala tipică: pacientul nu fixează și urmărește obiectul cu privirea.',
    },
    {
      id: 'oft-s4',
      name: 'Examenul fundului de ochi prin oftalmoscopie directă (principii)',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea; camera semiobscură, pacientul privește fix un punct îndepărtat.',
        'Reglezi oftalmoscopul (lentila la zero, lumina adecvată); examinezi ochiul drept al pacientului cu ochiul tău drept, ținând aparatul în mâna dreaptă, și invers pentru ochiul stâng.',
        'De la distanță, cauți reflexul roșu (absent sau modificat în cataractă, hemoragie vitreană, leucocorie).',
        'Te apropii pe o direcție ușor temporală și focalizezi pe retină, ajustând lentilele.',
        'Identifici papila: contur, culoare, raportul excavație/papilă.',
        'Urmărești vasele pe cele patru cadrane: calibru, încrucișări arteriovenoase, hemoragii, exsudate.',
        'La final examinezi macula, cerând pacientului să privească direct în lumină.',
        'Notezi aspectele găsite; dilatarea pupilei se face doar după excluderea riscului de glaucom acut.',
      ],
      tips: 'Asistentul urmărește dacă găsești papila și descrii sistematic papila, vasele, macula. Atenție la dilatarea pupilei la pacienții cu unghi camerular îngust.',
    },
    {
      id: 'oft-s5',
      name: 'Întoarcerea pleoapei superioare și spălătura oculară',
      category: 'Manevră',
      steps: [
        'Explici manevra, te speli pe mâini, folosești mănuși; în arsura chimică începi spălătura imediat, fără să aștepți alte etape.',
        'Pentru întoarcerea pleoapei: pacientul privește în jos; prinzi genele pleoapei superioare între police și index.',
        'Așezi un bețișor sau un tampon de vată pe fața externă a pleoapei, la marginea superioară a tarsului, și răsucești pleoapa peste el.',
        'Inspectezi conjunctiva tarsală pentru corpi străini; îi îndepărtezi cu un tampon umed, dacă sunt superficiali.',
        'Pentru spălătură: pacientul în decubit sau șezând cu capul înclinat spre ochiul afectat, cu o tăviță sub obraz.',
        'Folosești ser fiziologic sau apă curată, cu jet moderat, direcționat de la unghiul intern spre cel extern, fără a atinge ochiul.',
        'Ții pleoapele deschise, ceri pacientului să miște ochii în toate direcțiile și speli și fundurile de sac, inclusiv sub pleoapa întoarsă.',
        'În arsurile chimice continui spălătura prelungit, apoi trimiți pacientul de urgență la oftalmolog.',
      ],
      tips: 'În arsura chimică, întârzierea spălăturii pentru examinare sau pentru găsirea unei soluții „speciale” este greșeala majoră. Nu se încearcă neutralizarea chimică.',
    },
  ],
}
