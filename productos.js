const productos = [
    /*OFERTAS*/
    {
        categoria:"Ofertas",
        nombre:"TECLADO ALLOY ORIGINS BACKLIT USB US KEY",
        marca:"HYPEREX",
        precio:17.999,
        imagen:"/teclados/MKT0172ONE.jpg"
    },
    {
        categoria:"Ofertas",
        nombre:"TECLADO GAMING RETROILUMINADO KB275L",
        marca:"HAVIT",
        precio:3.999,
        imagen:"/teclados/MKT0183KMX.jpg"
    },
    {
        categoria:"Ofertas",
        nombre:"SMART TV 43 PULGADAS FULL HD",
        marca:"PHILIPS",
        precio:42.999,
        imagen:"/televisores/TEL4368PHI.jpg"
    },
    {
        categoria:"Ofertas",
        nombre:"MOUSE INALAMBRICO M185 RED",
        marca:"LOGITECH",
        precio:1.399,
        imagen:"/mouses/MKT0066KMX.jpg"
    },
    {
        categoria:"Ofertas",
        nombre:"TECLADO GAMER MELANOGASTER ANTIGHOSTING",
        marca:"CONSTRICTOR",
        precio:2.599,
        imagen:"/teclados/MKT0087TTH.jpg"
    },
    {
        categoria:"Ofertas",
        nombre:"NOTEBOOK X515EA FHD CORE I3",
        marca:"ASUS",
        precio:104.999,
        imagen:"/notebooks/MKT0042PAR.jpg"
    },
    /*TECLADOS*/
    {
        categoria:"Teclados",
        nombre:"TECLADO ALLOY ORIGINS BACKLIT USB US KEY",
        marca:"HYPEREX",
        precio:17.999,
        imagen:"/teclados/MKT0172ONE.jpg"
    },
    {
        categoria:"Teclados",
        nombre:"TECLADO GAMER AIWA QWERTY MULTICOLOR METALICO",
        marca:"CONSTRICTOR",
        precio:4.999,
        imagen:"/teclados/MKT0048TTH.jpg"
    },
    {
        categoria:"Teclados",
        nombre:"TECLADO GAMING RETROILUMINADO KB275L",
        marca:"HAVIT",
        precio:3.999,
        imagen:"/teclados/MKT0183KMX.jpg"
    },
    {
        categoria:"Teclados",
        nombre:"TECLADO INALAMBRICO K400 PLUS",
        marca:"LOGITECH",
        precio:3.599,
        imagen:"/teclados/71Ea88NnLwL._AC_SY450_.jpg"
    },
    {
        categoria:"Teclados",
        nombre:"TECLADO GAMER MELANOGASTER ANTIGHOSTING",
        marca:"CONSTRICTOR",
        precio:2.599,
        imagen:"/teclados/MKT0087TTH.jpg"
    },
    {
        categoria:"Teclados",
        nombre:"TECLADO INAL WKBC-20 347110 SL",
        marca:"MAXELL",
        precio:2.899,
        imagen:"/teclados/TEC2010MAX.jpg"
    },
    /*TELEVISORES*/
    {
        categoria:"Televisores",
        nombre:"SMART TV 42 PULGADAS FULL HD L42S6500",
        marca:"TCL",
        precio:44.999,
        imagen:"/televisores/TEL4265TCL.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 32 PULGADAS HD CDH-LE32SMART19",
        marca:"HITACHI",
        precio:45.999,
        imagen:"/televisores/TEL3219HIT.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 32 PULGADAS HD DM32X7000",
        marca:"NOBLEX",
        precio:32.999,
        imagen:"/televisores/TEL3270NOB.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 50 PULGADAS 4K ULTRA HD",
        marca:"PHILIPS",
        precio:85.999,
        imagen:"/televisores/TEL5054PHI.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 43 PULGADAS FULL HD",
        marca:"PHILIPS",
        precio:42.999,
        imagen:"/televisores/TEL4368PHI.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 50 PULGADAS 4K ULTRA HD",
        marca:"NOBLEX",
        precio:69.999,
        imagen:"/televisores/TEL5060NOB.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 50 PULGADAS 4K ULTRA HD",
        marca:"SAMSUNG",
        precio:88.999,
        imagen:"/televisores/TEL5047SSG.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 55 PULGADAS 4K ULTRA HD",
        marca:"PHILIPS",
        precio:103.999,
        imagen:"/televisores/TEL5506PHI.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 50 PULGADAS 4K ULTRA HD",
        marca:"LG",
        precio:85.999,
        imagen:"/televisores/TEL5075LGL.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 43 PULGADAS FULL HD",
        marca:"SAMSUNG",
        precio:57.999,
        imagen:"/televisores/TEL4353SSG.jpg"
    },
    {
        categoria:"Televisores",
        nombre:"SMART TV 43 PULGADAS",
        marca:"LG",
        precio:63.999,
        imagen:"/televisores/TEL4350LGL.jpg"
    },
    /*MOUSES*/ 
    {
        categoria:"Mouses",
        nombre:"MOUSE INALAMRICO M170 BLUE",
        marca:"LOGITECH",
        precio:1.099,
        imagen:"/mouses/MKT0062KMX.jpg"
    },
    {
        categoria:"Mouses",
        nombre:"MOUSE OPTICO",
        marca:"VERBATIM",
        precio:999,
        imagen:"/mouses/MKT0252STE.jpg"
    },
    {
        categoria:"Mouses",
        nombre:"MOUSE RETRACTIL",
        marca:"MAXELL",
        precio:1.599,
        imagen:"/mouses/MOU8105MAX.jpg"
    },
    {
        categoria:"Mouses",
        nombre:"MOUSE WIRELESS KJ-MOUSEI002 NEGRO",
        marca:"KANJI",
        precio:899,
        imagen:"/mouses/MKT0406DTS.jpg"
    },
    {
        categoria:"Mouses",
        nombre:"MOUSE TÁCTIL INALÁMBRICO MAGIC 2 PLATA",
        marca:"APPLE",
        precio:14.999,
        imagen:"/mouses/MKT0021ONE.jpg"
    },
    /*NOTEBOOKS*/
    {
        categoria:"Notebooks",
        nombre:"NOTEBOOK PEN N-230",
        marca:"GFAST",
        precio:66.999,
        imagen:"/notebooks/NOT2300GFT.jpg"
    },
    {
        categoria:"Notebooks",
        nombre:"NOTEBOOK I5 240 G8",
        marca:"HP",
        precio:99.999,
        imagen:"/notebooks/NOT5248HEW.jpg"
    },
    {
        categoria:"Notebooks",
        nombre:"NOTEBOOK I5 14-CF2078LA",
        marca:"HP",
        precio:110.999,
        imagen:"/notebooks/NOT2079HEW.jpg"
    },
    {
        categoria:"Notebooks",
        nombre:"NOTEBOOK ATHLON 14-DK1016LA",
        marca:"HP",
        precio:59.999,
        imagen:"/notebooks/NOT1017HEW.jpg"
    },
    {
        categoria:"Notebooks",
        nombre:"NOTEBOOK INTEL CELERON N3350 CON 4GB DE RAM",
        marca:"ENOVA",
        precio:47.999,
        imagen:"/notebooks/NOT1464ENO.jpg"
    }, 
]