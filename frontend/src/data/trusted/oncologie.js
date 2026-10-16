// Oncologie medicală – rezumate verificate (echipa Steto)
export default [
  {
    id: 'onc-t1',
    title: 'Screeningul și markerii tumorali',
    topic: 'Prevenție și diagnostic',
    readMinutes: 3,
    content: `## Prevenția în oncologie

- **Prevenția primară** reduce expunerea la factorii de risc: renunțarea la fumat, vaccinarea anti-HPV și antihepatită B, alimentație echilibrată, activitate fizică, protecție solară.
- **Prevenția secundară** = **screeningul**: depistarea bolii într-o fază asimptomatică, când tratamentul este mai eficient.
- **Prevenția terțiară**: limitarea complicațiilor și a recidivei la bolnavul deja diagnosticat.

## Principiile unui screening justificat

- boala este o **problemă importantă de sănătate publică**;
- are o **fază preclinică** detectabilă;
- există un **test** sensibil, specific, sigur și **acceptabil** pentru populație;
- tratamentul precoce aduce un **beneficiu real** (scade mortalitatea);
- programul este sustenabil, cu acces la confirmarea diagnosticului.

Un test de screening **nu pune diagnosticul**: un rezultat pozitiv trebuie confirmat prin investigații și, în final, prin **examen histopatologic**.

## Screeningurile organizate recomandate

| Cancer | Test de screening | Observații |
|---|---|---|
| Col uterin | **test Babeș-Papanicolau** și/sau **test HPV** | detectează leziunile precanceroase, tratabile |
| Sân | **mamografie** | la femeile cu risc mediu, în intervalul de vârstă stabilit de program |
| Colorectal | **test imunochimic de sânge ocult în scaun**, **colonoscopie** | colonoscopia permite și rezecția polipilor |

Intervalele și vârstele exacte diferă între programe și ghiduri; la colocviu contează principiul și testul potrivit.

## Biasuri ale screeningului

- **lead-time bias**: diagnosticul mai precoce pare să prelungească supraviețuirea, fără ca pacientul să trăiască mai mult;
- **length bias**: screeningul depistează mai ușor tumorile cu evoluție lentă;
- **supradiagnosticul**: depistarea unor leziuni care nu ar fi devenit niciodată simptomatice.

## Markerii tumorali – utilizare corectă

Markerii sunt substanțe produse de tumoră sau de organism ca răspuns la tumoră. Au **sensibilitate și specificitate limitate**: pot crește în boli benigne (inflamații, ciroză, insuficiență renală) și pot fi normali în cancer.

| Marker | Asociere principală |
|---|---|
| **CEA** | cancer colorectal (urmărire) |
| **AFP** | hepatocarcinom, tumori germinale neseminomatoase |
| **beta-hCG** | tumori germinale, coriocarcinom |
| **CA 125** | cancer ovarian |
| **CA 19-9** | cancer pancreatic și biliar |
| **CA 15-3** | cancer mamar (urmărire) |
| **PSA** | cancer de prostată |

Indicațiile corecte: **monitorizarea răspunsului la tratament**, **detectarea recidivei**, uneori **prognosticul** și, în cazuri speciale (tumori germinale), stadializarea. În general, nu sunt teste de screening pentru populația generală și nu înlocuiesc biopsia.

## De reținut pentru examen

- Screeningul se adresează persoanelor **asimptomatice**; pacientul simptomatic se investighează diagnostic, nu „prin screening”.
- Diagnosticul de cancer este **histopatologic**.
- Un marker normal **nu exclude** cancerul, iar unul crescut **nu îl confirmă**.
- CEA este pentru **urmărirea** cancerului colorectal, nu pentru depistarea lui.
- Colonoscopia este și test de screening, și metodă de prevenție (polipectomie).`,
    references: ['DeVita, Hellman, and Rosenberg’s Cancer: Principles & Practice of Oncology – Screening și markeri tumorali', 'Harrison’s Principles of Internal Medicine – Prevenția și depistarea cancerului'],
  },
  {
    id: 'onc-t2',
    title: 'Stadializarea TNM și principiile tratamentului oncologic',
    topic: 'Principii de oncologie',
    readMinutes: 3,
    content: `## De ce stadializăm

Stadializarea descrie **extensia anatomică** a bolii. Ea stabilește **prognosticul**, orientează **decizia terapeutică** și permite comparabilitatea rezultatelor între centre.

## Sistemul TNM

- **T** – tumora primară: dimensiune și invazia structurilor vecine (Tx, T0, Tis, T1–T4);
- **N** – ganglionii limfatici **regionali** (N0 – neinvadați, N1–N3 – grade de afectare);
- **M** – metastazele la distanță (M0 / M1).

Criteriile pentru fiecare categorie sunt **specifice localizării** (sân, plămân, colon etc.). Combinațiile TNM se grupează în **stadii I–IV**; stadiul IV înseamnă, de regulă, boală metastatică.

| Prefix | Semnificație |
|---|---|
| **c**TNM | clinic: examen clinic, imagistică, endoscopie |
| **p**TNM | patologic: pe piesa operatorie |
| **y**TNM | după tratament neoadjuvant |
| **r**TNM | la recidivă |

Alături de TNM contează **gradul histologic** (diferențiere), markerii moleculari (receptori hormonali, HER2, mutații) și **statusul de performanță** al pacientului (scala ECOG sau Karnofsky), care arată dacă bolnavul poate tolera tratamentul.

## Intenția tratamentului

- **curativă** – vindecarea, în boala localizată sau local avansată;
- **paliativă** – controlul bolii și al simptomelor, prelungirea vieții cu păstrarea calității ei.

Decizia se ia în **comisia multidisciplinară (tumor board)**: oncolog, chirurg, radioterapeut, anatomopatolog, imagist.

## Modalitățile terapeutice

| Modalitate | Principiu | Exemple de utilizare |
|---|---|---|
| **Chirurgia** | îndepărtarea tumorii cu margini libere și a ganglionilor | tumori solide localizate |
| **Radioterapia** | radiații ionizante care lezează ADN-ul; fracționarea permite refacerea țesuturilor sănătoase | curativă, adjuvantă, paliativă (durere osoasă, compresie) |
| **Chimioterapia** | citostatice care afectează celulele în diviziune | neoadjuvantă, adjuvantă, în boala metastatică |
| **Hormonoterapia** | blocarea stimulării hormonale | cancer mamar cu receptori hormonali, cancer de prostată |
| **Terapia țintită** | blocarea unei ținte moleculare a tumorii | anti-HER2, inhibitori de tirozinkinază |
| **Imunoterapia** | reactivarea răspunsului imun antitumoral | inhibitori de puncte de control imun |

- **Neoadjuvant** = înaintea tratamentului local (micșorează tumora); **adjuvant** = după tratamentul local (distruge boala micrometastatică).
- Efectele adverse ale chimioterapiei vizează țesuturile cu proliferare rapidă: **mielosupresie**, mucozită, alopecie, greață și vărsături.
- **Neutropenia febrilă** este o urgență: hemoculturi și antibiotic cu spectru larg fără întârziere.
- Terapia țintită funcționează doar dacă **ținta este prezentă** – de aici necesitatea testării moleculare.

## De reținut pentru examen

- T = tumora, N = ganglioni regionali, M = metastaze la distanță; criteriile diferă pe localizări.
- „p” = patologic, „c” = clinic, „y” = după tratament neoadjuvant.
- Statusul de performanță influențează decizia la fel de mult ca stadiul.
- Neoadjuvant înainte, adjuvant după tratamentul local.
- Pacientul febril sub chimioterapie se tratează ca neutropenie febrilă până la proba contrarie.`,
    references: ['AJCC Cancer Staging Manual – Principii de stadializare', 'DeVita, Hellman, and Rosenberg’s Cancer: Principles & Practice of Oncology – Principiile chimioterapiei și radioterapiei'],
  },
  {
    id: 'onc-t3',
    title: 'Urgențele oncologice',
    topic: 'Urgențe',
    readMinutes: 4,
    content: `## Compresia medulară metastatică

- Cauze frecvente: metastaze vertebrale din cancerul de **sân, plămân, prostată**, mielom multiplu.
- **Durerea rahidiană** (accentuată în decubit, la tuse) precede cu zile sau săptămâni deficitul; urmează slăbiciunea membrelor, tulburările de sensibilitate cu nivel, apoi **tulburările sfincteriene**.
- Diagnostic: **IRM a întregii coloane**, de urgență. Radiografia simplă normală nu exclude compresia.
- Tratament: **corticoterapie** începută la suspiciune, **radioterapie** și/sau **decompresie chirurgicală**.
- Prognosticul funcțional depinde de statusul neurologic la începutul tratamentului: pacientul care merge la diagnostic are cele mai mari șanse să meargă și după.

## Sindromul de venă cavă superioară

- Obstrucția venei cave superioare, cel mai des prin **cancer pulmonar** sau **limfom**; tot mai frecvent prin tromboză pe catetere venoase centrale.
- Clinic: **edem facial** și al membrelor superioare, turgescență jugulară, **circulație colaterală** toracică, dispnee, agravare în decubit și la aplecare.
- Diagnostic: **CT toracic cu contrast**; **diagnosticul histologic** înaintea tratamentului, dacă starea pacientului permite.
- Tratament: poziție semișezândă, oxigen, tratamentul cauzei (chimioterapie, radioterapie), **stent endovascular** în formele severe. Edemul laringian sau cerebral înseamnă urgență majoră.

## Sindromul de liză tumorală

- Apare la tumori cu **proliferare rapidă și masă mare** (limfom Burkitt, leucemii acute), de obicei după inițierea tratamentului.
- Biologic: **hiperkaliemie, hiperfosfatemie, hiperuricemie, hipocalcemie** secundară; complicații: **insuficiență renală acută**, aritmii, convulsii.
- Prevenție: **hidratare** abundentă, agenți hipouricemianți, monitorizarea electroliților și a funcției renale.
- Tratament: corectarea tulburărilor electrolitice, monitorizare ECG, dializă la nevoie.

## Hipercalcemia malignă

| Mecanism | Exemple |
|---|---|
| Umoral – **PTHrP** | carcinoame scuamoase (plămân, cap și gât), rinichi |
| **Osteoliză** prin metastaze | cancer mamar, mielom multiplu |
| Producție de **calcitriol** | unele limfoame |

- Clinic: sete, poliurie, **deshidratare**, constipație, greață, confuzie până la comă; scurtarea QT pe ECG.
- PTH-ul este **suprimat** (spre deosebire de hiperparatiroidism).
- Tratament: **rehidratare intravenoasă** primul pas, apoi **bifosfonați**; tratamentul bolii de bază.

## Neutropenia febrilă (pe scurt)

Febră la pacient cu neutropenie după chimioterapie: hemoculturi și **antibiotic cu spectru larg fără întârziere**, fără să se aștepte rezultatele.

## Tabel sinteză

| Urgență | Semn-cheie | Investigație | Prima măsură |
|---|---|---|---|
| Compresie medulară | durere rahidiană + deficit | IRM coloană | corticoterapie, radioterapie/chirurgie |
| Venă cavă superioară | edem facial, colaterale | CT cu contrast | poziție, tratamentul cauzei, stent |
| Liză tumorală | K, P, acid uric crescute, Ca scăzut | ionogramă, creatinină | hidratare, corecție electrolitică |
| Hipercalcemie | confuzie, poliurie | calcemie, PTH | rehidratare, bifosfonați |

## De reținut pentru examen

- Durerea rahidiană nouă la un pacient oncologic = compresie medulară până la proba contrarie.
- În liza tumorală calciul **scade**, în hipercalcemia malignă PTH-ul este **suprimat**.
- Rehidratarea precede diureticul în hipercalcemie.
- Cancerul pulmonar este cauza principală a sindromului de venă cavă superioară.`,
    references: ['Harrison’s Principles of Internal Medicine – Urgențe oncologice', 'Oxford Handbook of Oncology – Oncologic emergencies'],
  },
  {
    id: 'onc-t4',
    title: 'Îngrijirile paliative și controlul durerii',
    topic: 'Îngrijiri paliative',
    readMinutes: 3,
    content: `## Ce sunt îngrijirile paliative

Îngrijirile paliative îmbunătățesc **calitatea vieții** pacienților cu boli amenințătoare de viață și a familiilor lor, prin prevenirea și ameliorarea suferinței **fizice, psihologice, sociale și spirituale**.

- pot fi începute **precoce**, în paralel cu tratamentul oncologic activ;
- nu grăbesc și nu amână moartea;
- includ **sprijinul familiei**, inclusiv în perioada de doliu;
- se realizează în **echipă multidisciplinară** (medic, asistent, psiholog, asistent social, preot).

## Evaluarea durerii

- **Localizare, iradiere, caracter, intensitate**, factori agravanți și ameliorați, evoluție în timp.
- Intensitatea se măsoară cu **scale**: numerică (0–10), vizual-analogă, scala fețelor (la copii, pacienți cu dificultăți de comunicare).
- Se identifică **tipul durerii**: nociceptivă somatică (osoasă), nociceptivă viscerală, **neuropată** (arsură, descărcări electrice, alodinie), mixtă.
- Se caută **durerea episodică** (breakthrough) și impactul asupra somnului, mobilității, dispoziției.
- Reevaluare la fiecare vizită și după fiecare modificare de tratament.

## Principiile analgeziei (OMS)

- **pe cale orală**, când este posibil;
- **la ore fixe**, nu doar la cerere, plus doze de salvare pentru durerea episodică;
- **pe scară** („by the ladder”);
- **individualizat** pentru fiecare pacient;
- cu **atenție la detalii**: explicații pentru pacient și familie, prevenirea efectelor adverse.

| Treaptă | Intensitatea durerii | Clase |
|---|---|---|
| 1 | ușoară | neopioide: paracetamol, AINS |
| 2 | moderată | opioide slabe ± neopioide |
| 3 | severă | opioide puternice (morfina este standardul) ± neopioide |

La orice treaptă se pot adăuga **adjuvante**: antidepresive sau anticonvulsivante în durerea neuropată, corticosteroizi, bifosfonați și radioterapie paliativă în durerea osoasă.

## Efectele adverse ale opioidelor

| Efect | Comportament în timp | Atitudine |
|---|---|---|
| **Constipația** | persistă, fără toleranță | laxativ de la început |
| Greața | scade în câteva zile | antiemetic la nevoie |
| Sedarea | de obicei tranzitorie | reevaluare, ajustare |
| Deprimarea respiratorie | rară la titrare corectă | monitorizare, antagonist la nevoie |

**Dependența psihică** este rară la pacientul oncologic tratat corect; teama de ea nu justifică subtratarea durerii. Toleranța și dependența fizică sunt fenomene farmacologice așteptate, distincte de adicție.

## Alte simptome frecvente

Dispneea, greața și vărsăturile, anorexia și cașexia, anxietatea, depresia, delirul, plăgile tumorale – fiecare se evaluează și se tratează țintit.

## De reținut pentru examen

- Paliativ nu înseamnă „terminal”: îngrijirea începe precoce.
- Analgezicele se dau la **ore fixe**, pe cale orală, pe scară.
- Constipația opioidă se previne de la prima administrare.
- Durerea neuropată cere adjuvante, nu doar creșterea opioidului.
- Durerea se reevaluează constant, cu aceeași scală.`,
    references: ['Oxford Textbook of Palliative Medicine – Controlul durerii', 'Harrison’s Principles of Internal Medicine – Palliative and end-of-life care'],
  },
  {
    id: 'onc-t5',
    title: "Cancerul pulmonar: tipuri, diagnostic și principii de tratament",
    topic: "Oncologie toracică",
    readMinutes: 3,
    content: `## Epidemiologie și etiologie

Cancerul pulmonar este una dintre principalele cauze de deces prin cancer. **Fumatul activ** este factorul de risc dominant, urmat de fumatul pasiv, expunerea la **radon**, azbest și alte noxe profesionale. Adenocarcinomul este cel mai frecvent subtip la nefumători.

## Clasificare histologică

Distincția esențială pentru tratament este între cancerul pulmonar **fără celule mici (NSCLC)** și cel **cu celule mici (SCLC)**.

| Tip | Particularități |
|---|---|
| Adenocarcinom | Cel mai frecvent; adesea periferic; mutații țintibile (EGFR, ALK, ROS1) |
| Carcinom scuamos | Central, legat de fumat; cavitație; hipercalcemie prin PTHrP |
| Carcinom cu celule mari | Periferic, agresiv, diagnostic de excludere |
| Carcinom cu celule mici | Neuroendocrin, central, metastazare precoce, chimiosensibil inițial |

## Prezentare clinică

- Simptome locale: tuse persistentă sau modificată, hemoptizie, dispnee, dureri toracice, pneumonii recurente în același teritoriu.
- Extensie loco-regională: disfonie (nerv recurent), **sindrom de venă cavă superioară**, sindrom Horner, revărsat pleural sau pericardic.
- **Tumora Pancoast** (apex): durere de umăr și braț, sindrom Horner.
- Metastaze: os, ficat, creier, suprarenale.
- **Sindroame paraneoplazice**: SIADH, ACTH ectopic și sindromul Lambert-Eaton în carcinomul cu celule mici; hipercalcemie în carcinomul scuamos; hipocratism digital și osteoartropatie hipertrofică.

## Diagnostic și stadializare

1. Radiografie și **CT toracic** (extins la abdomenul superior).
2. **Confirmare histologică**: bronhoscopie cu biopsie, biopsie transtoracică ghidată imagistic sau biopsia unui situs metastatic accesibil.
3. Stadializare: PET-CT, imagistică cerebrală (CT sau IRM), evaluare mediastinală invazivă când rezultatul schimbă conduita.
4. În NSCLC avansat, **testare moleculară** (EGFR, ALK, ROS1 și alte ținte) și evaluarea expresiei PD-L1.

SCLC se descrie clasic ca **boală limitată** (într-un câmp de iradiere) sau **extinsă**.

## Principii de tratament

- **NSCLC stadii precoce:** chirurgie (lobectomie cu limfadenectomie) la pacienții operabili; radioterapie stereotactică la cei inoperabili.
- **Stadii local avansate:** chimioradioterapie, uneori urmată de imunoterapie.
- **Boală metastatică:** terapii țintite dacă există o alterație moleculară, imunoterapie (inhibitori de checkpoint) sau chimioterapie pe bază de platină.
- **SCLC:** chimioterapie cu platină, cu radioterapie toracică în boala limitată; răspunsul inițial bun este frecvent urmat de recădere.
- Îngrijiri de susținere și paliative precoce, renunțarea la fumat.

## Screening

Tomografia computerizată cu doză mică poate fi oferită unor grupuri selecționate de mari fumători; radiografia toracică nu este metodă eficientă de screening.

## De reținut pentru examen

- Adenocarcinom = frecvent la nefumători, mutații EGFR/ALK; scuamos = central, hipercalcemie.
- SCLC: metastazare precoce, paraneoplazii (SIADH, ACTH, Lambert-Eaton), chimiosensibil, rareori operabil.
- Pancoast = durere de umăr + Horner, nu pneumonie.
- Diagnosticul de certitudine este histologic; testarea moleculară decide terapia în adenocarcinomul avansat.
- Sindromul de venă cavă superioară: cauza malignă cea mai frecventă este cancerul pulmonar.`,
    references: ["Harrison’s Principles of Internal Medicine – Neoplasms of the lung", "DeVita, Hellman, and Rosenberg’s Cancer: Principles and Practice of Oncology – Lung cancer"],
  },
  {
    id: 'onc-t6',
    title: "Cancerul colorectal: risc, screening și tratament",
    topic: "Oncologie digestivă",
    readMinutes: 3,
    content: `## Etiopatogenie

Majoritatea cazurilor apar sporadic, prin **secvența adenom–carcinom**: acumularea de alterații genetice transformă treptat un polip adenomatos în cancer. Factori de risc: vârsta, alimentația bogată în carne procesată și săracă în fibre, obezitatea, sedentarismul, fumatul, alcoolul.

Predispoziții mari:
- **Polipoza adenomatoasă familială** (mutație APC, sute de polipi, risc aproape sigur de cancer fără colectomie).
- **Sindromul Lynch** (gene de reparare a nepotrivirilor ADN, risc și pentru endometru, ovar, stomac).
- **Boala inflamatorie intestinală** extinsă și de lungă durată, în special colita ulcerativă.
- Istoric personal sau familial de polipi sau cancer colorectal.

## Prezentare clinică

- Colon drept: anemie feriprivă, sângerare ocultă, astenie, masă palpabilă în fosa iliacă dreaptă.
- Colon stâng: modificarea tranzitului, constipație, scaune subțiri, rectoragie, sindrom subocluziv.
- Rect: rectoragie, tenesme, senzație de evacuare incompletă.
- Manifestarea poate fi o complicație: ocluzie, perforație sau metastaze hepatice.

## Diagnostic

1. **Colonoscopie cu biopsie** – metoda de referință; permite și excizia polipilor.
2. Stadializare: CT toraco-abdomino-pelvin; IRM pelvin pentru cancerul de rect.
3. **CEA** la bază și pentru urmărire, nu pentru screening.

## Screening

Testul imunochimic de sânge ocult în scaun și colonoscopia, începând de la vârsta medie și mai devreme la cei cu risc crescut. Scopul este depistarea cancerului precoce și îndepărtarea precursorilor.

## Tratament

| Situație | Conduită |
|---|---|
| Colon localizat | Rezecție chirurgicală cu limfadenectomie; chimioterapie adjuvantă în funcție de stadiul ganglionar |
| Rect local avansat | Chimioradioterapie neoadjuvantă, apoi chirurgie |
| Metastaze hepatice rezecabile | Metastazectomie, uneori cu chimioterapie perioperatorie |
| Boală metastatică | Chimioterapie, ± terapii țintite; stabilirea statusului RAS, BRAF și al instabilității microsatelitare |

Tumorile cu **instabilitate microsatelitară înaltă** răspund la imunoterapie.

## Prognostic

Rezultatul depinde în primul rând de stadiul la diagnostic: boala localizată are prognostic bun, iar cea metastatică este rareori vindecabilă. Statusul ganglionar și invazia vasculară influențează decizia de chimioterapie adjuvantă.

## Urmărire

Examen clinic periodic, CEA, imagistică și colonoscopie de control, pentru detectarea recidivei sau a unei a doua tumori.

## De reținut pentru examen

- Anemia feriprivă la adultul în vârstă impune colonoscopie.
- Sindromul Lynch = defect MMR, risc endometrial; FAP = APC, polipi numeroși.
- Rectul beneficiază de radioterapie neoadjuvantă, colonul de obicei nu.
- Ficatul este prima localizare metastatică (circulația portală).
- CEA se folosește pentru monitorizare, nu pentru screening sau diagnostic.`,
    references: ["Harrison’s Principles of Internal Medicine – Gastrointestinal cancers", "Sleisenger and Fordtran’s Gastrointestinal and Liver Disease – Colorectal cancer"],
  },
  {
    id: 'onc-t7',
    title: "Limfoamele: Hodgkin versus non-Hodgkin",
    topic: "Hematologie oncologică",
    readMinutes: 2,
    content: `## Definiție

Limfoamele sunt proliferări maligne ale celulelor sistemului limfoid, de obicei cu debut în ganglioni. Se împart în **limfom Hodgkin** și **limfoame non-Hodgkin (LNH)**, cu istorie naturală și tratament diferite.

## Comparație

| Caracteristică | Hodgkin | Non-Hodgkin |
|---|---|---|
| Celulă tipică | Reed-Sternberg (binucleată) | Absente |
| Extensie | Contiguă, din aproape în aproape | Adesea necontiguă |
| Debut | Frecvent cervical sau mediastinal | Ganglionar sau extraganglionar |
| Origine celulară | Limfocit B | B (majoritar) sau T/NK |
| Vârstă | Vârf la adultul tânăr și la vârstnic | Crește cu vârsta |
| Curabilitate | Majoritatea pacienților se vindecă | Variabilă după tip |

## Prezentare clinică

- **Adenopatii** nedureroase, elastice, persistente, adesea cervicale.
- **Simptome B**: febră inexplicabilă, transpirații nocturne, scădere ponderală; au valoare prognostică.
- Prurit, astenie; masă mediastinală cu tuse sau dispnee; splenomegalie.
- În LNH: simptome în funcție de localizarea extraganglionară (stomac, piele, SNC).

## Diagnostic

1. **Biopsie excizională** a ganglionului (nu doar puncție), cu imunohistochimie.
2. Stadializare **Ann Arbor**: I (o regiune), II (două sau mai multe de aceeași parte a diafragmului), III (ambele părți), IV (afectare extraganglionară diseminată); sufixul B arată simptome sistemice.
3. PET-CT, hemoleucogramă, LDH, evaluare cardiacă înaintea chimioterapiei.

## Tipuri de reținut

- **Limfom difuz cu celule mari B** – cel mai frecvent LNH, agresiv, potențial curabil.
- **Limfom folicular** – indolent, t(14;18) cu supraexpresia BCL2.
- **Limfom Burkitt** – t(8;14), MYC, proliferare foarte rapidă, risc de sindrom de liză tumorală.
- **Limfom cu celule de manta** – asociat cu ciclina D1.

## Tratament

- Hodgkin: chimioterapie combinată, ± radioterapie pe câmpuri limitate, în funcție de stadiu.
- LNH B CD20-pozitiv: imunochimioterapie cu **rituximab** (anti-CD20).
- Limfoamele indolente: uneori doar observație la început.
- Recăderi: chimioterapie de salvare, transplant autolog, terapii țintite, imunoterapie celulară.

Complicații de urmărit: infecții, **liza tumorală** în formele agresive, toxicitate cardiacă și pulmonară, neoplazii secundare tardive.

## De reținut pentru examen

- Reed-Sternberg = Hodgkin; extensia contiguă este regula în Hodgkin.
- Simptomele B: febră, transpirații nocturne, scădere în greutate.
- Diagnosticul cere biopsie excizională, nu doar citologie.
- DLBCL = cel mai frecvent LNH; folicular = t(14;18); Burkitt = t(8;14).
- Rituximab = anti-CD20.`,
    references: ["Harrison’s Principles of Internal Medicine – Malignancies of lymphoid cells", "Robbins and Cotran Pathologic Basis of Disease – Diseases of white blood cells"],
  },
  {
    id: 'onc-t8',
    title: "Chimioterapia: principii și toxicități frecvente",
    topic: "Tratament oncologic",
    readMinutes: 2,
    content: `## Principii

**Chimioterapia citotoxică** vizează celulele aflate în proliferare, în diferite faze ale ciclului celular. Eficacitatea este limitată de heterogenitatea tumorii, de apariția rezistenței și de toxicitatea asupra țesuturilor normale cu reînnoire rapidă.

Intenții terapeutice:
- **curativă** (limfoame, tumori germinale);
- **adjuvantă** (după chirurgie, pentru eliminarea micrometastazelor);
- **neoadjuvantă** (înainte de chirurgie sau radioterapie, pentru reducerea tumorii);
- **paliativă** (control simptomatic și al bolii avansate).

**Polichimioterapia** asociază citostatice cu mecanisme și toxicități diferite, pentru eficacitate mai bună și rezistență mai redusă.

## Toxicități comune

- **Mielosupresie**: neutropenie (risc de infecție, inclusiv **neutropenie febrilă**), anemie, trombocitopenie.
- **Mucozită** și diaree prin afectarea epiteliului digestiv.
- **Greață și vărsături** – prevenite cu antiemetice, în special antagoniști 5-HT3.
- **Alopecie** reversibilă.
- Infertilitate, risc de neoplazii secundare tardive.

## Toxicități caracteristice unor clase

| Medicament/clasă | Toxicitate tipică |
|---|---|
| Antracicline (doxorubicină) | Cardiomiopatie dependentă de doza cumulativă |
| Cisplatin | Nefrotoxicitate, ototoxicitate, neuropatie, emeză marcată |
| Bleomicină | Pneumonită și fibroză pulmonară |
| Ciclofosfamidă, ifosfamidă | Cistită hemoragică (acroleină), prevenită cu mesna |
| Alcaloizi de vinca, taxani | Neuropatie periferică |
| Metotrexat | Mucozită, mielosupresie, hepatotoxicitate |

## Sindromul de liză tumorală

Apare după chimioterapia tumorilor cu masă mare și proliferare rapidă (limfoame agresive, leucemii): hiperkaliemie, hiperfosfatemie, hiperuricemie, hipocalcemie și insuficiență renală acută. Prevenție: hidratare, hipouricemiante, monitorizare biologică.

## Evaluarea răspunsului

Răspunsul se apreciază clinic, imagistic (criteriile RECIST) și, la unele tumori, prin markeri tumorali. Dacă boala progresează sau toxicitatea este inacceptabilă, schema se schimbă sau se oprește, iar decizia ține cont și de preferințele pacientului.

## Principii de siguranță

- Evaluarea statusului de performanță, a funcției renale, hepatice și cardiace înainte de tratament.
- Monitorizarea hemoleucogramei între cicluri; tratamentul se amână sau se ajustează la toxicitate.
- Extravazarea unor citostatice produce necroză tisulară locală.
- Pacientul este educat să se prezinte urgent la febră sau sângerare.

## De reținut pentru examen

- Țesuturile cu proliferare rapidă sunt cele afectate: măduvă, mucoase, foliculi piloși.
- Doxorubicină = cord; bleomicină = plămân; cisplatin = rinichi, ureche; ciclofosfamidă = vezică.
- Febra la un pacient neutropenic este urgență: antibiotice imediat, după hemoculturi.
- Polichimioterapia combină mecanisme diferite și toxicități necumulative.
- Chimioterapia adjuvantă urmează chirurgiei, cea neoadjuvantă o precede.`,
    references: ["Katzung – Basic & Clinical Pharmacology – Cancer chemotherapy", "DeVita, Hellman, and Rosenberg’s Cancer: Principles and Practice of Oncology – Principles of chemotherapy"],
  },
  {
    id: 'onc-t9',
    title: "Imunoterapia și terapiile țintite: concepte",
    topic: "Tratament oncologic",
    readMinutes: 3,
    content: `## De la citotoxic la țintit

Chimioterapia clasică afectează toate celulele care se divid. **Terapiile țintite** acționează asupra unei anomalii moleculare specifice tumorii, iar **imunoterapia** mobilizează sistemul imun împotriva ei. Ambele necesită adesea un **biomarker predictiv** pentru selecția pacienților.

## Terapii țintite

| Tip | Exemplu | Ținta / observații |
|---|---|---|
| Anticorp monoclonal | Trastuzumab | HER2 în cancerul mamar; risc de cardiotoxicitate |
| Anticorp monoclonal | Rituximab | CD20 în limfoamele B |
| Anticorp monoclonal | Bevacizumab | VEGF; hipertensiune, proteinurie, risc hemoragic |
| Inhibitor de tirozinkinază | Imatinib | BCR-ABL (leucemie mieloidă cronică), KIT (GIST) |
| Inhibitor de tirozinkinază | Inhibitori EGFR, ALK | Adenocarcinom pulmonar cu mutația corespunzătoare |
| Inhibitor PARP | Olaparib | Tumori cu deficit de recombinare omologă (BRCA) |
| Hormonoterapie | Tamoxifen, inhibitori de aromatază, deprivare androgenică | Cancer mamar și prostatic hormonodependente |

Efectele adverse diferă de cele ale chimioterapiei: erupții cutanate, diaree, hipertensiune, toxicitate cardiacă, în funcție de țintă. Eficacitatea este adesea limitată de **rezistența dobândită**.

## Imunoterapia

- **Inhibitori de checkpoint imun** (anti-PD-1, anti-PD-L1, anti-CTLA-4): îndepărtează frâna care limitează activitatea limfocitelor T împotriva tumorii. Utilizați în melanom, cancer pulmonar, renal, vezical, colorectal cu instabilitate microsatelitară înaltă și altele.
- **Terapia cu celule CAR-T**: limfocitele T ale pacientului sunt modificate genetic să recunoască un antigen tumoral (de exemplu în unele limfoame și leucemii B); risc de sindrom de eliberare de citokine și toxicitate neurologică.
- Vaccinuri și citokine – roluri mai restrânse.

## Efecte adverse imun-mediate

Inflamația autoimună poate afecta orice organ:
- colită și diaree;
- pneumonită;
- hepatită;
- endocrinopatii (tiroidită, hipofizită, insuficiență suprarenală);
- manifestări cutanate.

Recunoașterea precoce este esențială; tratamentul constă în suspendarea terapiei și corticoterapie, uneori imunosupresie suplimentară. Pacientul este instruit să raporteze simptome noi.

## Selecția pacienților

Alegerea se bazează pe testare moleculară (EGFR, ALK, HER2, BRCA, BRAF, instabilitate microsatelitară) și, în cazul checkpoint-urilor, pe expresia PD-L1 și tipul tumorii. Răspunsurile imune pot fi durabile, dar nu apar la toți pacienții.

## De reținut pentru examen

- Terapie țintită = anomalie moleculară specifică; necesită biomarker.
- Trastuzumab = HER2; rituximab = CD20; bevacizumab = VEGF; imatinib = BCR-ABL.
- Anti-PD-1 activează limfocitele T, cu efecte adverse imun-mediate (colită, pneumonită, tiroidită, hepatită).
- Rezistența dobândită apare frecvent la terapiile țintite.
- Corticoterapia tratează majoritatea efectelor adverse imun-mediate semnificative.`,
    references: ["Abbas’ Cellular and Molecular Immunology – Tumor immunity", "Katzung – Basic & Clinical Pharmacology – Cancer chemotherapy"],
  },
]
