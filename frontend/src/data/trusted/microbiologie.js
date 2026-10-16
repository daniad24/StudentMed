// Microbiologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'mic-t1',
    title: 'Sterilizarea și dezinfecția',
    topic: 'Microbiologie generală',
    readMinutes: 3,
    content: `## Definiții esențiale
- **Sterilizarea** – distrugerea sau îndepărtarea **tuturor** formelor de viață microbiană, inclusiv a **sporilor** bacterieni.
- **Dezinfecția** – distrugerea microorganismelor patogene de pe **suprafețe și obiecte**; nu distruge obligatoriu sporii.
- **Antisepsia** – reducerea microorganismelor pe **țesuturi vii** (piele, mucoase, plăgi).
- **Asepsia** – ansamblul măsurilor care împiedică pătrunderea germenilor într-o zonă sterilă (de exemplu câmpul operator).
- Efect **-cid** (bactericid, sporicid) = omoară; efect **-static** (bacteriostatic) = oprește multiplicarea.

## Ierarhia rezistenței microbiene
De la cele mai rezistente la cele mai sensibile: **prionii** → **sporii bacterieni** → micobacteriile → virusurile neanvelopate → fungii → bacteriile vegetative → virusurile anvelopate. Prionii necesită protocoale speciale, deoarece rezistă metodelor obișnuite de sterilizare.

## Metode fizice
| Metodă | Principiu | Utilizare |
|---|---|---|
| **Autoclavare** (căldură umedă sub presiune) | denaturarea proteinelor | metoda de elecție pentru instrumentar, textile, medii de cultură; distruge sporii |
| **Căldură uscată** (Poupinel) | oxidare; necesită temperatură mai mare și timp mai lung | sticlărie, pulberi, uleiuri |
| **Incinerare** | ardere completă | deșeuri medicale infecțioase |
| **Pasteurizare** | încălzire moderată | alimente (lapte); **nu** sterilizează |
| **Radiații ionizante** (gama) | lezarea ADN-ului | materiale de unică folosință, termosensibile |
| **Radiații UV** | dimeri de timină; penetrare slabă | suprafețe, aer |
| **Filtrare** | reținere mecanică | soluții termolabile, aer (filtre HEPA); nu reține sigur virusurile |

## Metode chimice
| Agent | Spectru și observații |
|---|---|
| **Oxid de etilenă** | sterilizant gazos pentru materiale termosensibile; toxic, necesită aerare |
| **Glutaraldehida** | dezinfectant de nivel înalt; poate fi sporicid la contact prelungit (endoscoape) |
| **Alcoolii** (etanol, izopropanol) | rapid, antiseptic și dezinfectant; **nu** distruge sporii; mai eficient diluat cu apă decât absolut |
| **Clorhexidina** | antiseptic cutanat cu efect remanent; nu este sporicidă |
| **Iodul și iodoforii** (povidonă iodată) | antiseptic cutanat cu spectru larg |
| **Compușii clorului** (hipoclorit) | dezinfecția suprafețelor și a apei; activi pe multe virusuri |
| **Peroxidul de hidrogen** | oxidant; plasmă de peroxid pentru sterilizare la temperatură joasă |
| **Compușii de amoniu cuaternar** | detergenți cationici; activitate redusă, inactivați de materia organică |

## Niveluri de dezinfecție
- **Nivel înalt**: distruge toate microorganismele, cu excepția unui număr mare de spori.
- **Nivel intermediar**: inclusiv micobacterii, dar nu spori.
- **Nivel scăzut**: bacterii vegetative și unele virusuri anvelopate.

Alegerea depinde de risc: instrumentele care pătrund în țesuturi sterile se **sterilizează**; cele care vin în contact cu mucoasele necesită cel puțin **dezinfecție de nivel înalt**.

## Controlul sterilizării
Se folosesc indicatori fizici, chimici și **biologici** (spori de Geobacillus stearothermophilus pentru autoclav).

## De reținut pentru examen
- Doar sterilizarea distruge sigur sporii; alcoolul nu este sporicid.
- Prionii sunt cei mai rezistenți agenți infecțioși.
- Autoclavarea este metoda de elecție pentru materialele termorezistente.
- Pasteurizarea nu este o metodă de sterilizare.
- Antisepsia se aplică pe țesuturi vii, dezinfecția pe obiecte.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Sterilization, Disinfection, and Antisepsis',
      'Murray – Medical Microbiology – Sterilization, Disinfection, and Antisepsis',
    ],
  },
  {
    id: 'mic-t2',
    title: 'Antibiograma și mecanismele de rezistență bacteriană',
    topic: 'Antibiotice și rezistență',
    readMinutes: 3,
    content: `## Scopul antibiogramei
Antibiograma evaluează **sensibilitatea in vitro** a unei tulpini bacteriene izolate la antibiotice, pentru a ghida tratamentul țintit. Rezultatul se exprimă ca **sensibil (S)**, **sensibil la expunere crescută (I)** sau **rezistent (R)**, conform standardelor de interpretare (EUCAST, CLSI).

## Metode
| Metodă | Principiu | Rezultat |
|---|---|---|
| **Difuzimetrică** (Kirby–Bauer) | discuri cu antibiotic pe agar Mueller–Hinton însămânțat uniform | **diametrul zonei de inhibiție**, interpretat după standard |
| **Diluții** în mediu lichid sau solid | concentrații crescătoare de antibiotic | **CMI** – cea mai mică concentrație care inhibă creșterea vizibilă |
| **Gradient** (E-test) | bandă cu gradient de concentrație | CMI citită la intersecția elipsei de inhibiție |
| **Automate** | microdiluții citite automat | CMI și categorie de interpretare |
| **Metode moleculare** | detecția genelor de rezistență (de ex. mecA) | rezultat rapid, nu evaluează toate mecanismele |

- **CMB** (concentrația minimă bactericidă) – cea mai mică concentrație care omoară bacteriile.
- Inoculul se standardizează (etalon McFarland), iar condițiile de incubare sunt fixe, pentru rezultate reproductibile.

## Rezistența naturală și dobândită
- **Naturală (intrinsecă)**: caracteristică speciei. Exemple: bacteriile Gram-negative sunt rezistente la vancomicină (molecula nu traversează membrana externă); micoplasmele sunt rezistente la beta-lactamine (nu au perete celular).
- **Dobândită**: prin **mutații** cromozomiale sau prin achiziția de gene prin **transfer orizontal** – conjugare (plasmide), transducție (bacteriofagi), transformare (ADN liber). Transpozonii și integronii facilitează răspândirea.

## Mecanisme de rezistență
| Mecanism | Exemple |
|---|---|
| **Inactivarea enzimatică** a antibioticului | **beta-lactamaze** (inclusiv ESBL și carbapenemaze); enzime care modifică aminoglicozidele |
| **Modificarea țintei** | **PBP2a** (gena mecA) la MRSA; D-Ala-D-Lac la enterococii rezistenți la vancomicină; metilarea ARNr la macrolide; mutații ale ADN girazei la fluorochinolone |
| **Scăderea permeabilității** | pierderea porinelor la Gram-negative |
| **Eflux activ** | pompe care exportă tetracicline, fluorochinolone, macrolide |
| **Cale metabolică alternativă** | enzime insensibile la sulfamide sau trimetoprim |

## Germeni multirezistenți importanți
- **MRSA** – Staphylococcus aureus rezistent la meticilină; rezistent la aproape toate beta-lactaminele.
- **VRE** – enterococi rezistenți la vancomicină.
- **Enterobacterii producătoare de ESBL** sau de **carbapenemaze**.
- **Pseudomonas aeruginosa** și **Acinetobacter baumannii** multirezistente, frecvente în infecțiile asociate asistenței medicale.

## De reținut pentru examen
- CMI = cea mai mică concentrație care inhibă creșterea vizibilă.
- Antibiograma difuzimetrică se face pe Mueller–Hinton, cu inocul standardizat.
- MRSA = PBP2a codificată de gena mecA, nu beta-lactamază.
- Plasmidele (conjugarea) sunt principala cale de răspândire a rezistenței.
- Rezistența la vancomicină a enterococilor: D-Ala-D-Ala înlocuit cu D-Ala-D-Lac.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Antimicrobial Chemotherapy',
      'Murray – Medical Microbiology – Antibacterial Agents; Laboratory Diagnosis',
    ],
  },
  {
    id: 'mic-t3',
    title: 'Enterobacteriile',
    topic: 'Bacteriologie specială',
    readMinutes: 3,
    content: `## Caractere generale
Familia Enterobacteriaceae (ordinul Enterobacterales) cuprinde **bacili Gram-negativi**:
- **facultativ anaerobi**, nesporulați;
- **oxidază-negativi** (deosebire de Pseudomonas, Vibrio);
- **fermentează glucoza** și reduc nitrații la nitriți;
- mobili prin cili peritrichi, cu excepții importante: **Shigella** și **Klebsiella** sunt **imobile**.

## Structură antigenică
- **Antigenul O** – polizaharidul lipopolizaharidului (LPS) din membrana externă.
- **Antigenul H** – flagelar.
- **Antigenul K** – capsular (Vi la Salmonella Typhi).
- **Lipidul A** din LPS este **endotoxina**: febră, șoc septic, coagulare intravasculară diseminată.

## Diagnostic de laborator
- Medii **diferențiale și selective**: **MacConkey** (diferențiază germenii lactozo-pozitivi, colonii roz, de cei lactozo-negativi), medii pentru Salmonella–Shigella.
- **Fermentarea lactozei**: E. coli, Klebsiella, Enterobacter sunt lactozo-pozitive; **Salmonella, Shigella, Proteus** sunt lactozo-negative.
- **H2S**: produs de Salmonella (majoritatea serotipurilor) și Proteus; **nu** de Shigella.
- Identificare prin teste biochimice, sisteme automate sau spectrometrie de masă; tipizare serologică.

## Principalele genuri
| Germen | Caractere distinctive | Patologie principală |
|---|---|---|
| **Escherichia coli** | lactozo-pozitiv | prima cauză de **infecție urinară**; sepsis, meningită neonatală (antigen K1), diaree |
| **Klebsiella pneumoniae** | capsulă groasă, colonii mucoide, imobilă | pneumonie (alcoolici, diabetici), infecții nosocomiale, frecvent multirezistentă |
| **Proteus mirabilis** | mobilitate intensă („swarming”), **urează** | infecții urinare cu **calculi de struvit** |
| **Salmonella Typhi / Paratyphi** | lactozo-negativ, H2S+ | **febra tifoidă**; stare de purtător în vezica biliară |
| **Salmonella nontifoidice** | transmitere alimentară (ouă, carne de pasăre) | enterocolită |
| **Shigella** | imobilă, H2S−, doză infectantă foarte mică | **dizenterie bacilară** |
| **Yersinia enterocolitica** | se poate multiplica la temperaturi scăzute | enterocolită, pseudo-apendicită |

## Patotipurile diareigene de E. coli
| Patotip | Mecanism | Clinic |
|---|---|---|
| **ETEC** | enterotoxine termolabilă și termostabilă | diareea călătorilor, apoasă |
| **EPEC** | leziuni de atașare și ștergere | diaree la sugari |
| **EHEC** (de ex. O157:H7) | **toxina Shiga** | colită hemoragică, **sindrom hemolitic-uremic** |
| **EIEC** | invazie asemănătoare Shigella | diaree dizenterică |
| **EAEC** | aderență agregativă | diaree persistentă |

## Rezistența la antibiotice
Enterobacteriile pot produce **beta-lactamaze cu spectru extins (ESBL)** și **carbapenemaze**, cu opțiuni terapeutice foarte limitate. Tratamentul se ghidează după antibiogramă.

## De reținut pentru examen
- Enterobacteriile sunt oxidază-negative și fermentează glucoza.
- E. coli este cea mai frecventă cauză de infecție urinară.
- Proteus – urează, calculi de struvit, „swarming”.
- Shigella: imobilă, lactozo-negativă, H2S negativă, doză infectantă mică.
- EHEC O157:H7 – toxina Shiga și sindrom hemolitic-uremic.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Enteric Gram-Negative Rods (Enterobacteriaceae)',
      'Murray – Medical Microbiology – Enterobacteriaceae',
    ],
  },
  {
    id: 'mic-t4',
    title: 'Mycobacterium tuberculosis',
    topic: 'Bacteriologie specială',
    readMinutes: 3,
    content: `## Caractere generale
- Bacil subțire, **aerob strict**, nesporulat, imobil.
- Perete bogat în lipide, în special **acizi micolici** – de aici **acido-alcoolo-rezistența**: odată colorat, nu se decolorează cu acid-alcool.
- Se colorează slab prin metoda Gram; se folosește colorația **Ziehl–Neelsen** (bacili roșii pe fond albastru) sau **auramină** (fluorescență).
- **Creștere foarte lentă** (timp de generație lung) – culturile se citesc după câteva săptămâni.
- Rezistent la uscăciune, sensibil la UV și căldură.

## Factori de virulență
- **Cord factor** (trehaloză dimicolat) – dispunerea „în corzi”, inhibă migrarea leucocitelor, contribuie la formarea granulomului.
- **Sulfatidele** – împiedică fuziunea fagozomului cu lizozomul, permițând supraviețuirea în **macrofag**.
- Bacilul este un **parazit intracelular facultativ**; imunitatea protectoare este **celulară** (limfocite Th1, IFN-γ, activarea macrofagelor).

## Patogenie
- Transmitere **aeriană**, prin picături fine (nuclei de picătură) eliminate de bolnavii cu forme pulmonare active.
- **Tuberculoza primară**: focar pulmonar (de obicei în zonele mijlocii/inferioare) plus adenopatie hilară = **complexul primar (Ghon)**. La majoritatea, infecția este controlată și rămâne **latentă**.
- Leziunea caracteristică: **granulomul cu necroză cazeoasă** (macrofage epitelioide, celule gigante Langhans, limfocite).
- **Tuberculoza secundară** (reactivare): mai ales în **apexurile pulmonare**, cu formare de **caverne**.
- Diseminarea hematogenă dă **tuberculoza miliară** și forme extrapulmonare (meningită, osteoarticulară – boala Pott, renală, ganglionară).

## Diagnostic
| Metodă | Ce arată | Observații |
|---|---|---|
| **Microscopie** (Ziehl–Neelsen, auramină) | bacili acido-alcoolo-rezistenți | rapidă, dar puțin sensibilă; nu diferențiază speciile de micobacterii |
| **Cultura** (Löwenstein–Jensen, medii lichide) | izolare și identificare | **standardul de referință**; permite antibiograma; durează săptămâni |
| **Teste moleculare** (amplificare genică) | ADN de M. tuberculosis; unele detectează rezistența la rifampicină | rapide |
| **IDR la tuberculină** (PPD) | hipersensibilitate de tip IV | fals pozitivă după BCG; nu diferențiază latența de boala activă |
| **IGRA** (teste de eliberare a interferonului-γ) | răspuns la antigene specifice | neinfluențat de BCG; nu diferențiază latența de boala activă |

## Prevenție și tratament (principii)
- **Vaccinul BCG** – tulpină atenuată de M. bovis; protejează mai ales copiii împotriva formelor severe (meningită, miliară).
- Tratamentul folosește **asocieri de antituberculoase** administrate timp îndelungat, pentru a preveni selectarea mutanților rezistenți.
- **TB multidrog-rezistentă (MDR)** = rezistență cel puțin la **izoniazidă și rifampicină**.
- Coinfecția **HIV** crește mult riscul de reactivare și de forme diseminate.

## De reținut pentru examen
- Acizii micolici explică acido-alcoolo-rezistența; colorația Ziehl–Neelsen.
- Granulomul cu necroză cazeoasă este leziunea caracteristică.
- Reactivarea apare tipic în apexurile pulmonare, cu caverne.
- IDR pozitivă nu înseamnă boală activă; BCG poate da IDR fals pozitivă, dar nu influențează IGRA.
- MDR = rezistență la izoniazidă plus rifampicină.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Mycobacteria',
      'Murray – Medical Microbiology – Mycobacterium',
    ],
  },
  {
    id: 'mic-t5',
    title: 'Neisseria și Haemophilus',
    topic: 'Bacteriologie specială',
    readMinutes: 3,
    content: `## Genul Neisseria – caractere generale
- **Diplococi Gram-negativi**, cu aspect de „boabe de cafea”, dispuși față în față.
- **Oxidază-pozitivi**, aerobi, pretențioși nutritiv.
- Cultivare pe **geloză chocolat**; pentru probe cu floră asociată se folosesc medii selective (**Thayer–Martin**).
- Sensibile la uscăciune și la frig – probele se transportă rapid.

## N. meningitidis vs N. gonorrhoeae
| Caracter | **N. meningitidis** (meningococ) | **N. gonorrhoeae** (gonococ) |
|---|---|---|
| Capsulă | **prezentă** (factor major de virulență) | absentă |
| Utilizarea zaharurilor | glucoză și **maltoză** | numai **glucoză** |
| Habitat | nazofaringe (purtători sănătoși) | tractul genital |
| Transmitere | picături respiratorii | contact sexual, perinatal |
| Boli | **meningită**, **meningococcemie** cu purpură, sindrom Waterhouse–Friderichsen | uretrită, cervicită, boală inflamatorie pelvină, artrită septică, **conjunctivită neonatală** |
| Vaccin | da (conjugate pentru mai multe serogrupuri, vaccin pentru serogrupul B) | nu există |

- **Endotoxina (LOS)** a meningococului este eliberată abundent și explică șocul și coagularea intravasculară diseminată.
- **Deficitele componentelor terminale ale complementului** (C5–C9) predispun la infecții neisseriene recurente.
- Gonococul are **variație antigenică** a pililor, de aceea reinfecțiile sunt posibile și nu s-a obținut un vaccin; rezistența la antibiotice este o problemă în creștere.
- Contacții apropiați ai unui caz de boală meningococică primesc **chimioprofilaxie**.

## Haemophilus influenzae
- **Cocobacil Gram-negativ** mic, pleomorf.
- Necesită pentru creștere doi factori: **factorul X (hemina)** și **factorul V (NAD)** – prezenți în **geloza chocolat**.
- Fenomenul de **satelitism**: crește în jurul coloniilor de Staphylococcus aureus pe geloza-sânge, care furnizează factorul V.
- Tulpinile **capsulate** (mai ales **tipul b – Hib**, cu capsulă de poliribozil-ribitol-fosfat) produc boli invazive; tulpinile **necapsulate** produc infecții locale.

| Tulpini | Boli tipice |
|---|---|
| **Hib (capsulate)** | **meningită** la copilul mic, **epiglotită**, bacteriemie, artrită septică, celulită |
| **Netipabile (necapsulate)** | **otită medie**, sinuzită, conjunctivită, exacerbări ale bronhopneumopatiei obstructive cronice |

- **Vaccinul conjugat Hib** a redus dramatic formele invazive la copii.
- Numele „influenzae” este istoric: bacteria **nu** cauzează gripa, care este o boală virală.
- Alte specii: H. ducreyi produce **șancrul moale**, o ulcerație genitală dureroasă.

## De reținut pentru examen
- Neisseria: diplococi Gram-negativi, oxidază-pozitivi.
- Meningococul fermentează maltoza, gonococul nu; doar meningococul are capsulă.
- Deficitul de complement terminal predispune la infecții neisseriene.
- H. influenzae necesită factorii X și V; satelitism în jurul S. aureus.
- Hib produce epiglotită și meningită; tulpinile necapsulate produc otită și sinuzită.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Neisseriae; Haemophilus, Bordetella, Brucella, and Francisella',
      'Murray – Medical Microbiology – Neisseria and Related Genera; Haemophilus',
    ],
  },
  {
    id: 'mic-t6',
    title: 'Virusurile hepatitice',
    topic: 'Virusologie',
    readMinutes: 3,
    content: `## Privire de ansamblu
Virusurile hepatitice A, B, C, D și E aparțin unor familii diferite, dar au în comun **tropismul hepatic**. Diferă prin calea de transmitere, potențialul de cronicizare și markerii de diagnostic.

| Virus | Familie / genom | Transmitere | Cronicizare | Particularități |
|---|---|---|---|---|
| **VHA** | Picornaviridae, ARN, neanvelopat | **fecal-orală** | **nu** | vaccin disponibil |
| **VHB** | Hepadnaviridae, **ADN** parțial dublu catenar, anvelopat | sânge, sexuală, **perinatală** | da; risc mare la nou-născut, mic la adult | replicare prin **revers-transcriere**; vaccin |
| **VHC** | Flaviviridae, ARN, anvelopat | **sânge** (droguri injectabile, transfuzii vechi) | **frecventă** | fără vaccin; există tratament antiviral curativ |
| **VHD** | virus **defectiv**, ARN | sânge, sexuală | da | necesită **AgHBs** al VHB pentru a se replica |
| **VHE** | Hepeviridae, ARN, neanvelopat | fecal-orală, apă contaminată, carne insuficient preparată | rar (imunodeprimați) | forme severe la **gravide** |

## Complicațiile infecțiilor cronice
- Hepatita cronică cu VHB, VHC (și VHD) poate evolua spre **ciroză** și **carcinom hepatocelular**.
- VHB poate determina carcinom hepatocelular și în absența cirozei, prin integrarea genomului viral.
- VHC se asociază cu manifestări extrahepatice: **crioglobulinemie mixtă**, glomerulonefrită.

## Markerii serologici ai VHB
| Marker | Semnificație |
|---|---|
| **AgHBs** | infecție prezentă (acută sau cronică); persistența peste 6 luni = infecție cronică |
| **Anti-HBs** | **imunitate** – după vaccinare sau după vindecare |
| **Anti-HBc IgM** | **infecție acută** recentă; util în „fereastra” serologică |
| **Anti-HBc IgG (total)** | contact cu virusul (actual sau trecut); **absent după vaccinare** |
| **AgHBe** | replicare virală activă, contagiozitate crescută |
| **Anti-HBe** | replicare de obicei mai redusă |
| **ADN-VHB** | măsoară direct replicarea virală |

### Interpretări frecvente
- AgHBs negativ, anti-HBs pozitiv, anti-HBc negativ → **vaccinat**.
- AgHBs negativ, anti-HBs pozitiv, anti-HBc pozitiv → **infecție vindecată**.
- AgHBs pozitiv, anti-HBc IgM pozitiv → **hepatită B acută**.
- AgHBs pozitiv peste 6 luni, anti-HBc IgG pozitiv → **infecție cronică**.

## Diagnosticul celorlalte hepatite
- **VHA** și **VHE** acute: anticorpi **IgM** specifici.
- **VHC**: anticorpii anti-VHC indică contactul; infecția activă se confirmă prin **ARN-VHC**.
- **VHD**: se caută numai la persoanele **AgHBs pozitive**. Poate apărea ca **coinfecție** (simultan cu VHB) sau **suprainfecție** (la un purtător cronic de VHB), aceasta din urmă cu evoluție mai severă.

## Prevenție
- Vaccinare pentru **VHA** și **VHB**; vaccinarea anti-VHB protejează indirect și față de VHD.
- Nou-născuții din mame AgHBs pozitive primesc **vaccin și imunoglobuline specifice** la naștere.
- Screeningul sângelui donat și măsurile de siguranță la manevrele invazive.

## De reținut pentru examen
- A și E – fecal-orale, de obicei fără cronicizare; B, C, D – parenterale, cu cronicizare.
- VHB este singurul virus hepatitic ADN; VHD are nevoie de AgHBs.
- Anti-HBs singur = vaccinat; anti-HBs plus anti-HBc = vindecat.
- Anti-HBc IgM = infecție acută cu VHB.
- VHE poate fi sever la gravide; VHC se cronicizează frecvent.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Hepatitis Viruses',
      'Murray – Medical Microbiology – Hepatitis Viruses',
    ],
  },
  {
    id: 'mic-t7',
    title: 'Virusul imunodeficienței umane (HIV)',
    topic: 'Virusologie',
    readMinutes: 3,
    content: `## Structură
- Familia **Retroviridae**, genul Lentivirus; două tipuri: **HIV-1** (răspândit global) și **HIV-2** (mai ales Africa de Vest, mai puțin patogen).
- Virus **anvelopat**, cu genom de **ARN monocatenar**, prezent în două copii.
- Enzime virale proprii: **revers-transcriptaza**, **integraza** și **proteaza**.

| Componentă | Rol |
|---|---|
| **gp120** (anvelopă) | se leagă de receptorul **CD4** |
| **gp41** (anvelopă) | mediază **fuziunea** anvelopei cu membrana celulei |
| **p24** (capsidă) | antigen detectat în testele de diagnostic |
| Gene **gag, pol, env** | proteinele structurale, enzimele, glicoproteinele de anvelopă |

## Ciclul de replicare
1. **Atașarea**: gp120 se leagă de **CD4** și de un **coreceptor** – **CCR5** (tulpini care infectează macrofagele, predominante la început) sau **CXCR4** (tulpini T-tropice, mai târziu).
2. **Fuziunea** prin gp41 și pătrunderea capsidei.
3. **Revers-transcrierea**: ARN viral → ADN; enzima face multe erori, de unde **variabilitatea genetică** mare și apariția rezistenței.
4. **Integrarea** ADN-ului viral în genomul celulei (provirus) – baza **latenței**.
5. Transcrierea, sinteza proteinelor, asamblarea, **înmugurirea** și maturarea prin **protează**.

Celulele-țintă: limfocitele **T CD4+**, macrofagele, celulele dendritice, microglia.

## Transmitere
- **Sexuală** (calea principală la nivel global).
- **Sanguină**: droguri injectabile, accidente prin înțepare, transfuzii netestate.
- **Verticală**: în sarcină, la naștere, prin alăptare.
- Nu se transmite prin contact obișnuit, salivă, insecte.

## Evoluția naturală
- **Infecția acută**: sindrom asemănător mononucleozei (febră, adenopatii, faringită, erupție), viremie mare.
- **Faza de latență clinică**: ani de zile, cu replicare virală continuă și scădere progresivă a CD4.
- **SIDA**: număr foarte scăzut de limfocite CD4 și/sau apariția **bolilor definitorii** – pneumonie cu Pneumocystis jirovecii, toxoplasmoză cerebrală, criptococoză, infecție diseminată cu Mycobacterium avium, retinită cu CMV, sarcom Kaposi (HHV-8), limfoame, tuberculoză.

## Diagnostic
| Test | Ce detectează | Observații |
|---|---|---|
| **Teste combinate de generația a 4-a** | anticorpi anti-HIV-1/2 + **antigen p24** | screening; scurtează **fereastra serologică** |
| **Teste de confirmare** | diferențiază anticorpii HIV-1 de HIV-2 | după un screening reactiv |
| **ARN-HIV (încărcătura virală)** | replicarea virală | monitorizarea tratamentului; util în infecția acută |
| **Numărul de limfocite CD4** | statusul imun | stadializare, risc de infecții oportuniste |
| **Testul de rezistență genotipic** | mutații de rezistență | ghidează alegerea schemei |

La **nou-născutul** din mamă seropozitivă, anticorpii materni persistă luni de zile, de aceea diagnosticul se face prin **teste moleculare** (ADN/ARN viral).

## Principii de tratament
**Terapia antiretrovirală combinată** asociază medicamente cu ținte diferite (revers-transcriptaza, integraza, proteaza, intrarea). Nu eradică provirusul integrat, dar suprimă replicarea, refac imunitatea, iar o încărcătură virală nedetectabilă susținută **împiedică transmiterea sexuală**.

## De reținut pentru examen
- gp120 – legare de CD4; gp41 – fuziune; p24 – antigen de capsidă.
- Coreceptorii sunt CCR5 și CXCR4.
- Revers-transcriptaza face erori – variabilitate și rezistență.
- Testele de generația a 4-a detectează anticorpi plus antigen p24.
- Nou-născutul se testează molecular, nu serologic.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – AIDS and Lentiviruses',
      'Murray – Medical Microbiology – Retroviruses',
    ],
  },
  {
    id: 'mic-t8',
    title: 'Herpesvirusurile umane',
    topic: 'Virusologie',
    readMinutes: 3,
    content: `## Caractere comune
- Familia **Herpesviridae**: virusuri mari, **ADN dublu catenar**, capsidă icosaedrică, **anvelopă** (derivată din membrana nucleară).
- Replicare în **nucleu**.
- Proprietatea definitorie: **latența** pe toată durata vieții, cu posibilitatea de **reactivare**, mai ales la imunodeprimați.
- Incluziile intranucleare și celulele gigante multinucleate (frotiul **Tzanck**) apar la HSV și VZV.

## Cele opt herpesvirusuri umane
| Virus | Sediul latenței | Boli principale |
|---|---|---|
| **HSV-1** | ganglioni senzitivi (trigeminal) | herpes labial, gingivostomatită, keratită, **encefalită herpetică** (lob temporal) |
| **HSV-2** | ganglioni sacrați | herpes genital, **herpes neonatal** |
| **VZV** (HHV-3) | ganglioni senzitivi | **varicelă** (primoinfecție), **herpes zoster** (reactivare, pe un dermatom) |
| **EBV** (HHV-4) | **limfocite B** | **mononucleoza infecțioasă**; limfom Burkitt, carcinom nazofaringian, limfoproliferări la imunodeprimați, leucoplakie păroasă orală |
| **CMV** (HHV-5) | monocite, celule progenitoare | cea mai frecventă **infecție congenitală** virală; retinită, colită, pneumonie la imunodeprimați |
| **HHV-6** (și HHV-7) | limfocite T | **exantemul subit** (roseola infantum) |
| **HHV-8** | limfocite B, celule endoteliale | **sarcomul Kaposi**, limfomul cu efuziune primară |

## Mononucleoza infecțioasă (EBV)
- Transmitere prin **salivă**; mai frecventă la adolescenți și adulți tineri.
- Triada: **febră, faringită, adenopatii**; frecvent **splenomegalie** – risc de ruptură splinică.
- **Limfocite atipice** (celule T reactive) în frotiul de sânge.
- Diagnostic: **anticorpi heterofili** (test Paul–Bunnell, Monospot) și anticorpi specifici anti-EBV (anti-VCA IgM).
- Administrarea de **aminopeniciline** produce frecvent o **erupție** maculopapuloasă.
- Mononucleoza cu anticorpi heterofili negativi poate fi produsă de **CMV**.

## CMV – particularități
- La imunocompetenți, infecția este de obicei asimptomatică sau dă un sindrom mononucleozic.
- **Infecția congenitală**: hipoacuzie neurosenzorială, microcefalie, calcificări **periventriculare**, corioretinită.
- La transplantați și pacienții cu SIDA: retinită, pneumonie, colită; celule cu incluzii în „**ochi de bufniță**”.

## Diagnostic și tratament
- **PCR** este metoda de elecție pentru encefalita herpetică (din lichidul cefalorahidian), infecțiile neonatale și monitorizarea CMV la imunodeprimați.
- Serologia (IgM/IgG, aviditate IgG) este utilă pentru EBV, CMV și VZV.
- **Aciclovirul** și analogii lui acționează asupra HSV și VZV (activați de timidin kinaza virală); CMV se tratează cu alte antivirale (ganciclovir).
- Vaccin există pentru **VZV** (varicelă și zoster).

## De reținut pentru examen
- Toate herpesvirusurile sunt virusuri ADN anvelopate și dau latență.
- HSV-1 – encefalită cu afectarea lobului temporal; diagnostic prin PCR din LCR.
- EBV – latență în limfocitele B; anticorpi heterofili; erupție la aminopeniciline.
- CMV – cea mai frecventă infecție virală congenitală, calcificări periventriculare.
- HHV-8 – sarcom Kaposi; HHV-6 – exantem subit.`,
    references: [
      'Jawetz, Melnick & Adelberg’s Medical Microbiology – Herpesviruses',
      'Murray – Medical Microbiology – Human Herpesviruses',
    ],
  },
]
