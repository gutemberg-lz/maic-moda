import { ProductType } from "@/pasteTypes/product";

export const Products: ProductType[] = [
  {
    id: 1,
    category: "Roupa",
    nameProduct: "Camisa",
    type: "Ralph Lauren",
    titleLink: "polo-ralph-lauren",
    gender: "M",
    title: "Polo Ralph Lauren",
    description: "",
    mainImage: "images/polo-a-1.webp",
    secondaryImages: [
      {id: 0, link:"images/polo-a-1.webp"},
      {id: 1, link:"images/polo-a-2.webp"},
      {id: 2, link:"images/polo-a-3.webp"},
      {id: 3, link:"images/polo-a-4.webp"},
      {id: 4, link:"images/polo-a-5.webp"}
      
    ],
    brand: "Polo",
    predominantColor: ["Azul-marinho", "azul"],
    secondaryColor: [],
    sizeAvailable: ["P", "M", "GG", "G"],
    price: 859.99,
    discount: {
      disc: true,
      Pct: 23,
      offPct: new Date("2024-06-08"),
    },
    hashtags: [
      "Polo",
      "Camisa",
      "Camisa Masculina",
      "Masculina",
      "Azul",
      "Azul-marinho",
      "Camisa com ziper",
      "Desconto",
    ],
    depleted: false,
  },
  {
    id: 2,
    category: "Calçados",
    nameProduct: "Tênis",
    type: "Basquete Buzzer",
    titleLink: "tenis-under-armour-basquete-buzzer-preto-dourado",
    gender: "M",
    brand: "Under",
    title: "Tênis Under Armour Basquete Buzzer",
    description: "",
    mainImage: "images/tenis-a-1.webp",
    secondaryImages: [
      {id: 0, link:"images/tenis-a-1.webp"},
      {id: 1, link:"images/tenis-a-2.webp"},
      {id: 2, link:"images/tenis-a-3.webp"},
      {id: 3, link:"images/tenis-a-4.webp"},

    ],
    predominantColor: ["Preto", "Dourado"],
    secondaryColor: ["Branco", "Vermelho"],
    sizeAvailable: ["39", "41", "42", "43", "44", "45", "46", "47", "48"],
    price: 299.99,
    discount: {
      disc: false,
      Pct: undefined,
      offPct: undefined,
    },
    hashtags: [
      "Under",
      "Under Armour",
      "Tênis",
      "Under Armour Basquete Buzzer",
      "Masculino",
      "Preto",
      "Dourado",
      "Dia a Dia",
      "Barato",
      "Barato",
      "Pés grandes",
      "Basquete",
    ],
    depleted: false,
  },
  {
    id: 3,
    category: "Calçados",
    nameProduct: "Tênis",
    type: "Air Max Plus",
    titleLink: "tenis-nike-air-max-plus-masculino",
    brand: "Nike",
    gender: "M",
    title: "Tênis Nike Air Max Plus Masculino",
    description: "",
    mainImage: "images/tenis-b-1.avif",
    secondaryImages: [
      {id: 0, link:"images/tenis-b-1.avif"},
      {id: 1, link:"images/tenis-b-2.avif"},
      {id: 2, link:"images/tenis-b-3.avif"},
      {id: 3, link:"images/tenis-b-4.avif"},
    ],
    predominantColor: ["Preto", "Verde"],
    secondaryColor: ["Branco"],
    sizeAvailable: ["37", "39", "39.5", "40", "41", "42", "43", "44", "45"],
    price: 1299.99,
    discount: {
      disc: true,
      Pct: 31,
      offPct: undefined,
    },
    hashtags: [
      "Nike",
      "Air",
      "Max",
      "Plus",
      "Preto",
      "Tênis",
      "Tênis Nike Air Max Plus",
      "Masculino",
      "Alto",
      "Verde",
      "casual",
      "Barato",
      "Promoção",
      "Estilo"
    ],
    depleted: false,
  },
  {
    id: 4,
    category: "Roupa",
    nameProduct: "Calça Jeans",
    type: "Sarja Cintura Alta",
    titleLink: "hno-calca-jeans",
    brand: "HNO",
    gender: "F",
    title: "HNO Jeans",
    description: "",
    mainImage: "images/calca-a-1.webp",
    secondaryImages: [
      {id: 0, link:"images/calca-a-1.webp"},
      {id: 1, link:"images/calca-a-2.webp"},
      {id: 2, link:"images/calca-a-3.webp"},
      {id: 3, link:"images/calca-a-4.webp"}
    ],
    predominantColor: ["Verde"],
    secondaryColor: [],
    sizeAvailable: ["34", "36", "40", "42", "44"],
    price: 199.90,
    discount: {
      disc: true,
      Pct: 50,
      offPct: new Date("2024-06-10"),
    },
    hashtags: [
      "calça",
      "Feminino",
      "Verde",
      "Calça curta",
      "Calça feminina",
      "Sarja Cintura Alta",
      "Estilo",
      "liquidação",
      "Apertada",
      "Sair",
      "Promoção",
      "Linda",
    ],
    depleted: false,
  },
  {
    id: 5,
    category: "Roupa",
    nameProduct: "Vestido",
    type: "FARM Midi Fenda",
    titleLink: "vestido-farm-midi",
    brand: "FARM",
    gender: "F",
    title: "Vestido FARM Midi",
    description: "Vestido FARM Midi Fenda Lateral Verde",
    mainImage: "images/vestido-a-1.webp",
    secondaryImages: [
      {id: 0, link:"images/vestido-a-1.webp"},
      {id: 1, link:"images/vestido-a-2.webp"},
    ],
    predominantColor: ["Verde", "Roxo"],
    secondaryColor: [
      "Vermelho",
      "Branco",
    ],
    sizeAvailable: ["PP", "P", "M", "G", "GG"],
    price: 629.00,
    discount: {
      disc: false,
      Pct: undefined,
      offPct: undefined,
    },
    hashtags: [
      "Vestido",
      "Feminino",
      "Verde",
      "Vestido Longo",
      "Vestido feminina",
      "Farma",
      "Lateral verde",
      "Colorido",
      "Esbotado",
      "Chama atenção",
      "Flores",
      "Vestido de Flores",
      "Linda",
    ],
    depleted: false,
  },




  
];
