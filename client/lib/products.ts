import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Classic Chocolate Truffle",
    price: 45.99,
    originalPrice: 52.99,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop&crop=center",
    category: "Chocolate Cakes",
    description: "Rich, decadent chocolate truffle cake with layers of dark chocolate ganache and cocoa sponge.",
    isNew: false,
    isBestseller: true,
    inStock: true
  },
  {
    id: 2,
    name: "Strawberry Dream Wedding Cake",
    price: 189.99,
    originalPrice: null,
    rating: 5.0,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
    category: "Wedding Cakes",
    description: "Elegant three-tier wedding cake with fresh strawberries and vanilla cream filling.",
    isNew: true,
    isBestseller: false,
    inStock: true
  },
  {
    id: 3,
    name: "Red Velvet Cupcake Set",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=300&fit=crop&crop=center",
    category: "Cupcakes",
    description: "Set of 12 classic red velvet cupcakes with cream cheese frosting.",
    isNew: false,
    isBestseller: true,
    inStock: true
  },
  {
    id: 4,
    name: "Vanilla Bean Birthday Cake",
    price: 38.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
    category: "Birthday Cakes",
    description: "Classic vanilla bean cake with buttercream frosting, perfect for birthday celebrations.",
    isNew: false,
    isBestseller: false,
    inStock: true
  },
  {
    id: 5,
    name: "Lemon Tart Collection",
    price: 32.99,
    originalPrice: 38.99,
    rating: 4.6,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description: "Set of 6 mini lemon tarts with fresh lemon curd and meringue topping.",
    isNew: false,
    isBestseller: false,
    inStock: true
  },
  {
    id: 6,
    name: "Chocolate Brownie Box",
    price: 19.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop&crop=center",
    category: "Pastries",
    description: "Box of 9 fudgy chocolate brownies with walnuts and chocolate chips.",
    isNew: true,
    isBestseller: true,
    inStock: true
  }
];

export const getFeaturedProducts = () => PRODUCTS.slice(0, 4);
export const getProductById = (id: number) => PRODUCTS.find(p => p.id === id);
export const getProductsByCategory = (category: string) => PRODUCTS.filter(p => p.category === category);
export const searchProducts = (query: string) => 
  PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    (p.description && p.description.toLowerCase().includes(query.toLowerCase()))
  );
