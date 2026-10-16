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
    { id: "car-f11", front: "Cardiomiopatie cu hipertrofie septală asimetrică și moarte subită la tineri?", back: "Cardiomiopatia hipertrofică (de obicei AD, mutații sarcomerice)" },
    { id: "car-f12", front: "Balonizare apicală, coronare normale, după stres emoțional la femeie postmenopauză?", back: "Cardiomiopatia Takotsubo" },
    { id: "car-f13", front: "Ce cauze toxice și metabolice dau cardiomiopatie dilatativă?", back: "Alcoolul, unele citostatice (antracicline), hipotiroidismul, tahicardia cronică" },
    { id: "car-f14", front: "Cardiomiopatie restrictivă prin infiltrare cu proteină anormală?", back: "Amiloidoza cardiacă" },
    { id: "car-f15", front: "Durere „în sfâșiere” interscapulară cu TA diferită între brațe?", back: "Suspiciune de disecție de aortă" },
    { id: "car-f16", front: "Ce tip de disecție aortică are indicație chirurgicală de urgență?", back: "Tipul A Stanford (implică aorta ascendentă)" },
    { id: "car-f17", front: "Cea mai frecventă localizare a anevrismului aortic?", back: "Aorta abdominală infrarenală" },
    { id: "car-f18", front: "Test simplu la cabinet pentru boala arterială periferică?", back: "Indicele gleznă–braț" },
    { id: "car-f19", front: "Ocluzie aorto-iliacă cu claudicație fesieră și disfuncție erectilă?", back: "Sindromul Leriche" },
    { id: "car-f20", front: "Ținta principală a tratamentului hipolipemiant?", back: "LDL-colesterolul" },
    { id: "car-f21", front: "Mecanismul de acțiune al statinelor?", back: "Inhibă HMG-CoA reductaza, scad sinteza hepatică de colesterol" },
    { id: "car-f22", front: "Complicația acută a hipertrigliceridemiei foarte severe?", back: "Pancreatita acută" },
    { id: "car-f23", front: "Sincopa este un semn de alarmă când apare în ce context?", back: "La efort sau fără prodrom, mai ales la cardiopat sau cu istoric familial de moarte subită" },
    { id: "car-f24", front: "Prima investigație cardiacă în orice sincopă?", back: "ECG de repaus" },
    { id: "car-f25", front: "Cea mai frecventă cauză de cor pulmonar cronic?", back: "BPOC" },
    { id: "car-f26", front: "Standardul de aur pentru diagnosticul hipertensiunii pulmonare?", back: "Cateterismul cardiac drept" },
    { id: "car-f27", front: "Poziția și medicația inițială în edemul pulmonar acut cardiogen?", back: "Poziție șezândă, oxigen, diuretic de ansă intravenos" },
    { id: "car-f28", front: "Cea mai frecventă cauză de șoc cardiogen?", back: "Infarctul miocardic acut extins al ventriculului stâng" },
    { id: "car-f29", front: "Dedublare fixă a zgomotului II?", back: "Defect septal atrial" },
    { id: "car-f30", front: "Suflu continuu „în mașinărie” subclavicular stâng?", back: "Canal arterial persistent" },
    { id: "car-f31", front: "Ce înseamnă sindromul Eisenmenger?", back: "Inversarea șuntului în dreapta–stânga prin hipertensiune pulmonară severă, cu cianoză" },
    { id: "car-f32", front: "Unde T înalte și ascuțite pe ECG, apoi QRS larg?", back: "Hiperkaliemie" },
    { id: "car-f33", front: "Unde Q patologice pe ECG indică?", back: "Necroză miocardică (infarct constituit)" },
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
        "Tahicardie ventriculară",
        "Fibrilație atrială",
        "Bloc atrioventricular complet",
        "Flutter atrial tipic"
    ],
        "answer": [2],
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
        "Flutter atrial",
        "Tahicardie ventriculară",
        "Fibrilație atrială",
        "Ritm sinusal cu extrasistole",
        "Bloc AV de gradul II tip Mobitz I"
    ],
        "answer": [0],
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
        "answer": [2],
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
        "Fibrilație atrială",
        "Bloc AV de gradul I",
        "Bloc AV de gradul III",
        "Sindrom Wolff-Parkinson-White",
        "Bloc AV de gradul II tip Mobitz I"
    ],
        "answer": [1],
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
        "answer": [1],
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
        "Ritm sinusal cu extrasistole",
        "Fibrilație atrială cu răspuns ventricular lent",
        "Flutter atrial cu conducere 4:1"
    ],
        "answer": [0],
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
        "Fibrilație ventriculară",
        "Bloc AV de gradul I",
        "Sindrom Wolff-Parkinson-White",
        "Infarct miocardic acut",
        "Hipercalcemie"
    ],
        "answer": [2],
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
        "Se deosebește de pericardită prin faptul că apare doar într-o singură derivație",
        "Se interpretează împreună cu simptomele și cu troponina",
        "Se poate ignora dacă pacientul nu mai are durere",
        "Reprezintă un motiv de evaluare cardiologică de urgență",
        "Poate indica un infarct miocardic cu supradenivelare de ST, în contextul clinic potrivit"
    ],
        "answer": [1,3,4],
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
        "Fibrilație ventriculară",
        "Flutter atrial",
        "Hiperkaliemie",
        "Bloc AV de gradul I",
        "Ischemie miocardică"
    ],
        "answer": [4],
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
        "Bloc atrioventricular de gradul I",
        "Flutter atrial cu conducere 4:1",
        "Tahicardie ventriculară",
        "Ritm sinusal normal",
        "Fibrilație atrială cu RR neregulat"
    ],
        "answer": [2],
        "explanation": "O tahicardie regulată cu complexe largi la un pacient cu cardiopatie ischemică se consideră tahicardie ventriculară până la proba contrarie."
    },
    {
        "id": "car-qi11",
        "type": "single",
        "image": {
            "src": "/img/ecg-normal-marcat.svg",
            "alt": "ECG normal cu componente marcate de la 1 la 6"
        },
        "text": "Pe ECG-ul din imagine, intervalul marcat cu 2 (intervalul PR) reprezintă:",
        "options": [
        "Repolarizarea atrială",
        "Depolarizarea ventriculară",
        "Timpul de la începutul depolarizării atriale până la începutul depolarizării ventriculare",
        "Timpul dintre două bătăi consecutive",
        "Repolarizarea ventriculară"
    ],
        "answer": [2],
        "explanation": "Intervalul PR include depolarizarea atrială și întârzierea fiziologică din nodul atrioventricular."
    },
    {
        "id": "car-qi12",
        "type": "multi",
        "image": {
            "src": "/img/ecg-normal-marcat.svg",
            "alt": "ECG normal cu componente marcate de la 1 la 6"
        },
        "text": "Pe ECG-ul din imagine, care afirmații sunt corecte?",
        "options": [
        "Unda marcată cu 1 corespunde depolarizării atriale",
        "Complexul marcat cu 3 corespunde depolarizării ventriculare",
        "Intervalul marcat cu 6 reprezintă doar depolarizarea ventriculară",
        "Intervalul marcat cu 2 reprezintă repolarizarea atrială",
        "Unda marcată cu 5 corespunde repolarizării ventriculare"
    ],
        "answer": [0,1,4],
        "explanation": "P = depolarizare atrială, QRS = depolarizare ventriculară, T = repolarizare ventriculară. PR este timpul de conducere atrio-ventriculară, iar QT cuprinde depolarizarea și repolarizarea ventriculară."
    },
    {
      "id": "car-q41",
      "type": "single",
      "text": "Care dintre următoarele descrie cel mai bine cardiomiopatia dilatativă?",
      "options": [
        "Hipertrofie septală asimetrică cu cavitate ventriculară mică și funcție sistolică păstrată",
        "Dilatare izolată a ventriculului drept prin hipertensiune pulmonară cronică",
        "Dilatarea ventriculului stâng cu scăderea fracției de ejecție, în absența unei cauze valvulare sau ischemice suficiente pentru a o explica",
        "Rigiditate ventriculară cu dilatare atrială importantă și ventriculi de dimensiuni normale",
        "Îngroșare pericardică cu calcificări și umplere ventriculară împiedicată"
      ],
      "answer": [
        2
      ],
      "explanation": "Cardiomiopatia dilatativă asociază dilatare ventriculară și disfuncție sistolică. Hipertrofia asimetrică caracterizează forma hipertrofică, iar rigiditatea cu ventriculi nedilatați pe cea restrictivă."
    },
    {
      "id": "car-q42",
      "type": "multi",
      "text": "Care dintre următoarele afirmații despre cardiomiopatia hipertrofică sunt corecte?",
      "options": [
        "Are frecvent transmitere autosomal dominantă, prin mutații ale proteinelor sarcomerice",
        "Este o cauză de moarte subită la tineri, inclusiv la sportivi",
        "Beta-blocantele sunt contraindicate deoarece cresc obstrucția",
        "La forma obstructivă, deshidratarea și vasodilatatoarele pot agrava gradientul din camera de ejecție",
        "Se caracterizează prin ventricul stâng dilatat, cu pereți subțiri"
      ],
      "answer": [
        0,
        1,
        3
      ],
      "explanation": "Forma hipertrofică este genetică (sarcomerică, de obicei AD) și poate da aritmii ventriculare letale. Scăderea volumului și a postsarcinii agravează obstrucția, iar beta-blocantele o ameliorează prin prelungirea diastolei."
    },
    {
      "id": "car-q43",
      "type": "single",
      "text": "Cardiomiopatia restrictivă se caracterizează fiziopatologic prin:",
      "options": [
        "Scăderea marcată a contractilității cu dilatare ventriculară biventriculară",
        "Obstrucție dinamică a tractului de ejecție al ventriculului stâng",
        "Regurgitare mitrală primară prin prolaps valvular",
        "Disfuncție diastolică prin rigiditatea miocardului, cu ventriculi de dimensiuni apropiate de normal și atrii dilatate",
        "Împiedicarea umplerii prin lichid intrapericardic sub presiune"
      ],
      "answer": [
        3
      ],
      "explanation": "În forma restrictivă umplerea ventriculară este limitată de rigiditatea peretelui, deci presiunile atriale cresc și atriile se dilată, în timp ce ventriculii rămân de dimensiuni apropiate de normal."
    },
    {
      "id": "car-q44",
      "type": "single",
      "text": "O cauză frecvent invocată de cardiomiopatie restrictivă este:",
      "options": [
        "Tahicardia cronică necontrolată",
        "Hipertensiunea arterială de lungă durată cu dilatare ventriculară",
        "Amiloidoza cardiacă",
        "Consumul cronic de alcool",
        "Miocardita virală acută cu dilatare"
      ],
      "answer": [
        2
      ],
      "explanation": "Amiloidoza, alături de sarcoidoză și hemocromatoză, infiltrează miocardul și îl face rigid. Alcoolul, tahicardia cronică și miocardita duc de obicei la formă dilatativă."
    },
    {
      "id": "car-q45",
      "type": "single",
      "text": "Care element orientează spre pericardită constrictivă, nu spre cardiomiopatie restrictivă?",
      "options": [
        "Presiuni de umplere crescute",
        "Calcificările pericardice vizibile radiologic sau la CT",
        "Atrii dilatate cu ventriculi nedilatați",
        "Turgescența jugularelor cu edeme periferice",
        "Prezența semnului Kussmaul"
      ],
      "answer": [
        1
      ],
      "explanation": "Semnul Kussmaul, congestia sistemică și presiunile de umplere crescute apar în ambele situații. Calcificările sau îngroșarea pericardului susțin constricția, care poate fi tratată chirurgical."
    },
    {
      "id": "car-q46",
      "type": "multi",
      "text": "Care dintre următoarele pot complica evoluția cardiomiopatiei dilatative?",
      "options": [
        "Insuficiența mitrală funcțională prin dilatarea inelului",
        "Formarea de trombi intracavitari cu embolii sistemice",
        "Aritmii ventriculare și moarte subită",
        "Stenoza aortică valvulară ca evoluție naturală obligatorie",
        "Insuficiența cardiacă progresivă"
      ],
      "answer": [
        0,
        1,
        2,
        4
      ],
      "explanation": "Dilatarea și hipokinezia favorizează stază, trombi, aritmii și regurgitare mitrală funcțională. Stenoza aortică valvulară nu rezultă din cardiomiopatia dilatativă."
    },
    {
      "id": "car-q47",
      "type": "single",
      "text": "O femeie de 66 de ani, aflată la menopauză, are durere toracică și dispnee la câteva ore după o ceartă violentă. Troponina este ușor crescută, iar coronarografia nu arată stenoze semnificative; ventriculografia arată hipokinezia apexului cu hiperkinezia bazei. Diagnosticul cel mai probabil este:",
      "options": [
        "Infarct miocardic prin ocluzia stabilă a arterei descendente anterioare",
        "Cardiomiopatia restrictivă amiloidică",
        "Pericardita constrictivă",
        "Cardiomiopatia Takotsubo (de stres)",
        "Cardiomiopatia hipertrofică obstructivă"
      ],
      "answer": [
        3
      ],
      "explanation": "Takotsubo apare după stres emoțional sau fizic intens, mai ales la femei postmenopauzale, cu aspect de balonizare apicală și coronare fără leziuni care să explice tabloul."
    },
    {
      "id": "car-q48",
      "type": "single",
      "text": "Disecția de aortă Stanford tip A:",
      "options": [
        "Apare exclusiv la pacienții cu hipotensiune cronică",
        "Implică aorta ascendentă și are indicație de tratament chirurgical de urgență",
        "Este definită prin diametrul aortei abdominale",
        "Implică exclusiv aorta descendentă și se tratează de regulă medical",
        "Se tratează inițial prin tromboliză"
      ],
      "answer": [
        1
      ],
      "explanation": "Tipul A implică aorta ascendentă, cu risc de tamponadă, insuficiență aortică și ocluzie coronariană, deci necesită chirurgie urgentă. Tipul B, necomplicat, se tratează de obicei medical."
    },
    {
      "id": "car-q49",
      "type": "multi",
      "text": "Care dintre următoarele sunt factori de risc pentru disecția de aortă?",
      "options": [
        "Sindromul Marfan",
        "Valva aortică bicuspidă",
        "Hipotensiunea cronică",
        "Anemia feriprivă",
        "Hipertensiunea arterială necontrolată"
      ],
      "answer": [
        0,
        1,
        4
      ],
      "explanation": "Hipertensiunea și bolile țesutului conjunctiv sau valva bicuspidă slăbesc peretele aortic și predispun la disecție. Hipotensiunea și anemia nu sunt factori de risc."
    },
    {
      "id": "car-q50",
      "type": "single",
      "text": "Un bărbat de 58 de ani, hipertensiv, are durere toracică posterioară cu debut brusc, ca o „sfâșiere”, iradiată interscapular. TA diferă între cele două brațe. Hemodinamic este stabil. Ce investigație imagistică confirmă cel mai bine diagnosticul?",
      "options": [
        "Spirometria",
        "Testul de efort pe covor rulant",
        "Scintigrafia de perfuzie miocardică",
        "Ecografia abdominală transparietală",
        "Angiografia CT aortică"
      ],
      "answer": [
        4
      ],
      "explanation": "La pacientul stabil cu suspiciune de disecție, angio-CT-ul este metoda de elecție. Ecografia transesofagiană poate fi folosită la cel instabil. Testul de efort e contraindicat."
    },
    {
      "id": "car-q51",
      "type": "multi",
      "text": "Care dintre următoarele fac parte din abordarea inițială a disecției de aortă acute?",
      "options": [
        "Scăderea frecvenței cardiace și a tensiunii arteriale, cu beta-blocant intravenos",
        "Anticoagulare cu heparină pentru prevenirea extinderii disecției",
        "Tromboliză sistemică în cazul suspiciunii de infarct",
        "Analgezie eficientă, de obicei cu opioid intravenos",
        "Vasodilatator singur, fără control al frecvenței cardiace"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Scopul este reducerea stresului pe peretele aortic. Trombolizarea și anticoagularea sunt periculoase în disecție, iar vasodilatatorul singur produce tahicardie reflexă care agravează forța de forfecare."
    },
    {
      "id": "car-q52",
      "type": "single",
      "text": "Cea mai frecventă localizare a anevrismelor aortice este:",
      "options": [
        "Artera iliacă comună",
        "Crosa aortică",
        "Aorta ascendentă",
        "Aorta abdominală infrarenală",
        "Aorta toracică descendentă la nivelul diafragmului"
      ],
      "answer": [
        3
      ],
      "explanation": "Anevrismul aortei abdominale infrarenale este cel mai frecvent, adesea la bărbați vârstnici fumători, și rămâne mult timp asimptomatic; screeningul se face ecografic."
    },
    {
      "id": "car-q53",
      "type": "multi",
      "text": "Un pacient de 72 de ani, fumător, are durere abdominală și lombară intensă, hipotensiune și o masă abdominală pulsatilă. Care sunt elementele clasice care susțin ruptura de anevrism de aortă abdominală?",
      "options": [
        "Hemoptizie",
        "Febră înaltă cu frisoane ca element dominant",
        "Masă abdominală pulsatilă",
        "Durere abdominală sau lombară de debut brusc",
        "Hipotensiune sau stare de șoc"
      ],
      "answer": [
        2,
        3,
        4
      ],
      "explanation": "Triada durere, hipotensiune și masă pulsatilă sugerează ruptura și impune intervenție de urgență. Febra și hemoptizia nu fac parte din tablou."
    },
    {
      "id": "car-q54",
      "type": "single",
      "text": "Claudicația intermitentă se caracterizează prin:",
      "options": [
        "Furnicături permanente, neinfluențate de efort",
        "Durere care apare în repaus noaptea și se ameliorează prin ridicarea piciorului",
        "Durere care apare la ortostatism prelungit și dispare la ridicarea membrului",
        "Durere sau crampă în musculatura gambei la mers, care dispare la oprire, după câteva minute",
        "Durere în articulația genunchiului dimineața, cu redoare matinală prelungită"
      ],
      "answer": [
        3
      ],
      "explanation": "Claudicația este durerea ischemică de efort cu caracter reproductibil: apare la o anumită distanță de mers și cedează la oprire. Durerea de repaus indică ischemie mai avansată."
    },
    {
      "id": "car-q55",
      "type": "single",
      "text": "Care este principalul factor de risc modificabil pentru boala arterială periferică?",
      "options": [
        "Hipotensiunea cronică",
        "Valori scăzute ale LDL-colesterolului",
        "Fumatul",
        "Sexul feminin tânăr",
        "Activitatea fizică regulată"
      ],
      "answer": [
        2
      ],
      "explanation": "Fumatul are legătura cea mai puternică cu apariția și progresia bolii arteriale periferice, alături de diabet, hipertensiune și dislipidemie."
    },
    {
      "id": "car-q56",
      "type": "single",
      "text": "Care investigație neinvazivă, simplă, la cabinet, ajută la confirmarea unei boli arteriale periferice?",
      "options": [
        "Hemoleucograma",
        "Radiografia piciorului",
        "Testul de toleranță la glucoză",
        "Indicele gleznă–braț",
        "Electrocardiograma de repaus"
      ],
      "answer": [
        3
      ],
      "explanation": "Indicele gleznă–braț compară presiunea sistolică la gleznă cu cea de la braț; o valoare scăzută indică stenoze arteriale ale membrelor inferioare."
    },
    {
      "id": "car-q57",
      "type": "multi",
      "text": "Care dintre următoarele fac parte din tratamentul pe termen lung al arteriopatiei obliterante cu claudicație?",
      "options": [
        "Program de mers supravegheat",
        "Renunțarea completă la fumat",
        "Repaus la pat prelungit pentru a evita agravarea",
        "Tratament antiagregant",
        "Terapie hipolipemiantă cu statină"
      ],
      "answer": [
        0,
        1,
        3,
        4
      ],
      "explanation": "Mersul programat îmbunătățește distanța de claudicație, iar tratamentul antiagregant și statina reduc riscul cardiovascular. Repausul prelungit nu ajută."
    },
    {
      "id": "car-q58",
      "type": "single",
      "text": "Un pacient are durere intensă și bruscă la un picior, cu paloare, răceală, absența pulsurilor distale și, la examinare, deficit motor și senzitiv. Ce înseamnă acest tablou?",
      "options": [
        "Claudicație intermitentă stabilă",
        "Neuropatie diabetică periferică simplă",
        "Tromboflebită superficială necomplicată",
        "Insuficiență venoasă cronică",
        "Ischemie acută de membru avansată, care impune tratament de revascularizare de urgență"
      ],
      "answer": [
        4
      ],
      "explanation": "Deficitul motor și senzitiv arată că membrul este amenințat, deci timpul este critic. Heparina se începe imediat și se organizează revascularizarea."
    },
    {
      "id": "car-q59",
      "type": "multi",
      "text": "Care sunt măsuri potrivite la pacientul cu ischemie cronică critică de membru (durere de repaus, ulcer ischemic)?",
      "options": [
        "Încălzirea locală intensă a piciorului ischemic",
        "Exerciții fizice intense pe covor rulant, până la apariția durerii severe",
        "Bandaj compresiv strâns pe membrul afectat",
        "Evaluarea pentru revascularizare",
        "Îngrijirea atentă a leziunilor tisulare și prevenirea infecției"
      ],
      "answer": [
        3,
        4
      ],
      "explanation": "Perfuzia trebuie îmbunătățită, iar țesuturile protejate. Compresia, efortul intens și căldura locală agravează ischemia sau lezează țesuturile."
    },
    {
      "id": "car-q60",
      "type": "single",
      "text": "Obstrucția aortei terminale sau a arterelor iliace, cu claudicație fesieră, disfuncție erectilă și pulsuri femurale diminuate sau absente, constituie:",
      "options": [
        "Sindromul de arc aortic",
        "Sindromul de venă cavă superioară",
        "Sindromul Budd–Chiari",
        "Sindromul Raynaud primar",
        "Sindromul Leriche"
      ],
      "answer": [
        4
      ],
      "explanation": "Sindromul Leriche este ocluzia aorto-iliacă, cu claudicație proximală, disfuncție erectilă și pulsuri femurale diminuate."
    },
    {
      "id": "car-q61",
      "type": "single",
      "text": "Statinele își exercită efectul hipolipemiant prin:",
      "options": [
        "Blocarea absorbției intestinale a colesterolului",
        "Inhibarea HMG-CoA reductazei, cu scăderea sintezei hepatice de colesterol",
        "Legarea acizilor biliari în intestin",
        "Creșterea lipolizei periferice",
        "Inhibarea enzimei de conversie a angiotensinei"
      ],
      "answer": [
        1
      ],
      "explanation": "Statinele inhibă HMG-CoA reductaza, cresc expresia receptorilor LDL hepatici și scad LDL-colesterolul. Ezetimibul acționează la nivelul absorbției intestinale."
    },
    {
      "id": "car-q62",
      "type": "multi",
      "text": "Care dintre următoarele sunt efecte adverse cunoscute ale statinelor?",
      "options": [
        "Mialgii sau miopatie, rar rabdomioliză",
        "Tuse uscată persistentă",
        "Hiperkaliemie",
        "Bradicardie sinusală severă",
        "Creșterea transaminazelor hepatice"
      ],
      "answer": [
        0,
        4
      ],
      "explanation": "Efectele musculare și creșterea transaminazelor sunt cele clasice. Tusea și hiperkaliemia aparțin inhibitorilor ECA, iar bradicardia nu e legată de statine."
    },
    {
      "id": "car-q63",
      "type": "single",
      "text": "Un bărbat de 30 de ani are depozite tendinoase pe tendoanele lui Achile, arc corneean și LDL-colesterol mult crescut; tatăl a avut infarct la 45 de ani. Diagnosticul cel mai probabil este:",
      "options": [
        "Sindrom nefrotic",
        "Hipercolesterolemie familială",
        "Hipotiroidism subclinic",
        "Sindrom metabolic",
        "Hipertrigliceridemie familială izolată"
      ],
      "answer": [
        1
      ],
      "explanation": "Xantoamele tendinoase, arcul corneean și boala coronariană precoce în familie indică hipercolesterolemia familială, de obicei prin deficit al receptorului LDL, cu transmitere autosomal dominantă."
    },
    {
      "id": "car-q64",
      "type": "multi",
      "text": "Care dintre următoarele pot determina dislipidemie secundară?",
      "options": [
        "Hipertiroidismul",
        "Hipotiroidismul",
        "Anemia hemolitică",
        "Sindromul nefrotic",
        "Diabetul zaharat necontrolat"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "Hipotiroidismul, sindromul nefrotic și diabetul necontrolat cresc lipidele; hipertiroidismul tinde să le scadă."
    },
    {
      "id": "car-q65",
      "type": "single",
      "text": "Hipertrigliceridemia foarte severă expune în special la riscul de:",
      "options": [
        "Pancreatită acută",
        "Hepatită virală",
        "Anemie macrocitară",
        "Stenoză mitrală",
        "Litiază renală"
      ],
      "answer": [
        0
      ],
      "explanation": "Trigliceridele foarte mari pot declanșa pancreatită acută, motiv pentru care hipertrigliceridemia severă se tratează prioritar."
    },
    {
      "id": "car-q66",
      "type": "multi",
      "text": "Care dintre următoarele măsuri de prevenție cardiovasculară au beneficiu demonstrat?",
      "options": [
        "Renunțarea la fumat",
        "Controlul tensiunii arteriale",
        "Activitate fizică regulată",
        "Alimentație săracă în grăsimi saturate și bogată în legume și fructe",
        "Suplimentarea cu vitamine antioxidante pentru reducerea evenimentelor cardiovasculare"
      ],
      "answer": [
        0,
        1,
        2,
        3
      ],
      "explanation": "Modificările stilului de viață și controlul factorilor de risc reduc riscul cardiovascular. Suplimentele antioxidante nu au demonstrat beneficiu."
    },
    {
      "id": "car-q67",
      "type": "single",
      "text": "Care dintre următoarele reprezintă un exemplu de prevenție secundară cardiovasculară?",
      "options": [
        "Dietă hipocalorică la un copil cu obezitate",
        "Vaccinare antigripală la o persoană fără boli cronice",
        "Screening al glicemiei la un adult sedentar fără boală",
        "Sfat de renunțare la fumat la un tânăr sănătos",
        "Statină și antiagregant la un pacient după infarct miocardic"
      ],
      "answer": [
        4
      ],
      "explanation": "Prevenția secundară se adresează pacienților cu boală cardiovasculară deja manifestă, pentru a preveni recurența și progresia."
    },
    {
      "id": "car-q68",
      "type": "single",
      "text": "Sincopa se definește ca:",
      "options": [
        "Pierdere de conștiență datorată exclusiv hipoglicemiei",
        "Scădere progresivă a stării de conștiență pe parcursul mai multor ore",
        "Pierdere de conștiență prin traumatism cranian cu recuperare incompletă",
        "Pierdere tranzitorie de conștiență prin hipoperfuzie cerebrală globală, cu debut rapid, durată scurtă și recuperare spontană completă",
        "Pierdere de conștiență prelungită, cu postcriză confuzională îndelungată"
      ],
      "answer": [
        3
      ],
      "explanation": "Mecanismul este scăderea bruscă a fluxului cerebral. Spre deosebire de criza epileptică, recuperarea este rapidă și completă, fără postcriză prelungită."
    },
    {
      "id": "car-q69",
      "type": "single",
      "text": "Cea mai frecventă cauză de sincopă este:",
      "options": [
        "Mixomul atrial",
        "Tahicardia ventriculară",
        "Sincopa reflexă (vasovagală)",
        "Stenoza aortică",
        "Embolia pulmonară masivă"
      ],
      "answer": [
        2
      ],
      "explanation": "Sincopa reflexă este cea mai frecventă și are, de regulă, prognostic bun; cauzele cardiace sunt mai rare, dar mai periculoase."
    },
    {
      "id": "car-q70",
      "type": "multi",
      "text": "Care dintre următoarele caracteristici sugerează o sincopă cu risc crescut, de cauză cardiacă?",
      "options": [
        "Apariția în timpul efortului fizic",
        "Ortostatism prelungit într-un loc aglomerat și cald",
        "Greață și transpirații înainte de pierderea conștienței",
        "Absența oricărui prodrom, cu palpitații sau istoric familial de moarte subită",
        "Apariția după o emoție puternică sau după vederea sângelui"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Sincopa la efort sau fără prodrom, în contextul unei cardiopatii sau al unui istoric familial, orientează spre cauză cardiacă. Celelalte descriu tabloul tipic reflex."
    },
    {
      "id": "car-q71",
      "type": "single",
      "text": "Un bărbat vârstnic, aflat sub tratament cu mai multe antihipertensive și diuretic, are amețeală și sincopă la ridicarea bruscă din pat. Mecanismul probabil este:",
      "options": [
        "Disecție de aortă",
        "Hipertensiune pulmonară",
        "Tahicardie ventriculară susținută",
        "Bloc atrioventricular complet",
        "Hipotensiune ortostatică"
      ],
      "answer": [
        4
      ],
      "explanation": "Scăderea TA la ridicare în ortostatism, favorizată de diuretice, vasodilatatoare și depleție volemică, explică episodul."
    },
    {
      "id": "car-q72",
      "type": "multi",
      "text": "Care dintre următoarele sunt cauze aritmice de sincopă?",
      "options": [
        "Blocul atrioventricular de grad înalt",
        "Hipersensibilitatea sinusului carotidian",
        "Sincopa situațională la micțiune",
        "Tahicardia ventriculară",
        "Hipotensiunea ortostatică"
      ],
      "answer": [
        0,
        3
      ],
      "explanation": "Bradiaritmiile severe și tahiaritmiile ventriculare scad brusc debitul cardiac. Celelalte forme sunt reflexe sau ortostatice."
    },
    {
      "id": "car-q73",
      "type": "single",
      "text": "Care investigație este indispensabilă în evaluarea inițială a oricărui pacient cu sincopă?",
      "options": [
        "Electrocardiograma de repaus",
        "Spirometria",
        "Rezonanța magnetică cerebrală",
        "Coronarografia",
        "Angiografia CT pulmonară"
      ],
      "answer": [
        0
      ],
      "explanation": "După anamneză și examen clinic, inclusiv TA în clinostatism și ortostatism, ECG-ul poate detecta aritmii sau tulburări de conducere. Alte teste se aleg după suspiciune."
    },
    {
      "id": "car-q74",
      "type": "single",
      "text": "Care este cea mai frecventă cauză de cor pulmonar cronic?",
      "options": [
        "Defectul septal ventricular mic",
        "Pericardita acută",
        "Cardiomiopatia hipertrofică",
        "Stenoza mitrală reumatismală",
        "Bronhopneumopatia obstructivă cronică"
      ],
      "answer": [
        4
      ],
      "explanation": "Cordul pulmonar cronic înseamnă suprasolicitarea ventriculului drept prin boală pulmonară sau vasculară pulmonară. BPOC este cea mai frecventă cauză."
    },
    {
      "id": "car-q75",
      "type": "multi",
      "text": "Care dintre următoarele semne pot apărea în cordul pulmonar cronic decompensat?",
      "options": [
        "Hepatomegalie de stază",
        "Turgescența jugularelor",
        "Edeme periferice",
        "Ortopnee severă ca element dominant, cu raluri de stază bilaterale și galop de ventricul stâng",
        "Accentuarea componentei pulmonare a zgomotului II"
      ],
      "answer": [
        0,
        1,
        2,
        4
      ],
      "explanation": "Insuficiența de ventricul drept dă congestie sistemică. Tabloul pulmonar de stază predominant sugerează insuficiență stângă."
    },
    {
      "id": "car-q76",
      "type": "single",
      "text": "Metoda de referință pentru confirmarea hipertensiunii pulmonare și măsurarea presiunilor este:",
      "options": [
        "Spirometria",
        "Radiografia toracică",
        "Auscultația cardiacă",
        "Electrocardiograma",
        "Cateterismul cardiac drept"
      ],
      "answer": [
        4
      ],
      "explanation": "Ecocardiografia este metoda de screening, dar diagnosticul de certitudine și evaluarea hemodinamică se fac prin cateterism drept."
    },
    {
      "id": "car-q77",
      "type": "multi",
      "text": "Care dintre următoarele condiții duc la hipertensiune pulmonară postcapilară (pasivă)?",
      "options": [
        "Fibroza pulmonară idiopatică",
        "Disfuncția sistolică a ventriculului stâng",
        "Stenoza mitrală",
        "Sclerodermia cu afectare vasculară pulmonară",
        "Embolia pulmonară cronică recurentă"
      ],
      "answer": [
        1,
        2
      ],
      "explanation": "Presiunea crescută în atriul stâng se transmite retrograd în circulația pulmonară. Celelalte exemple dau hipertensiune precapilară."
    },
    {
      "id": "car-q78",
      "type": "single",
      "text": "Ce metodă neinvazivă permite estimarea presiunii sistolice din artera pulmonară?",
      "options": [
        "Electrocardiograma de efort",
        "Auscultația zgomotului II",
        "Ecocardiografia Doppler, pornind de la jetul de regurgitare tricuspidiană",
        "Radiografia cardiopulmonară standard",
        "Gazometria arterială"
      ],
      "answer": [
        2
      ],
      "explanation": "Viteza jetului de regurgitare tricuspidiană permite estimarea presiunii sistolice pulmonare; ecografia arată și dilatarea cavităților drepte."
    },
    {
      "id": "car-q79",
      "type": "multi",
      "text": "Care dintre următoarele măsuri sunt indicate la pacientul cu cor pulmonar cronic prin BPOC?",
      "options": [
        "Oxigenoterapie de lungă durată, dacă există hipoxemie cronică",
        "Renunțarea la fumat",
        "Tratamentul optim al bolii pulmonare de bază",
        "Sedative benzodiazepinice pentru ameliorarea dispneei",
        "Restricție totală și permanentă a oricărei activități"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Corectarea hipoxemiei reduce vasoconstricția pulmonară hipoxică, iar tratamentul bolii pulmonare încetinește evoluția. Sedativele pot deprima respirația."
    },
    {
      "id": "car-q80",
      "type": "single",
      "text": "Care dintre următoarele reprezintă măsuri inițiale potrivite în edemul pulmonar acut cardiogen?",
      "options": [
        "Beta-blocant intravenos în bolus",
        "Tromboliză sistemică de rutină",
        "Poziție semișezândă, oxigen și diuretic de ansă intravenos",
        "Poziție Trendelenburg și perfuzie rapidă de cristaloide",
        "Antitusiv și repaus în decubit dorsal"
      ],
      "answer": [
        2
      ],
      "explanation": "Poziția șezândă scade întoarcerea venoasă, oxigenul corectează hipoxemia, iar diureticul de ansă reduce volemia. Fluidele și beta-blocantele în bolus agravează situația."
    },
    {
      "id": "car-q81",
      "type": "multi",
      "text": "Care dintre următoarele pot precipita un edem pulmonar acut cardiogen?",
      "options": [
        "Tahiaritmia cu alură ventriculară rapidă",
        "Infarctul miocardic acut",
        "Criza hipertensivă",
        "Deshidratarea severă",
        "Hemoragia digestivă abundentă"
      ],
      "answer": [
        0,
        1,
        2
      ],
      "explanation": "Creșterea bruscă a postsarcinii, pierderea de miocard funcțional sau scurtarea diastolei cresc presiunea în atriul stâng și provoacă edem. Pierderea de volum are efect opus."
    },
    {
      "id": "car-q82",
      "type": "single",
      "text": "Șocul cardiogen se caracterizează prin:",
      "options": [
        "Scăderea volemiei prin pierdere de sânge",
        "Hipoperfuzie tisulară prin scăderea debitului cardiac, în pofida presiunilor de umplere crescute",
        "Hipotensiune doar prin efect medicamentos, cu perfuzie conservată",
        "Scăderea presiunilor de umplere prin deshidratare",
        "Vasodilatație periferică extremă cu debit cardiac crescut"
      ],
      "answer": [
        1
      ],
      "explanation": "În șocul cardiogen pompa cardiacă nu mai asigură debitul necesar, deci presiunile din amonte rămân crescute, cu stază pulmonară."
    },
    {
      "id": "car-q83",
      "type": "single",
      "text": "Cea mai frecventă cauză de șoc cardiogen este:",
      "options": [
        "Infarctul miocardic acut extins al ventriculului stâng",
        "Pericardita acută necomplicată",
        "Fibrilația atrială paroxistică izolată",
        "Stenoza mitrală ușoară",
        "Embolia pulmonară mică"
      ],
      "answer": [
        0
      ],
      "explanation": "Pierderea unei mase importante de miocard în infarct duce la scăderea contractilității. Complicațiile mecanice ale infarctului sunt alte cauze."
    },
    {
      "id": "car-q84",
      "type": "multi",
      "text": "Care dintre următoarele sunt semne de hipoperfuzie într-un șoc cardiogen?",
      "options": [
        "Oligurie",
        "Hipotensiune arterială",
        "Alterarea stării de conștiență",
        "Tegumente calde și roz, cu jugulare plate",
        "Extremități reci și umede"
      ],
      "answer": [
        0,
        1,
        2,
        4
      ],
      "explanation": "Constricția periferică compensatorie dă extremități reci. Tegumentele calde sugerează șoc distributiv."
    },
    {
      "id": "car-q85",
      "type": "multi",
      "text": "Care sunt componente ale managementului șocului cardiogen după infarct?",
      "options": [
        "Revascularizarea precoce a arterei responsabile",
        "Perfuzie rapidă de volume mari de cristaloide",
        "Suport inotrop sau vasopresor, la nevoie",
        "Nitrați în doze mari, pentru vasodilatație",
        "Beta-blocant intravenos pentru scăderea frecvenței"
      ],
      "answer": [
        0,
        2
      ],
      "explanation": "Tratamentul etiologic constă în deschiderea arterei ocluzionate, iar suportul hemodinamic susține perfuzia. Fluidele în exces, beta-blocantele și nitrații agravează."
    },
    {
      "id": "car-q86",
      "type": "single",
      "text": "Care semn ajută la diferențierea șocului cardiogen de cel hemoragic?",
      "options": [
        "Tahicardia",
        "Turgescența jugularelor, cu raluri de stază pulmonară",
        "Oliguria",
        "Hipotensiunea arterială",
        "Extremitățile reci"
      ],
      "answer": [
        1
      ],
      "explanation": "Șocul cardiogen asociază presiuni venoase crescute, deci jugulare turgescente și stază pulmonară; în șocul hemoragic venele sunt colabate."
    },
    {
      "id": "car-q87",
      "type": "single",
      "text": "Dedublarea fixă a zgomotului II, independentă de respirație, este caracteristică pentru:",
      "options": [
        "Defectul septal atrial",
        "Canalul arterial persistent",
        "Stenoza aortică valvulară",
        "Coarctația de aortă",
        "Defectul septal ventricular restrictiv"
      ],
      "answer": [
        0
      ],
      "explanation": "Șuntul stânga–dreapta atrial și suprasolicitarea de volum a ventriculului drept întârzie închiderea valvei pulmonare, cu dedublare fixă a zgomotului II."
    },
    {
      "id": "car-q88",
      "type": "multi",
      "text": "Care sunt complicații posibile ale unui defect septal atrial netratat la adult?",
      "options": [
        "Disecție de aortă abdominală",
        "Anevrism de aortă abdominală",
        "Stenoză aortică calcificată dobândită",
        "Aritmii atriale, precum fibrilația atrială",
        "Hipertensiune pulmonară"
      ],
      "answer": [
        3,
        4
      ],
      "explanation": "Suprasolicitarea cavităților drepte favorizează aritmii atriale și, în timp, boală vasculară pulmonară. Celelalte afecțiuni nu au legătură cauzală directă."
    },
    {
      "id": "car-q89",
      "type": "single",
      "text": "Care este tabloul auscultator tipic al unui defect septal ventricular cu șunt semnificativ?",
      "options": [
        "Suflu continuu subclavicular stâng",
        "Dedublare fixă a zgomotului II fără suflu",
        "Suflu sistolic ejecțional cu iradiere în vasele gâtului",
        "Suflu diastolic apical cu clacment de deschidere",
        "Suflu holosistolic aspru la marginea sternală stângă inferioară, adesea cu freamăt"
      ],
      "answer": [
        4
      ],
      "explanation": "Șuntul are loc pe tot parcursul sistolei, deci suflul este holosistolic; defectele mici sunt adesea zgomotoase."
    },
    {
      "id": "car-q90",
      "type": "single",
      "text": "Un suflu continuu, „în mașinărie”, auzit sub claviculă la stânga, este caracteristic pentru:",
      "options": [
        "Stenoza pulmonară izolată",
        "Canalul arterial persistent",
        "Tetralogia Fallot",
        "Defectul septal atrial",
        "Insuficiența mitrală cronică"
      ],
      "answer": [
        1
      ],
      "explanation": "Canalul arterial persistent produce șunt aorto-pulmonar în sistolă și în diastolă, deci suflu continuu."
    },
    {
      "id": "car-q91",
      "type": "multi",
      "text": "Care dintre următoarele sunt manifestări ale sindromului Eisenmenger?",
      "options": [
        "Hipocratism digital",
        "Creșterea fluxului pulmonar prin șunt stânga–dreapta nemodificat",
        "Zgomot II dedublat fix ca singură anomalie",
        "Eritrocitoză secundară",
        "Cianoză centrală"
      ],
      "answer": [
        0,
        3,
        4
      ],
      "explanation": "În Eisenmenger, hipertensiunea pulmonară severă inversează șuntul, ceea ce duce la hipoxemie cronică, hipocratism și poliglobulie."
    },
    {
      "id": "car-q92",
      "type": "multi",
      "text": "Care dintre următoarele sunt caracteristice coarctației de aortă la adult?",
      "options": [
        "Pulsuri femurale diminuate sau întârziate",
        "Dedublare fixă a zgomotului II ca semn caracteristic",
        "TA mai mică la membrele inferioare",
        "Hipertensiune arterială la membrele superioare",
        "Eroziuni costale (usura costală) pe radiografie"
      ],
      "answer": [
        0,
        2,
        3,
        4
      ],
      "explanation": "Obstrucția istmului aortic crește presiunea în amonte, diminuă fluxul distal și dezvoltă circulație colaterală intercostală, cu usura costală."
    },
    {
      "id": "car-q93",
      "type": "single",
      "text": "Care dintre următoarele NU face parte din tetralogia Fallot?",
      "options": [
        "Hipertrofia ventriculară dreaptă",
        "Aorta „călare” pe septul interventricular",
        "Stenoza mitrală",
        "Stenoza pulmonară infundibulară",
        "Defectul septal ventricular"
      ],
      "answer": [
        2
      ],
      "explanation": "Tetralogia Fallot include CIV, obstrucție la ieșirea din ventriculul drept, aortă călare și hipertrofie dreaptă."
    },
    {
      "id": "car-q94",
      "type": "single",
      "text": "Ce trebuie să evaluezi pentru a susține că un ritm este sinusal?",
      "options": [
        "Complexe QRS largi, fără legătură cu undele P",
        "Absența undelor P cu interval RR neregulat",
        "Unde P negative în DII, apărute după QRS",
        "Unde P pozitive în DII, fiecare urmată de un complex QRS",
        "Unde „în dinți de fierăstrău” în derivațiile inferioare"
      ],
      "answer": [
        3
      ],
      "explanation": "Ritmul sinusal presupune depolarizare atrială de la nodul sinusal: undă P pozitivă în DII, negativă în aVR, urmată de QRS."
    },
    {
      "id": "car-q95",
      "type": "multi",
      "text": "Care dintre următoarele modificări ECG pot apărea în hiperkaliemie?",
      "options": [
        "Unde U proeminente",
        "Aplatizarea sau dispariția undelor P",
        "Alungirea marcată a intervalului QT",
        "Lărgirea complexului QRS",
        "Unde T înalte, ascuțite, cu bază îngustă"
      ],
      "answer": [
        1,
        3,
        4
      ],
      "explanation": "Hiperkaliemia progresivă dă unde T ascuțite, apoi tulburări de conducere cu P aplatizat și QRS larg. Undele U sunt asociate cu hipokaliemia."
    },
    {
      "id": "car-q96",
      "type": "single",
      "text": "Hipercalcemia determină pe ECG, de regulă:",
      "options": [
        "Apariția undei delta",
        "Unde T ascuțite și înalte",
        "Unde U proeminente",
        "Scurtarea intervalului QT",
        "Supradenivelarea difuză a segmentului ST"
      ],
      "answer": [
        3
      ],
      "explanation": "Hipercalcemia scurtează repolarizarea ventriculară, în timp ce hipocalcemia o prelungește."
    },
    {
      "id": "car-q97",
      "type": "single",
      "text": "Care este aspectul tipic al blocului major de ramură stângă?",
      "options": [
        "QRS îngust cu undă delta",
        "Complex QRS larg, cu R larg și crestat în derivațiile laterale (V5–V6, DI, aVL)",
        "Lipsa undelor P cu QRS îngust",
        "Complex rsR′ în V1, cu S larg în derivațiile laterale",
        "Interval PR scurt cu QRS larg"
      ],
      "answer": [
        1
      ],
      "explanation": "Blocul de ramură stângă are QRS lărgit, cu activare ventriculară întârziată în pereții laterali; prezența lui îngreunează interpretarea segmentului ST."
    },
    {
      "id": "car-q98",
      "type": "multi",
      "text": "Care dintre următoarele pot sugera hipertrofia ventriculară stângă pe ECG?",
      "options": [
        "Undă delta cu interval PR scurt",
        "Deviația axei electrice spre stânga",
        "Tulburări secundare de repolarizare, de tip „strain”",
        "Unde Q patologice izolate în derivațiile inferioare",
        "Amplitudine crescută a complexelor QRS în derivațiile stângi"
      ],
      "answer": [
        1,
        2,
        4
      ],
      "explanation": "Hipertrofia crește voltajul QRS și modifică repolarizarea. Unda delta indică preexcitație, iar undele Q patologice indică necroză."
    },
    {
      "id": "car-q99",
      "type": "multi",
      "text": "Care dintre următoarele modificări ECG pot apărea în embolia pulmonară acută?",
      "options": [
        "Alternanță electrică permanentă",
        "Tahicardie sinusală",
        "Bloc atrioventricular complet obligatoriu",
        "Unde T negative în derivațiile precordiale drepte (V1–V3)",
        "Undă delta"
      ],
      "answer": [
        1,
        3
      ],
      "explanation": "Suprasolicitarea acută a inimii drepte dă tahicardie, T negative în V1–V3 sau bloc de ramură dreaptă. Celelalte nu sunt specifice."
    },
    {
      "id": "car-q100",
      "type": "single",
      "text": "Undele Q patologice pe ECG indică de obicei:",
      "options": [
        "Hipokaliemie",
        "Preexcitație ventriculară",
        "Necroză miocardică (infarct constituit)",
        "Hipertrofie ventriculară dreaptă",
        "Pericardită acută"
      ],
      "answer": [
        2
      ],
      "explanation": "Undele Q patologice reflectă țesut miocardic electric inactiv, de obicei după infarct, în derivațiile corespunzătoare teritoriului afectat."
    },
  ],
}
