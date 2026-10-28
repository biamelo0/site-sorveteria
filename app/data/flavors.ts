export interface Flavor {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  allergens: string;
  category: "Gelato" | "Sorbetto";
  scoopColor: string;
  scoopImage: string;
  detailImage: string;
  dietaryBadges: {
    label: string;
    sublabel: string;
    icon: "glutenFree" | "nonGmo" | "kosher" | "dairyFree" | "treeNut" | "vegan";
  }[];
}

export const FLAVORS: Flavor[] = [
  {
    id: "coconut-stracciatella",
    name: "COCO STRACCIATELLA",
    subtitle: "COM LASCAS DE CHOCOLATE MEIO-AMARGO",
    description:
      "Feito com ingredientes nobres rigorosamente selecionados por Nancy Silverton e sua equipe gastronômica. O leite fresco cria uma textura aveludada única, combinada perfeitamente com fios crocantes de chocolate meio-amargo.",
    allergens: "Alérgenos: Frutos de casca rija (coco). Não contém glúten.",
    category: "Gelato",
    scoopColor: "#e6e0d8",
    scoopImage: "/coconut-stracciatella.webp",
    detailImage: "/coconut-stracciatella.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
      { label: "COM", sublabel: "COCO", icon: "treeNut" },
    ],
  },
  {
    id: "pumpkin-brandy",
    name: "ABÓBORA COM BRANDY",
    subtitle: "COM REDUÇÃO DE BRANDY DA CALIFÓRNIA E ESPECIARIAS",
    description:
      "Abóboras doces assadas lentamente e incorporadas ao creme de leite fresco orgânico, aromatizadas com canela, noz-moscada ralada na hora e brandy da Califórnia envelhecido em barris de carvalho.",
    allergens: "Alérgenos: Contém Leite e Álcool.",
    category: "Gelato",
    scoopColor: "#c88548",
    scoopImage: "/pumpkin-brandy.webp",
    detailImage: "/pumpkin-brandy.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "butterscotch-budino",
    name: "BUTTERSCOTCH BUDINO",
    subtitle: "INSPIRADO NA SOBREMESA ICÔNICA DO OSTERIA MOZZA",
    description:
      "A lendária sobremesa de Nancy Silverton recriada em forma de gelato artesanal: caramelo toffee de açúcar mascavo escuro, flor de sal do Mediterrâneo e creme de leite aveludado.",
    allergens: "Alérgenos: Contém Leite.",
    category: "Gelato",
    scoopColor: "#b88958",
    scoopImage: "/butterscotch-budino.webp",
    detailImage: "/butterscotch-budino.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "passion-fruit",
    name: "MARACUJÁ TROPICAL",
    subtitle: "SORBETTO PURO DE MARACUJÁ NATURAL",
    description:
      "Néctar de maracujá maduro colhido no ponto ideal, batido lentamente em um sorbetto intensamente aromático e refrescante, com doçura cítrica marcante e sementes naturais.",
    allergens: "Alérgenos: Nenhum (Zero Lactose).",
    category: "Sorbetto",
    scoopColor: "#e6b349",
    scoopImage: "/passion-fruit.webp",
    detailImage: "/passion-fruit.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "SEM", sublabel: "LACTOSE", icon: "dairyFree" },
      { label: "100%", sublabel: "VEGANO", icon: "vegan" },
    ],
  },
  {
    id: "roasted-banana",
    name: "BANANA ASSADA COM BOURBON",
    subtitle: "COM TOQUE DE CARAMELO E BOURBON ENVELHECIDO",
    description:
      "Bananas maduras assadas na própria casca até caramelizarem por completo, mescladas com leite puro de fazenda e um suave toque de bourbon envelhecido.",
    allergens: "Alérgenos: Contém Leite e traços de álcool.",
    category: "Gelato",
    scoopColor: "#c9b69c",
    scoopImage: "/roasted-banana.webp",
    detailImage: "/roasted-banana.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "chocolate-fondente",
    name: "CHOCOLATE FONDENTE",
    subtitle: "CACAU MEIO-AMARGO 72% VALRHONA",
    description:
      "Uma experiência pura e intensa de chocolate nobre sem laticínios. O prestigiado cacau francês Valrhona entrega um sabor encorpado, aveludado e com notas sutis de frutas vermelhas.",
    allergens: "Alérgenos: Nenhum (Zero Lactose).",
    category: "Sorbetto",
    scoopColor: "#47281e",
    scoopImage: "/chocolate-fondente.webp",
    detailImage: "/chocolate-fondente.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "SEM", sublabel: "LACTOSE", icon: "dairyFree" },
      { label: "100%", sublabel: "VEGANO", icon: "vegan" },
    ],
  },
  {
    id: "amarena-cherry",
    name: "CEREJA AMARENA",
    subtitle: "COM CEREJAS SELVAGENS ITALIANAS CONFEITADAS",
    description:
      "Gelato suave de creme fior di latte com calda marmorizada de cerejas Amarena silvestres e pedaços inteiros da fruta importados diretamente de Bolonha, Itália.",
    allergens: "Alérgenos: Contém Leite.",
    category: "Gelato",
    scoopColor: "#d9cec1",
    scoopImage: "/amarena-cherry.webp",
    detailImage: "/amarena-cherry.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "salted-peanut-butter",
    name: "AMENDOIM COM FLOR DE SAL",
    subtitle: "COM PRALINÉ CROCANTE E FLOR DE SAL MALDON",
    description:
      "Amendoins torrados artesanalmente batidos em um gelato aveludado, equilibrado com cristais de flor de sal Maldon e crocante artesanal de praliné caramelizado.",
    allergens: "Alérgenos: Contém Amendoim e Leite.",
    category: "Gelato",
    scoopColor: "#b88a5d",
    scoopImage: "/salted-peanut-butter.webp",
    detailImage: "/salted-peanut-butter.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "rum-raisin",
    name: "RUM COM PASSAS",
    subtitle: "COM UVAS-PASSAS MACERADAS EM RUM DA JAMAICA",
    description:
      "Uvas-passas selecionadas maceradas durante semanas em rum escuro jamaicano de primeira linha, envolvidas em um creme de baunilha Bourbon de Madagascar.",
    allergens: "Alérgenos: Contém Leite e Álcool.",
    category: "Gelato",
    scoopColor: "#e0d7c3",
    scoopImage: "/rum-raisin.webp",
    detailImage: "/rum-raisin.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "spiced-stumptown-coffee",
    name: "CAFÉ STUMPTOWN COM ESPECIARIAS",
    subtitle: "COLD BREW COM CARDAMOMO E ANIS-ESTRELADO",
    description:
      "Criado em colaboração exclusiva com a renomada Stumptown Coffee Roasters: grãos de café de alta altitude infusionados a frio com cardamomo e anis-estrelado.",
    allergens: "Alérgenos: Contém Leite e Cafeína.",
    category: "Gelato",
    scoopColor: "#8f6745",
    scoopImage: "/spiced-stumptown-coffee.webp",
    detailImage: "/spiced-stumptown-coffee.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "KOSHER", sublabel: "LATICÍNIO", icon: "kosher" },
    ],
  },
  {
    id: "frutti-di-bosco",
    name: "FRUTAS DO BOSQUE",
    subtitle: "AMORA SILVESTRE, MIRTILO E FRAMBOESA",
    description:
      "Uma celebração das frutas vermelhas da floresta colhidas no auge da estação. Naturalmente refrescante, com cor rubi vibrante e equilíbrio perfeito entre doçura e acidez.",
    allergens: "Alérgenos: Nenhum (Zero Lactose).",
    category: "Sorbetto",
    scoopColor: "#842646",
    scoopImage: "/frutti-di-bosco.webp",
    detailImage: "/frutti-di-bosco.jpg",
    dietaryBadges: [
      { label: "SEM", sublabel: "GLÚTEN", icon: "glutenFree" },
      { label: "NÃO", sublabel: "TRANSGÊNICO", icon: "nonGmo" },
      { label: "SEM", sublabel: "LACTOSE", icon: "dairyFree" },
      { label: "100%", sublabel: "VEGANO", icon: "vegan" },
    ],
  },
];
