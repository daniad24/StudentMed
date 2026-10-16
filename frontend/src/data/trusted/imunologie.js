// Imunologie – rezumate verificate (echipa Steto)
export default [
  {
    id: 'imu-t1',
    title: 'Imunitatea înnăscută și imunitatea adaptativă',
    topic: 'Bazele răspunsului imun',
    readMinutes: 3,
    content: `## Două linii de apărare

Sistemul imun funcționează pe două niveluri care colaborează. **Imunitatea înnăscută** este rapidă și nespecifică, prezentă de la naștere. **Imunitatea adaptativă** este mai lentă la primul contact, dar **specifică** pentru antigen și lasă **memorie**.

| Caracteristică | Înnăscută | Adaptativă |
|---|---|---|
| Viteza | minute – ore | zile la primul contact |
| Specificitate | recunoaște tipare comune microbilor | recunoaște epitopi precisi |
| Memorie | absentă sau minimă | prezentă |
| Celule | neutrofile, macrofage, celule NK, celule dendritice | limfocite T și B |
| Mediatori | complement, citokine, interferoni | anticorpi, citokine T |

## Mecanismele înnăscute

- **Bariere**: piele, mucoase, mucus, cili, aciditatea gastrică, lizozim.
- **Fagocitoza**: neutrofilele sosesc primele, macrofagele rămân în țesut și produc citokine.
- **Celulele NK**: distrug celulele infectate viral sau tumorale cu expresie scăzută de MHC clasa I.
- **Complementul** și **interferonii**.
- **Receptorii de recunoaștere a tiparelor** (de exemplu receptorii Toll) detectează structuri microbiene conservate și declanșează inflamația.

## Mecanismele adaptative

- **Imunitatea umorală**: limfocitele B se diferențiază în **plasmocite** care secretă anticorpi.
- **Imunitatea celulară**: limfocitele **T helper (CD4+)** coordonează răspunsul, iar cele **citotoxice (CD8+)** distrug celulele infectate.
- Activarea limfocitelor T necesită prezentarea antigenului de către **celulele prezentatoare de antigen** (celule dendritice, macrofage, limfocite B) pe moleculele MHC și un semnal de costimulare.

## Etapele unui răspuns adaptativ

1. Antigenul este captat și procesat de celula prezentatoare.
2. Celula migrează în ganglion și activează limfocitul T specific.
3. Are loc **expansiunea clonală**, apoi diferențierea în celule efectoare și celule de memorie.
4. La o nouă expunere, răspunsul secundar este mai rapid și mai intens.

## Toleranța

Limfocitele cu receptori reactivi la antigene proprii sunt eliminate sau inactivate în timpul maturării (**toleranță centrală**, în timus și măduvă) și prin mecanisme periferice. Eșecul toleranței favorizează **autoimunitatea**.

## De reținut pentru examen
- Memoria și specificitatea aparțin exclusiv imunității adaptative.
- Neutrofilul este celula primei ore în inflamația bacteriană acută.
- Celulele NK recunosc absența MHC clasa I, nu prezența lui.
- CD4 se asociază cu MHC clasa II, CD8 cu MHC clasa I.
- Răspunsul secundar este mai rapid, cu predominanța IgG.`,
    references: [
      'Abbas, Lichtman, Pillai – Basic Immunology: Functions and Disorders of the Immune System – imunitatea înnăscută și adaptativă',
      'Janeway’s Immunobiology – introducere în imunobiologie',
    ],
  },
  {
    id: 'imu-t2',
    title: 'Imunoglobulinele și complementul',
    topic: 'Efectori ai răspunsului umoral',
    readMinutes: 3,
    content: `## Structura unei imunoglobuline

O moleculă de anticorp are două lanțuri grele și două ușoare, legate prin punți disulfidice. Fragmentul **Fab** leagă antigenul, iar fragmentul **Fc** determină funcțiile efectoare (legarea complementului, legarea de receptori de pe celule).

## Clasele de imunoglobuline

| Clasă | Particularități | Rol principal |
|---|---|---|
| **IgG** | cea mai abundentă în ser; traversează placenta | răspuns secundar, opsonizare, neutralizare, imunitate pasivă la nou-născut |
| **IgM** | pentamer, primul anticorp în răspunsul primar | fixează complementul foarte eficient, aglutinare |
| **IgA** | în ser monomer; în secreții dimer cu piesă secretorie | apărarea mucoaselor, laptele matern |
| **IgE** | concentrație foarte mică, fixat pe mastocite | alergii, apărare antiparazitară |
| **IgD** | receptor pe limfocitul B naiv | semnalizare la nivelul limfocitului B |

## Funcțiile anticorpilor

- **Neutralizare** a toxinelor și a microbilor.
- **Opsonizare**: acoperirea microbului facilitează fagocitoza.
- **Activarea complementului** pe calea clasică (IgM și IgG).
- **Citotoxicitate mediată celular dependentă de anticorp**, de exemplu prin celule NK.

## Răspunsul primar și secundar

Primul contact produce o fază de latență, apoi **IgM**, urmat de IgG în cantități mai mici. La contactul repetat, răspunsul este rapid, intens, cu **IgG** în titru mare, datorită celulelor B de memorie.

## Complementul

Este un sistem de proteine plasmatice care se activează în cascadă pe trei căi:
- **clasică**: complexe antigen-anticorp, prin C1q;
- **alternativă**: activare spontană a C3 pe suprafețe microbiene;
- **lectinică**: lectina care leagă manoza.

Toate converg spre **C3**, apoi spre complexul de atac membranar **C5b-9**.

Efecte principale:
- **opsonizare** (C3b);
- **chemotaxie** și inflamație (C5a, C3a, anafilatoxine);
- **liză** prin MAC, importantă mai ales contra bacteriilor Neisseria.

Deficitul componentelor terminale favorizează infecțiile cu Neisseria, iar deficitul componentelor timpurii ale căii clasice se asociază cu boli prin complexe imune, cum este lupusul.

## De reținut pentru examen
- IgM apare prima, IgG persistă și traversează placenta.
- IgA secretorie apără mucoasele; IgE este legată de alergie și paraziți.
- Calea clasică este declanșată de complexe antigen-anticorp.
- C3b opsonizează, C5a atrage fagocite, C5b-9 lizează.
- Fragmentul Fc, nu Fab, mediază funcțiile efectoare.`,
    references: [
      'Abbas, Lichtman, Pillai – Basic Immunology – anticorpi și complement',
      'Janeway’s Immunobiology – structura anticorpilor, sistemul complementului',
    ],
  },
  {
    id: 'imu-t3',
    title: 'Hipersensibilitățile de tip I–IV',
    topic: 'Imunopatologie',
    readMinutes: 3,
    content: `## Principiu

Hipersensibilitatea este un răspuns imun exagerat sau inadecvat care produce leziuni tisulare. Clasificarea clasică (Gell și Coombs) descrie patru tipuri, după mecanismul efector.

| Tip | Mediator | Rapiditate | Exemple |
|---|---|---|---|
| **I** (anafilactic) | IgE fixat pe mastocite și bazofile | minute | anafilaxie, rinită alergică, astm alergic, urticarie alergică |
| **II** (citotoxic) | anticorpi IgG sau IgM împotriva antigenelor celulare | minute – ore | reacție transfuzională hemolitică, anemie hemolitică autoimună, boala hemolitică a nou-născutului |
| **III** (prin complexe imune) | complexe antigen-anticorp depuse în țesuturi | ore | boala serului, glomerulonefrită cu complexe imune, lupus |
| **IV** (întârziat) | limfocite T | 1–3 zile | reacția tuberculinică, dermatita de contact, granulom |

## Tipul I

La prima expunere alergenul stimulează producerea de **IgE**, care se fixează pe mastocite (**sensibilizare**). La reexpunere, alergenul leagă IgE vecine, mastocitul **degranulează** și eliberează histamină și alți mediatori. Rezultă vasodilatație, permeabilitate crescută, bronhoconstricție. Forma severă este **șocul anafilactic**.

## Tipul II

Anticorpii se leagă de antigene de pe suprafața celulelor sau a matricei. Celulele sunt distruse prin complement, fagocitoză sau citotoxicitate. Unii autoanticorpi nu distrug celula, ci îi modifică funcția: în **boala Graves** stimulează receptorul TSH, în **miastenia gravis** blochează receptorul acetilcolinei.

## Tipul III

Complexele solubile circulă și se depun în **glomeruli, vase, articulații**, activează complementul și atrag neutrofile, cu inflamație localizată. Vasculita și glomerulonefrita sunt manifestări tipice.

## Tipul IV

Nu depinde de anticorpi. Limfocitele T sensibilizate eliberează citokine și activează macrofagele. Reacția apare tardiv, la 24–72 de ore. Inflamația granulomatoasă din tuberculoză este o expresie cronică a acestui mecanism. Dermatita de contact (nichel) este un exemplu cotidian.

## Corelații clinice utile

Un același agent poate declanșa mai multe tipuri de reacție. De exemplu, în anumite infecții pot coexista leziuni prin complexe imune și prin mecanism celular. Anafilaxia este o urgență medicală care apare rapid după expunere, iar dermatita de contact se instalează după ore sau zile. În practică, testele cutanate pentru alergeni explorează reacția imediată de tip I, în timp ce testul tuberculinic explorează reacția întârziată de tip IV. Reținerea intervalului de apariție (minute, ore, zile) ajută la încadrarea corectă a unei reacții.

## De reținut pentru examen
- Tipul I = IgE, imediat; tipul IV = limfocite T, întârziat.
- Reacția transfuzională hemolitică acută și boala hemolitică Rh sunt tip II.
- Boala serului și lupusul ilustrează tipul III, prin complexe imune.
- Reacția Mantoux și dermatita de contact sunt de tip IV, nu IgE.
- Autoanticorpii anti-receptor (Graves, miastenie) sunt încadrați în tipul II.`,
    references: [
      'Abbas, Lichtman, Pillai – Basic Immunology – hipersensibilități',
      'Robbins and Cotran Pathologic Basis of Disease – Diseases of the Immune System',
    ],
  },
  {
    id: 'imu-t4',
    title: 'MHC/HLA, transplantul și rejetul',
    topic: 'Imunologia transplantului',
    readMinutes: 3,
    content: `## Complexul major de histocompatibilitate

La om se numește **HLA** și este codificat de gene foarte polimorfe de pe cromozomul 6. Moleculele HLA prezintă peptide limfocitelor T.

| Caracteristică | MHC clasa I | MHC clasa II |
|---|---|---|
| Gene | HLA-A, B, C | HLA-DP, DQ, DR |
| Expresie | aproape toate celulele nucleate | celule prezentatoare profesioniste |
| Peptide prezentate | endogene (de exemplu virale) | exogene, captate prin fagocitoză |
| Limfocite care recunosc | **CD8+** | **CD4+** |

Datorită polimorfismului, două persoane neînrudite au rareori același set HLA, de aceea compatibilitatea este dificil de realizat. Anumite alele HLA se asociază cu boli autoimune (de exemplu HLA-B27 cu spondilita anchilozantă).

## Antigene de transplant

Moleculele HLA ale donatorului sunt recunoscute ca străine de limfocitele T ale primitorului. Pe lângă HLA, contează **grupele sanguine ABO**.

## Tipurile de rejet

- **Hiperacut**: minute – ore, prin anticorpi preformați; grefonul se trombozează. Se previne prin compatibilitate ABO și testul de compatibilitate încrucișată.
- **Acut**: săptămâni – luni, mediat predominant de limfocite T, uneori și de anticorpi; răspunde la intensificarea imunosupresiei.
- **Cronic**: luni – ani, cu leziuni vasculare și fibroză progresivă; este principala cauză de pierdere tardivă a grefonului.

## Boala grefă contra gazdă

Apare după transplantul de celule stem hematopoietice: limfocitele T ale donatorului atacă țesuturile primitorului (piele, ficat, tub digestiv).

## Prevenție și tratament

- Selecția donatorului după **compatibilitate ABO și HLA**.
- **Crossmatch** pentru anticorpii anti-donator.
- **Imunosupresie** de durată, cu riscul infecțiilor oportuniste și al unor tumori.
- Vaccinurile vii sunt evitate la pacienții imunosuprimați.

## Aspecte practice

Donatorul poate fi viu sau decedat, iar alegerea se face după compatibilitate și după starea clinică a primitorului. Compatibilitatea HLA mai bună se asociază cu supraviețuire mai lungă a grefonului, dar nu elimină nevoia de imunosupresie. Pacienții transplantați necesită monitorizare atentă a funcției grefonului și a semnelor de infecție, deoarece rejetul și infecția pot avea manifestări asemănătoare. Un caz particular este grefa de cornee, care are risc scăzut de rejet deoarece este un țesut slab vascularizat, parțial protejat imunologic.

## De reținut pentru examen
- Clasa I: aproape toate celulele nucleate, CD8; clasa II: celule prezentatoare, CD4.
- Rejetul hiperacut este mediat de anticorpi preformați.
- Rejetul acut este în principal celular (limfocite T).
- Imunosupresia crește riscul de infecții oportuniste.
- HLA se află pe cromozomul 6 și este foarte polimorf.`,
    references: [
      'Abbas, Lichtman, Pillai – Basic Immunology – răspunsul imun față de transplant',
      'Janeway’s Immunobiology – MHC și prezentarea antigenului; transplantul',
    ],
  },
]
