// Urologie – cazuri clinice și abilități practice (stagiu)
export default {
  cases: [
    {
      id: 'uro-c1',
      title: 'Durere lombară violentă cu iradiere în flanc',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 38 de ani se prezintă pentru o durere lombară dreaptă cu debut brusc, de câteva ore, foarte intensă, cu iradiere spre flanc și regiunea inghinală. Pacientul este agitat, nu își găsește o poziție antalgică și are greață cu un episod de vărsătură. Relatează un episod asemănător în urmă cu câțiva ani. Nu are alte boli cunoscute.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Caracterul durerii: debut brusc, colicativ, iradiere descendentă spre organele genitale externe, factori declanșatori (efort, trepidații, aport hidric scăzut)\n• Simptome urinare asociate: hematurie, polakiurie, disurie, tenesme vezicale\n• Febră, frisoane (sugerează obstrucție infectată – urgență)\n• Antecedente de litiază, infecții urinare, gută, boli intestinale, istoric familial\n• Diureza (anurie la rinichi unic funcțional), medicație, alergii\n• La femei: data ultimei menstruații (excluderea sarcinii ectopice)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Pacient agitat, se mișcă continuu, fără poziție antalgică (spre deosebire de peritonită, unde stă nemișcat)\n• Semne vitale: puls, tensiune, temperatură\n• Manevra Giordano pozitivă pe dreapta\n• Abdomen suplu, eventual meteorism (ileus reflex), fără semne de iritație peritoneală\n• Puncte ureterale dureroase pe dreapta\n• Examenul organelor genitale externe (exclude torsiunea testiculară) și palparea pulsului femural/aortei la vârstnic (anevrism aortic)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Sumar de urină și sediment: hematurie (frecvent microscopică), eventual cristale; leucociturie și nitriți dacă există infecție\n• Uree, creatinină, ionogramă; hemoleucogramă și proteina C reactivă (sindrom inflamator în caz de infecție)\n• Ecografie renală: dilatație pielocaliceală, uneori calcul vizibil\n• CT nativ abdomino-pelvin: investigația de elecție pentru confirmarea calculului, dimensiune și localizare\n• Radiografie reno-vezicală simplă: utilă pentru calculii radioopaci și urmărire\n• Test de sarcină la femeile de vârstă fertilă',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Colică renală dreaptă prin litiază ureterală.\nDiagnostic diferențial:\n• Apendicită acută, colecistită, ocluzie intestinală\n• Pielonefrită acută (febră, durere mai continuă)\n• Anevrism de aortă abdominală fisurat (vârstnic, instabilitate hemodinamică)\n• Infarct renal, torsiune testiculară\n• La femei: sarcină ectopică, torsiune de ovar, chist ovarian complicat',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Analgezie: antiinflamatoare nesteroidiene (prima linie, dacă funcția renală permite), antispastice; opioide dacă durerea persistă\n• Calculii mici pot elimina spontan: terapie medicală expulzivă (alfa-blocant), filtrarea urinei pentru recuperarea calculului\n• Urgență urologică: colică cu febră (obstrucție infectată), rinichi unic, anurie, durere refractară – drenaj (sondă JJ sau nefrostomie percutană) și antibiotic\n• Tratament intervențional programat: litotriție extracorporeală, ureteroscopie, nefrolitotomie percutanată\n• Prevenția recidivelor: aport hidric crescut, analiza compoziției calculului, dietă adaptată',
        },
      ],
      takeaways: [
        'Pacientul cu colică renală este agitat, cel cu peritonită stă nemișcat.',
        'Colica renală febrilă înseamnă obstrucție infectată și impune drenaj de urgență.',
        'CT-ul nativ este investigația de elecție pentru litiaza ureterală.',
        'La vârstnicul cu „prima colică renală” gândește-te la anevrismul de aortă.',
      ],
    },
    {
      id: 'uro-c2',
      title: 'Vârstnic care nu poate urina',
      setting: 'Camera de gardă',
      presentation:
        'Bărbat de 74 de ani este adus de familie pentru imposibilitatea de a urina de aproximativ 10 ore, cu durere suprapubiană intensă și agitație. De câțiva ani are jet urinar slab, micțiuni frecvente, inclusiv nocturne, și senzație de golire incompletă, pentru care nu a consultat medicul. În ultimele zile a luat un medicament pentru răceală. Are hipertensiune arterială tratată.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Simptome de tract urinar inferior anterioare: disurie de jet, polakiurie, nicturie, micțiune imperioasă, golire incompletă\n• Factori precipitanți: medicamente cu efect anticolinergic sau simpatomimetic (decongestionante, antihistaminice, antidepresive), alcool, frig, imobilizare, constipație, intervenții chirurgicale recente\n• Hematurie, febră, disurie (infecție, cheaguri)\n• Antecedente: intervenții urologice, stricturi uretrale, boli neurologice, diabet\n• Medicația curentă, inclusiv anticoagulante',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Glob vezical: formațiune suprapubiană, mată la percuție, dureroasă, cu convexitatea în sus\n• Starea generală, semne vitale, semne de deshidratare sau confuzie\n• Examenul organelor genitale externe: fimoză, stenoză de meat\n• Tușeu rectal: prostată mărită, elastică, nedureroasă, cu șanț median șters (adenom); consistență dură sau noduli (suspiciune de neoplasm); se verifică și tonusul sfincterian\n• Examen neurologic sumar (sensibilitate perineală, reflexe)',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Ecografie vezicală: confirmă retenția și volumul de urină\n• Uree, creatinină, ionogramă (posibilă afectare renală obstructivă)\n• Sumar de urină și urocultură din urina obținută la sondaj\n• Hemoleucogramă, glicemie\n• Ecografie renală: hidronefroză în retenția cronică\n• PSA – la distanță de episodul acut și de sondaj (retenția și manevrele îl pot crește fals)',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Retenție acută de urină pe fond de hiperplazie benignă de prostată, precipitată medicamentos.\nAlte cauze de luat în calcul:\n• Neoplasm de prostată\n• Stricturi uretrale, litiază uretrală, cheaguri (retenție prin hematurie)\n• Prostatită acută\n• Vezică neurogenă (diabet, afecțiuni medulare)\nDiferențiere: anuria (vezică goală la ecografie, fără glob vezical).',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Evacuarea vezicii de urgență: sondaj uretral în condiții de asepsie; dacă sondajul eșuează sau e contraindicat – cistostomie suprapubiană (de către urolog)\n• Monitorizarea diurezei după decompresie (risc de diureză postobstructivă și hematurie ex vacuo)\n• Oprirea medicamentului precipitant\n• Alfa-blocant și încercare de suprimare a sondei ulterior\n• Evaluare urologică pentru tratamentul de fond al hiperplaziei prostatice (medicamentos sau chirurgical)',
        },
      ],
      takeaways: [
        'Globul vezical este mat la percuție, cu convexitatea în sus.',
        'La vârstnic, verifică medicamentele cu efect anticolinergic sau decongestionante.',
        'Retenția trebuie diferențiată de anurie: în anurie vezica este goală.',
        'Nu forța sonda: la eșec se cheamă urologul pentru cistostomie.',
      ],
    },
    {
      id: 'uro-c3',
      title: 'Durere testiculară bruscă la un adolescent',
      setting: 'Camera de gardă',
      presentation:
        'Băiat de 15 ani se prezintă la 3 ore după debutul brusc al unei dureri intense în hemiscrotul stâng, apărută în timpul somnului, cu iradiere spre abdomenul inferior. Are greață și a vărsat o dată. Neagă traumatisme, febră sau simptome urinare. A mai avut un episod scurt de durere similară, care a cedat spontan.',
      steps: [
        {
          kind: 'anamneza',
          prompt: 'Ce întrebări de anamneză sunt esențiale?',
          answer:
            '• Ora exactă a debutului (timpul contează pentru viabilitatea testiculului)\n• Debut brusc sau progresiv, intensitate, iradiere\n• Greață, vărsături (frecvente în torsiune)\n• Febră, disurie, secreție uretrală, activitate sexuală (orientează spre orhiepididimită)\n• Traumatism, episoade anterioare de durere care au cedat spontan (torsiune intermitentă)\n• Infecție urinară recentă sau parotidită epidemică (orhită urliană)',
        },
        {
          kind: 'examen',
          prompt: 'Ce urmărești la examenul obiectiv? Ce găsești?',
          answer:
            '• Inspecție: testicul stâng ascensionat, cu ax orizontalizat, hemiscrot edemațiat, eventual eritematos\n• Palpare: testicul foarte dureros, mărit; epididimul poate fi greu de individualizat\n• Reflex cremasterian absent pe partea afectată\n• Semnul Prehn negativ: ridicarea testiculului nu ameliorează durerea\n• Examinarea testiculului controlateral, a regiunii inghinale (hernie strangulată) și a abdomenului',
        },
        {
          kind: 'investigatii',
          prompt: 'Ce investigații ceri și ce rezultate te aștepți?',
          answer:
            '• Diagnosticul este clinic; la suspiciune puternică nu se întârzie explorarea chirurgicală pentru investigații\n• Ecografie Doppler scrotală, dacă e disponibilă imediat: flux sanguin testicular absent sau redus\n• Sumar de urină: de regulă normal în torsiune (pozitiv în orhiepididimită)\n• Analize preoperatorii uzuale',
        },
        {
          kind: 'diagnostic',
          prompt: 'Care e diagnosticul cel mai probabil și diagnosticul diferențial?',
          answer:
            'Torsiune de cordon spermatic (torsiune testiculară) stângă.\nDiagnostic diferențial:\n• Torsiunea de hidatidă Morgagni (punct albăstrui palpabil la polul superior, durere mai localizată)\n• Orhiepididimită (debut progresiv, febră, simptome urinare, semn Prehn pozitiv)\n• Hernie inghinală strangulată\n• Traumatism testicular, tumoră testiculară complicată\n• Edem scrotal idiopatic',
        },
        {
          kind: 'tratament',
          prompt: 'Care sunt principiile de tratament și de monitorizare?',
          answer:
            '• Urgență chirurgicală: explorare scrotală cât mai rapidă\n• Detorsionare; dacă testiculul este viabil – orhidopexie; dacă este necrozat – orhiectomie\n• Orhidopexie și a testiculului controlateral (predispoziție anatomică bilaterală)\n• Detorsionarea manuală poate fi tentată doar ca măsură temporară, nu înlocuiește intervenția\n• Analgezie, informarea pacientului și a părinților, urmărire postoperatorie',
        },
      ],
      takeaways: [
        'Orice scrot acut la adolescent este torsiune până la proba contrarie.',
        'Viabilitatea testiculului scade rapid cu timpul: nu amâna explorarea pentru ecografie.',
        'Reflexul cremasterian absent susține torsiunea.',
        'Orhidopexia se face bilateral.',
      ],
    },
  ],
  skills: [
    {
      id: 'uro-s1',
      name: 'Examenul aparatului urinar (inclusiv manevra Giordano)',
      category: 'Examen clinic',
      steps: [
        'Te prezinți, explici examinarea, obții acordul și asiguri intimitatea; pacientul în decubit dorsal, apoi șezând.',
        'Inspecția: regiunile lombare (bombări, cicatrici), regiunea suprapubiană (glob vezical), edeme, paloare.',
        'Palparea bimanuală a rinichilor (metoda Guyon): o mână posterior în unghiul costo-vertebral, cealaltă anterior sub rebordul costal; cauți contactul lombar și balotarea.',
        'Palparea punctelor ureterale (superioare, mijlocii) și căutarea sensibilității dureroase.',
        'Palparea și percuția regiunii suprapubiene pentru glob vezical (matitate convexă în sus).',
        'Manevra Giordano: pacientul șezând, aplici lovituri ușoare cu marginea cubitală a mâinii în regiunea lombară, bilateral, comparativ; pozitivă dacă provoacă durere.',
        'Auscultația periombilicală pentru sufluri (stenoză de arteră renală).',
        'Completezi cu examenul organelor genitale externe și tușeul rectal, dacă sunt indicate, și cu măsurarea tensiunii arteriale.',
      ],
      tips: 'Giordano se face blând și comparativ; un Giordano pozitiv nu e specific pentru rinichi (poate apărea și în afecțiuni vertebrale sau musculare). Studenții uită adesea să caute globul vezical.',
    },
    {
      id: 'uro-s2',
      name: 'Tușeul rectal pentru evaluarea prostatei (principii)',
      category: 'Examen clinic',
      steps: [
        'Explici scopul și desfășurarea examinării, obții acordul și propui prezența unui însoțitor; asiguri intimitatea.',
        'Poziționezi pacientul: decubit lateral stâng cu genunchii flectați, poziție genupectorală sau aplecat în față.',
        'Pui mănuși, aplici lubrifiant pe indexul mâinii dominante.',
        'Inspectezi regiunea perianală: fisuri, hemoroizi, fistule.',
        'Introduci lent indexul, cerând pacientului să respire relaxat; apreciezi tonusul sfincterian.',
        'Palpezi prostata pe peretele anterior: dimensiune, consistență (elastică normal), suprafață, simetria lobilor, șanțul median, sensibilitate, noduli.',
        'La retragere inspectezi mănușa (sânge, mucus, aspectul scaunului).',
        'Ajuți pacientul să se șteargă și să se îmbrace, explici ce ai găsit și consemnezi.',
      ],
      tips: 'Prostata dureroasă și fluctuentă sugerează prostatită sau abces – masaj prostatic contraindicat. Nodul dur, neregulat sau șanț median șters asimetric ridică suspiciunea de neoplasm.',
    },
    {
      id: 'uro-s3',
      name: 'Montarea unei sonde urinare (principii și asepsie)',
      category: 'Manevră',
      steps: [
        'Verifici indicația și contraindicațiile (suspiciune de leziune uretrală: sânge la meat, traumatism pelvin); alegi sonda potrivită.',
        'Explici procedura, obții acordul, asiguri intimitatea; pregătești trusa sterilă, sonda, lubrifiant anestezic, seringă cu apă sterilă, pungă colectoare.',
        'Igiena mâinilor, mănuși, toaleta organelor genitale externe; apoi mănuși sterile și câmp steril.',
        'La bărbat: decalotezi glandul, dezinfectezi meatul, ții penisul vertical, introduci lubrifiant intrauretral și aștepți efectul.',
        'Introduci sonda cu blândețe, fără forțare, până la apariția urinei, apoi o mai avansezi pentru ca balonașul să fie în vezică.',
        'Umfli balonașul cu apă sterilă doar după apariția urinei și verifici că pacientul nu are durere; retragi ușor până simți rezistență.',
        'Reapozi prepuțul (prevenirea parafimozei), conectezi sistemul colector închis și fixezi sonda.',
        'Notezi data, tipul sondei, volumul și aspectul urinei; urmărești diureza.',
      ],
      tips: 'Nu forța sonda niciodată și nu umfla balonașul în uretră. Greșeala clasică este uitarea reducerii prepuțului, cu risc de parafimoză.',
    },
    {
      id: 'uro-s4',
      name: 'Examenul organelor genitale externe masculine',
      category: 'Examen clinic',
      steps: [
        'Explici examinarea, obții acordul, asiguri intimitatea, pui mănuși; examinezi în ortostatism și în decubit.',
        'Inspecția penisului: tegument, leziuni, poziția meatului (hipospadias), secreții; decalotarea glandului (fimoză, balanită) și reaplicarea prepuțului.',
        'Inspecția scrotului: simetrie, tumefacții, eritem, poziția testiculelor.',
        'Palparea fiecărui testicul între police și primele două degete: dimensiune, consistență, suprafață, sensibilitate, noduli.',
        'Palparea epididimului (posterior de testicul) și a cordonului spermatic, inclusiv canalul deferent.',
        'În caz de tumefacție: verifici dacă poți ajunge deasupra ei (hernie sau nu) și faci transiluminare (hidrocel – translucid).',
        'Varicocel: palparea cordonului în ortostatism și la manevra Valsalva („pachet de viermi”).',
        'Examinezi orificiile inghinale și ganglionii inghinali; reflexul cremasterian dacă e relevant.',
      ],
      tips: 'Orice nodul dur, nedureros, în parenchimul testicular este suspect de tumoră până la proba contrarie și se evaluează ecografic.',
    },
    {
      id: 'uro-s5',
      name: 'Interpretarea sumarului de urină',
      category: 'Interpretare',
      steps: [
        'Verifici datele pacientului și modul de recoltare (urină din jetul mijlociu, prima urină de dimineață, toaleta locală).',
        'Aspect și culoare: urină tulbure (leucociturie, cristale), roșie (hematurie, hemoglobinurie, unele alimente sau medicamente).',
        'Densitate și pH: informații despre concentrarea urinei și despre tipul de litiază sau infecție.',
        'Proteine: proteinurie (afectare glomerulară sau tubulară, dar și tranzitorie la efort sau febră).',
        'Glucoză și corpi cetonici: glicozurie (diabet, prag renal scăzut), cetonurie (diabet decompensat, post).',
        'Nitriți și esteraza leucocitară: pozitivi sugerează infecție urinară bacteriană.',
        'Sedimentul: leucocite, hematii (dismorfe – origine glomerulară), cilindri (hematici în glomerulonefrite, leucocitari în pielonefrită), cristale, celule epiteliale (contaminare).',
        'Corelezi cu clinica și decizi dacă e nevoie de urocultură sau alte investigații.',
      ],
      tips: 'Multe celule epiteliale indică recoltare incorectă. Nitriții negativi nu exclud infecția urinară, iar bacteriuria asimptomatică de regulă nu se tratează (excepție sarcina și unele intervenții urologice).',
    },
  ],
}
