// Farmacologie clinică – rezumate verificate (echipa StudentMed)
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
]
