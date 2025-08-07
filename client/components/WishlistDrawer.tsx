import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { Heart, ShoppingCart, X, Package } from "lucide-react";
import { ReactNode } from "react";

interface WishlistDrawerProps {
  children: ReactNode;
}

export function WishlistDrawer({ children }: WishlistDrawerProps) {
  const { items, itemCount, removeItem, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleRemoveFromWishlist = (productId: number) => {
    removeItem(productId);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            Wishlist
            {itemCount > 0 && (
              <Badge variant="secondary" className="bg-cake-pink/10 text-cake-pink">
                {itemCount} item{itemCount !== 1 ? 's' : ''}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
              <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Your wishlist is empty</h3>
              <p className="text-sm text-muted-foreground mb-4">Save your favorite treats for later!</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex gap-3 p-3 rounded-lg border border-border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-16 w-16 rounded-md object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-foreground truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.product.category}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-baseline gap-1">
                            <span className="font-medium text-sm">
                              {formatPrice(item.product.price)}
                            </span>
                            {item.product.originalPrice && (
                              <span className="text-xs text-muted-foreground line-through">
                                {formatPrice(item.product.originalPrice)}
                              </span>
                            )}
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-destructive hover:text-destructive"
                            onClick={() => handleRemoveFromWishlist(item.product.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          size="sm"
                          className="w-full mt-2 bg-cake-pink hover:bg-cake-pink/90"
                          onClick={() => handleAddToCart(item.product)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={clearWishlist}
                  disabled={items.length === 0}
                >
                  Clear Wishlist
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
