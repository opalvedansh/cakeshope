import { Product } from "./types";

export const PRODUCTS: Product[] = [
  // Featured Products (existing)
  {
    id: 1,
    name: "Classic Chocolate Truffle",
    price: 45.99,
    originalPrice: 52.99,
    rating: 4.9,
    reviews: 127,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
    category: "Chocolate Cakes",
    description:
      "Rich, decadent chocolate truffle cake with layers of dark chocolate ganache and cocoa sponge.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Strawberry Dream Wedding Cake",
    price: 189.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
    category: "Wedding Cakes",
    description:
      "Elegant three-tier wedding cake with fresh strawberries and vanilla cream filling.",
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 3,
    name: "Red Velvet Cupcake Set",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description:
      "Set of 12 classic red velvet cupcakes with cream cheese frosting.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Vanilla Bean Birthday Cake",
    price: 38.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    category: "Birthday Cakes",
    description:
      "Classic vanilla bean cake with buttercream frosting, perfect for birthday celebrations.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 5,
    name: "Lemon Tart Collection",
    price: 32.99,
    originalPrice: 38.99,
    rating: 4.6,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Set of 6 mini lemon tarts with fresh lemon curd and meringue topping.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Chocolate Brownie Box",
    price: 19.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 178,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Box of 9 fudgy chocolate brownies with walnuts and chocolate chips.",
    isNew: true,
    isBestseller: true,
    inStock: true,
  },

  // Additional Cakes
  {
    id: 7,
    name: "Black Forest Gateau",
    price: 48.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop&crop=center",
    category: "Chocolate Cakes",
    description:
      "Traditional German cake with chocolate sponge, cherries, and whipped cream.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 8,
    name: "Elegant Rose Wedding Cake",
    price: 225.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=300&fit=crop&crop=center",
    category: "Wedding Cakes",
    description:
      "Three-tier wedding cake decorated with handcrafted sugar roses and gold accents.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 9,
    name: "Funfetti Birthday Blast",
    price: 35.99,
    originalPrice: 42.99,
    rating: 4.6,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=300&fit=crop&crop=center",
    category: "Birthday Cakes",
    description:
      "Colorful funfetti cake with rainbow sprinkles and vanilla buttercream.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 10,
    name: "Carrot Cake Supreme",
    price: 41.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=300&fit=crop&crop=center",
    category: "Specialty Cakes",
    description:
      "Moist carrot cake with walnuts, raisins, and cream cheese frosting.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },

  // Additional Cupcakes
  {
    id: 11,
    name: "Chocolate Mint Cupcakes",
    price: 27.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description:
      "Set of 12 chocolate cupcakes with mint buttercream and chocolate chips.",
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 12,
    name: "Vanilla Dream Cupcakes",
    price: 22.99,
    originalPrice: null,
    rating: 4.5,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description:
      "Set of 12 vanilla cupcakes with swirled vanilla buttercream frosting.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 13,
    name: "Lemon Blueberry Cupcakes",
    price: 29.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description:
      "Set of 12 lemon cupcakes with fresh blueberries and lemon cream cheese frosting.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 14,
    name: "Salted Caramel Cupcakes",
    price: 31.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description:
      "Set of 12 vanilla cupcakes with salted caramel buttercream and caramel drizzle.",
    isNew: true,
    isBestseller: true,
    inStock: true,
  },

  // Additional Pastries
  {
    id: 15,
    name: "French Macaron Tower",
    price: 45.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Elegant tower of 24 assorted French macarons in various flavors.",
    isNew: false,
    isBestseller: true,
    inStock: true,
  },
  {
    id: 16,
    name: "Croissant Assortment",
    price: 18.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Box of 8 fresh croissants - plain, almond, and chocolate varieties.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 17,
    name: "Fruit Danish Collection",
    price: 26.99,
    originalPrice: 31.99,
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Set of 6 Danish pastries with seasonal fruit toppings and cream cheese.",
    isNew: false,
    isBestseller: false,
    inStock: true,
  },
  {
    id: 18,
    name: "Éclair Variety Pack",
    price: 28.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 134,
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description:
      "Set of 6 éclairs with chocolate, vanilla, and coffee cream fillings.",
    isNew: true,
    isBestseller: false,
    inStock: true,
  },
];

export const getFeaturedProducts = () => PRODUCTS.slice(0, 4);
export const getProductById = (id: number) => PRODUCTS.find((p) => p.id === id);
export const getProductsByCategory = (category: string) => {
  if (category === "Cakes") {
    return PRODUCTS.filter(
      (p) =>
        p.category.includes("Cakes") ||
        p.category === "Chocolate Cakes" ||
        p.category === "Wedding Cakes" ||
        p.category === "Birthday Cakes" ||
        p.category === "Specialty Cakes",
    );
  }
  return PRODUCTS.filter((p) => p.category === category);
};

export const searchProducts = (query: string) =>
  PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      (p.description &&
        p.description.toLowerCase().includes(query.toLowerCase())),
  );

export const getCategories = () => {
  const categories = [...new Set(PRODUCTS.map((p) => p.category))];
  return categories;
};

export const getCakeCategories = () => [
  "All Cakes",
  "Wedding Cakes",
  "Birthday Cakes",
  "Chocolate Cakes",
  "Specialty Cakes",
];
