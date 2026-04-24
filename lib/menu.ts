export type MenuBadge = "Popular" | "House Favorite" | "New" | null;
export type MenuCategory =
  | "Espresso Drinks"
  | "Cold Drinks"
  | "Pastries"
  | "Sandwiches";

export interface MenuItem {
  id: string;
  category: MenuCategory;
  name: string;
  description: string;
  price: number;
  badge: MenuBadge;
  pexelsId: number;
  emoji: string;
}

export const menuItems: MenuItem[] = [
  // ── Espresso Drinks ──────────────────────────────────────────────
  {
    id: "espresso",
    category: "Espresso Drinks",
    name: "Espresso",
    description: "Classic double shot pulled slow — rich crema, dark fruit finish",
    price: 3.5,
    badge: "House Favorite",
    pexelsId: 312418,
    emoji: "☕",
  },
  {
    id: "cortado",
    category: "Espresso Drinks",
    name: "Cortado",
    description: "Equal parts ristretto and warm whole milk. Balanced and never bitter",
    price: 4.25,
    badge: null,
    pexelsId: 1437318,
    emoji: "☕",
  },
  {
    id: "cappuccino",
    category: "Espresso Drinks",
    name: "Cappuccino",
    description: "Double shot topped with thick velvety microfoam and a dusting of cocoa",
    price: 4.75,
    badge: "Popular",
    pexelsId: 302899,
    emoji: "☕",
  },
  {
    id: "caramel-flat-white",
    category: "Espresso Drinks",
    name: "Caramel Flat White",
    description: "Two ristretto shots with steamed whole milk and our house-made caramel sauce",
    price: 5.5,
    badge: "Popular",
    pexelsId: 585753,
    emoji: "☕",
  },
  {
    id: "vanilla-latte",
    category: "Espresso Drinks",
    name: "Vanilla Latte",
    description: "Smooth double shot with steamed oat milk and Madagascar vanilla syrup",
    price: 5.25,
    badge: null,
    pexelsId: 1695052,
    emoji: "☕",
  },
  {
    id: "hazelnut-mocha",
    category: "Espresso Drinks",
    name: "Hazelnut Mocha",
    description: "Double shot with dark chocolate sauce, toasted hazelnut syrup, and steamed milk",
    price: 5.75,
    badge: "House Favorite",
    pexelsId: 3879495,
    emoji: "☕",
  },

  // ── Cold Drinks ───────────────────────────────────────────────────
  {
    id: "cold-brew",
    category: "Cold Drinks",
    name: "Cold Brew",
    description: "Steeped 18 hours and served over ice. Naturally sweet with a full-bodied finish",
    price: 5.0,
    badge: "Popular",
    pexelsId: 2638026,
    emoji: "🧋",
  },
  {
    id: "iced-caramel-latte",
    category: "Cold Drinks",
    name: "Iced Caramel Latte",
    description: "Espresso over ice with whole milk and a generous salted caramel drizzle",
    price: 5.5,
    badge: null,
    pexelsId: 4056535,
    emoji: "🧋",
  },
  {
    id: "strawberry-matcha-latte",
    category: "Cold Drinks",
    name: "Strawberry Matcha Latte",
    description: "Ceremonial grade matcha layered over strawberry cold foam and oat milk",
    price: 6.25,
    badge: "New",
    pexelsId: 5946574,
    emoji: "🍵",
  },
  {
    id: "chocolate-mudslide",
    category: "Cold Drinks",
    name: "Chocolate Mudslide",
    description: "Nutella blended with espresso, dark chocolate syrup, and oat milk — over ice",
    price: 6.75,
    badge: "House Favorite",
    pexelsId: 3727250,
    emoji: "🍫",
  },
  {
    id: "mango-cold-foam-lemonade",
    category: "Cold Drinks",
    name: "Mango Cold Foam Lemonade",
    description: "Fresh-squeezed lemonade topped with whipped mango cold foam and tajín",
    price: 5.75,
    badge: "New",
    pexelsId: 3683099,
    emoji: "🥭",
  },

  // ── Pastries ──────────────────────────────────────────────────────
  {
    id: "almond-croissant",
    category: "Pastries",
    name: "Almond Croissant",
    description: "Twice-baked with frangipane filling, topped with toasted flaked almonds",
    price: 4.5,
    badge: "Popular",
    pexelsId: 1510659,
    emoji: "🥐",
  },
  {
    id: "cardamom-morning-bun",
    category: "Pastries",
    name: "Cardamom Morning Bun",
    description: "Yeasted dough rolled in cinnamon-cardamom sugar with an orange zest glaze",
    price: 4.25,
    badge: "House Favorite",
    pexelsId: 3951306,
    emoji: "🌀",
  },
  {
    id: "dark-chocolate-brownie",
    category: "Pastries",
    name: "Dark Chocolate Brownie",
    description: "Dense single-origin cocoa brownie with a salted caramel swirl through the centre",
    price: 4.0,
    badge: null,
    pexelsId: 1414235,
    emoji: "🍫",
  },
  {
    id: "lemon-ricotta-muffin",
    category: "Pastries",
    name: "Lemon Ricotta Muffin",
    description: "Fluffy muffin with whipped lemon ricotta and a candied peel on top",
    price: 3.75,
    badge: null,
    pexelsId: 1603901,
    emoji: "🧁",
  },
  {
    id: "pistachio-knot",
    category: "Pastries",
    name: "Pistachio Knot",
    description: "Braided yeasted pastry filled with pistachio cream and finished with honey",
    price: 5.0,
    badge: "New",
    pexelsId: 3892882,
    emoji: "🌿",
  },

  // ── Sandwiches ────────────────────────────────────────────────────
  {
    id: "smoked-salmon-bagel",
    category: "Sandwiches",
    name: "Smoked Salmon Bagel",
    description: "Whipped cream cheese, cucumber, capers, red onion and dill on a toasted sesame bagel",
    price: 12.5,
    badge: "Popular",
    pexelsId: 1647163,
    emoji: "🥯",
  },
  {
    id: "avocado-egg-toast",
    category: "Sandwiches",
    name: "Avocado & Egg Toast",
    description: "Sourdough with smashed avocado, a jammy soft-boiled egg, chili flakes and microgreens",
    price: 11.0,
    badge: "House Favorite",
    pexelsId: 1640777,
    emoji: "🥑",
  },
  {
    id: "turkey-brie-melt",
    category: "Sandwiches",
    name: "Turkey & Brie Melt",
    description: "Sliced turkey, melted brie, fig jam and peppery arugula on pressed sourdough",
    price: 13.5,
    badge: null,
    pexelsId: 330489,
    emoji: "🥪",
  },
  {
    id: "caprese-panini",
    category: "Sandwiches",
    name: "Caprese Panini",
    description: "Fresh mozzarella, heirloom tomatoes, basil pesto and aged balsamic on ciabatta",
    price: 12.0,
    badge: null,
    pexelsId: 1565982,
    emoji: "🥪",
  },
];

export const categories: MenuCategory[] = [
  "Espresso Drinks",
  "Cold Drinks",
  "Pastries",
  "Sandwiches",
];

export const popularItems = menuItems.filter((i) => i.badge === "Popular");

export function categorySlug(cat: MenuCategory): string {
  return cat.toLowerCase().replace(/ /g, "-");
}
