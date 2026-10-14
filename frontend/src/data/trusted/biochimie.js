// Biochimie – rezumate verificate (echipa StudentMed)
export default [
  {
    id: 'bio-t1',
    title: 'Enzimele: cinetică, inhibiție și reglare',
    topic: 'Enzimologie',
    readMinutes: 4,
    content: `## Ce face o enzimă
Enzimele sunt catalizatori biologici, aproape toate de natură proteică. Ele **scad energia de activare** a unei reacții, accelerând atingerea echilibrului, dar **nu modifică echilibrul** reacției și nici variația de energie liberă (ΔG). Substratul se leagă în **situsul activ**, formând complexul enzimă–substrat.

- **Cofactori**: ioni metalici (Zn, Mg, Fe, Cu).
- **Coenzime**: molecule organice, de obicei derivate din vitamine (NAD+ din niacină, FAD din riboflavină, tiamin-pirofosfat din tiamină, piridoxal-fosfat din vitamina B6).
- **Holoenzimă** = apoenzimă (partea proteică) + cofactor.

## Cinetica Michaelis–Menten
Viteza reacției crește cu concentrația substratului până la o valoare maximă, **Vmax**, când toată enzima este saturată. Curba are formă de hiperbolă.

- **Km** = concentrația de substrat la care viteza este jumătate din Vmax.
- Km mic înseamnă **afinitate mare** a enzimei pentru substrat.
- Vmax este proporțională cu cantitatea de enzimă.
- Reprezentarea **Lineweaver–Burk** (dublu reciprocă: 1/v în funcție de 1/[S]) transformă hiperbola într-o dreaptă: intersecția cu axa Y = 1/Vmax, cu axa X = −1/Km.

## Tipuri de inhibiție
| Tip | Unde se leagă inhibitorul | Km | Vmax | Depășit de exces de substrat? |
|---|---|---|---|---|
| **Competitivă** | situsul activ | crește | nemodificat | da |
| **Necompetitivă** | alt situs, pe E sau ES | nemodificat | scade | nu |
| **Ireversibilă** | legare covalentă | – | scade | nu |

Exemple clasice: **statinele** inhibă competitiv HMG-CoA reductaza; **aspirina** acetilează ireversibil ciclooxigenaza; **organofosforicele** inhibă ireversibil acetilcolinesteraza.

## Reglarea activității enzimatice
- **Alosterică**: efectorii se leagă la un situs diferit de cel activ; enzimele alosterice dau o curbă **sigmoidă**, nu hiperbolică. Adesea produsul final al căii inhibă prima enzimă specifică (**feedback negativ**).
- **Modificare covalentă**: fosforilare/defosforilare (kinaze și fosfataze), de exemplu controlul glicogen fosforilazei.
- **Activare proteolitică** a zimogenilor: tripsinogen → tripsină, factorii coagulării.
- **Controlul cantității de enzimă**: inducție sau represie a sintezei, modificarea degradării.

## Izoenzime
Forme diferite ale aceleiași enzime, care catalizează aceeași reacție dar diferă prin structură, Km și distribuție tisulară (de exemplu hexokinaza vs glucokinaza, izoenzimele LDH și CK). Au valoare diagnostică.

## De reținut pentru examen
- Enzima scade energia de activare, dar NU schimbă echilibrul sau ΔG.
- Competitiv: Km crește, Vmax neschimbat. Necompetitiv: Vmax scade, Km neschimbat.
- Km mic = afinitate mare.
- Curba sigmoidă indică o enzimă alosterică (cooperativitate).
- Statine – inhibiție competitivă; aspirina – inhibiție ireversibilă.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Enzymes',
      'Harper’s Illustrated Biochemistry – Enzymes: Kinetics; Regulation of Activity',
    ],
  },
  {
    id: 'bio-t2',
    title: 'Lanțul respirator și fosforilarea oxidativă',
    topic: 'Bioenergetică',
    readMinutes: 4,
    content: `## Localizare și rol
Lanțul respirator (lanțul de transport al electronilor) se află în **membrana mitocondrială internă**. El preia electronii de la **NADH** și **FADH2**, generați în glicoliză, ciclul Krebs și beta-oxidare, și îi transferă treptat până la **oxigen**, acceptorul final, cu formare de apă. Energia eliberată este folosită pentru a pompa protoni din matrice în spațiul intermembranar.

## Componentele lanțului
| Complex | Nume | Pompează protoni? | Observații |
|---|---|---|---|
| **I** | NADH-ubichinon oxidoreductaza | da | conține FMN și centri Fe–S |
| **II** | succinat dehidrogenaza | **nu** | enzimă și a ciclului Krebs; primește electroni de la FADH2 |
| **Coenzima Q** | ubichinona | – | transportor mobil, liposolubil |
| **III** | complexul citocrom bc1 | da | transferă electroni la citocromul c |
| **Citocrom c** | – | – | proteină mobilă, pe fața externă a membranei interne |
| **IV** | citocrom c oxidaza | da | conține Cu și hem a/a3; reduce O2 la H2O |

## Teoria chemiosmotică (Mitchell)
Pomparea protonilor creează un **gradient electrochimic** (forța protonmotrice) între spațiul intermembranar și matrice. Protonii revin în matrice prin **ATP sintază** (complexul V), iar fluxul lor determină sinteza de ATP din ADP și fosfat. Transportul de electroni și sinteza ATP sunt astfel **cuplate**.

- Electronii de la NADH trec prin trei complexe care pompează protoni, deci produc mai mult ATP decât cei de la FADH2, care intră la nivelul CoQ și ocolesc complexul I.
- ATP-ul format în matrice este exportat în citosol de **translocaza ADP/ATP**.

## Inhibitori și decuplanți
| Categorie | Exemple | Efect |
|---|---|---|
| Inhibitor complex I | **rotenona**, amobarbitalul | blochează oxidarea NADH |
| Inhibitor complex III | **antimicina A** | blochează transferul la citocromul c |
| Inhibitori complex IV | **cianura**, **monoxidul de carbon**, azida | opresc consumul de O2 |
| Inhibitor ATP sintază | **oligomicina** | oprește sinteza ATP și, secundar, transportul de electroni |
| Decuplanți | **2,4-dinitrofenolul**, **termogenina (UCP1)** din țesutul adipos brun | protonii revin fără sinteză de ATP; energia se disipă ca **căldură** |

Inhibitorii opresc atât transportul de electroni, cât și sinteza ATP. Decuplanții, în schimb, **cresc** consumul de oxigen, dar ATP-ul scade.

## Corelații clinice
- **Intoxicația cu cianură**: celulele nu pot folosi oxigenul, deși acesta este disponibil în sânge.
- **Țesutul adipos brun** al nou-născutului produce căldură prin decuplare fiziologică (termogenină).
- **Bolile mitocondriale** afectează mai ales țesuturile cu consum energetic mare (mușchi, sistem nervos); ADN-ul mitocondrial se moștenește pe linie maternă.

## De reținut pentru examen
- Complexul II este singurul care nu pompează protoni.
- Coenzima Q și citocromul c sunt transportorii mobili.
- Cianura și CO blochează complexul IV.
- Decuplanții cresc consumul de O2 și producția de căldură, dar scad ATP-ul.
- Oligomicina blochează ATP sintaza, iar transportul de electroni se oprește secundar.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Bioenergetics and Oxidative Phosphorylation',
      'Harper’s Illustrated Biochemistry – The Respiratory Chain & Oxidative Phosphorylation',
    ],
  },
  {
    id: 'bio-t3',
    title: 'Gluconeogeneza',
    topic: 'Metabolismul glucidelor',
    readMinutes: 4,
    content: `## Definiție și rol
Gluconeogeneza este **sinteza de glucoză din precursori neglucidici**. Devine esențială în **post prelungit**, după epuizarea glicogenului hepatic, pentru a asigura glucoza necesară creierului, eritrocitelor și medularei renale.

- Organe: în principal **ficatul**; **rinichiul** contribuie mai ales în post prelungit.
- Localizare celulară: mitocondrie și citosol, cu ultima etapă în reticulul endoplasmatic.

## Precursori
- **Lactatul** – din eritrocite și mușchiul în efort, transformat în piruvat (**ciclul Cori**).
- **Aminoacizii glucogenici** – mai ales **alanina** (ciclul glucoză–alanină) și glutamina.
- **Glicerolul** – din lipoliza trigliceridelor, intră ca dihidroxiacetonfosfat.
- **Propionil-CoA** – din acizii grași cu număr impar de atomi de carbon, intră ca succinil-CoA.

Acizii grași cu număr par de atomi de carbon **nu pot da glucoză netă**, deoarece acetil-CoA nu poate fi transformat în piruvat (reacția piruvat dehidrogenazei este ireversibilă).

## Cele patru enzime-cheie
Gluconeogeneza folosește enzimele reversibile ale glicolizei, dar ocolește cele trei etape ireversibile.

| Etapă ireversibilă a glicolizei | Ocolită în gluconeogeneză prin | Localizare |
|---|---|---|
| piruvat kinaza | **piruvat carboxilaza** (piruvat → oxalacetat) + **PEP carboxikinaza** (oxalacetat → PEP) | mitocondrie / citosol |
| fosfofructokinaza-1 | **fructozo-1,6-bisfosfataza** | citosol |
| hexokinaza / glucokinaza | **glucozo-6-fosfataza** | reticul endoplasmatic |

- Piruvat carboxilaza necesită **biotină** și este activată de **acetil-CoA**.
- Glucozo-6-fosfataza există în ficat și rinichi, dar **nu în mușchi** – de aceea glicogenul muscular nu poate elibera glucoză în sânge.

## Reglare
- **Glucagonul** și **cortizolul** stimulează gluconeogeneza; **insulina** o inhibă.
- **Fructozo-2,6-bisfosfatul** activează fosfofructokinaza-1 și inhibă fructozo-1,6-bisfosfataza. Glucagonul îi scade concentrația, orientând ficatul spre gluconeogeneză.
- **Acetil-CoA** în exces (din beta-oxidare în post) activează piruvat carboxilaza.
- Glicoliza și gluconeogeneza sunt **reglate reciproc**, pentru a evita un ciclu inutil.

## Costul energetic
Gluconeogeneza consumă energie (ATP și GTP), mai mult decât produce glicoliza. Energia provine din **beta-oxidarea acizilor grași** în ficat.

## Corelații clinice
- **Consumul de alcool** în post poate da hipoglicemie: metabolizarea etanolului crește raportul NADH/NAD+ și deviază piruvatul spre lactat și oxalacetatul spre malat.
- **Deficitul de glucozo-6-fosfatază** (boala von Gierke) produce hipoglicemie severă de post.

## De reținut pentru examen
- Cele 4 enzime: piruvat carboxilaza, PEP carboxikinaza, fructozo-1,6-bisfosfataza, glucozo-6-fosfataza.
- Acizii grași cu număr par de atomi de C nu formează glucoză netă.
- Mușchiul nu are glucozo-6-fosfatază.
- Piruvat carboxilaza – biotină, activată de acetil-CoA.
- Fructozo-2,6-bisfosfatul este comutatorul glicoliză/gluconeogeneză.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Gluconeogenesis',
      'Harper’s Illustrated Biochemistry – Gluconeogenesis & the Control of Blood Glucose',
    ],
  },
  {
    id: 'bio-t4',
    title: 'Metabolismul glicogenului și glicogenozele',
    topic: 'Metabolismul glucidelor',
    readMinutes: 4,
    content: `## Structură și depozite
Glicogenul este forma de depozit a glucozei la animale: un polimer ramificat cu legături **α-1,4** pe lanțuri și **α-1,6** la ramificații. Ramificarea crește solubilitatea și numărul de capete de pe care se poate elibera rapid glucoza.

| | Glicogen hepatic | Glicogen muscular |
|---|---|---|
| Rol | menține **glicemia** între mese | furnizează energie **pentru mușchiul însuși** |
| Glucozo-6-fosfatază | prezentă | **absentă** |
| Hormon principal de mobilizare | **glucagon** (și adrenalină) | **adrenalină**; Ca2+ și AMP în contracție |

## Glicogenogeneza (sinteza)
1. Glucoza → glucozo-6-fosfat → **glucozo-1-fosfat** (fosfoglucomutaza).
2. Glucozo-1-fosfat + UTP → **UDP-glucoză**.
3. **Glicogenina** inițiază un primer.
4. **Glicogen sintaza** alungește lanțul prin legături α-1,4 – enzima reglatoare.
5. **Enzima de ramificare** creează legături α-1,6.

## Glicogenoliza (degradarea)
1. **Glicogen fosforilaza** scindează legăturile α-1,4 prin fosforoliză, eliberând glucozo-1-fosfat; necesită **piridoxal-fosfat**. Se oprește la câteva resturi de punctul de ramificare.
2. **Enzima de deramificare** mută un segment de lanț și hidrolizează legătura α-1,6, eliberând glucoză liberă.
3. Glucozo-1-fosfat → glucozo-6-fosfat; în ficat, glucozo-6-fosfataza eliberează glucoză în sânge.
4. O mică parte din glicogen este degradată în **lizozomi** de α-1,4-glucozidaza acidă.

## Reglare
- **Glucagonul** și **adrenalina** → AMPc → protein kinaza A → **fosforilare**: glicogen fosforilaza devine **activă**, glicogen sintaza devine **inactivă**.
- **Insulina** activează fosfataze → defosforilare: sinteza este stimulată, degradarea inhibată.
- În mușchi, **Ca2+** (din contracție) și **AMP** activează fosforilaza independent de hormoni.
- Glucozo-6-fosfatul activează alosteric glicogen sintaza.

## Glicogenoze principale
| Tip | Enzimă deficitară | Elemente clasice |
|---|---|---|
| I – von Gierke | glucozo-6-fosfatază | hipoglicemie severă de post, hepatomegalie, acidoză lactică, hiperuricemie, hiperlipidemie |
| II – Pompe | α-1,4-glucozidaza acidă lizozomală | cardiomegalie, hipotonie; singura glicogenoză lizozomală |
| III – Cori | enzima de deramificare | ca tipul I, dar mai ușoară; glicogen cu ramificații scurte anormale |
| V – McArdle | glicogen fosforilaza musculară | crampe și mioglobinurie la efort, fără creșterea lactatului după efort |

## De reținut pentru examen
- Fosforilarea activează fosforilaza și inactivează glicogen sintaza.
- Glicogenul muscular nu crește glicemia (lipsa glucozo-6-fosfatazei).
- Pompe – lizozomală, cu afectare cardiacă.
- McArdle – intoleranță la efort, lactat care nu crește la efort.
- Von Gierke – hipoglicemie de post plus acid lactic, acid uric și lipide crescute.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Glycogen Metabolism',
      'Harper’s Illustrated Biochemistry – Metabolism of Glycogen',
    ],
  },
  {
    id: 'bio-t5',
    title: 'Beta-oxidarea acizilor grași și corpii cetonici',
    topic: 'Metabolismul lipidelor',
    readMinutes: 4,
    content: `## Activarea și transportul acizilor grași
1. **Activarea** are loc în citosol: acidul gras devine **acil-CoA** (acil-CoA sintetaza), cu consum de ATP.
2. Acizii grași cu lanț lung nu traversează membrana mitocondrială internă ca atare. Ei folosesc **sistemul carnitinei**:
   - **carnitin-palmitoil transferaza I (CPT-I)**, pe membrana externă – etapa limitantă;
   - translocaza carnitină/acilcarnitină;
   - **CPT-II**, pe fața internă, reface acil-CoA în matrice.
3. Acizii grași cu lanț scurt și mediu intră direct în mitocondrie.

**Malonil-CoA** (primul intermediar al sintezei de acizi grași) **inhibă CPT-I**: astfel, sinteza și degradarea nu au loc simultan.

## Beta-oxidarea propriu-zisă
Fiecare ciclu are patru reacții: **oxidare** (FAD), **hidratare**, **oxidare** (NAD+) și **tioliză**. Rezultă:
- un **acetil-CoA**,
- un **FADH2** și un **NADH**,
- un acil-CoA scurtat cu doi atomi de carbon.

Acizii grași cu număr **impar** de atomi de carbon dau în final **propionil-CoA**, transformat în succinil-CoA (necesită biotină și **vitamina B12**). Acizii grași cu lanț foarte lung sunt scurtați inițial în **peroxizomi**.

## Corpii cetonici
În post prelungit, diabet zaharat necontrolat sau dietă săracă în glucide, ficatul produce mult acetil-CoA, iar oxalacetatul este deviat spre gluconeogeneză. Excesul de acetil-CoA formează **corpi cetonici**.

| Corp cetonic | Observații |
|---|---|
| **Acetoacetat** | primul format; utilizabil ca sursă de energie |
| **β-hidroxibutirat** | predominant în sânge în cetoacidoză; nu este chimic o cetonă |
| **Acetonă** | formată spontan; eliminată respirator, miros „de fructe” |

- Sinteza (cetogeneza) are loc în **mitocondria hepatică**; enzima reglatoare este **HMG-CoA sintaza mitocondrială**.
- **Ficatul nu poate utiliza corpii cetonici**, deoarece îi lipsește enzima care activează acetoacetatul (succinil-CoA:acetoacetat CoA transferaza, tioforaza).
- Sunt folosiți de mușchi, inimă, rinichi și, după câteva zile de post, de **creier**. Eritrocitele nu îi pot folosi (nu au mitocondrii).

## Reglare
- **Insulina** inhibă lipoliza și cetogeneza; **glucagonul** le stimulează.
- În **cetoacidoza diabetică**, lipsa insulinei duce la lipoliză masivă și producție necontrolată de corpi cetonici.

## Corelații clinice
- **Deficitul de acil-CoA dehidrogenază cu lanț mediu (MCAD)**: hipoglicemie **hipocetozică** în post, la copil.
- **Deficitul de carnitină sau de CPT**: hipoglicemie hipocetozică, slăbiciune musculară.
- Testele urinare cu bandeletă detectează mai ales acetoacetatul, nu β-hidroxibutiratul.

## De reținut pentru examen
- CPT-I este etapa limitantă; malonil-CoA o inhibă.
- Ficatul produce corpi cetonici, dar nu îi folosește.
- β-hidroxibutiratul domină în cetoacidoză, dar bandeleta detectează acetoacetatul.
- Defectele beta-oxidării dau hipoglicemie hipocetozică.
- Eritrocitele nu folosesc acizi grași sau corpi cetonici.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Fatty Acid, Ketone Body, and Triacylglycerol Metabolism',
      'Harper’s Illustrated Biochemistry – Oxidation of Fatty Acids: Ketogenesis',
    ],
  },
  {
    id: 'bio-t6',
    title: 'Metabolismul colesterolului și lipoproteinele',
    topic: 'Metabolismul lipidelor',
    readMinutes: 4,
    content: `## Rolurile colesterolului
- Component al **membranelor celulare**.
- Precursor pentru **acizii biliari**, **hormonii steroizi** (cortizol, aldosteron, hormoni sexuali) și **vitamina D**.
- Este eliminat din organism în principal prin **bilă**, ca acizi biliari și colesterol liber; nucleul steroidic nu poate fi degradat la CO2.

## Biosinteza colesterolului
- Are loc în citosol și reticulul endoplasmatic, mai ales în **ficat**, pornind de la **acetil-CoA**.
- **HMG-CoA reductaza** transformă HMG-CoA în **mevalonat** – **etapa limitantă**.
- Reglarea HMG-CoA reductazei:
  - colesterolul intracelular scade transcripția genei (sistemul **SREBP**) și accelerează degradarea enzimei;
  - **insulina** o activează, **glucagonul** o inhibă (prin fosforilare);
  - **statinele** o inhibă competitiv.
- **Acizii biliari** se formează în ficat; etapa limitantă este catalizată de **7α-hidroxilază**. Ei sunt recirculați prin **circulația enterohepatică**.

## Lipoproteinele
Lipidele insolubile sunt transportate în plasmă în lipoproteine: un miez de trigliceride și esteri de colesterol, înconjurat de fosfolipide, colesterol liber și **apolipoproteine**.

| Lipoproteină | Origine | Conținut principal | Apolipoproteine-cheie | Rol |
|---|---|---|---|---|
| **Chilomicroni** | intestin | trigliceride alimentare | **B-48**, C-II, E | transportă lipidele din dietă spre țesuturi |
| **VLDL** | ficat | trigliceride endogene | **B-100**, C-II, E | transportă trigliceridele hepatice |
| **IDL** | din VLDL | trigliceride și colesterol | B-100, E | precursor al LDL |
| **LDL** | din IDL | **colesterol** | **B-100** | aduce colesterol la țesuturi |
| **HDL** | ficat, intestin | proteine, fosfolipide | **A-I** | **transport invers** al colesterolului spre ficat |

## Enzime și receptori importanți
- **Lipoprotein lipaza** (endoteliul capilar, activată de **apo C-II**) hidrolizează trigliceridele din chilomicroni și VLDL.
- **Receptorul LDL** recunoaște apo B-100 și apo E; LDL intră în celulă prin **endocitoză mediată de receptor**.
- **LCAT** (activată de apo A-I) esterifică colesterolul din HDL.
- **CETP** transferă esteri de colesterol de la HDL la lipoproteinele cu apo B.

## Corelații clinice
- **Hipercolesterolemia familială**: defect al receptorului LDL; LDL foarte crescut, xantoame tendinoase, ateroscleroză precoce.
- **Deficitul de lipoprotein lipază sau de apo C-II**: chilomicroni crescuți, risc de **pancreatită acută**.
- **LDL oxidat** este preluat de macrofage, care devin **celule spumoase** – etapă inițială a plăcii de aterom.

## De reținut pentru examen
- HMG-CoA reductaza – etapa limitantă, ținta statinelor.
- B-48 la chilomicroni, B-100 la VLDL/IDL/LDL, A-I la HDL.
- Apo C-II activează lipoprotein lipaza.
- HDL face transportul invers al colesterolului.
- Hipercolesterolemia familială = defect al receptorului LDL.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Cholesterol, Lipoprotein, and Steroid Metabolism',
      'Harper’s Illustrated Biochemistry – Cholesterol Synthesis, Transport, & Excretion',
    ],
  },
  {
    id: 'bio-t7',
    title: 'Metabolismul aminoacizilor și ciclul ureei',
    topic: 'Metabolismul proteinelor',
    readMinutes: 4,
    content: `## Îndepărtarea grupării amino
Degradarea aminoacizilor începe cu eliminarea azotului, care va fi excretat sub formă de uree.

- **Transaminarea**: gruparea amino trece de pe aminoacid pe **α-cetoglutarat**, formând **glutamat**. Enzimele (aminotransferazele) folosesc **piridoxal-fosfat** (vitamina B6). Exemple: **ALT** (alanin aminotransferaza) și **AST** (aspartat aminotransferaza), markeri ai leziunii hepatice.
- **Dezaminarea oxidativă**: **glutamat dehidrogenaza** eliberează amoniac din glutamat, în mitocondria hepatică.
- **Transportul amoniacului** din țesuturi spre ficat: ca **glutamină** (majoritatea țesuturilor) și ca **alanină** (mușchi, ciclul glucoză–alanină).

## Ciclul ureei
Are loc **numai în ficat**, parțial în mitocondrie, parțial în citosol.

| Etapă | Enzimă | Localizare |
|---|---|---|
| NH3 + CO2 → carbamoil-fosfat | **carbamoil-fosfat sintetaza I** | mitocondrie |
| carbamoil-fosfat + ornitină → citrulină | ornitin transcarbamoilaza | mitocondrie |
| citrulină + aspartat → argininosuccinat | argininosuccinat sintetaza | citosol |
| argininosuccinat → arginină + fumarat | argininosuccinat liaza | citosol |
| arginină → uree + ornitină | arginaza | citosol |

- Ureea conține doi atomi de azot: unul din **amoniac**, celălalt din **aspartat**.
- **CPS I** este enzima reglatoare și este activată obligatoriu de **N-acetilglutamat**.
- Fumaratul face legătura cu ciclul Krebs (ciclul „bicicletei Krebs”).
- Ciclul consumă energie (ATP).

## Soarta scheletului de carbon
- Aminoacizi **glucogenici**: dau piruvat sau intermediari ai ciclului Krebs, deci pot forma glucoză.
- Aminoacizi **exclusiv cetogenici**: **leucina** și **lizina**.
- Aminoacizi atât glucogenici, cât și cetogenici: fenilalanina, tirozina, triptofanul, izoleucina, treonina.

## Defecte metabolice clasice
| Boală | Defect | Elemente-cheie |
|---|---|---|
| **Fenilcetonuria** | fenilalanin hidroxilaza (sau cofactorul BH4) | dizabilitate intelectuală dacă nu e tratată, miros „de șoarece”, hipopigmentare; tirozina devine esențială |
| **Alcaptonuria** | homogentizat oxidaza | urină care se închide la culoare în repaus, ocronoză, artropatie |
| **Boala urinii cu miros de sirop de arțar** | complexul dehidrogenazei α-cetoacizilor cu lanț ramificat | leucină, izoleucină, valină crescute; afectare neurologică |
| **Homocistinuria** | frecvent cistationin β-sintaza | ectopia cristalinului, tromboze, aspect marfanoid |
| **Deficit de ornitin transcarbamoilază** | ciclul ureei, transmitere X-linkată | hiperamoniemie; acid orotic crescut în urină |

## Hiperamoniemia
Amoniacul în exces este **toxic pentru sistemul nervos**: produce letargie, vărsături, encefalopatie. Cauze: defecte ale ciclului ureei și **insuficiența hepatică**.

## De reținut pentru examen
- Transaminazele folosesc vitamina B6.
- CPS I (mitocondrială) este activată de N-acetilglutamat.
- Azotul ureei provine din NH3 și din aspartat.
- Leucina și lizina sunt exclusiv cetogenice.
- Deficitul de OTC: hiperamoniemie plus acid orotic crescut.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Amino Acids: Disposal of Nitrogen; Degradation and Synthesis',
      'Harper’s Illustrated Biochemistry – Catabolism of Proteins & of Amino Acid Nitrogen',
    ],
  },
  {
    id: 'bio-t8',
    title: 'Metabolismul hemului și al bilirubinei',
    topic: 'Metabolismul porfirinelor',
    readMinutes: 4,
    content: `## Sinteza hemului
Hemul este o protoporfirină care leagă **Fe2+**. Este sintetizat mai ales în **măduva hematogenă** (pentru hemoglobină) și în **ficat** (pentru citocromi). Sinteza începe și se termină în **mitocondrie**, cu etapele intermediare în citosol.

1. **Glicina + succinil-CoA → acid δ-aminolevulinic (ALA)**, prin **ALA sintaza** – etapa limitantă; necesită **piridoxal-fosfat**.
2. Două molecule de ALA → **porfobilinogen**, prin **ALA dehidrataza**.
3. Urmează formarea inelului porfirinic (porfobilinogen deaminaza etc.).
4. **Ferochelataza** inserează fierul în protoporfirină.

Hemul inhibă prin feedback ALA sintaza în ficat.

| Afecțiune | Enzimă afectată | Elemente clasice |
|---|---|---|
| **Intoxicația cu plumb** | ALA dehidrataza și ferochelataza | anemie microcitară, punctații bazofile în eritrocite, ALA crescut |
| **Porfiria acută intermitentă** | porfobilinogen deaminaza | crize de durere abdominală, simptome neuropsihice, **fără fotosensibilitate**; ALA și porfobilinogen crescute în urină |
| **Porfiria cutanată tardivă** | uroporfirinogen decarboxilaza | **fotosensibilitate**, bule pe zonele expuse; cea mai frecventă porfirie |

## Degradarea hemului și formarea bilirubinei
- Eritrocitele senescente sunt captate de **macrofagele splinei** (și ale ficatului, măduvei).
- **Hem oxigenaza** deschide inelul → **biliverdină** (verde), cu eliberare de Fe și **CO**.
- **Biliverdin reductaza** → **bilirubină** (galbenă).
- Bilirubina neconjugată este **liposolubilă** și circulă legată de **albumină**.

## Bilirubina în ficat și intestin
1. **Captarea** de către hepatocit.
2. **Conjugarea** cu acid glucuronic, prin **UDP-glucuronil transferaza** → bilirubină conjugată (**hidrosolubilă**).
3. **Excreția** activă în bilă – etapa limitantă.
4. În intestin, bacteriile o transformă în **urobilinogen**; o parte este reabsorbită și eliminată prin urină (ca urobilină), restul dă **stercobilina**, care colorează scaunul.

## Tipuri de icter
| | Prehepatic (hemolitic) | Hepatocelular | Posthepatic (obstructiv) |
|---|---|---|---|
| Bilirubina predominantă | **neconjugată** | mixtă | **conjugată** |
| Bilirubină în urină | absentă | prezentă | prezentă (urină închisă) |
| Urobilinogen urinar | crescut | variabil | scăzut sau absent |
| Scaun | normal sau hipercolic | variabil | **acolic** (decolorat) |

Bilirubina neconjugată nu apare în urină, fiind legată de albumină.

## Hiperbilirubinemii ereditare
- **Sindromul Gilbert**: activitate redusă a UDP-glucuronil transferazei; icter ușor, neconjugat, declanșat de post sau stres; benign.
- **Crigler–Najjar**: deficit sever (tipul I – absent) al aceleiași enzime; risc de **kernicterus**.
- **Dubin–Johnson** și **Rotor**: defect de excreție, bilirubină **conjugată** crescută; Dubin–Johnson are ficat pigmentat negru.

## De reținut pentru examen
- ALA sintaza – etapa limitantă, necesită vitamina B6.
- Plumbul inhibă ALA dehidrataza și ferochelataza.
- Porfiria acută intermitentă: durere abdominală și semne neuropsihice, fără fotosensibilitate.
- Bilirubina neconjugată nu trece în urină.
- Gilbert și Crigler–Najjar – neconjugată; Dubin–Johnson și Rotor – conjugată.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Conversion of Amino Acids to Specialized Products (Porphyrin Metabolism)',
      'Harper’s Illustrated Biochemistry – Porphyrins & Bile Pigments',
    ],
  },
]
