// Farmacologie clinică – rezumate verificate (echipa Steto)
export default [
  {
    id: 'fcl-t1',
    title: 'Interacțiunile medicamentoase',
    topic: 'Interacțiuni',
    readMinutes: 3,
    content: `## Definiție și importanță

O **interacțiune medicamentoasă** apare când efectul unui medicament este modificat de alt medicament, de alimente, de alcool sau de produse din plante. Riscul crește cu **numărul de medicamente**, vârsta, bolile renale și hepatice și cu folosirea medicamentelor cu **index terapeutic îngust**.

## Interacțiuni farmacocinetice

Modifică **concentrația** medicamentului la locul de acțiune.

- **Absorbție**: antiacidele, sărurile de calciu sau fier formează complecși cu tetraciclinele și fluorochinolonele și le scad absorbția – se distanțează administrările.
- **Distribuție**: deplasarea de pe proteinele plasmatice – rareori relevantă clinic singură.
- **Metabolizare** (cea mai importantă): prin enzimele citocromului P450, în special **CYP3A4**.
  - **Inductorii** cresc metabolizarea și **scad** efectul altor medicamente; efectul se instalează și dispare treptat.
  - **Inhibitorii** scad metabolizarea și **cresc** concentrația, cu risc de toxicitate; efectul apare rapid.
- **Eliminare renală**: competiția pentru secreția tubulară sau modificarea reabsorbției (ex. diureticele tiazidice și AINS scad eliminarea litiului).

| Inductori | Inhibitori |
|---|---|
| rifampicina | claritromicina, eritromicina |
| carbamazepina, fenitoina, fenobarbitalul | antifungicele azolice (fluconazol, ketoconazol) |
| sunătoarea | unii inhibitori de protează |
| fumatul (pentru unele substraturi) | sucul de grepfrut |

## Interacțiuni farmacodinamice

Medicamentele acționează asupra **aceluiași efect**, fără să-și modifice concentrațiile.

- **Sinergism/aditivitate**: AINS + anticoagulant → risc hemoragic; IEC + spironolactonă → **hiperkaliemie**; benzodiazepine + opioide + alcool → deprimare respiratorie; mai multe medicamente care prelungesc QT → aritmii.
- **Antagonism**: beta-blocant neselectiv + beta-agonist în astm; AINS reduc efectul antihipertensivelor.
- **„Triple whammy”**: IEC/sartan + diuretic + AINS → insuficiență renală acută.

## Exemple clinice clasice

| Asociere | Consecință |
|---|---|
| warfarină + fluconazol/claritromicină | INR crescut, sângerare |
| simvastatină + claritromicină | miopatie, rabdomioliză |
| contraceptive orale + rifampicină | eșec contraceptiv |
| litiu + diuretic tiazidic/AINS | toxicitate prin litiu |
| IEC + spironolactonă | hiperkaliemie |

## Prevenție

- **Anamneza medicamentoasă completă**, inclusiv produse fără prescripție și suplimente.
- Verificarea interacțiunilor (rezumatul caracteristicilor produsului, baze de date) la orice medicament nou.
- Alegerea alternativelor fără interacțiune, ajustarea dozelor, **monitorizare** (INR, potasiu, creatinină, concentrații plasmatice).
- Informarea pacientului.

## De reținut pentru examen

- Inductorii scad, inhibitorii cresc concentrația altor medicamente.
- Sunătoarea este inductor; sucul de grepfrut este inhibitor.
- Hiperkaliemia: IEC/sartani + diuretice economizatoare de potasiu sau suplimente de potasiu.
- Medicamentele cu index terapeutic îngust (warfarină, litiu, digoxină) sunt cele mai vulnerabile.`,
    references: ['Stockley’s Drug Interactions – Principii generale', 'Katzung – Basic & Clinical Pharmacology – Drug interactions'],
  },
  {
    id: 'fcl-t2',
    title: 'Reacțiile adverse și farmacovigilența',
    topic: 'Siguranța medicamentului',
    readMinutes: 3,
    content: `## Definiții

- **Reacție adversă la medicament**: un răspuns nociv și neintenționat la un medicament.
- **Eveniment advers**: orice incident nefavorabil apărut în timpul tratamentului, fără ca legătura cauzală să fie stabilită.
- **Reacție adversă gravă**: duce la deces, pune viața în pericol, necesită sau prelungește spitalizarea, produce dizabilitate sau anomalii congenitale.

## Clasificarea reacțiilor adverse

| Tip | Caracteristici | Exemple |
|---|---|---|
| **A** (augmented) | dependente de doză, previzibile din mecanism, frecvente | hipoglicemie la insulină, sângerare la anticoagulante, bradicardie la beta-blocante |
| **B** (bizarre) | imprevizibile, idiosincrazice sau imunologice, rare, adesea grave | anafilaxie la penicilină, sindrom Stevens-Johnson, hipertermie malignă |
| **C** (chronic) | legate de utilizarea îndelungată | supresie corticosuprarenaliană la corticoterapie |
| **D** (delayed) | apar tardiv | teratogeneză, carcinogeneză |
| **E** (end of use) | la întreruperea bruscă | sindrom de sevraj, efect de rebound |
| **F** (failure) | eșec terapeutic | interacțiune cu un inductor enzimatic |

## Recunoașterea unei reacții adverse

- Orice simptom nou la un pacient tratat poate fi o reacție adversă – se întreabă mereu **ce medicamente** ia și **de când**.
- Elemente de cauzalitate: **relația temporală**, ameliorarea la oprire (**dechallenge**), reapariția la reintroducere (**rechallenge**), existența altor cauze, reacția cunoscută pentru acel medicament.
- Scale de evaluare a cauzalității (ex. scala Naranjo, criteriile OMS) clasifică reacția ca sigură, probabilă, posibilă sau improbabilă.

## Farmacovigilența

Studiile clinice dinaintea autorizării includ un număr limitat de pacienți, pe perioade scurte, cu excluderea multor grupe (vârstnici, gravide, comorbidități). De aceea **reacțiile rare** sau tardive se descoperă după punerea pe piață.

- **Raportarea spontană** este pilonul farmacovigilenței.
- Se raportează **suspiciunea**; nu este necesară certitudinea cauzalității.
- Prioritar: reacțiile **grave**, **neașteptate** (nedescrise în prospect) și cele la **medicamentele noi** (marcate în UE cu **triunghi negru inversat**).
- Pot raporta toți profesioniștii din sănătate și pacienții; în România raportarea se face către **Agenția Națională a Medicamentului și a Dispozitivelor Medicale din România (ANMDMR)**.
- Un raport valid conține minimum: un **pacient identificabil**, un **raportor**, un **medicament suspectat** și o **reacție**.

## Prevenție

- Prescrierea doar la indicație clară, la cea mai mică doză eficace.
- Anamneză despre alergii și reacții anterioare, notate vizibil în documente.
- Atenție la grupele vulnerabile și la interacțiuni.
- Educarea pacientului asupra semnelor care impun oprirea medicamentului și prezentarea la medic.

## De reținut pentru examen

- Tip A = dependent de doză, frecvent; tip B = imprevizibil, imunologic, rar.
- Se raportează și suspiciunea, nu doar certitudinea.
- Triunghiul negru marchează medicamentele sub monitorizare suplimentară.
- Minimum pentru raport: pacient, raportor, medicament, reacție.
- Simptomul nou la pacientul tratat – întâi te gândești la medicament.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Reacții adverse', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Drug toxicity and pharmacovigilance'],
  },
  {
    id: 'fcl-t3',
    title: 'Prescrierea la populații speciale',
    topic: 'Ajustarea tratamentului',
    readMinutes: 4,
    content: `## Insuficiența renală

- Se **estimează funcția renală** (rata de filtrare glomerulară estimată sau clearance-ul creatininei) înainte de prescriere.
- Medicamentele eliminate renal în formă activă se **acumulează**: se reduce **doza de întreținere** sau se prelungește **intervalul**. Doza de încărcare, dependentă de volumul de distribuție, de regulă nu se modifică.
- Se evită **nefrotoxicele** (AINS, aminoglicozide, contrast iodat când există alternative).
- Exemple care cer atenție: aminoglicozide, vancomicină, digoxină, litiu, metformină, heparinele cu greutate moleculară mică, unele anticoagulante orale.

## Insuficiența hepatică

- Scade metabolizarea medicamentelor cu **clearance hepatic** mare și efectul de prim pasaj.
- **Hipoalbuminemia** crește fracția liberă a medicamentelor legate de albumină.
- **Nu există un marker** echivalent creatininei pentru ajustare; se folosesc prudența, dozele mici și monitorizarea clinică.
- Se evită sedativele și opioidele (precipită **encefalopatia**), AINS (sângerare, insuficiență renală) și medicamentele hepatotoxice.

## Vârstnicul

| Modificare | Consecință |
|---|---|
| scăderea funcției renale | acumularea medicamentelor eliminate renal |
| creșterea proporției de grăsime, scăderea apei | medicamentele liposolubile au durată mai lungă |
| sensibilitate crescută a sistemului nervos central | confuzie, căderi la sedative și anticolinergice |
| reflexe baroreceptoare diminuate | hipotensiune ortostatică |

- Creatinina serică poate fi normală la o funcție renală scăzută, din cauza masei musculare reduse.
- **Criteriile Beers și STOPP/START** identifică medicamentele potențial inadecvate și omisiunile.
- Principiul „**start low, go slow**”.

## Copilul

- Copilul nu este un „adult mic”: absorbția, distribuția, metabolizarea și eliminarea se modifică odată cu vârsta.
- Dozele se calculează în funcție de **greutate** sau suprafață corporală.
- Exemple de evitat: **aspirina** (sindrom Reye), **tetraciclinele** la copilul mic (colorarea dinților), fluorochinolonele de rutină.

## Sarcina

- Riscul depinde de **momentul expunerii**: organogeneza din primul trimestru este perioada cea mai vulnerabilă pentru malformații.
- Medicamente teratogene clasice: **izotretinoina**, **valproatul**, **warfarina**, **IEC și sartanii** (mai ales în trimestrele II–III, afectarea rinichiului fetal), **metotrexatul**, talidomida.
- Se preferă medicamentele cu experiență îndelungată de utilizare (ex. paracetamol, insulină, unele antibiotice beta-lactamice).
- La femeile de vârstă fertilă tratate cu teratogene: **contracepție eficientă** și test de sarcină.

## Alăptarea

- Majoritatea medicamentelor trec în lapte în cantități mici; **alăptarea nu se întrerupe automat**.
- Se aleg medicamentele cu date de siguranță, cu timp de înjumătățire scurt, și se urmărește sugarul.
- Sunt contraindicate, de exemplu, citotoxicele și radiofarmaceuticele (temporar).

## De reținut pentru examen

- În boala renală se ajustează doza de întreținere, nu cea de încărcare.
- În boala hepatică nu există un indicator precis pentru ajustare.
- La vârstnic: start low, go slow; atenție la benzodiazepine și anticolinergice.
- Primul trimestru este perioada critică pentru teratogeneză.
- Alăptarea rareori trebuie oprită din cauza unui medicament.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Special aspects of perinatal, pediatric and geriatric pharmacology', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Pharmacokinetics in disease states'],
  },
  {
    id: 'fcl-t4',
    title: 'Prescrierea rațională, polipragmazia și aderența',
    topic: 'Utilizarea rațională a medicamentelor',
    readMinutes: 3,
    content: `## Prescrierea rațională

Ghidul OMS „**Guide to Good Prescribing**” propune o abordare în etape:

1. **definirea problemei** pacientului (diagnosticul);
2. stabilirea **obiectivului terapeutic**;
3. verificarea potrivirii tratamentului ales (eficacitate, siguranță, cost, potrivire pentru pacient);
4. **începerea tratamentului** – prescripție clară, completă;
5. **informarea** pacientului: scop, mod de administrare, durată, efecte adverse, ce face dacă apar;
6. **monitorizarea** și oprirea tratamentului când nu mai este necesar.

Un medicament nou nu este automat mai bun; contează dovezile, siguranța, experiența de utilizare și costul. Prescrierea se face pe **denumirea comună internațională (DCI)**.

## Polipragmazia

- Utilizarea concomitentă a **multor medicamente**, frecvent la vârstnicii cu boli multiple. Mai importantă decât numărul este **polipragmazia inadecvată**: medicamente fără indicație, cu risc mai mare decât beneficiul sau dublări.
- Consecințe: **interacțiuni**, **reacții adverse**, căderi, confuzie, spitalizări, **aderență scăzută**, costuri.
- **Cascada de prescriere**: o reacție adversă interpretată ca boală nouă și tratată cu alt medicament (ex. edeme la amlodipină tratate cu diuretic).
- **Deprescrierea**: reducerea sau oprirea planificată a medicamentelor inutile sau riscante, cu monitorizare și cu acordul pacientului. Instrumente: criteriile **STOPP/START**, criteriile Beers.

## Reconcilierea medicației

Compararea **listei complete** de medicamente (inclusiv fără prescripție și suplimente) la fiecare **tranziție de îngrijire** – internare, transfer, externare – cu identificarea și rezolvarea discrepanțelor: omisiuni, dublări, doze greșite, interacțiuni.

## Monitorizarea terapeutică (dozarea plasmatică)

Justificată când:
- medicamentul are **index terapeutic îngust**;
- există **variabilitate interindividuală** mare;
- concentrația se corelează cu efectul și toxicitatea;
- efectul nu se măsoară ușor clinic.

| Medicament | Motivul monitorizării |
|---|---|
| digoxina | toxicitate (aritmii, tulburări digestive și vizuale) |
| litiul | index îngust, toxicitate neurologică și renală |
| aminoglicozidele, vancomicina | nefro- și ototoxicitate |
| unele antiepileptice | variabilitate mare, toxicitate |

Proba se recoltează la momentul potrivit față de ultima doză, iar rezultatul se interpretează clinic.

## Aderența la tratament

- Măsura în care pacientul urmează recomandările convenite cu medicul. Neaderența este o cauză majoră de eșec terapeutic, mai ales în bolile cronice asimptomatice.
- Cauze: scheme complicate, efecte adverse, cost, lipsa înțelegerii, convingeri despre medicamente, tulburări cognitive.
- Îmbunătățire: **simplificarea schemei**, explicații clare și scrise, **implicarea pacientului** în decizie, discutarea efectelor adverse, organizatoare de pastile, reevaluare periodică, întrebări fără ton acuzator.

## De reținut pentru examen

- Polipragmazia inadecvată, nu doar numărul de medicamente, este problema.
- Cascada de prescriere se recunoaște întrebând „simptomul nou poate fi un efect advers?”.
- Reconcilierea se face la fiecare tranziție de îngrijire.
- Dozarea plasmatică are sens doar la medicamentele cu index îngust și relație concentrație–efect.`,
    references: ['WHO – Guide to Good Prescribing: A Practical Manual', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Principles of therapeutics'],
  },
  {
    id: 'fcl-t5',
    title: 'Anticoagularea și antiagregarea în practică',
    topic: 'Anticoagulare și antiagregare',
    readMinutes: 3,
    content: `## Ideea de bază
**Antiagregantele** acționează pe trombocite (trombul „alb”, arterial), iar **anticoagulantele** pe cascada coagulării (trombul „roșu”, venos și cardiac). Ambele cresc riscul hemoragic, deci fiecare prescriere cântărește beneficiul trombotic față de riscul de sângerare.

## Antiagregante
- **Aspirina** inhibă ireversibil COX-1 plachetar și scade tromboxanul A2; efectul durează cât viața trombocitului.
- **Clopidogrelul** este un prodrog activat hepatic (CYP2C19); blochează ireversibil receptorul **P2Y12**. Variabilitatea genetică și unii inhibitori de CYP2C19 îi pot reduce efectul.
- Asocierea a două antiagregante (dublă antiagregare) se folosește pentru perioade definite, de exemplu după stent coronarian sau sindrom coronarian acut, și crește riscul hemoragic.

## Anticoagulante
| Medicament | Mecanism | Monitorizare | Antidot |
|---|---|---|---|
| Heparina nefracționată | Potențează antitrombina, acțiune largă | aPTT | Protamina |
| Heparinele cu greutate moleculară mică | Predominant anti-Xa | De obicei nu este necesară; atenție în insuficiența renală | Protamina (parțial eficientă) |
| Warfarina | Scade factorii dependenți de vitamina K | **INR** | Vitamina K, concentrat de factori |
| Anticoagulante orale directe | Inhibă factorul Xa sau trombina | Fără monitorizare de rutină; se urmărește funcția renală | Antidoturi specifice pentru unele |

## Warfarina și interacțiunile ei
Warfarina are index terapeutic îngust, răspuns variabil și numeroase interacțiuni.
- **Cresc INR:** antifungicele azolice, metronidazolul, amiodarona, multe antibiotice, alcoolul în exces, boala hepatică.
- **Scad INR:** inductorii enzimatici (rifampicina, carbamazepina, fenobarbitalul, sunătoarea) și aportul crescut de vitamina K din alimente.
- Orice medicament nou impune reverificarea INR; dieta trebuie să fie constantă.
- Warfarina este teratogenă; în sarcină se folosesc heparinele.

## Complicații și riscuri
- **Hemoragia** este complicația principală. Factori de risc: vârsta, insuficiența renală sau hepatică, hipertensiunea necontrolată, asocierea cu AINS sau antiagregante, căderile.
- **Trombocitopenia indusă de heparină**: reacție imună, cu scăderea trombocitelor și risc trombotic paradoxal; se oprește heparina.
- Anticoagulantele orale directe nu se folosesc în protezele valvulare mecanice și se aleg cu atenție în insuficiența renală.

## Principii de practică
- Indicația trebuie documentată și reevaluată periodic.
- Se evită AINS la pacientul anticoagulat; se preferă paracetamolul.
- Educația pacientului: aderență, semne de sângerare, informarea oricărui medic sau stomatolog despre tratament.
- Întreruperea înaintea unei proceduri se planifică în funcție de riscul trombotic și hemoragic.

## De reținut pentru examen
- Warfarina se monitorizează prin INR, heparina nefracționată prin aPTT.
- Antidoturi: vitamina K pentru warfarină, protamina pentru heparină.
- Azolii, metronidazolul și amiodarona cresc INR; rifampicina îl scade.
- Aspirina blochează COX-1, clopidogrelul P2Y12.
- Scăderea trombocitelor sub heparină cu tromboze impune suspiciunea de trombocitopenie indusă de heparină.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Drugs used in disorders of coagulation', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Blood coagulation and anticoagulant, fibrinolytic, and antiplatelet drugs'],
  },
  {
    id: 'fcl-t6',
    title: 'Antibioterapia rațională și rezistența bacteriană',
    topic: 'Antibioterapie rațională',
    readMinutes: 3,
    content: `## De ce contează
Antibioticele sunt singura clasă de medicamente al cărei consum într-o populație afectează eficacitatea pentru toți. Utilizarea excesivă și inadecvată creează **presiune selectivă** care favorizează tulpinile rezistente.

## Pașii alegerii unui antibiotic
- **Este infecția bacteriană?** Infecțiile virale (răceala, majoritatea faringitelor și bronșitelor acute) nu au indicație de antibiotic.
- **Care este focarul și care sunt germenii probabili?** Alegerea pornește de la localizare (urinar, pulmonar, cutanat) și de la contextul comunitar sau asociat îngrijirilor.
- **Recoltează probele înainte** de primul antibiotic, când este posibil (culturi, antibiogramă).
- **Alege agentul** după spectru, penetrare în țesutul țintă, profil de siguranță, alergii, funcție renală și hepatică, sarcină, interacțiuni.
- **Reevaluează** după rezultatele culturilor și evoluția clinică: **de-escaladare** către un spectru mai îngust, trecere de la calea intravenoasă la cea orală când este posibil.
- **Durata** cât mai scurtă eficace, individualizată după infecție.

## Mecanisme de rezistență
| Mecanism | Exemplu |
|---|---|
| Enzime care inactivează antibioticul | Beta-lactamaze, inclusiv cele cu spectru extins |
| Modificarea țintei | PBP2a la MRSA; modificări ribozomale |
| Pompe de eflux | Rezistența la tetracicline, macrolide |
| Scăderea permeabilității | Pierderea porinelor la unele bacili Gram-negativi |

Rezistența se transmite prin mutații sau prin transfer orizontal (plasmide), ceea ce explică răspândirea rapidă.

## Bactericid și bacteriostatic
Beta-lactaminele, aminoglicozidele și fluorochinolonele sunt în general bactericide; tetraciclinele, macrolidele și cloramfenicolul sunt în general bacteriostatice. Distincția contează mai ales la pacientul imunodeprimat sau în infecțiile grave, cum e endocardita.

## Reacții adverse de recunoscut
- **Aminoglicozide:** nefrotoxicitate, ototoxicitate; se monitorizează funcția renală și, la nevoie, concentrațiile.
- **Fluorochinolone:** tendinopatie, prelungirea QT, efecte neuropsihice.
- **Tetracicline:** colorarea dinților și afectarea oaselor la copil, de aceea se evită în sarcină și la copilul mic.
- **Clindamicină, cefalosporine, fluorochinolone:** risc de colită cu Clostridioides difficile.
- **Beta-lactamine:** reacții alergice, de la erupții la anafilaxie.

## Stewardship
Programele de administrare responsabilă a antibioticelor combină ghiduri locale, audit al prescrierilor, restricționarea unor antibiotice de rezervă și educația prescriptorilor și a pacienților. Profilaxia chirurgicală se face cu agent ales după procedură și se limitează la perioada perioperatorie.

## De reținut pentru examen
- Cauza principală a rezistenței este utilizarea inadecvată; infecțiile virale nu se tratează cu antibiotice.
- Culturile se recoltează înainte de antibiotic; tratamentul se reevaluează la rezultate.
- MRSA: PBP2a prin gena mecA.
- Aminoglicozide: nefro- și ototoxicitate; tetracicline: contraindicate în sarcină.
- Diareea severă după antibiotice trebuie să ducă la suspiciunea de infecție cu C. difficile.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Antimicrobial agents (principii generale)', 'Jawetz – Medical Microbiology – Antimicrobial chemotherapy și rezistență'],
  },
  {
    id: 'fcl-t7',
    title: 'Corticoterapia: indicații, efecte adverse și întrerupere',
    topic: 'Corticoterapia',
    readMinutes: 3,
    content: `## Mecanism și efecte
Glucocorticoizii se leagă de receptori intracelulari și modifică transcripția genelor. Efectul terapeutic principal este **antiinflamator și imunosupresor**; efectele metabolice sunt cele care generează majoritatea reacțiilor adverse.

## Indicații frecvente
- Boli inflamatorii și autoimune (artrita reumatoidă, lupus, vasculite), în special la debut sau în pusee.
- Astm și BPOC, prin cale inhalatorie (de fond) sau sistemică în exacerbări severe.
- Reacții alergice severe, ca adjuvant al adrenalinei.
- Afecțiuni dermatologice, digestive inflamatorii (boala Crohn, colita ulcerativă), nefrologice și hematologice cu mecanism imun.
- Insuficiența suprarenală, ca terapie de substituție (hidrocortizon).

## Comparație între preparate
| Preparat | Durata acțiunii | Efect mineralocorticoid |
|---|---|---|
| Hidrocortizon | Scurtă | Semnificativ |
| Prednison, prednisolon, metilprednisolon | Intermediară | Mic |
| Dexametazonă, betametazonă | Lungă | Practic absent |

Prednisonul este un prodrog activat hepatic în prednisolon.

## Efecte adverse
- **Metabolice:** hiperglicemie sau decompensarea diabetului, redistribuirea grăsimii (facies în lună plină), dislipidemie.
- **Osoase și musculare:** osteoporoză, necroză avasculară de cap femural, miopatie proximală.
- **Cardiovasculare și renale:** retenție hidrosalină, hipertensiune, hipokaliemie.
- **Digestive:** gastrită și ulcer, mai ales în asociere cu AINS.
- **Oculare:** cataractă subcapsulară posterioară, glaucom.
- **Imunitare:** infecții oportuniste, reactivarea tuberculozei latente, mascarea semnelor de infecție.
- **Psihice:** insomnie, euforie, depresie, psihoză.
- **Endocrine:** supresia axei hipotalamo-hipofizo-suprarenale, sindrom Cushing iatrogen; la copil, încetinirea creșterii.

## Reducerea riscurilor
- Cea mai mică doză eficace, pentru cea mai scurtă perioadă; calea locală sau inhalatorie când este posibilă.
- Administrare dimineața, unică, când schema o permite.
- Calciu și vitamina D, evaluarea riscului osteoporotic; monitorizarea glicemiei, a tensiunii și a potasiului.
- Protecție gastrică la pacientul cu risc, evitarea asocierii cu AINS.

## Întreruperea
După tratament prelungit, axa suprarenaliană este suprimată. **Oprirea bruscă** poate declanșa **insuficiență corticosuprarenală acută**: slăbiciune, hipotensiune, vărsături, hipoglicemie. Scăderea se face treptat. Pacientul trebuie să știe că în situații de stres major (infecție severă, intervenție chirurgicală) poate avea nevoie de acoperire suplimentară și să poarte o mențiune despre tratament.

## De reținut pentru examen
- Oprirea bruscă a corticoterapiei îndelungate duce la insuficiență suprarenală acută; scăderea este graduală.
- Hidrocortizonul are efect mineralocorticoid marcat; dexametazona aproape deloc.
- Efecte adverse clasice: osteoporoză, hiperglicemie, cataractă, miopatie, infecții.
- Corticoizii asociați cu AINS cresc riscul de ulcer.
- Corticoizii inhalatori pot da candidoză orală; se clătește gura după administrare.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Adrenocorticosteroids and adrenocortical antagonists', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Adrenocorticotropic hormone; adrenocortical steroids'],
  },
  {
    id: 'fcl-t8',
    title: 'Analgezia: scara OMS, AINS și opioide',
    topic: 'Analgezie, AINS și opioide',
    readMinutes: 3,
    content: `## Principii generale
Tratamentul durerii pornește de la evaluarea tipului (nociceptivă, neuropată, mixtă), intensității și cauzei. Recomandările OMS pentru durerea cronică, în special oncologică, sunt: administrare **pe cale orală** când se poate, **la ore fixe**, **după scara analgezică**, individualizat și cu atenție la detalii.

## Scara analgezică OMS
| Treapta | Durere | Medicamente |
|---|---|---|
| I | Ușoară | Paracetamol, AINS (± adjuvanți) |
| II | Moderată | Opioide slabe (codeină, tramadol) ± treapta I |
| III | Severă | Opioide tari (morfină și altele) ± treapta I |

Adjuvanții (antidepresive, antiepileptice, corticoizi) se pot adăuga la orice treaptă; în durerea neuropată, gabapentinoidele și unele antidepresive sunt de primă linie.

## AINS
Inhibă ciclooxigenazele și sinteza de prostaglandine. Riscuri:
- **Gastrointestinale:** dispepsie, ulcer, hemoragie; protecție cu inhibitor de pompă de protoni la pacientul cu risc.
- **Renale:** reducerea fluxului renal, insuficiență renală acută, mai ales la deshidratat sau în asociere cu IEC și diuretic („triple whammy”).
- **Cardiovasculare:** retenție hidrosalină, creșterea tensiunii, risc trombotic la utilizare prelungită.
- **Respiratorii:** bronhospasm la pacientul cu astm sensibil la aspirină.
- **În sarcină:** se evită, mai ales în trimestrul al treilea.
- Se evită asocierea cu anticoagulante.

## Paracetamolul
Analgezic și antipiretic fără efect antiinflamator semnificativ, bine tolerat la dozele terapeutice. În supradoză produce metabolitul toxic NAPQI și necroză hepatică; antidotul este **N-acetilcisteina**.

## Opioide
Acționează pe receptorii mu, kappa și delta.
- **Efecte adverse:** sedare, greață, **constipație**, depresie respiratorie, mioză, retenție urinară, prurit.
- **Constipația nu dezvoltă toleranță**, deci laxativul se prescrie profilactic.
- Toleranța și **dependența fizică** pot apărea; ele nu înseamnă adicție. Opioidele rămân esențiale în durerea oncologică și în cea acută severă.
- **Naloxona** este antagonistul pentru depresia respiratorie din supradozaj.
- Precauție în insuficiența renală și hepatică, la vârstnic și la asocierea cu benzodiazepine sau alcool.
- Tramadolul poate interacționa cu antidepresivele (risc serotoninergic).

## De reținut pentru examen
- Treapta I: paracetamol și AINS; II: opioide slabe; III: opioide tari.
- Constipația opioidă nu are toleranță, de aceea se face profilaxie cu laxativ.
- Naloxona inversează efectele opioidelor; N-acetilcisteina este antidotul paracetamolului.
- IEC, diuretic și AINS împreună cresc riscul de insuficiență renală acută.
- Durerea neuropată răspunde slab la AINS; se folosesc gabapentinoide sau antidepresive.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Opioid analgesics și Nonsteroidal anti-inflammatory drugs', 'WHO – Guidelines for the pharmacological and radiotherapeutic management of cancer pain'],
  },
  {
    id: 'fcl-t9',
    title: 'Reacții adverse grave: anafilaxie, SJS, sindrom serotoninergic, hepatotoxicitate',
    topic: 'Reacții adverse grave',
    readMinutes: 3,
    content: `## Cum se abordează
O reacție adversă gravă pune viața în pericol sau lasă sechele. Pașii comuni: **recunoaștere rapidă**, **oprirea medicamentului suspect**, tratament de susținere și specific, **raportare** în farmacovigilență și **documentarea în fișa pacientului** pentru a evita reexpunerea.

## Anafilaxia
- Reacție de hipersensibilitate imediată, cu debut în minute până la ore după expunere (beta-lactamine, AINS, substanțe de contrast, anestezice, înțepături de insecte).
- Manifestări: urticarie, prurit, angioedem, stridor și bronhospasm, hipotensiune, tahicardie, simptome digestive.
- **Tratament de primă linie: adrenalina intramusculară**; apoi poziționare, oxigen, lichide intravenoase. Antihistaminicele și corticoizii sunt adjuvante și nu înlocuiesc adrenalina.
- Observarea pacientului după episod, deoarece pot apărea reacții bifazice, și educație cu privire la evitarea alergenului.

## Sindromul Stevens-Johnson și necroliza epidermică toxică
- Reacții cutanate severe, mediate imun, cu febră, eroziuni ale mucoaselor, bule și decolare epidermică.
- Medicamente implicate frecvent: alopurinolul, antiepilepticele aromatice (carbamazepina, fenitoina, lamotrigina), sulfamidele antibacteriene, unele AINS.
- Apare de regulă în primele săptămâni de tratament.
- Conduita: **oprire imediată** a medicamentului, internare (uneori în unitate de arși sau terapie intensivă), îngrijirea pielii și a mucoaselor, lichide, prevenirea infecțiilor. Medicamentul nu se mai administrează niciodată.

## Sindromul serotoninergic
- Cauzat de exces de serotonină la nivel sinaptic: ISRS, IMAO, tramadol, linezolid, litiu, triptani, dextrometorfan, mai ales în asociere.
- Triadă: **alterarea stării mentale** (agitație, confuzie), **hiperactivitate autonomă** (tahicardie, hipertermie, transpirații, diaree) și **hiperexcitabilitate neuromusculară** (tremor, mioclonii, clonus, hiperreflexie).
- Tratament: oprirea agenților serotoninergici, măsuri de susținere, răcire, benzodiazepine pentru agitație; tratament specific în cazurile severe, la indicația specialistului.
- Diferă de sindromul neuroleptic malign, în care predomină rigiditatea și evoluția este mai lentă.

## Hepatotoxicitatea medicamentoasă
- Poate fi dependentă de doză (paracetamolul) sau idiosincrazică (izoniazida, valproatul, amiodarona, unele antibiotice).
- Tablouri: citoliză, colestază sau mixtă; manifestări: oboseală, icter, urini închise, transaminaze crescute.
- Conduita: suspiciune la orice pacient cu leziune hepatică nouă și tratament în curs, **oprirea medicamentului**, excluderea altor cauze.
- **N-acetilcisteina** este antidotul pentru paracetamol.

## De reținut pentru examen
- Anafilaxie: adrenalină intramusculară, înaintea oricărui alt medicament.
- SJS/NET: mucoase afectate, oprire imediată, evitare definitivă a medicamentului.
- Sindrom serotoninergic: clonus și hiperreflexie, hipertermie, agitație, după asocieri de medicamente serotoninergice.
- Hepatotoxicitate: oprirea medicamentului; paracetamol, antidot N-acetilcisteină.
- Reacțiile grave se raportează și se notează în foaia pacientului.`,
    references: ['Katzung – Basic & Clinical Pharmacology – Special aspects of toxicology și Drug allergy', 'Goodman & Gilman’s The Pharmacological Basis of Therapeutics – Adverse drug reactions'],
  },
]
