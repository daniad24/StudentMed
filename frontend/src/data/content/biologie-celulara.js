// Biologie celulară și moleculară – conținut demo
export default {
  materials: [],
  flashcards: [
    { id: 'bcm-f1', front: 'Ce transportă pompa Na⁺/K⁺-ATP-ază la fiecare ciclu?', back: '3 Na⁺ spre exterior și 2 K⁺ spre interior, cu consum de ATP' },
    { id: 'bcm-f2', front: 'Unde se produce cea mai mare parte a ATP în celulă?', back: 'În mitocondrie, prin fosforilare oxidativă (membrana internă)' },
    { id: 'bcm-f3', front: 'Ce conțin lizozomii?', back: 'Hidrolaze acide active la pH acid' },
    { id: 'bcm-f4', front: 'Ce înseamnă că replicarea ADN este semiconservativă?', back: 'Fiecare moleculă fiică are o catenă veche și una nou sintetizată' },
    { id: 'bcm-f5', front: 'Ce enzimă sintetizează ARNm la eucariote?', back: 'ARN-polimeraza II' },
    { id: 'bcm-f6', front: 'Care este codonul de start al traducerii?', back: 'AUG, care codifică metionina' },
    { id: 'bcm-f7', front: 'În ce fază a ciclului celular se replică ADN?', back: 'În faza S' },
    { id: 'bcm-f8', front: 'Ce enzime execută apoptoza?', back: 'Caspazele' },
    { id: 'bcm-f9', front: 'Din ce proteină sunt formați microtubulii?', back: 'Tubulină (dimeri α și β)' },
    { id: 'bcm-f10', front: 'Care este rolul aparatului Golgi?', back: 'Modifică, sortează și ambalează proteinele și lipidele spre destinația lor' },
  ],
  questions: [
    // Membrana și transportul
    {
      id: 'bcm-q1',
      type: 'single',
      text: 'Difuzia facilitată se caracterizează prin:',
      options: ["transport în sensul gradientului, prin proteine transportoare, fără consum direct de ATP","transportul simultan al doi ioni în sensuri opuse, cuplat cu hidroliza ATP","trecerea moleculelor liposolubile direct printre fosfolipide","transport împotriva gradientului de concentrație, cu consum direct de ATP","ingerarea unor particule mari prin invaginarea membranei"],
      answer: [0],
      explanation: 'Difuzia facilitată este un transport pasiv: urmează gradientul, dar necesită canale sau transportori proteici (de exemplu GLUT pentru glucoză).',
    },
    {
      id: 'bcm-q2',
      type: 'multi',
      text: 'Care dintre următoarele sunt constituenți ai membranei plasmatice a celulelor umane?',
      options: ["Fosfolipide","Colesterol","ADN mitocondrial","Peptidoglican","Acizi micolici"],
      answer: [0, 1],
      explanation: 'Membrana plasmatică este un bistrat fosfolipidic cu colesterol și proteine. Peptidoglicanul și acizii micolici țin de peretele bacterian.',
    },
    {
      id: 'bcm-q3',
      type: 'single',
      text: 'Pompa Na⁺/K⁺-ATP-ază menține gradientele ionice prin:',
      options: ["scoaterea a 3 Na⁺ și introducerea a 2 K⁺","scoaterea a 3 K⁺ și introducerea a 3 Na⁺","introducerea a 3 Na⁺ și scoaterea a 2 K⁺","scoaterea a 2 Na⁺ și introducerea a 3 K⁺","schimb 1:1 între Na⁺ și K⁺, fără consum de energie"],
      answer: [0],
      explanation: 'Pompa expulzează 3 Na⁺ și aduce 2 K⁺ în celulă, consumând ATP; este transport activ primar.',
    },
    {
      id: 'bcm-q4',
      type: 'multi',
      text: 'Care dintre următoarele procese sunt forme de transport pasiv prin membrană?',
      options: ["Transportul Ca²⁺ în reticul prin pompe cu consum de ATP","Endocitoza mediată de receptori","Funcționarea pompei Na⁺/K⁺-ATP-ază","Difuzia facilitată a glucozei prin transportori GLUT","Difuzia simplă a oxigenului"],
      answer: [3, 4],
      explanation: 'Difuzia simplă și cea facilitată urmează gradientul fără energie metabolică directă. Pompele și endocitoza consumă energie.',
    },
    // Organitele
    {
      id: 'bcm-q5',
      type: 'single',
      text: 'Complexele lanțului respirator și ATP-sintaza sunt localizate în:',
      options: ["membrana mitocondrială internă","membrana lizozomală","matricea mitocondrială","membrana mitocondrială externă","spațiul intermembranar al nucleului"],
      answer: [0],
      explanation: 'Lanțul respirator și ATP-sintaza se află în membrana internă (crestele mitocondriale), unde gradientul de protoni susține sinteza ATP.',
    },
    {
      id: 'bcm-q6',
      type: 'single',
      text: 'Lizozomii sunt organite care:',
      options: ["sintetizează ARN ribozomal","sintetizează proteine pentru secreție","conțin hidrolaze acide cu activitate optimă la pH acid","produc ATP prin fosforilare oxidativă","sunt sediul principal al replicării ADN"],
      answer: [2],
      explanation: 'Lizozomii sunt veziculele digestive ale celulei, cu enzime hidrolitice active la pH acid; digeră materiale endocitate și organite uzate.',
    },
    {
      id: 'bcm-q7',
      type: 'multi',
      text: 'Care dintre următoarele funcții sunt asociate reticulului endoplasmatic neted?',
      options: ["Sinteza lipidelor","Detoxifierea unor substanțe străine organismului","Depozitarea ionilor de calciu","Sinteza proteinelor destinate secreției","Replicarea ADN"],
      answer: [0, 1, 2],
      explanation: 'REN sintetizează lipide, metabolizează xenobiotice (mai ales în hepatocit) și stochează Ca²⁺ (reticul sarcoplasmic în mușchi). Proteinele de secreție se sintetizează pe REG.',
    },
    {
      id: 'bcm-q8',
      type: 'single',
      text: 'Care este rolul principal al aparatului Golgi?',
      options: ["Modificarea post-translațională, sortarea și ambalarea proteinelor în vezicule","Degradarea acizilor grași cu lanț lung","Transcripția genelor","Producerea de energie sub formă de ATP","Sinteza ribozomilor"],
      answer: [0],
      explanation: 'Golgi primește produse din reticul, le modifică (de exemplu glicozilare) și le sortează spre membrană, lizozomi sau secreție.',
    },
    {
      id: 'bcm-q9',
      type: 'single',
      text: 'Peroxizomii se remarcă prin prezența enzimei catalază, care:',
      options: ["replică ADN-ul","leagă aminoacizii de ARNt","sintetizează fosfolipide","descompune peroxidul de hidrogen în apă și oxigen","degradează proteine marcate cu ubiquitină"],
      answer: [3],
      explanation: 'Peroxizomii oxidează acizi grași cu lanț foarte lung și alte substraturi, iar catalaza neutralizează H₂O₂ rezultat. Degradarea proteinelor ubiquitinate revine proteasomului.',
    },
    // Nucleul și replicarea ADN
    {
      id: 'bcm-q10',
      type: 'single',
      text: 'Modelul semiconservativ al replicării ADN înseamnă că:',
      options: ["fiecare moleculă fiică conține o catenă parentală și o catenă nou sintetizată","moleculele fiice conțin fragmente amestecate vechi și noi pe ambele catene","ambele catene ale fiecărei molecule fiice sunt noi","molecula veche rămâne intactă și se formează una complet nouă","replicarea are loc doar pe una dintre cele două catene"],
      answer: [0],
      explanation: 'Experimentul Meselson-Stahl a arătat că fiecare dublu helix fiu păstrează o catenă matriță parentală.',
    },
    {
      id: 'bcm-q11',
      type: 'multi',
      text: 'Care dintre următoarele proteine participă direct la replicarea ADN?',
      options: ["Helicaza","ADN-polimeraza","Proteasomul","Primaza","ADN-ligaza"],
      answer: [0, 1, 3, 4],
      explanation: 'Helicaza desface dublul helix, primaza sintetizează primerii, polimeraza extinde catenele, iar ligaza unește fragmentele Okazaki. Proteasomul degradează proteine.',
    },
    {
      id: 'bcm-q12',
      type: 'single',
      text: 'Nucleolul este implicat în principal în:',
      options: ["sinteza ARN ribozomal și asamblarea subunităților ribozomale","sinteza ATP","ambalarea proteinelor pentru secreție","digestia intracelulară","formarea fusului de diviziune"],
      answer: [0],
      explanation: 'În nucleol se transcrie ARNr și se asamblează subunitățile ribozomale, care sunt apoi exportate în citoplasmă.',
    },
    // Transcripția și traducerea
    {
      id: 'bcm-q13',
      type: 'single',
      text: 'La eucariote, ARNm este sintetizat de:',
      options: ["ADN-polimeraza III","ARN-polimeraza I","Primaza","ARN-polimeraza II","Revers-transcriptaza"],
      answer: [3],
      explanation: 'ARN-polimeraza II transcrie genele care codifică proteine; polimeraza I produce în principal ARNr, iar polimeraza III ARNt și alți ARN mici.',
    },
    {
      id: 'bcm-q14',
      type: 'single',
      text: 'Splicing-ul transcriptului primar la eucariote constă în:',
      options: ["degradarea completă a transcriptului în nucleu","traducerea ARN în proteină la nivelul nucleului","adăugarea unei cozi poli-A la capătul 5′","replicarea ARN pe o matriță de ADN","îndepărtarea intronilor și unirea exonilor"],
      answer: [4],
      explanation: 'Prin splicing se elimină secvențele necodificatoare (introni) și se leagă exonii. Coada poli-A se adaugă la capătul 3′, nu la 5′.',
    },
    {
      id: 'bcm-q15',
      type: 'single',
      text: 'Anticodonul se află la nivelul:',
      options: ["ARN de transfer","ADN-ului codificator","Proteinei nou sintetizate","ARN ribozomal","ARN mesager"],
      answer: [0],
      explanation: 'ARNt poartă anticodonul care recunoaște prin complementaritate codonul de pe ARNm și aduce aminoacidul corespunzător.',
    },
    {
      id: 'bcm-q16',
      type: 'single',
      text: 'Despre codul genetic este corectă afirmația:',
      options: ["AUG este codon de start și codifică metionina","este nedegenerat: fiecare aminoacid are un singur codon","diferă complet între organele și restul organismelor","toți codonii codifică aminoacizi","codonii sunt formați din două nucleotide"],
      answer: [0],
      explanation: 'Codul este degenerat și în esență universal; AUG inițiază traducerea, iar trei codoni sunt de stop și nu codifică aminoacizi.',
    },
    // Ciclul celular și diviziunea
    {
      id: 'bcm-q17',
      type: 'single',
      text: 'Replicarea ADN are loc în:',
      options: ["faza G2","faza S","citokineză","faza G1","metafază"],
      answer: [1],
      explanation: 'Faza S (de sinteză) este cea în care se duplică ADN-ul, astfel încât celula intră în G2 cu conținut dublu de ADN.',
    },
    {
      id: 'bcm-q18',
      type: 'multi',
      text: 'Care dintre următoarele sunt puncte de control ale ciclului celular?',
      options: ["Punctul de control al glicozilării din Golgi","Punctul de control al fusului de diviziune (metafază-anafază)","Tranziția G2/M","Tranziția G1/S","Punctul de control al importului mitocondrial"],
      answer: [1, 2, 3],
      explanation: 'Celula verifică integritatea ADN înainte de S și de mitoză și atașarea corectă a cromozomilor la fus înainte de anafază.',
    },
    {
      id: 'bcm-q19',
      type: 'single',
      text: 'Reducerea numărului de cromozomi de la diploid la haploid are loc în:',
      options: ["meioza I","profaza mitotică","meioza II","mitoză","faza S"],
      answer: [0],
      explanation: 'În meioza I se separă cromozomii omologi, ceea ce reduce numărul de cromozomi; meioza II separă cromatidele surori, ca într-o mitoză.',
    },
    {
      id: 'bcm-q20',
      type: 'multi',
      text: 'Care dintre următoarele caracteristici diferențiază meioza de mitoză?',
      options: ["Se desfășoară în toate celulele somatice","Rezultă două celule identice genetic cu celula-mamă","Rezultă patru celule haploide","Crossing-over în profaza I","Apare o singură diviziune nucleară"],
      answer: [2, 3],
      explanation: 'Meioza include recombinare (crossing-over) și două diviziuni succesive, producând patru celule haploide. Opțiunile 3-5 descriu mitoza.',
    },
    // Moartea celulară
    {
      id: 'bcm-q21',
      type: 'single',
      text: 'Apoptoza se deosebește de necroză prin faptul că:',
      options: ["apare numai în urma traumatismelor","declanșează întotdeauna inflamație intensă","este un proces programat, mediat de caspaze, de obicei fără reacție inflamatorie","implică umflarea celulei și ruptura membranei","nu necesită activarea niciunei enzime"],
      answer: [2],
      explanation: 'Apoptoza este moarte celulară programată, cu condensarea cromatinei și formarea de corpi apoptotici fagocitați, fără inflamație marcată.',
    },
    {
      id: 'bcm-q22',
      type: 'multi',
      text: 'Care dintre următoarele sunt caracteristice necrozei?',
      options: ["Reacție inflamatorie în țesutul din jur","Ruptura membranei și eliberarea conținutului celular","Tumefierea celulară","Activarea ordonată a cascadei caspazelor ca mecanism central","Formarea de corpi apoptotici"],
      answer: [0, 1, 2],
      explanation: 'Necroza este de obicei consecința unei agresiuni: celula se umflă, membrana cedează, iar conținutul eliberat atrage inflamația. Corpii apoptotici și caspazele caracterizează apoptoza.',
    },
    // Comunicarea celulară
    {
      id: 'bcm-q23',
      type: 'single',
      text: 'Receptorii cuplați cu proteine G sunt proteine care:',
      options: ["au obligatoriu activitate tirozin-kinazică proprie","sunt întotdeauna localizați în nucleu","leagă exclusiv hormoni steroizi","sunt canale ionice fără nicio activare prin ligand","străbat membrana de 7 ori și activează proteine G heterotrimerice"],
      answer: [4],
      explanation: 'GPCR au șapte domenii transmembranare; legarea ligandului activează proteina G, care modulează efectori precum adenilat-ciclaza.',
    },
    {
      id: 'bcm-q24',
      type: 'multi',
      text: 'Care dintre următorii mesageri acționează în mod obișnuit prin receptori intracelulari?',
      options: ["Hormonii tiroidieni","Insulina","Aldosteronul","Estradiolul","Cortizolul"],
      answer: [0, 2, 3, 4],
      explanation: 'Hormonii steroizi și cei tiroidieni sunt liposolubili și traversează membrana pentru a lega receptori intracelulari. Insulina acționează pe un receptor membranar cu activitate tirozin-kinazică.',
    },
    {
      id: 'bcm-q25',
      type: 'single',
      text: 'AMPc este un mesager secund produs de:',
      options: ["adenilat-ciclază","catalază","ARN-polimerază","ATP-sintază","fosfodiesterază"],
      answer: [0],
      explanation: 'Adenilat-ciclaza transformă ATP în AMPc după activarea de către proteina G stimulatoare; fosfodiesteraza degradează AMPc.',
    },
    // Citoschelet
    {
      id: 'bcm-q26',
      type: 'single',
      text: 'Microtubulii sunt alcătuiți din:',
      options: ["actină","keratină","colagen","tubulină","miozină"],
      answer: [3],
      explanation: 'Microtubulii sunt polimeri de dimeri de tubulină α și β; microfilamentele sunt din actină, iar filamentele intermediare din proteine precum keratina.',
    },
    {
      id: 'bcm-q27',
      type: 'multi',
      text: 'Care dintre următoarele structuri sau procese depind de microtubuli?',
      options: ["Contracția sarcomerului prin glisarea actinei pe miozină","Centrozomul ca centru de organizare","Axonema cililor și flagelilor","Transportul veziculelor prin kinezine și dineine","Fusul de diviziune"],
      answer: [1, 2, 3, 4],
      explanation: 'Microtubulii alcătuiesc fusul, șinele de transport intracelular, axonema și se organizează pornind de la centrozom. Contracția musculară depinde de microfilamente de actină și miozină.',
    },
    {
      id: 'bcm-q28',
      type: 'single',
      text: 'Filamentele intermediare au în principal rolul de:',
      options: ["sinteză de proteine","generare a forței de contracție musculară","formare a fusului mitotic","susținere mecanică și rezistență la tensiune (de exemplu keratina în epitelii)","transport activ de ioni prin membrană"],
      answer: [3],
      explanation: 'Filamentele intermediare conferă rezistență mecanică celulelor și țesuturilor; keratinele din epitelii sunt exemplul clasic.',
    },
    {
        "id": "bcm-qi1",
        "type": "single",
        "image": {
            "src": "/img/ciclul-celular.svg",
            "alt": "Ciclul celular cu patru faze marcate A–D"
        },
        "text": "În ce fază marcată pe schema ciclului celular se replică ADN-ul?",
        "options": [
            "Faza A",
            "Faza B",
            "Faza C",
            "Faza D",
            "Nicio fază: ADN-ul se replică doar în mitoză"
        ],
        "answer": [
            1
        ],
        "explanation": "Ciclul este G1 (A), S (B), G2 (C), M (D). ADN-ul se replică în faza S."
    },
    {
        "id": "bcm-qi2",
        "type": "single",
        "image": {
            "src": "/img/ciclul-celular.svg",
            "alt": "Ciclul celular cu patru faze marcate A–D"
        },
        "text": "Faza marcată cu D pe schema ciclului celular corespunde:",
        "options": [
        "Mitozei",
        "Fazei de replicare a ADN-ului",
        "Fazei G1",
        "Fazei G2",
        "Fazei de repaus G0"
    ],
        "answer": [0],
        "explanation": "Ciclul parcurge G1, S, G2 și apoi mitoza (M), cea mai scurtă fază."
    },
    {
        "id": "bcm-qi3",
        "type": "multi",
        "image": {
            "src": "/img/ciclul-celular.svg",
            "alt": "Ciclul celular cu patru faze marcate A–D"
        },
        "text": "Care afirmații despre fazele marcate pe schemă sunt corecte?",
        "options": [
            "Faza A (G1) este o fază de creștere și pregătire pentru replicare",
            "Faza C (G2) include verificarea ADN-ului replicat și pregătirea pentru mitoză",
            "Fazele A, B și C alcătuiesc interfaza",
            "Faza D este faza cea mai lungă a ciclului",
            "În faza B se separă cromozomii"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Interfaza cuprinde G1, S și G2; mitoza (D) este scurtă, iar separarea cromozomilor are loc în mitoză, nu în S."
    },
  ],
}
