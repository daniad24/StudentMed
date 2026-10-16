// Biochimie clinică – rezumate verificate (echipa Steto)
export default [
  {
    id: 'bcl-t1',
    title: 'Enzimele de interes diagnostic',
    topic: 'Enzime de interes diagnostic',
    readMinutes: 3,
    content: `## Principiul

Enzimele celulare se găsesc normal în ser în cantități mici. Când celulele unui organ sunt lezate sau când eliminarea enzimei este perturbată, concentrația serică **crește**. Interpretarea ține cont de **specificitatea de țesut**, de **cinetica** creșterii și de contextul clinic.

## Enzimele principale

| Enzimă / marker | Origine principală | Situații în care crește |
|---|---|---|
| **ALT** (TGP) | ficat (citoplasmă hepatocitară) | hepatite, citoliză hepatică |
| **AST** (TGO) | ficat, miocard, mușchi scheletic | hepatite, infarct, leziuni musculare |
| **Fosfataza alcalină** | căi biliare, os | colestază, boli osoase cu remodelare crescută |
| **GGT** | epiteliul biliar, hepatocit | colestază, consum de alcool, inducție enzimatică |
| **Amilaza** | pancreas, glande salivare | pancreatită acută, parotidite |
| **Lipaza** | pancreas | pancreatită acută (mai specifică decât amilaza) |
| **CK** | mușchi scheletic, miocard, creier | rabdomioliză, distrofii, infarct |
| **Troponina cardiacă** | cardiomiocit | necroză miocardică |

## Detalii utile

- **ALT** este mai specifică pentru ficat; **AST** este mai puțin specifică, deoarece se află și în mușchi și în miocard.
- În **suferința hepatocitară** predomină transaminazele; în **colestază** predomină fosfataza alcalină și GGT. Această distincție orientează între tipul hepatocelular și cel colestatic.
- **Troponina** cardiacă este markerul de elecție în infarctul miocardic: este specifică miocardului, crește după debutul necrozei și rămâne crescută câteva zile. Se interpretează împreună cu simptomele și ECG; poate crește și în alte suferințe cardiace (miocardită, embolie pulmonară, insuficiență renală).
- **CK-MB** a fost folosită istoric ca marker miocardic, dar este mai puțin specifică decât troponina.
- Creșterea **CK totale** marcată sugerează leziune de mușchi scheletic (rabdomioliză, traumatisme, efort extrem); poate fi asociată cu mioglobinurie și risc de leziune renală.
- **Amilaza** poate crește și din cauze extrapancreatice; de aceea lipaza este preferată în pancreatita acută.
- **LDH** este o enzimă ubicuitară, deci puțin specifică; crește în hemoliză, infarct, boli hepatice și unele neoplazii.

## Cum se citește un tablou enzimatic

1. Se stabilește **organul probabil** (ficat, pancreas, miocard, mușchi).
2. Se apreciază **tipul leziunii** (citoliză versus colestază).
3. Se urmărește **evoluția în timp**, nu doar o valoare izolată.
4. Se țin cont de **factori confundanți**: medicamente, alcool, efort fizic, hemoliza probei.

## De reținut pentru examen
- Troponina cardiacă este cel mai specific marker de necroză miocardică.
- ALT este mai specifică hepatic decât AST.
- Fosfataza alcalină și GGT indică colestază; transaminazele indică citoliză.
- Lipaza este mai specifică decât amilaza pentru pancreatita acută.
- CK totală crește marcat în leziunile mușchiului scheletic.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Enzymes as diagnostic tools',
      'Tietz Fundamentals of Clinical Chemistry and Molecular Diagnostics – capitolele despre enzime clinice',
    ],
  },
  {
    id: 'bcl-t2',
    title: 'Funcția hepatică și renală în laborator',
    topic: 'Funcția hepatică și renală',
    readMinutes: 3,
    content: `## Evaluarea ficatului

Testele hepatice se grupează după ceea ce măsoară.

| Categorie | Teste | Interpretare |
|---|---|---|
| **Leziune hepatocitară** | ALT, AST | cresc în citoliză |
| **Colestază** | fosfataza alcalină, GGT, bilirubina conjugată | cresc în obstrucția sau afectarea căilor biliare |
| **Funcție de sinteză** | albumina, timpul de protrombină (INR), pseudocolinesteraza | scad sau se alungesc în insuficiența hepatică |
| **Metabolizare / excreție** | bilirubina totală și fracțiile ei | creșterea produce icter |

**Bilirubina**:
- **neconjugată (indirectă)** crește în hemoliză, sindrom Gilbert, icter neonatal fiziologic;
- **conjugată (directă)** crește în colestază și obstrucție biliară, cu prezența bilirubinei în urină.

Albumina are timp de înjumătățire lung, deci scade în boala hepatică cronică (ciroză), nu în leziunea acută. **Timpul de protrombină** se alungește mai rapid, deoarece factorii de coagulare au durată de viață scurtă, și este un indicator util al insuficienței hepatice acute. Scăderea albuminei poate fi cauzată și de pierderi renale, malnutriție sau inflamație, deci nu este specifică ficatului.

## Evaluarea rinichiului

- **Creatinina serică**: produsă de mușchi într-un ritm relativ constant, eliminată în principal prin filtrare glomerulară. Creșterea ei indică **scăderea ratei de filtrare glomerulară (RFG)**, dar crește relativ târziu și depinde de masa musculară.
- **Ratele de filtrare estimate (eRFG)**: se calculează din creatinină, vârstă și sex; sunt folosite curent pentru stadializarea bolii renale cronice.
- **Ureea**: produs final al catabolismului proteic, sintetizat hepatic. Este influențată de aportul proteic, de hidratare, de sângerarea digestivă și de funcția hepatică, deci este mai puțin fidelă decât creatinina.
- **Raportul uree/creatinină** crescut sugerează cauză **prerenală** (deshidratare, hipoperfuzie) sau sângerare digestivă superioară.
- **Examenul de urină și proteinuria**: prezența albuminei în urină indică leziune glomerulară; proteinuria masivă cu hipoalbuminemie, edeme și hiperlipidemie definește sindromul nefrotic.
- **Cistatina C** este un marker alternativ, mai puțin dependent de masa musculară.

## Clasificarea sumară a insuficienței renale acute

- **prerenală**: scăderea perfuziei renale (deshidratare, șoc);
- **renală (intrinsecă)**: necroză tubulară, glomerulonefrite;
- **postrenală**: obstrucție a căilor urinare.

## De reținut pentru examen
- ALT și AST arată citoliză; fosfataza alcalină și GGT arată colestază.
- Albumina, INR și pseudocolinesteraza reflectă sinteza hepatică.
- Bilirubina conjugată crește în colestază; cea neconjugată în hemoliză.
- Creatinina crește când scade RFG; ureea este influențată și de factori extrarenali.
- Raportul uree/creatinină crescut sugerează o cauză prerenală.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Metabolismul bilirubinei și al ureei',
      'Harrison’s Principles of Internal Medicine – Evaluation of Liver Function; Approach to the Patient with Renal Disease',
    ],
  },
  {
    id: 'bcl-t3',
    title: 'Glicemia, HbA1c și bilanțul lipidic',
    topic: 'Glicemie, HbA1c și lipide',
    readMinutes: 3,
    content: `## Evaluarea metabolismului glucidic

- **Glicemia a jeun**: valoarea glucozei după o perioadă de repaus alimentar; este testul de screening cel mai folosit.
- **Glicemia întâmplătoare**: măsurată oricând, utilă în prezența simptomelor.
- **Testul de toleranță la glucoză pe cale orală (TTGO)**: urmărește răspunsul glicemic după o încărcare standardizată cu glucoză; are rol în diagnosticul unor forme de prediabet și al diabetului gestațional.
- **Hemoglobina glicozilată (HbA1c)**: fracțiunea de hemoglobină legată neenzimatic de glucoză, proporțională cu glicemia medie din ultimele **2–3 luni**. Este folosită pentru urmărirea controlului glicemic pe termen lung și, în recomandările actuale, și pentru diagnostic.

HbA1c poate fi **nesigură** când este modificată durata de viață a hematiilor sau structura hemoglobinei: anemii hemolitice, hemoragii recente, transfuzii, hemoglobinopatii, boală renală avansată.

În practică, diagnosticul de diabet se bazează pe criterii bine definite, iar un rezultat anormal izolat se confirmă printr-o a doua determinare, cu excepția situațiilor cu simptome clare și hiperglicemie evidentă. Glicemia a jeun și HbA1c se completează reciproc: prima arată situația de moment, a doua tendința pe termen lung.

Alți indicatori utili: **corpii cetonici** (cetoacidoza diabetică), **peptidul C** (secreția endogenă de insulină), **microalbuminuria** (afectare renală precoce în diabet).

## Bilanțul lipidic

| Fracțiune | Rol | Semnificație clinică |
|---|---|---|
| **Colesterol total** | suma fracțiunilor | factor de risc global |
| **LDL-colesterol** | transport de colesterol spre țesuturi | **principalul factor aterogen** |
| **HDL-colesterol** | transport invers al colesterolului spre ficat | efect protector |
| **Trigliceride** | transport lipide din dietă și din ficat | creșterea mare poate produce pancreatită acută |

Aspecte practice:
- Proba se recoltează de regulă după repaus alimentar, în special pentru trigliceride.
- **Hipertrigliceridemia secundară**: diabet decompensat, alcool, obezitate, boală renală.
- **Hipercolesterolemia secundară**: hipotiroidism, sindrom nefrotic, colestază.
- **Hipercolesterolemia familială** este o cauză genetică de LDL crescut, cu risc cardiovascular precoce.
- Apolipoproteinele (ApoB, ApoA-I) pot completa evaluarea riscului.
- Lipoproteinele: **chilomicronii** transportă trigliceridele alimentare, **VLDL** trigliceridele endogene, **LDL** colesterolul spre periferie, **HDL** colesterolul spre ficat.

## De reținut pentru examen
- HbA1c reflectă ultimele 2–3 luni, nu glicemia de moment.
- Anemia hemolitică, transfuziile și hemoglobinopatiile pot altera HbA1c.
- LDL este principalul factor aterogen, HDL este protector.
- Trigliceridele foarte mari cresc riscul de pancreatită acută.
- Hipotiroidismul și sindromul nefrotic cresc colesterolul.`,
    references: [
      'Lippincott Illustrated Reviews: Biochemistry – Lipoprotein Metabolism; Diabetes Mellitus',
      'Harrison’s Principles of Internal Medicine – Diabetes Mellitus: Diagnosis; Disorders of Lipoprotein Metabolism',
    ],
  },
  {
    id: 'bcl-t4',
    title: 'Echilibrul acido-bazic și electroliții',
    topic: 'Echilibru acido-bazic și electroliți',
    readMinutes: 3,
    content: `## Citirea unei gazometrii

Se urmăresc, în ordine:
1. **pH-ul**: acidemie sau alcalemie.
2. **pCO₂**: componenta respiratorie.
3. **HCO₃⁻**: componenta metabolică.
4. Se stabilește dacă există **compensare**.

| Tulburare | pH | Modificare primară | Compensare |
|---|---|---|---|
| **Acidoză metabolică** | scăzut | HCO₃⁻ scăzut | hiperventilație (pCO₂ scade) |
| **Alcaloză metabolică** | crescut | HCO₃⁻ crescut | hipoventilație (pCO₂ crește) |
| **Acidoză respiratorie** | scăzut | pCO₂ crescut | retenție renală de HCO₃⁻ (lentă) |
| **Alcaloză respiratorie** | crescut | pCO₂ scăzut | excreție renală de HCO₃⁻ (lentă) |

Compensarea respiratorie este rapidă; cea renală se instalează în zile.

## Anion gap

Anion gap-ul (diferența dintre cationii și anionii măsurați) ajută la clasificarea acidozei metabolice:
- **crescut**: cetoacidoză, acidoză lactică, insuficiență renală avansată, unele intoxicații;
- **normal (hipercloremică)**: diaree severă, acidoză tubulară renală.

## Cauze frecvente

- Acidoză respiratorie: hipoventilație (BPOC, depresie respiratorie).
- Alcaloză respiratorie: hiperventilație (anxietate, durere, altitudine).
- Alcaloză metabolică: vărsături prelungite, diuretice, hipokaliemie.

## Electroliții

- **Sodiu**: principalul cation extracelular, determină osmolaritatea plasmatică. Hiponatremia și hipernatremia sunt, de regulă, tulburări ale bilanțului de apă și pot produce simptome neurologice.
- **Potasiu**: principalul cation intracelular. **Hiperkaliemia** severă determină aritmii (modificări ECG, risc de stop cardiac); hipokaliemia produce slăbiciune musculară și aritmii. Acidoza tinde să mute potasiul în exterior, alcaloza în interior.
- **Calciu**: fracțiunea ionizată este cea activă. **Hipocalcemia** produce tetanie (semnele Chvostek și Trousseau); **hipercalcemia** produce constipație, poliurie, litiază, tulburări neuropsihice. Cauze frecvente de hipercalcemie: hiperparatiroidismul primar și neoplaziile.
- **Magneziu**: influențează calciul și potasiul; deficitul poate perpetua hipokaliemia și hipocalcemia.

## Proteinele plasmatice (scurt)

Albumina menține presiunea oncotică și transportă diverși compuși; scade în ciroză, sindrom nefrotic, malnutriție și inflamație. **Proteinele de fază acută** (CRP) cresc în inflamație.

## Aspecte practice

- Proba de sânge arterial este necesară pentru gazometrie; ea trebuie analizată rapid și fără bule de aer.
- Interpretarea se face mereu împreună cu simptomele și cu cauza probabilă: aceeași valoare a pH-ului poate avea mecanisme diferite.
- Tulburările mixte sunt posibile, de exemplu acidoză respiratorie asociată cu acidoză metabolică în insuficiența respiratorie severă cu hipoperfuzie.

## De reținut pentru examen
- pH scăzut cu pCO₂ crescut înseamnă acidoză respiratorie.
- Vărsăturile abundente produc alcaloză metabolică.
- Acidoza cu anion gap crescut: cetoacidoza, acidoza lactică, insuficiența renală.
- Hiperkaliemia severă este periculoasă prin aritmii.
- Hipocalcemia produce tetanie; hipercalcemia produce constipație și poliurie.`,
    references: [
      'Guyton and Hall Textbook of Medical Physiology – Regulation of Acid-Base Balance',
      'Harrison’s Principles of Internal Medicine – Fluid and Electrolyte Disturbances; Acidosis and Alkalosis',
    ],
  },
]
