// Biofizică – rezumate verificate (echipa Steto)
export default [
  {
    id: 'bfz-t1',
    title: 'Difuzia, osmoza și presiunea osmotică',
    topic: 'Difuzia și osmoza',
    readMinutes: 3,
    content: `## Difuzia

Difuzia este deplasarea spontană a particulelor dintr-o zonă cu concentrație mare spre una cu concentrație mică, datorită agitației termice. Se oprește când concentrația se egalizează.

**Legea lui Fick** descrie fluxul difuziv. Fluxul crește cu:
- **gradientul de concentrație** (diferența dintre cele două părți ale membranei);
- **suprafața** de schimb;
- **permeabilitatea** membranei pentru substanța respectivă.

Fluxul scade când **grosimea** membranei crește. De aceea alveola, cu un perete foarte subțire și suprafață imensă, este adaptată schimbului de gaze, iar îngroșarea peretelui (de exemplu prin fibroză sau edem) îl îngreunează.

La traversarea membranei celulare, moleculele liposolubile și gazele trec ușor prin bistratul lipidic. Moleculele polare și ionii au nevoie de canale sau transportori (difuzie facilitată, tot în sensul gradientului).

## Osmoza

Osmoza este difuzia **apei** printr-o membrană semipermeabilă, permeabilă pentru solvent, dar nu pentru solvit. Apa se mișcă spre compartimentul cu **osmolaritate mai mare**, adică cu mai multe particule dizolvate care nu pot traversa.

- **Presiunea osmotică** este presiunea necesară pentru a opri această mișcare.
- Este o proprietate **coligativă**: depinde de **numărul de particule** dizolvate, nu de natura lor.
- **Presiunea oncotică** este componenta datorată proteinelor plasmatice, în special albuminei; ea reține apa în capilare.

## Soluții și celula

| Soluție față de plasmă | Efect asupra eritrocitului |
|---|---|
| **Izotonă** | volum neschimbat |
| **Hipotonă** | intră apă, celula se umflă, posibilă hemoliză |
| **Hipertonă** | iese apă, celula se strânge (crenare) |

Soluția izotonă folosită în practică pentru perfuzie are osmolaritatea apropiată de cea plasmatică, ceea ce evită modificările de volum celular.

## Aplicații medicale

- **Edemul** apare, printre altele, când scade presiunea oncotică (hipoalbuminemie).
- **Dializa** folosește difuzia și ultrafiltrarea prin membrană semipermeabilă pentru a elimina deșeuri.
- **Schimburile capilare**: filtrarea spre interstițiu este favorizată de presiunea hidrostatică, iar reabsorbția de presiunea oncotică.
- Reglarea volumului celular depinde de menținerea gradientelor ionice prin pompe.

## Diferența dintre difuzie și osmoză

Difuzia privește orice substanță care se poate deplasa; osmoza privește exclusiv mișcarea apei prin membrană care reține solvitul. Ambele sunt procese **pasive**, fără consum de ATP.

## De reținut pentru examen

- Fluxul difuziv crește cu gradientul și cu suprafața, **scade** cu grosimea membranei.
- Apa merge spre compartimentul cu osmolaritate **mai mare**.
- Presiunea osmotică depinde de **numărul** de particule, nu de natura lor.
- Soluție hipotonă: celula se **umflă**; hipertonă: se **strânge**.
- Presiunea oncotică (albumina) reține apa în vas; scăderea ei favorizează edemul.
`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Transportul substanțelor prin membrana celulară',
      'Davidovits – Physics in Biology and Medicine – Difuzia și osmoza',
    ],
  },
  {
    id: 'bfz-t2',
    title: 'Potențialul de membrană și potențialul de acțiune',
    topic: 'Potențialul de membrană',
    readMinutes: 3,
    content: `## Originea potențialului de repaus

Interiorul celulelor excitabile este **negativ** față de exterior. Potențialul de repaus apare din combinarea a trei elemente:
- **gradientele ionice**: K⁺ concentrat în interior, Na⁺ și Cl⁻ în exterior;
- **permeabilitatea selectivă**: în repaus membrana este mult mai permeabilă pentru **K⁺**; ieșirea K⁺ lasă în interior sarcini negative necompensate;
- **pompa Na⁺/K⁺-ATP-ază**, care menține gradientele (3 Na⁺ afară, 2 K⁺ înăuntru).

Potențialul de repaus este de aceea apropiat de potențialul de echilibru al K⁺.

## Ecuațiile

- **Nernst**: potențialul de echilibru pentru **un singur ion**, în funcție de raportul concentrațiilor.
- **Goldman-Hodgkin-Katz**: potențialul de membrană când mai mulți ioni traversează membrana, ponderați de permeabilitățile lor.

## Potențialul de acțiune

Este o modificare rapidă, tranzitorie, de tip **tot sau nimic**.

1. **Depolarizare până la prag**: dacă stimulul ajunge la prag, se deschid canalele de **Na⁺ voltaj-dependente**.
2. **Faza ascendentă**: influx rapid de Na⁺, potențialul devine pozitiv.
3. **Repolarizare**: canalele de Na⁺ se inactivează, iar canalele de **K⁺ voltaj-dependente** se deschid, cu ieșire de K⁺.
4. **Postpotențial de hiperpolarizare**: K⁺ continuă să iasă un timp scurt.
5. Pompa restabilește treptat gradientele ionice.

## Perioadele refractare

| Perioadă | Ce se întâmplă |
|---|---|
| **Absolută** | niciun stimul nu declanșează alt potențial de acțiune; canalele de Na⁺ sunt deschise sau inactivate |
| **Relativă** | un stimul mai puternic decât normal poate declanșa un potențial |

Refractaritatea determină sensul unic de propagare și limitează frecvența descărcărilor.

## Propagarea

Potențialul de acțiune se propagă fără atenuare, prin depolarizarea succesivă a zonelor vecine. Viteza crește cu **diametrul** axonului și cu **mielinizarea**. În fibrele mielinizate, impulsul „sare” de la un nod Ranvier la altul (**conducere saltatorie**), ceea ce este rapid și economic energetic.

## Aplicații clinice

- Variațiile concentrației extracelulare de K⁺ modifică potențialul de repaus și excitabilitatea celulelor, cu efecte cardiace și musculare.
- Anestezicele locale blochează canalele de Na⁺, deci împiedică producerea și propagarea impulsului.
- Demielinizarea încetinește sau blochează conducerea.

## De reținut pentru examen

- Potențialul de repaus se apropie de echilibrul **K⁺**; vârful potențialului de acțiune se apropie de cel al **Na⁺**.
- Depolarizarea = **influx de Na⁺**; repolarizarea = **eflux de K⁺**.
- Nernst = un ion; Goldman = mai mulți ioni.
- Refractaritatea absolută se datorează **inactivării canalelor de Na⁺**.
- Mielina crește viteza prin conducere **saltatorie**.
`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Potențialele de membrană și potențialele de acțiune',
      'Kandel – Principles of Neural Science – Semnalizarea electrică a neuronilor',
    ],
  },
  {
    id: 'bfz-t3',
    title: 'Radiațiile ionizante și radioprotecția',
    topic: 'Radiații ionizante și radioprotecție',
    readMinutes: 3,
    content: `## Ce sunt radiațiile ionizante

Sunt radiații cu energie suficientă pentru a smulge electroni din atomi sau molecule, formând **ioni**. Acest lucru poate deteriora molecule biologice, mai ales ADN-ul.

| Tip | Natură | Penetrare |
|---|---|---|
| **Alfa** | particule grele, încărcate pozitiv | foarte mică, oprite de hârtie sau piele |
| **Beta** | electroni sau pozitroni | moderată, oprite de straturi subțiri de material |
| **Gamma și X** | unde electromagnetice | mare, necesită ecrane dense (plumb, beton) |
| **Neutroni** | particule neutre | mare |

Radiațiile neionizante (lumina vizibilă, infraroșul, microundele, undele radio) nu au energie suficientă pentru ionizare. Ultrasunetele nu sunt radiații electromagnetice, ci unde mecanice.

## Mărimi și unități

- **Activitatea** unei surse se măsoară în becquerel (Bq).
- **Doza absorbită**: energia cedată pe unitatea de masă, în **gray (Gy)**.
- **Doza echivalentă și efectivă** țin cont de tipul radiației și de radiosensibilitatea țesuturilor, în **sievert (Sv)**.
- **Timpul de înjumătățire** este timpul după care activitatea unui radioizotop scade la jumătate.

## Efecte biologice

- **Directe**: lezarea moleculelor lovite de radiație (rupturi ale ADN).
- **Indirecte**: radioliza apei produce radicali liberi care atacă ADN-ul și alte molecule; acest mecanism este important în țesuturi.
- **Deterministe** (cu prag): apar peste o anumită doză și se agravează cu doza (de exemplu eritem, boala de iradiere).
- **Stocastice** (fără prag cert): probabilitatea crește cu doza, de exemplu cancerul radioindus și mutațiile ereditare.

**Legea Bergonié-Tribondeau**: celulele cu diviziune rapidă și slab diferențiate sunt cele mai radiosensibile (măduva hematopoietică, epiteliul intestinal, gonade). Țesuturile cu celule diferențiate, în repaus, sunt mai radiorezistente.

## Radioprotecția

Principiile de bază:
- **Timp**: expunere cât mai scurtă.
- **Distanță**: intensitatea scade rapid cu distanța față de sursa punctiformă.
- **Ecranare**: materiale adecvate (plumb pentru X și gamma).

Se adaugă **justificarea** oricărei expuneri medicale, **optimizarea** (cea mai mică doză compatibilă cu scopul diagnostic) și **monitorizarea** personalului prin dozimetre. Gravidele și copiii necesită atenție specială.

## Utilizări medicale

Radiodiagnostic (radiografie, CT), medicină nucleară (scintigrafie, PET) și radioterapie, unde radiosensibilitatea celulelor tumorale este folosită terapeutic.

## De reținut pentru examen

- **Alfa** = cea mai puțin penetrantă, dar periculoasă dacă sursa este inhalată sau ingerată.
- Gray = doză absorbită; **sievert** = doză echivalentă/efectivă.
- Radiosensibile: măduva, intestinul, gonadele; radiorezistente: țesuturile diferențiate.
- Radioprotecție = **timp, distanță, ecranare**.
- Ultrasunetele și RMN **nu** sunt ionizante.
`,
    references: [
      'Davidovits – Physics in Biology and Medicine – Radiații și efectele lor',
      'Hall and Giaccia – Radiobiology for the Radiologist – Interacțiunea radiațiilor cu materia',
    ],
  },
  {
    id: 'bfz-t4',
    title: 'Ultrasunetele, CT și RMN: principiile imagisticii medicale',
    topic: 'Ultrasunete',
    readMinutes: 3,
    content: `## Ultrasunetele și ecografia

Ultrasunetele sunt **unde mecanice** cu frecvență peste limita superioară a auzului uman. Se propagă doar printr-un **mediu material**, nu prin vid.

Un traductor piezoelectric emite impulsuri scurte și recepționează ecourile. La fiecare **interfață** dintre medii cu **impedanță acustică** diferită o parte din undă se reflectă. Timpul de întoarcere indică adâncimea, iar intensitatea ecoului, natura interfeței.

- **Gelul** elimină aerul dintre sondă și piele, deoarece interfața aer-țesut reflectă aproape tot fasciculul.
- Osul și aerul din plămâni limitează explorarea ecografică, deoarece reflectă sau absorb puternic undele.
- **Efectul Doppler**: frecvența ecoului se modifică la reflexia pe structuri în mișcare (hematii); permite evaluarea direcției și vitezei fluxului sanguin.
- Metoda nu folosește radiații ionizante și este potrivită pentru sarcină, inimă, abdomen și vase.

## Tomografia computerizată (CT)

Folosește **raze X** emise din unghiuri multiple. Detectorii măsoară atenuarea fasciculului, iar un calculator reconstruiește imagini în secțiune. Țesuturile dense atenuează mai mult. Oferă bună rezoluție pentru os, plămân și urgențe, dar implică **doză de radiații ionizante**.

## Rezonanța magnetică nucleară (RMN)

- Pacientul este plasat într-un **câmp magnetic intens**.
- Nucleii de **hidrogen** (protoni), abundenți în apă și grăsime, se aliniază câmpului.
- Impulsurile de **radiofrecvență** îi excită; la revenire ei emit semnal, folosit pentru imagine.
- Contrastul diferă între țesuturi după conținutul în apă și proprietățile de relaxare.

| Metodă | Principiu | Radiații ionizante |
|---|---|---|
| Ecografie | ecouri ale ultrasunetelor | nu |
| CT | atenuarea razelor X | da |
| RMN | protoni în câmp magnetic și radiofrecvență | nu |

RMN este foarte bun pentru țesuturi moi (creier, măduvă, articulații). Obiectele metalice feromagnetice și unele dispozitive implantate pot reprezenta contraindicații.

## ECG, pe scurt

Electrocardiograma înregistrează de la suprafața corpului variațiile de potențial produse de activitatea electrică cardiacă: **P** (depolarizare atrială), **QRS** (depolarizare ventriculară), **T** (repolarizare ventriculară).

## De reținut pentru examen

- Ultrasunetele sunt unde **mecanice**, nu electromagnetice, și nu ionizează.
- Gelul exclude **aerul**, reflector puternic.
- CT = raze X (ionizant); RMN = câmp magnetic și radiofrecvență (neionizant).
- Semnalul RMN provine în principal de la **protonii** din apă și grăsime.
- Doppler = evaluarea fluxului prin modificarea frecvenței ecoului.
`,
    references: [
      'Davidovits – Physics in Biology and Medicine – Sunetul, ultrasunetele și imagistica',
      'Guyton and Hall Textbook of Medical Physiology – Electrocardiograma normală',
    ],
  },
]
