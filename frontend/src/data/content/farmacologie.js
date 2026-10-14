// Farmacologie – conținut demo
export default {
  materials: [
    {
      id: 'far-m1',
      type: 'summary',
      title: 'Farmacocinetică: ADME pe scurt',
      author: 'Ioana R.',
      upvotes: 21,
      recommended: true,
      createdAt: '2026-10-06',
      content: `## Ce înseamnă ADME
Farmacocinetica descrie ce face organismul cu medicamentul: **A**bsorbție, **D**istribuție, **M**etabolizare, **E**liminare.

## Absorbție și biodisponibilitate
- **Biodisponibilitatea** = fracția din doza administrată care ajunge nemodificată în circulația sistemică.
- Pe cale intravenoasă biodisponibilitatea este, prin definiție, 100%.
- **Efectul de prim pasaj hepatic**: după administrarea orală, medicamentul trece prin vena portă și ficat înainte de circulația sistemică, fiind parțial metabolizat; biodisponibilitatea scade.
- Căile sublinguală și rectală (parțial) ocolesc prim pasajul hepatic.

## Distribuție
- Depinde de legarea de proteinele plasmatice (în special albumina), de liposolubilitate și de bariere (hematoencefalică, placentară).
- Doar fracția liberă este activă farmacologic.

## Metabolizare
- Faza I (oxidare, reducere, hidroliză) – în mare parte prin citocromul P450 (CYP).
- Faza II (conjugare: glucuronoconjugare, sulfoconjugare, acetilare).

| Tip | Exemple | Consecință |
|---|---|---|
| Inductori CYP | rifampicină, carbamazepină, fenitoină, fenobarbital | scad concentrația altor medicamente |
| Inhibitori CYP | ketoconazol, claritromicină, eritromicină, suc de grepfrut | cresc concentrația și riscul de toxicitate |

## Eliminare
- Predominant renală (filtrare, secreție tubulară) sau biliară.
- **Timpul de înjumătățire (t½)** = timpul în care concentrația plasmatică scade la jumătate.
- Starea de echilibru se atinge după aproximativ 4–5 timpi de înjumătățire.

> Interacțiunea clasică de examen: un inductor enzimatic asociat warfarinei scade efectul anticoagulant; un inhibitor enzimatic îl crește, cu risc hemoragic.`,
    },
    {
      id: 'far-m2',
      type: 'summary',
      title: 'Sistemul nervos vegetativ – agoniști și antagoniști',
      author: 'Mihai P.',
      upvotes: 17,
      recommended: false,
      createdAt: '2026-10-08',
      content: `## Sistemul colinergic
- **Mediator**: acetilcolina; receptori **muscarinici** (organe efectoare parasimpatice) și **nicotinici** (ganglioni, placa neuromusculară).
- **Anticolinesterazice** (neostigmină, fizostigmină): inhibă acetilcolinesteraza și cresc acetilcolina în sinapsă. Organofosforicele o inhibă ireversibil.
- Efecte muscarinice: mioză, bradicardie, bronhoconstricție și bronhoree, hipersalivație, creșterea peristaltismului.

## Anticolinergicele (antimuscarinice)
- **Atropina** – antagonist competitiv al receptorilor muscarinici.
- Efecte: midriază, tahicardie, uscăciunea gurii, retenție urinară, constipație, tegumente uscate și calde.
- Contraindicație clasică: glaucomul cu unghi închis.
- Antidot în intoxicația cu organofosforice (alături de pralidoximă).

## Sistemul adrenergic
| Receptor | Efect principal | Exemple |
|---|---|---|
| α1 | vasoconstricție, midriază | agonist: fenilefrină; antagonist: prazosin |
| β1 | crește frecvența și contractilitatea cardiacă | antagonist: metoprolol, bisoprolol |
| β2 | bronhodilatație, vasodilatație | agonist: salbutamol |

- **Adrenalina** stimulează receptorii α și β – tratament de primă linie în șocul anafilactic.

## Beta-blocantele
- Scad frecvența cardiacă, contractilitatea și secreția de renină.
- Efecte adverse: bradicardie, bloc atrioventricular, bronhospasm (mai ales neselectivele, ex. propranolol), oboseală, mascarea simptomelor adrenergice ale hipoglicemiei.

> Astmul bronșic este contraindicația clasică pentru beta-blocantele neselective, prin blocarea receptorilor β2 bronșici.`,
    },
  ],
  flashcards: [
    { id: 'far-f1', front: 'Ce este biodisponibilitatea?', back: 'Fracția din doza administrată care ajunge nemodificată în circulația sistemică.' },
    { id: 'far-f2', front: 'Antidotul heparinei?', back: 'Sulfatul de protamină.' },
    { id: 'far-f3', front: 'Antidotul antivitaminelor K (warfarină, acenocumarol)?', back: 'Vitamina K; în urgență, concentrat de complex protrombinic sau plasmă.' },
    { id: 'far-f4', front: 'Tratamentul intoxicației cu organofosforice?', back: 'Atropină, asociată cu pralidoximă (reactivator de colinesterază).' },
    { id: 'far-f5', front: 'Reacția clasică la perfuzia rapidă de vancomicină?', back: 'Sindromul „omului roșu” – eliberare de histamină.' },
    { id: 'far-f6', front: 'Mecanismul de acțiune al IECA?', back: 'Inhibă enzima de conversie: scade angiotensina II, crește bradikinina.' },
    { id: 'far-f7', front: 'De ce sunt IECA și sartanii contraindicați în sarcină?', back: 'Sunt fetotoxici (afectare renală fetală, oligohidramnios).' },
    { id: 'far-f8', front: 'Efecte adverse clasice ale spironolactonei?', back: 'Hiperkaliemie și ginecomastie.' },
    { id: 'far-f9', front: 'Tulburarea electrolitică tipică pentru diureticele tiazidice și de ansă?', back: 'Hipokaliemia.' },
    { id: 'far-f10', front: 'Mecanismul furosemidului?', back: 'Inhibă cotransportorul Na-K-2Cl din ramura ascendentă groasă a ansei Henle.' },
    { id: 'far-f11', front: 'Avantaj și dezavantaj al coxibilor (inhibitori selectivi COX-2)?', back: 'Mai puține efecte gastrointestinale, dar risc cardiovascular trombotic crescut.' },
    { id: 'far-f12', front: 'Mecanismul de acțiune al macrolidelor?', back: 'Inhibă sinteza proteică bacteriană prin legare de subunitatea ribozomală 50S.' },
  ],
  questions: [
    {
      id: 'far-q1',
      type: 'single',
      text: 'Biodisponibilitatea unui medicament administrat intravenos este:',
      options: ['Aproximativ 50%', 'Variabilă, în funcție de efectul de prim pasaj hepatic', '100%', 'Dependentă de pH-ul gastric', 'Nulă până la încheierea distribuției'],
      answer: [2],
      explanation: 'Pe cale intravenoasă întreaga doză ajunge direct în circulația sistemică, deci biodisponibilitatea este prin definiție 100%. Prim pasajul hepatic afectează administrarea orală.',
    },
    {
      id: 'far-q2',
      type: 'single',
      text: 'Efectul de prim pasaj hepatic:',
      options: [
        'Crește biodisponibilitatea medicamentelor administrate sublingual',
        'Reduce cantitatea de medicament nemodificat care ajunge în circulația sistemică după administrare orală',
        'Apare caracteristic la administrarea intravenoasă',
        'Reprezintă eliminarea renală a metaboliților',
        'Crește concentrația plasmatică a formei nemodificate',
      ],
      answer: [1],
      explanation: 'După absorbția intestinală, medicamentul ajunge prin vena portă în ficat, unde este parțial metabolizat înainte de circulația sistemică. Calea sublinguală ocolește acest efect.',
    },
    {
      id: 'far-q3',
      type: 'single',
      text: 'Timpul de înjumătățire plasmatică (t½) al unui medicament reprezintă:',
      options: [
        'Timpul până la atingerea concentrației plasmatice maxime',
        'Durata acțiunii terapeutice a unei doze',
        'Timpul necesar eliminării complete a medicamentului',
        'Timpul în care concentrația plasmatică scade la jumătate',
        'Timpul necesar absorbției a jumătate din doză',
      ],
      answer: [3],
      explanation: 'T½ este timpul în care concentrația plasmatică scade la jumătate; de el depinde intervalul dintre doze, iar starea de echilibru se atinge după aproximativ 4–5 timpi de înjumătățire.',
    },
    {
      id: 'far-q4',
      type: 'single',
      text: 'Sartanii (de exemplu losartanul) acționează prin:',
      options: [
        'Blocarea receptorilor AT1 ai angiotensinei II',
        'Inhibarea enzimei de conversie a angiotensinei',
        'Inhibarea directă a reninei',
        'Blocarea canalelor de calciu de tip L',
        'Antagonizarea receptorilor de aldosteron',
      ],
      answer: [0],
      explanation: 'Sartanii blochează receptorii AT1, fără a inhiba degradarea bradikininei; de aceea tusea seacă este mult mai rară decât la IECA.',
    },
    {
      id: 'far-q5',
      type: 'multi',
      text: 'Care dintre următoarele medicamente sunt inductori enzimatici ai citocromului P450?',
      options: ['Rifampicina', 'Ketoconazolul', 'Carbamazepina', 'Claritromicina', 'Fenitoina'],
      answer: [0, 2, 4],
      explanation: 'Rifampicina, carbamazepina și fenitoina sunt inductori clasici ai CYP. Ketoconazolul și claritromicina sunt, dimpotrivă, inhibitori enzimatici.',
    },
    {
      id: 'far-q6',
      type: 'multi',
      text: 'Care dintre următoarele sunt inhibitori ai CYP3A4?',
      options: ['Fenobarbitalul', 'Eritromicina', 'Rifampicina', 'Sucul de grepfrut', 'Ketoconazolul'],
      answer: [1, 3, 4],
      explanation: 'Macrolidele (eritromicina, claritromicina), antifungicele azolice și sucul de grepfrut inhibă CYP3A4. Fenobarbitalul și rifampicina sunt inductori enzimatici.',
    },
    {
      id: 'far-q7',
      type: 'single',
      text: 'La un pacient tratat cronic cu warfarină se asociază rifampicină. Consecința așteptată este:',
      options: [
        'Creșterea INR și risc hemoragic',
        'Nicio modificare, cele două nu interacționează',
        'Creșterea absorbției intestinale a warfarinei',
        'Creșterea fracției libere a warfarinei',
        'Scăderea efectului anticoagulant, prin accelerarea metabolizării warfarinei',
      ],
      answer: [4],
      explanation: 'Rifampicina este un inductor enzimatic puternic și accelerează metabolizarea hepatică a warfarinei, scăzând efectul anticoagulant. Creșterea INR ar fi de așteptat la un inhibitor enzimatic.',
    },
    {
      id: 'far-q8',
      type: 'single',
      text: 'Un agonist parțial este un ligand care:',
      options: [
        'Nu are afinitate pentru receptor',
        'Produce efectul maxim posibil al sistemului',
        'Are afinitate pentru receptor, dar eficacitate intrinsecă submaximală',
        'Blochează ireversibil receptorul',
        'Acționează exclusiv pe un alt receptor decât agonistul complet',
      ],
      answer: [2],
      explanation: 'Agonistul parțial se leagă de receptor, dar chiar la ocupare completă produce un efect mai mic decât agonistul complet. În prezența unui agonist complet se poate comporta ca antagonist.',
    },
    {
      id: 'far-q9',
      type: 'single',
      text: 'Un antagonist competitiv reversibil modifică curba doză–efect a agonistului astfel:',
      options: [
        'Scade efectul maxim, fără deplasarea curbei',
        'Deplasează curba spre stânga',
        'Nu are niciun efect asupra curbei',
        'Deplasează curba spre dreapta, fără a modifica efectul maxim',
        'Transformă agonistul în agonist invers',
      ],
      answer: [3],
      explanation: 'Antagonistul competitiv reversibil poate fi depășit prin creșterea concentrației agonistului, deci curba se deplasează spre dreapta, iar efectul maxim rămâne același. Scăderea efectului maxim este tipică antagonismului necompetitiv.',
    },
    {
      id: 'far-q10',
      type: 'multi',
      text: 'Care dintre următoarele medicamente au index terapeutic îngust?',
      options: ['Litiul', 'Amoxicilina', 'Digoxina', 'Warfarina', 'Loratadina'],
      answer: [0, 2, 3],
      explanation: 'Litiul, digoxina și warfarina au o distanță mică între concentrațiile eficace și cele toxice și necesită monitorizare. Amoxicilina și loratadina au o marjă de siguranță largă.',
    },
    {
      id: 'far-q11',
      type: 'single',
      text: 'Indexul terapeutic al unui medicament se definește ca:',
      options: [
        'Produsul dintre doza eficace și doza toxică',
        'Raportul dintre doza toxică (letală) 50% și doza eficace 50%',
        'Raportul dintre doza eficace 50% și doza letală 50%',
        'Diferența dintre concentrația maximă și cea minimă',
        'Raportul dintre clearance și volumul de distribuție',
      ],
      answer: [1],
      explanation: 'Indexul terapeutic este DL50 (sau DT50) / DE50; cu cât valoarea e mai mare, cu atât medicamentul este mai sigur. Varianta inversată este o capcană frecventă.',
    },
    {
      id: 'far-q12',
      type: 'single',
      text: 'Atropina acționează ca:',
      options: [
        'Agonist al receptorilor nicotinici',
        'Inhibitor al acetilcolinesterazei',
        'Antagonist competitiv al receptorilor muscarinici',
        'Agonist β2-adrenergic',
        'Antagonist α1-adrenergic',
      ],
      answer: [2],
      explanation: 'Atropina blochează competitiv receptorii muscarinici ai acetilcolinei, producând efecte opuse stimulării parasimpatice (midriază, tahicardie, uscăciunea mucoaselor).',
    },
    {
      id: 'far-q13',
      type: 'multi',
      text: 'Efectele atropinei includ:',
      options: ['Mioză', 'Tahicardie', 'Xerostomie (uscăciunea gurii)', 'Retenție urinară', 'Hipersalivație'],
      answer: [1, 2, 3],
      explanation: 'Blocarea receptorilor muscarinici determină tahicardie, scăderea secrețiilor și retenție urinară. Atropina produce midriază, nu mioză, și reduce salivația.',
    },
    {
      id: 'far-q14',
      type: 'single',
      text: 'Neostigmina acționează prin:',
      options: [
        'Blocarea receptorilor muscarinici',
        'Stimularea eliberării de noradrenalină',
        'Blocarea receptorilor nicotinici de la placa motorie',
        'Inhibarea recaptării acetilcolinei',
        'Inhibarea reversibilă a acetilcolinesterazei',
      ],
      answer: [4],
      explanation: 'Neostigmina inhibă reversibil acetilcolinesteraza, crescând acetilcolina în sinapsă; este folosită în miastenia gravis și pentru antagonizarea curarizantelor nedepolarizante.',
    },
    {
      id: 'far-q15',
      type: 'multi',
      text: 'În intoxicația cu insecticide organofosforice pot apărea:',
      options: ['Midriază', 'Mioză', 'Uscăciunea mucoaselor', 'Bronhoree', 'Hipersalivație'],
      answer: [1, 3, 4],
      explanation: 'Organofosforicele inhibă ireversibil acetilcolinesteraza, producând un sindrom colinergic: mioză, bronhoree, hipersalivație, bradicardie. Midriaza și uscăciunea mucoaselor sunt efecte anticolinergice.',
    },
    {
      id: 'far-q16',
      type: 'multi',
      text: 'Efecte adverse caracteristice ale blocantelor de canale de calciu dihidropiridinice (de exemplu amlodipina) sunt:',
      options: ['Tuse seacă', 'Edeme maleolare', 'Hiperkaliemie', 'Flush facial', 'Cefalee'],
      answer: [1, 3, 4],
      explanation: 'Vasodilatația arteriolară explică edemele maleolare, flush-ul și cefaleea. Tusea seacă și hiperkaliemia sunt efecte adverse ale IECA.',
    },
    {
      id: 'far-q17',
      type: 'single',
      text: 'Contraindicația clasică a beta-blocantelor neselective (de exemplu propranolol) este:',
      options: ['Hipertensiunea arterială', 'Angina pectorală stabilă', 'Tahicardia sinusală', 'Astmul bronșic', 'Tremorul esențial'],
      answer: [3],
      explanation: 'Blocarea receptorilor β2 bronșici poate declanșa bronhospasm sever la astmatici. Celelalte situații sunt, dimpotrivă, indicații ale beta-blocantelor.',
    },
    {
      id: 'far-q18',
      type: 'multi',
      text: 'Efecte adverse ale beta-blocantelor sunt:',
      options: ['Bradicardie', 'Tahicardie reflexă', 'Bronhospasm', 'Mascarea semnelor adrenergice ale hipoglicemiei', 'Tuse seacă'],
      answer: [0, 2, 3],
      explanation: 'Beta-blocantele scad frecvența cardiacă, pot produce bronhospasm și maschează tahicardia și tremorul din hipoglicemie. Tahicardia reflexă apare la vasodilatatoare, iar tusea seacă la IECA.',
    },
    {
      id: 'far-q19',
      type: 'single',
      text: 'Salbutamolul este:',
      options: [
        'Agonist β2-adrenergic selectiv',
        'Antagonist β1-adrenergic selectiv',
        'Agonist α1-adrenergic',
        'Antagonist muscarinic',
        'Corticosteroid inhalator',
      ],
      answer: [0],
      explanation: 'Salbutamolul stimulează receptorii β2 bronșici și produce bronhodilatație rapidă. Un efect advers frecvent este tremorul, iar la doze mari tahicardia.',
    },
    {
      id: 'far-q20',
      type: 'single',
      text: 'Efectul advers caracteristic la inițierea tratamentului cu prazosin (antagonist α1) este:',
      options: ['Bradicardia severă', 'Bronhospasmul', 'Hipotensiunea ortostatică „de primă doză”', 'Hiperkaliemia', 'Tusea seacă'],
      answer: [2],
      explanation: 'Blocarea receptorilor α1 vasculari produce vasodilatație, iar la prima administrare poate apărea hipotensiune ortostatică cu sincopă.',
    },
    {
      id: 'far-q21',
      type: 'single',
      text: 'Antibioticele beta-lactamice (penicilinele, cefalosporinele) acționează prin:',
      options: [
        'Inhibarea subunității ribozomale 30S',
        'Inhibarea ADN-girazei',
        'Inhibarea sintezei acidului folic',
        'Inhibarea sintezei peretelui celular prin legarea de PBP (proteinele care leagă penicilina)',
        'Dezorganizarea membranei citoplasmatice',
      ],
      answer: [3],
      explanation: 'Beta-lactaminele se leagă de PBP și împiedică legăturile încrucișate ale peptidoglicanului, având efect bactericid.',
    },
    {
      id: 'far-q22',
      type: 'multi',
      text: 'Care dintre următoarele antibiotice inhibă sinteza proteică bacteriană la nivel ribozomal?',
      options: ['Gentamicina', 'Ciprofloxacina', 'Claritromicina', 'Vancomicina', 'Doxiciclina'],
      answer: [0, 2, 4],
      explanation: 'Aminoglicozidele și tetraciclinele acționează pe subunitatea 30S, iar macrolidele pe 50S. Ciprofloxacina inhibă ADN-giraza, iar vancomicina sinteza peretelui celular.',
    },
    {
      id: 'far-q23',
      type: 'single',
      text: 'Fluorochinolonele (de exemplu ciprofloxacina) acționează prin:',
      options: [
        'Inhibarea transpeptidazelor peretelui celular',
        'Inhibarea ADN-girazei și a topoizomerazei IV bacteriene',
        'Legarea de subunitatea ribozomală 50S',
        'Inhibarea dihidrofolat-reductazei',
        'Legarea de precursorii peptidoglicanului (D-Ala-D-Ala)',
      ],
      answer: [1],
      explanation: 'Fluorochinolonele inhibă topoizomerazele bacteriene (ADN-giraza și topoizomeraza IV), împiedicând replicarea ADN. Legarea de D-Ala-D-Ala este mecanismul vancomicinei.',
    },
    {
      id: 'far-q24',
      type: 'multi',
      text: 'Efecte adverse caracteristice aminoglicozidelor sunt:',
      options: ['Colorarea dinților la copii', 'Nefrotoxicitatea', 'Ototoxicitatea', 'Sindromul „omului roșu”', 'Blocajul neuromuscular'],
      answer: [1, 2, 4],
      explanation: 'Aminoglicozidele sunt nefrotoxice, ototoxice și pot produce blocaj neuromuscular. Colorarea dinților este specifică tetraciclinelor, iar sindromul „omului roșu” vancomicinei.',
    },
    {
      id: 'far-q25',
      type: 'single',
      text: 'Sulfamidele antibacteriene acționează prin:',
      options: [
        'Inhibarea sintezei peretelui celular',
        'Inhibarea ARN-polimerazei bacteriene',
        'Legarea de subunitatea ribozomală 30S',
        'Inhibarea ADN-girazei',
        'Inhibarea competitivă a dihidropteroat-sintetazei (analogi ai PABA)',
      ],
      answer: [4],
      explanation: 'Sulfamidele sunt analogi structurali ai acidului para-aminobenzoic și blochează sinteza bacteriană de acid folic. Asocierea cu trimetoprim (inhibitor de dihidrofolat-reductază) blochează doi pași succesivi ai aceleiași căi.',
    },
    {
      id: 'far-q26',
      type: 'single',
      text: 'Acidul acetilsalicilic se deosebește de celelalte AINS clasice prin faptul că:',
      options: [
        'Inhibă ireversibil ciclooxigenaza, prin acetilare',
        'Nu are efect antiagregant plachetar',
        'Inhibă selectiv COX-2',
        'Nu produce efecte adverse gastrointestinale',
        'Acționează prin blocarea receptorilor histaminici',
      ],
      answer: [0],
      explanation: 'Aspirina acetilează ireversibil COX; în trombocite, care nu pot resintetiza enzima, efectul antiagregant durează toată viața plachetei. Celelalte AINS clasice inhibă COX reversibil.',
    },
    {
      id: 'far-q27',
      type: 'multi',
      text: 'Efecte adverse ale antiinflamatoarelor nesteroidiene (AINS) sunt:',
      options: ['Ulcer gastroduodenal', 'Retenție hidrosalină', 'Hipoglicemie severă', 'Afectarea funcției renale', 'Mioză'],
      answer: [0, 1, 3],
      explanation: 'Prin scăderea prostaglandinelor protectoare, AINS favorizează ulcerul gastroduodenal, reduc perfuzia renală și produc retenție hidrosalină. Hipoglicemia și mioza nu sunt efecte adverse tipice.',
    },
    {
      id: 'far-q28',
      type: 'single',
      text: 'Heparina nefracționată își exercită efectul anticoagulant prin:',
      options: [
        'Inhibarea sintezei hepatice a factorilor dependenți de vitamina K',
        'Inhibarea ireversibilă a COX plachetare',
        'Potențarea antitrombinei (antitrombina III)',
        'Blocarea receptorilor plachetari P2Y12',
        'Activarea plasminogenului',
      ],
      answer: [2],
      explanation: 'Heparina se leagă de antitrombină și îi accelerează mult acțiunea asupra trombinei și factorului Xa. Inhibarea sintezei factorilor dependenți de vitamina K este mecanismul antivitaminelor K.',
    },
    {
      id: 'far-q29',
      type: 'multi',
      text: 'Antivitaminele K (warfarina, acenocumarolul) scad sinteza funcțională a următorilor factori de coagulare:',
      options: ['Factorul II', 'Factorul VIII', 'Factorul VII', 'Factorul IX', 'Factorul X'],
      answer: [0, 2, 3, 4],
      explanation: 'Factorii II, VII, IX și X (precum și proteinele C și S) necesită gama-carboxilare dependentă de vitamina K. Factorul VIII nu este dependent de vitamina K.',
    },
    {
      id: 'far-q30',
      type: 'single',
      text: 'Tusea seacă, efect advers clasic al inhibitorilor enzimei de conversie (IECA), se explică prin:',
      options: [
        'Blocarea receptorilor β2 bronșici',
        'Acumularea de bradikinină',
        'Hipokaliemie',
        'Stimularea receptorilor muscarinici',
        'Creșterea angiotensinei II',
      ],
      answer: [1],
      explanation: 'Enzima de conversie degradează și bradikinina; inhibarea ei duce la acumularea bradikininei, care produce tuse seacă și, rar, angioedem.',
    },
  ],
}
