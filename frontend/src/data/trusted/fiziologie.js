// Fiziologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'fiz-t1',
    title: 'Potențialul de membrană de repaus și potențialul de acțiune',
    topic: 'Fiziologia celulei excitabile',
    readMinutes: 3,
    content: `## Potențialul de membrană de repaus

Orice celulă are o diferență de potențial între interiorul și exteriorul membranei. În celulele excitabile (neuron, fibră musculară) interiorul este **negativ** față de exterior.

Factorii care îl generează:
- **Gradientele de concentrație**: K⁺ este mult mai concentrat intracelular, Na⁺ și Cl⁻ extracelular.
- **Permeabilitatea selectivă**: în repaus membrana este mult mai permeabilă pentru **K⁺** (canale de scurgere), deci potențialul de repaus este apropiat de **potențialul de echilibru al K⁺**.
- **Pompa Na⁺/K⁺-ATP-ază**: scoate 3 Na⁺ și introduce 2 K⁺; menține gradientele pe termen lung și are o mică contribuție electrogenă directă.
- **Anionii proteici** intracelulari, care nu pot traversa membrana.

Potențialul de echilibru al unui ion se calculează cu **ecuația Nernst**; potențialul rezultat din mai mulți ioni, cu **ecuația Goldman-Hodgkin-Katz**.

## Potențialul de acțiune (neuron)

Este o inversare rapidă și tranzitorie a polarității, de tip **„tot sau nimic”**.

1. **Stimul** care depolarizează membrana până la **prag**.
2. **Depolarizare**: se deschid **canalele de Na⁺ voltaj-dependente** → influx rapid de Na⁺ (feedback pozitiv), interiorul devine pozitiv (overshoot).
3. **Repolarizare**: canalele de Na⁺ se **inactivează**, iar canalele de K⁺ voltaj-dependente (mai lente) se deschid → efflux de K⁺.
4. **Hiperpolarizare postpotențial**: canalele de K⁺ rămân deschise un timp, potențialul coboară sub cel de repaus.

## Perioadele refractare

| Perioadă | Mecanism | Consecință |
|---|---|---|
| Refractară **absolută** | canalele de Na⁺ sunt deschise sau inactivate | niciun stimul nu declanșează un nou potențial |
| Refractară **relativă** | o parte din canalele de Na⁺ și-au revenit, K⁺ încă iese | doar un stimul mai puternic decât normal răspunde |

Perioada refractară limitează frecvența descărcărilor și asigură **propagarea unidirecțională**.

## Propagarea

- În fibrele **amielinice**: propagare continuă, lentă.
- În fibrele **mielinice**: **conducere saltatorie** de la un nod Ranvier la altul – rapidă și economică energetic.
- Viteza crește cu **diametrul** fibrei și cu gradul de **mielinizare**.

## Influența ionilor extracelulari

- **Hiperkaliemia** depolarizează membrana de repaus; inițial crește excitabilitatea, apoi, prin inactivarea canalelor de Na⁺, o scade.
- **Hipocalcemia** scade pragul canalelor de Na⁺ → hiperexcitabilitate neuromusculară (tetanie).
- **Anestezicele locale** blochează canalele de Na⁺ voltaj-dependente.

## De reținut pentru examen
- Potențialul de repaus este determinat în principal de permeabilitatea pentru **K⁺**, nu direct de pompă.
- Depolarizarea = intrare de **Na⁺**; repolarizarea = ieșire de **K⁺**.
- Pompa Na⁺/K⁺ nu produce potențialul de acțiune; menține gradientele.
- Hipocalcemia → hiperexcitabilitate (semnele Chvostek și Trousseau).
- Conducerea saltatorie apare doar în fibrele mielinice.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Membrane Potentials and Action Potentials',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 12, Nervous Tissue',
    ],
  },
  {
    id: 'fiz-t2',
    title: 'Sinapsa și placa neuromusculară',
    topic: 'Fiziologia celulei excitabile',
    readMinutes: 3,
    content: `## Tipuri de sinapse

| Caracteristică | Sinapsa **electrică** | Sinapsa **chimică** |
|---|---|---|
| Structură | joncțiuni gap (conexine) | fantă sinaptică, vezicule cu neurotransmițător |
| Transmitere | directă, curent ionic | prin mediator chimic |
| Întârziere sinaptică | practic absentă | prezentă |
| Sens | adesea bidirecțional | **unidirecțional** |
| Exemple | miocard, musculatură netedă viscerală | majoritatea sinapselor din SNC, placa motorie |

## Etapele transmiterii chimice

1. Potențialul de acțiune ajunge la **butonul presinaptic**.
2. Se deschid **canalele de Ca²⁺ voltaj-dependente** → influx de Ca²⁺.
3. Ca²⁺ declanșează **exocitoza** veziculelor (proteine SNARE).
4. Neurotransmițătorul difuzează și se leagă de **receptori postsinaptici**: ionotropi (canale ionice, efect rapid) sau metabotropi (cuplați cu proteine G, efect lent și prelungit).
5. Efectul se termină prin **degradare enzimatică**, **recaptare** presinaptică sau difuziune.

## Potențiale postsinaptice

- **PPSE** (excitator): depolarizare locală, de obicei prin intrare de Na⁺ (ex. glutamat).
- **PPSI** (inhibitor): hiperpolarizare, prin intrare de Cl⁻ sau ieșire de K⁺ (ex. GABA, glicină).
- Sunt **gradate**, nu „tot sau nimic”, și se adună prin **sumație temporală** și **spațială**. Neuronul descarcă dacă la conul axonal se atinge pragul.

## Placa neuromusculară

Sinapsă chimică specializată între motoneuronul α și fibra musculară scheletică.

- Mediator: **acetilcolina**, receptori **nicotinici** pe membrana postsinaptică (canale cationice).
- Rezultă **potențialul de placă**, care în mod normal depășește întotdeauna pragul → transmitere de tip unu-la-unu (mare **factor de siguranță**).
- Potențialul de acțiune se propagă pe sarcolemă și în **tubii T**, activează receptorii dihidropiridinici, care cuplează cu **receptorii de rianodină** ai reticulului sarcoplasmic → eliberare de Ca²⁺ → contracție (**cuplarea excitație–contracție**).
- Acetilcolina este hidrolizată rapid de **acetilcolinesteraza** din fantă.

## Corelații clinice

| Afecțiune / substanță | Mecanism |
|---|---|
| **Miastenia gravis** | autoanticorpi împotriva receptorilor nicotinici postsinaptici |
| **Sindromul Lambert-Eaton** | anticorpi împotriva canalelor de Ca²⁺ presinaptice |
| **Toxina botulinică** | blochează eliberarea acetilcolinei |
| **Inhibitorii de acetilcolinesterază** | cresc acetilcolina în fantă (folosiți în miastenie) |
| **Curarizantele nedepolarizante** | antagoniști competitivi ai receptorilor nicotinici |

## De reținut pentru examen
- Eliberarea neurotransmițătorului depinde de **Ca²⁺**, nu de Na⁺.
- Receptorii plăcii motorii sunt **nicotinici**, nu muscarinici.
- Miastenia: oboseală care se **agravează** la efort; Lambert-Eaton: forța se **ameliorează** la efort repetat.
- PPSE/PPSI sunt gradate și se sumează; potențialul de acțiune este „tot sau nimic”.
- Sinapsa chimică introduce o întârziere și impune sensul unic al transmiterii.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Neuromuscular Transmission; Synapses',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 10 și 12',
    ],
  },
  {
    id: 'fiz-t3',
    title: 'Electrofiziologia cardiacă și ECG de bază',
    topic: 'Fiziologia aparatului cardiovascular',
    readMinutes: 3,
    content: `## Țesutul excitoconductor

Ordinea normală a activării: **nodul sinoatrial** → atrii → **nodul atrioventricular** → **fasciculul His** → ramurile dreaptă și stângă → **rețeaua Purkinje** → miocardul ventricular.

- Nodul **sinoatrial** are cea mai mare frecvență de descărcare spontană → este **pacemaker-ul** normal.
- Nodul **atrioventricular** conduce **lent**, permițând umplerea ventriculilor după sistola atrială.
- Rețeaua Purkinje conduce cel mai rapid, asigurând contracția aproape simultană a ventriculilor.

## Potențialul de acțiune – comparație

| Fază | Miocard de lucru (ventricul) | Celulă nodală (SA, AV) |
|---|---|---|
| Faza 4 | stabilă, potențial de repaus | **depolarizare diastolică lentă** (curentul „funny” Iᶠ, apoi Ca²⁺) |
| Faza 0 | rapidă, prin **Na⁺** | lentă, prin **Ca²⁺** (tip L) |
| Faza 1 | repolarizare precoce scurtă (K⁺) | absentă |
| Faza 2 | **platou**: intrare Ca²⁺ echilibrată de ieșire K⁺ | absentă |
| Faza 3 | repolarizare prin K⁺ | repolarizare prin K⁺ |

Platoul prelungește **perioada refractară**, astfel încât miocardul **nu poate fi tetanizat**.

## Controlul autonom

- **Simpaticul** (noradrenalină, receptori β1): crește frecvența (cronotrop +), conducerea AV (dromotrop +), contractilitatea (inotrop +).
- **Parasimpaticul** (vag, acetilcolină, receptori M2): scade frecvența și încetinește conducerea AV; efect inotrop redus asupra ventriculilor.

## Electrocardiograma – undele

| Element | Semnificație |
|---|---|
| **Unda P** | depolarizarea atriilor |
| **Intervalul PR** | timpul de conducere atrioventriculară |
| **Complexul QRS** | depolarizarea ventriculilor (repolarizarea atrială este mascată aici) |
| **Segmentul ST** | ventriculii complet depolarizați |
| **Unda T** | repolarizarea ventriculilor |
| **Intervalul QT** | sistola electrică ventriculară |

## Derivațiile

- **Derivațiile membrelor** (plan frontal): bipolare DI, DII, DIII și unipolare aVR, aVL, aVF.
- **Derivațiile precordiale** (plan orizontal): V1–V6.
- **Axa electrică** se apreciază din derivațiile membrelor.

## Citirea sistematică a unui ECG

1. Ritm: este **sinusal**? (unda P pozitivă în DII, urmată de QRS).
2. Frecvența.
3. Axa electrică.
4. Intervalele PR, QRS, QT.
5. Modificări ale segmentului ST și ale undei T.

## De reținut pentru examen
- Faza 0 a celulei nodale este dată de **Ca²⁺**, nu de Na⁺.
- Nodul AV întârzie conducerea – esențial pentru umplerea ventriculară.
- Repolarizarea atrială nu se vede separat pe ECG.
- Platoul (Ca²⁺) explică perioada refractară lungă și imposibilitatea tetanizării inimii.
- Vagul acționează mai ales asupra nodurilor, nu asupra contractilității ventriculare.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Rhythmical Excitation of the Heart; The Normal Electrocardiogram',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 19, The Cardiovascular System: The Heart',
    ],
  },
  {
    id: 'fiz-t4',
    title: 'Reglarea presiunii arteriale',
    topic: 'Fiziologia aparatului cardiovascular',
    readMinutes: 3,
    content: `## Determinanții presiunii arteriale

**Presiunea arterială medie = debit cardiac × rezistența vasculară periferică totală.**

- **Debitul cardiac** = frecvența cardiacă × volumul-bătaie (influențat de presarcină, postsarcină, contractilitate).
- **Rezistența periferică** depinde mai ales de **calibrul arteriolelor** (rezistența variază invers cu puterea a patra a razei) și de vâscozitatea sângelui.
- **Presiunea pulsului** (diferența sistolică–diastolică) crește când scade complianța arterelor mari (vârstnici).

## Mecanisme pe termen scurt (secunde–minute)

### Baroreflexul
- Receptori de întindere în **sinusul carotidian** (aferențe prin nervul glosofaringian) și **arcul aortic** (aferențe prin nervul vag).
- Centru: **nucleul tractului solitar** din bulb, cu proiecții spre centrii vasomotori.
- Creșterea presiunii → mai multe impulsuri aferente → **inhibiția simpaticului** și **stimularea vagului** → scad frecvența, contractilitatea și rezistența → presiunea revine.
- Scăderea presiunii (ex. ortostatism, hemoragie) produce răspunsul invers.
- Baroreceptorii se **adaptează** la valori susținut crescute, deci nu controlează presiunea pe termen lung.

### Chemoreflexul și răspunsul ischemic central
- Chemoreceptorii periferici (glomusuri carotidiene și aortice) intervin mai ales la presiuni scăzute, prin hipoxie.
- Ischemia bulbară produce o activare simpatică intensă (răspuns de urgență).

## Mecanisme pe termen mediu și lung

### Sistemul renină–angiotensină–aldosteron
- **Renina** este eliberată de aparatul juxtaglomerular la: scăderea presiunii de perfuzie renală, stimulare simpatică β1, scăderea NaCl la macula densa.
- Renina transformă angiotensinogenul în angiotensină I; **enzima de conversie** (mai ales pulmonară) o transformă în **angiotensină II**.
- Angiotensina II: **vasoconstricție**, stimularea secreției de **aldosteron**, a setei și a ADH, retenție renală de Na⁺.

### Alte mecanisme hormonale

| Hormon | Sursă | Efect asupra presiunii |
|---|---|---|
| **Aldosteron** | corticosuprarenală | crește (retenție Na⁺ și apă) |
| **ADH (vasopresină)** | neurohipofiză | crește (retenție de apă, vasoconstricție la concentrații mari) |
| **Peptidul natriuretic atrial** | atrii, la distensie | scade (natriureză, vasodilatație) |

### Rinichiul – controlul pe termen lung
- **Natriureza de presiune**: creșterea presiunii crește excreția de Na⁺ și apă, scăzând volemia până la revenirea presiunii.
- Este mecanismul care stabilește nivelul presiunii pe termen lung.

## Reglarea locală

- **Autoreglarea** fluxului sanguin (creier, rinichi, cord).
- Metaboliți vasodilatatori (CO₂, H⁺, adenozină), oxid nitric endotelial, endotelină.

## De reținut pentru examen
- Baroreceptorii = control rapid, dar se adaptează; rinichiul = control pe termen lung.
- Sinusul carotidian → nervul IX; arcul aortic → nervul X.
- Angiotensina II este un vasoconstrictor puternic și stimulează aldosteronul.
- Peptidul natriuretic atrial se opune sistemului renină–angiotensină–aldosteron.
- Arteriolele sunt principalul sediu al rezistenței periferice.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Nervous Regulation of the Circulation; Role of the Kidneys in Long-Term Control of Arterial Pressure',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 20, Blood Vessels and Circulation',
    ],
  },
  {
    id: 'fiz-t5',
    title: 'Mecanica respirației și schimbul de gaze',
    topic: 'Fiziologia respirației',
    readMinutes: 3,
    content: `## Mecanica ventilației

- **Inspirul** este un proces **activ**: contracția **diafragmului** (principalul mușchi inspirator) și a intercostalilor externi mărește volumul toracic → presiunea intrapleurală devine mai negativă → presiunea alveolară scade sub cea atmosferică → aerul intră.
- **Expirul de repaus** este **pasiv**, prin reculul elastic al plămânului și peretelui toracic.
- Expirul forțat folosește mușchii abdominali și intercostalii interni.
- Presiunea intrapleurală este normal **negativă** pe tot parcursul ciclului respirator în respirația de repaus.

## Complianța și surfactantul

- **Complianța** = variația de volum raportată la variația de presiune; arată ușurința cu care plămânul se destinde.
- Scade în **fibroza pulmonară**; crește în **emfizem** (pierderea fibrelor elastice).
- **Surfactantul** (secretat de pneumocitele de tip II) scade tensiunea superficială alveolară, previne colabarea alveolelor mici și crește complianța. Deficitul său la prematur → **sindromul de detresă respiratorie** al nou-născutului.

## Rezistența căilor aeriene

- Cea mai mare rezistență se află la nivelul **bronhiilor de calibru mediu**, nu la bronhiolele terminale (acestea sunt foarte numeroase, în paralel).
- Bronhoconstricție: parasimpatic, histamină; bronhodilatație: simpatic prin receptori β2.

## Volume și capacități pulmonare

| Parametru | Definiție |
|---|---|
| **Volumul curent** | aerul mobilizat într-o respirație de repaus |
| **Volumul inspirator de rezervă** | aer suplimentar inspirat maximal |
| **Volumul expirator de rezervă** | aer suplimentar expirat maximal |
| **Volumul rezidual** | aerul rămas după expir maxim – **nu se măsoară prin spirometrie simplă** |
| **Capacitatea vitală** | VIR + VC + VER |
| **Capacitatea reziduală funcțională** | VER + VR (volumul la sfârșitul expirului de repaus) |

## Tipare spirometrice

| | **Obstructiv** (astm, BPOC) | **Restrictiv** (fibroză, deformări toracice) |
|---|---|---|
| VEMS | scăzut | scăzut |
| Capacitate vitală | normală sau scăzută | scăzută |
| Raport VEMS/CV | **scăzut** | **normal sau crescut** |

## Schimbul de gaze

- Difuziunea prin membrana alveolo-capilară urmează **legea lui Fick**: proporțională cu suprafața, gradientul de presiune parțială și solubilitatea gazului; invers proporțională cu grosimea membranei.
- CO₂ difuzează mult mai ușor decât O₂ (solubilitate mult mai mare).
- **Raportul ventilație/perfuzie**: spațiul mort (ventilat, neperfuzat) și șuntul (perfuzat, neventilat). Șuntul nu se corectează eficient prin administrare de oxigen.

## Transportul gazelor

- O₂ este transportat aproape în totalitate legat de **hemoglobină**; curba de disociere are formă **sigmoidă**.
- **Deplasarea la dreapta** (scade afinitatea, se cedează mai ușor O₂ țesuturilor): ↑CO₂, ↑H⁺ (efect Bohr), ↑temperatură, ↑2,3-BPG.
- CO₂ este transportat în principal sub formă de **bicarbonat**, apoi ca compuși carbamino și dizolvat.

## De reținut pentru examen
- Inspirul este activ, expirul de repaus pasiv.
- Volumul rezidual și CRF nu se măsoară prin spirometrie simplă.
- Obstructiv = VEMS/CV scăzut; restrictiv = VEMS/CV normal sau crescut.
- Deplasarea curbei la dreapta înseamnă afinitate scăzută a Hb pentru O₂.
- Surfactant deficitar → detresă respiratorie la prematur.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Pulmonary Ventilation; Transport of Oxygen and Carbon Dioxide',
      'West’s Respiratory Physiology: The Essentials',
    ],
  },
  {
    id: 'fiz-t6',
    title: 'Filtrarea glomerulară și funcțiile tubulare',
    topic: 'Fiziologia renală',
    readMinutes: 3,
    content: `## Filtrarea glomerulară

Filtratul se formează prin **bariera de filtrare**: endoteliu fenestrat, **membrana bazală** glomerulară și **podocite** cu diafragme de filtrare. Bariera reține celulele și proteinele mari; sarcinile negative ale membranei rețin preferențial proteinele anionice (albumina).

### Forțele Starling
- **Favorizează filtrarea**: presiunea hidrostatică din capilarul glomerular.
- **Se opun filtrării**: presiunea oncotică din capilar și presiunea hidrostatică din capsula Bowman.
- Rata filtrării glomerulare (**RFG**) depinde de presiunea netă și de coeficientul de filtrare.

### Controlul arteriolar
| Modificare | Efect asupra RFG |
|---|---|
| Constricția arteriolei **aferente** | scade RFG |
| Dilatația arteriolei aferente | crește RFG |
| Constricția arteriolei **eferente** (moderată) | crește RFG |

Angiotensina II contractă preferențial arteriola **eferentă**, menținând RFG când perfuzia renală scade.

### Autoreglarea
- **Mecanismul miogen**: arteriola aferentă se contractă la întindere.
- **Feedbackul tubuloglomerular**: macula densa sesizează NaCl crescut și induce constricție aferentă.
- Mențin RFG relativ constantă într-un interval larg de presiuni arteriale.

### Măsurarea
- **Clearance-ul inulinei** = standardul de referință pentru RFG (filtrată liber, nereabsorbită, nesecretată).
- În practică se folosește **creatinina** (ușor supraestimează RFG, fiind și puțin secretată).

## Funcțiile tubulare – pe segmente

| Segment | Reabsorbție / secreție principală | Note |
|---|---|---|
| **Tubul proximal** | cea mai mare parte din Na⁺, apă, **toată glucoza** și aminoacizii (normal), bicarbonat | reabsorbție izoosmotică |
| **Ansa Henle descendentă** | apă | impermeabilă pentru solviți |
| **Ansa Henle ascendentă groasă** | Na⁺, K⁺, Cl⁻ (cotransportor **NKCC2**) | **impermeabilă pentru apă** – diluează lichidul tubular |
| **Tubul contort distal** | NaCl (cotransportor **NCC**), Ca²⁺ (reglat de PTH) | |
| **Tubul colector** | Na⁺ (aldosteron), secreție de K⁺ și H⁺; **apă (ADH, aquaporine)** | stabilește concentrația finală a urinei |

## Concentrarea urinei

- **Mecanismul contracurent** al ansei Henle creează un interstițiu medular **hiperton**; ureea contribuie la acest gradient.
- **ADH** inserează aquaporine-2 în membrana apicală a tubului colector → reabsorbție de apă → urină concentrată.
- Fără ADH (diabet insipid) → urină diluată, abundentă.

## Glucozuria

Glucoza este reabsorbită în tubul proximal prin transportori saturabili (SGLT). Când încărcarea filtrată depășește **transportul maxim**, apare glucozurie.

## Ținte ale diureticelor (mecanism, fără doze)
- Diureticele de ansă → NKCC2.
- Tiazidele → NCC din tubul distal.
- Antagoniștii aldosteronului și blocanții canalelor de Na⁺ epiteliale → tubul colector (economisesc K⁺).

## De reținut pentru examen
- Angiotensina II contractă preferențial arteriola **eferentă**.
- Ramura ascendentă groasă este impermeabilă pentru apă („segmentul diluant”).
- Tubul proximal reabsorbe cea mai mare parte a filtratului.
- Inulina = referință pentru RFG; creatinina = estimare practică.
- ADH acționează pe tubul colector prin aquaporine-2.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Glomerular Filtration; Renal Tubular Reabsorption and Secretion',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 25, The Urinary System',
    ],
  },
  {
    id: 'fiz-t7',
    title: 'Echilibrul acido-bazic',
    topic: 'Fiziologia renală',
    readMinutes: 3,
    content: `## Principii

Concentrația H⁺ din lichidul extracelular este menținută în limite foarte strânse, deoarece multe proteine și enzime sunt sensibile la pH. Apărarea are trei linii, cu viteze diferite:

| Linie de apărare | Viteză | Exemplu |
|---|---|---|
| **Sistemele tampon** | secunde | bicarbonat/acid carbonic, fosfați, proteine, hemoglobină |
| **Plămânul** | minute | eliminarea CO₂ prin modificarea ventilației |
| **Rinichiul** | ore–zile | excreția H⁺ și regenerarea bicarbonatului |

## Sistemul tampon bicarbonat

- CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (reacție catalizată de **anhidraza carbonică**).
- Este cel mai important tampon extracelular deoarece **ambele componente sunt reglate**: CO₂ de plămân, HCO₃⁻ de rinichi.
- **Ecuația Henderson-Hasselbalch** arată că pH-ul depinde de **raportul HCO₃⁻ / pCO₂**, nu de valorile lor absolute.

## Rolul rinichiului

- **Reabsorbția bicarbonatului filtrat**, mai ales în tubul proximal.
- **Secreția de H⁺** (tubul proximal și celulele intercalate din tubul colector).
- Excreția acidului sub formă de **aciditate titrabilă** (fosfați) și de **amoniu** (NH₄⁺); producția de amoniu poate crește mult în acidoza cronică.
- Fiecare H⁺ excretat legat de un tampon urinar corespunde generării unui **bicarbonat nou**.

## Cele patru tulburări primare

| Tulburare | Modificarea primară | Compensarea |
|---|---|---|
| **Acidoză metabolică** | ↓ HCO₃⁻ | hiperventilație → ↓ pCO₂ |
| **Alcaloză metabolică** | ↑ HCO₃⁻ | hipoventilație → ↑ pCO₂ |
| **Acidoză respiratorie** | ↑ pCO₂ | rinichiul reține HCO₃⁻ |
| **Alcaloză respiratorie** | ↓ pCO₂ | rinichiul elimină HCO₃⁻ |

Compensarea **nu corectează complet** pH-ul și nu îl „depășește”; compensarea respiratorie este rapidă, cea renală durează zile.

## Exemple de cauze

- **Acidoză metabolică**: cetoacidoza diabetică, acidoza lactică, insuficiența renală, diareea (pierdere de bicarbonat).
- **Alcaloză metabolică**: vărsături repetate (pierdere de HCl), unele diuretice, hiperaldosteronism.
- **Acidoză respiratorie**: hipoventilație (BPOC decompensat, depresia centrului respirator).
- **Alcaloză respiratorie**: hiperventilație (anxietate, altitudine, faza inițială a unor afecțiuni pulmonare).

## Gaura anionică

- Gaura anionică = Na⁺ − (Cl⁻ + HCO₃⁻); reflectă anionii nemăsurați.
- **Crescută**: acumulare de acizi (cetoacizi, lactat, toxice, insuficiență renală).
- **Normală (hipercloremică)**: pierderi de bicarbonat (diaree, unele acidoze tubulare renale).

## Legătura cu potasiul

- În **acidoză**, H⁺ intră în celule în schimbul K⁺ → tendință la **hiperkaliemie**.
- În **alcaloză** → tendință la **hipokaliemie**.

## De reținut pentru examen
- pH-ul depinde de raportul HCO₃⁻/pCO₂.
- Diareea → acidoză metabolică cu gaură anionică normală; vărsăturile → alcaloză metabolică.
- Compensarea modifică celălalt parametru în același sens (↓HCO₃⁻ → ↓pCO₂) și nu normalizează complet pH-ul.
- Rinichiul generează bicarbonat nou prin excreția de amoniu și aciditate titrabilă.
- Acidoza tinde să producă hiperkaliemie.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Acid-Base Regulation',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 26, Fluid, Electrolyte, and Acid-Base Balance',
    ],
  },
  {
    id: 'fiz-t8',
    title: 'Axul hipotalamo-hipofizar și glanda tiroidă',
    topic: 'Fiziologie endocrină',
    readMinutes: 3,
    content: `## Organizarea axului

- **Hipotalamusul** controlează **adenohipofiza** prin hormoni eliberatori și inhibitori transportați prin **sistemul port hipotalamo-hipofizar**.
- **Neurohipofiza** nu produce hormoni: depozitează și eliberează **ADH** și **oxitocina**, sintetizați în nucleii supraoptic și paraventricular și transportați pe axoni.

## Hormonii adenohipofizei

| Hormon hipotalamic | Hormon hipofizar | Țintă / efect |
|---|---|---|
| **TRH** | **TSH** | tiroida |
| **CRH** | **ACTH** | corticosuprarenala (cortizol) |
| **GnRH** (pulsatil) | **FSH, LH** | gonade |
| **GHRH** (+), **somatostatina** (−) | **GH** | ficat (IGF-1), creștere, metabolism |
| **Dopamina** (inhibitor) | **Prolactina** | glanda mamară |

Prolactina este singurul hormon adenohipofizar aflat sub **control predominant inhibitor**; secționarea tijei hipofizare o crește, în timp ce ceilalți hormoni scad.

## Feedbackul negativ

Hormonul periferic inhibă secreția hormonului hipotalamic și a celui hipofizar. Această logică permite localizarea leziunii:
- **Hipotiroidism primar** (tiroida): T4 scăzut, **TSH crescut**.
- **Hipotiroidism central** (hipofiză/hipotalamus): T4 scăzut, TSH scăzut sau inadecvat normal.

## Glanda tiroidă – sinteza hormonilor

1. **Captarea iodului** prin simportul Na⁺/I⁻ al celulei foliculare.
2. **Oxidarea** iodului și **organificarea** (legarea de resturile de tirozină din **tireoglobulină**) – catalizate de **tiroperoxidază**.
3. **Cuplarea** iodotirozinelor → T4 și T3.
4. Depozitare în **coloid**; la stimulare, endocitoza tireoglobulinei și eliberarea hormonilor.

- Tiroida secretă mai ales **T4**; **T3** este forma activă, obținută în mare parte prin **deiodare periferică**.
- În sânge, hormonii circulă majoritar **legați de proteine**; fracția **liberă** este cea activă.
- TSH stimulează toate etapele și determină creșterea glandei.

## Efectele hormonilor tiroidieni

- Cresc **metabolismul bazal**, consumul de O₂ și termogeneza.
- **Cardiovascular**: cresc frecvența și debitul cardiac, potențează efectele catecolaminelor.
- **Dezvoltare**: esențiali pentru maturarea **sistemului nervos** și creșterea osoasă; deficitul congenital netratat duce la retard mintal și de creștere.
- Metabolism: cresc lipoliza, glicogenoliza, turnover-ul proteic.

## Hiper- vs. hipotiroidism

| Semn | **Hipertiroidism** | **Hipotiroidism** |
|---|---|---|
| Greutate | scădere, cu apetit crescut | creștere |
| Toleranța la temperatură | intoleranță la căldură | intoleranță la frig |
| Frecvența cardiacă | tahicardie | bradicardie |
| Tegument | cald, umed | uscat, rece |
| Tranzit | accelerat | constipație |
| Reflexe | vii | relaxare întârziată |

## De reținut pentru examen
- TSH este cel mai sensibil test de screening în disfuncția tiroidiană primară.
- T3 este forma activă; T4 este forma secretată predominant.
- Prolactina este inhibată tonic de dopamină.
- ADH și oxitocina se sintetizează în hipotalamus, nu în hipofiză.
- Hipotiroidismul congenital netratat afectează ireversibil dezvoltarea neurologică.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Pituitary Hormones and Their Control by the Hypothalamus; Thyroid Metabolic Hormones',
      'OpenStax Anatomy and Physiology 2e (CC BY 4.0) – cap. 17, The Endocrine System',
    ],
  },
]
