import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  Menu,
  Home,
  Cake,
  Coffee,
  Palette,
  Info,
  Phone,
  Heart,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/cakes", label: "Cakes", icon: Cake },
    { href: "/cupcakes", label: "Cupcakes", icon: Coffee },
    { href: "/pastries", label: "Pastries", icon: Coffee },
    { href: "/custom", label: "Custom Orders", icon: Palette },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-left">
            <div className="h-8 w-8 rounded-full bg-cake-pink flex items-center justify-center">
              <span className="text-white font-bold text-lg">🎂</span>
            </div>
            <span className="text-xl font-bold text-cake-pink">
              Sweet Delights
            </span>
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Quick Actions */}
          <div className="py-6">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-cake-pink text-cake-pink hover:bg-cake-pink/10"
                onClick={handleLinkClick}
              >
                <Heart className="h-4 w-4" />
                Wishlist
                {wishlistCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-cake-pink/20 text-cake-pink"
                  >
                    {wishlistCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-cake-pink text-cake-pink hover:bg-cake-pink/10"
                onClick={handleLinkClick}
              >
                <ShoppingCart className="h-4 w-4" />
                Cart
                {itemCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="ml-auto bg-cake-pink/20 text-cake-pink"
                  >
                    {itemCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>

          <Separator />

          {/* Navigation Links */}
          <nav className="flex-1 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-foreground hover:bg-cake-pink/10 hover:text-cake-pink transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>

          <Separator />

          {/* Contact Info */}
          <div className="py-6">
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">Store Hours</p>
                <p className="text-muted-foreground">Mon-Sat: 8AM - 8PM</p>
                <p className="text-muted-foreground">Sunday: 9AM - 6PM</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Phone</p>
                <p className="text-muted-foreground">(555) 123-CAKE</p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
