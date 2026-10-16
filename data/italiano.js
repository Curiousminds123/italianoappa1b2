/* Curso de italiano A2-C1 para hispanohablantes: teoria, ejemplos y practica */
window.CAMINO = [];

const grammarCourses = [
  {
    lvl: "A2",
    topics: [
      ["a2-articoli", "Artículos y género de los nombres", "🧩", "El artículo italiano concuerda en género y número con el nombre; memoriza el artículo junto con cada palabra.", [
        ["Masculino singular", "il + consonante; lo + s + consonante, z, gn, ps; l’ + vocal", "il libro · lo studente · l’amico", "el libro · el estudiante · el amigo"],
        ["Femenino singular", "la + consonante; l’ + vocal", "la casa · l’amica", "la casa · la amiga"],
        ["Masculino plural", "i (il) · gli (lo / l’)", "i libri · gli studenti · gli amici", "los libros · los estudiantes · los amigos"],
        ["Femenino plural", "le para todos los nombres femeninos", "le case · le amiche", "las casas · las amigas"]
      ], [
        ["___ zaino è nuovo.", ["Lo", "Il", "La"], 0, "Zaino empieza por z: se usa lo."],
        ["___ amica di Luca è italiana.", ["L’", "La", "Lo"], 0, "Ante vocal, la se elide: l’amica."],
        ["___ studenti arrivano alle otto.", ["Gli", "I", "Le"], 0, "Studente empieza por s + consonante: gli studenti."]
      ], [["il ragazzo","el chico"],["la ragazza","la chica"],["lo studente","el estudiante"],["l’amica","la amiga"],["il quaderno","el cuaderno"],["la lezione","la lección"]], "Lo studente apre il quaderno. L’amica arriva alla lezione con un libro nuovo."
      ],
      ["a2-presente", "Presente de verbos regulares", "🔄", "Los infinitivos terminan en -are, -ere o -ire. Quita la terminación y añade la del sujeto.", [
        ["-are: parlare", "parl-o, parl-i, parl-a, parl-iamo, parl-ate, parl-ano", "Parlo italiano con i miei amici.", "Hablo italiano con mis amigos."],
        ["-ere: prendere", "prend-o, prend-i, prend-e, prend-iamo, prend-ete, prend-ono", "Prendiamo il treno alle nove.", "Tomamos el tren a las nueve."],
        ["-ire: dormire", "dorm-o, dorm-i, dorm-e, dorm-iamo, dorm-ite, dorm-ono", "Dormono otto ore.", "Duermen ocho horas."],
        ["-ire: finire", "fin-isc-o, fin-isc-i, fin-isc-e; fin-iamo, fin-ite, fin-isc-ono", "Finisco il lavoro alle sei.", "Termino el trabajo a las seis."]
      ], [
        ["Io ___ italiano ogni sera. (studiare)", ["studio", "studia", "studiamo"], 0, "Con io, studiare forma studio."],
        ["Voi ___ il treno delle otto. (prendere)", ["prendete", "prendono", "prendiamo"], 0, "Con voi, prendere forma prendete."],
        ["Loro ___ la cena. (finire)", ["finiscono", "finiscono", "finisci"], 0, "Finire añade -isc- en la tercera persona plural."]
      ], [["parlare","hablar"],["studiare","estudiar"],["prendere","tomar"],["leggere","leer"],["dormire","dormir"],["finire","terminar"]], "Ogni giorno studio in biblioteca, leggo un capitolo e finisco i compiti prima di cena."
      ],
      ["a2-essere-avere", "Essere, avere y c’è / ci sono", "⭐", "Essere y avere son irregulares y aparecen en muchísimas expresiones. C’è es singular; ci sono es plural.", [
        ["Essere", "sono · sei · è · siamo · siete · sono", "Siamo pronti per la lezione.", "Estamos listos para la clase."],
        ["Avere", "ho · hai · ha · abbiamo · avete · hanno", "Hai una penna blu?", "¿Tienes un bolígrafo azul?"],
        ["Existencia singular", "c’è + nombre singular", "C’è una farmacia qui vicino.", "Hay una farmacia aquí cerca."],
        ["Existencia plural", "ci sono + nombre plural", "Ci sono due fermate dell’autobus.", "Hay dos paradas de autobús."]
      ], [
        ["Marta ___ vent'anni.", ["ha", "è", "hanno"], 0, "La edad se expresa con avere: ha vent'anni."],
        ["In centro ___ un museo.", ["c’è", "ci sono", "è"], 0, "Un museo es singular: c’è."],
        ["Nel quartiere ___ molti negozi.", ["ci sono", "c’è", "sono"], 0, "Negozi es plural: ci sono."]
      ], [["essere","ser / estar"],["avere","tener"],["avere fame","tener hambre"],["avere sete","tener sed"],["c’è","hay (singular)"],["ci sono","hay (plural)"]], "Siamo in centro. C’è una piazza grande e ci sono molti caffè. Ho fame: prendiamo qualcosa?"
      ],
      ["a2-preposizioni", "Preposiciones sencillas y articuladas", "🧭", "Las preposiciones simples se unen al artículo definido: a + il = al, di + la = della, in + i = nei.", [
        ["Lugar: a / in", "a + ciudad; in + país o región", "Vivo a Roma, in Italia.", "Vivo en Roma, en Italia."],
        ["Origen o pertenencia: di", "di + nombre; del, dello, della…", "Il libro è della professoressa.", "El libro es de la profesora."],
        ["Destino: a / da", "andare a + ciudad; andare da + persona", "Vado dal medico alle dieci.", "Voy al médico a las diez."],
        ["Preposición + artículo", "a: al/allo/alla · di: del/dello/della · in: nel/nello/nella", "Entriamo nel museo.", "Entramos en el museo."]
      ], [
        ["Domani vado ___ Firenze.", ["a", "in", "da"], 0, "Ante nombres de ciudad se usa a."],
        ["Abito ___ Spagna.", ["in", "a", "da"], 0, "Ante países se usa in."],
        ["Il cane è ___ giardino.", ["nel", "al", "dello"], 0, "In + il se contrae en nel."]
      ], [["a Roma","en Roma"],["in Italia","en Italia"],["dal medico","al médico"],["nel centro","en el centro"],["vicino a","cerca de"],["lontano da","lejos de"]], "Abito a Bologna, in Italia. Il mio ufficio è nel centro, vicino alla stazione."
      ],
      ["a2-passato-prossimo", "Passato prossimo: acciones terminadas", "⏮️", "Forma el passato prossimo con avere o essere en presente y el participio pasado. Con essere, el participio concuerda.", [
        ["Verbos en -are", "avere + raíz + -ato", "Ho visitato il museo.", "He visitado el museo."],
        ["Verbos en -ere / -ire", "avere + raíz + -uto / -ito", "Abbiamo ricevuto una lettera.", "Hemos recibido una carta."],
        ["Verbos de movimiento", "essere + participio con concordancia", "Anna è arrivata; Marco è arrivato.", "Anna ha llegado; Marco ha llegado."],
        ["Negación", "non + auxiliar + participio", "Non abbiamo mangiato fuori.", "No hemos comido fuera."]
      ], [
        ["Ieri ___ una pizza. (mangiare)", ["ho mangiato", "sono mangiato", "mangiavo"], 0, "Mangiare forma el passato prossimo con avere."],
        ["Giulia ___ a casa tardi. (tornare)", ["è tornata", "ha tornato", "è tornato"], 0, "Tornare usa essere y concuerda con Giulia."],
        ["Noi non ___ il film. (vedere)", ["abbiamo visto", "siamo visti", "vedevamo"], 0, "Vedere: abbiamo visto."]
      ], [["ieri","ayer"],["la settimana scorsa","la semana pasada"],["ho fatto","he hecho"],["sono arrivato/a","he llegado"],["abbiamo visto","hemos visto"],["è partito/a","ha salido"]], "Sabato siamo partiti presto e abbiamo visitato Verona. Abbiamo mangiato in centro e siamo tornati a casa la sera."
      ],
      ["a2-riflessivi", "Verbos reflexivos y rutina", "🪞", "Los verbos reflexivos llevan mi, ti, si, ci, vi, si antes del verbo; en tiempos compuestos usan essere.", [
        ["Pronombres reflexivos", "mi · ti · si · ci · vi · si", "Mi sveglio alle sette.", "Me despierto a las siete."],
        ["Presente", "pronombre + verbo conjugado", "Ci prepariamo in dieci minuti.", "Nos preparamos en diez minutos."],
        ["Passato prossimo", "pronombre + essere + participio concordado", "Si è alzata presto.", "Se ha levantado temprano."],
        ["Negación", "non + pronombre + verbo", "Non mi addormento subito.", "No me duermo enseguida."]
      ], [
        ["Ogni mattina ___ lavo e faccio colazione.", ["mi", "si", "ci"], 0, "Con io se usa el pronombre mi."],
        ["Loro ___ svegliano presto.", ["si", "ci", "vi"], 0, "Con loro el pronombre reflexivo es si."],
        ["Paolo si ___ alle sei. (alzarsi)", ["è alzato", "ha alzato", "sono alzato"], 0, "Los reflexivos usan essere en passato prossimo."]
      ], [["svegliarsi","despertarse"],["alzarsi","levantarse"],["lavarsi","lavarse"],["vestirsi","vestirse"],["prepararsi","prepararse"],["addormentarsi","dormirse"]], "Mi sveglio, mi lavo e mi vesto. Ieri mi sono alzata più tardi perché era domenica."
      ],
      ["a2-pronomi-diretti", "Pronombres directos lo, la, li, le", "🎯", "El pronombre directo sustituye al complemento sin preposición y normalmente se coloca antes del verbo conjugado.", [
        ["Masculino singular", "lo", "Compro il pane → Lo compro.", "Compro el pan → Lo compro."],
        ["Femenino singular", "la", "Conosci Maria? → La conosco.", "¿Conoces a Maria? → La conozco."],
        ["Masculino plural", "li", "Leggo i messaggi → Li leggo.", "Leo los mensajes → Los leo."],
        ["Femenino plural", "le", "Prendo le chiavi → Le prendo.", "Cojo las llaves → Las cojo."]
      ], [
        ["Hai il biglietto? Sì, ___ ho.", ["lo", "la", "li"], 0, "Biglietto es masculino singular: lo."],
        ["Vedi le ragazze? Sì, ___ vedo.", ["le", "li", "la"], 0, "Ragazze es femenino plural: le."],
        ["Compri i pomodori? Sì, ___ compro.", ["li", "le", "lo"], 0, "Pomodori es masculino plural: li."]
      ], [["lo compro","lo compro"],["la conosco","la conozco"],["li prendo","los cojo"],["le vedo","las veo"],["un biglietto","un billete"],["le chiavi","las llaves"]], "Hai le chiavi? Sì, le ho. E il biglietto? Lo metto nella borsa."
      ],
      ["a2-comparativi", "Comparativos, superlativos y piacere", "⚖️", "Compara con più/meno… di o che. Piacere concuerda con lo que gusta: mi piace una cosa, mi piacciono varias.", [
        ["Comparativo de superioridad", "più + aggettivo + di / che", "Roma è più grande di Siena.", "Roma es más grande que Siena."],
        ["Comparativo de inferioridad", "meno + aggettivo + di", "Questo hotel è meno caro.", "Este hotel es menos caro."],
        ["Superlativo relativo", "il/la più + aggettivo", "È il ristorante più famoso.", "Es el restaurante más famoso."],
        ["Piacere", "mi/ti/gli/le piace (singular); piacciono (plural)", "Mi piacciono i musei.", "Me gustan los museos."]
      ], [
        ["Milano è ___ grande di Parma.", ["più", "molto", "che"], 0, "El comparativo de superioridad se forma con più."],
        ["___ piace la musica italiana.", ["Mi", "Io", "Me"], 0, "Piacere lleva pronombre indirecto: mi piace."],
        ["Mi ___ questi libri.", ["piacciono", "piace", "piaci"], 0, "Libri es plural: mi piacciono."]
      ], [["più grande","más grande"],["meno costoso","menos costoso"],["il più bello","el más bonito"],["mi piace","me gusta"],["mi piacciono","me gustan"],["preferire","preferir"]], "Mi piace viaggiare in treno e mi piacciono le città d’arte. Firenze è una delle città più belle d’Italia."
      ]
    ]
  },
  {
    lvl: "B1",
    topics: [
      ["b1-imperfetto", "Imperfetto: hábitos y contexto pasado", "🕰️", "El imperfetto describe hábitos, situaciones y acciones en curso en el pasado.", [
        ["-are", "parl-avo, -avi, -ava, -avamo, -avate, -avano", "Da bambino giocavo in giardino.", "De niño jugaba en el jardín."],
        ["-ere", "legg-evo, -evi, -eva, -evamo, -evate, -evano", "Leggevamo ogni sera.", "Leíamos todas las noches."],
        ["-ire", "dorm-ivo, -ivi, -iva, -ivamo, -ivate, -ivano", "Dormivano poco.", "Dormían poco."],
        ["Essere", "ero · eri · era · eravamo · eravate · erano", "La casa era molto tranquilla.", "La casa era muy tranquila."]
      ], [
        ["Quando ero piccolo, ___ spesso dai nonni. (andare)", ["andavo", "sono andato", "andrò"], 0, "El hábito pasado se expresa con imperfetto."],
        ["Mentre noi ___, è arrivato Luca. (cenare)", ["cenavamo", "abbiamo cenato", "ceneremo"], 0, "Una acción en curso usa imperfetto."],
        ["Le strade ___ deserte. (essere)", ["erano", "sono state", "saranno"], 0, "Essere en imperfetto: erano."]
      ], [["da bambino","de niño"],["una volta","antes / una vez"],["mentre","mientras"],["ogni estate","cada verano"],["di solito","normalmente"],["all’improvviso","de repente"]], "Quando abitavo a Torino, prendevo il tram ogni mattina. Una sera, mentre tornavo a casa, ho incontrato una vecchia amica."
      ],
      ["b1-imperfetto-passato", "Passato prossimo o imperfetto", "⏳", "Usa imperfetto para el fondo y los hábitos; passato prossimo para acontecimientos terminados que hacen avanzar el relato.", [
        ["Descripción de fondo", "imperfetto", "Pioveva e faceva freddo.", "Llovía y hacía frío."],
        ["Acción puntual", "passato prossimo", "A un certo punto è arrivato il taxi.", "En un momento dado llegó el taxi."],
        ["Acciones en paralelo", "mentre + imperfetto", "Mentre studiavo, ascoltavo la radio.", "Mientras estudiaba, escuchaba la radio."],
        ["Interrupción", "imperfetto + quando + passato prossimo", "Dormivo quando è suonato il telefono.", "Dormía cuando sonó el teléfono."]
      ], [
        ["Mentre ___ la cena, è arrivata Giulia. (preparare)", ["preparavo", "ho preparato", "preparerò"], 0, "La acción en curso usa imperfetto."],
        ["Ieri ___ un film interessante. (vedere)", ["ho visto", "vedevo", "vedrò"], 0, "Una acción terminada ayer usa passato prossimo."],
        ["Camminavamo quando ___ a piovere.", ["ha cominciato", "cominciava", "comincia"], 0, "El comienzo puntual se expresa con passato prossimo."]
      ], [["mentre studiavo","mientras estudiaba"],["è successo","ocurrió"],["a un certo punto","en un momento dado"],["all’improvviso","de repente"],["quella sera","aquella noche"],["in quel momento","en ese momento"]], "Faceva caldo e la piazza era piena. Mentre cercavo un tavolo, ho incontrato Paolo e abbiamo cenato insieme."
      ],
      ["b1-futuro", "Futuro semplice y futuro anterior", "🔮", "El futuro regular usa el infinitivo sin la -e final y las terminaciones -ò, -ai, -à, -emo, -ete, -anno.", [
        ["Futuro regular", "parlerò · prenderai · dormiranno", "Domani partirò presto.", "Mañana saldré temprano."],
        ["Raíces irregulares", "sar-, avr-, andr-, far-, verr-, potr-, dovr-, vorr-", "Verremo a trovarti.", "Vendremos a visitarte."],
        ["Futuro anterior", "avere/essere en futuro + participio", "Avrò finito entro le sei.", "Habré terminado antes de las seis."],
        ["Predicción", "futuro; también valor de conjetura", "Sarà a casa, immagino.", "Estará en casa, imagino."]
      ], [
        ["L'anno prossimo ___ in Italia. (vivere)", ["vivrò", "vivevo", "ho vissuto"], 0, "Futuro de vivere: vivrò."],
        ["Quando arriverai, noi ___ già ___. (partire)", ["saremo già partiti", "siamo già partiti", "partivamo"], 0, "El futuro anterior usa essere en futuro + participio."],
        ["Domani loro ___ il progetto. (fare)", ["faranno", "fanno", "facevano"], 0, "La raíz irregular de fare es far-."]
      ], [["domani","mañana"],["la settimana prossima","la semana que viene"],["tra un mese","dentro de un mes"],["entro stasera","antes de esta noche"],["sarò","seré / estaré"],["avremo finito","habremos terminado"]], "La settimana prossima partirò per Napoli. Quando arriverò, avrò già prenotato l’albergo e preparato il programma."
      ],
      ["b1-condizionale", "Condizionale presente y cortesía", "🙏", "El condizionale expresa deseos, peticiones corteses y situaciones hipotéticas; comparte raíces con el futuro.", [
        ["Formación", "raíz del futuro + -ei, -esti, -ebbe, -emmo, -este, -ebbero", "Vorrei un tavolo vicino alla finestra.", "Querría una mesa cerca de la ventana."],
        ["Petición cortés", "vorrei / potrebbe / sarebbe", "Potrebbe aiutarmi, per favore?", "¿Podría ayudarme, por favor?"],
        ["Deseo", "mi piacerebbe + infinitivo", "Mi piacerebbe visitare la Sicilia.", "Me gustaría visitar Sicilia."],
        ["Hipótesis", "se + imperfetto, condizionale", "Se avessi tempo, viaggerei di più.", "Si tuviera tiempo, viajaría más."]
      ], [
        ["___ un caffè, per favore. (volere, io)", ["Vorrei", "Voglio", "Vorrò"], 0, "Vorrei es la forma cortés de volere."],
        ["Se avessi una macchina, ___ al mare. (andare)", ["andrei", "vado", "sono andato"], 0, "En la consecuencia hipotética se usa condizionale."],
        ["___ ripetere, per favore? (potere, Lei)", ["Potrebbe", "Può", "Poteva"], 0, "Potrebbe es una petición formal cortés."]
      ], [["vorrei","querría / quisiera"],["mi piacerebbe","me gustaría"],["potrebbe","podría"],["sarebbe possibile","¿sería posible?"],["per favore","por favor"],["volentieri","con mucho gusto"]], "Buongiorno, vorrei prenotare una camera. Potrebbe dirmi quanto costa? Mi piacerebbe una stanza con vista sul mare."
      ],
      ["b1-pronomi-indiretti", "Pronombres indirectos y combinados", "🎯", "Los pronombres indirectos sustituyen a a + persona: mi, ti, gli/le, ci, vi, gli. Se colocan delante del verbo.", [
        ["Indirectos", "mi · ti · gli/le · ci · vi · gli", "Telefono a Marta → Le telefono.", "Llamo a Marta → La llamo (por teléfono)."],
        ["Con passato prossimo", "pronombre + avere + participio", "Gli ho scritto ieri.", "Le escribí ayer."],
        ["Dos pronombres", "mi/ti/ci/vi → me/te/ce/ve + lo/la/li/le", "Me lo spiega?", "¿Me lo explica?"],
        ["Con infinitivo", "unido al infinitivo: dirgli, parlarle", "Voglio dirgli la verità.", "Quiero decirle la verdad."]
      ], [
        ["Scrivo a Paolo. ___ scrivo un messaggio.", ["Gli", "Lo", "La"], 0, "A Paolo se sustituye por el indirecto gli."],
        ["Hai telefonato a Maria? Sì, ___ ho telefonato.", ["le", "la", "li"], 0, "A Maria se sustituye por le."],
        ["Puoi spiegare il problema a me? Puoi ___ spiegare?", ["spiegarmelo", "lo mi spiegare", "mi lo spiegare"], 0, "Con infinitivo los pronombres se unen al final."]
      ], [["telefonare a","llamar por teléfono a"],["scrivere a","escribir a"],["spiegare","explicar"],["raccontare","contar"],["gli ho detto","le dije"],["me lo puoi dare","¿me lo puedes dar?"]], "Ho scritto a Giulia e le ho raccontato tutto. Domani voglio telefonarle e spiegarglielo meglio."
      ],
      ["b1-ci-ne", "Uso de ci y ne", "🧭", "Ci puede sustituir a un lugar o a + cosa; ne sustituye a di + cosa o expresa cantidad.", [
        ["Ci: lugar", "ci = lì / in quel luogo", "Vai a Roma? Sì, ci vado domani.", "¿Vas a Roma? Sí, voy allí mañana."],
        ["Ci: a + cosa", "pensare a qualcosa → pensarci", "Penso spesso a quel viaggio → Ci penso.", "Pienso a menudo en ese viaje → Pienso en ello."],
        ["Ne: di + cosa", "parlare di qualcosa → parlarne", "Parliamo del problema → Ne parliamo.", "Hablamos del problema → Hablamos de ello."],
        ["Ne: cantidad", "ne + número / quantità", "Quanti libri hai? Ne ho tre.", "¿Cuántos libros tienes? Tengo tres."]
      ], [
        ["Vai in palestra? Sì, ___ vado tre volte alla settimana.", ["ci", "ne", "lo"], 0, "Ci sustituye al lugar."],
        ["Hai del pane? Sì, ___ ho un po'.", ["ne", "ci", "lo"], 0, "Ne sustituye a del pane y conserva la idea de cantidad."],
        ["Parliamo di questo progetto. ___ parliamo domani.", ["Ne", "Ci", "Lo"], 0, "Parlare di algo se sustituye con ne."]
      ], [["ci vado","voy allí"],["ne voglio due","quiero dos"],["parlarne","hablar de ello"],["pensarci","pensar en ello"],["ce n’è","hay (de ello)"],["non ne ho","no tengo (de eso)"]], "Quante bottiglie compriamo? Ne compriamo tre. Le mettiamo in cucina; ci mettiamo anche i bicchieri."
      ],
      ["b1-relativi", "Pronombres relativos che, cui, dove", "🔗", "Che une sujeto u objeto; cui va tras preposición; dove introduce una referencia de lugar.", [
        ["Che: sujeto", "persona o cosa + che + verbo", "La ragazza che parla è mia cugina.", "La chica que habla es mi prima."],
        ["Che: objeto directo", "nombre + che + sujeto + verbo", "Il film che ho visto è divertente.", "La película que he visto es divertida."],
        ["Cui: con preposición", "a / di / con / per + cui", "La persona a cui scrivo vive qui.", "La persona a quien escribo vive aquí."],
        ["Dove: lugar", "luogo + dove", "La città dove abito è tranquilla.", "La ciudad donde vivo es tranquila."]
      ], [
        ["Il libro ___ leggo è interessante.", ["che", "cui", "dove"], 0, "Che funciona como objeto directo."],
        ["La collega con ___ lavoro è gentile.", ["cui", "che", "dove"], 0, "Tras preposición se usa cui."],
        ["È il paese ___ è nato mio padre.", ["dove", "cui", "che"], 0, "Dove se refiere a un lugar."]
      ], [["che","que"],["a cui","a quien / al que"],["di cui","de quien / del que"],["con cui","con quien / con el que"],["dove","donde"],["il quale","el cual"]], "La città dove lavoro ha una biblioteca che apre presto. Il collega con cui collaboro conosce bene la zona."
      ],
      ["b1-imperativo", "Imperativo y pronombres", "📣", "Usa tu para instrucciones informales, Lei para cortesía, noi para propuestas y voi para varias personas.", [
        ["Tu regular", "-are: parla! · -ere/-ire: prendi! / dormi!", "Ascolta questa canzone!", "¡Escucha esta canción!"],
        ["Noi y voi", "parliamo! · parlate!", "Andiamo al mercato!", "¡Vamos al mercado!"],
        ["Cortesía", "Lei: parli / prenda / finisca", "Mi dica, dov’è la stazione?", "Dígame, ¿dónde está la estación?"],
        ["Pronombre enclítico", "afirmativo: dimmelo · negativo: non me lo dire", "Portamelo, per favore.", "Tráemelo, por favor."]
      ], [
        ["___ la porta, per favore. (aprire, tu)", ["Apri", "Apre", "Aprite"], 0, "El imperativo informal de aprire es apri."],
        ["Signora, ___ qui. (sedersi, Lei)", ["Si sieda", "Siediti", "Sedete"], 0, "La forma de cortesía usa el subjuntivo: si sieda."],
        ["Non ___ così in fretta! (parlare, tu)", ["parlare", "parla", "parli"], 0, "La negación con tu usa non + infinitivo."]
      ], [["ascolta!","¡escucha!"],["mi dica","dígame"],["gira a destra","gira a la derecha"],["attraversa la strada","cruza la calle"],["non preoccuparti","no te preocupes"],["per favore","por favor"]], "Scusi, mi dica dov’è la fermata. Poi giri a sinistra e attraversi la piazza."
      ]
    ]
  },
  {
    lvl: "B2",
    topics: [
      ["b2-congiuntivo-presente", "Congiuntivo presente", "💭", "El subjuntivo aparece en subordinadas tras opinión, duda, deseo, emoción y expresiones impersonales.", [
        ["-are", "parl-i, -i, -i, -iamo, -iate, -ino", "Penso che loro parlino italiano.", "Pienso que hablan italiano."],
        ["-ere / -ire", "prend-a, -a, -a, -iamo, -iate, -ano; dorm-a…", "È possibile che arrivi tardi.", "Es posible que llegue tarde."],
        ["Essere / avere", "sia · sia · sia · siamo · siate · siano / abbia…", "Credo che sia vero.", "Creo que es verdad."],
        ["Disparador", "penso/credo/temo che; è importante che", "È necessario che voi partiate.", "Es necesario que salgáis."]
      ], [
        ["Credo che Marco ___ ragione. (avere)", ["abbia", "ha", "avrà"], 0, "Credo che introduce subjuntivo: abbia."],
        ["È importante che tu ___ presto. (partire)", ["parta", "parti", "partirai"], 0, "La expresión de valoración exige subjuntivo."],
        ["Spero che loro ___ bene. (stare)", ["stiano", "stanno", "staranno"], 0, "Stare en subjuntivo: stiano."]
      ], [["penso che","pienso que"],["dubito che","dudo que"],["è necessario che","es necesario que"],["sembra che","parece que"],["benché","aunque"],["affinché","para que"]], "Sebbene il viaggio sia lungo, penso che ne valga la pena. È importante che tutti partecipino."
      ],
      ["b2-congiuntivo-passato-imperfetto", "Congiuntivo pasado e imperfecto", "⏳", "El congiuntivo passato combina subjuntivo de avere/essere y participio; el imperfecto se usa con una principal pasada o una hipótesis.", [
        ["Passato", "abbia / sia + participio", "Penso che Giulia sia partita.", "Pienso que Giulia se ha marchado."],
        ["Imperfetto regular", "-assi / -essi / -issi; noi -assimo…", "Credevo che fosse facile.", "Creía que era fácil."],
        ["Essere / avere", "fossi · fosse · fossimo / avessi · avesse…", "Non sapevo che avessero un cane.", "No sabía que tenían un perro."],
        ["Concordancia temporal", "principal pasada + che + congiuntivo imperfetto", "Pensavo che venissi.", "Pensaba que vendrías / venías."]
      ], [
        ["Credo che loro ___ già ___ . (partire)", ["siano partiti", "sono partiti", "fossero partiti"], 0, "Opinión actual sobre una acción pasada: congiuntivo passato."],
        ["Volevo che tu ___ con noi. (venire)", ["venissi", "vieni", "verrai"], 0, "Principal pasada de deseo: imperfecto de subjuntivo."],
        ["Benché ___ stanco, ha continuato. (essere)", ["fosse", "era", "sia"], 0, "En este contexto narrado en pasado se usa fosse."]
      ], [["credevo che","creía que"],["non sapevo che","no sabía que"],["sebbene","aunque"],["prima che","antes de que"],["avesse detto","hubiera dicho"],["fossero arrivati","hubieran llegado"]], "Non sapevo che avessero già prenotato. Pensavo che aspettassero la conferma prima di partire."
      ],
      ["b2-periodo-ipotetico", "Periodo ipotetico y condicional", "🌦️", "Distingue posibilidades reales, hipótesis improbables y situaciones irreales del pasado.", [
        ["Real", "se + presente, presente / futuro / imperativo", "Se piove, restiamo a casa.", "Si llueve, nos quedamos en casa."],
        ["Posible o hipotético", "se + congiuntivo imperfetto, condizionale presente", "Se avessi tempo, viaggerei.", "Si tuviera tiempo, viajaría."],
        ["Irreal pasado", "se + congiuntivo trapassato, condizionale passato", "Se avessi studiato, avrei superato l’esame.", "Si hubiera estudiado, habría aprobado el examen."],
        ["Sin se en la consecuencia", "condizionale per risultato ipotetico", "Sarei venuta, ma ero malata.", "Habría venido, pero estaba enferma."]
      ], [
        ["Se ___ bel tempo, andremo al lago. (fare)", ["farà", "facesse", "avrebbe fatto"], 0, "Hipótesis real: presente en la condición, futuro en el resultado."],
        ["Se fossi ricco, ___ il mondo. (girare)", ["girerei", "giro", "avrei girato"], 0, "Hipótesis posible: imperfecto de subjuntivo + condicional presente."],
        ["Se avessi saputo, ti ___ . (chiamare)", ["avrei chiamato", "chiamerei", "chiamo"], 0, "Irreal pasado: condizionale passato en el resultado."]
      ], [["se avessi tempo","si tuviera tiempo"],["nel caso in cui","en caso de que"],["a condizione che","a condición de que"],["altrimenti","si no / de lo contrario"],["avrei preferito","habría preferido"],["se solo","ojalá / si tan solo"]], "Se avessimo prenotato prima, avremmo trovato un prezzo migliore. Se viaggiassimo più spesso, conosceremmo meglio il paese."
      ],
      ["b2-passivo-si", "Pasiva, si passivante e si impersonale", "🔁", "El pasivo con essere concuerda con el sujeto; si passivante presenta cosas; si impersonale expresa una acción general.", [
        ["Pasiva con essere", "essere conjugado + participio concordado", "Il ponte è stato costruito nel 1920.", "El puente fue construido en 1920."],
        ["Pasiva con venire", "venire + participio en tiempos simples", "La domanda viene esaminata.", "La solicitud es examinada."],
        ["Si passivante", "si + verbo singular/plural según el nombre", "Qui si vendono libri usati.", "Aquí se venden libros usados."],
        ["Si impersonale", "si + verbo 3.ª singular", "In Italia si cena tardi.", "En Italia se cena tarde."]
      ], [
        ["Le lettere ___ ogni mattina. (spedire, passivo)", ["vengono spedite", "viene spedito", "spediscono"], 0, "Lettere es femenino plural: vengono spedite."],
        ["In questo ristorante ___ bene.", ["si mangia", "si mangiano", "mangia"], 0, "La construcción impersonal lleva verbo singular."],
        ["Qui ___ appartamenti. (affittare)", ["si affittano", "si affitta", "affittiamo"], 0, "Appartamenti es plural: si affittano."]
      ], [["essere stato costruito","haber sido construido"],["venire pubblicato","ser publicado"],["si dice che","se dice que"],["si affittano","se alquilan"],["da parte di","por parte de"],["il proprietario","el propietario"]], "In questa zona si affittano molte case. Gli edifici storici vengono restaurati con cura e sono visitati da migliaia di persone."
      ],
      ["b2-discorso-indiretto", "Discurso indirecto y concordancia", "🗣️", "Al pasar a estilo indirecto, ajusta pronombres, referencias temporales y tiempos verbales según el verbo introductorio.", [
        ["Declaración", "dice che + indicativo; ha detto che + desplazamiento", "Ha detto: «Sono stanco» → Ha detto che era stanco.", "Dijo: «Estoy cansado» → Dijo que estaba cansado."],
        ["Pregunta sí/no", "chiedere se + frase afirmativa", "Mi ha chiesto: «Vieni?» → se venivo.", "Me preguntó: «¿Vienes?» → si iba."],
        ["Orden o petición", "chiedere di + infinitivo", "Mi ha detto: «Aspetta» → di aspettare.", "Me dijo: «Espera» → que esperara."],
        ["Tiempo y espacio", "oggi → quel giorno; domani → il giorno dopo; qui → lì", "«Parto domani» → disse che sarebbe partito il giorno dopo.", "«Salgo mañana» → dijo que saldría al día siguiente."]
      ], [
        ["Ha detto: «Ho fame». → Ha detto che ___ fame.", ["aveva", "ha", "avrà"], 0, "Con verbo introductor en pasado se desplaza al imperfecto."],
        ["Mi ha chiesto: «Parti?» → Mi ha chiesto ___ partivo.", ["se", "che", "di"], 0, "La pregunta indirecta sí/no usa se."],
        ["Mi ha detto: «Apri la finestra». → Mi ha detto ___ la finestra.", ["di aprire", "che aprivo", "se aprire"], 0, "Una orden se transforma con di + infinitivo."]
      ], [["ha dichiarato che","declaró que"],["ha chiesto se","preguntó si"],["di conseguenza","por consiguiente"],["il giorno dopo","al día siguiente"],["secondo lui","según él"],["ha precisato che","aclaró que"]], "La direttrice ha spiegato che il progetto sarebbe iniziato il mese successivo e ha chiesto a tutti di partecipare."
      ],
      ["b2-gerundio", "Gerundio y construcciones temporales", "🧠", "El gerundio se forma con -ando o -endo y expresa simultaneidad, modo o causa; stare + gerundio enfatiza una acción en curso.", [
        ["Formación -are", "parlare → parlando", "Camminando, ho visto il mercato.", "Mientras caminaba, vi el mercado."],
        ["Formación -ere / -ire", "leggere → leggendo · dormire → dormendo", "Stava leggendo quando ho chiamato.", "Estaba leyendo cuando llamé."],
        ["Stare + gerundio", "stare conjugado + gerundio", "Stiamo lavorando al progetto.", "Estamos trabajando en el proyecto."],
        ["Mismo sujeto", "gerundio + oración principal", "Essendo stanco, è andato a letto.", "Como estaba cansado, se fue a dormir."]
      ], [
        ["Sto ___ una mail. (scrivere)", ["scrivendo", "scrivando", "scrivo"], 0, "Scrivere forma scrivendo."],
        ["___ per il centro, abbiamo incontrato Sara. (passeggiare)", ["Passeggiando", "Passeggiando", "Passeggiare"], 0, "El gerundio expresa simultaneidad."],
        ["Essendo ___, ha preso un taxi. (tardi)", ["tardi", "tardando", "tardato"], 0, "Tardi es un adverbio; la expresión es essendo tardi."]
      ], [["stare + gerundio","estar + gerundio"],["nel frattempo","mientras tanto"],["camminando","caminando"],["facendo attenzione","prestando atención"],["essendo stanco","estando cansado"],["continuando così","siendo así / continuando así"]], "Stiamo preparando una mostra. Lavorando insieme, abbiamo raccolto molte fotografie e, continuando così, finiremo entro venerdì."
      ],
      ["b2-connettivi", "Conectores y argumentación", "🔗", "Organiza argumentos con conectores de causa, consecuencia, contraste, concesión y reformulación.", [
        ["Causa", "poiché · siccome · dato che", "Poiché piove, resteremo in casa.", "Como llueve, nos quedaremos en casa."],
        ["Consecuencia", "quindi · pertanto · di conseguenza", "Il treno è in ritardo; quindi aspettiamo.", "El tren se retrasa; por tanto, esperamos."],
        ["Contraste / concesión", "tuttavia · invece · nonostante ciò", "È costoso; tuttavia, è di qualità.", "Es caro; sin embargo, es de calidad."],
        ["Ejemplificación", "per esempio · ad esempio · in particolare", "Molte città, per esempio Bologna, …", "Muchas ciudades, por ejemplo Bolonia, …"]
      ], [
        ["Il traffico è intenso; ___ arriveremo più tardi.", ["quindi", "benché", "perché"], 0, "Quindi introduce una consecuencia."],
        ["___ fosse stanco, ha continuato a lavorare.", ["Sebbene", "Quindi", "Infatti"], 0, "Sebbene introduce una concesión y va con subjuntivo."],
        ["Non è economico; ___ è molto resistente.", ["tuttavia", "perciò", "poiché"], 0, "Tuttavia marca contraste."]
      ], [["inoltre","además"],["tuttavia","sin embargo"],["di conseguenza","por consiguiente"],["nonostante ciò","a pesar de ello"],["in primo luogo","en primer lugar"],["in conclusione","en conclusión"]], "Il turismo crea opportunità economiche; tuttavia, può aumentare il costo degli affitti. Di conseguenza, occorrono politiche equilibrate."
      ]
    ]
  },
  {
    lvl: "C1",
    topics: [
      ["c1-congiuntivo-avanzato", "Subjuntivo avanzado y matices", "💡", "El subjuntivo también aparece en relativas de antecedente indefinido, superlativos y expresiones de opinión matizada.", [
        ["Relativa indefinida", "cerco qualcuno che + congiuntivo", "Cerco qualcuno che sappia ascoltare.", "Busco a alguien que sepa escuchar."],
        ["Superlativo", "è il più … che + congiuntivo", "È il testo più chiaro che abbia letto.", "Es el texto más claro que he leído."],
        ["Opinión negativa / duda", "non credo / dubito che + congiuntivo", "Non credo che sia sufficiente.", "No creo que sea suficiente."],
        ["Indicativo o subjuntivo", "certezza → indicativo; valutazione / dubbio → subjuntivo", "È certo che parte; è possibile che parta.", "Es seguro que sale; es posible que salga."]
      ], [
        ["Cerco un collaboratore che ___ tre lingue. (parlare)", ["parli", "parla", "parlerà"], 0, "Ante un referente buscado e indefinido se usa subjuntivo."],
        ["È il miglior romanzo che io ___ quest'anno. (leggere)", ["abbia letto", "ho letto", "leggerò"], 0, "El superlativo suele introducir subjuntivo en la relativa."],
        ["Sono sicuro che lei ___ domani. (venire)", ["verrà", "venga", "venisse"], 0, "La certeza afirmativa suele llevar indicativo."]
      ], [["non è detto che","no está dicho que"],["per quanto ne so","por lo que sé"],["a meno che","a menos que"],["qualunque cosa","cualquier cosa"],["nonostante","a pesar de"],["è plausibile che","es plausible que"]], "Non è detto che la soluzione più rapida sia anche la migliore. Cerchiamo un approccio che tenga conto di tutte le variabili."
      ],
      ["c1-periodo-ipotetico", "Hipótesis complejas y matices modales", "🌫️", "Combina los tiempos del periodo hipotético con atenuadores, condiciones implícitas e hipótesis mixtas.", [
        ["Irreal pasado", "se + congiuntivo trapassato + condizionale passato", "Se avessi saputo, sarei intervenuto.", "Si lo hubiera sabido, habría intervenido."],
        ["Hipótesis mixta", "condición pasada + consecuencia presente", "Se avessi accettato, ora lavorerei lì.", "Si hubiera aceptado, ahora trabajaría allí."],
        ["Condición atenuada", "qualora / purché / a condizione che + subjuntivo", "Qualora fosse necessario, interverremmo.", "En caso de que fuera necesario, intervendríamos."],
        ["Consecuencia implícita", "condizionale sin se explícito", "Senza il tuo aiuto, non ce l’avrei fatta.", "Sin tu ayuda, no lo habría conseguido."]
      ], [
        ["Se me lo ___ prima, avrei potuto aiutarti. (dire, tu)", ["avessi detto", "dicevi", "avresti detto"], 0, "La condición irreal pasada emplea trapassato del subjuntivo."],
        ["Qualora ___ altri dubbi, contattateci. (avere)", ["aveste", "avete", "avreste"], 0, "Qualora exige subjuntivo."],
        ["Se avessi scelto medicina, ora ___ in ospedale. (lavorare)", ["lavorerei", "avrei lavorato", "lavoro"], 0, "La condición pasada puede tener consecuencia presente."]
      ], [["qualora","en caso de que"],["purché","con tal de que"],["a condizione che","a condición de que"],["se non fosse per","si no fuera por"],["avrei potuto","habría podido"],["senza il quale","sin el cual"]], "Qualora la proposta fosse stata presentata prima, il comitato avrebbe potuto valutarla. Senza quei dati, oggi non sapremmo quale decisione prendere."
      ],
      ["c1-passato-remoto", "Passato remoto y narrativa", "📚", "El passato remoto narra hechos concluidos y secuencias históricas; es común en textos literarios y en algunas regiones.", [
        ["-are", "parlai · parlasti · parlò · parlammo · parlaste · parlarono", "Nel 1861 nacque il Regno d’Italia.", "En 1861 nació el Reino de Italia."],
        ["-ere", "credei/credetti · credesti · credé/credette…", "Dante scrisse la Divina Commedia.", "Dante escribió la Divina Comedia."],
        ["-ire", "partii · partisti · partì · partimmo · partiste · partirono", "Partirono all’alba.", "Salieron al amanecer."],
        ["Irregulares frecuentes", "essere: fui; avere: ebbi; fare: feci; dire: dissi", "Fu un periodo decisivo.", "Fue un periodo decisivo."]
      ], [
        ["Dante ___ la Divina Commedia. (scrivere)", ["scrisse", "scriveva", "ha scritto"], 0, "En el relato histórico o literario aparece passato remoto."],
        ["Nel 1492 Colombo ___ in America. (arrivare)", ["arrivò", "arrivava", "è arrivato"], 0, "Arrivare en passato remoto: arrivò."],
        ["Loro ___ la verità. (dire)", ["dissero", "dicevano", "hanno detto"], 0, "Dire es irregular: dissero."]
      ], [["nel corso dei secoli","a lo largo de los siglos"],["all’alba","al amanecer"],["in seguito","posteriormente"],["ebbe inizio","tuvo comienzo"],["si recò","se dirigió"],["tramandare","transmitir"]], "Nel 1861 nacque il Regno d’Italia. Negli anni successivi il paese cambiò profondamente e milioni di persone emigrarono."
      ],
      ["c1-passivo-nominalizzazione", "Pasiva, nominalización y estilo formal", "🏛️", "El registro académico y administrativo nominaliza procesos y alterna estructuras pasivas para destacar el resultado o el procedimiento.", [
        ["Nominalización", "decidere → decisione; sviluppare → sviluppo", "La decisione è stata rinviata.", "La decisión se ha aplazado."],
        ["Pasiva formal", "venire / essere + participio; concordancia", "I risultati verranno pubblicati.", "Los resultados serán publicados."],
        ["Si impersonale formal", "si ritiene / si osserva / si propone", "Si ritiene opportuno intervenire.", "Se considera oportuno intervenir."],
        ["Agente", "da + persona / ente cuando es relevante", "La ricerca è stata condotta dall’università.", "La investigación fue realizada por la universidad."]
      ], [
        ["La proposta ___ esaminata dal comitato. (venire, futuro)", ["verrà", "sarà", "viene"], 0, "Venire en futuro + participio da un pasivo dinámico."],
        ["Si ___ necessario un ulteriore controllo.", ["ritiene", "ritengono", "riteneva"], 0, "Si impersonale: si ritiene."],
        ["La ___ del progetto richiede tempo. (realizzare)", ["realizzazione", "realizzare", "realizzato"], 0, "El nombre correspondiente es realizzazione."]
      ], [["si ritiene opportuno","se considera oportuno"],["la realizzazione","la realización"],["la valutazione","la evaluación"],["in riferimento a","en referencia a"],["da parte dell’ente","por parte de la entidad"],["si rende necessario","se hace necesario"]], "Si ritiene opportuno avviare una valutazione indipendente. La realizzazione del progetto verrà affidata a un gruppo di ricerca."
      ],
      ["c1-enfasi-ordine", "Énfasis, dislocación y orden marcado", "✨", "La dislocación coloca un elemento temático al margen y lo retoma con un pronombre para organizar la información.", [
        ["Dislocación a la izquierda", "tema + pronombre clítico", "Questo libro, l’ho già letto.", "Este libro, ya lo he leído."],
        ["Dislocación a la derecha", "frase + pronombre + tema final", "Lo conosco bene, quel quartiere.", "Conozco bien ese barrio."],
        ["Frase escindida", "è… che / chi… è…", "È a Roma che ci siamo incontrati.", "Fue en Roma donde nos conocimos."],
        ["Orden informativo", "tema conocido primero; información nueva después", "Quanto alla proposta, la discuteremo domani.", "En cuanto a la propuesta, la discutiremos mañana."]
      ], [
        ["Questo problema, non ___ avevo considerato.", ["l’", "lo", "gli"], 0, "Problema empieza por vocal: l’ho / non l’avevo."],
        ["È proprio lei ___ ha suggerito la soluzione.", ["che", "cui", "dove"], 0, "La frase escindida italiana usa è… che."],
        ["Quanto ___ risultati, saranno pubblicati lunedì.", ["ai", "di", "da"], 0, "Quanto ai risultati equivale a en cuanto a los resultados."]
      ], [["quanto a","en cuanto a"],["proprio","precisamente"],["è a questo punto che","es en este punto cuando"],["per quanto riguarda","en lo que respecta a"],["non è questo il punto","no es ese el asunto"],["ciò che conta","lo que importa"]], "Quanto alla proposta, la considero valida. È soprattutto la fase di attuazione che richiederà attenzione."
      ],
      ["c1-connettivi-registro", "Conectores avanzados y registro", "🔗", "Elige conectores precisos y adecuados al registro: la cohesión depende de la relación lógica entre las ideas.", [
        ["Adición", "peraltro · inoltre · altresì", "Il metodo è efficace; peraltro, è economico.", "El método es eficaz; además, es económico."],
        ["Concesión", "ciò nonostante · nondimeno · sebbene", "Nondimeno, restano alcune criticità.", "No obstante, quedan algunas dificultades."],
        ["Reformulación", "ossia · vale a dire · in altri termini", "Si tratta di una stima, ossia di un valore indicativo.", "Se trata de una estimación, es decir, un valor orientativo."],
        ["Conclusión", "in definitiva · alla luce di ciò · ne consegue che", "Alla luce di ciò, proponiamo una revisione.", "A la luz de ello, proponemos una revisión."]
      ], [
        ["Il campione è limitato; ___, i risultati sono indicativi.", ["pertanto", "sebbene", "inoltre"], 0, "Pertanto presenta una consecuencia."],
        ["___ le difficoltà, il progetto è stato completato.", ["Nonostante", "Pertanto", "Ossia"], 0, "Nonostante introduce una concesión."],
        ["La procedura, ___ il protocollo, sarà aggiornata.", ["ossia", "nondimeno", "peraltro"], 0, "Ossia reformula o aclara."]
      ], [["nondimeno","no obstante"],["peraltro","por lo demás"],["alla luce di","a la luz de"],["in altri termini","en otros términos"],["ne consegue che","de ello se deduce que"],["in definitiva","en definitiva"]], "I dati disponibili sono parziali; nondimeno, consentono una prima valutazione. Alla luce di ciò, si propone di ampliare il campione."
      ],
      ["c1-collocazioni", "Colocaciones, precisión y falsos amigos", "🎓", "Aprende combinaciones frecuentes y evita calcos del español: colocación y contexto determinan una expresión natural.", [
        ["Dar una opinión", "esprimere un’opinione (no fare un’opinione)", "Vorrei esprimere un parere.", "Quisiera expresar una opinión."],
        ["Tomar una decisión", "prendere una decisione", "Il consiglio prenderà una decisione.", "El consejo tomará una decisión."],
        ["Darse cuenta", "rendersi conto di", "Mi sono reso conto dell’errore.", "Me di cuenta del error."],
        ["Falsos amigos", "camera = habitación; libreria = estantería / librería", "La camera è accanto alla libreria.", "La habitación está junto a la estantería."]
      ], [
        ["Dobbiamo ___ una decisione entro oggi.", ["prendere", "fare", "dare"], 0, "La colocación natural es prendere una decisione."],
        ["Si è ___ conto del problema.", ["reso", "fatto", "dato"], 0, "La expresión es rendersi conto."],
        ["La mia ___ è al terzo piano. (habitación)", ["camera", "libreria", "fabbrica"], 0, "Camera significa habitación."]
      ], [["prendere una decisione","tomar una decisión"],["esprimere un parere","expresar una opinión"],["rendersi conto","darse cuenta"],["prestare attenzione","prestar atención"],["camera","habitación"],["libreria","estantería / librería"]], "Dopo aver esaminato i dati, il gruppo si è reso conto della necessità di rivedere la proposta prima di prendere una decisione."
      ],
      ["c1-testi-argomentativi", "Textos académicos y argumentación", "📝", "Construye una tesis, presenta evidencia, matiza afirmaciones y responde a objeciones con un registro formal.", [
        ["Tesis", "sostenere / avanzare l’ipotesi che", "Si sostiene che il modello debba essere aggiornato.", "Se sostiene que el modelo debe actualizarse."],
        ["Evidencia", "i dati suggeriscono / emerge dall’analisi", "Dall’analisi emerge una tendenza.", "Del análisis se desprende una tendencia."],
        ["Matización", "in una certa misura · non necessariamente", "Il risultato è, in una certa misura, inatteso.", "El resultado es, en cierta medida, inesperado."],
        ["Objeción y respuesta", "sebbene · tuttavia · ciò non implica che", "Sebbene il campione sia ridotto, …", "Aunque la muestra sea pequeña, …"]
      ], [
        ["I dati ___ una correlazione, ma non dimostrano causalità.", ["suggeriscono", "ordinano", "impongono"], 0, "Suggeriscono es un verbo adecuado para evidencias prudentes."],
        ["___ il campione sia limitato, i risultati sono utili.", ["Sebbene", "Pertanto", "Infatti"], 0, "Sebbene introduce concesión con subjuntivo."],
        ["Ciò non ___ che il fenomeno sia irrilevante.", ["implica", "implicano", "implicando"], 0, "La expresión impersonal correcta es ciò non implica che."]
      ], [["i dati suggeriscono","los datos sugieren"],["emerge dall’analisi","se desprende del análisis"],["in una certa misura","en cierta medida"],["ciò non implica che","ello no implica que"],["alla luce dei risultati","a la luz de los resultados"],["si può ipotizzare","se puede plantear como hipótesis"]], "Alla luce dei risultati, si può ipotizzare una relazione tra i due fattori. Ciò non implica, tuttavia, che uno causi necessariamente l’altro."
      ]
    ]
  }
];

const vocabularyCourses = [
  ["A2", [
    ["a2-vita", "Rutinas y vida cotidiana", "⏰", [["svegliarsi","despertarse"],["fare colazione","desayunar"],["vestirsi","vestirse"],["andare al lavoro","ir al trabajo"],["pranzare","almorzar"],["fare la spesa","hacer la compra"],["tornare a casa","volver a casa"],["cucinare","cocinar"],["riposarsi","descansar"],["andare a letto","acostarse"],["il mattino","la mañana"],["il pomeriggio","la tarde"]]],
    ["a2-casa", "La casa y el alojamiento", "🏠", [["la cucina","la cocina"],["il soggiorno","el salón"],["la camera da letto","el dormitorio"],["il bagno","el baño"],["il balcone","el balcón"],["la finestra","la ventana"],["la porta","la puerta"],["il letto","la cama"],["l’armadio","el armario"],["l’affitto","el alquiler"],["il piano","la planta"],["il quartiere","el barrio"]]],
    ["a2-cibo", "Comida, mercado y restaurante", "🍝", [["il pane","el pan"],["il formaggio","el queso"],["la verdura","la verdura"],["la frutta","la fruta"],["il pomodoro","el tomate"],["l’acqua","el agua"],["il conto","la cuenta"],["il menù","el menú"],["ordinare","pedir"],["il cameriere","el camarero"],["il mercato","el mercado"],["senza glutine","sin gluten"]]],
    ["a2-citta", "Ciudad, direcciones y transporte", "🚆", [["la stazione","la estación"],["la fermata","la parada"],["l’autobus","el autobús"],["il biglietto","el billete"],["la piazza","la plaza"],["la strada","la calle"],["a destra","a la derecha"],["a sinistra","a la izquierda"],["dritto","todo recto"],["il museo","el museo"],["la farmacia","la farmacia"],["scendere","bajarse"]]],
    ["a2-salute", "Salud, cuerpo y ocio", "❤️", [["la testa","la cabeza"],["la schiena","la espalda"],["la febbre","la fiebre"],["il medico","el médico"],["la farmacia","la farmacia"],["avere mal di testa","tener dolor de cabeza"],["fare una passeggiata","dar un paseo"],["nuotare","nadar"],["leggere","leer"],["il fine settimana","el fin de semana"],["riposare","descansar"],["la ricetta","la receta"]]]
  ]],
  ["B1", [
    ["b1-viaggi", "Viajes y experiencias", "🧳", [["prenotare","reservar"],["il soggiorno","la estancia"],["la coincidenza","el transbordo"],["il binario","la vía"],["il bagaglio","el equipaje"],["il ritardo","el retraso"],["il paesaggio","el paisaje"],["la guida","la guía"],["perdersi","perderse"],["fare una gita","hacer una excursión"],["il campeggio","el camping"],["il rimborso","el reembolso"]]],
    ["b1-lavoro", "Trabajo y estudios", "💼", [["il colloquio","la entrevista"],["il curriculum","el currículum"],["il tirocinio","las prácticas"],["il contratto","el contrato"],["il collega","el compañero"],["la scadenza","la fecha límite"],["la riunione","la reunión"],["candidarsi","presentar candidatura"],["la laurea","la carrera universitaria"],["la borsa di studio","la beca"],["consegnare","entregar"],["il responsabile","el responsable"]]],
    ["b1-relazioni", "Relaciones y emociones", "🤝", [["fidarsi di","fiarse de"],["andare d’accordo","llevarse bien"],["litigare","discutir"],["chiedere scusa","pedir perdón"],["essere deluso","estar decepcionado"],["la nostalgia","la nostalgia"],["avere paura","tener miedo"],["sostenere","apoyar"],["il consiglio","el consejo"],["la scelta","la elección"],["la fiducia","la confianza"],["sentirsi a proprio agio","sentirse a gusto"]]],
    ["b1-media", "Medios y comunicación", "📱", [["la notizia","la noticia"],["il giornale","el periódico"],["l’articolo","el artículo"],["la fonte","la fuente"],["il titolo","el titular"],["la pubblicità","la publicidad"],["condividere","compartir"],["il commento","el comentario"],["la rete","la red"],["il programma","el programa"],["l’intervista","la entrevista"],["verificare","verificar"]]],
    ["b1-ambiente", "Medioambiente y hábitos sostenibles", "🌱", [["la raccolta differenziata","la recogida selectiva"],["riciclare","reciclar"],["il risparmio energetico","el ahorro energético"],["la bicicletta","la bicicleta"],["il trasporto pubblico","el transporte público"],["ridurre","reducir"],["riutilizzare","reutilizar"],["l’inquinamento","la contaminación"],["la siccità","la sequía"],["la biodiversità","la biodiversidad"],["il consumo","el consumo"],["sostenibile","sostenible"]]]
  ]],
  ["B2", [
    ["b2-economia", "Economía, consumo y trabajo", "📈", [["il potere d’acquisto","el poder adquisitivo"],["il bilancio","el presupuesto"],["il rincaro","la subida de precios"],["il risparmio","el ahorro"],["la disuguaglianza","la desigualdad"],["il mercato del lavoro","el mercado laboral"],["la produttività","la productividad"],["l’imprenditore","el empresario"],["la retribuzione","la remuneración"],["investire","invertir"],["il rendimento","el rendimiento"],["la crescita","el crecimiento"]]],
    ["b2-societa", "Sociedad, ciudadanía y derechos", "⚖️", [["la cittadinanza","la ciudadanía"],["il diritto fondamentale","el derecho fundamental"],["l’uguaglianza","la igualdad"],["la partecipazione","la participación"],["la comunità","la comunidad"],["il volontariato","el voluntariado"],["la tutela","la protección"],["la responsabilità","la responsabilidad"],["la discriminazione","la discriminación"],["il provvedimento","la medida"],["la normativa","la normativa"],["il dibattito pubblico","el debate público"]]],
    ["b2-scienza", "Ciencia, tecnología y salud", "🔬", [["la ricerca","la investigación"],["lo studio clinico","el estudio clínico"],["i dati personali","los datos personales"],["l’intelligenza artificiale","la inteligencia artificial"],["l’algoritmo","el algoritmo"],["la sperimentazione","la experimentación"],["la diagnosi","el diagnóstico"],["il trattamento","el tratamiento"],["la privacy","la privacidad"],["il progresso","el progreso"],["l’affidabilità","la fiabilidad"],["il rischio","el riesgo"]]],
    ["b2-cultura", "Cultura, arte y opinión", "🎭", [["il patrimonio","el patrimonio"],["la mostra","la exposición"],["la recensione","la reseña"],["il regista","el director"],["l’opera","la obra"],["la sceneggiatura","el guion"],["la controversia","la controversia"],["il punto di vista","el punto de vista"],["convincente","convincente"],["approfondire","profundizar"],["il pubblico","el público"],["la critica","la crítica"]]],
    ["b2-ambiente", "Ecología, energía y ciudad", "♻️", [["le emissioni","las emisiones"],["l’energia rinnovabile","la energía renovable"],["l’economia circolare","la economía circular"],["l’area urbana","la zona urbana"],["la rete ferroviaria","la red ferroviaria"],["l’ondata di calore","la ola de calor"],["la gestione dei rifiuti","la gestión de residuos"],["la mobilità","la movilidad"],["la transizione","la transición"],["la risorsa","el recurso"],["l’impatto","el impacto"],["il quartiere sostenibile","el barrio sostenible"]]]
  ]],
  ["C1", [
    ["c1-ricerca", "Investigación y lenguaje académico", "🔬", [["il quadro teorico","el marco teórico"],["l’ipotesi di ricerca","la hipótesis de investigación"],["il campione rappresentativo","la muestra representativa"],["la metodologia","la metodología"],["la variabile","la variable"],["i risultati preliminari","los resultados preliminares"],["il margine d’errore","el margen de error"],["la revisione paritaria","la revisión por pares"],["il nesso causale","la relación causal"],["la ricerca longitudinale","la investigación longitudinal"],["la validità","la validez"],["il contributo originale","la aportación original"]]],
    ["c1-istituzioni", "Instituciones, derecho y gobernanza", "🏛️", [["l’organo decisionale","el órgano decisorio"],["il quadro normativo","el marco normativo"],["la disposizione legislativa","la disposición legislativa"],["l’accordo multilaterale","el acuerdo multilateral"],["la responsabilità pubblica","la rendición de cuentas"],["il meccanismo di controllo","el mecanismo de control"],["la giurisdizione","la jurisdicción"],["la misura vincolante","la medida vinculante"],["il ricorso","el recurso"],["la consultazione","la consulta"],["l’ente regolatore","el organismo regulador"],["la competenza","la competencia"]]],
    ["c1-economia", "Economía global y transformaciones", "🌐", [["lo squilibrio strutturale","el desequilibrio estructural"],["la redistribuzione della ricchezza","la redistribución de la riqueza"],["la precarizzazione","la precarización"],["la catena del valore","la cadena de valor"],["la riconversione industriale","la reconversión industrial"],["la leva di crescita","la palanca de crecimiento"],["la trasformazione settoriale","la transformación sectorial"],["la politica di bilancio","la política presupuestaria"],["il gettito fiscale","la recaudación fiscal"],["la stagnazione","el estancamiento"],["la concorrenza","la competencia"],["la sostenibilità finanziaria","la sostenibilidad financiera"]]],
    ["c1-tecnologia", "Tecnología, datos y ética", "🤖", [["il sistema decisionale automatizzato","el sistema automatizado de decisión"],["la sovranità digitale","la soberanía digital"],["l’infrastruttura dei dati","la infraestructura de datos"],["il principio di precauzione","el principio de precaución"],["la tracciabilità","la trazabilidad"],["l’uso improprio","el uso indebido"],["la svolta tecnologica","el avance disruptivo"],["la regolamentazione","la regulación"],["la vulnerabilità","la vulnerabilidad"],["la distorsione algoritmica","el sesgo algorítmico"],["l’interoperabilità","la interoperabilidad"],["la tutela della privacy","la protección de la privacidad"]]],
    ["c1-cultura", "Patrimonio, crítica y estética", "🎨", [["l’opera emblematica","la obra emblemática"],["la scelta estetica","la elección estética"],["la ricezione critica","la recepción crítica"],["la messa in scena","la puesta en escena"],["la memoria collettiva","la memoria colectiva"],["lo sguardo retrospettivo","la mirada retrospectiva"],["l’approccio innovativo","el enfoque innovador"],["segnare un’epoca","marcar una época"],["la conservazione","la conservación"],["il restauro","la restauración"],["il linguaggio visivo","el lenguaje visual"],["il valore simbolico","el valor simbólico"]]],
    ["c1-argomentazione", "Argumentación formal y matices", "🗣️", [["a ben vedere","bien mirado"],["è innegabile che","es innegable que"],["ciò premesso","dicho esto"],["alla luce di","a la luz de"],["in quest’ottica","desde esta perspectiva"],["ciononostante","no obstante"],["va sottolineato che","cabe subrayar que"],["in ultima analisi","en último término"],["suffragare un’ipotesi","respaldar una hipótesis"],["prendere le distanze","distanciarse"],["un punto controverso","un punto controvertido"],["senza pregiudicare","sin perjuicio de"]]]
  ]]
];

const grammarVocabularyExpansions = {
  "a2-articoli": [["il direttore","el director"],["la direttrice","la directora"],["lo psicologo","el psicólogo"],["l’infermiera","la enfermera"],["gli alberi","los árboles"],["le isole","las islas"]],
  "a2-presente": [["frequentare","asistir habitualmente"],["disegnare","dibujar"],["ascoltare","escuchar"],["rispondere","responder"],["costruire","construir"],["spedire","enviar"]],
  "a2-essere-avere": [["essere stanco","estar cansado"],["avere fretta","tener prisa"],["avere bisogno di","necesitar"],["essere in ritardo","llegar tarde"],["avere ragione","tener razón"],["essere d’accordo","estar de acuerdo"]],
  "a2-preposizioni": [["sul tavolo","sobre la mesa"],["dalla finestra","desde la ventana"],["verso il centro","hacia el centro"],["attraverso il parco","a través del parque"],["accanto alla scuola","al lado de la escuela"],["fuori dalla città","fuera de la ciudad"]],
  "a2-passato-prossimo": [["stamattina","esta mañana"],["due giorni fa","hace dos días"],["appena arrivato","recién llegado"],["avere scelto","haber elegido"],["essere rimasti","haberse quedado"],["non ancora","todavía no"]],
  "a2-riflessivi": [["pettinarsi","peinarse"],["truccarsi","maquillarse"],["rilassarsi","relajarse"],["sedersi","sentarse"],["mettersi il cappotto","ponerse el abrigo"],["prepararsi in fretta","prepararse deprisa"]],
  "a2-pronomi-diretti": [["comprare le mele → comprarle","comprar las manzanas → comprarlas"],["incontrare Paolo → incontrarlo","encontrar a Paolo → encontrarlo"],["vedere la mostra → vederla","ver la exposición → verla"],["chiamare gli amici → chiamarli","llamar a los amigos → llamarlos"],["ascoltare la canzone → ascoltarla","escuchar la canción → escucharla"],["portare i documenti → portarli","llevar los documentos → llevarlos"]],
  "a2-comparativi": [["più conveniente","más económico"],["meno rumoroso","menos ruidoso"],["il migliore","el mejor"],["la peggiore","la peor"],["tanto… quanto","tanto… como"],["piacere moltissimo","gustar muchísimo"]],
  "b1-imperfetto": [["da ragazzo","de adolescente"],["durante l’infanzia","durante la infancia"],["mentre pioveva","mientras llovía"],["essere nuvoloso","estar nublado"],["avere l’abitudine di","tener la costumbre de"],["a quell’epoca","en aquella época"]],
  "b1-imperfetto-passato": [["poco più tardi","poco más tarde"],["nel frattempo","mientras tanto"],["proprio quando","justo cuando"],["interrompere","interrumpir"],["succedere","suceder"],["durante il viaggio","durante el viaje"]],
  "b1-futuro": [["prevedere","prever"],["la prossima estate","el próximo verano"],["entro domani","para mañana"],["sarà già partito","ya habrá salido"],["probabilmente","probablemente"],["avere intenzione di","tener intención de"]],
  "b1-condizionale": [["potresti aiutarmi?","¿podrías ayudarme?"],["vorrei prenotare","quisiera reservar"],["al tuo posto","en tu lugar"],["sarebbe meglio","sería mejor"],["mi farebbe piacere","me agradaría"],["avresti dovuto","deberías haber"]],
  "b1-pronomi-indiretti": [["telefonarle","llamarla (a ella)"],["scrivergli","escribirle (a él)"],["me lo presti?","¿me lo prestas?"],["gliel’ho detto","se lo he dicho"],["raccontare a qualcuno","contarle a alguien"],["regalare ai nonni","regalar a los abuelos"]],
  "b1-ci-ne": [["crederci","creer en ello"],["riuscirci","conseguirlo"],["andarsene","irse de allí"],["volerne due","querer dos de ellos"],["parlarne spesso","hablar de ello a menudo"],["metterci un’ora","tardar una hora"]],
  "b1-relativi": [["la persona che","la persona que"],["il motivo per cui","el motivo por el que"],["la città in cui","la ciudad en la que"],["colui che","aquel que"],["il giorno quando","el día en que"],["la collega con cui","la compañera con la que"]],
  "b1-imperativo": [["aspetta un momento!","¡espera un momento!"],["non preoccuparti!","¡no te preocupes!"],["si accomodi, prego","acomódese, por favor"],["dammi una mano","échame una mano"],["portatelo dietro","lleváoslo"],["non uscire!","¡no salgas!"]],
  "b2-congiuntivo-presente": [["è probabile che","es probable que"],["benché sia tardi","aunque sea tarde"],["mi auguro che","espero que"],["a condizione che","a condición de que"],["ritengo indispensabile che","considero imprescindible que"],["nonostante abbiano ragione","aunque tengan razón"]],
  "b2-congiuntivo-passato-imperfetto": [["credevo che fosse","creía que era"],["pensavo avessero capito","pensaba que habían entendido"],["se fossi in te","si estuviera en tu lugar"],["avrei preferito che","habría preferido que"],["prima che arrivassero","antes de que llegaran"],["mi sembrava che","me parecía que"]],
  "b2-periodo-ipotetico": [["se piove, restiamo","si llueve, nos quedamos"],["nell’ipotesi che ci fosse tempo","en la hipótesis de que hubiera tiempo"],["se avessi studiato","si hubiera estudiado"],["purché partecipino","con tal de que participen"],["a meno che non","a menos que"],["a patto che il piano funzioni","con tal de que el plan funcione"]],
  "b2-passivo-si": [["il ponte è stato costruito","el puente fue construido"],["si vendono appartamenti","se venden apartamentos"],["si lavora meglio","se trabaja mejor"],["viene approvata la legge","se aprueba la ley"],["essere considerato","ser considerado"],["da parte del comune","por parte del ayuntamiento"]],
  "b2-discorso-indiretto": [["ha riferito che","comunicó que"],["il giorno seguente","al día siguiente"],["mi ha chiesto se","me preguntó si"],["aveva già visto","ya había visto"],["secondo la testimone","según la testigo"],["disse di aspettare","dijo que esperara"]],
  "b2-gerundio": [["proseguendo il lavoro","continuando el trabajo"],["avendo finito","habiendo terminado"],["pur sapendo","aun sabiendo"],["continuare a lavorare","seguir trabajando"],["stando attento","estando atento"],["prima di uscire","antes de salir"]],
  "b2-connettivi": [["per contro","por el contrario"],["ciononostante","a pesar de ello"],["sul piano argomentativo","en el plano argumentativo"],["a differenza di","a diferencia de"],["di riflesso","por consiguiente"],["detto ciò","dicho esto"]],
  "c1-congiuntivo-avanzato": [["qualunque cosa accada","pase lo que pase"],["per quanto ne sappia","por lo que sé"],["non è che manchi","no es que falte"],["ovunque si trovi","dondequiera que esté"],["come se nulla fosse","como si nada ocurriera"],["checché se ne dica","digan lo que digan"]],
  "c1-periodo-ipotetico": [["se avessi previsto","si lo hubiera previsto"],["qualora fosse necessario","si fuera necesario"],["se non fosse stato per","si no hubiera sido por"],["avrei potuto evitare","habría podido evitar"],["a patto che avesse accettato","con tal de que hubiera aceptado"],["senza che se ne accorgesse","sin que se diera cuenta"]],
  "c1-passato-remoto": [["si verificò","se produjo"],["ebbe luogo","tuvo lugar"],["sorse","surgió"],["si concluse","concluyó"],["fu fondato","fue fundado"],["nel secolo precedente","en el siglo anterior"]],
  "c1-passivo-nominalizzazione": [["la messa in opera","la puesta en marcha"],["l’approvazione","la aprobación"],["venne nominato","fue nombrado"],["si reputa necessario","se considera necesario"],["in fase di attuazione","en fase de aplicación"],["il mancato rispetto","el incumplimiento"]],
  "c1-enfasi-ordine": [["quanto a me","en cuanto a mí"],["è proprio qui che","es precisamente aquí donde"],["di questo si tratta","de esto se trata"],["il libro, l’ho già letto","el libro, ya lo he leído"],["non è tanto… quanto","no es tanto… como"],["a colpirmi è stato","lo que me sorprendió fue"]],
  "c1-connettivi-registro": [["ciò nonostante","a pesar de ello"],["laddove","mientras que"],["segnatamente","en particular"],["in via preliminare","de manera preliminar"],["per converso","por el contrario"],["alla luce di quanto esposto","a la luz de lo expuesto"]],
  "c1-collocazioni": [["nutrire un dubbio","albergar una duda"],["sollevare una questione","plantear una cuestión"],["assumersi la responsabilità","asumir la responsabilidad"],["esercitare un’influenza","ejercer influencia"],["porre rimedio","poner remedio"],["risultare evidente","resultar evidente"]],
  "c1-testi-argomentativi": [["confutare un’obiezione","refutar una objeción"],["formulare una tesi","formular una tesis"],["avvalorare una tesi","respaldar una tesis"],["un campione significativo","una muestra significativa"],["i limiti dell’indagine","los límites de la investigación"],["in termini generali","en términos generales"]]
};

const vocabularyTopicExpansions = {
  "a2-vita": [["il risveglio","el despertar"],["fare una doccia","ducharse"],["spazzolarsi i denti","cepillarse los dientes"],["il tragitto","el trayecto"],["l’orario","el horario"],["apparecchiare","poner la mesa"],["sparecchiare","quitar la mesa"],["la pausa pranzo","la pausa del almuerzo"],["fare commissioni","hacer recados"],["il riposino","la siesta"],["la sveglia","el despertador"],["il giorno feriale","el día laborable"]],
  "a2-casa": [["il corridoio","el pasillo"],["la sala da pranzo","el comedor"],["il comodino","la mesilla"],["la coperta","la manta"],["lo scaffale","la estantería"],["il cassetto","el cajón"],["il lavandino","el lavabo"],["la doccia","la ducha"],["il citofono","el telefonillo"],["il trasloco","la mudanza"],["il proprietario","el propietario"],["le spese condominiali","los gastos de comunidad"]],
  "a2-cibo": [["l’olio d’oliva","el aceite de oliva"],["l’aceto","el vinagre"],["il riso","el arroz"],["la farina","la harina"],["il cucchiaio","la cuchara"],["la forchetta","el tenedor"],["il piatto del giorno","el plato del día"],["la mancia","la propina"],["il frigorifero","el frigorífico"],["la padella","la sartén"],["senza lattosio","sin lactosa"],["il dessert","el postre"]],
  "a2-citta": [["il marciapiede","la acera"],["il semaforo","el semáforo"],["l’incrocio","el cruce"],["la rotonda","la rotonda"],["la metropolitana","el metro"],["la corsia","el carril"],["la linea urbana","la línea urbana"],["la biglietteria","la taquilla"],["il municipio","el ayuntamiento"],["il quartiere storico","el casco antiguo"],["il passaggio pedonale","el paso de peatones"],["la mappa della città","el mapa de la ciudad"]],
  "a2-salute": [["la gola","la garganta"],["il raffreddore","el resfriado"],["la tosse","la tos"],["la visita medica","la consulta médica"],["il cerotto","la tirita"],["la compressa","la pastilla"],["il parco giochi","el parque infantil"],["andare in bicicletta","ir en bicicleta"],["fare jogging","salir a correr"],["la piscina","la piscina"],["il riposo","el descanso"],["il pronto soccorso","urgencias"]],
  "b1-viaggi": [["l’itinerario","el itinerario"],["la carta d’imbarco","la tarjeta de embarque"],["il check-in","la facturación"],["il binario di partenza","la vía de salida"],["il noleggio auto","el alquiler de coche"],["il passaporto","el pasaporte"],["la pensione completa","la pensión completa"],["il sentiero","el sendero"],["la visita guidata","la visita guiada"],["il souvenir","el recuerdo"],["la prenotazione cancellata","la reserva cancelada"],["viaggiare fuori stagione","viajar fuera de temporada"]],
  "b1-lavoro": [["il colloquio di lavoro","la entrevista de trabajo"],["il reparto","el departamento"],["il lavoro di squadra","el trabajo en equipo"],["il turno","el turno"],["lo stipendio netto","el sueldo neto"],["la promozione","el ascenso"],["il congedo","el permiso"],["il lavoro da remoto","el teletrabajo"],["la formazione professionale","la formación profesional"],["il datore di lavoro","el empleador"],["il contratto a tempo determinato","el contrato temporal"],["la tesi di laurea","el trabajo de fin de grado"]],
  "b1-relazioni": [["il malinteso","el malentendido"],["fare pace","hacer las paces"],["la delusione","la decepción"],["essere di buon umore","estar de buen humor"],["il sostegno reciproco","el apoyo mutuo"],["avere fiducia in","confiar en"],["la discussione","la discusión"],["sentirsi escluso","sentirse excluido"],["un legame stretto","un vínculo estrecho"],["il perdono","el perdón"],["essere orgoglioso di","estar orgulloso de"],["la compassione","la compasión"]],
  "b1-media": [["il telegiornale","el telediario"],["la prima pagina","la portada"],["il giornalismo d’inchiesta","el periodismo de investigación"],["la diretta","la emisión en directo"],["il podcast","el pódcast"],["la redazione","la redacción"],["il corrispondente","el corresponsal"],["la notizia falsa","la noticia falsa"],["il dibattito televisivo","el debate televisivo"],["l’abbonamento digitale","la suscripción digital"],["la tutela della privacy","la protección de la privacidad"],["diffondere una notizia","difundir una noticia"]],
  "b1-ambiente": [["la pista ciclabile","el carril bici"],["il pannello solare","el panel solar"],["la centrale eolica","el parque eólico"],["la raccolta porta a porta","la recogida puerta a puerta"],["l’impronta ecologica","la huella ecológica"],["il consumo consapevole","el consumo responsable"],["la plastica monouso","el plástico de un solo uso"],["la riserva naturale","la reserva natural"],["la qualità dell’aria","la calidad del aire"],["la specie protetta","la especie protegida"],["il compostaggio","el compostaje"],["l’acqua potabile","el agua potable"]],
  "b2-economia": [["il tasso d’inflazione","la tasa de inflación"],["la domanda interna","la demanda interna"],["il costo della vita","el coste de vida"],["la catena di approvvigionamento","la cadena de suministro"],["il debito pubblico","la deuda pública"],["il mercato azionario","el mercado bursátil"],["la recessione","la recesión"],["l’aliquota fiscale","el tipo impositivo"],["la fusione aziendale","la fusión empresarial"],["il margine di profitto","el margen de beneficio"],["la precarietà lavorativa","la precariedad laboral"],["l’imposta sul reddito","el impuesto sobre la renta"]],
  "b2-societa": [["la parità di genere","la igualdad de género"],["il diritto di voto","el derecho al voto"],["l’inclusione sociale","la inclusión social"],["il divario generazionale","la brecha generacional"],["la libertà di stampa","la libertad de prensa"],["la protezione dei minori","la protección de menores"],["la coesione sociale","la cohesión social"],["la povertà educativa","la pobreza educativa"],["la partecipazione civica","la participación ciudadana"],["il ricorso legale","el recurso legal"],["la discriminazione sistemica","la discriminación sistémica"],["il servizio pubblico","el servicio público"]],
  "b2-scienza": [["la revisione paritaria","la revisión por pares"],["il campione di controllo","el grupo de control"],["l’analisi dei dati","el análisis de datos"],["la sperimentazione clinica","el ensayo clínico"],["la cartella clinica","el historial clínico"],["la resistenza agli antibiotici","la resistencia a los antibióticos"],["il dispositivo indossabile","el dispositivo vestible"],["la diagnosi precoce","el diagnóstico precoz"],["l’ente di ricerca","el centro de investigación"],["la divulgazione scientifica","la divulgación científica"],["il rischio epidemiologico","el riesgo epidemiológico"],["la prova empirica","la prueba empírica"]],
  "b2-cultura": [["la retrospettiva cinematografica","la retrospectiva cinematográfica"],["il romanzo storico","la novela histórica"],["la fotografia documentaria","la fotografía documental"],["la critica d’arte","la crítica de arte"],["la tradizione orale","la tradición oral"],["il festival letterario","el festival literario"],["la coreografia","la coreografía"],["l’adattamento teatrale","la adaptación teatral"],["la libertà artistica","la libertad artística"],["la corrente culturale","la corriente cultural"],["il patrimonio immateriale","el patrimonio inmaterial"],["la prospettiva dell’autore","la perspectiva del autor"]],
  "b2-ambiente": [["l’impronta di carbonio","la huella de carbono"],["la rete elettrica","la red eléctrica"],["l’accumulo energetico","el almacenamiento energético"],["il trasporto ferroviario","el transporte ferroviario"],["la bonifica del suolo","la descontaminación del suelo"],["la gestione idrica","la gestión del agua"],["la biodiversità urbana","la biodiversidad urbana"],["la desertificazione","la desertificación"],["l’edilizia sostenibile","la construcción sostenible"],["il consumo di suolo","la ocupación del suelo"],["la barriera corallina","la barrera de coral"],["la resilienza climatica","la resiliencia climática"]],
  "c1-ricerca": [["la letteratura scientifica","la literatura científica"],["la lacuna conoscitiva","la laguna de conocimiento"],["il disegno della ricerca","el diseño de investigación"],["la raccolta dei dati","la recopilación de datos"],["la validità esterna","la validez externa"],["la variabile indipendente","la variable independiente"],["la metodologia qualitativa","la metodología cualitativa"],["la tendenza osservata","la tendencia observada"],["la peer review","la revisión por pares"],["il livello di confidenza","el nivel de confianza"],["la replicabilità","la reproducibilidad"],["l’ipotesi nulla","la hipótesis nula"]],
  "c1-istituzioni": [["la separazione dei poteri","la separación de poderes"],["l’iter legislativo","el proceso legislativo"],["l’ordinamento giuridico","el ordenamiento jurídico"],["il trattato internazionale","el tratado internacional"],["l’organo di garanzia","el órgano de control"],["la responsabilità amministrativa","la responsabilidad administrativa"],["il decreto attuativo","el decreto de aplicación"],["il ricorso costituzionale","el recurso constitucional"],["la sovranità nazionale","la soberanía nacional"],["l’autorità indipendente","la autoridad independiente"],["la consultazione pubblica","la consulta pública"],["la norma vincolante","la norma vinculante"]],
  "c1-economia": [["la ristrutturazione industriale","la reestructuración industrial"],["il flusso di capitali","el flujo de capitales"],["la politica monetaria","la política monetaria"],["la delocalizzazione produttiva","la deslocalización productiva"],["il valore aggiunto","el valor añadido"],["la sostenibilità del debito","la sostenibilidad de la deuda"],["la contrattazione collettiva","la negociación colectiva"],["la redistribuzione del reddito","la redistribución de la renta"],["il vantaggio competitivo","la ventaja competitiva"],["la crescita inclusiva","el crecimiento inclusivo"],["la volatilità dei prezzi","la volatilidad de los precios"],["il mercato emergente","el mercado emergente"]],
  "c1-tecnologia": [["il riconoscimento facciale","el reconocimiento facial"],["la supervisione umana","la supervisión humana"],["il modello linguistico","el modelo lingüístico"],["la crittografia dei dati","el cifrado de datos"],["il tracciamento online","el rastreo en línea"],["la governance dei dati","la gobernanza de los datos"],["la responsabilità automatizzata","la responsabilidad automatizada"],["il consenso informato","el consentimiento informado"],["la disinformazione sintetica","la desinformación sintética"],["la proprietà intellettuale","la propiedad intelectual"],["la vulnerabilità del sistema","la vulnerabilidad del sistema"],["il divario digitale","la brecha digital"]],
  "c1-cultura": [["il restauro conservativo","la restauración conservativa"],["la stratificazione storica","la estratificación histórica"],["il canone letterario","el canon literario"],["la committenza artistica","el mecenazgo artístico"],["la fruizione museale","la experiencia museística"],["la critica postcoloniale","la crítica poscolonial"],["la tutela paesaggistica","la protección del paisaje"],["il linguaggio simbolico","el lenguaje simbólico"],["l’allestimento espositivo","el montaje expositivo"],["la memoria archivistica","la memoria archivística"],["il dibattito estetico","el debate estético"],["la tradizione iconografica","la tradición iconográfica"]],
  "c1-argomentazione": [["la premessa fondamentale","la premisa fundamental"],["un’obiezione fondata","una objeción fundamentada"],["l’onere della prova","la carga de la prueba"],["un’interpretazione alternativa","una interpretación alternativa"],["la coerenza interna","la coherencia interna"],["un nesso causale","un vínculo causal"],["l’argomento contrario","el argumento contrario"],["la portata della conclusione","el alcance de la conclusión"],["un’affermazione apodittica","una afirmación categórica"],["la riserva metodologica","la reserva metodológica"],["il quadro interpretativo","el marco interpretativo"],["una conclusione provvisoria","una conclusión provisional"]]
};

const usedExpansionWords = new Set();

function vocabularyExtensions(expansions, moduleId, excludedWords, expectedCount) {
  const entries = expansions[moduleId] || [];
  const excluded = new Set(excludedWords.map(word => word.toLocaleLowerCase("it")));
  const additions = entries.filter(([italian]) => !excluded.has(italian.toLocaleLowerCase("it")));
  const repeated = entries.filter(([italian]) => excluded.has(italian.toLocaleLowerCase("it"))).map(([italian]) => italian);
  const reused = entries.filter(([italian]) => usedExpansionWords.has(italian.toLocaleLowerCase("it"))).map(([italian]) => italian);
  const normalized = entries.map(([italian]) => italian.toLocaleLowerCase("it"));
  if (additions.length !== expectedCount || normalized.length !== new Set(normalized).size || reused.length) {
    throw new Error(`Ampliación de vocabulario incompleta, duplicada o reciclada en ${moduleId}: se esperaban ${expectedCount} términos y hay ${additions.length}. Repetidos en el tema: ${repeated.join(", ")}. Ya usados en otro punto: ${reused.join(", ")}.`);
  }
  entries.forEach(([italian]) => usedExpansionWords.add(italian.toLocaleLowerCase("it")));
  return additions;
}

function makeGrammarModule(course, topic) {
  const [id, title, icon, focus, rows, checks, words, read] = topic;
  const wordCards = [
    ...words.map((word, i) => [["📘","🖊️","💬","🔎","✨","🧠"][i % 6], word[0], word[1]]),
    ...vocabularyExtensions(grammarVocabularyExpansions, id, words.map(word => word[0]), words.length)
      .map((word, i) => [["🗣️","📚","🧭","💡","📝","🌟"][i % 6], word[0], word[1]])
  ];
  const reading = `${read} Per comprendere meglio la regola, si possono confrontare questi esempi: «${rows[0][2]}», «${rows[1][2]}» e «${rows[2][2]}». Il lessico utile comprende «${words[0][0]}», «${words[1][0]}» e «${words[2][0]}». Il contesto aiuta a capire chi parla, quando avviene l’azione e quale rapporto esiste tra le parole. Per esercitarsi, conviene leggere ogni frase ad alta voce, osservare le forme e inventare un esempio collegato alla propria vita. In questo modo la grammatica diventa uno strumento utile per comunicare in modo chiaro e naturale.`;
  return {
    id, lvl: course.lvl, k: "g", t: title, en: focus, ic: icon,
    th: `<div class="card"><h2>La regla, paso a paso</h2><p>${focus}</p><div class="tblw"><table><thead><tr><th>Uso</th><th>Forma</th><th>Esempio in italiano</th><th>En español</th></tr></thead><tbody>${rows.map(row => `<tr><th scope="row">${row[0]}</th><td><b>${row[1]}</b></td><td><i lang="it">${row[2]}</i></td><td>${row[3]}</td></tr>`).join("")}</tbody></table></div><p>Lee cada ejemplo en voz alta y observa las terminaciones y las palabras que lo acompañan.</p></div><div class="tip"><b>Truco:</b> identifica el verbo y el sujeto, y después comprueba género, número y preposiciones.</div><div class="card conjugation-prompt"><b>🔤 Practica las conjugaciones italianas</b><p>Consulta las tablas de verbos y practica sus formas con ejercicios interactivos.</p><a class="btn blue small" href="#/conjugacion">Abrir el taller de los verbos →</a></div>`,
    voc: wordCards, vocBaseCount: words.length,
    ex: [...checks.map(([q, o, a, t]) => ({ q, o, a, t })), ...rows.slice(0, 2).map(row => ({ w: row[2], t: row[3] }))],
    tx: { ti: `In contesto: ${title}`, b: `<p lang="it">${reading.replace(/([A-Za-zÀ-ÿ’'-]{4,})/u, "<u>$1</u>")}</p><p class="muted">Fíjate en el ejemplo: <i lang="it">${rows[0][2]}</i></p>` },
    q: [
      [`¿Qué frase aparece entre los ejemplos de la lectura?`, [rows[0][2], rows[1][3], rows[2][3]], 0],
      [`¿Qué palabra se menciona primero en el vocabulario útil?`, [words[0][0], words[1][0], words[2][0]], 0],
      ["Según la lectura, ¿qué ayuda a comprender quién habla y cuándo ocurre la acción?", ["El contexto", "La traducción literal", "La longitud de la frase"], 0],
      ["¿Qué recomienda la lectura para comprender mejor la regla?", ["Comparar los ejemplos", "Ignorar las formas", "Memorizar palabras sin contexto"], 0],
      ["¿Qué recomienda hacer para practicar?", ["Leer en voz alta e inventar un ejemplo propio", "Memorizar la traducción sin contexto", "Evitar usar la regla al hablar"], 0]
    ],
    sp: ["Spiega questa regola con parole tue e fai un esempio.", "In quale situazione useresti questa struttura?", "Formula una domanda e una risposta usando il modello."]
  };
}

function makeVocabularyModule(course, topic) {
  const [id, title, icon, words] = topic;
  const extraWords = vocabularyExtensions(vocabularyTopicExpansions, id, words.map(word => word[0]), words.length);
  const vocab = [
    ...words.map(([italian, spanish], i) => [["🗣️","📚","🧭","💡","📝","🌟"][i % 6], italian, spanish]),
    ...extraWords.map(([italian, spanish], i) => [["🔤","🧳","🗺️","💬","📖","🔎"][i % 6], italian, spanish])
  ];
  const options = index => {
    const answer = index % 4;
    const choices = vocab.filter((_, i) => i !== index).slice(0, 3).map(word => word[1]);
    choices.splice(answer, 0, vocab[index][1]);
    return choices;
  };
  const rows = vocab.map(word => `<tr><td lang="it"><b>${word[1]}</b></td><td>${word[2]}</td></tr>`).join("");
  const reading = `Per affrontare questo argomento, sono utili espressioni come «${vocab[0][1]}», «${vocab[1][1]}» e «${vocab[2][1]}». In una situazione reale, la scelta delle parole dipende da chi parla, da chi ascolta e dallo scopo della conversazione. Anche «${vocab[3][1]}» e «${vocab[4][1]}» possono aiutare a descrivere meglio il contesto. Prima di rispondere, è utile ascoltare con attenzione, osservare le espressioni e scegliere quella più adatta. Dopo la lettura, prova a ripetere le parole e a inserirle in un breve dialogo personale: così il lessico passa dalla memoria all’uso quotidiano.`;
  return {
    id, lvl: course, k: "v", t: title, en: `Palabras y expresiones para desenvolverte en ${title.toLowerCase()}.`, ic: icon,
    th: `<div class="card"><h2>Vocabolario per ogni situazione</h2><p>Aprende las expresiones italianas junto con su significado. Pulsa las tarjetas para escuchar la pronunciación.</p><div class="tblw"><table><thead><tr><th>Italiano</th><th>Español</th></tr></thead><tbody>${rows}</tbody></table></div><div class="tip"><b>Para recordar:</b> escucha cada palabra, repítela en voz alta y úsala en una frase propia.</div></div>`,
    voc: vocab, vocBaseCount: words.length,
    ex: vocab.slice(0, 6).map((word, index) => [`¿Cómo se dice «${word[2]}» en italiano?`, options(index), index % 4, `${word[1]} = ${word[2]}`]),
    tx: { ti: title, b: `<p lang="it">${reading.replace(/([A-Za-zÀ-ÿ’'-]{4,})/u, "<u>$1")}</p>` },
    readingImage: id === "a2-citta" ? { src: "assets/img/italian-city-map.svg", alt: "Mapa ilustrado de una ciudad italiana con una ruta desde la estación hasta la plaza, el museo y la farmacia." } : null,
    q: [
      ["¿Cuál es el tema principal de la lectura?", [title, "Un asunto sin relación con el vocabulario", "Una conversación sobre gramática avanzada"], 0],
      ["¿Qué expresión aparece al comienzo del texto?", [vocab[0][1], vocab[3][1], vocab[5][1]], 0],
      ["¿De qué depende la elección de las palabras en una situación real?", ["De quién habla, quién escucha y el propósito", "Solo de la longitud de la frase", "De traducir literalmente cada palabra"], 0],
      ["¿Qué aconseja hacer antes de responder?", ["Escuchar y observar las expresiones", "Cambiar de tema", "Evitar el contexto"], 0],
      ["¿Cómo propone practicar el vocabulario al final?", ["Repetir las palabras y usarlas en un diálogo", "Leer solo la lista de traducciones", "No volver a escuchar las expresiones"], 0]
    ],
    sp: ["Descrivi questa situazione in italiano.", "Usa cinque parole nuove in una breve conversazione.", "Racconta una tua esperienza legata a questo tema."]
  };
}

window.CAMINO = grammarCourses.flatMap(course => course.topics.map(topic => makeGrammarModule(course, topic)));
window.CAMINO.push(...vocabularyCourses.flatMap(([level, topics]) => topics.map(topic => makeVocabularyModule(level, topic))));
