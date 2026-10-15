// Radiologie și imagistică medicală – rezumate verificate (echipa StudentMed)
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
]
