import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Star, ShoppingCart } from "lucide-react";
import { searchProducts } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { ReactNode } from "react";

interface SearchDialogProps {
  children: ReactNode;
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  
  const results = query.length > 0 ? searchProducts(query) : [];

  const handleAddToCart = (product: any) => {
    addItem(product);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search Products
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 flex-1 overflow-hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for cakes, cupcakes, pastries..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
              autoFocus
            />
          </div>
          
          {query.length > 0 && (
            <div className="overflow-y-auto flex-1">
              {results.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Found {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                  </p>
                  {results.map((product) => (
                    <div key={product.id} className="flex gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className="font-medium text-foreground truncate">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-1 ml-2">
                            {product.isNew && (
                              <Badge variant="secondary" className="bg-cake-gold/20 text-cake-brown text-xs">
                                New
                              </Badge>
                            )}
                            {product.isBestseller && (
                              <Badge variant="secondary" className="bg-cake-pink/20 text-cake-pink text-xs">
                                Bestseller
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-cake-gold text-cake-gold" />
                            <span className="text-xs text-muted-foreground">
                              {product.rating} ({product.reviews})
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="font-semibold text-foreground">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-cake-pink hover:bg-cake-pink/90 text-white"
                          onClick={() => handleAddToCart(product)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">
                    No products found for "{query}"
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try searching for "chocolate", "wedding", or "cupcakes"
                  </p>
                </div>
              )}
            </div>
          )}
          
          {query.length === 0 && (
            <div className="text-center py-8">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-sm text-muted-foreground">
                Start typing to search our delicious collection
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
