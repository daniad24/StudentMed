// Cardiologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'car-t1',
    title: 'Sindroamele coronariene acute',
    topic: 'Cardiopatia ischemică',
    readMinutes: 3,
    content: `## Definiție și mecanism

**Sindroamele coronariene acute (SCA)** cuprind angina instabilă, infarctul miocardic fără supradenivelare ST (**NSTEMI**) și infarctul cu supradenivelare ST (**STEMI**). Mecanismul comun este **ruptura sau eroziunea unei plăci aterosclerotice**, urmată de agregare plachetară și formarea unui tromb. Trombul ocluziv complet produce de obicei STEMI, iar cel subocluziv sau embolizarea distală produc NSTEMI sau angină instabilă.

## Clasificare

| Formă | ECG | Troponină |
|---|---|---|
| **Angină instabilă** | normal sau subdenivelare ST, unde T negative | normală |
| **NSTEMI** | subdenivelare ST, unde T negative sau ECG normal | **crescută** |
| **STEMI** | supradenivelare ST persistentă (sau bloc de ram stâng nou) | crescută |

## Tablou clinic

- durere retrosternală constrictivă, **de repaus**, prelungită, nu cedează la nitrat;
- iradiere în membrul superior stâng, mandibulă, epigastru;
- transpirații, greață, anxietate, dispnee;
- la vârstnici, diabetici și femei prezentarea poate fi **atipică** sau chiar nedureroasă.

## Localizarea pe ECG

| Derivații | Teritoriu | Artera implicată (de obicei) |
|---|---|---|
| V1–V4 | anteroseptal | descendenta anterioară stângă |
| DI, aVL, V5–V6 | lateral | circumflexa |
| DII, DIII, aVF | inferior | coronara dreaptă |

Infarctul inferior se poate asocia cu **bradicardie și blocuri atrioventriculare** și cu infarct de ventricul drept (hipotensiune, jugulare turgescente, plămâni curați).

## Tratament

- **Reperfuzie de urgență în STEMI**: angioplastia coronariană primară este metoda preferată; fibrinoliza se folosește când angioplastia nu poate fi efectuată în timp util. Decizia nu așteaptă rezultatul troponinei.
- **NSTEMI/angina instabilă**: stratificarea riscului și coronarografie, cu urgență cu atât mai mare cu cât riscul este mai înalt.
- **Antiagregare dublă**: aspirină plus un inhibitor P2Y12 (clopidogrel, ticagrelor, prasugrel).
- **Anticoagulare parenterală** (heparină nefracționată, heparină cu greutate moleculară mică, fondaparină).
- Nitrați pentru durere (contraindicați după inhibitori de fosfodiesterază-5 și în hipotensiune), oxigen doar la hipoxemie.
- Prevenție secundară: **betablocant, IECA, statină de intensitate mare**, renunțarea la fumat, reabilitare cardiacă.

## Complicații

- **aritmice**: fibrilație ventriculară (cauza principală de deces precoce), blocuri AV, fibrilație atrială;
- **pompă**: insuficiență cardiacă, șoc cardiogen;
- **mecanice**: ruptura de mușchi papilar (insuficiență mitrală acută), ruptura septului interventricular, ruptura peretelui liber (tamponadă), anevrism ventricular;
- **pericardice**: pericardită precoce și **sindrom Dressler** (autoimun, după săptămâni);
- tromb intraventricular cu embolii sistemice.

## De reținut pentru examen

- Troponina diferențiază NSTEMI de angina instabilă; ECG diferențiază STEMI de NSTEMI.
- În STEMI reperfuzia nu se amână pentru biomarkeri.
- DII, DIII, aVF = inferior = coronara dreaptă, cu risc de bradiaritmii.
- Suflu holosistolic nou post-infarct: gândește-te la ruptura de mușchi papilar sau de sept.
- Nitrații sunt contraindicați după sildenafil și în infarctul de ventricul drept cu hipotensiune.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie (Cardiopatia ischemică)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – ST-Segment Elevation Myocardial Infarction',
    ],
  },
  {
    id: 'car-t2',
    title: 'Insuficiența cardiacă',
    topic: 'Insuficiența cardiacă',
    readMinutes: 3,
    content: `## Definiție

**Insuficiența cardiacă (IC)** este un sindrom clinic în care inima nu asigură un debit adecvat nevoilor organismului sau o face doar cu presiuni de umplere crescute. După fracția de ejecție a ventriculului stâng se descriu IC cu **fracție de ejecție redusă** (disfuncție sistolică) și IC cu **fracție de ejecție păstrată** (disfuncție diastolică, frecventă la vârstnici hipertensivi).

## Etiologie

- **cardiopatia ischemică** (cea mai frecventă cauză în țările dezvoltate);
- **hipertensiunea arterială**;
- valvulopatii, cardiomiopatii, miocardite;
- aritmii (tahicardiomiopatie), boli pericardice;
- stări cu debit crescut: anemie severă, hipertiroidism, fistule arteriovenoase.

## Fiziopatologie

Scăderea debitului activează **sistemul nervos simpatic** și **sistemul renină-angiotensină-aldosteron**, cu vasoconstricție și retenție de sare și apă. Pe termen lung aceste mecanisme compensatorii devin nocive și produc **remodelare ventriculară**. Distensia miocardului stimulează secreția de **peptide natriuretice** (BNP, NT-proBNP).

## Tablou clinic

| IC stângă (congestie pulmonară) | IC dreaptă (congestie sistemică) |
|---|---|
| dispnee de efort, **ortopnee** | turgescență jugulară, reflux hepatojugular |
| **dispnee paroxistică nocturnă** | hepatomegalie de stază |
| raluri crepitante bazale | edeme gambiere declive |
| galop protodiastolic (zgomot III) | ascită, revărsat pleural |
| edem pulmonar acut | cauza cea mai frecventă: IC stângă |

Severitatea simptomelor se exprimă prin **clasele NYHA I–IV** (de la absența limitării la simptome în repaus).

## Investigații

- **ECG**: rar complet normal în IC; arată cauze (infarct vechi, FiA, hipertrofie).
- **BNP/NT-proBNP**: o valoare normală face diagnosticul puțin probabil.
- **Ecocardiografia**: investigația-cheie, care confirmă diagnosticul, măsoară fracția de ejecție și identifică etiologia.
- **Radiografia toracică**: cardiomegalie, redistribuție vasculară, linii Kerley B, revărsat pleural.
- Biologic: hemoleucogramă, funcție renală, electroliți, funcție tiroidiană.

## Tratament

- **Nefarmacologic**: restricție de sare, monitorizarea greutății, activitate fizică adaptată, vaccinări.
- **Diuretice de ansă**: ameliorează congestia, fără efect demonstrat asupra mortalității.
- **Medicamente care cresc supraviețuirea în IC cu FE redusă**: **IECA** (sau sartan, ori asocierea sacubitril/valsartan), **betablocante** (bisoprolol, carvedilol, metoprolol succinat), **antagoniști mineralocorticoizi** (spironolactonă, eplerenonă) și, mai recent, **inhibitorii SGLT2** (dapagliflozin, empagliflozin).
- Digoxina: reduce spitalizările, utilă mai ales în FiA asociată.
- Dispozitive la pacienți selectați: **defibrilator implantabil**, **terapie de resincronizare**.
- Tratamentul cauzei (revascularizare, corecție valvulară).

## Edemul pulmonar acut

Poziție șezândă, oxigen la hipoxemie, **diuretic de ansă intravenos**, nitrați intravenos dacă tensiunea o permite, ventilație noninvazivă la nevoie și tratarea factorului declanșator.

## De reținut pentru examen

- Factori de decompensare clasici: AINS, FiA rapidă, infecții, aport de sare, nerespectarea tratamentului, ischemie.
- Diureticele ameliorează simptomele, dar nu prelungesc supraviețuirea.
- Betablocantele se inițiază la pacientul stabil, nu în plină decompensare.
- Cea mai frecventă cauză de IC dreaptă este IC stângă.
- Hiperkaliemia este riscul principal al asocierii IECA cu spironolactonă.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie (Insuficiența cardiacă)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Heart Failure',
    ],
  },
  {
    id: 'car-t3',
    title: 'Fibrilația atrială',
    topic: 'Aritmii',
    readMinutes: 3,
    content: `## Definiție și importanță

**Fibrilația atrială (FiA)** este cea mai frecventă aritmie susținută. Activitatea electrică atrială este haotică, fără contracție atrială eficientă, iar nodul atrioventricular transmite neregulat impulsurile spre ventriculi. Importanța ei vine din **riscul tromboembolic** (tromb în urechiușa stângă, cu accident vascular cerebral) și din riscul de **insuficiență cardiacă**.

## Cauze și factori favorizanți

- **hipertensiunea arterială** și cardiopatia ischemică;
- **valvulopatiile mitrale** (în special stenoza mitrală);
- insuficiența cardiacă, cardiomiopatiile;
- **hipertiroidismul**, consumul de alcool, obezitatea, apneea de somn;
- postoperator (chirurgie cardiacă), embolie pulmonară, pneumonie;
- forme fără cauză identificabilă („lone” FiA), la tineri.

## Clasificare

| Tip | Caracteristică |
|---|---|
| **Paroxistică** | se oprește spontan |
| **Persistentă** | necesită cardioversie pentru oprire |
| **Permanentă** | acceptată, nu se mai încearcă restabilirea ritmului sinusal |

Riscul embolic nu depinde de tipul FiA, ci de factorii de risc ai pacientului.

## Diagnostic

- simptome: palpitații, dispnee, fatigabilitate, amețeli; poate fi asimptomatică;
- **puls neregulat**, deficit de puls (frecvența la apex mai mare decât la radială);
- **ECG**: absența undelor P, unde f fine sau grosolane, **intervale RR complet neregulate**, QRS de obicei îngust;
- investigații: **ecocardiografie** (valvulopatii, dimensiunea atriului, funcția ventriculară), **TSH**, electroliți, funcție renală.

## Tratament

**1. Pacientul instabil hemodinamic** (hipotensiune, edem pulmonar, ischemie): **cardioversie electrică sincronizată de urgență**.

**2. Prevenția tromboemboliei**
- riscul se evaluează cu scorul **CHA2DS2-VASc**; HAS-BLED identifică factorii de risc hemoragic corectabili, nu este un motiv de a refuza anticoagularea;
- în FiA nonvalvulară se preferă **anticoagulantele orale directe** (apixaban, rivaroxaban, edoxaban, dabigatran);
- la **proteze valvulare mecanice** și stenoză mitrală semnificativă se folosesc **antivitaminele K**;
- **aspirina nu este** o alternativă la anticoagulare.

**3. Controlul frecvenței**: betablocante, blocante de calciu nondihidropiridinice (verapamil, diltiazem; de evitat în IC cu FE redusă), digoxină (utilă la sedentari și în IC).

**4. Controlul ritmului**: cardioversie electrică sau farmacologică (amiodaronă; flecainidă doar în absența bolii cardiace structurale), antiaritmice de menținere și **ablația prin cateter** (izolarea venelor pulmonare). Înainte de cardioversia unei FiA cu debut incert sau mai vechi este necesară anticoagularea prealabilă sau excluderea trombului prin **ecocardiografie transesofagiană**.

## Flutterul atrial – diferențiere

Flutterul tipic are un circuit de reintrare în atriul drept, cu **unde F „în dinți de fierăstrău”** în DII, DIII, aVF și adesea conducere 2:1. Riscul embolic se gestionează ca în FiA, iar ablația istmului cavotricuspidian are succes foarte mare.

![Fibrilație atrială: RR neregulat, fără unde P](/img/ecg-fibrilatie-atriala.svg)

![Flutter atrial: unde F în dinți de fierăstrău](/img/ecg-flutter-atrial.svg)

## De reținut pentru examen

- FiA = fără unde P + RR neregulat; flutter = dinți de fierăstrău.
- Instabil hemodinamic = cardioversie electrică imediată.
- Proteză mecanică sau stenoză mitrală: antivitamina K, nu anticoagulante directe.
- FiA preexcitată (WPW): evită digoxina și verapamilul.
- Caută întotdeauna hipertiroidismul la o FiA nou descoperită.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie (Aritmii)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Atrial Fibrillation',
    ],
  },
  {
    id: 'car-t4',
    title: 'Valvulopatiile: tabel comparativ',
    topic: 'Valvulopatii',
    readMinutes: 3,
    content: `## Principii generale

Valvulopatiile produc fie **obstrucție** (stenoză), fie **regurgitare** (insuficiență). Stenozele încarcă cavitatea din amonte cu **presiune**, iar insuficiențele cu **volum**. Diagnosticul se sugerează la auscultație și se confirmă prin **ecocardiografie**, care apreciază severitatea, funcția ventriculară și oportunitatea intervenției.

## Tabel comparativ

| | Stenoza aortică | Insuficiența aortică | Stenoza mitrală | Insuficiența mitrală |
|---|---|---|---|---|
| **Etiologie principală** | degenerativă calcificată (vârstnici), valvă bicuspidă (mai tineri) | dilatarea rădăcinii aortice, bicuspidie, endocardită, reumatism | **reumatismală** | prolaps de valvă mitrală, ischemie, dilatarea VS, endocardită |
| **Simptome** | **angină, sincopă de efort, dispnee** | dispnee, palpitații; mult timp asimptomatică | dispnee, hemoptizie, palpitații (FiA), embolii | dispnee, oboseală, palpitații |
| **Suflu** | sistolic ejecțional, focar aortic, iradiat în **carotide** | **diastolic precoce descrescendo**, marginea sternală stângă | **uruitură mezodiastolică** apicală, precedată de **clacment de deschidere** | **holosistolic** apical, iradiat în **axilă** |
| **Alte semne** | puls mic și tardiv (parvus et tardus), zgomot II diminuat | puls amplu, „în ciocan de apă”, presiune pulsatilă mare, semnul Musset | zgomot I întărit, facies mitral, FiA | zgomot I diminuat, zgomot III |
| **Încărcare** | presiune VS, hipertrofie concentrică | volum VS, dilatare | presiune AS, hipertensiune pulmonară | volum AS și VS |
| **Tratament definitiv** | înlocuire valvulară chirurgicală sau transcateter | înlocuire valvulară, la nevoie și a rădăcinii aortice | valvulotomie percutană cu balon (anatomie favorabilă) sau înlocuire | reparare valvulară (de preferat) sau înlocuire |

## Nuanțe importante

- **Stenoza aortică**: apariția simptomelor într-o stenoză severă marchează un prognostic prost fără intervenție și este indicație de înlocuire valvulară. Vasodilatatoarele puternice se folosesc cu prudență, deoarece pot produce hipotensiune.
- **Insuficiența aortică acută** (endocardită, disecție de aortă) este o urgență chirurgicală, cu edem pulmonar fără semnele periferice tipice.
- **Stenoza mitrală**: asocierea cu FiA crește mult riscul embolic; anticoagularea se face cu **antivitamine K**.
- **Insuficiența mitrală acută** (ruptură de mușchi papilar sau de cordaje) produce edem pulmonar brusc.
- Toate valvulopatiile predispun la **endocardită infecțioasă**.

## Manevre care modifică suflurile

- inspirul accentuează suflurile de cord drept;
- **manevra Valsalva** reduce majoritatea suflurilor, dar **intensifică** suflul cardiomiopatiei hipertrofice obstructive și pe cel din prolapsul mitral;
- poziția aplecat înainte, în expir, scoate în evidență suflul insuficienței aortice; decubitul lateral stâng, uruitura stenozei mitrale.

## De reținut pentru examen

- Triada stenozei aortice: angină, sincopă de efort, dispnee.
- Clacment de deschidere + uruitură diastolică = stenoză mitrală, de obicei reumatismală.
- Puls „în ciocan de apă” și presiune pulsatilă mare = insuficiență aortică.
- Suflu holosistolic apical iradiat în axilă = insuficiență mitrală.
- În insuficiența mitrală, repararea valvei este preferată înlocuirii când este posibilă.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie (Valvulopatii)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Valvular Heart Disease',
    ],
  },
]
