// Pneumologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'pne-t1',
    title: 'Astmul bronșic vs BPOC',
    topic: 'Bolile obstructive ale căilor aeriene',
    readMinutes: 3,
    content: `## Două boli obstructive, două mecanisme

**Astmul bronșic** este o boală inflamatorie cronică a căilor aeriene, cu **hiperreactivitate bronșică** și **obstrucție variabilă, reversibilă** spontan sau sub tratament. Inflamația este predominant **eozinofilică**, adesea pe fond atopic.

**BPOC** este o boală cu **obstrucție persistentă, incomplet reversibilă**, progresivă, determinată de un răspuns inflamator anormal (predominant **neutrofilic**) la particule și gaze nocive, în principal **fumul de țigară**. Include bronșita cronică și emfizemul.

## Comparație

| Caracteristică | Astm | BPOC |
|---|---|---|
| Debut | adesea în copilărie sau la adultul tânăr | de regulă după vârsta mijlocie |
| Factor principal | atopie, alergeni, factori genetici | **fumatul**; deficit de alfa-1 antitripsină |
| Simptome | episodice, variabile, nocturne | progresive, persistente, tuse productivă |
| Reversibilitate | **marcată** | redusă, incompletă |
| Inflamație | eozinofile, mastocite, limfocite Th2 | neutrofile, macrofage, limfocite CD8 |
| DLCO | normală | **scăzută** în emfizem |
| Răspuns la corticosteroizi | bun | limitat |

## Diagnostic

- **Spirometria** este investigația-cheie în ambele boli: raportul **VEMS/CVF scăzut** arată obstrucția.
- În astm, obstrucția se ameliorează semnificativ după bronhodilatator, iar **debitul expirator de vârf** are variabilitate diurnă crescută; **FeNO** crescut susține inflamația eozinofilică.
- În BPOC, diagnosticul cere obstrucție **persistentă după bronhodilatator**. Radiografia poate arăta hiperinflație, dar poate fi și normală.
- Testarea alfa-1 antitripsinei se face la emfizemul cu debut precoce sau fără expunere la fum.

## Principii de tratament

**Astm** – abordare în trepte:
- **corticosteroizii inhalatori** sunt baza tratamentului de fond;
- bronhodilatatoarele (beta2-agoniști) controlează simptomele; beta2-agoniștii cu durată lungă nu se folosesc fără corticosteroid inhalator;
- se adaugă la nevoie antileucotriene, terapii biologice în astmul sever;
- se evită beta-blocantele neselective.

**BPOC**:
- **oprirea fumatului** – cea mai importantă intervenție;
- bronhodilatatoare cu durată lungă (anticolinergice, beta2-agoniști);
- corticosteroizi inhalatori la pacienții selecționați, cu exacerbări frecvente;
- reabilitare pulmonară, vaccinare antigripală și antipneumococică;
- **oxigenoterapie de lungă durată** la hipoxemia cronică severă.

## Exacerbările

- **Criza severă de astm**: semnele de pericol vital sunt toracele „mut”, cianoza, epuizarea, confuzia și o **PaCO2 normală sau crescută**. Se tratează cu oxigen, beta2-agoniști nebulizați, corticosteroizi sistemici.
- **Exacerbarea BPOC**: bronhodilatatoare, corticosteroizi sistemici pe termen scurt, antibiotic dacă sputa este purulentă, **oxigen controlat** și **ventilație noninvazivă** în acidoza respiratorie hipercapnică.

## De reținut pentru examen

- Astm = obstrucție **variabilă, reversibilă**; BPOC = obstrucție **persistentă**.
- DLCO scăzută orientează spre emfizem, nu spre astm.
- În criza de astm, o PaCO2 „normală” este semn de epuizare, nu de liniștire.
- Doar oprirea fumatului și oxigenoterapia de lungă durată cresc supraviețuirea în BPOC.
- La pacientul cu BPOC hipercapnic, oxigenul se administrează controlat.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (astm, BPOC)',
      'Sinopsis de medicină, ed. 5 – Pneumologie',
      'Harrison’s Principles of Internal Medicine – Asthma; Chronic Obstructive Pulmonary Disease',
    ],
  },
  {
    id: 'pne-t2',
    title: 'Pneumoniile comunitare',
    topic: 'Infecțiile tractului respirator inferior',
    readMinutes: 3,
    content: `## Definiție și clasificare

**Pneumonia** este inflamația acută a parenchimului pulmonar, de regulă infecțioasă, cu opacitate nouă pe radiografie. Clasificarea practică se face după locul dobândirii:
- **comunitară** – apărută în afara spitalului;
- **nosocomială** – apărută după internare (agenți gram-negativi, S. aureus, frecvent multirezistenți);
- **de aspirație** – la pacienți cu tulburări de deglutiție sau de conștiență;
- la **imunodeprimați** – agenți oportuniști (de exemplu, Pneumocystis jirovecii).

## Agenți etiologici

| Agent | Indicii clinice |
|---|---|
| **Streptococcus pneumoniae** | cel mai frecvent; debut brusc, febră, frison, spută ruginie, herpes labial |
| Haemophilus influenzae | frecvent la pacienții cu BPOC |
| **Mycoplasma pneumoniae** | tineri, epidemii, simptome extrapulmonare, aglutinine la rece, anemie hemolitică |
| **Legionella pneumophila** | apă contaminată, climatizare; confuzie, diaree, **hiponatremie**, citoliză |
| Chlamydophila psittaci | contact cu păsări |
| **Staphylococcus aureus** | după **gripă**; cavități, abcese |
| Klebsiella pneumoniae | alcoolici, vârstnici; lob superior, spută „jeleu de coacăze” |

Mycoplasma, Legionella și Chlamydophila sunt agenți **atipici**: nu au perete clasic sau sunt intracelulari, deci **nu răspund la beta-lactamine**.

## Tablou clinic și examen obiectiv

- febră, tuse, spută, dispnee, durere pleuritică; la vârstnic poate domina **confuzia**;
- **sindrom de condensare**: matitate, vibrații vocale accentuate, raluri crepitante, suflu tubar.

## Investigații

- **radiografia toracică** confirmă diagnosticul;
- hemoleucogramă, uree, electroliți, probe hepatice, proteina C reactivă;
- hemoculturi și examen de spută la formele moderate și severe;
- **antigen urinar** pentru pneumococ și Legionella;
- gazometrie la pacienții cu saturație scăzută.

## Evaluarea severității

Scorul **CURB-65** însumează: **C**onfuzie, **U**ree crescută, frecvență **R**espiratorie crescută, tensiune arterială scăzută (**B**lood pressure) și vârsta de 65 de ani sau peste. Scorul crescut orientează spre spitalizare sau terapie intensivă; judecata clinică rămâne esențială.

## Principii de tratament

- antibioterapie **empirică** inițiată rapid, conform ghidurilor locale și severității;
- forme ușoare: aminopenicilină orală (alternativ macrolid sau tetraciclină);
- forme moderate–severe: beta-lactamină asociată cu macrolid, pentru acoperirea agenților atipici;
- oxigen, hidratare, analgezie, mobilizare precoce;
- reevaluare clinică și radiografie de control la câteva săptămâni la fumători și vârstnici, pentru excluderea unei neoplazii subiacente.

## Complicații

- **revărsat parapneumonic** și **empiem** (necesită drenaj);
- abces pulmonar (aspirație, S. aureus, Klebsiella);
- insuficiență respiratorie, sepsis, șoc septic.

## De reținut pentru examen

- Pneumococul este cel mai frecvent agent al pneumoniei comunitare.
- Hiponatremie + diaree + confuzie + climatizare = Legionella.
- Pneumonie cavitară după gripă = Staphylococcus aureus.
- Atipicii nu răspund la beta-lactamine: se folosesc macrolide, tetracicline sau fluorochinolone.
- Aspirația afectează mai ales lobul inferior drept.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (pneumonii)',
      'Sinopsis de medicină, ed. 5 – Pneumologie',
    ],
  },
  {
    id: 'pne-t3',
    title: 'Tuberculoza pulmonară',
    topic: 'Infecțiile tractului respirator inferior',
    readMinutes: 3,
    content: `## Agent și transmitere

**Mycobacterium tuberculosis** este un bacil **acido-alcoolo-rezistent (BAAR)**, colorat **Ziehl-Neelsen**, cu creștere foarte lentă pe medii speciale (Löwenstein-Jensen, medii lichide). Se transmite **aerogen**, prin picături eliminate de bolnavii cu leziuni pulmonare deschise (bacilifere).

Factori de risc: infecția HIV, malnutriția, alcoolismul, diabetul, corticoterapia și terapiile anti-TNF, insuficiența renală, condițiile sociale precare, contactul cu un bolnav bacilifer.

## Patogenie

- **Primoinfecția**: complexul primar (afect primar + limfangită + adenopatie hilară). La majoritatea, imunitatea celulară limitează infecția; bacilii rămân latenți.
- Leziunea caracteristică este **granulomul cu necroză de cazeificare**.
- **Tuberculoza secundară** (reactivare) apare la scăderea imunității și interesează tipic **segmentele apicale și posterioare** ale lobilor superiori, cu **cavitație**.
- **Diseminarea hematogenă** produce tuberculoza miliară și localizări extrapulmonare.

## Tablou clinic

- tuse persistentă de câteva săptămâni, spută, **hemoptizie**;
- **febră vesperală, transpirații nocturne, scădere ponderală**, astenie;
- uneori revărsat pleural (exsudat bogat în limfocite).

## Diagnostic

| Investigație | Rol |
|---|---|
| Radiografia toracică | infiltrate apicale, cavități, adenopatii, aspect miliar |
| Microscopie spută (BAAR) | rapidă; identifică bolnavii contagioși |
| **Cultura** | standardul de aur; permite **antibiograma** |
| Teste moleculare (amplificare genică) | rapide; detectează și rezistența la rifampicină |
| Test cutanat tuberculinic, IGRA | infecție latentă; nu diferențiază latent de activ |
| Biopsie cu histopatologie | granuloame cazeoase în formele extrapulmonare |

## Tratament – principii

- **Asociere de antituberculoase**, niciodată monoterapie (risc de rezistență).
- **Faza inițială**: izoniazidă, rifampicină, pirazinamidă și etambutol.
- **Faza de continuare**: izoniazidă și rifampicină.
- Administrare supravegheată direct, pentru aderență.
- Formele **multidrog-rezistente** (rezistență cel puțin la izoniazidă și rifampicină) necesită scheme speciale, în centre specializate.

## Efecte adverse tipice

| Medicament | Efect advers |
|---|---|
| **Izoniazidă** | hepatotoxicitate, **neuropatie periferică** (prevenită cu piridoxină) |
| **Rifampicină** | hepatotoxicitate, **colorare roșu-portocalie** a urinii și lacrimilor, **inductor enzimatic** (scade eficiența contraceptivelor orale, anticoagulantelor) |
| **Pirazinamidă** | hepatotoxicitate, **hiperuricemie**, gută |
| **Etambutol** | **nevrită optică** (scăderea acuității vizuale, discromatopsie) |

## Prevenție

- depistarea și tratarea precoce a cazurilor contagioase, izolarea respiratorie;
- ancheta epidemiologică a contacților;
- tratamentul infecției latente la persoanele cu risc de reactivare;
- vaccinarea BCG protejează mai ales față de formele severe ale copilului.

## De reținut pentru examen

- Tuse de peste câteva săptămâni + hemoptizie + transpirații nocturne + scădere ponderală = suspiciune de TB.
- Reactivarea afectează vârfurile pulmonare și formează cavități.
- Cultura este standardul de aur și oferă antibiograma.
- Rifampicina este inductor enzimatic; izoniazida dă neuropatie; etambutolul dă nevrită optică.
- Tuberculoza nu se tratează niciodată în monoterapie.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (tuberculoza)',
      'Sinopsis de medicină, ed. 5 – Pneumologie',
      'Harrison’s Principles of Internal Medicine – Tuberculosis',
    ],
  },
  {
    id: 'pne-t4',
    title: 'Cancerul bronhopulmonar',
    topic: 'Oncologie toracică',
    readMinutes: 3,
    content: `## Epidemiologie și factori de risc

Cancerul bronhopulmonar este una dintre principalele cauze de deces prin cancer. **Fumatul** (activ și pasiv) este factorul de risc dominant. Alți factori: **azbestul** (sinergic cu fumatul), radonul, expunerile profesionale (arsen, crom, nichel), fibroza pulmonară.

## Clasificare histologică

| Tip | Particularități |
|---|---|
| **Carcinom cu celule mici** | origine neuroendocrină, central; creștere rapidă, **metastaze precoce**; sensibil inițial la chimioterapie |
| **Carcinom scuamos** | central, legat de fumat; poate cavita; **hipercalcemie** prin PTHrP |
| **Adenocarcinom** | de regulă **periferic**; apare și la nefumători; poate avea mutații țintibile (de exemplu, EGFR, ALK) |
| Carcinom cu celule mari | nediferențiat, prognostic rezervat |

Distincția practică: **cu celule mici** vs **non-microcelular**, deoarece abordarea terapeutică diferă.

## Manifestări clinice

**Locale**: tuse nouă sau modificată, **hemoptizie**, dispnee, durere toracică, pneumonii recurente în același teritoriu, wheezing localizat.

**Prin extensie locoregională**:
- **disfonie** prin afectarea nervului laringeu recurent stâng;
- **sindrom de venă cavă superioară**: edem în pelerină, turgescență jugulară, circulație colaterală toracică;
- **tumora Pancoast** (apex): **sindrom Horner** (ptoză, mioză, anhidroză) și durere în teritoriul plexului brahial;
- revărsat pleural, paralizie diafragmatică prin afectarea nervului frenic.

**Metastatice**: cerebrale, osoase, hepatice, suprarenaliene.

**Sindroame paraneoplazice**:
- **SIADH** și **sindrom Cushing ectopic** – carcinom cu celule mici;
- **sindrom miastenic Lambert-Eaton** – carcinom cu celule mici;
- **hipercalcemie** prin PTHrP – carcinom scuamos;
- hipocratism digital, osteoartropatie hipertrofică pneumică;
- manifestări neurologice și cutanate diverse.

## Investigații

- **radiografia toracică** – primul pas; o radiografie normală nu exclude tumora;
- **CT toracic cu contrast** (incluzând ficatul și suprarenalele) pentru stadializare;
- **diagnostic histologic** obligatoriu: bronhoscopie cu biopsie, biopsie transtoracică ghidată CT, EBUS pentru ganglioni mediastinali, citologie din lichid pleural;
- **PET-CT** pentru stadializarea candidaților la tratament curativ;
- evaluarea funcției respiratorii înainte de chirurgie;
- teste moleculare la adenocarcinom.

Stadializarea se face după sistemul **TNM**.

## Principii de tratament

- **Non-microcelular, stadii incipiente**: rezecție chirurgicală cu intenție curativă; radioterapie stereotactică la pacienții neoperabili.
- **Stadii local avansate**: chimio-radioterapie.
- **Boală metastatică**: terapii țintite (la mutațiile identificate), imunoterapie, chimioterapie.
- **Carcinomul cu celule mici**: chimioterapie (± radioterapie); chirurgia are rol foarte limitat.
- Tratament paliativ: radioterapie pentru hemoptizie sau metastaze osoase, stent pentru obstrucția de venă cavă superioară.

## De reținut pentru examen

- Hemoptizia la un fumător vârstnic impune excluderea cancerului bronhopulmonar.
- Carcinom cu celule mici = SIADH, Cushing ectopic, Lambert-Eaton, metastaze precoce.
- Carcinom scuamos = central + hipercalcemie.
- Adenocarcinom = periferic, inclusiv la nefumători.
- Tumora Pancoast = sindrom Horner + durere brahială.
- Disfonia indică afectarea nervului laringeu recurent.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (tumorile pulmonare)',
      'Sinopsis de medicină, ed. 5 – Pneumologie',
      'Harrison’s Principles of Internal Medicine – Neoplasms of the Lung',
    ],
  },
  {
    id: 'pne-t5',
    title: 'Bronșiectaziile și fibroza chistică',
    topic: 'Boli bronșice supurative',
    readMinutes: 3,
    content: `## Bronșiectaziile

**Bronșiectaziile** sunt dilatații anormale, permanente și ireversibile ale bronhiilor, asociate cu inflamație și infecție cronică. Mecanismul de bază este un cerc vicios: clearance mucociliar alterat, retenție de secreții, infecție, inflamație și distrucția peretelui bronșic, care duce la dilatare.

**Cauze frecvente**
- infecții severe în copilărie (pneumonii, tuse convulsivă, rujeolă) sau tuberculoza;
- **fibroza chistică**;
- obstrucție bronșică localizată (corp străin, tumoră, adenopatie);
- imunodeficiențe (în special deficite de anticorpi) și diskinezia ciliară primară;
- aspergiloza bronhopulmonară alergică.

**Clinic**
- tuse cronică cu **expectorație mucopurulentă abundentă**, uneori în straturi;
- **hemoptizii**, infecții recurente în același teritoriu;
- raluri bronșice persistente, hipocratism digital în formele avansate.

**Diagnostic**
- radiografia poate fi normală sau arată „în șine de tramvai” și imagini chistice;
- **CT toracic de înaltă rezoluție** este investigația de elecție: bronhii dilatate mai largi decât artera alăturată („inel cu pecete”), bronhii vizibile aproape de pleură;
- spirometria arată frecvent obstrucție; examenul sputei identifică germenii (Haemophilus, Pseudomonas).

**Tratament**: kinetoterapie respiratorie și drenaj postural, antibiotice în exacerbări, bronhodilatatoare când există obstrucție, vaccinări, tratamentul cauzei; chirurgia doar în boală localizată sau hemoptizii severe.

## Fibroza chistică (mucoviscidoza)

Este o boală **autosomal recesivă** produsă de mutații ale genei **CFTR**, care codifică un canal de clor. Secrețiile devin vâscoase în plămân, pancreas, intestin și căi genitale.

| Aparat | Manifestare |
|---|---|
| Respirator | infecții cronice, bronșiectazii, colonizare cu **Pseudomonas aeruginosa** și Staphylococcus aureus |
| Digestiv | **insuficiență pancreatică exocrină**, steatoree, ileus meconial la nou-născut |
| Genital | infertilitate masculină prin absența bilaterală a canalelor deferente |
| Altele | polipi nazali, sinuzită, concentrație crescută de clor în sudoare |

**Diagnostic**: **testul sudorii** (clorură crescută), completat de testare genetică; screening neonatal în multe țări.

**Tratament**: abordare multidisciplinară (fizioterapie respiratorie, antibiotice, enzime pancreatice, suport nutrițional); există și terapii care vizează proteina CFTR. Transplantul pulmonar se discută în boala terminală.

## De reținut pentru examen

- Bronșiectaziile se confirmă prin **CT de înaltă rezoluție**, nu prin radiografia simplă.
- Spută purulentă abundentă plus hemoptizii plus infecții recurente: gândește-te la bronșiectazii.
- Fibroza chistică: **CFTR, autosomal recesiv, test al sudorii pozitiv**.
- Ileus meconial și steatoree sunt indicii digestive clasice.
- Pseudomonas aeruginosa este colonizantul tipic al bolii avansate.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (bronșiectazii, fibroza chistică)',
      'Harrison’s Principles of Internal Medicine – Bronchiectasis; Cystic Fibrosis',
    ],
  },
  {
    id: 'pne-t6',
    title: 'Bolile pulmonare interstițiale și fibroza pulmonară',
    topic: 'Boli pulmonare interstițiale',
    readMinutes: 3,
    content: `## Ce sunt bolile pulmonare interstițiale

Bolile pulmonare interstițiale (BPI) sunt un grup heterogen de afecțiuni care implică inflamația și/sau fibroza interstițiului alveolar, adică peretele alveolar și țesutul din jurul vaselor și bronhiilor. Ele produc un deficit **restrictiv** și o alterare a schimbului gazos.

## Cauze (grupări utile)

- **idiopatice**: fibroza pulmonară idiopatică (FPI), pneumonia interstițială nespecifică, pneumonia organizată criptogenică;
- **asociate colagenozelor**: scleroză sistemică, poliartrită reumatoidă, lupus;
- **expuneri**: pneumoconioze (azbest, siliciu), pneumonita de hipersensibilitate (antigene organice);
- **medicamente**: bleomicină, amiodaronă, metotrexat, nitrofurantoin, radioterapia;
- **granulomatoase**: sarcoidoza.

## Fibroza pulmonară idiopatică

- boală a **adultului vârstnic**, fără cauză identificabilă, cu evoluție progresivă;
- simptome: **dispnee de efort** cu agravare lentă și **tuse uscată**;
- examen: **raluri crepitante bazale „în velcro”**, frecvent **hipocratism digital**;
- HRCT: model **UIP**, adică reticulație subpleurală bazală, bronșiectazii de tracțiune și **fagure de miere**;
- spirometrie: tipar **restrictiv**, cu scăderea DLCO; hipoxemie la efort.

## Diagnostic în BPI

| Element | Rol |
|---|---|
| Anamneza | expuneri profesionale și de mediu, medicamente, boli de țesut conjunctiv |
| HRCT | investigația-cheie; modelul poate fi diagnostic |
| Funcție pulmonară | restricție, DLCO scăzută |
| Lavaj bronhoalveolar | limfocitoză în hipersensibilitate și sarcoidoză |
| Biopsie | când tabloul este neconcludent |

## Tratament

- **FPI**: medicamente antifibrotice care încetinesc declinul funcțional, oxigenoterapie la hipoxemici, reabilitare respiratorie, vaccinări, transplant la pacienți selectați. Corticoizii nu sunt tratamentul standard al FPI.
- **Pneumonita de hipersensibilitate**: evitarea antigenului este esențială; corticoizi în formele severe.
- **BPI din colagenoze sau induse medicamentos**: tratamentul bolii de bază, oprirea medicamentului vinovat, imunosupresie selectivă.
- Prognosticul FPI este rezervat; exacerbările acute pot fi grave.

- în practică, un pacient cu fibroză poate avea saturație normală în repaus și scădere marcată la efort, de aceea se testează și la efort.

> Un student trebuie să poată face diferența între un tipar restrictiv de cauză parenchimatoasă (BPI) și unul extrapulmonar (obezitate, cifoscolioză, boli neuromusculare).

## De reținut pentru examen

- Dispnee de efort plus tuse uscată plus **raluri velcro bazale** sugerează fibroză interstițială.
- **UIP = bazal, subpleural, fagure de miere**.
- FPI nu răspunde la corticoizi ca tratament de fond.
- Anamneza de expunere (păsări, mucegai, azbest) și lista de medicamente sunt obligatorii.
- Sarcoidoza este o BPI granulomatoasă; adenopatiile hilare bilaterale o orientează.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (boli pulmonare interstițiale)',
      'Harrison’s Principles of Internal Medicine – Interstitial Lung Diseases',
    ],
  },
  {
    id: 'pne-t7',
    title: 'Sindromul de apnee obstructivă în somn',
    topic: 'Tulburări respiratorii legate de somn',
    readMinutes: 3,
    content: `## Definiție și mecanism

Sindromul de **apnee obstructivă în somn (SAOS)** înseamnă episoade repetate de colaps parțial sau complet al căilor aeriene superioare în timpul somnului, cu **efort respirator prezent**, trezire din somn (micro-treziri) și scăderi ale saturației în oxigen. Somnul devine fragmentat, iar hipoxemia intermitentă activează sistemul simpatic.

În **apneea centrală** lipsește stimulul respirator, deci și efortul respirator; apare, de exemplu, în insuficiența cardiacă (respirație Cheyne-Stokes) sau după opioide.

## Factori de risc

- **obezitate**, în special centrală, cu circumferință cervicală mare;
- sexul masculin, vârsta, menopauza;
- anomalii craniofaciale (retrognație, hipertrofie amigdaliană);
- alcool și sedative seara, hipotiroidism, fumat.

## Tablou clinic

| Nocturn | Diurn |
|---|---|
| sforăit zgomotos, pauze respiratorii observate | **somnolență diurnă excesivă** |
| treziri cu senzație de sufocare | cefalee matinală |
| nicturie, transpirații | tulburări de concentrare și memorie |
| somn neodihnitor | iritabilitate, scăderea libidoului |

## Diagnostic

- suspiciune clinică, chestionare de somnolență (de exemplu scala Epworth) și examinarea căilor aeriene superioare;
- **poligrafie respiratorie sau polisomnografie nocturnă**: se numără apneile și hipopneele pe oră de somn, de unde se stabilește severitatea;
- în hipoventilația asociată obezității se urmărește și gazometria diurnă.

## Consecințe

- **hipertensiune arterială**, uneori greu de controlat;
- aritmii (inclusiv fibrilație atrială), boală coronariană, accident vascular cerebral;
- **hipertensiune pulmonară** și cord pulmonar în formele severe;
- accidente rutiere și de muncă prin somnolență; rezistență la insulină.
- la copil, cauza frecventă este hipertrofia adenoamigdaliană, iar tratamentul chirurgical este adesea eficient.
- somnolența diurnă este un motiv important de evaluare la șoferii profesioniști, deoarece crește riscul de accidente.

## Tratament

- măsuri generale: **scădere ponderală**, evitarea alcoolului și sedativelor seara, somn pe lateral, tratamentul obstrucției nazale;
- **CPAP** (presiune pozitivă continuă pe căile aeriene) este tratamentul de elecție în formele moderate și severe; eficiența depinde de aderență;
- alternative: dispozitive de avansare mandibulară în forme ușoare, intervenții ORL sau chirurgie bariatrică selectate.

## De reținut pentru examen

- Obez, sforăit zgomotos, pauze martorizate și somnolență diurnă: suspectează SAOS.
- Diagnostic de certitudine: **poligrafie sau polisomnografie**.
- **CPAP** este tratamentul de bază; hipnoticele pot agrava apneea.
- SAOS este cauză tratabilă de hipertensiune rezistentă.
- Diferența obstructiv versus central: prezența sau absența efortului respirator.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (tulburări respiratorii ale somnului)',
      'Harrison’s Principles of Internal Medicine – Sleep Apnea',
    ],
  },
  {
    id: 'pne-t8',
    title: 'Insuficiența respiratorie și oxigenoterapia',
    topic: 'Insuficiența respiratorie',
    readMinutes: 4,
    content: `## Definiție și tipuri

**Insuficiența respiratorie** este incapacitatea aparatului respirator de a menține oxigenarea și/sau eliminarea CO2 la valori compatibile cu funcția normală a organismului. Se evaluează prin **gazometrie arterială** și se corelează cu tabloul clinic.

| Tip | Gazometrie | Mecanism principal | Exemple |
|---|---|---|---|
| **Tip 1** (hipoxemică) | PaO2 scăzută, PaCO2 normală sau scăzută | tulburare de schimb gazos | pneumonie, edem pulmonar, ARDS, embolie pulmonară |
| **Tip 2** (hipercapnică) | PaCO2 crescută, cu hipoxemie | hipoventilație alveolară | BPOC exacerbat, boli neuromusculare, supradoză de opioide, deformări toracice |

## Mecanisme de hipoxemie

- dezechilibru ventilație/perfuzie (cel mai frecvent);
- **șunt** dreapta-stânga (răspunde slab la oxigen);
- hipoventilație alveolară;
- tulburări de difuziune; scăderea presiunii oxigenului inspirat (altitudine).

## Acut versus cronic

- **Acută**: instalare rapidă, simptome evidente (dispnee, tahipnee, tiraj, cianoză, agitație sau confuzie, apoi somnolență), pH modificat dacă există hipercapnie.
- **Cronică**: instalare lentă, cu compensări (policitemie, **creșterea bicarbonatului** prin compensare renală, pH aproape normal), hipertensiune pulmonară și cord pulmonar.
- Decompensarea unei forme cronice (acută pe cronică) este frecventă în BPOC.

## Abordare în urgență

- evaluare ABC, pulsoximetrie și **gazometrie arterială**;
- tratamentul cauzei (bronhodilatatoare, antibiotice, drenaj, diuretice, antidoturi etc.);
- **oxigenoterapie**, apoi suport ventilator când este necesar: ventilație noninvazivă (utilă în hipercapnia din BPOC și în edemul pulmonar cardiogen) sau intubație și ventilație mecanică.

## Principii ale oxigenoterapiei

- scopul este corectarea hipoxemiei, nu normalizarea oricărei valori;
- se **titrează** după saturație și gazometrie;
- la pacientul cu risc de **hipercapnie** (BPOC, obezitate-hipoventilație) se folosește o țintă moderată de saturație, cu monitorizare, deoarece oxigenul în exces poate agrava retenția de CO2;
- la hipoxemia prin șunt, oxigenul singur ameliorează puțin;
- **oxigenoterapia de lungă durată** la domiciliu se indică în hipoxemia cronică severă, documentată în stare stabilă; **prelungește supraviețuirea** în BPOC.
- pericole: uscarea mucoaselor, toxicitate la concentrații mari prelungite, risc de incendiu.

## De reținut pentru examen

- Tip 1: hipoxemie cu CO2 normal sau scăzut; tip 2: **hipercapnie** prin hipoventilație.
- Cianoza centrală și confuzia semnalează hipoxemie severă.
- BPOC: oxigen **titrat**, nu la debit maxim, cu control gazometric.
- Oxigenoterapia cronică la domiciliu crește supraviețuirea în hipoxemia cronică din BPOC.
- Bicarbonatul crescut orientează către hipercapnie cronică compensată.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (insuficiența respiratorie)',
      'Harrison’s Principles of Internal Medicine – Respiratory Failure',
    ],
  },
  {
    id: 'pne-t9',
    title: 'Interpretarea spirometriei',
    topic: 'Explorarea funcțională respiratorie',
    readMinutes: 3,
    content: `## Ce măsoară spirometria

Spirometria înregistrează volumele și fluxurile mobilizate în respirația forțată. Parametrii-cheie sunt **CVF** (capacitatea vitală forțată, volumul total expirat forțat), **VEMS** (volumul expirator maxim în prima secundă) și **raportul VEMS/CVF**. Interpretarea pornește întotdeauna de la raport.

## Algoritm de interpretare

1. Verifică calitatea manevrei (efort maxim, curbe reproductibile).
2. **Raportul VEMS/CVF scăzut** înseamnă **obstrucție**.
3. Dacă raportul este normal, dar **CVF scăzută**, se suspectează **restricție**, confirmată prin măsurarea capacității pulmonare totale (pletismografie).
4. Dacă ambele sunt prezente, tiparul este **mixt**.
5. Se evaluează reversibilitatea după bronhodilatator și, la nevoie, **DLCO**.

## Cele trei tipare

| Tipar | VEMS/CVF | CVF | Capacitate pulmonară totală | Exemple |
|---|---|---|---|---|
| **Obstructiv** | scăzut | normală sau scăzută | normală sau crescută (hiperinflație) | astm, BPOC, bronșiectazii, fibroză chistică |
| **Restrictiv** | normal sau crescut | scăzută | scăzută | fibroză pulmonară, cifoscolioză, obezitate, boli neuromusculare |
| **Mixt** | scăzut | scăzută | variabilă | BPOC cu fibroză asociată, insuficiență cardiacă avansată |

## Reversibilitate

- o **îmbunătățire semnificativă** după bronhodilatator susține astmul;
- în **BPOC** obstrucția rămâne persistentă după bronhodilatator (incomplet reversibilă);
- un test unic fără reversibilitate nu exclude astmul, iar variabilitatea în timp ajută la diagnostic.

## DLCO (capacitate de difuziune)

- **scăzută** în emfizem, fibroză interstițială, boli vasculare pulmonare (embolie, hipertensiune pulmonară);
- **normală sau crescută** în astm; poate crește în hemoragie alveolară și poliglobulie.
- Un tipar obstructiv cu DLCO scăzută orientează spre emfizem.

## Limite

- spirometria nu diferențiază singură cauzele din același tipar;
- necesită cooperarea pacientului; este influențată de efortul depus;
- un tipar restrictiv la spirometrie poate fi doar aparent, dacă pacientul nu a expirat complet.
- valorile se compară cu cele prezise pentru vârstă, sex, înălțime și etnie, nu cu o valoare unică pentru toți pacienții.
- rezultatul se interpretează întotdeauna împreună cu tabloul clinic, radiografia și, când e cazul, gazometria.

## De reținut pentru examen

- Primul pas: **VEMS/CVF** (scăzut = obstrucție).
- Restricția necesită **confirmare prin capacitate pulmonară totală**.
- BPOC: obstrucție persistentă postbronhodilatator; astm: reversibilitate și variabilitate.
- **DLCO scăzută** în emfizem și fibroză, normală în astm.
- Obezitatea și bolile neuromusculare pot da restricție fără boală parenchimatoasă.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli respiratorii (explorarea funcțională)',
      'West’s Respiratory Physiology: The Essentials – Ventilation, Pulmonary Function Tests',
    ],
  },
]
