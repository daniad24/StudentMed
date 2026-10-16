// Radiologie și imagistică medicală – rezumate verificate (echipa Steto)
export default [
  {
    id: 'rad-t1',
    title: 'Metodele imagistice și radioprotecția',
    topic: 'Principii fizice și radioprotecție',
    readMinutes: 3,
    content: `## Radiografia convențională

- Folosește **raze X**; imaginea reflectă **atenuarea** diferită a fasciculului de către țesuturi.
- Cinci densități de bază, de la transparent (negru) la opac (alb): **aer, grăsime, țesut moale/lichid, os, metal**.
- Avantaje: rapidă, ieftină, disponibilă; dezavantaje: imagine de sumație (structuri suprapuse), contrast slab între țesuturile moi.

## Tomografia computerizată (CT)

- Tot **raze X**, dar cu achiziție în secțiuni și reconstrucție computerizată; densitățile se exprimă în **unități Hounsfield** (apa = 0, aerul negativ, osul pozitiv).
- Elimină suprapunerea, permite reconstrucții multiplanare; contrastul iodat intravenos evidențiază vasele și organele vascularizate.
- Dezavantaj principal: **doza de iradiere** mai mare decât la radiografie.

## Imagistica prin rezonanță magnetică (IRM)

- Folosește un **câmp magnetic** puternic și **unde de radiofrecvență**; semnalul provine în principal de la protonii de hidrogen.
- **Fără radiații ionizante**, cu cel mai bun contrast pentru țesuturile moi (creier, măduvă, articulații, pelvis).
- Limite: durată lungă, cost, claustrofobie, **contraindicații** legate de metale și dispozitive (stimulatoare neconforme, corpi străini metalici intraoculari, unele implanturi).

## Ecografia

- Folosește **ultrasunete**; imaginea se formează din ecourile reflectate la interfețele dintre țesuturi.
- Descriere: **anecogen** (lichid, negru), hipoecogen, izoecogen, **hiperecogen** (calcul, os – cu **con de umbră** posterior).
- Avantaje: neiradiantă, ieftină, la patul bolnavului, examinare dinamică și Doppler pentru flux.
- Limite: **dependentă de operator**; aerul și osul împiedică vizualizarea structurilor din spate.

| Metodă | Agent fizic | Iradiere | Puncte forte |
|---|---|---|---|
| Radiografie | raze X | da, mică | os, plămân, aer liber |
| CT | raze X | da, mai mare | traumă, urgențe, stadializare |
| IRM | câmp magnetic | nu | sistem nervos, țesuturi moi |
| Ecografie | ultrasunete | nu | abdomen, pelvis, copii, sarcină |

## Radioprotecția

Radiațiile ionizante au **efecte deterministe** (apar peste un prag, gravitatea crește cu doza: arsuri cutanate, cataractă) și **efecte stocastice** (fără prag cunoscut, probabilitatea crește cu doza: cancer, efecte genetice).

Principiile radioprotecției:
- **Justificarea** – examinarea aduce mai mult beneficiu decât risc și schimbă conduita;
- **Optimizarea** – principiul **ALARA**: doza cea mai mică ce asigură un diagnostic corect;
- **Limitarea dozelor** – pentru personalul expus profesional și populație.

Pentru personal: **timp** de expunere cât mai scurt, **distanță** cât mai mare față de sursă, **ecranare** (șorț plumbat, protecții tiroidiene, paravane).

Grupe vulnerabile: **copiii** (țesuturi mai radiosensibile, speranță de viață mai lungă) și **femeile însărcinate** – se verifică posibilitatea unei sarcini înaintea examinărilor iradiante pe abdomen și pelvis.

## De reținut pentru examen

- Ecografia și IRM nu folosesc radiații ionizante.
- Justificare, optimizare, limitare – cele trei principii ale radioprotecției.
- Efectele stocastice nu au prag; cele deterministe au.
- Calculul și osul dau con de umbră la ecografie.
- Alergia la contrast iodat nu contraindică IRM; metalele feromagnetice da.`,
    references: ['Grainger & Allison’s Diagnostic Radiology – Principii fizice și radioprotecție', 'Brant and Helms’ Fundamentals of Diagnostic Radiology – Imaging modalities'],
  },
  {
    id: 'rad-t2',
    title: 'Citirea sistematică a radiografiei toracice',
    topic: 'Radiologie toracică',
    readMinutes: 4,
    content: `## Înainte de interpretare

- **Datele**: numele pacientului, data, incidența (PA sau AP), poziția (ortostatism, decubit).
- **Rotația**: apofizele spinoase la distanță egală de capetele mediale ale claviculelor.
- **Inspirul**: diafragmul drept proiectat sub arcul anterior al coastei a 6-a, aproximativ.
- **Penetrația**: corpii vertebrali abia vizibili prin silueta cardiacă.

În incidența **AP** (pacient la pat) cordul pare mărit; dimensiunea cordului se apreciază corect pe **PA**.

## O schemă de citire (ABCDE)

- **A – Airway**: traheea centrală, carina, bronhiile principale;
- **B – Breathing**: câmpurile pulmonare comparativ, sus–jos, stânga–dreapta; pleura și unghiurile costodiafragmatice;
- **C – Cardiac**: dimensiunea și contururile cordului, mediastinul, hilurile;
- **D – Diaphragm**: cupolele, aerul sub diafragm;
- **E – Everything else**: oasele (coaste, clavicule, coloană), părțile moi, tuburi, catetere, sonde.

Se revizuiesc la final **zonele „ascunse”**: apexurile, regiunea retrocardiacă, hilurile, sub diafragm.

## Semnul siluetei

Două structuri de densitate apropiată, în **contact anatomic**, își pierd conturul comun.

| Contur șters | Localizare probabilă |
|---|---|
| Marginea dreaptă a cordului | **lobul mediu** |
| Marginea stângă a cordului | **lingula** |
| Cupola diafragmatică dreaptă | lobul inferior drept |
| Cupola diafragmatică stângă | lobul inferior stâng |
| Butonul aortic | lobul superior stâng (segmentul apicoposterior) |

## Tipare principale

| Situație | Aspect radiografic |
|---|---|
| **Consolidare** (pneumonie) | opacitate cu **bronhogramă aerică**, fără pierdere de volum |
| **Atelectazie** | opacitate cu **pierdere de volum**: atragerea traheei, mediastinului, ascensiunea diafragmului |
| **Pleurezie** | opacitate omogenă declivă, cu limită superioară concavă; ștergerea unghiului costodiafragmatic; revărsatul mare **împinge** mediastinul |
| **Pneumotorax** | **linie pleurală viscerală**, fără desen pulmonar periferic; în forma sub tensiune deplasarea mediastinului controlateral |
| **Edem pulmonar cardiogen** | cardiomegalie, redistribuție vasculară spre vârfuri, linii Kerley B, opacități perihilare, revărsate |
| **Emfizem** | hipertransparență, diafragme coborâte și aplatizate, spații intercostale lărgite |
| **Nodul/masă** | opacitate rotundă; se compară cu radiografiile vechi |

## Capcane frecvente

- Pneumotoraxul mic se vede mai bine pe radiografia **în expir** sau la apex; în decubit aerul se adună anterior și bazal.
- Pliurile cutanate pot imita linia pleurală, dar se continuă dincolo de câmpul pulmonar.
- Glandele mamare și mameloanele pot simula opacități sau noduli.
- **Pneumotoraxul sub tensiune** este diagnostic clinic: decompresia nu așteaptă radiografia.

## De reținut pentru examen

- Întâi calitatea tehnică, apoi leziunile – și citirea completă, nu doar leziunea evidentă.
- Bronhograma aerică = consolidare alveolară.
- Atelectazia atrage, revărsatul mare împinge mediastinul.
- Ștergerea marginii drepte a cordului = lob mediu; a celei stângi = lingulă.
- Dimensiunea cordului nu se judecă pe incidența AP.`,
    references: ['Felson’s Principles of Chest Roentgenology – A Programmed Text', 'Grainger & Allison’s Diagnostic Radiology – Radiologia toracelui'],
  },
  {
    id: 'rad-t3',
    title: 'Imagistica abdomenului acut',
    topic: 'Radiologie abdominală',
    readMinutes: 3,
    content: `## Rolul fiecărei metode

- **Radiografia abdominală simplă** (ortostatism și/sau decubit) și **radiografia toracică în ortostatism**: aer liber, nivele hidroaerice, calcificări, corpi străini. Sensibilitate limitată, dar disponibilă și rapidă.
- **Ecografia**: primă intenție pentru patologia biliară, renală, ginecologică, la copii și gravide; detectează lichidul liber.
- **CT cu contrast**: cea mai completă evaluare a abdomenului acut la adult, când diagnosticul rămâne neclar.

## Pneumoperitoneul

- Aerul liber se ridică sub **cupolele diafragmatice** pe radiografia toracică sau abdominală în ortostatism (semilună transparentă).
- Dacă pacientul nu poate sta în picioare: **decubit lateral stâng**, aerul se adună sub peretele abdominal drept, deasupra ficatului.
- Cauza principală în urgență: **perforația unui organ cavitar** (ulcer duodenal perforat, diverticulită perforată). Atenție: aerul liber este prezent normal o perioadă după o intervenție chirurgicală abdominală.
- CT detectează și cantități mici de aer liber.

## Ocluzia intestinală

| Element | Intestin subțire | Colon |
|---|---|---|
| Poziția anselor | **centrală** | **periferică**, în cadru |
| Pliuri | **valvule conivente**, pe toată lățimea lumenului | **haustre**, doar pe o parte a lumenului |
| Nivele hidroaerice | multiple, mai mici, mai late decât înalte | mai puține, mai înalte |

- Radiografia simplă arată **anse dilatate** și **nivele hidroaerice**; colonul distal de obstacol este colabat.
- **CT** precizează sediul și cauza (aderențe, hernie, tumoră) și semnele de suferință vasculară (ischemie, strangulare).

## Alte situații frecvente

- **Colecistita acută și litiaza biliară**: **ecografia** – calculi hiperecogeni cu con de umbră, perete vezicular îngroșat, lichid pericolecistic, semn Murphy ecografic.
- **Colica renală**: ecografia (dilatarea căilor urinare) sau **CT nativ** (detectează majoritatea calculilor urinari).
- **Apendicita acută**: la **copii și gravide** se începe cu ecografia; la adult CT-ul este foarte performant.
- **Pancreatita acută**: diagnosticul este clinic și biologic; CT se folosește pentru complicații sau dacă diagnosticul este incert, nu de rutină la internare.
- **Ischemia mezenterică**: angio-CT, de urgență.
- **Traumatismul abdominal**: ecografia FAST pentru lichid liber la pacientul instabil, CT cu contrast la cel stabil.

## Alegerea investigației – tabel orientativ

| Suspiciune | Primă intenție |
|---|---|
| Perforație | radiografie în ortostatism / CT |
| Ocluzie | radiografie simplă, apoi CT |
| Litiază biliară, colecistită | ecografie |
| Apendicită la copil | ecografie |
| Ischemie mezenterică | angio-CT |

## De reținut pentru examen

- Aerul liber se caută în ortostatism sau decubit lateral stâng.
- Valvulele conivente traversează tot lumenul, haustrele doar parțial.
- Ecografia este prima pentru vezica biliară, copii și gravide.
- Instabilitatea hemodinamică nu se trimite la CT, ci se tratează.`,
    references: ['Brant and Helms’ Fundamentals of Diagnostic Radiology – Gastrointestinal imaging', 'Grainger & Allison’s Diagnostic Radiology – Abdomenul acut'],
  },
  {
    id: 'rad-t4',
    title: 'Substanțele de contrast și alegerea investigației',
    topic: 'Contrast și indicații',
    readMinutes: 4,
    content: `## Tipuri de substanțe de contrast

| Tip | Utilizare | Riscuri principale |
|---|---|---|
| **Iodate** (intravasculare) | CT, angiografie, urografie | hipersensibilitate, afectare renală, efecte tiroidiene |
| **Gadoliniu** | IRM | hipersensibilitate (rară), **fibroză sistemică nefrogenă** în insuficiența renală severă, depunere tisulară |
| **Sulfat de bariu** | tranzit baritat, irigografie | **contraindicat** la suspiciunea de perforație (peritonită baritată) |
| **Microbule** | ecografie cu contrast | reacții rare |

## Reacțiile adverse la contrastul iodat

- **Reacții de hipersensibilitate** (acute, de obicei în primele minute): de la urticarie și prurit la bronhospasm, edem laringian, hipotensiune, șoc anafilactic.
- **Reacții fiziologice**: senzație de căldură, gust metalic, greață – de regulă benigne.
- **Afectarea renală după contrast**: scăderea funcției renale în zilele următoare, mai ales la pacienții cu risc.
- **Reacții tardive**: erupții cutanate la ore sau zile după examinare.
- **Extravazarea** la locul injectării.

Factori de risc pentru hipersensibilitate: **reacție anterioară la contrast**, **astm**, atopie. Factori de risc renali: **boală cronică de rinichi**, **deshidratare**, diabet, vârstă înaintată, medicamente nefrotoxice.

## Pregătirea pacientului

- Anamneză țintită: alergii, reacții anterioare, astm, boală renală, diabet, **metformină**, sarcină, alăptare, boală tiroidiană.
- Evaluarea funcției renale la pacienții cu risc.
- **Hidratare** adecvată la pacienții cu risc renal.
- Explicarea procedurii și **consimțământul informat**.
- Abord venos funcțional; trusa de urgență și personal instruit disponibile.
- Supravegherea pacientului după injectare.
- Metformina: protocol de întrerupere temporară la pacienții cu funcție renală scăzută, conform ghidului local.

## Conduita în reacția acută

- Oprirea injectării, evaluarea ABC, chemarea ajutorului.
- Reacție ușoară cutanată: observație, eventual antihistaminic.
- **Anafilaxie**: **adrenalină intramuscular** – prima linie; oxigen, fluide intravenoase, poziționare; antihistaminice și corticosteroizi ca adjuvante.
- Documentarea reacției în foaia pacientului pentru examinările viitoare.

## Alegerea investigației potrivite

Întrebări înainte de a cere o investigație: **schimbă rezultatul conduita?** Care metodă răspunde cel mai bine la întrebarea clinică, cu iradiere minimă?

| Întrebare clinică | Investigația potrivită |
|---|---|
| AVC acut | CT cerebral nativ |
| Embolie pulmonară, pacient stabil | angio-CT pulmonar |
| Pneumonie | radiografie toracică |
| Litiază biliară | ecografie |
| Compresie medulară | IRM coloană |
| Tromboză venoasă profundă | ecografie Doppler venoasă |
| Fractură | radiografie în două incidențe |

## De reținut pentru examen

- Gadoliniul este contrastul IRM; iodul este contrastul CT.
- Bariul nu se dă la suspiciune de perforație.
- Adrenalina intramusculară este primul tratament al anafilaxiei.
- Reacția anterioară la contrast este cel mai important factor de risc pentru o nouă reacție.
- Investigația se alege după întrebarea clinică, nu „cea mai performantă”.`,
    references: ['ACR Manual on Contrast Media – Reacții adverse și prevenție', 'Grainger & Allison’s Diagnostic Radiology – Substanțe de contrast'],
  },
  {
    id: 'rad-t5',
    title: 'CT cerebral în AVC și în traumatismele cranio-cerebrale',
    topic: 'Neuroimagistică',
    readMinutes: 3,
    content: `## De ce CT în urgența neurologică

Tomografia computerizată cerebrală **nativă** este investigația de primă intenție în urgență: se face în câteva minute, este disponibilă și răspunde la întrebarea esențială – **există sânge în craniu sau nu?** Deoarece tratamentul accidentului vascular ischemic diferă radical de cel al hemoragiei, imaginea nu trebuie amânată.

## Densitățile pe CT cerebral

- **Hiperdens (alb):** sânge proaspăt, calcificări, os.
- **Izodens:** parenchim normal, sânge subacut care se egalizează în timp cu creierul.
- **Hipodens (negru-gri):** edem, infarct constituit, lichid, grăsime; aerul este foarte negru.
- Aceleași date se vizualizează în **ferestre** diferite: parenchimatoasă pentru creier, osoasă pentru fracturi.

## Accidentul vascular cerebral

- **Hemoragia intracerebrală:** zonă hiperdensă, cu edem perilezional și, uneori, efect de masă sau inundare ventriculară.
- **Infarctul ischemic:** în primele ore CT poate fi **normal** sau cu semne fine (ștergerea diferențierii cenușiu-alb, ștergerea șanțurilor, artera cerebrală medie hiperdensă); ulterior apare o **hipodensitate** sistematizată pe un teritoriu arterial.
- **Hemoragia subarahnoidiană:** sânge hiperdens în cisterne și șanțuri; cauza frecventă este anevrismul rupt, iar angio-CT identifică sacul anevrismal.
- CT cu angiografie evaluează vasele mari; IRM cu difuzie este mai sensibil pentru ischemia foarte precoce.

## Traumatismul cranio-cerebral

CT nativ este metoda de alegere la pacientul cu semne de gravitate (alterarea conștienței, deficit, vărsături repetate, semne de fractură de bază de craniu). Radiografia craniană are valoare limitată pentru leziunile intracraniene.

| Leziune | Aspect CT | Mecanism |
|---|---|---|
| Hematom epidural | Biconvex (lenticular), hiperdens, nu trece de suturi | Arterial (artera meningee mijlocie), adesea cu fractură temporală |
| Hematom subdural acut | Semilună pe convexitate, poate trece de suturi | Venos (vene-punte) |
| Contuzie hemoragică | Focare hiperdense în parenchim, adesea frontal sau temporal | Impact și contra-lovitură |
| Hemoragie subarahnoidiană traumatică | Sânge în șanțuri | Traumatism direct |

## Semne de efect de masă

- Deplasarea liniei mediane.
- Comprimarea sau dispariția ventriculului lateral de partea leziunii și ștergerea șanțurilor.
- Hernii cerebrale (subfalcină, uncală) și compresia cisternelor bazale – semne de gravitate.

## Alte aspecte practice

- Fracturile de boltă se evidențiază în fereastra osoasă; pneumocefalia sugerează o breșă osoasă comunicantă.
- Un CT inițial normal nu exclude o evoluție ulterioară: starea clinică se reevaluează, iar examinarea se repetă la agravare.
- La copil, indicația CT se cântărește atent din cauza iradierii.

## De reținut pentru examen

- AVC acut: **CT cerebral nativ întâi**, pentru a exclude hemoragia.
- Hemoragia proaspătă este **hiperdensă**; infarctul constituit este **hipodens**.
- Epidural = **biconvex, arterial**; subdural = **semilună, venos**.
- Hemoragia subarahnoidiană: sânge în cisterne, cefalee „în lovitură de trăsnet”.
- Fractura se vede în **fereastra osoasă**; un CT normal precoce în ischemie nu o exclude.`,
    references: ['Grainger & Allison’s Diagnostic Radiology – Neuroradiologie: accident vascular cerebral și traumatisme', 'Brant & Helms – Fundamentals of Diagnostic Radiology – Capul și creierul'],
  },
  {
    id: 'rad-t6',
    title: 'Ecografia abdominală: indicații și aspecte de bază',
    topic: 'Ecografie',
    readMinutes: 3,
    content: `## Principii

Ecografia folosește **ultrasunete**, fără radiații ionizante. Imaginea depinde de **ecogenitate**: structurile care reflectă mult sunt **hiperecogene** (albe), lichidele sunt **anecogene** (negre). Metoda este rapidă, ieftină, repetabilă, la patul bolnavului, dar **depinde de operator** și este limitată de **gazul intestinal**, de obezitate și de interpunerea oaselor.

## Pregătirea și limitele

- Repaus alimentar, pentru **vezică biliară destinsă** și mai puțin gaz în intestin.
- Aerul și osul nu transmit ultrasunetele: pneumoperitoneul minim, intestinul și retroperitoneul profund se evaluează dificil.
- Ecografia nu înlocuiește CT-ul când se caută o caracterizare completă a tumorilor sau complicații în urgență.

## Fenomene ecografice utile

- **Con de umbră posterioară:** calculii, calcificările, aerul.
- **Întărire acustică posterioară:** structurile lichidiene, cum este chistul simplu.
- **Interfețe:** diferența de ecogenitate între ficat și rinichi ajută la recunoașterea steatozei.

## Ficat și căi biliare

- **Steatoza hepatică:** ficat difuz hiperecogen, cu atenuare în profunzime.
- **Chistul simplu:** anecogen, perete subțire, întărire posterioară.
- **Litiaza veziculară:** focare hiperecogene, mobile, cu con de umbră; vezica poate fi plină de calculi.
- **Colecistita acută:** perete îngroșat, lichid perivezicular, durere la presiunea cu sonda (semn Murphy ecografic).
- **Icter:** ecografia distinge dilatarea căilor biliare (obstructiv) de calibrul normal (nonobstructiv).
- Ficatul de ciroză: contur neregulat, structură eterogenă, semne de hipertensiune portală (splenomegalie, ascită).

## Rinichi și căi urinare

- **Hidronefroza:** dilatarea sistemului pielocaliceal, ce sugerează obstrucție.
- **Calculii renali:** hiperecogeni, cu umbră.
- **Boala renală cronică avansată:** rinichi de dimensiuni reduse, corticală subțiată și ecogenitate crescută.
- **Chist** versus **formațiune solidă:** ecografia face diferența de bază.
- Vezica urinară: volum, reziduu postmicțional, patologia peretelui.

## Alte indicații

- Lichid liber peritoneal (ascită, hemoperitoneu).
- **Anevrism de aortă abdominală:** screening și diagnostic.
- Splină, pancreas (limitat de gaz), adenopatii.
- Ecografia focalizată în traumă (FAST) pentru lichid liber, la pacientul instabil.

## Comparație rapidă

| Întrebare | Ecografie | Când este necesar CT |
|---|---|---|
| Litiază biliară | Metodă de primă intenție | Rar |
| Hidronefroză | Foarte bună | Pentru calculi ureterali și cauză |
| Pancreatită acută | Cauza biliară | Complicații și necroză |
| Traumatism închis | FAST la instabil | La pacientul stabil |

## De reținut pentru examen

- Colica biliară și icterul: **ecografie** de primă intenție.
- Chistul = **anecogen** cu întărire posterioară; calculul = **hiperecogen** cu umbră.
- Gazul intestinal limitează ecografia; **repaus alimentar** înaintea examenului.
- Ecografia nu folosește radiații, deci este metoda de prim rang la copil și gravidă.
- Hidronefroza indică obstrucție, nu precizează singură cauza.`,
    references: ['Rumack – Diagnostic Ultrasound – Ficat, căi biliare și rinichi', 'Brant & Helms – Fundamentals of Diagnostic Radiology – Abdomen'],
  },
  {
    id: 'rad-t7',
    title: 'Imagistica osoasă și articulară',
    topic: 'Imagistică musculo-scheletală',
    readMinutes: 2,
    content: `## Radiografia, metoda de bază

Radiografia în **două incidențe** (față și profil), cu includerea articulațiilor învecinate, este examinarea de primă intenție pentru leziunile osoase. Se evaluează **conturul și corticala**, structura trabeculară, **spațiul articular**, alinierea și **țesuturile moi**.

## Fracturile

- **Semne directe:** linie transparentă, întreruperea corticalei, treaptă, deplasare sau angulare, fragmente.
- **Semne indirecte:** tumefierea părților moi, ștergerea planurilor grase, revărsat intraarticular.
- Descriere: osul, **sediul** (epifiză, metafiză, diafiză), traiectul, deplasarea, caracterul articular sau nu.
- La copil există **fracturi incomplete** (în lemn verde, în toroc) și leziuni ale cartilajului de creștere.
- CT este util pentru fracturile complexe, articulare, vertebrale sau pelviene; IRM pentru leziuni ligamentare, meniscale, fracturi oculte.

## Infecția osoasă

- **Osteomielita acută:** radiografia poate fi **normală** în primele zile; apoi apar reacție periostală și osteoliză.
- **IRM** este cea mai sensibilă metodă precoce, prin edem medular și colecții.
- În forma cronică: osteoscleroză, sechestre, cloacă.

## Artroza și artritele

| Element | Artroză | Artrită inflamatorie (ex. poliartrita reumatoidă) |
|---|---|---|
| Spațiu articular | Pensare asimetrică, în zona de presiune | Pensare uniformă |
| Os | Osteofiți, scleroză, geode | Osteopenie juxtaarticulară, eroziuni marginale |
| Distribuție | Articulații portante, coloană | Mici articulații ale mâinii, simetric |

## Tumori și metastaze

- Aspect **litic** (distrucție), **blastic** (condensare) sau mixt.
- Metastazele blastice: clasic **prostată**; litice: rinichi, tiroidă, plămân; mixte: sân.
- Semne de agresivitate: margini imprecise, reacție periostală neregulată, destrucție corticală, masă de părți moi.
- **Scintigrafia osoasă** este sensibilă, dar nespecifică: pozitivă în orice proces cu remodelare crescută; se coroborează cu radiografia.

## Osteoporoza

Se exprimă prin transparență crescută și corticale subțiri; fracturile vertebrale prin tasare. Densitometria cuantifică densitatea minerală, iar radiografia simplă este nesensibilă pentru pierderile mici.

## Alegerea metodei

- Traumatism: radiografie, apoi CT sau IRM la nevoie.
- Suspiciune de infecție: radiografie, apoi IRM.
- Durere de coloană cu deficit sau compresie: IRM.
- Căutarea metastazelor: scintigrafie, CT, IRM, după context.

## De reținut pentru examen

- Fractura: **două incidențe**, cu articulațiile vecine.
- Osteomielita precoce: radiografia poate fi normală, **IRM** este metoda sensibilă.
- Artroza: pensare, osteofiți, scleroză, geode; artrita: eroziuni și osteopenie.
- Prostata dă metastaze **blastice**.
- Scintigrafia osoasă: sensibilă, nespecifică.`,
    references: ['Brant & Helms – Fundamentals of Diagnostic Radiology – Sistemul musculo-scheletal', 'Grainger & Allison’s Diagnostic Radiology – Imagistică osoasă și articulară'],
  },
  {
    id: 'rad-t8',
    title: 'Mamografia și ecografia mamară',
    topic: 'Imagistică mamară',
    readMinutes: 2,
    content: `## Principii

**Mamografia** este o radiografie dedicată a sânului, cu doză mică, obținută de regulă în două incidențe pentru fiecare sân (cranio-caudală și oblic-mediolaterală), cu **compresie** pentru a reduce grosimea și a evidenția detaliile. **Ecografia mamară** folosește ultrasunete și nu implică radiații.

## Screening și diagnostic

- **Mamografia de screening:** la femei **fără simptome**, în intervale regulate, pentru depistarea precoce a cancerului, înainte de a fi palpabil.
- **Mamografia de diagnostic:** pentru simptome (nodul, secreție, modificări ale pielii) sau anomalii descoperite la screening.
- Rezultatul unui test de screening anormal duce la investigații suplimentare, inclusiv biopsie; diagnosticul de certitudine este **histologic**.

## Rolul ecografiei

- **Femeia tânără** sau cu sân **dens**: ecografia este mai potrivită ca primă investigație.
- Diferențiază **chistul** (anecogen, cu întărire posterioară) de formațiunea **solidă**.
- Ghidează puncția și biopsia.
- Completează mamografia în caracterizarea unei opacități.

## Aspecte mamografice

| Aspect | Interpretare |
|---|---|
| Opacitate cu margini **spiculate** | Suspectă pentru malignitate |
| **Microcalcificări** grupate, pleomorfe | Suspecte |
| **Distorsiune de arhitectură** | Suspectă |
| Opacitate rotundă, netedă, cu halou | De regulă benignă (chist, fibroadenom) |
| Calcificări grosiere, „pop-corn” | Benigne |
| Asimetrie nouă, retracția pielii sau a mamelonului | Necesită evaluare |

## Alte metode

- **IRM mamar:** pentru situații selectate, de exemplu evaluarea extinderii bolii sau supravegherea femeilor cu risc ridicat.
- Biopsia ghidată imagistic permite confirmarea histologică, fără intervenție chirurgicală deschisă, și este preferabilă înaintea oricărei decizii terapeutice.

## Raportare

**BI-RADS** este sistemul standardizat de descriere și categorisire, care leagă fiecare categorie de o conduită (urmărire, investigații suplimentare, biopsie). Categoriile de risc sunt clar definite în sistem și nu se interpretează liber.

## Limite

- Sensibilitatea mamografiei scade în **sânul dens**.
- Poate exista rezultat fals negativ sau fals pozitiv.
- Doza este mică, dar sânul tânăr este mai sensibil la radiații, motiv pentru care la tinere se preferă ecografia.

## De reținut pentru examen

- Screeningul vizează femeile **asimptomatice**.
- Tânără cu nodul: **ecografie** întâi.
- Suspecte: **spiculi, microcalcificări pleomorfe grupate, distorsiune**.
- Calcificările grosiere „pop-corn” și opacitățile netede cu halou sunt benigne.
- Ecografia deosebește chistul de nodulul solid; **BI-RADS** standardizează raportul.`,
    references: ['Brant & Helms – Fundamentals of Diagnostic Radiology – Sânul', 'Grainger & Allison’s Diagnostic Radiology – Imagistica sânului'],
  },
  {
    id: 'rad-t9',
    title: 'Sindroamele radiologice toracice',
    topic: 'Radiografie toracică',
    readMinutes: 3,
    content: `## Cum se gândește un sindrom radiologic

După verificarea calității filmului (incidență, inspir, rotație), citirea sistematică ajunge la o **opacitate** sau la o **hipertransparență**. Se raționează după **volum** (scăzut, păstrat, crescut), **margini**, **omogenitate** și semnele asociate (bronhogramă, deplasarea mediastinului).

## Sindromul de condensare

- **Opacitate** relativ omogenă, cu limite imprecise în afara scizurilor.
- **Bronhogramă aerică:** bronhii permeabile în interiorul alveolelor pline.
- **Volumul** lobului este **păstrat**.
- Semnul siluetei ajută la localizare: se șterge conturul structurii cu care opacitatea este în contact (lob mijlociu – marginea dreaptă a inimii, lingula – marginea stângă).
- Cauze frecvente: pneumonia, edemul alveolar, hemoragia alveolară.

## Atelectazia

- **Pierdere de volum:** scizuri deplasate spre zona colabată, mediastin atras de aceeași parte, diafragm ridicat, spații intercostale înguste.
- Opacitate omogenă, uneori triunghiulară.
- Cauze: obstrucție bronșică (tumoră, dop de mucus), compresie.

## Nodulul și masa pulmonară

- **Nodul:** opacitate rotundă bine delimitată, de dimensiuni mici.
- **Benignitate:** calcificare densă, laminată sau centrală, margini netede, stabilitate de ani.
- **Suspecte:** contur spiculat, creștere în timp, cavitare cu perete gros, neregulat.
- Conduita presupune comparația cu filme vechi și, la nevoie, CT.

## Edemul pulmonar cardiogen

- Redistribuție vasculară spre lobii superiori, linii **Kerley B**, manșon peribronhovascular.
- Opacități alveolare „în aripi de fluture”, hilare, bilaterale, uneori cu mici pleurezii.
- Cardiomegalia asociată se apreciază pe incidența PA.

## Cardiomegalia

- Se apreciază pe PA prin **indicele cardiotoracic**, în mod uzual peste jumătate din diametrul toracic.
- Pe incidența AP inima apare aparent mărită; la pat, evaluarea e nesigură.

## Pleura și hemitoracele opac

| Aspect | Mediastin | Cauză probabilă |
|---|---|---|
| Opacitate totală cu mediastin tras spre ea | Atras | Atelectazie totală, pneumonectomie |
| Opacitate totală cu mediastin împins | Împins contralateral | Pleurezie masivă |
| Hipertransparență cu mediastin împins | Împins contralateral | Pneumotorax sub tensiune |

## Cavitatea

- **Abcesul:** cavitate cu perete gros și **nivel hidroaeric**.
- Cavitățile cu perete subțire și regulat sunt de obicei benigne (chist, bulă).

## De reținut pentru examen

- Condensare: **volum păstrat, bronhogramă aerică**.
- Atelectazie: **volum scăzut**, mediastin atras.
- Pleurezie masivă împinge mediastinul; atelectazia îl trage.
- Nodul: **spicule, creștere, cavitate** = suspect; calcificare dens laminată = benign.
- Kerley B și redistribuție în sus: edem; indice cardiotoracic peste jumătate = cardiomegalie (PA).`,
    references: ['Brant & Helms – Fundamentals of Diagnostic Radiology – Torace', 'Grainger & Allison’s Diagnostic Radiology – Imagistica toracică'],
  },
]
