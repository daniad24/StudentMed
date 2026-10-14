// Farmacologie – rezumate verificate (echipa StudentMed)
export default [
  {
    id: 'far-t1',
    title: 'Farmacodinamie: receptori, agoniști, antagoniști și index terapeutic',
    topic: 'Farmacologie generală',
    readMinutes: 3,
    content: `## Ce studiază farmacodinamia
Farmacodinamia descrie **ce face medicamentul organismului**: ținta moleculară, mecanismul de acțiune și relația dintre concentrație și efect. Farmacocinetica (ADME) descrie invers, ce face organismul cu medicamentul.

## Ținte moleculare
- **Receptori** – proteine care recunosc specific un ligand și transmit un semnal.
- **Enzime** – inhibate reversibil sau ireversibil (ex. aspirina acetilează ireversibil COX).
- **Canale ionice** – blocate sau modulate (ex. blocantele canalelor de calciu).
- **Transportori** – ex. inhibitorii pompei de protoni, inhibitorii recaptării serotoninei.

## Tipuri de receptori
| Tip | Exemplu | Viteză |
|---|---|---|
| Canal ionic activat de ligand | receptor nicotinic, GABA-A | milisecunde |
| Cuplat cu proteina G | receptori adrenergici, muscarinici, opioizi | secunde |
| Cu activitate enzimatică (tirozinkinază) | receptorul insulinei | minute |
| Intracelular (nuclear) | receptori pentru glucocorticoizi, hormoni tiroidieni | ore |

## Agoniști și antagoniști
- **Afinitatea** = capacitatea de a se lega de receptor. **Activitatea intrinsecă (eficacitatea)** = capacitatea de a-l activa după legare.
- **Agonist complet** – afinitate și activitate intrinsecă maximă.
- **Agonist parțial** – nu atinge efectul maxim chiar la ocuparea tuturor receptorilor; în prezența unui agonist complet se comportă ca **antagonist** (ex. buprenorfina la receptorii opioizi).
- **Agonist invers** – produce efect opus agonistului la receptorii cu activitate constitutivă.
- **Antagonist competitiv** – se leagă reversibil la același situs; deplasează curba doză-răspuns **la dreapta**, efectul maxim rămâne neschimbat (poate fi depășit prin creșterea concentrației agonistului).
- **Antagonist necompetitiv / ireversibil** – scade **efectul maxim**, care nu mai poate fi atins (ex. fenoxibenzamina).
- **Antagonism fiziologic** – două substanțe acționează pe receptori diferiți cu efecte opuse (ex. adrenalina vs. histamina în anafilaxie).

## Potență și eficacitate
- **Potența** – cantitatea de medicament necesară pentru un anumit efect; exprimată prin **EC50 / DE50**. Cu cât EC50 e mai mic, cu atât potența e mai mare.
- **Eficacitatea** – efectul maxim (Emax) pe care îl poate produce medicamentul. Clinic, eficacitatea contează mai mult decât potența.

## Index terapeutic
- **Index terapeutic = DT50 / DE50** (doza toxică la 50% din subiecți raportată la doza eficace la 50%).
- Index mic = **fereastră terapeutică îngustă**, necesită monitorizare atentă (uneori a concentrației plasmatice).
- Exemple clasice cu index terapeutic îngust: **digoxina, litiul, warfarina, aminoglicozidele, teofilina, fenitoina**.

## Toleranță și desensibilizare
- **Tahifilaxie** – scăderea rapidă a răspunsului la administrări repetate (ex. nitrați).
- **Toleranță** – scădere progresivă a efectului, care necesită creșterea dozei (ex. opioide).
- **Down-regulation** – scăderea numărului de receptori la stimulare prelungită; **up-regulation** la blocare prelungită (explică fenomenul de rebound la oprirea bruscă a beta-blocantelor).

## De reținut pentru examen
- Antagonist competitiv: curbă deplasată la dreapta, Emax păstrat; necompetitiv: Emax scăzut.
- Potența (EC50) nu este același lucru cu eficacitatea (Emax).
- Agonistul parțial poate antagoniza un agonist complet.
- Digoxina, litiul, warfarina, aminoglicozidele – index terapeutic îngust.
- Oprirea bruscă a beta-blocantelor dă rebound prin up-regulation.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Drug Receptors & Pharmacodynamics',
      'Rang & Dale’s Pharmacology – How drugs act: general principles',
    ],
  },
  {
    id: 'far-t2',
    title: 'Antibiotice beta-lactamice: peniciline, cefalosporine, carbapeneme',
    topic: 'Chimioterapice antimicrobiene',
    readMinutes: 3,
    content: `## Mecanism de acțiune
Toate beta-lactaminele conțin **inelul beta-lactamic** și se leagă de **PBP (proteinele care leagă penicilina)** – transpeptidazele care formează legăturile încrucișate din peptidoglican. Rezultatul este **inhibarea sintezei peretelui celular** și liza bacteriei. Sunt **bactericide**, cu efect **dependent de timp** (contează timpul în care concentrația depășește CMI).

## Mecanisme de rezistență
- **Beta-lactamaze** – enzime care hidrolizează inelul beta-lactamic (cel mai frecvent mecanism); include beta-lactamazele cu spectru extins (**BLSE**) și **carbapenemazele**.
- **PBP modificate** – ex. **PBP2a** la *Staphylococcus aureus* meticilino-rezistent (**MRSA**), PBP alterate la pneumococ.
- **Scăderea permeabilității** (porine) și **pompe de eflux** la Gram-negativi.

## Clase principale
| Clasă | Exemple | Spectru / particularități |
|---|---|---|
| Penicilina G și V | benzilpenicilina | streptococi, *Treponema pallidum*, meningococ; sensibile la beta-lactamaze |
| Peniciline antistafilococice | oxacilina, meticilina | rezistente la penicilinaza stafilococică |
| Aminopeniciline | ampicilina, amoxicilina | spectru lărgit spre unii Gram-negativi, enterococ, *Listeria* |
| Antipseudomonazice | piperacilina | *Pseudomonas aeruginosa* |
| Cefalosporine | generațiile I–V | vezi mai jos |
| Carbapeneme | imipenem, meropenem | spectrul cel mai larg; rezervate infecțiilor severe |
| Monobactami | aztreonam | doar Gram-negativi aerobi |

## Inhibitori de beta-lactamaze
**Acidul clavulanic, sulbactamul, tazobactamul** nu au efect antibacterian semnificativ propriu, dar protejează beta-lactamina (ex. amoxicilină + acid clavulanic, piperacilină + tazobactam).

## Cefalosporinele pe generații (orientativ)
- **Generația I** (cefazolina) – Gram-pozitivi; folosită în profilaxia chirurgicală.
- **Generația a II-a** (cefuroxima) – activitate crescută pe Gram-negativi.
- **Generația a III-a** (ceftriaxona, cefotaxima, ceftazidima) – Gram-negativi, trec bariera hematoencefalică; ceftazidima acoperă *Pseudomonas*.
- **Generația a IV-a** (cefepima) – spectru larg, inclusiv *Pseudomonas*.
- **Generația a V-a** (ceftarolina) – activă pe **MRSA**.
- Nicio cefalosporină nu acoperă **enterococul** sau *Listeria*.

## Reacții adverse
- **Hipersensibilitate** – de la erupții la **anafilaxie**; reactivitatea încrucișată cu cefalosporinele este redusă, dar o anafilaxie anterioară la penicilină impune prudență.
- **Erupție maculopapuloasă** la aminopeniciline la pacienții cu **mononucleoză infecțioasă**.
- Tulburări digestive, **colită cu *Clostridioides difficile***.
- **Convulsii** la concentrații mari (mai ales imipenem, insuficiență renală).
- **Reacția Jarisch-Herxheimer** la tratamentul sifilisului (prin liza treponemelor, nu alergie).
- Aztreonamul are reactivitate încrucișată neglijabilă cu penicilinele.

## De reținut pentru examen
- Țintă: PBP; MRSA rezistă prin PBP2a, nu prin beta-lactamază.
- Penicilina G rămâne tratamentul de elecție în sifilis.
- Cefalosporinele nu acoperă enterococul și *Listeria*.
- Amoxicilină în mononucleoză = erupție cutanată.
- Aztreonamul este alternativă la alergicii la penicilină pentru Gram-negativi.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Beta-Lactam & Other Cell Wall- & Membrane-Active Antibiotics',
      'Lippincott Illustrated Reviews: Pharmacology – Cell Wall Inhibitors',
    ],
  },
  {
    id: 'far-t3',
    title: 'Alte clase de antibiotice: aminoglicozide, macrolide, tetracicline, fluorochinolone',
    topic: 'Chimioterapice antimicrobiene',
    readMinutes: 3,
    content: `## Ținte bacteriene
Spre deosebire de beta-lactamine, aceste clase acționează asupra **sintezei proteice** (ribozomul bacterian 70S, cu subunitățile 30S și 50S) sau asupra **replicării ADN**. Selectivitatea vine din diferențele dintre ribozomii și enzimele bacteriene și cele umane.

## Tabel comparativ
| Clasă | Exemple | Mecanism | Efect | Reacții adverse caracteristice |
|---|---|---|---|---|
| Aminoglicozide | gentamicina, amikacina, tobramicina, streptomicina | se leagă de **subunitatea 30S**, citire greșită a ARNm | bactericid, dependent de concentrație | **nefrotoxicitate, ototoxicitate**, blocadă neuromusculară |
| Macrolide | eritromicina, claritromicina, azitromicina | se leagă de **subunitatea 50S**, blochează translocarea | bacteriostatic | tulburări digestive (efect prokinetic), **prelungirea QT**, inhibiție enzimatică (CYP3A4) |
| Tetracicline | doxiciclina, minociclina | se leagă de **subunitatea 30S**, împiedică fixarea aminoacil-ARNt | bacteriostatic | **colorarea dinților și afectarea osului** la copii, **fotosensibilizare**, esofagită |
| Fluorochinolone | ciprofloxacina, levofloxacina, moxifloxacina | inhibă **ADN-giraza (topoizomeraza II)** și **topoizomeraza IV** | bactericid | **tendinopatie și ruptură de tendon**, prelungirea QT, efecte SNC, afectarea cartilajului |

## Aminoglicozide
- Pătrund în bacterie printr-un transport dependent de oxigen, deci sunt **inactive pe anaerobi**.
- Spectru: în principal **Gram-negativi aerobi**; **sinergie cu beta-lactaminele** (care facilitează pătrunderea) în endocardite.
- Au **efect postantibiotic** prelungit, ceea ce permite administrarea într-o singură priză zilnică.
- Ototoxicitatea poate fi ireversibilă; riscul crește asociat cu **diuretice de ansă**. Nefrotoxicitatea crește cu vancomicina.
- Contraindicate în **miastenia gravis** (blocadă neuromusculară).

## Macrolide
- Spectru: germeni Gram-pozitivi și **atipici** (*Mycoplasma*, *Chlamydophila*, *Legionella*); utile în pneumonia comunitară și la alergicii la penicilină.
- Eritromicina și claritromicina **inhibă CYP3A4** – interacțiuni cu statine, warfarină, unele antiaritmice. Azitromicina are mai puține interacțiuni.

## Tetracicline
- Spectru larg: atipici, **rickettsii**, *Borrelia*, *Chlamydia*.
- **Chelare cu cationii** (calciu, magneziu, fier, aluminiu – lapte, antiacide) – absorbție scăzută.
- Contraindicate la **gravide și copii mici**.

## Fluorochinolone
- Biodisponibilitate orală bună; aceeași chelare cu cationii divalenți.
- Riscul de tendinopatie crește la **vârstnici** și asociat cu **corticosteroizi**.
- Pot provoca disglicemii și reacții neuropsihice; utilizarea se rezervă situațiilor în care alternativele nu sunt potrivite.
- În general evitate la copii și gravide (afectarea cartilajului în studii animale).

## De reținut pentru examen
- Aminoglicozide: oto- și nefrotoxice, inactive pe anaerobi, risc în miastenie.
- Tetracicline: dinți colorați la copii, fotosensibilizare, chelare cu lapte și antiacide.
- Fluorochinolone: ruptura tendonului lui Ahile, mai ales la vârstnici pe corticoterapie.
- Macrolide: QT lung și inhibiție CYP3A4 (excepție relativă: azitromicina).
- 30S: aminoglicozide și tetracicline; 50S: macrolide.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Tetracyclines, Macrolides, Clindamycin; Aminoglycosides; Fluoroquinolones',
      'Lippincott Illustrated Reviews: Pharmacology – Protein Synthesis Inhibitors; Quinolones',
    ],
  },
  {
    id: 'far-t4',
    title: 'Antihipertensive: clase, mecanisme și efecte adverse',
    topic: 'Farmacologia aparatului cardiovascular',
    readMinutes: 3,
    content: `## Principiu
Tensiunea arterială depinde de **debitul cardiac** și de **rezistența vasculară periferică**. Antihipertensivele acționează pe unul sau mai multe dintre: sistemul renină-angiotensină-aldosteron (SRAA), volemie, tonusul simpatic și musculatura netedă vasculară.

## Clasele principale
| Clasă | Exemple | Mecanism | Reacții adverse tipice |
|---|---|---|---|
| IECA | enalapril, ramipril, perindopril | inhibă enzima de conversie, scad angiotensina II; **cresc bradikinina** | **tuse uscată**, **angioedem**, hiperkaliemie, creșterea creatininei |
| Sartani (BRA) | losartan, valsartan, candesartan | blochează receptorul **AT1** al angiotensinei II | hiperkaliemie; fără tuse (nu cresc bradikinina) |
| Blocante ale canalelor de calciu – dihidropiridine | amlodipina, nifedipina | vasodilatație arteriolară | **edeme maleolare**, cefalee, flush, tahicardie reflexă |
| Blocante ale canalelor de calciu – non-dihidropiridine | verapamil, diltiazem | acțiune pe cord: scad frecvența și conducerea AV | bradicardie, bloc AV, constipație (verapamil) |
| Diuretice tiazidice și înrudite | hidroclorotiazida, indapamida | inhibă cotransportorul Na-Cl în tubul contort distal | **hipokaliemie**, hiponatremie, hiperuricemie, hiperglicemie |
| Beta-blocante | bisoprolol, metoprolol, carvedilol | scad frecvența, contractilitatea și secreția de renină | bradicardie, bronhospasm (neselective), mascarea hipoglicemiei |
| Alfa-1 blocante | doxazosin, prazosin | vasodilatație prin blocarea receptorilor alfa-1 | **hipotensiune ortostatică la prima administrare** |
| Antihipertensive centrale | metildopa, clonidina | agoniști alfa-2 centrali, scad tonusul simpatic | sedare; clonidina – **hipertensiune de rebound** la oprire bruscă |
| Antagoniști de aldosteron | spironolactona, eplerenona | blochează receptorul mineralocorticoid | hiperkaliemie; ginecomastie (spironolactona) |

## Situații clinice frecvente
- **Diabet cu albuminurie, boală cronică de rinichi** – IECA sau sartan (efect nefroprotector).
- **Sarcină** – se folosesc metildopa, labetalolul, nifedipina; **IECA și sartanii sunt contraindicați** (fetotoxicitate).
- **Insuficiență cardiacă cu fracție de ejecție redusă** – IECA/sartan, beta-blocante selectate, antagoniști de aldosteron.
- **Hipertrofie benignă de prostată** – alfa-blocantele ameliorează și simptomele urinare.
- **Gută** – tiazidele pot precipita crize.

## Combinații de evitat
- **IECA + sartan** – fără beneficiu suplimentar, risc crescut de hiperkaliemie și insuficiență renală.
- **Beta-blocant + verapamil/diltiazem** – risc de bradicardie severă și bloc AV.
- IECA/sartan + diuretic economizator de potasiu fără monitorizare – hiperkaliemie.

## Contraindicații importante
- IECA: **stenoză bilaterală de arteră renală**, antecedente de angioedem, sarcină.
- Beta-blocante neselective: **astm bronșic**.
- Non-dihidropiridine: insuficiență cardiacă cu fracție de ejecție redusă, bloc AV.

## De reținut pentru examen
- Tusea la IECA vine din bradikinină; trecerea pe sartan o rezolvă.
- IECA și sartanii sunt contraindicați în sarcină.
- Edemele maleolare la amlodipină nu răspund la diuretice.
- Tiazidele: hipo-K, hipo-Na, hiper-uricemie, hiper-glicemie.
- Clonidina oprită brusc dă rebound hipertensiv.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Antihypertensive Agents',
      'Lippincott Illustrated Reviews: Pharmacology – Antihypertensives',
    ],
  },
  {
    id: 'far-t5',
    title: 'Anticoagulante și antiagregante plachetare',
    topic: 'Farmacologia hemostazei',
    readMinutes: 3,
    content: `## Diferența de bază
- **Antiagregantele** acționează pe **trombocite** – folosite mai ales în tromboza **arterială** (infarct miocardic, AVC ischemic, stenturi).
- **Anticoagulantele** acționează pe **cascada coagulării** – folosite mai ales în tromboza **venoasă** (TVP, embolie pulmonară) și în prevenția emboliilor din **fibrilația atrială** și la protezele valvulare mecanice.

## Antiagregante plachetare
| Medicament | Mecanism | Particularități |
|---|---|---|
| Aspirina | **inhibă ireversibil COX-1**, scade tromboxanul A2 | efect pe durata vieții trombocitului; risc de sângerare digestivă |
| Clopidogrel, prasugrel, ticagrelor | blochează receptorul **P2Y12** al ADP | clopidogrelul este **promedicament** activat de CYP2C19; ticagrelorul se leagă reversibil |
| Abciximab, eptifibatid, tirofiban | blochează **glicoproteina IIb/IIIa** | administrare intravenoasă, în sindroame coronariene acute selectate |
| Dipiridamol, cilostazol | inhibă fosfodiesteraza, cresc AMPc | cilostazol – claudicație intermitentă |

**Dubla antiagregare** (aspirină + inhibitor P2Y12) se folosește după sindrom coronarian acut și implantare de stent.

## Anticoagulante
| Medicament | Mecanism | Monitorizare | Antidot |
|---|---|---|---|
| Heparina nefracționată | potențează **antitrombina**, inhibă trombina (IIa) și factorul Xa | **aPTT** | **sulfat de protamină** |
| Heparine cu greutate moleculară mică (enoxaparina) | prin antitrombină, predominant pe **Xa** | de rutină nu; anti-Xa în situații speciale | protamina – neutralizare parțială |
| Fondaparinux | inhibitor indirect selectiv al Xa | nu de rutină | fără antidot specific |
| Warfarina, acenocumarolul (antivitamine K) | blochează **vitamin K epoxid-reductaza**; scad factorii **II, VII, IX, X** și proteinele C și S | **INR** | **vitamina K**, concentrat de complex protrombinic |
| Dabigatran | inhibitor **direct al trombinei** | nu de rutină | **idarucizumab** |
| Rivaroxaban, apixaban, edoxaban | inhibitori **direcți ai factorului Xa** | nu de rutină | andexanet alfa (unde este disponibil) |

## Reacții adverse și capcane
- **Sângerarea** – principalul risc pentru toate.
- **Trombocitopenia indusă de heparină (HIT)** – mecanism imun, paradoxal **protrombotică**; se oprește orice heparină și se trece pe un anticoagulant non-heparinic.
- **Necroza cutanată la warfarină** – la inițiere, prin scăderea rapidă a proteinei C (mai ales în deficit de proteină C); de aceea inițierea se face sub protecție de heparină.
- Warfarina este **teratogenă** – în sarcină se preferă heparinele cu greutate moleculară mică.
- Warfarina are **numeroase interacțiuni**: inductorii enzimatici (rifampicina, carbamazepina) scad INR; inhibitorii (amiodarona, fluconazolul, unele macrolide) cresc INR; dieta bogată în vitamina K scade efectul.
- Anticoagulantele orale directe **nu sunt indicate la protezele valvulare mecanice** – aici rămâne warfarina.

## De reținut pentru examen
- Arterial = antiagregant; venos = anticoagulant (simplificare utilă).
- Heparina: aPTT și protamină; warfarina: INR și vitamina K.
- Clopidogrelul are nevoie de activare hepatică (CYP2C19).
- HIT dă tromboze, nu doar sângerări.
- Proteză valvulară mecanică: warfarină, nu anticoagulant oral direct.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Drugs Used in Disorders of Coagulation',
      'Lippincott Illustrated Reviews: Pharmacology – Drugs Affecting the Blood',
    ],
  },
  {
    id: 'far-t6',
    title: 'Analgezice: AINS și opioide',
    topic: 'Farmacologia durerii și inflamației',
    readMinutes: 3,
    content: `## AINS – mecanism
Antiinflamatoarele nesteroidiene **inhibă ciclooxigenazele (COX)**, scăzând sinteza de **prostaglandine** și tromboxan. Au efect **analgezic, antipiretic și antiinflamator**.
- **COX-1** – constitutivă: protecția mucoasei gastrice, funcția trombocitară, fluxul sanguin renal.
- **COX-2** – inductibilă în inflamație (dar și constitutivă la nivel renal și endotelial).

| Grup | Exemple | Particularități |
|---|---|---|
| Neselective | ibuprofen, naproxen, diclofenac, ketoprofen | risc digestiv și renal |
| Aspirina | acid acetilsalicilic | inhibiție **ireversibilă** a COX-1; antiagregant |
| Selective COX-2 (coxibi) | celecoxib, etoricoxib | risc digestiv mai mic, **risc cardiovascular trombotic** crescut |
| Paracetamol | acetaminofen | analgezic și antipiretic, **efect antiinflamator slab**; nu este un AINS clasic |

## Reacții adverse ale AINS
- **Gastrointestinale** – gastrită, ulcer, hemoragie digestivă; protecție cu inhibitori de pompă de protoni la pacienții cu risc.
- **Renale** – scăderea filtrării glomerulare (prostaglandinele mențin fluxul renal), retenție de sodiu și apă, hiperkaliemie; risc mare asociat cu IECA/sartani și diuretice.
- **Cardiovasculare** – creșterea tensiunii, agravarea insuficienței cardiace, evenimente trombotice.
- **Astm indus de aspirină / AINS** (boala respiratorie exacerbată de aspirină, cu polipi nazali).
- **Sindromul Reye** – aspirina la copii cu infecții virale; contraindicată.
- În sarcină, în ultimul trimestru – risc de **închidere prematură a canalului arterial**.
- **Paracetamolul** în supradozaj – **hepatotoxicitate** prin metabolitul NAPQI; antidot **N-acetilcisteina**.

## Opioide – mecanism
Opioidele sunt agoniști ai **receptorilor opioizi (mu, kappa, delta)**, cuplați cu proteina G. Efectele principale (analgezie, euforie, deprimare respiratorie, dependență) sunt mediate de receptorii **mu**.

| Tip | Exemple |
|---|---|
| Agoniști compleți puternici | morfina, fentanilul, oxicodona, metadona |
| Agoniști slabi | codeina, tramadolul (care are și efect serotoninergic și noradrenergic) |
| Agonist parțial | buprenorfina |
| Antagoniști | **naloxona**, naltrexona |

## Efecte adverse ale opioidelor
- **Deprimare respiratorie** – cauza principală de deces în supradozaj.
- **Constipație** și **mioză** – **nu apare toleranță** la acestea.
- Greață, vărsături, sedare, prurit, retenție urinară, hipotensiune.
- **Toleranță, dependență fizică** și sindrom de sevraj (midriază, rinoree, diaree, piloerecție, agitație).
- Tramadolul scade pragul convulsivant și poate contribui la **sindrom serotoninergic** cu antidepresivele.
- Codeina este activată de CYP2D6 – metabolizatorii ultrarapizi riscă toxicitate.

**Triada supradozajului opioid**: comă, **mioză punctiformă**, bradipnee – se tratează cu **naloxonă** (durata de acțiune mai scurtă decât a multor opioide, deci pacientul se monitorizează).

## De reținut pentru examen
- Aspirina inhibă ireversibil COX-1; nu se dă copiilor cu viroze (Reye).
- Coxibii protejează stomacul, dar cresc riscul trombotic.
- Paracetamol supradozat: hepatotoxicitate, antidot N-acetilcisteină.
- Opioide: fără toleranță la constipație și mioză.
- Mioză + comă + bradipnee = supradozaj opioid, naloxonă.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – NSAIDs; Opioid Agonists & Antagonists',
      'Rang & Dale’s Pharmacology – Anti-inflammatory drugs; Analgesic drugs',
    ],
  },
  {
    id: 'far-t7',
    title: 'Antidiabetice: insuline și antidiabetice neinsulinice',
    topic: 'Farmacologia sistemului endocrin',
    readMinutes: 3,
    content: `## Principii
În **diabetul de tip 1** lipsește secreția de insulină, deci **insulina este obligatorie**. În **diabetul de tip 2** există rezistență la insulină și deficit secretor progresiv; tratamentul începe de obicei cu modificarea stilului de viață și **metformin**, apoi se adaugă alte clase în funcție de comorbidități.

## Insulinele
| Tip | Exemple | Profil |
|---|---|---|
| Rapide (analogi) | lispro, aspart, glulisina | debut rapid, la masă |
| Scurtă durată (umană regulară) | insulina regulară | singura folosită uzual intravenos (cetoacidoză) |
| Intermediare | NPH | durată medie |
| Bazale lungi | glargina, detemir, degludec | profil relativ plat, acoperire bazală |

Reacții adverse: **hipoglicemie** (principala), creștere ponderală, lipodistrofie la locul injectării, **hipokaliemie** (insulina introduce potasiul în celule – important în tratamentul cetoacidozei).

## Antidiabetice neinsulinice
| Clasă | Exemple | Mecanism | Reacții adverse / capcane |
|---|---|---|---|
| Biguanide | metformin | scade **producția hepatică de glucoză**, crește sensibilitatea la insulină | tulburări digestive, **acidoză lactică** (rară), deficit de vitamina B12; nu dă hipoglicemie în monoterapie |
| Sulfoniluree | gliclazida, glimepirida | stimulează secreția de insulină (închid canalele K-ATP din celula beta) | **hipoglicemie**, creștere ponderală |
| Glinide | repaglinida | similar sulfonilureelor, acțiune scurtă | hipoglicemie |
| Inhibitori DPP-4 (gliptine) | sitagliptina, vildagliptina | cresc incretinele endogene | bine tolerate, risc redus de hipoglicemie |
| Agoniști GLP-1 | liraglutid, dulaglutid, semaglutid | stimulează secreția de insulină dependentă de glucoză, scad glucagonul, încetinesc golirea gastrică | greață, vărsături; **scădere ponderală**; beneficiu cardiovascular demonstrat pentru unii |
| Inhibitori SGLT2 (gliflozine) | empagliflozina, dapagliflozina | blochează reabsorbția renală a glucozei, **glucozurie** | **infecții genitale micotice**, depleție volemică, **cetoacidoză euglicemică**; beneficiu cardio-renal |
| Tiazolidindione (glitazone) | pioglitazona | agoniști **PPAR-gamma**, cresc sensibilitatea la insulină | **retenție hidrică, insuficiență cardiacă**, creștere ponderală, fracturi |
| Inhibitori de alfa-glucozidază | acarboza | întârzie absorbția intestinală a carbohidraților | flatulență, diaree |

## Alegerea în funcție de comorbidități (principii)
- **Boală cardiovasculară aterosclerotică** – agoniști GLP-1 sau inhibitori SGLT2 cu beneficiu demonstrat.
- **Insuficiență cardiacă, boală renală cronică** – inhibitori SGLT2.
- **Obezitate** – agoniști GLP-1 (scădere ponderală).
- Pioglitazona se evită în insuficiența cardiacă.

## Precauții cu metforminul
Se oprește temporar sau se evaluează înaintea **substanțelor de contrast iodate** la pacienții cu risc renal și în situații de **hipoxie, șoc, insuficiență hepatică sau renală severă** (risc de acidoză lactică).

## Hipoglicemia
Simptome adrenergice (tremor, palpitații, transpirații) și neuroglicopenice (confuzie, comă). **Beta-blocantele pot masca** simptomele adrenergice. La pacientul conștient – glucoză orală; inconștient – glucoză intravenos sau glucagon.

## De reținut pentru examen
- Metformin: prima linie în DZ tip 2, nu dă hipoglicemie, risc de acidoză lactică.
- Sulfonilureele dau hipoglicemie și creștere ponderală.
- SGLT2: infecții genitale, cetoacidoză euglicemică, protecție cardio-renală.
- Glitazonele agravează insuficiența cardiacă.
- Insulina scade potasiul seric.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Pancreatic Hormones & Antidiabetic Drugs',
      'Lippincott Illustrated Reviews: Pharmacology – Drugs for Diabetes',
    ],
  },
  {
    id: 'far-t8',
    title: 'Psihotrope: antidepresive, anxiolitice și antipsihotice',
    topic: 'Farmacologia sistemului nervos central',
    readMinutes: 3,
    content: `## Antidepresive
| Clasă | Exemple | Mecanism | Efecte adverse caracteristice |
|---|---|---|---|
| ISRS | sertralina, escitalopramul, fluoxetina, paroxetina | inhibă selectiv **recaptarea serotoninei** | greață, disfuncție sexuală, insomnie sau somnolență, hiponatremie; citalopramul – prelungirea QT |
| IRSN | venlafaxina, duloxetina | inhibă recaptarea serotoninei și noradrenalinei | ca ISRS, plus creșterea tensiunii arteriale |
| Triciclice (ATC) | amitriptilina, clomipramina | inhibă recaptarea serotoninei și noradrenalinei; blochează receptori muscarinici, histaminici H1 și alfa-1 | **efecte anticolinergice**, sedare, hipotensiune ortostatică, **cardiotoxicitate** în supradozaj |
| IMAO | fenelzina, moclobemida (reversibilă) | inhibă **monoaminoxidaza** | **criză hipertensivă cu alimente bogate în tiramină** (brânzeturi maturate) |
| Atipice | mirtazapina, bupropionul | mecanisme variate | mirtazapina – sedare, creștere ponderală; bupropionul – scade pragul convulsivant |

Puncte-cheie:
- Efectul antidepresiv apare după **câteva săptămâni**; efectele adverse apar imediat.
- La tineri, la inițiere, poate crește riscul de **ideație suicidară** – monitorizare atentă.
- **Sindromul serotoninergic** (agitație, hipertermie, tremor, hiperreflexie, mioclonii, diaree) – la asocierea a două serotoninergice, mai ales ISRS + IMAO, tramadol, linezolid.
- Oprirea bruscă a ISRS (mai ales paroxetina) dă **sindrom de discontinuare**.
- Supradozajul cu triciclice: aritmii, convulsii, comă; complex QRS lărgit tratat cu bicarbonat de sodiu.

## Anxiolitice și hipnotice
- **Benzodiazepinele** (diazepam, alprazolam, lorazepam, midazolam) potențează **GABA-A**, crescând **frecvența** deschiderii canalului de clor. Efecte: anxiolitic, sedativ-hipnotic, anticonvulsivant, miorelaxant.
- Efecte adverse: sedare, tulburări de memorie, risc de cădere la vârstnici, **toleranță și dependență**, sindrom de sevraj (poate da convulsii). Deprimarea respiratorie este periculoasă mai ales în asociere cu **alcool sau opioide**.
- Antidot: **flumazenil**.
- **Buspirona** (agonist parțial 5-HT1A) – anxiolitic fără sedare semnificativă și fără dependență, dar cu debut lent.
- În tulburările anxioase cronice, **ISRS/IRSN** sunt prima linie; benzodiazepinele se folosesc pe termen scurt.

## Antipsihotice
| Generație | Exemple | Mecanism | Efecte adverse predominante |
|---|---|---|---|
| Tipice (generația I) | haloperidolul, clorpromazina | blochează receptorii **dopaminergici D2** | **efecte extrapiramidale**, hiperprolactinemie |
| Atipice (generația a II-a) | risperidona, olanzapina, quetiapina, aripiprazolul, clozapina | blochează D2 și **5-HT2A** (aripiprazolul – agonist parțial D2) | **sindrom metabolic** (creștere ponderală, diabet, dislipidemie), mai ales olanzapina și clozapina |

Efecte adverse importante:
- **Extrapiramidale** – distonie acută, acatizie, parkinsonism, **diskinezie tardivă** (poate fi ireversibilă).
- **Hiperprolactinemie** (blocarea D2 pe calea tuberoinfundibulară) – galactoree, amenoree; frecventă la risperidonă.
- **Sindromul neuroleptic malign** – febră, rigiditate musculară, alterarea conștienței, instabilitate vegetativă, CK crescută; urgență medicală.
- **Clozapina** – eficientă în schizofrenia rezistentă, dar risc de **agranulocitoză** – impune monitorizarea hemogramei; poate da și miocardită și convulsii.
- Prelungirea QT, hipotensiune ortostatică, sedare.

## De reținut pentru examen
- IMAO + tiramină = criză hipertensivă; ISRS + IMAO = sindrom serotoninergic.
- Triciclicele sunt periculoase în supradozaj (cardiotoxicitate).
- Benzodiazepine: antidot flumazenil, pericol în asociere cu alcool și opioide.
- Clozapina: agranulocitoză, hemogramă obligatorie.
- Febră + rigiditate + CK mare la un pacient pe antipsihotic = sindrom neuroleptic malign.`,
    references: [
      'Katzung – Basic & Clinical Pharmacology – Antidepressant Agents; Sedative-Hypnotic Drugs; Antipsychotic Agents & Lithium',
      'Stahl’s Essential Psychopharmacology',
    ],
  },
]
