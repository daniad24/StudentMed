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
  {
    id: 'car-t5',
    title: "Cardiomiopatiile: dilatativă, hipertrofică, restrictivă",
    topic: "Boli ale miocardului",
    readMinutes: 3,
    content: `## Ce sunt cardiomiopatiile

**Cardiomiopatiile** sunt boli primare ale miocardului, în care mușchiul cardiac este anormal structural sau funcțional, fără ca valvulopatiile, hipertensiunea sau boala coronariană să le explice în întregime. Clasic se descriu trei fenotipuri, după modul în care este afectată funcția ventriculară.

## Tabel comparativ

| | Dilatativă | Hipertrofică | Restrictivă |
|---|---|---|---|
| Anomalia principală | Dilatare ventriculară, scăderea contractilității | Hipertrofie, de obicei septală asimetrică | Rigiditate, umplere diastolică limitată |
| Funcția sistolică | Scăzută | Păstrată sau crescută | De obicei păstrată |
| Dimensiunea ventriculilor | Mărită | Cavitate mică | Normală sau aproape normală |
| Atriile | Pot fi dilatate | Dilatate frecvent | Dilatate net |
| Exemple de cauze | Alcool, miocardite, genetic, tahicardie cronică | Mutații sarcomerice (AD) | Amiloidoză, sarcoidoză, hemocromatoză |

## Cardiomiopatia dilatativă

Este cea mai frecventă formă. Dilatarea și hipokinezia duc la **insuficiență cardiacă cu fracție de ejecție redusă**. Cauzele includ consumul cronic de alcool, miocardita virală, unele medicamente citotoxice, bolile endocrine, tahicardia cronică și factorii genetici. Complicațiile sunt:

- aritmii ventriculare și moarte subită;
- fibrilație atrială;
- trombi intracavitari cu embolii sistemice;
- insuficiență mitrală funcțională, prin dilatarea inelului.

Tratamentul urmează principiile insuficienței cardiace sistolice, cu corectarea cauzei acolo unde se poate (de exemplu abstinența alcoolică).

## Cardiomiopatia hipertrofică

Are în general transmitere **autosomal dominantă**, prin mutații ale proteinelor sarcomerice. Hipertrofia septului poate produce **obstrucție dinamică** în tractul de ejecție al ventriculului stâng. Simptomele sunt dispneea, angina, presincopa și sincopa, iar boala este o cauză cunoscută de **moarte subită la tineri**, inclusiv la sportivi.

- Suflul sistolic crește la manevra Valsalva și în ortostatism (scade întoarcerea venoasă) și scade în ghemuit.
- Factorii care agravează obstrucția: deshidratarea, vasodilatatoarele, diureticele în exces.
- Beta-blocantele prelungesc diastola și reduc obstrucția.
- Pacienții cu risc crescut de aritmii pot beneficia de defibrilator implantabil.

## Cardiomiopatia restrictivă

Rigiditatea miocardică face ca ventriculul să se umple dificil, deci presiunile atriale cresc. Tabloul seamănă cu cel al insuficienței cardiace drepte: jugulare turgescente, hepatomegalie, edeme, uneori **semnul Kussmaul**. Cauzele principale sunt infiltrative (amiloidoza, sarcoidoza) sau de depozit (hemocromatoza). Ecografia arată ventriculi nedilatați și atrii mărite.

**Diagnosticul diferențial cu pericardita constrictivă** este important, pentru că aceasta din urmă poate fi tratată chirurgical. Îngroșarea sau calcificările pericardului orientează spre constricție.

## Cardiomiopatia Takotsubo

Apare de obicei la femei postmenopauzale, după un stres emoțional sau fizic intens. Clinic și biologic poate imita un infarct, dar coronarografia nu arată o leziune care să explice tabloul, iar ventriculografia arată **balonizare apicală**. Disfuncția este de regulă reversibilă.

## De reținut pentru examen

- Dilatativă: dilatare plus fracție de ejecție scăzută; alcoolul și miocarditele sunt cauze clasice.
- Hipertrofică: AD, moarte subită la sportivi; suflul crește la Valsalva; se evită deshidratarea și vasodilatatoarele.
- Restrictivă: umplere rigidă, ventriculi nedilatați, atrii mari; amiloidoza este exemplul clasic.
- Calcificările pericardice susțin pericardita constrictivă, nu cardiomiopatia restrictivă.
- Takotsubo: femeie postmenopauzală, stres, coronare fără stenoze, balonizare apicală.
`,
    references: [
      "Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie (Cardiomiopatii)",
      "Harrison’s Principles of Internal Medicine – Cardiomyopathies and Myocarditis",
    ],
  },
  {
    id: 'car-t6',
    title: "Disecția de aortă și anevrismul aortic",
    topic: "Boli ale aortei",
    readMinutes: 3,
    content: `## Anevrismul aortic

**Anevrismul** este o dilatare localizată, permanentă, a peretelui aortic. Cea mai frecventă localizare este **aorta abdominală infrarenală**, mai ales la bărbații vârstnici fumători. Cauzele și factorii de risc sunt ateroscleroza, hipertensiunea, fumatul, vârsta și, pentru aorta toracică, bolile țesutului conjunctiv (de exemplu sindromul Marfan) și valva aortică bicuspidă.

- De regulă este **asimptomatic** și se descoperă incidental sau prin screening ecografic.
- Riscul de ruptură crește cu diametrul anevrismului, motiv pentru care urmărirea se face prin imagistică.
- **Ruptura** dă durere abdominală sau lombară bruscă, hipotensiune și o masă pulsatilă, deci o urgență chirurgicală.
- Tratamentul include controlul factorilor de risc, supraveghere și, la indicație, reparație chirurgicală sau endovasculară.

## Disecția de aortă

În disecție, o ruptură a intimei permite sângelui să pătrundă în peretele aortic și să creeze un **fals lumen**. Factorul de risc cel mai important este **hipertensiunea arterială**; mai contribuie bolile țesutului conjunctiv, valva bicuspidă, sarcina și traumatismele.

### Clasificare Stanford

| Tip | Localizare | Abordare |
|---|---|---|
| A | Implică aorta ascendentă | Chirurgie de urgență |
| B | Aorta descendentă, fără ascendentă | De regulă tratament medical, intervenție în complicații |

### Tablou clinic

- Durere toracică **brusc instalată**, foarte intensă, descrisă ca „sfâșiere”, cu iradiere interscapulară sau spre abdomen.
- Diferență de tensiune arterială între brațe sau deficit de puls.
- Complicații ale tipului A: **insuficiență aortică acută**, **tamponadă** prin hemopericard, ischemie miocardică (prin ostium coronarian), accident vascular cerebral.
- Complicații de ocluzie a ramurilor: ischemie viscerală, renală sau de membre.

### Diagnostic

- ECG pentru a exclude infarctul; radiografia poate arăta lărgirea mediastinului.
- **Angiografia CT aortică** este examenul de elecție la pacientul stabil; ecocardiografia transesofagiană este utilă la cel instabil.

### Tratament inițial

- Analgezie eficientă.
- Scăderea frecvenței cardiace și a tensiunii arteriale cu **beta-blocant intravenos**, ca să scadă forța de forfecare asupra peretelui aortic.
- Se evită **trombolizarea și anticoagularea**, care pot fi fatale.

## De reținut pentru examen

- Durere în sfâșiere, TA diferită între brațe: gândește-te la disecție înainte de a trata ca infarct.
- Tipul A se operează de urgență; tipul B, necomplicat, se tratează medical.
- Nu se administrează trombolitice sau anticoagulante dacă suspectezi disecție.
- Ruptura de anevrism abdominal: durere, hipotensiune, masă pulsatilă.
- Majoritatea anevrismelor sunt asimptomatice; screeningul se face prin ecografie.
`,
    references: [
      "Harrison’s Principles of Internal Medicine – Diseases of the Aorta",
      "Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli vasculare",
    ],
  },
  {
    id: 'car-t7',
    title: "Dislipidemiile și prevenția cardiovasculară",
    topic: "Prevenție cardiovasculară",
    readMinutes: 3,
    content: `## Lipidele și riscul cardiovascular

Colesterolul este transportat în sânge de lipoproteine. **LDL-colesterolul** este principalul factor aterogen și ținta terapeutică de bază. **HDL-colesterolul** are rol protector. **Trigliceridele** crescute contribuie la risc și, când sunt foarte mari, expun la **pancreatită acută**.

## Cauze

- **Primare (genetice):** cea mai cunoscută este **hipercolesterolemia familială**, cu defect al receptorului LDL și transmitere autosomal dominantă. Se recunoaște prin LDL foarte crescut, xantoame tendinoase, arc corneean și boală coronariană precoce în familie.
- **Secundare:** hipotiroidism, sindrom nefrotic, diabet zaharat necontrolat, obezitate, consum de alcool (în special pentru trigliceride), boli hepatice colestatice, unele medicamente.

Evaluarea unui pacient cu dislipidemie include întotdeauna căutarea cauzelor secundare, deoarece tratarea acestora poate normaliza profilul lipidic fără medicație suplimentară.

## Tratament

### Stil de viață

- Alimentație săracă în grăsimi saturate și zahăr, bogată în legume, fructe și fibre.
- Activitate fizică regulată și scădere ponderală.
- **Renunțarea la fumat** și moderarea alcoolului.

### Medicamente

| Clasă | Mecanism | Observații |
|---|---|---|
| Statine | Inhibă HMG-CoA reductaza | Prima alegere pentru scăderea LDL; efecte adverse: mialgii, rar rabdomioliză, creșterea transaminazelor |
| Ezetimib | Scade absorbția intestinală a colesterolului | Asociere la statină |
| Fibrați | Scad în principal trigliceridele | Utili în hipertrigliceridemie |
| Rășini care leagă acizii biliari | Cresc excreția biliară de colesterol | Pot crește trigliceridele |

## Prevenția cardiovasculară

- **Prevenția primară:** la persoane fără boală cardiovasculară, prin controlul factorilor de risc (fumat, hipertensiune, dislipidemie, diabet, obezitate, sedentarism) și estimarea riscului global.
- **Prevenția secundară:** la cei cu boală stabilită (de exemplu după infarct): statină, antiagregant, control al tensiunii arteriale, reabilitare cardiacă, renunțare la fumat.
- Factorii de risc **nemodificabili** sunt vârsta, sexul masculin și istoricul familial de boală cardiovasculară precoce.
- Suplimentele cu vitamine antioxidante nu reduc evenimentele cardiovasculare.

## De reținut pentru examen

- LDL este ținta principală; statinele sunt prima linie.
- Xantoame tendinoase plus arc corneean plus boală coronariană precoce: hipercolesterolemie familială.
- Trigliceride foarte mari: risc de pancreatită.
- Înainte de a eticheta dislipidemia drept primară, exclude hipotiroidismul, sindromul nefrotic și diabetul.
- După infarct se aplică prevenția secundară: statină plus antiagregant plus modificarea stilului de viață.
`,
    references: [
      "Harrison’s Principles of Internal Medicine – Disorders of Lipoprotein Metabolism",
      "Katzung – Basic & Clinical Pharmacology – Agenți hipolipemianți",
    ],
  },
  {
    id: 'car-t8',
    title: "Sincopa: cauze și abordare",
    topic: "Simptome cardiovasculare",
    readMinutes: 3,
    content: `## Definiție

**Sincopa** este pierderea tranzitorie a conștienței prin **hipoperfuzie cerebrală globală**, cu debut rapid, durată scurtă și **recuperare spontană completă**. Se deosebește de criza epileptică (postcriză prelungită, mișcări tonico-clonice prelungite) și de alte pierderi de conștiență fără hipoperfuzie.

## Clasificare etiologică

| Grup | Mecanism | Exemple |
|---|---|---|
| Reflexă (neuro-mediată) | Reflex vagal cu vasodilatație și bradicardie | Vasovagală, situațională (micțiune, tuse, defecație), hipersensibilitatea sinusului carotidian |
| Hipotensiune ortostatică | Scăderea TA la ridicare | Depleție volemică, medicamente (diuretice, vasodilatatoare), neuropatie autonomă |
| Cardiacă aritmică | Debit cardiac scăzut prin ritm | Bloc AV de grad înalt, disfuncție sinusală, tahicardie ventriculară |
| Cardiacă structurală | Obstrucție la ejecție | Stenoză aortică, cardiomiopatie hipertrofică obstructivă, embolie pulmonară masivă, mixom atrial |

**Sincopa reflexă** este cea mai frecventă și are, în general, prognostic bun. **Sincopa cardiacă** este mai rară, dar asociată cu risc mai mare de deces.

## Semne care orientează

### Spre sincopă reflexă

- Declanșare prin ortostatism prelungit, căldură, durere, emoție, vederea sângelui.
- Prodrom: greață, transpirații, paloare, vedere încețoșată.
- Recuperare rapidă.

### Spre sincopă cardiacă (semne de alarmă)

- Debut în timpul **efortului** sau în decubit.
- Palpitații înainte de episod, sau lipsa oricărui prodrom.
- Cardiopatie cunoscută, istoric familial de moarte subită, suflu sugestiv (de exemplu stenoză aortică).

## Evaluare inițială

1. Anamneză detaliată: context, prodrom, durată, martori, medicație.
2. Examen clinic, cu **tensiune arterială în clino- și ortostatism**.
3. **ECG de repaus** la toți pacienții.
4. În funcție de suspiciune: ecocardiografie, monitorizare ritm, test de efort, teste de laborator.

## Management

- Sincopa reflexă: explicarea mecanismului, evitarea factorilor declanșatori, hidratare, manevre de contrapresiune.
- Hipotensiune ortostatică: revizuirea medicației, hidratare, ridicare treptată.
- Cauzele cardiace: tratament specific (stimulator cardiac pentru bradiaritmii, tratamentul aritmiei, rezolvarea stenozei aortice).

## De reținut pentru examen

- Sincopa înseamnă hipoperfuzie cerebrală globală cu recuperare completă și rapidă.
- Cea mai frecventă cauză: reflexă (vasovagală).
- Sincopa la efort sau fără prodrom: gândește-te la cauză cardiacă.
- ECG-ul și măsurarea TA în ortostatism sunt obligatorii în evaluare.
- Stenoza aortică și cardiomiopatia hipertrofică pot da sincopă de efort.
`,
    references: [
      "Harrison’s Principles of Internal Medicine – Syncope",
      "Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie",
    ],
  },
  {
    id: 'car-t9',
    title: "Edemul pulmonar acut cardiogen și șocul cardiogen",
    topic: "Urgențe cardiovasculare",
    readMinutes: 3,
    content: `## Edemul pulmonar acut cardiogen

Apare când presiunea în capilarele pulmonare crește brusc, iar lichidul trece în alveole. Cauzele și factorii precipitanți frecvenți sunt:

- infarctul miocardic acut;
- criza hipertensivă;
- aritmii rapide (de exemplu fibrilația atrială cu alură ventriculară rapidă);
- regurgitarea mitrală sau aortică acută;
- decompensarea unei insuficiențe cardiace cronice (oprirea tratamentului, exces de sare și lichide).

### Tablou clinic

- Dispnee severă, ortopnee, anxietate, transpirații.
- Tuse cu **spută spumoasă, rozată**.
- Raluri crepitante care urcă de la baze spre vârfuri, uneori și wheezing.
- Tahicardie, saturație scăzută, galop.

### Management inițial

- Poziție **șezândă sau semișezândă**, cu membrele inferioare atârnate.
- **Oxigen**, iar în hipoxemie persistentă ventilație neinvazivă.
- **Diuretic de ansă intravenos**.
- Nitrați, atunci când tensiunea arterială o permite, în special în criza hipertensivă.
- Tratamentul cauzei: revascularizare în infarct, controlul ritmului, tratament al cauzei valvulare.
- Se evită perfuziile rapide de fluide și beta-blocantele în bolus.

## Șocul cardiogen

**Șocul cardiogen** este un sindrom de hipoperfuzie tisulară prin scăderea debitului cardiac, în pofida unor presiuni de umplere crescute. Cea mai frecventă cauză este **infarctul miocardic extins al ventriculului stâng**. Alte cauze: complicații mecanice ale infarctului (ruptură de mușchi papilar, ruptură de sept interventricular, ruptură de perete liber), miocardite fulminante, valvulopatii acute, aritmii severe.

### Semne

- Hipotensiune, tahicardie, alterarea stării de conștiență.
- Extremități reci și umede, oligurie.
- Jugulare turgescente și raluri de stază pulmonară.
- Acidoză lactică în laborator.

### Diferențierea de alte forme de șoc

| Șoc | Jugulare | Tegumente | Mecanism |
|---|---|---|---|
| Cardiogen | Turgescente | Reci | Pompă insuficientă |
| Hipovolemic (hemoragic) | Colabate | Reci | Volum scăzut |
| Septic (distributiv) | Variabile | Adesea calde la început | Vasodilatație |
| Obstructiv (embolie pulmonară, tamponadă) | Turgescente | Reci | Obstacol la umplere sau ejecție |

### Tratament

- **Revascularizarea precoce** a arterei responsabile, în infarct.
- Suport inotrop sau vasopresor, după nevoie, și suport mecanic în centre specializate.
- Corectarea hipoxemiei și a tulburărilor de ritm.
- Evitarea fluidelor în exces, care agravează edemul pulmonar.

## De reținut pentru examen

- Spută spumoasă, rozată plus raluri crepitante: edem pulmonar acut.
- Prima măsură: poziție șezândă, oxigen, diuretic de ansă intravenos.
- Șocul cardiogen: jugulare turgescente, stază pulmonară, extremități reci.
- Infarctul extins este cauza cea mai frecventă; un suflu nou după infarct sugerează complicație mecanică.
- Revascularizarea precoce schimbă prognosticul în șocul cardiogen postinfarct.
`,
    references: [
      "Harrison’s Principles of Internal Medicine – Cardiogenic Shock and Pulmonary Edema",
      "Kumar & Clark – Medicină clinică, ed. 10 – cap. Cardiologie",
    ],
  },
]
