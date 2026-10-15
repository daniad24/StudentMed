// Semiologie medicală – conținut demo
export default {
  materials: [
    {
      id: 'sem-m1',
      type: 'summary',
      title: 'Examenul obiectiv al aparatului respirator',
      author: 'Ioana R.',
      upvotes: 21,
      recommended: true,
      createdAt: '2026-10-06',
      content: `## Etapele examenului
Examenul obiectiv al toracelui se face în ordinea clasică: **inspecție, palpare, percuție, auscultație**, comparativ pe ambele hemitorace.

## Inspecția
- forma toracelui (normal, emfizematos „în butoi”, deformări);
- tipul, frecvența și ritmul respirației (ex. respirația Kussmaul, Cheyne-Stokes);
- tirajul, folosirea mușchilor respiratori accesori;
- cianoza și degetele hipocratice.

## Palparea
- ampliația mișcărilor respiratorii;
- **vibrațiile vocale**: accentuate în condensare, diminuate sau abolite când între plămân și peretele toracic se interpune lichid sau aer.

## Percuția
- normal: sonoritate pulmonară;
- **matitate**: condensare sau lichid pleural;
- **hipersonoritate / timpanism**: emfizem, pneumotorax.

## Auscultația
- murmurul vezicular (normal);
- suflurile (ex. suflu tubar în condensare, suflu pleuretic);
- ralurile: crepitante (alveolare, la sfârșitul inspirului), subcrepitante, ronflante și sibilante (bronșice);
- frecătura pleurală (dispare în apnee).

## Marile sindroame
| Sindrom | Vibrații vocale | Percuție | Auscultație |
|---|---|---|---|
| Condensare (pneumonie) | accentuate | matitate | suflu tubar, raluri crepitante |
| Pleurezie | abolite | matitate | murmur abolit |
| Pneumotorax | abolite | timpanism | murmur abolit |

> Examinați întotdeauna comparativ, simetric, de sus în jos, pe fețele anterioară, laterale și posterioară ale toracelui.`,
    },
    {
      id: 'sem-m2',
      type: 'summary',
      title: 'Zgomote și sufluri cardiace',
      author: 'Mihai P.',
      upvotes: 17,
      recommended: false,
      createdAt: '2026-10-08',
      content: `## Focarele de auscultație
- **aortic**: spațiul II intercostal drept, parasternal;
- **pulmonar**: spațiul II intercostal stâng, parasternal;
- **Erb**: spațiul III intercostal stâng, parasternal;
- **tricuspidian**: la baza apendicelui xifoid;
- **mitral**: la apex.

## Zgomotele cardiace
- **Zgomotul I**: închiderea valvelor atrioventriculare; marchează începutul sistolei.
- **Zgomotul II**: închiderea valvelor semilunare (aortică și pulmonară); marchează începutul diastolei.
- **Zgomotul III**: protodiastolic, la umplerea ventriculară rapidă; poate fi fiziologic la copii și tineri, patologic la adultul cu insuficiență cardiacă (galop).
- **Zgomotul IV**: presistolic, la contracția atrială pe un ventricul rigid.

## Suflurile clasice
| Valvulopatie | Suflu | Focar și iradiere |
|---|---|---|
| Stenoză aortică | sistolic, de ejecție | focar aortic, iradiere spre vasele gâtului |
| Insuficiență mitrală | sistolic | apex, iradiere în axilă |
| Stenoză mitrală | uruitură diastolică, clacment de deschidere | apex |
| Insuficiență aortică | diastolic | focar aortic și Erb |

## Pulsul în valvulopatii
- **puls celer et altus** (Corrigan): insuficiența aortică;
- **puls parvus et tardus**: stenoza aortică.

## Frecătura pericardică
Se aude în ambii timpi și **persistă în apnee**, spre deosebire de frecătura pleurală.

> Pentru fiecare suflu precizați: timpul (sistolic/diastolic), focarul de maximă intensitate, iradierea, intensitatea și timbrul.`,
    },
  ],
  flashcards: [
    { id: 'sem-f1', front: 'Ce sugerează semnul Murphy pozitiv?', back: 'Colecistita acută' },
    { id: 'sem-f2', front: 'Ce este manevra Giordano?', back: 'Percuția lojei renale; durerea sugerează afectare renală (ex. pielonefrită)' },
    { id: 'sem-f3', front: 'Ce este semnul Blumberg?', back: 'Durere la decompresia bruscă a abdomenului; iritație peritoneală' },
    { id: 'sem-f4', front: 'Unde se află punctul McBurney?', back: 'La unirea 1/3 externe cu 2/3 interne a liniei spino-ombilicale drepte' },
    { id: 'sem-f5', front: 'Ce este semnul Courvoisier-Terrier?', back: 'Icter cu vezică biliară mărită, palpabilă, nedureroasă (obstrucție neoplazică)' },
    { id: 'sem-f6', front: 'În ce situație apare tipic respirația Kussmaul?', back: 'În acidoza metabolică, ex. cetoacidoza diabetică' },
    { id: 'sem-f7', front: 'Ce diferențiază cianoza centrală de cea periferică?', back: 'Centrală: caldă, prinde și limba; periferică: rece, doar la extremități' },
    { id: 'sem-f8', front: 'Unde debutează tipic edemul renal?', back: 'La pleoape, dimineața' },
    { id: 'sem-f9', front: 'Ce triadă percutorie-auscultatorie are pleurezia?', back: 'Matitate, vibrații vocale abolite, murmur vezicular abolit' },
    { id: 'sem-f10', front: 'Ce frecătură persistă în apnee?', back: 'Frecătura pericardică (cea pleurală dispare)' },
    { id: 'sem-f11', front: 'Ce suflu are stenoza mitrală?', back: 'Uruitură diastolică apexiană, cu clacment de deschidere' },
    { id: 'sem-f12', front: 'În ce valvulopatie apare pulsul celer et altus?', back: 'În insuficiența aortică' },
  ],
  questions: [
    // Anamneză și examen obiectiv general
    {
      id: 'sem-q1',
      type: 'multi',
      text: 'Fac parte din anamneză:',
      options: [
        'Motivele internării',
        'Palparea ganglionilor limfatici',
        'Antecedentele heredocolaterale',
        'Auscultația cordului',
        'Condițiile de viață și de muncă',
      ],
      answer: [0, 2, 4],
      explanation: 'Anamneza reunește datele obținute prin discuția cu pacientul: motivele internării, antecedentele și condițiile de viață și muncă. Palparea și auscultația aparțin examenului obiectiv.',
    },
    {
      id: 'sem-q2',
      type: 'single',
      text: 'Faciesul mitral se caracterizează prin:',
      options: [
        'Exoftalmie și privire strălucitoare',
        'Față rotundă, „în lună plină”',
        'Cianoza pomeților și a buzelor',
        'Ochi înfundați în orbite, nas ascuțit',
        'Proeminența arcadelor și a mandibulei',
      ],
      answer: [2],
      explanation: 'Faciesul mitral, din stenoza mitrală, asociază eritrocianoza pomeților și cianoza buzelor. Exoftalmia este tipică faciesului basedowian, iar trăsăturile ascuțite faciesului peritoneal.',
    },
    {
      id: 'sem-q3',
      type: 'single',
      text: 'Faciesul „în lună plină” este caracteristic pentru:',
      options: ['Hipotiroidism', 'Sindromul Cushing', 'Boala Basedow', 'Acromegalie', 'Peritonită'],
      answer: [1],
      explanation: 'Excesul de glucocorticoizi (sindrom Cushing, corticoterapie îndelungată) produce fața rotundă, pletorică. Acromegalia dă proeminența trăsăturilor osoase faciale.',
    },
    {
      id: 'sem-q4',
      type: 'multi',
      text: 'Despre icter sunt adevărate:',
      options: [
        'Se datorează creșterii hemoglobinei reduse în capilare',
        'Se datorează creșterii bilirubinei serice',
        'Se observă cel mai precoce la nivelul palmelor și plantelor',
        'Este identic cu carotenodermia, care colorează și sclerele',
        'Reprezintă colorația galbenă a tegumentelor și mucoaselor',
      ],
      answer: [1, 4],
      explanation: 'Icterul este colorația galbenă a tegumentelor și mucoaselor dată de hiperbilirubinemie și se observă cel mai precoce la sclere, nu palmo-plantar. Carotenodermia predomină palmo-plantar și nu colorează sclerele, iar creșterea hemoglobinei reduse produce cianoză.',
    },
    {
      id: 'sem-q5',
      type: 'multi',
      text: 'Despre cianoza centrală sunt adevărate:',
      options: [
        'Este vizibilă și pe limbă și mucoasa bucală',
        'Tegumentele cianotice sunt calde',
        'Dispare la încălzirea și masarea extremităților',
        'Poate apărea în bolile pulmonare cu hipoxemie',
        'Este limitată strict la extremități',
      ],
      answer: [0, 1, 3],
      explanation: 'Cianoza centrală, prin desaturare arterială, este caldă și interesează și limba și mucoasele. Cianoza periferică este rece, limitată la extremități și se ameliorează la încălzire.',
    },
    {
      id: 'sem-q6',
      type: 'single',
      text: 'Edemul din insuficiența cardiacă dreaptă este tipic:',
      options: [
        'Palpebral, matinal, alb și moale',
        'Unilateral, dureros, la o gambă',
        'Dur, fără godeu',
        'Localizat la față, gât și membrele superioare („în pelerină”)',
        'Declive, bilateral, mai accentuat seara',
      ],
      answer: [4],
      explanation: 'Edemul cardiac urmează gravitația: apare la gambe (sau în zona sacrată la bolnavul culcat), bilateral, și se accentuează seara. Edemul palpebral matinal este renal, iar cel „în pelerină” apare în sindromul de venă cavă superioară.',
    },
    {
      id: 'sem-q7',
      type: 'single',
      text: 'Edemul renal debutează tipic:',
      options: [
        'La gambe, seara',
        'La pleoape, dimineața',
        'La un singur membru inferior',
        'În regiunea sacrată',
        'La nivelul mâinilor, după efort',
      ],
      answer: [1],
      explanation: 'Edemul renal apare întâi în țesuturile laxe ale feței, la pleoape, după repausul nocturn. Edemul vesperal al gambelor este caracteristic insuficienței cardiace.',
    },
    {
      id: 'sem-q8',
      type: 'multi',
      text: 'Degetele hipocratice pot apărea în:',
      options: [
        'Cardiopatii congenitale cianogene',
        'Criza de astm bronșic',
        'Fibroza pulmonară idiopatică',
        'Bronșiectazii',
        'Cancerul bronhopulmonar',
      ],
      answer: [0, 2, 3, 4],
      explanation: 'Hipocratismul digital apare în afecțiuni cronice: supurații pulmonare (bronșiectazii), cancer bronhopulmonar, fibroză pulmonară idiopatică, cardiopatii cianogene. Criza de astm, afecțiune acută, nu îl produce.',
    },
    // Aparat respirator
    {
      id: 'sem-q9',
      type: 'single',
      text: 'Matitatea la percuție, cu vibrații vocale abolite și murmur vezicular abolit, sugerează:',
      options: ['Pneumonie lobară', 'Pneumotorax', 'Emfizem pulmonar', 'Pleurezie', 'Criză de astm bronșic'],
      answer: [3],
      explanation: 'Lichidul pleural produce matitate și împiedică transmiterea vibrațiilor și a murmurului. În condensarea pneumonică, vibrațiile vocale sunt accentuate și apare suflu tubar.',
    },
    {
      id: 'sem-q10',
      type: 'multi',
      text: 'Sindromul de condensare pulmonară (ex. pneumonie lobară) se caracterizează prin:',
      options: [
        'Vibrații vocale accentuate',
        'Matitate la percuție',
        'Suflu tubar',
        'Hipersonoritate la percuție',
        'Raluri crepitante',
      ],
      answer: [0, 1, 2, 4],
      explanation: 'Parenchimul condensat transmite mai bine vibrațiile și zgomotul laringo-traheal (suflu tubar) și dă matitate; alveolele cu exsudat produc raluri crepitante. Hipersonoritatea apare în emfizem și pneumotorax.',
    },
    {
      id: 'sem-q11',
      type: 'single',
      text: 'Timpanismul la percuție, cu vibrații vocale abolite și murmur vezicular abolit, sugerează:',
      options: ['Pneumotorax', 'Pleurezie', 'Pneumonie', 'Atelectazie', 'Edem pulmonar acut'],
      answer: [0],
      explanation: 'Aerul din cavitatea pleurală dă timpanism și împiedică transmiterea vibrațiilor și a murmurului vezicular. Pleurezia are aceleași semne auscultatorii, dar cu matitate.',
    },
    {
      id: 'sem-q12',
      type: 'single',
      text: 'Ralurile crepitante se aud tipic:',
      options: [
        'Doar în expir',
        'În ambii timpi, cu caracter muzical',
        'La sfârșitul inspirului',
        'Numai după tuse',
        'Doar în apnee',
      ],
      answer: [2],
      explanation: 'Ralurile crepitante sunt fine, egale, produse în alveole, și se aud la sfârșitul inspirului. Ele nu se modifică după tuse, spre deosebire de ralurile bronșice.',
    },
    {
      id: 'sem-q13',
      type: 'multi',
      text: 'Despre ralurile sibilante sunt adevărate:',
      options: [
        'Se produc în alveole',
        'Au caracter muzical, șuierător',
        'Sunt semnul specific al pleureziei',
        'Sunt caracteristice crizei de astm bronșic',
        'Se aud predominant în inspir',
      ],
      answer: [1, 3],
      explanation: 'Ralurile sibilante sunt raluri bronșice uscate, produse în bronhiile mici îngustate, cu caracter șuierător și predominant expiratorii, tipice astmului. Ralurile alveolare sunt crepitantele, iar inflamația pleurală dă frecătură pleurală.',
    },
    {
      id: 'sem-q14',
      type: 'single',
      text: 'Elementul care diferențiază frecătura pericardică de frecătura pleurală este:',
      options: [
        'Frecătura pericardică dispare în apnee',
        'Frecătura pleurală persistă în apnee',
        'Frecătura pericardică persistă în apnee',
        'Frecătura pleurală se aude doar în expir',
        'Frecătura pericardică se modifică la tuse',
      ],
      answer: [2],
      explanation: 'Frecătura pericardică urmează ritmul cardiac și persistă când pacientul își ține respirația. Frecătura pleurală depinde de mișcările respiratorii și dispare în apnee.',
    },
    {
      id: 'sem-q15',
      type: 'single',
      text: 'Respirația Kussmaul (amplă, profundă) apare tipic în:',
      options: ['Cetoacidoza diabetică', 'Alcaloza metabolică', 'Pneumotorax', 'Astmul bronșic', 'Intoxicația cu opiacee'],
      answer: [0],
      explanation: 'Respirația Kussmaul este un mecanism compensator al acidozei metabolice, prin eliminarea de CO₂. Opiaceele produc, din contră, deprimare respiratorie.',
    },
    {
      id: 'sem-q16',
      type: 'single',
      text: 'Respirația Cheyne-Stokes se caracterizează prin:',
      options: [
        'Respirații ample, regulate, fără pauze',
        'Perioade de apnee alternând cu respirații de amplitudine crescândă, apoi descrescândă',
        'Respirații de amplitudine egală, separate de pauze neregulate',
        'Inspir prelungit și șuierător',
        'Expir prelungit cu buzele țuguiate',
      ],
      answer: [1],
      explanation: 'În respirația Cheyne-Stokes, după o apnee amplitudinea crește progresiv, apoi scade până la o nouă apnee. Respirațiile egale separate de pauze descriu respirația Biot.',
    },
    // Aparat cardiovascular
    {
      id: 'sem-q17',
      type: 'single',
      text: 'Zgomotul II cardiac se datorează în principal:',
      options: [
        'Închiderii valvelor atrioventriculare',
        'Deschiderii valvelor semilunare',
        'Contracției atriale',
        'Închiderii valvelor semilunare',
        'Umplerii ventriculare rapide',
      ],
      answer: [3],
      explanation: 'Zgomotul II marchează sfârșitul sistolei și începutul diastolei, prin închiderea valvelor aortică și pulmonară. Închiderea valvelor atrioventriculare produce zgomotul I.',
    },
    {
      id: 'sem-q18',
      type: 'single',
      text: 'Zgomotul III cardiac apare:',
      options: [
        'În presistolă, la contracția atrială',
        'În protodiastolă, în faza de umplere ventriculară rapidă',
        'În mezosistolă',
        'Concomitent cu zgomotul I',
        'La deschiderea valvelor semilunare',
      ],
      answer: [1],
      explanation: 'Zgomotul III este protodiastolic și apare la umplerea ventriculară rapidă; poate fi fiziologic la tineri și patologic în insuficiența cardiacă. Zgomotul presistolic este zgomotul IV.',
    },
    {
      id: 'sem-q19',
      type: 'multi',
      text: 'Suflul din stenoza aortică este:',
      options: [
        'Sistolic, de ejecție',
        'Cu maximă intensitate în focarul aortic',
        'Cu iradiere spre vasele gâtului',
        'Diastolic',
        'Cu iradiere în axilă',
      ],
      answer: [0, 1, 2],
      explanation: 'Stenoza aortică dă un suflu sistolic de ejecție în spațiul II intercostal drept, iradiat spre carotide. Iradierea în axilă caracterizează suflul din insuficiența mitrală.',
    },
    {
      id: 'sem-q20',
      type: 'single',
      text: 'Un suflu sistolic apexian, cu iradiere în axilă, sugerează:',
      options: ['Stenoză mitrală', 'Insuficiență aortică', 'Stenoză aortică', 'Insuficiență mitrală', 'Stenoză pulmonară'],
      answer: [3],
      explanation: 'Regurgitarea sângelui din ventriculul stâng în atriu în sistolă produce un suflu sistolic la apex, iradiat în axilă. Stenoza mitrală dă o uruitură diastolică.',
    },
    {
      id: 'sem-q21',
      type: 'single',
      text: 'Semnul auscultatoriu caracteristic stenozei mitrale este:',
      options: [
        'Suflu sistolic de ejecție în focarul aortic',
        'Suflu diastolic în focarul Erb',
        'Uruitură diastolică la apex',
        'Suflu sistolic iradiat în axilă',
        'Frecătură în ambii timpi',
      ],
      answer: [2],
      explanation: 'Stenoza mitrală se caracterizează prin uruitură (rulment) diastolică apexiană, precedată de clacmentul de deschidere al mitralei. Suflul diastolic în focarul Erb sugerează insuficiența aortică.',
    },
    {
      id: 'sem-q22',
      type: 'multi',
      text: 'Sunt corecte următoarele localizări ale focarelor de auscultație cardiacă:',
      options: [
        'Focarul tricuspidian – la baza apendicelui xifoid',
        'Focarul Erb – spațiul III intercostal stâng, parasternal',
        'Focarul aortic – spațiul II intercostal drept, parasternal',
        'Focarul mitral – spațiul II intercostal drept',
        'Focarul pulmonar – spațiul II intercostal stâng, parasternal',
      ],
      answer: [0, 1, 2, 4],
      explanation: 'Focarele clasice: aortic în spațiul II IC drept, pulmonar în spațiul II IC stâng, Erb în spațiul III IC stâng parasternal, tricuspidian la baza xifoidului. Focarul mitral este la apex, nu în spațiul II IC drept.',
    },
    {
      id: 'sem-q23',
      type: 'multi',
      text: 'Sunt asocieri corecte între tipul de puls și afecțiune:',
      options: [
        'Puls celer et altus – stenoza mitrală',
        'Puls parvus et tardus – stenoza aortică',
        'Puls paradoxal – insuficiența aortică',
        'Puls celer et altus – insuficiența aortică',
        'Puls parvus et tardus – insuficiența aortică',
      ],
      answer: [1, 3],
      explanation: 'Insuficiența aortică dă un puls amplu și rapid (Corrigan), iar stenoza aortică un puls mic și întârziat. Pulsul paradoxal, cu scăderea amplitudinii în inspir, este clasic în tamponada cardiacă, nu în insuficiența aortică.',
    },
    // Abdomen
    {
      id: 'sem-q24',
      type: 'single',
      text: 'Semnul Murphy pozitiv (oprirea inspirului la palparea hipocondrului drept) sugerează:',
      options: ['Apendicita acută', 'Colecistita acută', 'Pancreatita acută', 'Pielonefrita acută', 'Ulcerul duodenal'],
      answer: [1],
      explanation: 'În inspir, colecistul inflamat coboară sub degetele examinatorului, iar durerea oprește brusc inspirul. Este un semn clasic de colecistită acută.',
    },
    {
      id: 'sem-q25',
      type: 'single',
      text: 'Manevra Giordano pozitivă (durere la percuția lojei renale) sugerează:',
      options: [
        'Colecistita acută',
        'Apendicita acută',
        'Afectare renală, ex. pielonefrita acută sau colica renală',
        'Ulcerul gastric',
        'Pancreatita cronică',
      ],
      answer: [2],
      explanation: 'Percuția lombară cu marginea ulnară a mâinii provoacă durere când rinichiul este inflamat sau în distensie. Este pozitivă clasic în pielonefrita acută și colica renală.',
    },
    {
      id: 'sem-q26',
      type: 'single',
      text: 'Durerea apărută la decompresia bruscă a peretelui abdominal (semnul Blumberg) indică:',
      options: ['Ascită', 'Iritație peritoneală', 'Hepatomegalie', 'Hernie inghinală', 'Stenoză pilorică'],
      answer: [1],
      explanation: 'Semnul Blumberg arată inflamația peritoneului parietal, ca în apendicita acută sau peritonite. Durerea este mai intensă la decompresie decât la compresie.',
    },
    {
      id: 'sem-q27',
      type: 'single',
      text: 'Punctul McBurney, sensibil în apendicita acută, se află:',
      options: [
        'La jumătatea liniei xifo-ombilicale',
        'Sub rebordul costal drept, pe linia medioclaviculară',
        'La unirea treimii externe cu cele două treimi interne ale liniei spino-ombilicale drepte',
        'În unghiul costo-vertebral drept',
        'La unirea treimii interne cu cele două treimi externe ale liniei spino-ombilicale stângi',
      ],
      answer: [2],
      explanation: 'Punctul McBurney este pe linia ce unește spina iliacă antero-superioară dreaptă cu ombilicul, la o treime de spină. Punctul de sub rebordul costal drept este punctul colecistic.',
    },
    {
      id: 'sem-q28',
      type: 'single',
      text: 'Semnul Courvoisier-Terrier (icter cu vezică biliară mărită, palpabilă, nedureroasă) sugerează:',
      options: [
        'Litiaza veziculară necomplicată',
        'Hepatita acută virală',
        'Obstrucția neoplazică a coledocului distal (ex. cancer de cap de pancreas)',
        'Colecistita acută',
        'Anemia hemolitică',
      ],
      answer: [2],
      explanation: 'Obstrucția lentă, neoplazică, permite destinderea unui colecist anterior sănătos. În litiază colecistul este de obicei scleroatrofic și nu se destinde.',
    },
    {
      id: 'sem-q29',
      type: 'single',
      text: 'În ascita liberă în cantitate medie, la percuția în decubit dorsal se constată:',
      options: [
        'Matitate periombilicală cu sonoritate în flancuri',
        'Matitate în flancuri, cu limita superioară concavă, și sonoritate periombilicală',
        'Matitate în flancuri, cu limita superioară convexă',
        'Timpanism generalizat',
        'Matitate numai în hipocondrul drept',
      ],
      answer: [1],
      explanation: 'Lichidul liber se acumulează decliv în flancuri, iar ansele intestinale plutesc periombilical, dând o matitate cu concavitatea în sus. Matitatea cu convexitate superioară sugerează o formațiune (ex. chist ovarian, glob vezical).',
    },
    {
      id: 'sem-q30',
      type: 'multi',
      text: 'Sunt semne de iritație peritoneală:',
      options: [
        'Apărarea musculară',
        'Contractura abdominală („abdomen de lemn”)',
        'Semnul Blumberg pozitiv',
        'Clapotajul gastric à jeun',
        'Circulația colaterală de tip „cap de meduză”',
      ],
      answer: [0, 1, 2],
      explanation: 'Apărarea, contractura și semnul Blumberg reflectă inflamația peritoneului parietal. Clapotajul à jeun sugerează stenoza pilorică, iar „capul de meduză” hipertensiunea portală.',
    },
  ],
}
