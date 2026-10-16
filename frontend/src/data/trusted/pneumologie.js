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
]
