// Boli infecțioase – rezumate verificate (echipa Steto)
export default [
  {
    id: 'inf-t1',
    title: 'Sepsisul și șocul septic',
    topic: 'Sepsisul',
    readMinutes: 3,
    content: `## Definiții actuale

- **Sepsisul** este o **disfuncție de organ amenințătoare de viață**, produsă de un **răspuns dereglat al gazdei la infecție**. Accentul nu mai cade pe febră sau leucocitoză (vechile criterii SIRS), ci pe afectarea organelor.
- **Șocul septic** este o formă de sepsis cu anomalii circulatorii și metabolice severe: hipotensiune care necesită **vasopresoare** în ciuda unei repleții volemice adecvate, asociată cu **lactat crescut**. Mortalitatea este net mai mare decât în sepsis.
- **Bacteriemia** (germeni în sânge) nu este sinonimă cu sepsisul: poate lipsi în sepsis și poate fi tranzitorie, fără disfuncție de organ.

## Fiziopatologie pe scurt

Componente microbiene (de exemplu endotoxina bacteriilor Gram-negative) activează imunitatea înnăscută și eliberarea de citokine. Rezultă **vasodilatație**, **creșterea permeabilității capilare**, activarea coagulării (până la **CID**) și disfuncție mitocondrială. Hipoperfuzia și leziunea celulară duc la insuficiență multiorganică.

## Recunoaștere clinică

Scorul **qSOFA**, util la patul bolnavului în afara terapiei intensive, are trei elemente:

| Element qSOFA | Ce reflectă |
|---|---|
| **Alterarea stării de conștiență** | hipoperfuzie cerebrală |
| **Frecvență respiratorie crescută** | acidoză, afectare pulmonară |
| **TA sistolică scăzută** | disfuncție circulatorie |

Alte semne de disfuncție de organ: **oligurie** și creșterea creatininei, icter, trombocitopenie, hipoxemie, extremități reci cu reumplere capilară lentă. Vârstnicii și imunodeprimații pot fi **afebrili** sau chiar hipotermici.

## Investigații

- **hemoculturi** (cel puțin două seturi) și culturi din focarul suspectat, recoltate **înainte de antibiotic**, fără a-l întârzia;
- **lactat seric** (marker de hipoperfuzie), hemoleucogramă, funcție renală și hepatică, coagulare, gaze sanguine;
- **imagistică** pentru identificarea sursei (radiografie toracică, ecografie abdominală, CT).

## Tratament – principii

1. **Antibioterapie empirică cu spectru larg, cât mai precoce** (ideal în prima oră), aleasă după focarul probabil, epidemiologia locală și riscul de germeni rezistenți.
2. **Resuscitare volemică** cu **cristaloizi**, cu reevaluare frecventă a răspunsului.
3. **Noradrenalina** este vasopresorul de primă linie când hipotensiunea persistă după repleție.
4. **Controlul sursei**: drenajul abceselor, dezobstrucția căilor urinare sau biliare, îndepărtarea cateterelor infectate, debridarea țesuturilor necrozate.
5. **Hidrocortizonul** se rezervă șocului care nu răspunde la lichide și vasopresoare.
6. **De-escaladare** după rezultatul culturilor și al antibiogramei.

## Surse frecvente

- pulmonară (pneumonie) – cea mai frecventă;
- abdominală (peritonită, colangită);
- urinară (pielonefrită, mai ales obstructivă);
- tegumente și părți moi, catetere venoase centrale.

## De reținut pentru examen

- Sepsis = disfuncție de organ, nu doar febră și tahicardie.
- Hemoculturile se recoltează înainte de antibiotic, dar nu îl amână.
- Noradrenalina este vasopresorul de primă linie.
- Fără controlul sursei antibioticul singur poate eșua (pielonefrita obstructivă, abcesul).
- qSOFA nu include febra și nici leucocitoza.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli infecțioase (Sepsis)',
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Terapie intensivă',
      'Harrison’s Principles of Internal Medicine – Sepsis and Septic Shock',
    ],
  },
  {
    id: 'inf-t2',
    title: 'Infecția HIV: diagnostic, infecții oportuniste și tratament',
    topic: 'Infecția HIV',
    readMinutes: 3,
    content: `## Transmitere și evoluție naturală

HIV se transmite **sexual**, **parenteral** (sânge, ace contaminate) și **vertical** (în sarcină, la naștere, prin alăptare). Virusul infectează celulele **CD4+** (limfocite T helper, macrofage), iar evoluția netratată parcurge mai multe etape:

| Etapă | Caracteristici |
|---|---|
| **Infecția acută (seroconversia)** | sindrom asemănător mononucleozei: febră, faringită, adenopatii, erupție; încărcătură virală foarte mare |
| **Faza asimptomatică** | ani de zile, cu scădere progresivă a CD4; limfadenopatie generalizată persistentă |
| **Faza simptomatică** | candidoză orală, leucoplazie păroasă, herpes zoster, scădere ponderală, diaree |
| **SIDA** | infecții oportuniste și neoplazii definitorii |

## Diagnostic

- screening cu **teste combinate antigen p24 + anticorpi** (generația a patra), care scurtează fereastra serologică;
- un rezultat reactiv se **confirmă** prin teste suplimentare;
- la diagnostic: **numărul de limfocite CD4** (stadiul imunodepresiei), **încărcătura virală** (ARN HIV), testarea genotipică a rezistenței, screening pentru hepatitele B și C, sifilis și tuberculoză.

## Infecții oportuniste și neoplazii definitorii

| Afecțiune | Agent / particularități | Diagnostic și tratament de reținut |
|---|---|---|
| **Pneumonia cu Pneumocystis** | *P. jirovecii*; tuse seacă, dispnee de efort, desaturare | lavaj bronhoalveolar sau spută indusă; **cotrimoxazol** ± corticoizi |
| **Toxoplasmoza cerebrală** | *Toxoplasma gondii*; deficit focal, convulsii | leziuni multiple cu **priză inelară**; pirimetamină + sulfadiazină |
| **Meningita criptococică** | *Cryptococcus neoformans*; debut subacut | **tuș de China**, antigen criptococic; amfotericină B + flucitozină |
| **Retinita cu CMV** | citomegalovirus; scăderea vederii | fund de ochi; ganciclovir |
| **Tuberculoza** | apare la orice nivel de CD4; forme extrapulmonare frecvente | culturi, teste moleculare |
| **Sarcomul Kaposi** | herpesvirusul uman 8 | leziuni violacee cutanate și viscerale |
| **Limfomul primar al SNC** | asociat cu EBV | diagnostic diferențial al toxoplasmozei |

**Profilaxia primară** (de exemplu cotrimoxazolul pentru pneumocistoză și toxoplasmoză) se indică în imunodepresia avansată.

## Tratamentul antiretroviral (TARV)

- se recomandă **tuturor persoanelor diagnosticate**, indiferent de numărul de CD4, cât mai curând;
- folosește **combinații** de antiretrovirale din clase diferite (inhibitori de reverstranscriptază nucleozidici și nenucleozidici, inhibitori de integrază, inhibitori de protează), pentru a preveni rezistența;
- obiectivul este o **încărcătură virală nedetectabilă** și refacerea imunității; tratamentul este **pe viață**;
- **aderența** este determinantă pentru succes;
- o încărcătură virală susținut nedetectabilă **împiedică transmiterea sexuală** („nedetectabil = netransmisibil”).

**Sindromul inflamator de reconstituție imună** apare după începerea TARV, prin reacția sistemului imun refăcut la o infecție oportunistă preexistentă (tuberculoză, criptococ), cu agravare clinică paradoxală.

## De reținut pentru examen

- Primoinfecția HIV mimează mononucleoza – testul de anticorpi poate fi încă negativ.
- Leziuni cerebrale cu priză inelară multiple = toxoplasmoză; diferențial cu limfomul SNC.
- Pneumocistoză: desaturare la efort, infiltrate interstițiale, cotrimoxazol.
- TARV este pentru toți pacienții și nu se întrerupe.
- Herpesul zoster și candidoza orală sugerează HIV, dar nu definesc SIDA.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. HIV și SIDA',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Human Immunodeficiency Virus Disease',
    ],
  },
  {
    id: 'inf-t3',
    title: 'Bolile eruptive ale copilăriei',
    topic: 'Bolile eruptive',
    readMinutes: 3,
    content: `## Abordare generală

Bolile eruptive se diferențiază după **agent**, **prodrom**, **aspectul și evoluția erupției**, **semnele asociate** și **complicațiile**. Majoritatea sunt prevenite prin vaccinare (rujeolă, rubeolă, varicelă), dar focarele de rujeolă reapar acolo unde acoperirea vaccinală scade.

## Tabel comparativ

| Boală | Agent | Prodrom | Erupție | Semne cheie | Complicații importante |
|---|---|---|---|---|---|
| **Rujeolă** | virus rujeolic (paramixovirus) | febră înaltă, **tuse, coriză, conjunctivită** | maculopapuloasă, începe **retroauricular și pe față**, coboară descendent, confluentă | **semnul Koplik** pe mucoasa jugală | pneumonie, otită, encefalită, **panencefalită sclerozantă subacută** (tardiv) |
| **Rubeolă** | virus rubeolic | discret sau absent | maculopapuloasă fină, evoluție rapidă (2–3 zile) | **adenopatii retroauriculare și occipitale**, artralgii la adult | **sindrom rubeolic congenital** (cataractă, surditate, malformații cardiace) |
| **Varicelă** | virus varicelo-zosterian | scurt sau absent | **polimorfă**: macule, papule, vezicule, cruste concomitent; pruriginoasă; afectează scalpul și mucoasele | „cer înstelat” | suprainfecție bacteriană cutanată, pneumonie (adult, sarcină), encefalită, cerebelită |
| **Scarlatină** | *Streptococcus pyogenes* (toxine eritrogene) | febră, **angină**, vărsături | micropapuloasă, **aspră „ca glaspapirul”**, accentuată în plici (**semnul Pastia**) | **limbă zmeurie**, paloare periorală (triunghiul Filatov), descuamare ulterioară | **reumatism articular acut**, **glomerulonefrită poststreptococică** |

## Particularități de reținut

### Rujeolă
Extrem de contagioasă, transmisă aerogen. Copiii malnutriți și cu deficit de vitamină A fac forme severe. Tratamentul este suportiv. Prevenția se face cu **vaccin viu atenuat** (ROR).

### Rubeolă
La copil este ușoară, dar infecția maternă în **primul trimestru** are risc mare de afectare fetală. De aceea se verifică imunitatea femeilor de vârstă fertilă, iar vaccinul (viu atenuat) este contraindicat în sarcină.

### Varicelă
Virusul rămâne latent în **ganglionii senzitivi** și se poate reactiva ca **herpes zoster**. La copii se evită **aspirina** (risc de **sindrom Reye**). Antiviralele (aciclovir) se folosesc la adolescenți, adulți, gravide și imunodeprimați. Varicela la gravidă poate produce pneumonie severă, iar infecția neonatală poate fi gravă.

### Scarlatină
Diagnosticul se susține prin cultură din exsudatul faringian sau test antigenic rapid. **Penicilina** este tratamentul de elecție; tratamentul corect previne reumatismul articular acut.

## Diagnostic diferențial util

- **Mononucleoza infecțioasă**: erupție maculopapuloasă mai ales după **amoxicilină**.
- **Eritemul infecțios** (parvovirus B19): aspect de „obraji pălmuiți”.
- **Boala Kawasaki**: febră prelungită, conjunctivită nepurulentă, modificări ale extremităților, risc de anevrisme coronariene.
- **Erupția medicamentoasă**: anamneză de medicament nou.

## De reținut pentru examen

- Koplik = rujeolă, înaintea exantemului.
- Leziuni în stadii diferite simultan = varicelă.
- Adenopatii retroauriculare și occipitale = rubeolă; risc major în sarcină.
- Limbă zmeurie + semn Pastia = scarlatină; complicații: RAA și glomerulonefrită.
- Panencefalita sclerozantă subacută apare la ani după rujeolă.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli infecțioase (Infecții virale și streptococice)',
      'Sinopsis de medicină, ed. 5',
      'Nelson Textbook of Pediatrics – Infectious Diseases',
    ],
  },
  {
    id: 'inf-t4',
    title: 'Diareile infecțioase și infecția cu Clostridioides difficile',
    topic: 'Diareile infecțioase',
    readMinutes: 3,
    content: `## Clasificare practică

Diareea acută infecțioasă se împarte după mecanism în două tipuri, cu implicații diferite pentru diagnostic și tratament.

| Tip | Mecanism | Clinic | Agenți tipici |
|---|---|---|---|
| **Secretorie (neinvazivă)** | toxine care stimulează secreția intestinului subțire | scaune apoase, abundente, fără sânge, febră absentă sau mică | *Vibrio cholerae*, *E. coli* enterotoxigen, norovirus, rotavirus |
| **Invazivă (inflamatorie)** | invazia sau lezarea mucoasei colonice | scaune cu **sânge și mucus**, tenesme, febră | *Shigella*, *Campylobacter*, *Salmonella*, *E. coli* enterohemoragic, *Entamoeba histolytica* |
| **Toxină preformată** | toxina este deja în aliment | **vărsături dominante**, debut la **câteva ore** după masă | *Staphylococcus aureus*, *Bacillus cereus* |

## Situații clasice

- **Holera**: scaune „ca apa de orez”, deshidratare rapidă și severă; tratamentul de bază este **rehidratarea**.
- **Toxiinfecția stafilococică**: prăjituri cu cremă, preparate din carne manipulate; evoluție autolimitată.
- ***Bacillus cereus***: orez preparat și ținut la temperatura camerei.
- ***E. coli* enterohemoragic (O157:H7)**: diaree cu sânge, apoi **sindrom hemolitic-uremic** (anemie hemolitică microangiopatică, trombocitopenie, insuficiență renală acută), mai ales la copii.
- ***Campylobacter***: cea mai frecventă cauză bacteriană în multe țări dezvoltate; asociere cu **sindromul Guillain-Barré**.
- ***Giardia***: diaree prelungită cu balonare și malabsorbție, după călătorii sau apă contaminată.

## Evaluare și tratament

- majoritatea episoadelor sunt **autolimitate**; măsura esențială este **rehidratarea**, de preferat orală, intravenoasă în deshidratarea severă;
- **coprocultura** și examenele de scaun sunt indicate la diaree cu sânge, febră înaltă, deshidratare severă, imunodepresie, durată prelungită sau focare epidemice;
- **antibioticele nu sunt necesare de rutină**; se folosesc în forme severe sau la pacienți cu risc;
- **antidiareicele antimotilitate** se evită în diareea cu sânge și febră.

## Infecția cu *Clostridioides difficile*

**Agent**: bacil Gram-pozitiv anaerob, **sporulat**, producător de **toxine A și B**.

**Factori de risc**:
- **antibioterapie recentă** (mai ales clindamicină, cefalosporine, fluorochinolone);
- vârsta înaintată, spitalizarea, instituționalizarea;
- inhibitorii de pompă de protoni, comorbiditățile severe.

**Clinic**: de la diaree apoasă ușoară la **colită pseudomembranoasă**, **megacolon toxic** și perforație. Leucocitoza marcată și creșterea creatininei sugerează forme severe.

**Diagnostic**: detectarea în scaun a **toxinelor** sau a genelor de toxină (adesea algoritm în doi pași); colonoscopia poate arăta pseudomembrane.

**Tratament**:
- oprirea antibioticului declanșator, când este posibil;
- **vancomicină orală** sau **fidaxomicină**; vancomicina intravenoasă nu ajunge în lumenul colonic;
- **transplantul de microbiotă fecală** pentru recurențele multiple;
- chirurgie (colectomie) în formele fulminante.

**Prevenție**: izolare de contact, **spălarea mâinilor cu apă și săpun** (sporii rezistă la alcool), dezinfecția mediului cu produse sporicide, utilizarea rațională a antibioticelor.

## De reținut pentru examen

- Vărsături la câteva ore după masă = toxină preformată (stafilococ, *B. cereus*).
- Diaree cu sânge + sindrom hemolitic-uremic = *E. coli* O157:H7.
- *Campylobacter* se poate complica cu sindrom Guillain-Barré.
- *C. difficile*: vancomicina se dă oral, nu intravenos.
- Spălarea mâinilor cu apă și săpun, nu doar soluție alcoolică.`,
    references: [
      'Kumar & Clark – Medicină clinică, ed. 10 – cap. Boli infecțioase (Infecții gastrointestinale)',
      'Sinopsis de medicină, ed. 5',
      'Harrison’s Principles of Internal Medicine – Acute Infectious Diarrheal Diseases',
    ],
  },
]
