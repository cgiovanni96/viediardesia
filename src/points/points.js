const points = [
  {
    name: "sosta",
    image: "./points/sosta.jpeg",
    icon: "gardening",
    position: { latitude: 44.3134, longitude: 9.385611 },
    text: {
      it:
        "Punto di sosta delle portatrici d'ardesia, nel quale appoggiavano i pesanti blocchi sulla struttura così da evitare sforzi nel risollevarli.",
      eng:
        "A resting place for the slate bearers, where they placed the heavy blocks on the structure so as to avoid any effort in lifting them.",
    },
  },
  {
    name: "teleferica",
    image: "./points/teleferica.jpeg",
    icon: "gardening",
    position: { latitude: 44.306229, longitude: 9.400271 },
    text: {
      it:
        "Appoggio di un antica teleferica, il rullo fungeva per tendere il cavo",
      eng:
        "Support of an old ropeway, the roller was used to tension the cable.",
    },
  },
  {
    name: "vasca",
    image: "./points/vasca.jpeg",
    icon: "gardening",
    position: { latitude: 44.308921, longitude: 9.396003 },
    text: {
      it:
        "Vasca di decantazione per l'acqua sporca proveniente dalle cave, ora utilizzata come cisterna",
      eng: "Settling tank for dirty water from quarries, now used as a cistern",
    },
  },
  {
    name: "cappella",
    image: "./points/cappella.jpeg",
    icon: "church",
    position: { latitude: 44.299436, longitude: 9.397644 },
    text: {
      it:
        "Tra i beni dei Fieschi, nel 1031, si trova Baladai (Barassi) e Cerreto, dove esisteva una Cappella dedicata a Sant’Eufemiano e San Pietro che serviva da parrocchia. Passata nel 1438 ai Padri Olivetani di Quarto, con Bolla di Innocenzo VIII°, diventò loro parrocchia, ma non la abitarono mai e la amministrarono per mezzo di sacerdoti secolari. La Cappella è tuttora officiata ma non più parrocchiale, perchè è stata costruita la Chiesa di San Pietro a Barassi. La Cappella di Sant’Eufemiano conserva l’antica architettura e il suo culto risale a prima del Mille; allo stesso Santo è dedicata la Chiesa di Sant’Eufemiano di Graveglia, costruita dai Benedettini.",
      eng:
        "Among the Fieschi's possessions, in 1031, is Baladai (Barassi) and Cerreto, where there was a chapel dedicated to Sant'Eufemiano and San Pietro that served as a parish. It passed to the Olivetan Fathers of Quarto in 1438, and by a Seal of Innocent VIII became their parish, but they never lived there and administered it by means of secular priests. The Chapel is still officiated at today, but is no longer a parish church, because the Church of San Pietro a Barassi was built. The Chapel of Sant'Eufemiano preserves its ancient architecture and its cult dates back to before the year 1000; the Church of Sant'Eufemiano di Graveglia, built by the Benedictines, is dedicated to the same Saint.",
    },
  },
  {
    name: "memoriale",
    image: "./points/memoriale.jpeg",
    icon: "resistance",
    position: { latitude: 44.29927, longitude: 9.390648 },
    text: {
      it:
        "Non stupitevi\n\nse questo cippo partigiano\n\ngareggia in altezza con il campanile\n\nuguale fu l'ispirazione cristiana antifascista ed umana. Non uno degli abitanti che si sottrasse al compito solidale a rastrellare le prime armi\n\na preparare la prima minestra.\n\nTrascinati qui da ogni regione\n\naltri catturati mentre combattevano\n\nsotto le bandiere di ricchi paesi alleati\n\nnoi che poveri siamo li aiutammo.\n\n'Califfo Ge Barone scappate che ci sono i nazzisti'\n\n'ora facciamo le frittelle poi scapperemo'\n\nnon fecero in tempo ma pagarono quell'ultimo atto d'amore per la loro terra riconquistata.\n\nBarassi Ge 1945",
      eng:
        "Do not be surprised\n\nif this partisan memorial\n\ncompetes in height with the bell tower\n\nThe Christian anti-fascist and human inspiration was the same. Not one of the inhabitants who shirked the task of solidarity to rake the first weapons\n\npreparing the first soup.\n\nDragged here from every region\n\nothers captured while fighting\n\nunder the flags of rich allied countries\n\nwe who are poor helped them.\n\n'Califfo Ge Barone, run away, the Nazis are here.'\n\n'Now we make pancakes, then we'll run away.'\n\nthey didn't make it in time but they paid for that last act of love for their reconquered land.\n\nBarassi Ge 1945",
    },
  },
  {
    name: "cava",
    image: "./points/cava.jpeg",
    icon: "cave",
    position: { latitude: 44.300798, longitude: 9.393876 },
    text: {
      it:
        "Una delle cave di ardesia meglio conservate di tutta la zona con i resti di un antico ponte in pietra.",
      eng:
        "One of the best preserved slate quarries in the area with the remains of an ancient stone bridge.",
    },
  },

  {
    name: "torredelborgo",
    image: "./points/torredelborgo.jpeg",
    icon: "monument",
    position: { latitude: 44.30843862762209, longitude: 9.3457619403910529 },
    text: {
      it:
        "Incastonata tra via XX Settembre e via Cavour, venne costruita nel ‘500, probabilmente come torrione di avvistamento e ha subito nel tempo diverse destinazioni d’uso. Oggi recuperata e destinata a sede di museo e eventi culturali. ",
      eng:
        "This medieval tower stands between Via XX Settembre and Via Cavour; it was built in the 16th century - probably as a watchtower - and was used for various purposes over the years. Now restored, it is home to a museum and hosts cultural events.",
    },
  },

  {
    name: "basilicasanstefano",
    image: [
      "./points/basilicasanstefano-1.jpeg",
      "./points/basilicasanstefano-2.jpeg",
    ],
    icon: "church",
    position: { latitude: 44.3099010130757, longitude: 9.347893787886575 },
    text: {
      it:
        "Sede pievana dal X secolo e collegiata dal 1610, l’odierna chiesa fu ricostruita intorno al 1653. I due campanili laterali della facciata furono completati nel 1657. All’interno opere d’arte di Domenico Piola e altri pittori genovesi. Si affaccia su Piazza Marconi e sul Porticato Brignardello con grande effetto scenografico. Alle spalle della chiesa il monumentale cimitero che per le sue sculture è considerato uno dei più pregevoli e importanti del territorio.",
      eng:
        "Pieve (rural church with baptistery) from the 10th century, then collegiate as from 1610, the modern-day church was reconstructed around 1653. The two bell-towers on the side of the façade were completed in 1657. It houses works of art by Domenico Piola and other Genoese painters.\n\n It faces onto Piazza Marconi and the Brignardello Portico with a spectacular effect. One of the finest and most important memorial cemeteries in the territory, with exceptional sculptures, is located behind the church.",
    },
  },
  {
    name: "biblioteca",
    image: "./points/biblioteca.jpg",
    icon: "book",
    position: { latitude: 44.31015927425799, longitude: 9.345441504295946 },
    text: {
      it: "Biblioteca di Lavagna",
      eng: "Lavagna's library",
    },
  },
  {
    name: "oratorio",
    image: "./points/oratorio.jpg",
    icon: "church",
    position: { latitude: 44.30969196240579, longitude: 9.346203308420225 },
    text: {
      it:
        "Oratorio della Santissima Trinità Situato in prossimità del centro storico risale al XV secolo, e fu nei secoli sede della confraternita della Santissima Trinità. All’interno sono custoditi numerosi cristi processionali, tra cui uno dello scultore Anton Maria Maragliano, dipinti di Luca Cambiaso e un pregevole organo del XVIII secolo.",
      eng:
        "This is situated close to the old town and dates back to the 15th century; in the past it was home to the confraternity of the Santissima Trinità. It houses numerous processional crucifixes, including one by sculptor Anton Maria Maragliano, paintings by Luca Cambiaso and a fine 18th century organ.",
    },
  },
  {
    name: "museocasacarbone",
    image: [
      "./points/museocasacarbone-1.jpg",
      "./points/museocasacarbone-2.jpg",
    ],
    icon: "monument",
    position: { latitude: 44.3097669111973, longitude: 9.34509716424023 },
    text: {
      it:
        "La casa-museo è situata in un palazzo borghese a tre piani decorato in stile genovese. Risalente alla metà del XIX secolo e di proprietà di Emanuele e Siria Carbone, è arredata con mobili, dipinti e oggetti del XVII-XX secolo. La proprietà è gestita dal FAI.",
      eng:
        "This combined home and museum is situated in a three-level bourgeois palace decorated in the Genoese style. Dating back to the mid-1800s and owned by Emanuele and Siria Carbone, the furnishings, paintings and ornamental items date from the 17th to the 20th centuries. The property is managed by FAI (Italian Environmental Trust).",
    },
  },
  {
    name: "santuariodelcarmine",
    image: "./points/santuariodelcarmine.jpg",
    icon: "church",
    position: { latitude: 44.309881924133689, longitude: 9.345795214176178 },
    text: {
      it:
        "L’attuale edificio fu costruito tra il 1617 e il 1631 ad opera dei Carmelitani scalzi. Riaperta al culto religioso nel 1806, subì notevoli interventi di restauro e rifacimento nel 1835. L’annesso convento, oggi di proprietà comunale, è la sede della biblioteca civica “Giovanni Serbandini Bini”.",
      eng:
        "The present-day building was constructed between 1617 and 1631 by the Barefoot Carmelites. It was reopened to religious worship in 1806 and underwent several restoration and refurbishing works in 1835. The annexed convent, now owned by the town council, is home to the “Giovanni Serbandini Bini” municipal library.",
    },
  },
  {
    name: "santagiuliacentaura",
    image: "./points/santagiuliacentaura.jpg",
    icon: "church",
    position: { latitude: 44.303149542862876, longitude: 9.373008906841278 },
    text: {
      it:
        "Alta e panoramica sulla collina di Centaura, conserva le reliquie di questa santa. Notevole il sagrato a risseu.",
      eng:
        "This church stands high on the hill of Centaura, commanding a scenic view and housing the reliquary of St. Giulia. It is worth a visit to see the risseu mosaic cobblestone forecourt.",
    },
  },

  {
    name: "immacolataconcezione",
    image: "./points/immacolataconcezione.jpg",
    icon: "church",
    position: { latitude: 44.29752471622229, longitude: 9.37686941229584 },
    text: {
      it:
        "La chiesa della Immacolata Concezione, costruita nel 1757 e decorata da marmi lavorati, fu anticamente succursale della vicina parrocchia di Santa Giulia di Centaura. La chiesa, che una volta era dedicata a Sant’Erasmo protettore dei naviganti, è affrescata con pitture della metà dell’800 di pregevole valore artistico e mostrano S. Erasmo l’Immacolata e Sant’Antonio. La piazzetta antistante la chiesa è deliziosa con i suoi giardinetti e il muretto panchina che accoglie il viandante.",
      eng:
        "In the past, the church of the Immacolata Concezione, built in 1757 and decorated with carved marble, was an offshoot of the nearby parish church of Santa Giulia di Centaura. The church used to be dedicated to St. Erasmus - the patron saint of sailors - and has frescoes dating back to the mid-1800s. These finely executed paintings show St. Erasmus, Mary the Immaculate and St. Anthony. There is a delightful little square in front of the church with a garden area and a wall bench where wayfarers can rest.",
    },
  },
  {
    name: "sanpietroapostolo",
    image: "",
    position: { latitude: 44.299449, longitude: 9.397654 },
    text: {
      it:
        "Nella località di Barassi fu costruita nel 1660 dai Padri Olivetani di Quarto dei Mille e in origine dedicata a san Eufemiano. ",
      eng:
        "The church of St. Peter the Apostle is located in Barassi and was built by the Olivetan monks from Quarto dei Mille in 1660; it was originally dedicated to St. Euphemius.",
    },
  },
  {
    name: "sorlana",
    image: "./points/sorlana.jpeg",
    position: { latitude: 44.309028, longitude: 9.387149 },
    text: {
      it:
        "Ricostruita più volte nel corso dei secoli ha origini antiche (X-XI secolo). Graziosa nelle sue linee architettoniche, ha un bel campanile con lesene e capitelli; all’interno conserva una tela e un Crocifisso di epoca rinascimentale e un interessante tabernacolo del XVIII secolo.",
      eng:
        "Rebuilt several times over the centuries, this church dates right back to the 10th-11th century. It has graceful architectural lines and a fine bell tower with pilasters and capitals; inside it houses a renaissance crucifix and canvas as well as an interesting 18th century tabernacle.",
    },
  },
];

export default points;
