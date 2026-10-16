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
]
