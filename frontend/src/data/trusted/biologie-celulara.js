// Biologie celulară și moleculară – rezumate verificate (echipa Steto)
export default [
  {
    id: 'bcm-t1',
    title: 'Membrana plasmatică și transportul transmembranar',
    topic: 'Membrana și transportul',
    readMinutes: 3,
    content: `## Structura membranei

Membrana plasmatică este un **bistrat fosfolipidic** în care sunt inserate proteine și colesterol. Capetele hidrofile ale fosfolipidelor privesc spre mediul apos, iar cozile hidrofobe formează interiorul bistratului. Modelul acceptat este cel al **mozaicului fluid**: lipidele și multe proteine se pot deplasa lateral în planul membranei.

- **Colesterolul** modulează fluiditatea: împiedică atât rigidizarea excesivă, cât și fluidizarea excesivă.
- **Proteinele integrale** traversează bistratul (canale, transportori, receptori); cele **periferice** se atașează de suprafața lui.
- **Glicolipidele și glicoproteinele** de pe fața externă formează glicocalixul, important pentru recunoaștere celulară.

## Permeabilitatea selectivă

Moleculele mici, nepolare (O₂, CO₂) traversează liber bistratul. Ionii și moleculele polare mari au nevoie de proteine specializate.

## Tipuri de transport

| Tip | Energie | Sens față de gradient | Exemplu |
|---|---|---|---|
| Difuzie simplă | nu | în sensul gradientului | O₂, CO₂ |
| Difuzie facilitată | nu | în sensul gradientului | glucoză prin GLUT, canale ionice |
| Osmoză | nu | apă spre compartimentul mai concentrat | apa prin aquaporine |
| Transport activ primar | da, ATP direct | împotriva gradientului | pompa Na⁺/K⁺-ATP-ază |
| Transport activ secundar | indirect, folosește gradientul unui ion | împotriva gradientului pentru substrat | cotransportul Na⁺-glucoză din intestin |

### Pompa Na⁺/K⁺-ATP-ază

Scoate **3 Na⁺** și introduce **2 K⁺** la fiecare ciclu. Menține concentrația mare de K⁺ intracelular și de Na⁺ extracelular, contribuie la potențialul de membrană și la controlul volumului celular. Ouabaina și digitalicele o inhibă.

## Transport în vezicule

- **Endocitoza**: fagocitoza (particule mari), pinocitoza (lichide) și endocitoza mediată de receptori (de exemplu captarea LDL, a transferinei).
- **Exocitoza**: fuziunea veziculelor cu membrana, pentru secreție sau pentru reînnoirea membranei.
- Ambele necesită energie și implică mecanisme proteice (clatrină, proteine SNARE).

## Canale ionice

Pot fi **voltaj-dependente**, **ligand-dependente** sau mecanosensibile. Selectivitatea lor pentru un anumit ion depinde de structura porului. Bolile canalelor (canalopatiile) apar prin mutații ale acestor proteine; fibroza chistică este un exemplu legat de canalul de clor CFTR.

## De reținut pentru examen

- Difuzia facilitată **nu consumă ATP** și urmează gradientul, deși folosește proteine.
- Pompa Na⁺/K⁺: **3 Na⁺ afară, 2 K⁺ înăuntru**.
- Cotransportul Na⁺-glucoză este transport activ **secundar**, nu primar.
- Moleculele liposolubile și gazele traversează direct bistratul, fără transportor.
- Colesterolul reglează fluiditatea; nu este prezent în membrana bacteriană obișnuită.
`,
    references: [
      'Alberts – Molecular Biology of the Cell – Structura membranei și transportul membranar',
      'Lippincott Illustrated Reviews: Biochemistry – Structura membranelor',
    ],
  },
  {
    id: 'bcm-t2',
    title: 'Organitele celulare și rolul lor',
    topic: 'Organitele celulare',
    readMinutes: 3,
    content: `## Principiul compartimentării

Celula eucariotă își separă funcțiile în compartimente delimitate de membrane. Aceasta permite condiții chimice diferite (de exemplu pH acid în lizozom) și reglarea fină a proceselor.

## Mitocondria

- Are **două membrane**: cea externă este permeabilă, cea internă este plisată în **creste** și conține lanțul respirator și **ATP-sintaza**.
- În **matrice** se desfășoară ciclul Krebs și beta-oxidarea acizilor grași.
- Conține **ADN propriu**, circular, și ribozomi; se transmite pe linie maternă. Mitocondriile se divid prin fisiune.
- Participă la apoptoză prin eliberarea citocromului c.

## Reticulul endoplasmatic

| Tip | Caracteristici | Funcții |
|---|---|---|
| **Rugos (REG)** | ribozomi atașați | sinteza proteinelor de secreție, de membrană și lizozomale; glicozilare inițială |
| **Neted (REN)** | fără ribozomi | sinteza lipidelor, detoxifiere (hepatocit), depozit de Ca²⁺ |

În celulele musculare, REN specializat se numește **reticul sarcoplasmic** și stochează calciul necesar contracției.

## Aparatul Golgi

Primește vezicule dinspre reticul pe fața **cis** și le trimite pe fața **trans**. Modifică proteinele (glicozilare, adăugare de grupări fosfat), le **sortează** și le ambalează în vezicule de secreție, în vezicule destinate membranei sau în lizozomi. Este foarte dezvoltat în celulele secretorii.

## Lizozomii

- Vezicule cu **hidrolaze acide**, active la pH acid, menținut de pompe de protoni.
- Digeră materialul fagocitat și organitele îmbătrânite (autofagie).
- Deficitul unei enzime lizozomale produce **boli de stocare lizozomală**, în care substratul se acumulează.

## Peroxizomii

Conțin oxidaze și **catalază**. Oxidează acizi grași cu lanț foarte lung și neutralizează peroxidul de hidrogen format. Sunt bine reprezentați în ficat și rinichi.

## Alte structuri

- **Nucleolul**: loc de sinteză a ARNr și de asamblare a subunităților ribozomale.
- **Ribozomii liberi** sintetizează proteine citosolice; cei atașați la REG, proteine destinate secreției sau membranei.
- **Proteasomul** degradează proteinele marcate cu ubiquitină.

## Calea secretorie

Ribozom pe REG, apoi reticul, apoi vezicule de transport, apoi Golgi, apoi vezicule de secreție, apoi membrană plasmatică (exocitoză).

## De reținut pentru examen

- ATP-sinteza se află în membrana **internă** mitocondrială.
- Mitocondria are ADN propriu și se transmite **matern**.
- Proteinele de secreție se sintetizează pe **REG**, nu pe REN.
- Lizozomii: enzime **hidrolitice acide**; peroxizomii: **catalază**.
- Golgi = modificare, sortare, ambalare, nu sinteză primară de proteine.
`,
    references: [
      'Alberts – Molecular Biology of the Cell – Compartimentele celulare',
      'Junqueira’s Basic Histology – Citoplasma',
    ],
  },
  {
    id: 'bcm-t3',
    title: 'Replicarea ADN, transcripția și traducerea',
    topic: 'Fluxul informației genetice',
    readMinutes: 4,
    content: `## Dogma centrală

Informația circulă de regulă astfel: **ADN, apoi ARN, apoi proteină**. Replicarea copiază ADN-ul, transcripția produce ARN pe o matriță de ADN, iar traducerea sintetizează proteina pe baza ARNm.

## Replicarea ADN

Este **semiconservativă**: fiecare moleculă fiică păstrează o catenă parentală. Are loc în faza S, în nucleu, pornind de la **origini de replicare** multiple la eucariote.

1. **Helicaza** desface dublul helix, formând furca de replicare.
2. **Primaza** sintetizează un scurt primer de ARN.
3. **ADN-polimeraza** adaugă nucleotide doar în sens 5′→3′ și are activitate de corecție.
4. Pe catena **continuă** sinteza este neîntreruptă; pe cea **discontinuă** se formează **fragmente Okazaki**.
5. **ADN-ligaza** unește fragmentele, după îndepărtarea primerilor.

Telomeraza completează capetele cromozomilor (telomerii), un aspect important în celulele stem și în cele tumorale. Erorile rămase pot fi reparate de sisteme de reparare a nepotrivirilor.

## Transcripția

Sinteza ARN pe catena matriță de către **ARN-polimeraze**. La eucariote:

| Enzimă | Produs principal |
|---|---|
| ARN-polimeraza I | ARN ribozomal (nucleol) |
| ARN-polimeraza II | ARNm |
| ARN-polimeraza III | ARNt și alți ARN mici |

Pornește la **promotor**, cu ajutorul factorilor de transcripție. Transcriptul primar (pre-ARNm) este procesat în nucleu:
- **capping** la capătul 5′;
- **poliadenilare** la capătul 3′;
- **splicing**: eliminarea intronilor și unirea exonilor; splicing-ul alternativ permite mai multe proteine dintr-o genă.

## Codul genetic și traducerea

Codul este **tripletic**, **degenerat** (mai mulți codoni pentru același aminoacid) și, în esență, **universal**. Codonul **AUG** inițiază traducerea (metionină); trei codoni sunt de stop.

- **ARNt** aduce aminoacidul și recunoaște codonul prin **anticodon**.
- **Ribozomul** (subunități mare și mică) catalizează legătura peptidică.
- Etape: inițiere, elongare, terminare.
- După sinteză, proteinele pot fi pliate cu ajutorul **șaperonilor**, modificate și direcționate spre destinație.

## Reglarea expresiei

Intensitatea transcripției este controlată de factori de transcripție, enhanceri și silențiatori, precum și de modificări epigenetice (metilarea ADN, modificări ale histonelor).

## De reținut pentru examen

- Polimeraza adaugă nucleotide numai în sensul **5′→3′**.
- Fragmentele **Okazaki** apar pe catena discontinuă.
- ARN-polimeraza **II** produce ARNm la eucariote.
- Capping 5′ și coada poli-A 3′; splicing = eliminarea intronilor.
- **Anticodonul** este pe ARNt; codonul, pe ARNm.
- Codul este degenerat, nu ambiguu: un codon specifică un singur aminoacid.
`,
    references: [
      'Alberts – Molecular Biology of the Cell – De la ADN la proteină',
      'Lippincott Illustrated Reviews: Biochemistry – Structura ADN, replicare, transcripție, sinteza proteinelor',
    ],
  },
  {
    id: 'bcm-t4',
    title: 'Ciclul celular, diviziunea și moartea celulară',
    topic: 'Ciclul celular și moartea celulară',
    readMinutes: 4,
    content: `## Ciclul celular

Ciclul are două mari părți: **interfaza** (G1, S, G2) și **mitoza** (faza M).

- **G1**: creștere și pregătire; celula poate ieși din ciclu în **G0** (stare de repaus, de exemplu neuronii).
- **S**: replicarea ADN.
- **G2**: verificarea replicării, pregătirea mitozei.
- **M**: mitoza urmată de citokineză.

### Reglare

Progresia este condusă de complexe **ciclină-CDK**. Celula are **puncte de control**: la G1/S (ADN integru, condiții favorabile), la G2/M (replicare completă) și în metafază (atașarea corectă a cromozomilor la fus). Proteina **p53** oprește ciclul când ADN-ul este lezat și poate induce apoptoza; **Rb** frânează trecerea G1/S. Protooncogenele stimulează ciclul, iar genele supresoare tumorale îl frânează; mutațiile lor participă la apariția cancerului.

## Mitoza

Profază, prometafază, metafază, anafază, telofază. Rezultă **două celule fiice identice genetic**, diploide. În anafază se separă **cromatidele surori**. Fusul de diviziune este alcătuit din microtubuli.

## Meioza

Formează gameții prin **două diviziuni** succesive cu o singură replicare ADN.

| | Mitoza | Meioza |
|---|---|---|
| Celule rezultate | 2, diploide | 4, haploide |
| Recombinare | nu | da (crossing-over în profaza I) |
| Ce se separă în anafază | cromatide surori | omologi (I), cromatide (II) |
| Rol | creștere, regenerare | formarea gameților |

Nedisjuncția în meioză duce la **aneuploidii** (de exemplu trisomia 21).

## Moartea celulară

| | Apoptoza | Necroza |
|---|---|---|
| Natura | programată, activă | de obicei accidentală, pasivă |
| Celula | se contractă, cromatina se condensează | se umflă, membrana se rupe |
| Mecanism | **caspaze**, citocrom c, familia Bcl-2 | cedarea energetică, leziune de membrană |
| Rezultat | corpi apoptotici fagocitați | conținut eliberat |
| Inflamație | de regulă absentă | prezentă |

Apoptoza este esențială în dezvoltare (de exemplu modelarea degetelor), în homeostazia țesuturilor și în eliminarea celulelor lezate. Se poate declanșa pe cale **intrinsecă** (mitocondrială) sau **extrinsecă** (receptori de moarte, de exemplu Fas). Evitarea apoptozei este o caracteristică a celulelor tumorale.

## De reținut pentru examen

- ADN se replică în **S**; cromatidele surori se separă în **anafaza mitotică**.
- **Meioza I** este cea reducțională (omologii se separă).
- **p53** = gardianul genomului: oprește ciclul sau induce apoptoza.
- Apoptoza: **fără inflamație**, caspaze; necroza: **cu inflamație**.
- Celulele din G0 nu se divid activ, dar pot reintra în ciclu în anumite condiții.
`,
    references: [
      'Alberts – Molecular Biology of the Cell – Ciclul celular și moartea celulară',
      'Robbins and Cotran Pathologic Basis of Disease – Leziunea și moartea celulară',
    ],
  },
]
