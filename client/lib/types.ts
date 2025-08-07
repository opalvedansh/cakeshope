export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description?: string;
  isNew: boolean;
  isBestseller: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}
