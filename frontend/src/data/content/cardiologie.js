// Cardiologie – conținut demo
export default {
  materials: [],
  flashcards: [
    { id: "car-f1", front: "Triada Beck?", back: "Hipotensiune, turgescență jugulară, zgomote asurzite – tamponadă cardiacă" },
    { id: "car-f2", front: "PR scurt + undă delta?", back: "Sindrom Wolff-Parkinson-White (preexcitație pe cale accesorie)" },
    { id: "car-f3", front: "Ce aritmie dau undele F „în dinți de fierăstrău” în DII, DIII, aVF?", back: "Flutter atrial tipic" },
    { id: "car-f4", front: "Noduli Osler, leziuni Janeway, pete Roth?", back: "Endocardită infecțioasă" },
    { id: "car-f5", front: "Endocardită cu Streptococcus gallolyticus – ce investigație suplimentară?", back: "Colonoscopie – asociere cu neoplasmul colorectal" },
    { id: "car-f6", front: "Supradenivelare ST difuză concavă + subdenivelare PR?", back: "Pericardită acută" },
    { id: "car-f7", front: "Suflu holosistolic nou + edem pulmonar acut la câteva zile post-infarct?", back: "Ruptură de mușchi papilar (insuficiență mitrală acută)" },
    { id: "car-f8", front: "Suflu care crește la Valsalva și în ortostatism?", back: "Cardiomiopatie hipertrofică obstructivă" },
    { id: "car-f9", front: "Investigația de elecție pentru confirmarea emboliei pulmonare?", back: "Angiografia CT pulmonară" },
    { id: "car-f10", front: "Clacment de deschidere + uruitură diastolică apicală?", back: "Stenoză mitrală, de obicei reumatismală" },
    {"id": "car-fi1", "image": {"src": "/img/ecg-fibrilatie-atriala.svg", "alt": "Traseu ECG"}, "front": "Ce ritm este?", "back": "Fibrilație atrială – RR neregulat, fără unde P"},
    {"id": "car-fi2", "image": {"src": "/img/ecg-flutter-atrial.svg", "alt": "Traseu ECG"}, "front": "Ce ritm este?", "back": "Flutter atrial – unde F „în dinți de fierăstrău”"},
    {"id": "car-fi3", "image": {"src": "/img/ecg-bav3.svg", "alt": "Traseu ECG"}, "front": "Ce ritm este?", "back": "Bloc AV complet – unde P și QRS independente"},
    {"id": "car-fi4", "image": {"src": "/img/ecg-wpw.svg", "alt": "Traseu ECG"}, "front": "Ce arată traseul?", "back": "Sindrom WPW – PR scurt și undă delta"},
    {"id": "car-fi5", "image": {"src": "/img/ecg-stemi.svg", "alt": "Traseu ECG"}, "front": "Ce modificare vezi pe segmentul ST?", "back": "Supradenivelare ST – suspiciune de infarct cu supradenivelare ST, urgență"},
  ],
  questions: [
    {
      id: "car-q1",
      type: "single",
      text: "Care este markerul biochimic cel mai sensibil și specific pentru necroza miocardică?",
      options: [
        "Aspartat aminotransferaza",
        "Lactatdehidrogenaza",
        "Mioglobina",
        "Troponina cardiacă (T sau I)",
        "Creatinkinaza totală",
      ],
      answer: [3],
      explanation: "Troponinele cardiace sunt markerii de elecție ai leziunii miocardice, fiind mult mai specifice decât CK totală, LDH sau AST; mioglobina crește precoce, dar nu este specifică.",
    },
    {
      id: "car-q2",
      type: "multi",
      text: "Care dintre următoarele caracteristici sunt tipice pentru angina pectorală stabilă?",
      options: [
        "Iradiere posibilă în mandibulă sau în membrul superior stâng",
        "Durere accentuată de inspirul profund și de decubitul dorsal",
        "Ameliorare în câteva minute la repaus sau la nitrat sublingual",
        "Durere reprodusă la palparea peretelui toracic",
        "Durere retrosternală declanșată de efort sau emoții",
      ],
      answer: [0, 2, 4],
      explanation: "Angina stabilă este o durere constrictivă de efort, reversibilă la repaus sau nitroglicerină, cu iradiere tipică; durerea pleuropericardică sau cea reprodusă la palpare sugerează alte cauze.",
    },
    {
      id: "car-q3",
      type: "multi",
      text: "Un bărbat de 62 de ani, fumător, se prezintă cu durere retrosternală constrictivă de 40 de minute, transpirații și greață. ECG arată supradenivelare de segment ST în DII, DIII și aVF. Care afirmații sunt corecte?",
      options: [
        "Este indicată reperfuzia de urgență, de preferat prin angioplastie primară",
        "Se poate asocia cu bradicardie sau bloc atrioventricular",
        "Este un infarct miocardic cu supradenivelare ST în teritoriul inferior",
        "Artera responsabilă este cel mai frecvent coronara dreaptă",
        "Reperfuzia se amână până la confirmarea creșterii troponinei",
      ],
      answer: [0, 1, 2, 3],
      explanation: "Supradenivelarea ST în DII, DIII, aVF definește STEMI inferior, de obicei prin ocluzia coronarei drepte, care irigă de obicei și nodul atrioventricular; în STEMI decizia de reperfuzie se ia pe baza tabloului clinic și a ECG, fără a aștepta troponina.",
    },
    {
      id: "car-q4",
      type: "single",
      text: "Supradenivelarea segmentului ST în derivațiile V1–V4 sugerează ocluzia arterei:",
      options: [
        "Coronare drepte",
        "Descendente anterioare stângi",
        "Circumflexe",
        "Marginale obtuze",
        "Descendente posterioare",
      ],
      answer: [1],
      explanation: "Derivațiile precordiale V1–V4 explorează septul și peretele anterior, teritoriul arterei descendente anterioare stângi; teritoriul inferior (DII, DIII, aVF) este irigat de obicei de coronara dreaptă.",
    },
    {
      id: "car-q5",
      type: "multi",
      text: "Care dintre următoarele sunt complicații mecanice ale infarctului miocardic acut?",
      options: [
        "Fibrilația ventriculară",
        "Ruptura de mușchi papilar",
        "Stenoza aortică calcificată",
        "Ruptura peretelui liber al ventriculului stâng",
        "Pericardita epistenocardică",
      ],
      answer: [1, 3],
      explanation: "Ruptura de mușchi papilar (insuficiență mitrală acută) și ruptura peretelui liber (tamponadă) sunt complicații mecanice post-infarct. Fibrilația ventriculară este o complicație aritmică, pericardita epistenocardică una inflamatorie, iar stenoza aortică calcificată o boală degenerativă.",
    },
    {
      id: "car-q6",
      type: "multi",
      text: "Despre sindromul Dressler sunt adevărate afirmațiile:",
      options: [
        "Apare tipic în primele ore de la debutul infarctului",
        "Este o complicație infecțioasă bacteriană",
        "Se manifestă prin febră și durere de tip pericarditic",
        "Apare la câteva săptămâni după infarctul miocardic",
        "Are mecanism autoimun",
      ],
      answer: [2, 3, 4],
      explanation: "Sindromul Dressler este o pericardită autoimună tardivă (săptămâni) după infarct, cu febră și durere pericarditică; pericardita din primele zile este una epistenocardică, iar cauza nu este infecțioasă.",
    },
    {
      id: "car-q7",
      type: "multi",
      text: "Care dintre următoarele fac parte din tratamentul inițial al unui sindrom coronarian acut, în absența contraindicațiilor?",
      options: [
        "Un betablocant intravenos la un pacient în șoc cardiogen",
        "Aspirina",
        "Nitrat sublingual la un pacient care a luat sildenafil în ziua respectivă",
        "Antiinflamatoare nesteroidiene (ex. ibuprofen) pentru controlul durerii",
        "Un inhibitor al receptorului P2Y12 (ex. clopidogrel, ticagrelor)",
      ],
      answer: [1, 4],
      explanation: "Dubla antiagregare (aspirină plus un inhibitor P2Y12) este pilonul tratamentului SCA. Nitrații sunt contraindicați după inhibitori de fosfodiesterază-5, betablocantele intravenoase sunt contraindicate în șocul cardiogen, iar AINS cresc riscul de evenimente cardiovasculare și se evită.",
    },
    {
      id: "car-q8",
      type: "single",
      text: "O femeie de 70 de ani are durere toracică de repaus de 30 de minute. ECG arată subdenivelare de segment ST în V4–V6, iar troponina este crescută. Diagnosticul cel mai probabil este:",
      options: [
        "Angină pectorală stabilă",
        "Angină vasospastică Prinzmetal",
        "Infarct miocardic cu supradenivelare de segment ST",
        "Angină instabilă",
        "Infarct miocardic fără supradenivelare de segment ST (NSTEMI)",
      ],
      answer: [4],
      explanation: "Durerea de repaus fără supradenivelare ST, dar cu creșterea troponinei, definește NSTEMI; angina instabilă are același tablou, dar fără creșterea biomarkerilor de necroză.",
    },
    {
      id: "car-q9",
      type: "multi",
      text: "Despre angina vasospastică (Prinzmetal) sunt corecte afirmațiile:",
      options: [
        "În timpul durerii poate apărea supradenivelare tranzitorie de segment ST",
        "Apare frecvent în repaus, adesea noaptea sau dimineața",
        "Este produsă de un tromb ocluziv persistent pe o placă ruptă",
        "Apare tipic doar la efort intens",
        "Betablocantele neselective sunt tratamentul de elecție",
      ],
      answer: [0, 1],
      explanation: "Angina Prinzmetal se datorează spasmului coronarian, cu durere de repaus și supradenivelare ST tranzitorie, reversibilă; răspunde la blocante de calciu și nitrați, în timp ce betablocantele neselective pot agrava spasmul.",
    },
    {
      id: "car-q10",
      type: "multi",
      text: "Care dintre următoarele sunt manifestări ale insuficienței cardiace stângi?",
      options: [
        "Ralurile crepitante bazale bilaterale",
        "Ascita",
        "Hepatomegalia de stază",
        "Dispneea paroxistică nocturnă",
        "Ortopneea",
      ],
      answer: [0, 3, 4],
      explanation: "Congestia pulmonară din insuficiența cardiacă stângă produce ortopnee, dispnee paroxistică nocturnă și raluri crepitante; hepatomegalia de stază și ascita sunt semne de congestie sistemică (insuficiență cardiacă dreaptă).",
    },
    {
      id: "car-q11",
      type: "multi",
      text: "În insuficiența cardiacă cu fracție de ejecție redusă, care dintre următoarele medicamente reduc mortalitatea?",
      options: [
        "Betablocantele (ex. bisoprolol, carvedilol)",
        "Diureticele de ansă",
        "Antagoniștii receptorilor mineralocorticoizi (ex. spironolactona)",
        "Inhibitorii enzimei de conversie a angiotensinei",
        "Digoxina",
      ],
      answer: [0, 2, 3],
      explanation: "IECA, betablocantele și antagoniștii mineralocorticoizi îmbunătățesc supraviețuirea; diureticele de ansă ameliorează congestia, iar digoxina reduce spitalizările, fără efect demonstrat asupra mortalității.",
    },
    {
      id: "car-q12",
      type: "single",
      text: "Care dintre următoarele determinări are cea mai mare valoare în excluderea insuficienței cardiace la un pacient dispneic, atunci când este normală?",
      options: [
        "Peptidul natriuretic (BNP sau NT-proBNP)",
        "D-dimerii",
        "Proteina C reactivă",
        "Troponina cardiacă",
        "Creatinkinaza MB",
      ],
      answer: [0],
      explanation: "Peptidele natriuretice sunt secretate la distensia miocardului; o valoare normală face diagnosticul de insuficiență cardiacă puțin probabil (valoare predictivă negativă mare).",
    },
    {
      id: "car-q13",
      type: "multi",
      text: "Un bărbat de 68 de ani cu insuficiență cardiacă cunoscută prezintă brusc dispnee severă, spută spumoasă rozată și raluri crepitante pe ambele câmpuri pulmonare; tensiunea arterială este normală. Care măsuri sunt indicate?",
      options: [
        "Poziționarea pacientului în șezut",
        "Oxigenoterapie în caz de hipoxemie",
        "Administrarea rapidă de volume mari de soluții perfuzabile",
        "Nitrat intravenos, dacă tensiunea arterială o permite",
        "Diuretic de ansă intravenos",
      ],
      answer: [0, 1, 3, 4],
      explanation: "Edemul pulmonar acut cardiogen se tratează prin poziție șezândă, oxigen la hipoxemie, diuretic de ansă și vasodilatatoare (nitrați) dacă tensiunea este adecvată; aportul de volum agravează congestia.",
    },
    {
      id: "car-q14",
      type: "multi",
      text: "Care dintre următorii factori pot precipita decompensarea unei insuficiențe cardiace cronice?",
      options: [
        "Tratamentul cu antiinflamatoare nesteroidiene",
        "Restricția moderată a aportului de sare",
        "Tratamentul cronic, bine tolerat, cu un inhibitor al enzimei de conversie",
        "Aderența corectă la tratamentul diuretic",
        "Fibrilația atrială cu alură ventriculară rapidă",
      ],
      answer: [0, 4],
      explanation: "AINS (prin retenție hidrosalină) și aritmiile rapide sunt cauze clasice de decompensare, alături de infecții, excesul de sare și nerespectarea tratamentului. Restricția de sare, aderența la diuretic și IECA fac parte din tratamentul de fond, nu precipită decompensarea.",
    },
    {
      id: "car-q15",
      type: "multi",
      text: "Care dintre următoarele sunt caracteristici ale fibrilației atriale?",
      options: [
        "Puls perfect regulat",
        "Fiecare complex QRS este precedat de o undă P",
        "Unde F „în dinți de fierăstrău” în DII, DIII, aVF",
        "Absența undelor P",
        "Intervale RR complet neregulate",
      ],
      answer: [3, 4],
      explanation: "Fibrilația atrială are activitate atrială haotică (fără unde P, cu unde f) și ritm ventricular neregulat; undele în dinți de fierăstrău sunt tipice flutterului atrial.",
    },
    {
      id: "car-q16",
      type: "single",
      text: "Riscul tromboembolic la pacientul cu fibrilație atrială nonvalvulară se estimează prin scorul:",
      options: [
        "Wells",
        "HAS-BLED",
        "CHA2DS2-VASc",
        "GRACE",
        "Clasificarea NYHA",
      ],
      answer: [2],
      explanation: "CHA2DS2-VASc estimează riscul de accident vascular embolic și ghidează anticoagularea; HAS-BLED evaluează riscul hemoragic, Wells probabilitatea de embolie pulmonară.",
    },
    {
      id: "car-q17",
      type: "multi",
      text: "Despre anticoagularea în fibrilația atrială sunt corecte afirmațiile:",
      options: [
        "Fibrilația atrială paroxistică nu necesită niciodată anticoagulare",
        "Anticoagulantele orale directe sunt contraindicate la purtătorii de proteză valvulară mecanică",
        "Aspirina este o alternativă echivalentă anticoagulării",
        "La pacienții cu proteză valvulară mecanică se folosesc antivitaminele K",
        "În fibrilația atrială nonvalvulară anticoagulantele orale directe (ex. apixaban) sunt o opțiune de primă linie",
      ],
      answer: [1, 3, 4],
      explanation: "La proteze mecanice singura opțiune este antivitamina K, iar în FiA nonvalvulară anticoagulantele directe sunt de primă linie; aspirina nu protejează eficient, iar riscul embolic al formei paroxistice este similar celor persistente.",
    },
    {
      id: "car-q18",
      type: "multi",
      text: "O femeie de 75 de ani are palpitații de 3 zile; ECG arată fibrilație atrială cu alură ventriculară rapidă, iar pacienta este stabilă hemodinamic. Care atitudini sunt corecte?",
      options: [
        "Digoxina poate fi utilă, mai ales la pacienții sedentari sau cu insuficiență cardiacă",
        "Cardioversie electrică imediată fără anticoagulare, deoarece pacienta este stabilă",
        "Controlul frecvenței ventriculare cu un betablocant",
        "Ecocardiografie transesofagiană dacă se ia în calcul o cardioversie precoce",
        "Evaluarea riscului tromboembolic și inițierea anticoagulării",
      ],
      answer: [0, 2, 3, 4],
      explanation: "Fiind o FiA cu debut de câteva zile la un pacient stabil, se controlează frecvența și se anticoagulează; cardioversia fără anticoagulare prealabilă sau fără excluderea trombului atrial prin ETE expune la embolie.",
    },
    {
      id: "car-q19",
      type: "multi",
      text: "Despre blocurile atrioventriculare sunt corecte afirmațiile:",
      options: [
        "În BAV de gradul III fiecare undă P este urmată de un complex QRS, cu interval PR constant",
        "BAV gradul II Mobitz II are risc de progresie spre bloc complet",
        "În BAV de gradul I o parte din undele P nu sunt urmate de complex QRS",
        "BAV gradul II Mobitz I asimptomatic necesită de regulă stimulator cardiac permanent",
        "În BAV gradul II Mobitz I intervalul PR se alungește progresiv până la o undă P neurmată de QRS",
      ],
      answer: [1, 4],
      explanation: "Mobitz I (Wenckebach) are alungire progresivă a PR până la o undă P blocată și este de obicei benign, rar necesitând pacing; Mobitz II are risc de progresie spre bloc complet. În BAV de gradul I toate undele P sunt conduse (doar PR este prelungit), iar în BAV de gradul III există disociere completă între undele P și complexele QRS.",
    },
    {
      id: "car-q20",
      type: "single",
      text: "Un bărbat de 78 de ani are episoade repetate de sincopă. ECG arată unde P regulate, fără relație cu complexe QRS largi, cu frecvență ventriculară de aproximativ 35/min. Tratamentul definitiv este:",
      options: [
        "Digoxina",
        "Amiodarona orală",
        "Betablocant",
        "Ablația nodului atrioventricular",
        "Implantarea unui stimulator cardiac permanent",
      ],
      answer: [4],
      explanation: "Tabloul corespunde unui BAV de gradul III simptomatic, a cărui terapie definitivă este pacingul permanent; antiaritmicele, betablocantele și digoxina agravează bradicardia.",
    },
    {
      id: "car-q21",
      type: "multi",
      text: "Despre tahicardia ventriculară sunt corecte afirmațiile:",
      options: [
        "Prezența bătăilor de captură și de fuziune exclude tahicardia ventriculară",
        "Verapamilul intravenos este un tratament sigur pentru orice tahicardie cu complexe QRS largi",
        "Disocierea atrioventriculară pe ECG sugerează tahicardie ventriculară",
        "Tahicardia ventriculară fără puls se tratează prin cardioversie sincronizată, nu prin defibrilare",
        "La pacientul cu puls, dar instabil hemodinamic, se face cardioversie electrică sincronizată",
      ],
      answer: [2, 4],
      explanation: "Disocierea AV, captura și fuziunea sunt criterii de TV; TV cu puls și instabilitate hemodinamică se tratează prin cardioversie sincronizată, iar TV fără puls se defibrilează, ca fibrilația ventriculară. Verapamilul administrat într-o TV considerată greșit supraventriculară poate produce colaps hemodinamic.",
    },
    {
      id: "car-q22",
      type: "multi",
      text: "Care dintre următoarele caracterizează sindromul Wolff-Parkinson-White?",
      options: [
        "Interval PR prelungit",
        "Tratamentul definitiv este ablația căii accesorii",
        "Unda delta la începutul complexului QRS",
        "Digoxina este tratamentul de elecție al fibrilației atriale preexcitate",
        "Interval PR scurt",
      ],
      answer: [1, 2, 4],
      explanation: "Calea accesorie produce preexcitație (PR scurt, undă delta, QRS lărgit); în FiA preexcitată digoxina și verapamilul sunt contraindicate, deoarece favorizează conducerea pe calea accesorie.",
    },
    {
      id: "car-q23",
      type: "multi",
      text: "Un bărbat de 78 de ani are o sincopă la efort. La auscultație se percepe un suflu sistolic ejecțional aspru în focarul aortic, iradiat în carotide. Care afirmații sunt corecte?",
      options: [
        "Vasodilatatoarele arteriale puternice sunt tratamentul de elecție",
        "Ecocardiografia confirmă diagnosticul și apreciază severitatea",
        "Apariția simptomelor într-o stenoză severă este indicație de înlocuire valvulară",
        "Pulsul este tipic amplu și săltăreț",
        "Diagnosticul cel mai probabil este stenoza aortică",
      ],
      answer: [1, 2, 4],
      explanation: "Angina, sincopa de efort și dispneea, cu suflu sistolic ejecțional iradiat în carotide, sugerează stenoza aortică; stenoza severă simptomatică se tratează prin înlocuire valvulară (chirurgicală sau transcateter), iar pulsul este mic și tardiv.",
    },
    {
      id: "car-q24",
      type: "single",
      text: "Cea mai frecventă cauză a stenozei aortice la vârstnici, în țările dezvoltate, este:",
      options: [
        "Aortita sifilitică",
        "Calcificarea degenerativă a valvei",
        "Reumatismul articular acut",
        "Endocardita infecțioasă",
        "Stenoza subvalvulară congenitală",
      ],
      answer: [1],
      explanation: "La vârstnici predomină stenoza aortică degenerativă calcificată; la pacienții mai tineri cauza frecventă este valva aortică bicuspidă.",
    },
    {
      id: "car-q25",
      type: "multi",
      text: "Care dintre următoarele semne sunt întâlnite în insuficiența aortică semnificativă?",
      options: [
        "Semnul Musset (balansarea capului sincronă cu pulsul)",
        "Clacment de deschidere urmat de uruitură diastolică la apex",
        "Presiune pulsatilă (diferențială) crescută",
        "Suflu diastolic precoce, descrescendo, la marginea sternală stângă",
        "Puls amplu, „în ciocan de apă”",
      ],
      answer: [0, 2, 3, 4],
      explanation: "Regurgitarea aortică produce suflu diastolic descrescendo și semne periferice de debit sistolic mare; clacmentul de deschidere cu uruitură diastolică este tipic stenozei mitrale.",
    },
    {
      id: "car-q26",
      type: "multi",
      text: "O femeie de 40 de ani, cu antecedente de reumatism articular acut, are dispnee de efort și fibrilație atrială. La auscultație: zgomot I întărit, clacment de deschidere și uruitură diastolică la apex. Care afirmații sunt corecte?",
      options: [
        "Pacienta are risc tromboembolic crescut",
        "Anticoagularea se face cu antivitamine K",
        "Suflul se aude cel mai bine în focarul aortic, cu iradiere în carotide",
        "Diagnosticul cel mai probabil este stenoza mitrală",
        "Etiologia cea mai frecventă a acestei valvulopatii este reumatismală",
      ],
      answer: [0, 1, 3, 4],
      explanation: "Tabloul este clasic pentru stenoza mitrală reumatismală; asocierea cu FiA crește mult riscul embolic, iar anticoagularea se face cu antivitamine K, nu cu anticoagulante orale directe.",
    },
    {
      id: "car-q27",
      type: "multi",
      text: "Despre insuficiența mitrală sunt corecte afirmațiile:",
      options: [
        "Se caracterizează prin suflu diastolic precedat de clacment de deschidere",
        "Endocardita infecțioasă poate determina insuficiență mitrală prin distrucție valvulară",
        "Se manifestă prin suflu holosistolic la apex, iradiat în axilă",
        "Ruptura de mușchi papilar după infarct poate produce insuficiență mitrală acută",
        "Prolapsul de valvă mitrală este o cauză frecventă",
      ],
      answer: [1, 2, 3, 4],
      explanation: "Regurgitarea mitrală dă suflu holosistolic apical iradiat în axilă; cauzele includ prolapsul, bolile ischemice, dilatarea ventriculului stâng și endocardita.",
    },
    {
      id: "car-q28",
      type: "multi",
      text: "Care dintre următoarele sunt criterii majore Duke pentru endocardita infecțioasă?",
      options: [
        "Abces perivalvular evidențiat ecocardiografic",
        "Hemoculturi pozitive repetat cu microorganisme tipice",
        "Vegetație evidențiată ecocardiografic",
        "Nodulii Osler",
        "Febra",
      ],
      answer: [0, 1, 2],
      explanation: "Criteriile majore sunt hemoculturile pozitive cu germeni tipici și dovada imagistică de afectare endocardică (vegetație, abces, dehiscență nouă de proteză); febra și fenomenele imunologice sunt criterii minore.",
    },
    {
      id: "car-q29",
      type: "single",
      text: "Un bărbat de 30 de ani, consumator de droguri intravenoase, are febră, un suflu nou de insuficiență tricuspidiană și multiple opacități nodulare pulmonare. Agentul etiologic cel mai probabil este:",
      options: [
        "Enterococcus faecalis",
        "Coxiella burnetii",
        "Streptococcus gallolyticus",
        "Staphylococcus aureus",
        "Streptococii viridans",
      ],
      answer: [3],
      explanation: "Endocardita de cord drept la utilizatorii de droguri intravenoase este cauzată cel mai frecvent de Staphylococcus aureus, cu emboli septici pulmonari.",
    },
    {
      id: "car-q30",
      type: "multi",
      text: "Care dintre următoarele sunt manifestări periferice ale endocarditei infecțioase?",
      options: [
        "Hemoragiile subunghiale „în așchie”",
        "Leziunile Janeway, dureroase, localizate la pulpa degetelor",
        "Xantoamele tendinoase",
        "Nodulii Osler, nedureroși, localizați palmo-plantar",
        "Petele Roth retiniene",
      ],
      answer: [0, 4],
      explanation: "Petele Roth și hemoragiile în așchie sunt manifestări periferice ale endocarditei. Descrierile pentru Osler și Janeway sunt inversate: nodulii Osler sunt dureroși, la pulpa degetelor, iar leziunile Janeway sunt nedureroase, palmo-plantare; xantoamele tendinoase apar în hipercolesterolemia familială.",
    },
    {
      id: "car-q31",
      type: "multi",
      text: "Care dintre următoarele sunt caracteristice pericarditei acute?",
      options: [
        "Durere toracică ameliorată în poziție șezândă, aplecat înainte",
        "Frecătura pericardică",
        "Apariția undelor Q patologice în teritoriul unei singure artere coronare",
        "Supradenivelare de segment ST difuză, cu concavitatea în sus",
        "Subdenivelarea segmentului PR",
      ],
      answer: [0, 1, 3, 4],
      explanation: "Pericardita dă durere pozițională, frecătură și modificări ECG difuze (ST concav, PR subdenivelat); undele Q localizate într-un teritoriu coronarian indică infarct.",
    },
    {
      id: "car-q32",
      type: "multi",
      text: "O femeie de 58 de ani cu neoplasm pulmonar are dispnee progresivă. Este hipotensivă, cu jugulare turgescente, zgomote cardiace asurzite și scăderea tensiunii sistolice în inspir cu mult peste normal. Care afirmații sunt corecte?",
      options: [
        "Tratamentul de urgență este pericardiocenteza",
        "Ecocardiografia confirmă diagnosticul",
        "Tabloul sugerează tamponadă cardiacă",
        "Diureticele de ansă sunt tratamentul de primă intenție",
        "Scăderea accentuată a tensiunii sistolice în inspir reprezintă pulsul paradoxal",
      ],
      answer: [0, 1, 2, 4],
      explanation: "Hipotensiunea, turgescența jugulară și zgomotele asurzite (triada Beck), plus pulsul paradoxal, indică tamponada; diureticele scad presarcina și agravează debitul cardiac.",
    },
    {
      id: "car-q33",
      type: "single",
      text: "Alternanța electrică (variația amplitudinii QRS de la o bătaie la alta) pe ECG sugerează:",
      options: [
        "Revărsat pericardic mare, cu posibilă tamponadă",
        "Bloc de ram stâng",
        "Hiperkaliemie",
        "Hipertrofie ventriculară stângă",
        "Infarct miocardic acut anterior",
      ],
      answer: [0],
      explanation: "Alternanța electrică reflectă balansarea cordului în lichidul pericardic abundent și este un semn clasic de revărsat mare și tamponadă.",
    },
    {
      id: "car-q34",
      type: "multi",
      text: "Despre cardiomiopatia hipertrofică sunt corecte afirmațiile:",
      options: [
        "Este cauzată de mutații ale genelor proteinelor sarcomerice",
        "Nitrații sunt tratamentul de elecție al obstrucției tractului de ejecție",
        "Suflul obstructiv se intensifică la manevra Valsalva",
        "Este o cauză importantă de moarte subită la sportivii tineri",
        "Se transmite frecvent autosomal dominant",
      ],
      answer: [0, 2, 3, 4],
      explanation: "Manevrele care scad presarcina (Valsalva, ortostatismul) cresc obstrucția și suflul; nitrații și vasodilatatoarele agravează obstrucția, fiind de evitat.",
    },
    {
      id: "car-q35",
      type: "multi",
      text: "Care dintre următoarele sunt cauze de cardiomiopatie dilatativă?",
      options: [
        "Miocardita virală",
        "Fibroza endomiocardică",
        "Amiloidoza, ca prototip al acestei forme",
        "Mutațiile sarcomerice cu hipertrofie septală asimetrică",
        "Consumul cronic de alcool",
      ],
      answer: [0, 4],
      explanation: "Alcoolul și miocardita virală (ca și antraciclinele sau perioada peripartum) duc la dilatare și disfuncție sistolică. Amiloidoza și fibroza endomiocardică sunt cauze de cardiomiopatie restrictivă, iar hipertrofia septală asimetrică prin mutații sarcomerice definește cardiomiopatia hipertrofică.",
    },
    {
      id: "car-q36",
      type: "multi",
      text: "Care dintre următoarele sunt cauze de hipertensiune arterială secundară?",
      options: [
        "Boala Addison",
        "Coarctația de aortă",
        "Diabetul insipid central",
        "Hipopituitarismul",
        "Hiperaldosteronismul primar",
      ],
      answer: [1, 4],
      explanation: "Hiperaldosteronismul primar și coarctația de aortă (ca și feocromocitomul) sunt cauze clasice de HTA secundară. Insuficiența corticosuprarenală și hipopituitarismul se asociază mai degrabă cu hipotensiune, iar diabetul insipid central produce poliurie, nu hipertensiune.",
    },
    {
      id: "car-q37",
      type: "single",
      text: "Un bărbat de 35 de ani are hipertensiune arterială greu controlabilă și hipokaliemie spontană. Testul de screening de primă intenție este:",
      options: [
        "Ecografia Doppler a arterelor renale",
        "Metanefrinele plasmatice",
        "Raportul aldosteron/renină plasmatică",
        "Hormonul de stimulare tiroidiană (TSH)",
        "Cortizolul liber urinar",
      ],
      answer: [2],
      explanation: "HTA cu hipokaliemie sugerează hiperaldosteronism primar, pentru care screeningul se face prin raportul aldosteron/renină.",
    },
    {
      id: "car-q38",
      type: "multi",
      text: "Despre tratamentul hipertensiunii arteriale sunt corecte afirmațiile:",
      options: [
        "Diureticele tiazidice pot produce hipokaliemie și hiperuricemie",
        "Inhibitorii enzimei de conversie sunt contraindicați în sarcină",
        "Tusea uscată produsă de IECA se datorează acumulării de bradikinină",
        "Betablocantele neselective sunt de primă alegere la pacienții astmatici",
        "Asocierea IECA cu un sartan este recomandată de rutină",
      ],
      answer: [0, 1, 2],
      explanation: "IECA sunt teratogeni, iar tusea lor este mediată de bradikinină; tiazidicele dau hipokaliemie și hiperuricemie. Dubla blocadă a sistemului renină-angiotensină crește riscul de hiperkaliemie și insuficiență renală.",
    },
    {
      id: "car-q39",
      type: "multi",
      text: "O femeie de 55 de ani, la o săptămână după protezarea șoldului, prezintă brusc dispnee, tahicardie și durere toracică pleuritică. Care afirmații sunt corecte?",
      options: [
        "Angiografia CT pulmonară este investigația imagistică de elecție",
        "Anticoagularea se începe încă din etapa de suspiciune clinică înaltă, dacă nu există contraindicații",
        "Cea mai frecventă modificare ECG în embolia pulmonară este tahicardia sinusală",
        "O radiografie toracică normală exclude embolia pulmonară",
        "D-dimerii crescuți confirmă diagnosticul",
      ],
      answer: [0, 1, 2],
      explanation: "D-dimerii au valoare doar de excludere (la probabilitate clinică scăzută), fiind crescuți postoperator; radiografia este adesea normală. Diagnosticul se confirmă prin angio-CT pulmonar.",
    },
    {
      id: "car-q40",
      type: "single",
      text: "Un pacient cu embolie pulmonară confirmată devine hipotensiv, cu semne de șoc. Tratamentul indicat, în absența contraindicațiilor, este:",
      options: [
        "Aspirina",
        "Filtru de venă cavă inferioară ca primă măsură",
        "Diuretic de ansă intravenos",
        "Tromboliza sistemică",
        "Doar anticoagulare orală",
      ],
      answer: [3],
      explanation: "Embolia pulmonară cu instabilitate hemodinamică (risc înalt) are indicație de tromboliză; filtrul cav se rezervă situațiilor în care anticoagularea este contraindicată.",
    },
    {
        "id": "car-qi1",
        "type": "single",
        "image": {
            "src": "/img/ecg-fibrilatie-atriala.svg",
            "alt": "Traseu ECG"
        },
        "text": "Traseul ECG din imagine arată cel mai probabil:",
        "options": [
            "Ritm sinusal normal",
            "Fibrilație atrială",
            "Flutter atrial tipic",
            "Tahicardie ventriculară",
            "Bloc atrioventricular complet"
        ],
        "answer": [
            1
        ],
        "explanation": "Complexele QRS sunt neregulate (intervale RR variabile), nu se văd unde P, iar linia de bază este ondulată – fibrilație atrială."
    },
    {
        "id": "car-qi2",
        "type": "single",
        "image": {
            "src": "/img/ecg-flutter-atrial.svg",
            "alt": "Traseu ECG"
        },
        "text": "Ce ritm este reprezentat în imagine?",
        "options": [
            "Fibrilație atrială",
            "Flutter atrial",
            "Ritm sinusal cu extrasistole",
            "Tahicardie ventriculară",
            "Bloc AV de gradul II tip Mobitz I"
        ],
        "answer": [
            1
        ],
        "explanation": "Linia de bază are unde regulate „în dinți de fierăstrău”, iar ventriculii răspund regulat, printr-o conducere atrio-ventriculară fixă – flutter atrial."
    },
    {
        "id": "car-qi3",
        "type": "single",
        "image": {
            "src": "/img/ecg-tahicardie-supraventriculara.svg",
            "alt": "Traseu ECG"
        },
        "text": "Un pacient are palpitații cu debut brusc. ECG arată tahicardie regulată, cu complexe QRS înguste și fără unde P vizibile. Interpretarea cea mai probabilă este:",
        "options": [
            "Fibrilație atrială",
            "Tahicardie ventriculară",
            "Tahicardie supraventriculară paroxistică",
            "Bloc atrioventricular complet",
            "Ritm sinusal normal"
        ],
        "answer": [
            2
        ],
        "explanation": "Ritmul regulat, rapid, cu QRS îngust și fără unde P identificabile este tipic pentru o tahicardie supraventriculară paroxistică. Fibrilația atrială ar fi neregulată."
    },
    {
        "id": "car-qi4",
        "type": "single",
        "image": {
            "src": "/img/ecg-bav1.svg",
            "alt": "Traseu ECG"
        },
        "text": "Fiecare undă P este urmată de un QRS, dar intervalul PR este lung și constant. Diagnosticul este:",
        "options": [
            "Bloc AV de gradul I",
            "Bloc AV de gradul II tip Mobitz I",
            "Bloc AV de gradul III",
            "Fibrilație atrială",
            "Sindrom Wolff-Parkinson-White"
        ],
        "answer": [
            0
        ],
        "explanation": "Prelungirea constantă a intervalului PR, cu conducere păstrată la fiecare bătaie, definește blocul AV de gradul I."
    },
    {
        "id": "car-qi5",
        "type": "single",
        "image": {
            "src": "/img/ecg-wenckebach.svg",
            "alt": "Traseu ECG"
        },
        "text": "Pe traseu, intervalul PR se alungește progresiv, apoi o undă P nu mai este urmată de QRS. Cum se numește acest tip de bloc?",
        "options": [
            "Bloc AV de gradul I",
            "Bloc AV de gradul II, Mobitz I (Wenckebach)",
            "Bloc AV de gradul II, Mobitz II",
            "Bloc AV de gradul III",
            "Bloc de ramură stângă"
        ],
        "answer": [
            1
        ],
        "explanation": "Alungirea progresivă a PR până la o undă P blocată este caracteristică fenomenului Wenckebach (Mobitz I)."
    },
    {
        "id": "car-qi6",
        "type": "single",
        "image": {
            "src": "/img/ecg-bav3.svg",
            "alt": "Traseu ECG"
        },
        "text": "Undele P apar regulat, complexele QRS apar regulat, dar mai rar, și nu există o relație constantă între ele. Aceasta este:",
        "options": [
            "Disociație atrioventriculară completă, în bloc AV de gradul III",
            "Bloc AV de gradul I",
            "Fibrilație atrială cu răspuns ventricular lent",
            "Ritm sinusal cu extrasistole",
            "Flutter atrial cu conducere 4:1"
        ],
        "answer": [
            0
        ],
        "explanation": "În blocul AV complet atriile și ventriculii bat independent: undele P nu se leagă de QRS, iar ventriculii sunt conduși de un ritm de scăpare, lent."
    },
    {
        "id": "car-qi7",
        "type": "single",
        "image": {
            "src": "/img/ecg-wpw.svg",
            "alt": "Traseu ECG"
        },
        "text": "Traseul prezintă un interval PR scurt și o urcare lentă la începutul complexului QRS (undă delta). Diagnosticul este:",
        "options": [
            "Sindrom Wolff-Parkinson-White",
            "Bloc AV de gradul I",
            "Hipercalcemie",
            "Infarct miocardic acut",
            "Fibrilație ventriculară"
        ],
        "answer": [
            0
        ],
        "explanation": "PR scurt și unda delta apar prin preexcitație ventriculară pe o cale accesorie – sindrom Wolff-Parkinson-White."
    },
    {
        "id": "car-qi8",
        "type": "multi",
        "image": {
            "src": "/img/ecg-stemi.svg",
            "alt": "Traseu ECG"
        },
        "text": "ECG-ul din imagine arată supradenivelare de segment ST. Care afirmații sunt corecte?",
        "options": [
            "Poate indica un infarct miocardic cu supradenivelare de ST, în contextul clinic potrivit",
            "Reprezintă un motiv de evaluare cardiologică de urgență",
            "Se deosebește de pericardită prin faptul că apare doar într-o singură derivație",
            "Se interpretează împreună cu simptomele și cu troponina",
            "Se poate ignora dacă pacientul nu mai are durere"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Supradenivelarea de ST într-un context clinic de ischemie este o urgență. Pericardita dă supradenivelare difuză, iar dispariția durerii nu exclude infarctul."
    },
    {
        "id": "car-qi9",
        "type": "single",
        "image": {
            "src": "/img/ecg-subdenivelare-st.svg",
            "alt": "Traseu ECG"
        },
        "text": "Un pacient cu durere toracică la efort are pe traseu subdenivelare orizontală a segmentului ST. Cel mai probabil este vorba despre:",
        "options": [
            "Ischemie miocardică",
            "Hiperkaliemie",
            "Flutter atrial",
            "Bloc AV de gradul I",
            "Fibrilație ventriculară"
        ],
        "answer": [
            0
        ],
        "explanation": "Subdenivelarea orizontală sau descendentă a ST în timpul durerii de efort sugerează ischemie miocardică (subendocardică)."
    },
    {
        "id": "car-qi10",
        "type": "single",
        "image": {
            "src": "/img/ecg-tahicardie-ventriculara.svg",
            "alt": "Traseu ECG"
        },
        "text": "Un pacient cu infarct în antecedente are palpitații. ECG arată o tahicardie regulată cu complexe largi. Interpretarea cea mai prudentă este:",
        "options": [
            "Tahicardie ventriculară",
            "Ritm sinusal normal",
            "Fibrilație atrială cu RR neregulat",
            "Bloc atrioventricular de gradul I",
            "Flutter atrial cu conducere 4:1"
        ],
        "answer": [
            0
        ],
        "explanation": "O tahicardie regulată cu complexe largi la un pacient cu cardiopatie ischemică se consideră tahicardie ventriculară până la proba contrarie."
    },
  ],
}
