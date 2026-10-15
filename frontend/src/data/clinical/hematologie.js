// Hematologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'hem-c1',
      title: 'Oboseală și paloare la o femeie tânără',
      setting: 'Cabinet – medicină de familie / ambulatoriu',
      presentation:
        'Femeie de 34 de ani se prezintă pentru oboseală progresivă de câteva luni, dispnee la eforturi pe care înainte le tolera și palpitații. Colegii i-au spus că este palidă. Are menstruații abundente de mai mulți ani. Urmează o dietă vegetariană și nu are alte boli cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Simptome de anemie: astenie, dispnee de efort, palpitații, cefalee, amețeli, scăderea toleranței la efort\n• Surse de pierdere de sânge: menstruații abundente, sângerări digestive (melenă, hematochezie), hematurie\n• Alimentația (dietă săracă în fier sau vitamina B12), tulburări de absorbție (boală celiacă, intervenții gastrice)\n• Pica, disfagie, simptome neurologice (parestezii – deficit de B12)\n• Sarcini, donări de sânge, medicamente (antiinflamatoare, anticoagulante)\n• Istoric familial de anemie sau hemoglobinopatii',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Paloare tegumentară și a mucoaselor (conjunctive, patul unghial)\n• Modificări trofice: unghii fragile, plate sau concave (coilonichie), păr fragil, cheilită angulară, glosită\n• Tahicardie, suflu sistolic funcțional\n• Absența icterului, adenopatiilor și splenomegaliei (orientează spre cauza carențială)\n• Semne vitale, tensiune ortostatică\n• Examen abdominal și, la indicație, tușeu rectal și examen ginecologic',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă: anemie microcitară, hipocromă (VEM și HEM scăzute), RDW crescut, trombocite uneori crescute\n• Reticulocite: scăzute (anemie hiporegenerativă)\n• Frotiu de sânge periferic: hematii mici, palide, anizocitoză, poikilocitoză\n• Bilanțul fierului: feritină scăzută (cel mai util marker), sideremie scăzută, capacitate totală de legare crescută\n• Investigarea cauzei: consult ginecologic și ecografie; la indicație endoscopie digestivă, test pentru sângerări oculte, serologie pentru boala celiacă',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Anemie feriprivă prin pierderi menstruale și aport scăzut.\nDiagnostic diferențial al anemiilor microcitare:\n• Anemia din bolile cronice (feritină normală sau crescută)\n• Talasemia minoră (număr de hematii normal sau crescut, feritină normală, istoric familial)\n• Anemia sideroblastică\nAtenție: la bărbat și la femeia în postmenopauză, anemia feriprivă impune căutarea unei surse digestive.',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Tratarea cauzei (evaluare ginecologică pentru menoragie, dietă echilibrată)\n• Suplimentare cu fier pe cale orală, administrat pe stomacul gol, cu informarea pacientei despre efectele adverse digestive și colorarea scaunului\n• Fier intravenos la intoleranță, malabsorbție sau pierderi mari\n• Transfuzie doar în anemie severă simptomatică sau instabilitate hemodinamică\n• Monitorizare: creșterea reticulocitelor și a hemoglobinei, apoi continuarea tratamentului pentru refacerea rezervelor (feritină)',
        },
      ],
      takeaways: [
        'Feritina scăzută confirmă deficitul de fier.',
        'Anemia feriprivă este un simptom: caută întotdeauna cauza.',
        'Anemia microcitară cu feritină normală sugerează talasemie minoră sau anemie din boli cronice.',
        'Tratamentul cu fier continuă și după normalizarea hemoglobinei, pentru refacerea rezervelor.',
      ],
    },
    {
      id: 'hem-c2',
      title: 'Ganglioni măriți, febră și transpirații nocturne',
      setting: 'Ambulatoriu – hematologie',
      presentation:
        'Bărbat de 26 de ani se prezintă pentru o tumefacție nedureroasă laterocervicală stângă, observată în urmă cu aproximativ două luni, care crește lent. Relatează febră intermitentă, transpirații nocturne abundente și scădere în greutate neintenționată. Uneori are prurit generalizat. Nu are boli cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Debutul, evoluția și durerea adenopatiei; alte regiuni ganglionare afectate\n• Simptome B: febră, transpirații nocturne abundente, scădere ponderală semnificativă\n• Prurit, durere ganglionară după consum de alcool\n• Infecții recente (faringită, mononucleoză, infecții dentare), contact cu pisici, tuberculoză, comportamente cu risc pentru HIV\n• Tuse, dispnee, disfagie (adenopatii mediastinale)\n• Medicamente, călătorii, istoric familial',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Examinarea tuturor grupelor ganglionare: adenopatie laterocervicală și supraclaviculară stângă, de consistență elastică, nedureroasă, mobilă, eventual conglomerate\n• Caracterele ganglionilor: dimensiune, consistență, sensibilitate, mobilitate, aderență, modificări tegumentare\n• Splină și ficat (hepatosplenomegalie)\n• Examen ORL (focare infecțioase sau tumorale)\n• Semne de compresiune mediastinală (edem în pelerină, circulație venoasă colaterală)\n• Tegumente: paloare, leziuni de grataj',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă cu formulă și frotiu: posibil anemie, leucocitoză, limfopenie, eozinofilie\n• VSH, proteina C reactivă, LDH (crescute), funcție hepatică și renală\n• Serologii: virusul Epstein-Barr, HIV, hepatite virale, toxoplasmoză, după context\n• Radiografie toracică (lărgire mediastinală) și CT toraco-abdomino-pelvin pentru stadializare; PET-CT în centrele de specialitate\n• Biopsie ganglionară excizională cu examen histopatologic și imunohistochimic – esențială pentru diagnostic',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Limfom, cel mai probabil limfom Hodgkin, cu simptome B (de confirmat histopatologic – celule Reed-Sternberg).\nDiagnostic diferențial:\n• Limfoame non-Hodgkin\n• Adenopatii infecțioase: mononucleoză infecțioasă, tuberculoză ganglionară, toxoplasmoză, HIV, boala ghearelor de pisică\n• Metastaze ganglionare (tumori ORL, digestive – adenopatia supraclaviculară stângă)\n• Sarcoidoză, leucemie limfocitară cronică',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Tratamentul se stabilește în centru de hematologie, după confirmarea histologică și stadializare\n• Polichimioterapie, asociată sau nu cu radioterapie, în funcție de stadiu și factorii de prognostic\n• Prezervarea fertilității discutată înaintea tratamentului\n• Monitorizarea toxicității tratamentului și a infecțiilor\n• Urmărire pe termen lung: recăderi, efecte tardive (cardiace, pulmonare, neoplazii secundare, afectare tiroidiană)\n• Suport psihologic',
        },
      ],
      takeaways: [
        'Adenopatia nedureroasă, persistentă, cu simptome B, necesită biopsie.',
        'Diagnosticul de limfom este întotdeauna histopatologic.',
        'Adenopatia supraclaviculară este suspectă de malignitate.',
        'Nu se administrează corticoterapie „de probă” înaintea biopsiei.',
      ],
    },
    {
      id: 'hem-c3',
      title: 'Gingii care sângerează și pete roșii pe picioare',
      setting: 'Camera de gardă',
      presentation:
        'Femeie de 24 de ani se prezintă pentru sângerări gingivale la periaj și apariția, în ultimele zile, a unor puncte roșii pe gambe și a unor vânătăi fără traumatism. Cu două săptămâni în urmă a avut o infecție de căi respiratorii superioare. Nu ia medicamente și nu are boli cunoscute. Starea generală este bună, fără febră.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Tipul sângerărilor: cutaneo-mucoase (peteșii, echimoze, gingivoragii, epistaxis, menoragie) – sugerează afectarea hemostazei primare\n• Semne de sângerare gravă: hematemeză, melenă, hematurie, cefalee sau tulburări neurologice\n• Infecții recente, vaccinări, medicamente (inclusiv antiagregante, antiinflamatoare, heparină)\n• Febră, scădere ponderală, dureri osoase, astenie (sugerează boală medulară)\n• Boli autoimune, sarcină, consum de alcool, istoric familial de sângerare',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Peteșii (nu dispar la presiune) și echimoze, mai ales pe membrele inferioare\n• Bule hemoragice pe mucoasa bucală („purpură umedă” – risc mai mare de sângerare gravă)\n• Gingivoragii\n• Absența splenomegaliei, hepatomegaliei și adenopatiilor (susține o cauză periferică, imună)\n• Semne vitale, examen neurologic, fund de ochi dacă e posibil',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Hemoleucogramă: trombocitopenie izolată, cu hemoglobină și leucocite normale\n• Frotiu de sânge periferic: confirmă trombocitopenia (exclude pseudotrombocitopenia prin aglutinare), trombocite mari, fără celule anormale\n• Teste de coagulare (timp de protrombină, aPTT, fibrinogen): normale\n• Serologii virale (HIV, hepatite), test de sarcină, teste pentru boli autoimune, după context\n• Examen medular doar în prezentări atipice (alte citopenii, organomegalii, celule anormale, vârstnic)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Trombocitopenie imună (purpură trombocitopenică imună), diagnostic de excludere.\nDiagnostic diferențial:\n• Pseudotrombocitopenie (aglutinare in vitro)\n• Leucemii acute, aplazie medulară\n• Trombocitopenie medicamentoasă\n• Purpura trombotică trombocitopenică și sindromul hemolitic-uremic (anemie hemolitică, schizocite)\n• Coagulare intravasculară diseminată, hipersplenism, lupus',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Decizia de tratament depinde de severitatea sângerărilor și de numărul de trombocite, conform ghidurilor\n• Prima linie: corticoterapie; imunoglobuline intravenoase când e necesar un răspuns rapid\n• Evitarea antiagregantelor, antiinflamatoarelor, injecțiilor intramusculare și traumatismelor\n• Transfuzie de trombocite rezervată sângerărilor care pun viața în pericol\n• Monitorizarea hemoleucogramei și a sângerărilor; în formele cronice – alte terapii în centru de hematologie',
        },
      ],
      takeaways: [
        'Peteșiile și sângerările mucoase indică un defect de hemostază primară (trombocite, vas).',
        'Trombocitopenia imună este un diagnostic de excludere.',
        'Frotiul de sânge periferic confirmă trombocitopenia și exclude alte cauze.',
        'Bulele hemoragice bucale semnalează un risc mai mare de sângerare.',
      ],
    },
  ],
  skills: [
    {
      id: 'hem-s1',
      name: 'Examenul ganglionilor limfatici',
      category: 'Examen clinic',
      steps: [
        'Te prezinți, explici examinarea, obții acordul; pacientul șezând pentru regiunea cervicală, în decubit pentru cea inghinală.',
        'Examinezi sistematic, bilateral și comparativ: submentonieri, submandibulari, preauriculari, retroauriculari, occipitali, laterocervicali, supraclaviculari.',
        'Examinezi axilele (grupele centrale, anterioare, posterioare, laterale și apicale), sprijinind brațul pacientului.',
        'Examinezi ganglionii epitrohleeni, inghinali și poplitei.',
        'Palpezi cu pulpa degetelor, prin mișcări circulare, apăsând ganglionul pe un plan dur.',
        'Descrii fiecare ganglion palpabil: localizare, număr, dimensiune, consistență, sensibilitate, mobilitate, aderență la planuri, modificări tegumentare, fistulizare.',
        'Examinezi teritoriul de drenaj (focare infecțioase sau tumorale) și splina, ficatul.',
        'Formulezi concluzia: adenopatie localizată sau generalizată, cu caractere inflamatorii sau suspecte.',
      ],
      tips: 'Studenții uită ganglionii supraclaviculari și epitrohleeni. Ganglionul dur, nedureros, fixat sau supraclavicular este suspect de malignitate.',
    },
    {
      id: 'hem-s2',
      name: 'Examenul splinei',
      category: 'Examen clinic',
      steps: [
        'Pacientul în decubit dorsal, relaxat, cu genunchii ușor flectați; examinatorul în dreapta pacientului.',
        'Inspecția hipocondrului stâng (bombare în splenomegaliile mari).',
        'Percuția: matitatea splenică pe linia axilară medie stângă; spațiul Traube mat sugerează splenomegalie.',
        'Palparea începe din fosa iliacă dreaptă și urcă oblic spre hipocondrul stâng, ca să nu ratezi o splină foarte mare.',
        'Palpezi cu mâna dreaptă, sincron cu inspirul profund, în timp ce mâna stângă susține posterior ultimele coaste stângi.',
        'Dacă nu e palpabilă, repeți în decubit lateral drept (poziția Schuster).',
        'Descrii splina palpabilă: distanța sub rebord, consistență, sensibilitate, marginea crenelată (incizura splenică).',
        'Diferențiezi de rinichiul stâng mărit (contact lombar, matitate colică anterioară).',
      ],
      tips: 'Greșeala clasică este începerea palpării prea aproape de rebord, ratând o splenomegalie mare. Splina nu are contact lombar și se deplasează cu respirația.',
    },
    {
      id: 'hem-s3',
      name: 'Interpretarea hemoleucogramei (calitativ)',
      category: 'Interpretare',
      steps: [
        'Verifici identitatea, data și compari cu valorile de referință ale laboratorului și cu rezultatele anterioare.',
        'Seria roșie: hemoglobina și hematocritul (anemie sau poliglobulie).',
        'Indicii eritrocitari: VEM (microcitoză, normocitoză, macrocitoză), HEM și CHEM (hipocromie), RDW (anizocitoză).',
        'Încadrezi anemia: microcitară (deficit de fier, talasemie, boli cronice), normocitară (hemoragie acută, hemoliză, boli cronice, insuficiență renală), macrocitară (deficit de B12 sau folat, alcool, boli hepatice).',
        'Reticulocitele, dacă sunt disponibile: anemie regenerativă (hemoragie, hemoliză) sau hiporegenerativă.',
        'Seria albă: număr total și formula leucocitară în valori absolute (neutrofilie, limfocitoză, eozinofilie, neutropenie).',
        'Trombocitele: trombocitopenie sau trombocitoză; verifici pe frotiu valorile neașteptate.',
        'Cauți afectarea mai multor linii (bicitopenie, pancitopenie) și celulele anormale semnalate, apoi corelezi cu clinica.',
      ],
      tips: 'Interpretează formula leucocitară în valori absolute, nu doar procentual. O pancitopenie sau prezența blaștilor impune evaluare hematologică rapidă.',
    },
    {
      id: 'hem-s4',
      name: 'Examinarea frotiului de sânge periferic (principii)',
      category: 'Interpretare',
      steps: [
        'Recoltare pe anticoagulant potrivit (EDTA) sau din înțepătură capilară; frotiul se face rapid după recoltare.',
        'Etalarea unei picături de sânge cu o lamă înclinată, într-o mișcare uniformă, pentru a obține un strat subțire, cu zonă terminală.',
        'Uscarea, fixarea și colorarea (de exemplu May-Grünwald-Giemsa).',
        'Examinarea la obiectiv mic: calitatea frotiului, distribuția celulelor, aglutinate, zona optimă de citire (unde hematiile sunt alăturate, nu suprapuse).',
        'Examinarea la imersie a hematiilor: dimensiune, culoare, formă (sferocite, schizocite, celule în țintă, hematii în lacrimă), incluzii.',
        'Formula leucocitară: identificarea tipurilor de leucocite și a celulelor anormale (blaști, limfocite atipice).',
        'Aprecierea trombocitelor: număr aproximativ, mărime, agregate.',
        'Corelarea cu hemoleucograma automată și cu clinica.',
      ],
      tips: 'Frotiul confirmă sau infirmă alarmele aparatului automat (ex. pseudotrombocitopenia prin agregare). Citirea în zona prea groasă sau prea subțire dă interpretări false.',
    },
    {
      id: 'hem-s5',
      name: 'Recunoașterea semnelor hemoragice cutanate',
      category: 'Examen clinic',
      steps: [
        'Examinezi întreg tegumentul și mucoasele la lumină bună, inclusiv mucoasa bucală, conjunctivele și zonele declive.',
        'Peteșiile: puncte roșii-violacee, mici, plane, care nu dispar la presiune; sugerează trombocitopenie sau vasculită.',
        'Purpura: leziuni mai mari, plane sau palpabile; purpura palpabilă orientează spre vasculită.',
        'Echimozele: pete mai mari, cu evoluție cromatică (roșu-violaceu, apoi verde-gălbui).',
        'Hematoamele: colecții de sânge în țesuturi profunde sau mușchi și hemartrozele – sugerează tulburări de coagulare (ex. hemofilie).',
        'Verifici că leziunea nu dispare la presiune (diferențiere de eritem și angioame).',
        'Cauți semnele asociate: febră (meningococcemie), splenomegalie, adenopatii, bule hemoragice bucale.',
        'Corelezi tipul sângerării cu mecanismul: cutaneo-mucoasă (hemostază primară) vs. profundă (coagulare).',
      ],
      tips: 'Sângerările cutaneo-mucoase sugerează defect plachetar sau vascular, iar hematoamele și hemartrozele – defect de coagulare. Peteșiile cu febră sunt o urgență.',
    },
  ],
}
