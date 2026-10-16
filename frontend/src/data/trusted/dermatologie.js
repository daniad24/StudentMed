// Dermatologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'der-t1',
    title: 'Leziunile elementare și descrierea unei erupții',
    topic: 'Semiologie dermatologică',
    readMinutes: 3,
    content: `## De ce contează

Diagnosticul în dermatologie pornește de la **descrierea corectă a leziunilor**. La colocviu se cere ca leziunea să fie numită cu termenul exact, apoi descrisă după un algoritm.

## Leziunile elementare primare

| Leziune | Definiție | Exemple |
|---|---|---|
| **Macula (pata)** | modificare de culoare, fără relief | vitiligo, efelide, eritem |
| **Papula** | ridicătură mică, solidă, care se vindecă fără cicatrice | lichen plan, veruci |
| **Placa** | leziune reliefată, întinsă, adesea prin confluarea papulelor | psoriazis |
| **Nodulul** | leziune solidă, profundă, palpabilă | eritem nodos |
| **Vezicula** | cavitate mică cu lichid clar | herpes, eczemă acută |
| **Bula** | cavitate mai mare cu lichid | pemfigus, pemfigoid, arsuri |
| **Pustula** | cavitate cu conținut purulent | acnee, foliculite, psoriazis pustulos |
| **Urtica** | papulă edematoasă, fugace, pruriginoasă | urticarie |

Alte leziuni primare: **tuberculul**, **goma**, **telangiectazia**, **șanțul acarian** (specific scabiei).

## Leziunile elementare secundare

- **scuama** – lamele de keratină care se desprind;
- **crusta** – exsudat uscat (seros, purulent – „melicerică” în impetigo, hemoragic);
- **eroziunea** (superficială, fără cicatrice) și **ulcerația** (profundă, se vindecă cu cicatrice);
- **fisura**, **excoriația** (prin grataj);
- **lichenificarea** – îngroșarea pielii cu accentuarea cutelor, prin grataj cronic;
- **cicatricea**, **atrofia**.

## Algoritmul de descriere

1. **Tipul** leziunii elementare (primară, secundară).
2. **Culoarea** – roșie, violacee, brună, albă; la presiune (vitropresiune): eritemul dispare, purpura nu.
3. **Dimensiunea** și **forma** (rotundă, ovalară, inelară, liniară, în țintă).
4. **Marginile** – nete sau difuze, regulate sau neregulate.
5. **Suprafața** – netedă, scuamoasă, crustoasă, verucoasă.
6. **Consistența** la palpare, sensibilitatea, temperatura locală.
7. **Numărul** și **gruparea** – izolate, grupate (herpetiform), confluente, liniare (Koebner).
8. **Distribuția** – fețe de extensie (psoriazis), pliuri de flexie (dermatita atopică), zone fotoexpuse, simetrie, mucoase, fanere.

## Elemente de completat

- **simptome**: prurit, durere, arsură;
- **evoluție**: debut, durată, recidive, factori declanșatori;
- **examenul anexelor** (unghii, păr) și al **mucoaselor**;
- metode simple: vitropresiunea, gratajul metodic, dermatoscopia, lampa Wood.

## De reținut pentru examen

- Eritemul dispare la vitropresiune; purpura nu.
- Eroziunea nu lasă cicatrice; ulcerația lasă.
- Placa eritemato-scuamoasă pe coate și genunchi orientează spre psoriazis.
- Distribuția este adesea la fel de importantă ca morfologia.
- Nu uita unghiile, scalpul și mucoasele.`,
    references: [
      'Fitzpatrick’s Color Atlas and Synopsis of Clinical Dermatology – Approach to dermatologic diagnosis',
      'Habif – Clinical Dermatology: A Color Guide to Diagnosis and Therapy – Principles of diagnosis',
    ],
  },
  {
    id: 'der-t2',
    title: 'Psoriazisul și dermatitele (atopică și de contact)',
    topic: 'Dermatoze inflamatorii',
    readMinutes: 4,
    content: `## Psoriazisul

Boală inflamatorie cronică, imun-mediată, cu proliferare accelerată a keratinocitelor și predispoziție genetică.

**Clinic** – forma vulgară:
- **plăci eritematoase bine delimitate**, acoperite de **scuame albe-argintii**;
- localizări: **fețele de extensie** ale coatelor și genunchilor, scalp, regiunea lombosacrată, ombilic;
- **gratajul metodic**: semnul spermanțetului, al peliculei și **semnul picăturii de sânge (Auspitz)**;
- **fenomenul Koebner** – leziuni pe zonele traumatizate;
- **afectarea unghiilor**: depresiuni punctiforme („degetar”), pete de ulei, onicoliză;
- **artropatia psoriazică** la o parte dintre pacienți.

**Forme clinice**: gutat (după infecții streptococice, la tineri), invers (în pliuri), pustulos, eritrodermic.

**Factori declanșatori**: infecții, stres, traumatisme, unele medicamente (betablocante, litiu, antimalarice), oprirea bruscă a corticoterapiei sistemice.

**Comorbidități**: sindrom metabolic, boli cardiovasculare, depresie.

**Principii de tratament**: topic (emoliente, keratolitice, corticoizi, analogi de vitamina D) în formele ușoare; fototerapie; tratament sistemic (metotrexat, ciclosporină, retinoizi, agenți biologici) în formele moderat-severe.

## Dermatita atopică

- debut frecvent în **copilărie**; **pruritul** este simptomul cardinal;
- **disfuncția barierei cutanate** și **xeroza**;
- localizări: la sugar – fața și zonele de extensie; la copilul mare și adult – **pliurile de flexie**, cu lichenificare;
- asociere cu **astmul** și **rinita alergică** (atopie personală sau familială);
- complicații: suprainfecție bacteriană, **eczema herpeticum** (urgență).

**Tratament**: **emolientele** zilnic (baza tratamentului), evitarea iritanților, corticoizi topici sau inhibitori de calcineurină în pusee, tratament sistemic în formele severe.

## Dermatita de contact

| | Iritativă | Alergică |
|---|---|---|
| Mecanism | lezare directă, neimună | **hipersensibilitate tip IV** |
| Sensibilizare | nu | **necesară** |
| Cine face | oricine, la expunere suficientă | doar persoanele sensibilizate |
| Limite | strict la zona de contact | pot depăși zona de contact |
| Diagnostic | anamneză, evoluție | **teste epicutanate (patch)** |
| Exemple | detergenți, apă, solvenți | nichel, parfumuri, conservanți, cauciuc, vopsele de păr |

**Tratament**: identificarea și evitarea agentului, protecție (mănuși), emoliente, corticoizi topici.

## De reținut pentru examen

- Psoriazis: plăci pe extensie, Auspitz, Koebner, unghii „în degetar”.
- Psoriazisul gutat urmează adesea unei infecții streptococice.
- Dermatita atopică: prurit, pliuri de flexie, atopie, emoliente.
- Dermatita alergică de contact: tip IV, se confirmă prin patch test.
- Testele prick explorează alergia de tip I, nu dermatita de contact.`,
    references: [
      'Fitzpatrick’s Color Atlas and Synopsis of Clinical Dermatology – Psoriasis; Eczematous dermatitis',
      'Habif – Clinical Dermatology – Psoriasis; Atopic dermatitis; Contact dermatitis',
      'Rook’s Textbook of Dermatology – Psoriasis; Atopic eczema',
    ],
  },
  {
    id: 'der-t3',
    title: 'Infecțiile și infestările cutanate',
    topic: 'Dermatologie infecțioasă',
    readMinutes: 4,
    content: `## Infecțiile bacteriene

| Afecțiune | Agent | Aspect |
|---|---|---|
| **Impetigo** | stafilococ, streptococ | eroziuni cu **cruste melicerice** (galbene), periorificial, la copii; contagios |
| **Foliculita / furunculul** | **Staphylococcus aureus** | pustulă foliculară / nodul inflamator centrat de un fir de păr |
| **Erizipelul** | **streptococ beta-hemolitic** | placă roșie, caldă, dureroasă, **bine delimitată**, cu febră; frecvent pe gambă |
| **Celulita** | streptococ, stafilococ | eritem cu margini difuze, afectare mai profundă |
| **Eritrasma** | Corynebacterium minutissimum | macule brune în pliuri, **fluorescență roșu-coral** la lampa Wood |

La erizipel se caută și se tratează **poarta de intrare** (intertrigo interdigital micotic, plăgi) – prevenția recidivelor.

## Infecțiile micotice

- **Dermatofiții (tinea)**: plăci inelare cu margine activă scuamoasă și centru mai clar (tinea corporis), intertrigo interdigital (tinea pedis), onicomicoză, tinea capitis la copil.
- **Candidoza**: intertrigo cu eritem lucios și leziuni satelite, candidoză bucală, vulvovaginală; favorizată de diabet, antibiotice, imunosupresie.
- **Pitiriazisul versicolor** (Malassezia): macule hipo- sau hiperpigmentate, fin scuamoase, pe trunchi.

**Diagnostic**: **examen micologic** – microscopie directă după clarificarea cu **KOH** (filamente miceliene) și cultură. Lampa Wood ajută în unele tinea capitis (Microsporum) și în eritrasmă.

**Capcană**: corticoizii topici aplicați pe o micoză o modifică și o extind („tinea incognito”).

## Scabia

- agent: acarianul **Sarcoptes scabiei**, transmis prin contact direct prelungit;
- **prurit intens, cu accentuare nocturnă**, frecvent la mai mulți membri ai familiei sau colectivității;
- leziune specifică: **șanțul acarian**; localizări – spații interdigitale, încheieturi, axile, periombilical, organe genitale, sâni; la adult fața este cruțată;
- tratament: scabicide topice sau, în anumite situații, oral; **tratarea simultană a contacților**; spălarea lenjeriei la temperatură înaltă.

## Pediculoza

Păduchii capului (copii), ai corpului (condiții precare), pubieni (transmitere sexuală). Se văd paraziții și ouăle (lindinile) atașate de fir.

## Principii generale

- infecțiile superficiale localizate se tratează topic; cele extinse sau cu semne generale – sistemic;
- se caută factorii favorizanți: **diabet**, imunosupresie, obezitate, umiditate;
- infecțiile contagioase impun măsuri pentru contacți.

## De reținut pentru examen

- Cruste melicerice = impetigo.
- Erizipel: margini nete, febră, streptococ; caută poarta de intrare.
- Prurit nocturn familial = scabie; tratezi și contacții.
- Micozele se confirmă micologic (KOH + cultură).
- Corticoizii topici pe o micoză produc tinea incognito.`,
    references: [
      'Fitzpatrick’s Color Atlas and Synopsis of Clinical Dermatology – Bacterial infections; Fungal infections; Infestations',
      'Habif – Clinical Dermatology – Bacterial infections; Superficial fungal infections; Infestations',
    ],
  },
  {
    id: 'der-t4',
    title: 'Melanomul și carcinoamele cutanate',
    topic: 'Oncologie cutanată',
    readMinutes: 4,
    content: `## Factori de risc comuni

- **expunerea la radiații ultraviolete** (arsuri solare în copilărie, expunere intermitentă intensă – mai ales pentru melanom; expunere cumulativă – pentru carcinoame);
- **fototipul deschis** (piele deschisă, ochi deschiși, păr roșcat sau blond);
- **nevi numeroși** sau atipici, istoric personal sau familial de melanom;
- imunosupresia (transplant), solariul.

## Melanomul

Tumoră malignă a **melanocitelor**, cu potențial metastatic ridicat. Poate apărea de novo sau pe un nev preexistent.

**Criteriile ABCDE**:
- **A**simetrie;
- **B**ordură neregulată, festonată;
- **C**uloare neomogenă (mai multe nuanțe de maro, negru, roșu, albastru);
- **D**iametru mare;
- **E**voluție – modificarea mărimii, formei, culorii, apariția sângerării.

Alte semne de alarmă: semnul **„rățuștii urâte”** (un nev diferit de restul), mâncărimea sau sângerarea unui nev.

**Forme clinice**: cu extensie superficială (cea mai frecventă), nodular (creștere rapidă în profunzime), lentigo malign (față la vârstnic), acral lentiginos (palme, plante, unghii).

**Diagnostic**: dermatoscopie, apoi **excizie completă** cu margine îngustă și **examen histopatologic**. Leziunile suspecte nu se distrug (laser, crioterapie) fără histologie.

**Prognostic**: depinde în principal de **grosimea tumorii (Breslow)** și de **ulcerație**, apoi de afectarea ganglionară și metastaze.

## Carcinoamele cutanate

| | Bazocelular | Spinocelular |
|---|---|---|
| Frecvență | **cel mai frecvent cancer cutanat** | al doilea |
| Aspect | papulă sau nodul **perlat**, cu **telangiectazii**, ulcerație centrală | nodul keratozic, ulcerat, care crește mai rapid |
| Leziuni precursoare | de regulă fără | **keratoze actinice**, boala Bowen, cicatrici vechi, ulcere cronice |
| Metastaze | **foarte rare** | posibile (ganglionare) |
| Comportament | invazie locală, distructiv | invaziv local și la distanță |

**Tratament**: chirurgical în principal; alternative (radioterapie, tratamente topice, crioterapie) pentru leziuni superficiale selectate, decise de specialist.

## Prevenție și fotoprotecție

- evitarea expunerii în orele cu radiație UV maximă;
- îmbrăcăminte, pălărie, ochelari de soare;
- **protecție solară** cu spectru larg, aplicată generos și reaplicată;
- evitarea solarului;
- protecția specială a copiilor;
- **autoexaminarea** periodică a pielii și controlul dermatologic la persoanele cu risc.

## De reținut pentru examen

- ABCDE + „rățușca urâtă” = suspiciune de melanom.
- Leziunea suspectă se excizează complet pentru histologie.
- Breslow este principalul factor prognostic al melanomului localizat.
- Bazocelularul: perlat, telangiectazii, metastazează excepțional.
- Spinocelularul pornește adesea dintr-o keratoză actinică.`,
    references: [
      'Fitzpatrick’s Color Atlas and Synopsis of Clinical Dermatology – Melanoma; Skin cancers',
      'Habif – Clinical Dermatology – Premalignant and malignant nonmelanoma skin tumors; Nevi and malignant melanoma',
    ],
  },
]
