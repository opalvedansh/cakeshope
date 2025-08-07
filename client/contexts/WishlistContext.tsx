import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { WishlistItem, Product } from '@/lib/types';

interface WishlistState {
  items: WishlistItem[];
  itemCount: number;
}

interface WishlistActions {
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearWishlist: () => void;
  isInWishlist: (productId: number) => boolean;
}

type WishlistContextType = WishlistState & WishlistActions;

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

type WishlistActionType =
  | { type: 'ADD_ITEM'; product: Product }
  | { type: 'REMOVE_ITEM'; productId: number }
  | { type: 'CLEAR_WISHLIST' }
  | { type: 'LOAD_WISHLIST'; items: WishlistItem[] };

const wishlistReducer = (state: WishlistState, action: WishlistActionType): WishlistState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.product.id === action.product.id);
      if (existingItem) {
        return state; // Item already in wishlist
      }
      
      const newItems = [...state.items, { product: action.product, addedAt: new Date() }];
      return { items: newItems, itemCount: newItems.length };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.product.id !== action.productId);
      return { items: newItems, itemCount: newItems.length };
    }
    
    case 'CLEAR_WISHLIST': {
      return { items: [], itemCount: 0 };
    }
    
    case 'LOAD_WISHLIST': {
      return { items: action.items, itemCount: action.items.length };
    }
    
    default:
      return state;
  }
};

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [state, dispatch] = useReducer(wishlistReducer, {
    items: [],
    itemCount: 0
  });

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('sweet-delights-wishlist');
    if (savedWishlist) {
      try {
        const items = JSON.parse(savedWishlist, (key, value) => {
          if (key === 'addedAt') return new Date(value);
          return value;
        }) as WishlistItem[];
        dispatch({ type: 'LOAD_WISHLIST', items });
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('sweet-delights-wishlist', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', product });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: 'REMOVE_ITEM', productId });
  };

  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };

  const isInWishlist = (productId: number) => {
    return state.items.some(item => item.product.id === productId);
  };

  const value: WishlistContextType = {
    ...state,
    addItem,
    removeItem,
    clearWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
