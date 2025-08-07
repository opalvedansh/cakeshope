import { Link } from "react-router-dom";
import { ShoppingCart, Menu, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartDrawer } from "./CartDrawer";
import { SearchDialog } from "./SearchDialog";
import { WishlistDrawer } from "./WishlistDrawer";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export function Header() {
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-cake-pink flex items-center justify-center">
            <span className="text-white font-bold text-lg">🎂</span>
          </div>
          <span className="text-2xl font-bold text-cake-pink">Sweet Delights</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-cake-pink transition-colors font-medium">
            Home
          </Link>
          <Link to="/cakes" className="text-muted-foreground hover:text-cake-pink transition-colors">
            Cakes
          </Link>
          <Link to="/cupcakes" className="text-muted-foreground hover:text-cake-pink transition-colors">
            Cupcakes
          </Link>
          <Link to="/pastries" className="text-muted-foreground hover:text-cake-pink transition-colors">
            Pastries
          </Link>
          <Link to="/custom" className="text-muted-foreground hover:text-cake-pink transition-colors">
            Custom Orders
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-cake-pink transition-colors">
            About
          </Link>
        </nav>

        {/* Right side icons */}
        <div className="flex items-center space-x-4">
          <SearchDialog>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
          </SearchDialog>
          <WishlistDrawer>
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>
          </WishlistDrawer>
          <CartDrawer>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </CartDrawer>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
