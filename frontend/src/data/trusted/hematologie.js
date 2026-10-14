// Hematologie – rezumate verificate (echipa StudentMed)
export default [
  {
    id: 'hem-t1',
    title: 'Diagnosticul diferențial al anemiilor',
    topic: 'Anemiile',
    readMinutes: 3,
    content: `## Primul pas: volumul eritrocitar mediu și reticulocitele

Anemia se clasifică practic după **volumul eritrocitar mediu (VEM)** în **microcitară**, **normocitară** și **macrocitară**, iar după **reticulocite** în anemii prin **producție insuficientă** (reticulocite scăzute) și anemii prin **pierdere sau distrucție** (reticulocite crescute). Frotiul de sânge periferic completează orientarea.

| VEM | Cauze principale |
|---|---|
| **Microcitar** | deficit de fier, talasemii, anemia bolilor cronice (uneori), anemia sideroblastică |
| **Normocitar** | sângerare acută, hemoliză, anemia bolilor cronice, boală renală cronică, infiltrare medulară |
| **Macrocitar** | deficit de vitamină B12 sau folat (megaloblastic); alcool, boală hepatică, hipotiroidism, mielodisplazie, reticulocitoză (nemegaloblastic) |

## Anemiile microcitare – tabel diferențial

| Parametru | Anemie feriprivă | Anemia bolilor cronice | Beta-talasemie minoră |
|---|---|---|---|
| **Feritină** | **scăzută** | normală sau **crescută** | normală |
| **Sideremie** | scăzută | scăzută | normală |
| **Capacitatea totală de legare a fierului** | **crescută** | normală sau scăzută | normală |
| **Număr de eritrocite** | scăzut | scăzut | normal sau **crescut** |
| **Investigație decisivă** | feritina | context inflamator, feritina | electroforeza Hb (**HbA2 crescută**) |

**Anemia feriprivă**: cauza este de obicei **pierderea cronică de sânge** (menstruală, digestivă) sau malabsorbția (boala celiacă). La bărbați și la femeile în postmenopauză se investighează obligatoriu **tubul digestiv** (endoscopie superioară și colonoscopie). Frotiul arată hematii hipocrome, microcite, celule „în creion”.

**Anemia bolilor cronice**: în inflamație, **hepcidina** crește și blochează eliberarea fierului din macrofage și absorbția intestinală; fierul există, dar nu este disponibil pentru eritropoieză.

## Anemiile macrocitare megaloblastice

- **Deficitul de vitamină B12**: cel mai frecvent prin **anemie pernicioasă** (gastrită atrofică autoimună, anticorpi anti-factor intrinsec și anti-celule parietale); alte cauze: gastrectomie, afectarea ileonului terminal (boala Crohn, rezecție), dietă vegană strictă. Poate produce **degenerare combinată subacută** a măduvei, neuropatie periferică și tulburări cognitive.
- **Deficitul de folat**: aport insuficient, alcoolism, sarcină, malabsorbție, medicamente (metotrexat). Nu produce afectare neurologică de tip combinat.
- Frotiu: **macro-ovalocite**, **neutrofile hipersegmentate**.
- Administrarea doar de acid folic la un deficit de B12 poate corecta anemia, dar agravează leziunile neurologice.

## Anemiile hemolitice

**Semne de laborator**: **reticulocitoză**, **LDH crescut**, **bilirubină neconjugată crescută**, **haptoglobină scăzută**; în hemoliza intravasculară apar hemoglobinuria și hemosiderinuria.

| Tip | Exemple | Indicii |
|---|---|---|
| **Membranare** | sferocitoza ereditară | sferocite, test Coombs negativ, splenomegalie |
| **Enzimatice** | deficitul de G6PD | crize după bob, infecții, medicamente oxidante; corpi Heinz |
| **Hemoglobinopatii** | siclemie, talasemii | electroforeza Hb |
| **Imune** | anemia hemolitică autoimună | **test Coombs direct pozitiv** |
| **Microangiopatice** | PTT, sindrom hemolitic-uremic, CID | **schizocite** |

## De reținut pentru examen

- Feritina scăzută confirmă deficitul de fier; feritina normală nu îl exclude în inflamație.
- Microcitoză cu eritrocite multe și feritină normală = gândește-te la talasemia minoră.
- Anemie feriprivă la bărbat sau în postmenopauză = endoscopie și colonoscopie.
- Neutrofile hipersegmentate = megaloblastoză; simptome neurologice = B12.
- Coombs direct pozitiv = hemoliză imună.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Hematologie (Anemiile)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Anemia and Polycythemia',
    ],
  },
  {
    id: 'hem-t2',
    title: 'Leucemiile acute și cronice',
    topic: 'Leucemiile',
    readMinutes: 3,
    content: `## Principiul diferenței

- **Leucemiile acute** sunt proliferări de **celule imature (blaști)**, cu blocarea maturării și **insuficiență medulară** rapid instalată; netratate, sunt letale în scurt timp.
- **Leucemiile cronice** sunt proliferări de **celule mature sau în curs de maturare**, cu evoluție lentă, adesea descoperite întâmplător.

## Comparație

| Caracteristică | LAL | LAM | LMC | LLC |
|---|---|---|---|---|
| **Vârstă tipică** | **copil** (cea mai frecventă leucemie a copilului) | adult, crește cu vârsta | adult de vârstă medie | **vârstnic** |
| **Celula** | limfoblast | mieloblast | granulocite în toate stadiile de maturare | limfocit B matur |
| **Elemente cheie** | afectare SNC și testiculară posibilă | **bastonașe Auer**; forma promielocitară cu **CID** | **cromozom Philadelphia** t(9;22), BCR-ABL1; **splenomegalie masivă**, bazofilie | **umbre Gumprecht**; fenomene autoimune |
| **Tratament de bază** | chimioterapie în faze, profilaxie SNC | chimioterapie intensivă ± transplant | **inhibitori de tirozinkinază** | supraveghere în formele asimptomatice; terapii țintite |

## Leucemiile acute

**Clinic** – consecințele insuficienței medulare:
- **anemie**: paloare, oboseală, dispnee;
- **neutropenie**: infecții severe, febră;
- **trombocitopenie**: peteșii, echimoze, sângerări mucoase.

Se adaugă semne de infiltrare: adenopatii și hepatosplenomegalie (mai ales în LAL), dureri osoase la copil, hipertrofie gingivală în formele monocitare.

**Diagnostic**: hemoleucogramă (blaști circulanți, citopenii), **puncție medulară** cu proporție crescută de blaști, **imunofenotipare**, citogenetică și biologie moleculară (cu rol prognostic și terapeutic).

**Particularități**:
- **Leucemia acută promielocitară** – t(15;17), PML-RARA; risc mare de **CID**; răspunde la **acid all-trans retinoic** și trioxid de arsen, care induc diferențierea. Este o urgență hematologică.
- **Sindromul de liză tumorală** (hiperuricemie, hiperkaliemie, hiperfosfatemie, hipocalcemie, insuficiență renală) poate apărea la începutul tratamentului și se previne prin hidratare și hipouricemiante.

## Leucemia mieloidă cronică

- neoplasm mieloproliferativ definit de **gena de fuziune BCR-ABL1** (cromozomul Philadelphia);
- leucocitoză marcată cu toate stadiile granulocitare, **bazofilie**, **splenomegalie** adesea masivă;
- **fosfataza alcalină leucocitară scăzută** (spre deosebire de reacția leucemoidă);
- evoluție în faze: cronică, accelerată, **blastică** (asemănătoare unei leucemii acute);
- **inhibitorii de tirozinkinază** (imatinib și următorii) au transformat prognosticul.

## Leucemia limfocitară cronică

- cea mai frecventă leucemie a adultului în țările occidentale;
- **limfocitoză** cu limfocite B mature monoclonale; frecvent descoperită întâmplător;
- adenopatii, splenomegalie, iar în formele avansate anemie și trombocitopenie;
- complicații: **infecții** (hipogamaglobulinemie), **anemie hemolitică autoimună** și **trombocitopenie imună**, **transformare Richter** într-un limfom agresiv;
- formele asimptomatice, precoce, se urmăresc fără tratament.

## De reținut pentru examen

- Blaști + citopenii = leucemie acută; celule mature + evoluție lentă = leucemie cronică.
- Bastonașe Auer = LAM; forma promielocitară se complică cu CID.
- LAL = cea mai frecventă leucemie a copilului; LLC = a vârstnicului.
- Cromozom Philadelphia + splenomegalie masivă = LMC, tratată cu inhibitori de tirozinkinază.
- LLC: infecții și fenomene autoimune; transformare Richter.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Hematologie (Malignități hematologice)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Acute and Chronic Myeloid Leukemia',
    ],
  },
  {
    id: 'hem-t3',
    title: 'Limfoamele și mielomul multiplu',
    topic: 'Limfoame și discrazii plasmocitare',
    readMinutes: 3,
    content: `## Limfomul Hodgkin vs limfoamele non-Hodgkin

| Caracteristică | Limfom Hodgkin | Limfoame non-Hodgkin |
|---|---|---|
| **Vârstă** | distribuție bimodală, frecvent adult tânăr | crește cu vârsta |
| **Celula caracteristică** | **Reed-Sternberg** (CD15+, CD30+) | variate, majoritatea de linie B |
| **Extindere** | **contiguă**, din aproape în aproape | adesea **necontiguă**, diseminată |
| **Afectare extranodală** | rară | **frecventă** (tub digestiv, piele, SNC) |
| **Asocieri** | EBV | EBV, HIV, H. pylori, imunosupresie |
| **Simptome particulare** | prurit, **durere ganglionară la alcool** | variabile |

**Simptomele B** – febră, transpirații nocturne abundente, scădere ponderală semnificativă – au valoare prognostică în ambele tipuri.

**Diagnostic**: **biopsie ganglionară excizională** (arhitectura ganglionului este esențială), imunohistochimie; stadializare prin **PET-CT**.

## Limfoamele non-Hodgkin – exemple clasice

| Limfom | Comportament | Asociere de reținut |
|---|---|---|
| **Limfomul difuz cu celulă mare B** | **agresiv**, dar potențial curabil | cel mai frecvent limfom non-Hodgkin |
| **Limfomul folicular** | **indolent**, recidivant | **t(14;18)**, supraexpresia BCL2 |
| **Limfomul Burkitt** | foarte agresiv, cu creștere rapidă | **t(8;14)**, MYC; aspect de „cer înstelat”; EBV |
| **Limfomul de manta** | agresiv | **t(11;14)**, ciclina D1 |
| **Limfomul MALT gastric** | indolent | **Helicobacter pylori** – eradicarea poate induce remisiune |

Limfoamele foarte agresive (Burkitt) pot produce **sindrom de liză tumorală** la începutul tratamentului.

## Mielomul multiplu

**Definiție**: proliferare malignă de **plasmocite** în măduvă, care secretă de obicei o **proteină monoclonală** (imunoglobulină întreagă sau doar lanțuri ușoare).

**Manifestări – acronimul CRAB**:
- **C** – hipercalcemie (confuzie, poliurie, constipație);
- **R** – insuficiență renală (nefropatie cu cilindri de lanțuri ușoare, hipercalcemie, deshidratare);
- **A** – anemie;
- **B** – leziuni osoase **osteolitice**, dureri osoase (frecvent lombare), fracturi patologice.

Alte elemente: **infecții** repetate (imunopareză), **VSH foarte crescut**, hematii în **fișicuri** pe frotiu, uneori hipervâscozitate sau compresie medulară (urgență).

**Investigații**:
- **electroforeza proteinelor serice** și **imunofixarea** (vârf monoclonal);
- **lanțurile ușoare libere** în ser și proteina Bence Jones în urină;
- **puncție/biopsie medulară** cu infiltrat plasmocitar clonal;
- imagistică de corp întreg (CT, RMN, PET-CT); **scintigrafia osoasă** este de obicei nerelevantă, pentru că leziunile nu au activitate osteoblastică.

**Tratament** (principii): combinații ce includ inhibitori de proteazom, imunomodulatoare, anticorpi monoclonali și corticoizi, **autotransplant** de celule stem la pacienții eligibili, bifosfonați pentru boala osoasă, tratament de susținere.

**Gamapatia monoclonală cu semnificație nedeterminată (MGUS)**: proteină monoclonală fără afectare de organ; nu se tratează, dar se urmărește, deoarece poate evolua spre mielom.

## De reținut pentru examen

- Reed-Sternberg + extindere contiguă + durere la alcool = limfom Hodgkin.
- Diagnosticul limfomului necesită biopsie ganglionară, nu aspirat cu ac fin.
- t(14;18) = folicular; t(8;14) = Burkitt; t(11;14) = manta.
- CRAB = mielom; scintigrafia osoasă poate fi normală.
- Limfomul MALT gastric poate regresa după eradicarea H. pylori.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Hematologie (Limfoame și mielom)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Plasma Cell Disorders',
    ],
  },
  {
    id: 'hem-t4',
    title: 'Tulburările de hemostază',
    topic: 'Hemostaza și tromboza',
    readMinutes: 4,
    content: `## Orientarea clinică și de laborator

Sângerările din **hemostaza primară** (trombocite, factor von Willebrand) sunt **mucocutanate**: peteșii, echimoze, epistaxis, menoragii. Sângerările din **coagulopatii** (factori ai coagulării) sunt **profunde**: hemartroze, hematoame musculare, sângerări tardive după intervenții.

| Afecțiune | Trombocite | TP | aPTT | Fibrinogen | Altele |
|---|---|---|---|---|---|
| **PTI** | scăzute | normal | normal | normal | trombocitopenie izolată |
| **PTT** | scăzute | normal | normal | normal | **schizocite**, LDH crescut, ADAMTS13 scăzut |
| **Hemofilie A/B** | normale | normal | **prelungit** | normal | FVIII sau FIX scăzut |
| **Boala von Willebrand** | normale | normal | normal sau prelungit | normal | funcție plachetară alterată |
| **CID** | scăzute | **prelungit** | **prelungit** | **scăzut** | **D-dimeri crescuți**, schizocite |

## Trombocitopeniile

**Trombocitopenia imună primară (PTI)** – distrucție mediată de anticorpi antiplachetari.
- la copil: adesea după o infecție virală, debut brusc, frecvent **autolimitată**;
- la adult: mai des cronică;
- **diagnostic de excludere** (medicamente, HIV, hepatita C, lupus, boli hematologice);
- tratament când există sângerări sau risc: **corticoizi**, **imunoglobuline intravenoase**, apoi agoniști de receptor al trombopoietinei, rituximab, splenectomie.

**Purpura trombotică trombocitopenică (PTT)** – **microangiopatie trombotică** prin deficitul (de obicei autoimun) de **ADAMTS13**, cu acumulare de multimeri mari de factor von Willebrand.
- anemie hemolitică microangiopatică, trombocitopenie, afectare **neurologică** și **renală**, febră (tabloul complet nu este obligatoriu);
- urgență: **schimb plasmatic**, corticoizi, terapii țintite;
- **transfuzia de trombocite se evită**, putând agrava trombozele.

## Coagulopatiile ereditare

**Hemofiliile** – transmitere **recesivă legată de X** (afectează băieții):
- **hemofilia A** – deficit de **factor VIII**; **hemofilia B** – deficit de **factor IX**;
- hemartroze recurente cu **artropatie**, hematoame musculare;
- tratament: concentrate de factor (profilactic sau la nevoie), desmopresină în hemofilia A ușoară, terapii noi non-factor.

**Boala von Willebrand** – **cea mai frecventă** coagulopatie ereditară, transmisă de obicei **autozomal dominant**:
- sângerări mucocutanate (epistaxis, menoragii, sângerare la extracții dentare);
- factorul VIII poate fi scăzut, prelungind aPTT;
- tratament: **desmopresină** în tipul 1, concentrate care conțin factor von Willebrand, antifibrinolitice.

## Coagularea intravasculară diseminată (CID)

Activare sistemică a coagulării, cu **consum** de trombocite și factori și **fibrinoliză secundară**: coexistă **trombozele microvasculare** și **sângerările** (din locuri de puncție, plăgi, mucoase).
- cauze: **sepsis**, traumatisme majore, **complicații obstetricale** (dezlipire de placentă, embolie amniotică), neoplazii, leucemia acută promielocitară;
- tratament: **al cauzei**, plus substituție (plasmă proaspătă congelată, crioprecipitat, trombocite) la pacienții care sângerează.

## Trombembolismul venos

- **triada Virchow**: stază, leziune endotelială, hipercoagulabilitate;
- factori de risc: imobilizare, chirurgie (mai ales ortopedică), neoplazii, sarcină și postpartum, estrogeni, trombofilii (**factor V Leiden**, mutația protrombinei, deficit de antitrombină, proteină C sau S, sindrom antifosfolipidic);
- **D-dimerii** au valoare predictivă negativă mare: utili pentru **excludere** la probabilitate clinică mică, nu pentru confirmare;
- confirmare: **ecografie venoasă cu compresie** (tromboza venoasă profundă), **angio-CT pulmonar** (embolia pulmonară);
- tratament: **anticoagulare**; tromboliză în embolia pulmonară cu instabilitate hemodinamică.

## De reținut pentru examen

- Sângerare mucocutanată = trombocite sau von Willebrand; hemartroze = hemofilie.
- PTT: TP și aPTT normale (diferențiere de CID); nu se transfuzează trombocite.
- Hemofilie: aPTT prelungit cu TP și trombocite normale.
- CID: fibrinogen scăzut, D-dimeri crescuți, tratamentul cauzei.
- D-dimerii exclud, nu confirmă trombembolismul venos.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Hematologie (Hemostaza și tromboza)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Disorders of Platelets and Vessel Wall; Coagulation Disorders',
    ],
  },
]
