export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: string;
};
export type MenuSection = { id: string; title: string; items: MenuItem[] };

export const menuES: MenuSection[] = [
  {
    id: "tapas",
    title: "Tapas",
    items: [
      {
        id: "bravas",
        name: "Bravas",
        price: "7,50",
      },
      {
        id: "sweet-potato-woody",
        name: "Sweet Potato Woody",
        description:
          "Patatas de boniato crujientes, crema cheddar, crema camembert, bacon, pulled pork y salsa miel mostaza.",
        price: "8,50",
      },
      {
        id: "patatas-soprano",
        name: "Patatas Soprano",
        description:
          "Patatas caseras, salsa ranchera, crema cheddar, pulled chicken y cebolla crispy.",
        price: "8,50",
      },
      {
        id: "rabo-de-cerdo",
        name: "Rabo de cerdo",
        price: "7,50",
      },
      {
        id: "calamares-a-la-andaluza",
        name: "Calamares a la andaluza",
        price: "11,00",
      },
      {
        id: "alitas-grill-bbq",
        name: "Alitas grill BBQ",
        price: "7,70",
      },
      {
        id: "ensalada-cesar",
        name: "Ensalada César",
        description:
          "Lechuga, maíz, láminas de pollo asado, picatoste, queso parmesano y salsa César.",
        price: "9,50",
      },
      {
        id: "ensalada-pesci",
        name: "Ensalada Pesci",
        description:
          "Verdes, anacardos, sésamo, cebolla roja encurtida, aguacate, salmón ahumado, cherrys, vinagreta de miel y curry.",
        price: "11,20",
      },
      {
        id: "queso-brie-empanado",
        name: "Queso Brie empanado",
        description: "Acompañado de mermelada de higo al toque de romero.",
        price: "8,70",
      },
    ],
  },
  {
    id: "croquetas",
    title: "Croquetas",
    items: [
      {
        id: "croqueta-de-boletus",
        name: "Croqueta de boletus",
        price: "2,20",
      },
      {
        id: "croqueta-de-carrillada-de-ternera",
        name: "Croqueta de carrillada de ternera",
        price: "2,20",
      },
      {
        id: "croqueta-de-chipiron-en-su-tinta",
        name: "Croqueta de chipirón en su tinta",
        price: "2,20",
      },
    ],
  },
  {
    id: "del-mundo",
    title: "Del Mundo",
    items: [
      {
        id: "tequenos-6-uds",
        name: "Tequeños (6 Uds.)",
        description: "Con salsa Jack Daniel’s.",
        price: "8,00",
      },
      {
        id: "nachos",
        name: "Nachos",
        description:
          "Tortitas crujientes, pico de gallo, guacamole, queso, jalapeños y chili de vaca madurada.",
        price: "9,20",
      },
      {
        id: "canelon-pato-xl",
        name: "Canelón Pato XL",
        description:
          "Relleno de confit de pato y foie sobre salsa de boletus con escamas de queso curado.",
        price: "8,00",
      },
      {
        id: "bocados-de-pollo-cajun",
        name: "Bocados de pollo Cajún",
        description: "Cesta de tiras de pollo crispy chicken cajún.",
        price: "8,50",
      },
      {
        id: "bocados-de-pollo-bbq",
        name: "Bocados de pollo BBQ",
        description: "Cesta de tiras de pollo crispy chicken BBQ.",
        price: "8,50",
      },
      {
        id: "mix-de-pollo",
        name: "Mix de pollo",
        description: "Cesta de BBQ y cajún.",
        price: "8,50",
      },
      {
        id: "raviolis-6-uds",
        name: "Raviolis (6 Uds.)",
        description:
          "Masa crujiente con relleno de rabo de toro con salsa Pedro Ximénez y lágrimas de chocolate.",
        price: "9,70",
      },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    items: [
      {
        id: "gus-fring",
        name: "Gus Fring",
        description:
          "Pollo crujiente, salsa Walter White, cebolla encurtida, lechuga fina, guanciale y cheddar.",
        price: "13,00",
      },
      {
        id: "mj-23",
        name: "MJ-23",
        description:
          "Doble PATTY SMASH de vaca gallega, salsa Scottie Pippen, cebolla morada, doble cheddar, pepinillos y bacon crujiente.",
        price: "11,50",
      },
      {
        id: "fiona",
        name: "Fiona",
        description:
          "Vaca madurada 50 días, triple bacon, papas paja, cebolla crispy, cheddar y salsa Cheetos casera.",
        price: "13,00",
      },
      {
        id: "gibson",
        name: "Gibson",
        description:
          "Vaca madurada 50 días, pico de gallo, cheddar, queso curado de oveja, pulled pork bbq, mayonesa semi-picante y bacon crujiente.",
        price: "13,00",
      },
      {
        id: "trinity",
        name: "Trinity",
        description:
          "Vaca madurada 50 días, hojas de roble, salsa de miel y mostaza, pulled ternera, cheddar, cebolla crispy, jamón crujiente y queso Brie.",
        price: "13,00",
      },
      {
        id: "rocknrolla",
        name: "RockNRolla",
        description:
          "Vaca madurada 50 días, salsa Jack Daniel’s, rúcula, cebolla caramelizada, panceta curada, queso curado y cheddar.",
        price: "13,00",
      },
      {
        id: "clemenza",
        name: "Clemenza",
        description:
          "Vaca madurada 50 días, mermelada casera de bacon, pulled texas de ternera, salsa Emmy de pimientos asados, cebolla caramelizada, cheddar crema y queso ahumado curado.",
        price: "13,00",
      },
    ],
  },
  {
    id: "combos-y-menu",
    title: "Combos y Menú",
    items: [
      {
        id: "combo-rock-keku",
        name: "Combo Rock KEKU",
        description:
          "Incluye: 4 Alitas, 4 Tiras de pollo BBQ, 4 Croquetas de carrillada, 4 Tequeños.",
        price: "19,90",
      },
      {
        id: "menu-infantil-nuggets-o-burger-bebida-postre",
        name: "Menú infantil (nuggets o burger + bebida + postre)",
        description:
          "Principal a elegir: Nuggets (5 Uds.) con patatas o Hamburguesa infantil con patatas. Postre: Huevo sorpresa o helado. Incluye refresco o agua.",
        price: "7,00",
      },
    ],
  },
  {
    id: "bocadillos",
    title: "Bocadillos",
    items: [
      {
        id: "corleone",
        name: "Corleone",
        description:
          "Chapata untada con mantequilla, rúcula, secreto ibérico marinado al horno, cebolla a la plancha, pepinillos, cheddar, crema de queso de cabra y pimientos caramelizados.",
        price: "9,30",
      },
      {
        id: "chivito",
        name: "Chivito",
        description:
          "Lomo, bacon, lechuga, tomate, queso, mayonesa y huevo frito.",
        price: "7,70",
      },
      {
        id: "keku",
        name: "KEKU",
        description:
          "Medallones de solomillo, crema de queso de cabra, cebolla a la plancha, pipas peladas y berenjena asada.",
        price: "8,40",
      },
      {
        id: "hamburguesa-completa",
        name: "Hamburguesa Completa",
        description:
          "Hamburguesa de ternera, lechuga, tomate, queso y cebolla a la plancha.",
        price: "8,80",
      },
      {
        id: "cubano",
        name: "Cubano",
        description:
          "Chapata untada con mantequilla a la plancha, lacón, doble cheddar, lomo de cabeza de cerdo al horno, pepinillos y mostaza.",
        price: "9,00",
      },
      {
        id: "cosa-nostra",
        name: "Cosa Nostra",
        description:
          "Pollo asado, bacon, miel-mostaza, cebolla crujiente, guacamole y hojas de roble.",
        price: "8,30",
      },
      {
        id: "uruguayo",
        name: "Uruguayo",
        description:
          "Carne de caballo, cheddar, hojas de roble, cebolla a la plancha, tomate, lacón a la plancha, salsa ranchera y huevo frito.",
        price: "9,00",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      {
        id: "red-velvet",
        name: "Red Velvet",
        description:
          "Bizcocho rojo, crema de queso, arroz extorsionado y ralladura de chocolate.",
        price: "5,00",
      },
      {
        id: "carrot-cake",
        name: "Carrot Cake",
        description:
          "Bizcocho de zanahoria con nueces y pasas, crema de queso, canela, jengibre y glaseado de naranja.",
        price: "5,00",
      },
      {
        id: "monster-cake",
        name: "Monster Cake",
        description:
          "Bizcocho de brownie de chocolate, crema fudge de chocolate, New York cheesecake, roseta y rayado de caramelo.",
        price: "5,50",
      },
      {
        id: "cheesecake-vasca",
        name: "Cheesecake (Vasca)",
        description: "Suave y cremosa, decorada con sirope de frutos rojos.",
        price: "5,00",
      },
    ],
  },
  {
    id: "almuerzos",
    title: "Almuerzos",
    items: [
      {
        id: "axel",
        name: "Axel",
        description:
          "Secreto ibérico, mousse de pato, cebolla crunchy, mostaza y queso ahumado de oveja.",
        price: "9,70",
      },
      {
        id: "chivito",
        name: "Chivito",
        description:
          "A elegir entre pollo y lomo, lechuga, tomate, mayonesa, bacon, queso y huevo a la plancha.",
        price: "8,80",
      },
      {
        id: "johnny",
        name: "Johnny",
        description:
          "Caballo, cebolla crunchy, alioli de ajo negro, queso curado, tomate rallado y huevo a la plancha.",
        price: "9,50",
      },
      {
        id: "coppola",
        name: "Coppola",
        description:
          "Calamares a la andaluza, ojitos, cebolla a la plancha, salsa mery y alioli.",
        price: "9,50",
      },
      {
        id: "tommy",
        name: "Tommy",
        description:
          "Figatells, berenjena asada, cebolla caramelizada, cheddar, miel mostaza y panceta curada.",
        price: "10,50",
      },
      {
        id: "tarantino",
        name: "Tarantino",
        description:
          "Sweet potato, guacamole, hoja de roble, pimientos caramelizados y cebolla crispy.",
        price: "8,80",
      },
      {
        id: "el-pibe",
        name: "El Pibe",
        description:
          "Longaniza criolla, patatas paja, bacon, queso y salsa chimichurri.",
        price: "9,50",
      },
      {
        id: "mike",
        name: "Mike",
        description:
          "Rúcula, pollo empanado, mermelada de bacon, mostaza y cheddar.",
        price: "9,50",
      },
      {
        id: "vitto",
        name: "Vitto",
        description:
          "Solomillo, mayonesa de sobrasada, bacon, queso brie y cebolla a la plancha.",
        price: "9,50",
      },
      {
        id: "torreznos",
        name: "Torreznos",
        description: "Crujientes y muy sabrosos.",
        price: "7,50",
      },
      {
        id: "baldo",
        name: "Baldo",
        description:
          "Lomo, queso manchego, cebolla, pimientos asados y ajoaceite.",
        price: "9,50",
      },
      {
        id: "al-pacino",
        name: "Al Pacino",
        description:
          "Oreja de cerdo adobada, salsa brava casera, salsa mery y patatas paja.",
        price: "9,50",
      },
    ],
  },
  {
    id: "cervezas",
    title: "Cervezas",
    items: [
      {
        id: "san-miguel-magna",
        name: "San Miguel Magna",
        price: "2,00",
      },
      {
        id: "san-miguel-magna",
        name: "San Miguel Magna",
        price: "2,60",
      },
      {
        id: "san-miguel-magna",
        name: "San Miguel Magna",
        price: "3,50",
      },
      {
        id: "san-miguel-selecta",
        name: "San Miguel Selecta",
        price: "2,20",
      },
      {
        id: "san-miguel-selecta",
        name: "San Miguel Selecta",
        price: "2,60",
      },
      {
        id: "san-miguel-selecta",
        name: "San Miguel Selecta",
        price: "3,70",
      },
      {
        id: "franziskaner",
        name: "Franziskaner",
        price: "2,20",
      },
      {
        id: "franziskaner",
        name: "Franziskaner",
        price: "2,60",
      },
      {
        id: "franziskaner",
        name: "Franziskaner",
        price: "3,70",
      },
      {
        id: "alhambra-roja-reserva",
        name: "Alhambra roja reserva",
        price: "2,20",
      },
      {
        id: "alhambra-roja-reserva",
        name: "Alhambra roja reserva",
        price: "2,60",
      },
      {
        id: "alhambra-roja-reserva",
        name: "Alhambra roja reserva",
        price: "3,70",
      },
      {
        id: "alhambra-reserva-1925",
        name: "Alhambra Reserva 1925",
        price: "2,70",
      },
      {
        id: "alhambra-reserva-1925",
        name: "Alhambra Reserva 1925",
        price: "3,30",
      },
      {
        id: "alhambra-reserva-1925",
        name: "Alhambra Reserva 1925",
        price: "4,50",
      },
      {
        id: "san-miguel-magna-00-tostada",
        name: "San Miguel Magna 0,0 tostada",
        price: "2,70",
      },
      {
        id: "san-miguel-magna-00-tostada",
        name: "San Miguel Magna 0,0 tostada",
        price: "3,00",
      },
      {
        id: "san-miguel-magna-00-tostada",
        name: "San Miguel Magna 0,0 tostada",
        price: "4,50",
      },
      {
        id: "san-miguel-13",
        name: "San Miguel 1/3",
        price: "1,60",
      },
      {
        id: "san-miguel-sin-gluten-13",
        name: "San Miguel sin gluten 1/3",
        price: "2,30",
      },
      {
        id: "san-miguel-radler",
        name: "San Miguel Radler",
        price: "3,70",
      },
      {
        id: "alhambra-especial-13",
        name: "Alhambra Especial 1/3",
        price: "1,90",
      },
      {
        id: "alhambra-citra-ipa",
        name: "Alhambra Citra IPA",
        price: "3,90",
      },
      {
        id: "budweiser",
        name: "Budweiser",
        price: "3,70",
      },
      {
        id: "corona",
        name: "Corona",
        price: "3,70",
      },
      {
        id: "stela-artuais",
        name: "Stela Artuais",
        price: "3,70",
      },
      {
        id: "leff-blonde",
        name: "Leff Blonde",
        price: "3,70",
      },
      {
        id: "leff-tripple",
        name: "Leff Tripple",
        price: "3,70",
      },
      {
        id: "leff-bruine",
        name: "Leff Bruine",
        price: "3,70",
      },
    ],
  },
  {
    id: "vinos---tintos",
    title: "Vinos - Tintos",
    items: [
      {
        id: "nuviana-somontano-cabernet-barrica",
        name: "Nuviana (Somontano) – Cabernet · Barrica",
        price: "9,00 botella / 2,00 copa",
      },
      {
        id: "camo-bobal-roble-valencia-tempranillo-cabernet",
        name: "Camo Bobal (Roble Valencia) – Tempranillo · Cabernet",
        price: "14,00",
      },
      {
        id: "la-cova-negra-utiel-requena-autor",
        name: "La Cova Negra (Utiel-Requena) – Autor",
        price: "11,00 botella / 2,50 copa",
      },
      {
        id: "lopez-de-haro-rioja-tempranillo-crianza",
        name: "López de Haro (Rioja) – Tempranillo · Crianza",
        price: "13,00",
      },
      {
        id: "biberus-ribera-del-duero-tinta-fina-roble",
        name: "Biberus (Ribera del Duero) – Tinta Fina · Roble",
        price: "15,00",
      },
    ],
  },
  {
    id: "vinos---blancos",
    title: "Vinos - Blancos",
    items: [
      {
        id: "nuviana-somontano-chardonnay",
        name: "Nuviana (Somontano) – Chardonnay",
        price: "9,00 botella / 2,00 copa",
      },
      {
        id: "lamua-galicia-albarino",
        name: "Lamua (Galicia) – Albariño",
        price: "14,00",
      },
      {
        id: "bienbebido-pulpo-valencia-sauvignon-blanc",
        name: "Bienbebido Pulpo (Valencia) – Sauvignon Blanc",
        price: "11,00 botella / 2,50 copa",
      },
      {
        id: "seduccion-rioja-viuramalvasia-semidulce",
        name: "Seducción (Rioja) – Viura/Malvasía · Semidulce",
        price: "12,00",
      },
      {
        id: "verdejo-rueda",
        name: "Verdejo (Rueda)",
        price: "15,00",
      },
    ],
  },
] as any;

export const menuEN: MenuSection[] = [
  {
    id: "to-share",
    title: "To share",
    items: [
      {
        id: "bravas",
        name: "Keku bravas",
        description: "Homemade mildly spicy sauce",
        price: "6.50",
      },
      {
        id: "croquetas",
        name: "Creamy croquettes",
        description: "Ham or boletus",
        price: "8.90",
      },
      {
        id: "coca",
        name: "Mediterranean coca",
        description: "Tomato, cheeses and pesto",
        price: "9.50",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    items: [
      {
        id: "burger",
        name: "Keku Burger",
        description: "Double patty, cheese and house sauce",
        price: "12.90",
      },
      {
        id: "arroz",
        name: "Rib rice",
        description: "Sticky rice with pork ribs and chickpeas",
        price: "13.50 (pp)",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        id: "ensaimada",
        name: "Keku Ensaimada",
        description: "Vanilla custard and glazed caramel",
        price: "5.90",
      },
    ],
  },
];
