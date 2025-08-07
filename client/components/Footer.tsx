import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-cake-pink flex items-center justify-center">
                <span className="text-white font-bold text-lg">🎂</span>
              </div>
              <span className="text-xl font-bold text-cake-pink">Sweet Delights</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Crafting the most delicious and beautiful cakes for your special moments since 2015.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-cake-pink cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-cake-pink cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-cake-pink cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/cakes" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Wedding Cakes
              </Link>
              <Link to="/cakes" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Birthday Cakes
              </Link>
              <Link to="/cupcakes" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Cupcakes
              </Link>
              <Link to="/pastries" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Pastries
              </Link>
              <Link to="/custom" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Custom Orders
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Service</h3>
            <div className="space-y-2 text-sm">
              <Link to="/contact" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Contact Us
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                FAQ
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Returns
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-cake-pink transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cake-pink" />
                <span className="text-muted-foreground">123 Sweet Street, Bakery District, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cake-pink" />
                <span className="text-muted-foreground">(555) 123-CAKE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cake-pink" />
                <span className="text-muted-foreground">hello@sweetdelights.com</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Store Hours:</p>
              <p>Mon-Sat: 8AM - 8PM</p>
              <p>Sunday: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
