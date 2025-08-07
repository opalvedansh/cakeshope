import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Clock, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedProducts } from "@/lib/products";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

export default function Index() {
  const featuredCakes = getFeaturedProducts();
  const { addItem } = useCart();
  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const handleAddToCart = (product: any) => {
    addItem(product);
  };

  const handleToggleWishlist = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const categories = [
    {
      name: "Wedding Cakes",
      description: "Elegant designs for your special day",
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop&crop=center",
      link: "/cakes",
    },
    {
      name: "Birthday Cakes",
      description: "Make every birthday memorable",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
      link: "/cakes",
    },
    {
      name: "Cupcakes",
      description: "Perfect individual treats",
      image:
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=200&fit=crop&crop=center",
      link: "/cupcakes",
    },
    {
      name: "Custom Orders",
      description: "Bring your vision to life",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&crop=center",
      link: "/custom",
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cake-white via-cake-cream/30 to-cake-gold/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-cake-pink/10 text-cake-pink border-cake-pink/20"
                >
                  ✨ Fresh Baked Daily
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Sweet Moments
                  <span className="text-cake-pink block">Made Perfect</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover our handcrafted cakes, cupcakes, and pastries made
                  with the finest ingredients and lots of love. Every bite tells
                  a story of tradition and excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-cake-pink hover:bg-cake-pink/90 text-white px-8 py-3 text-lg"
                >
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cake-pink text-cake-pink hover:bg-cake-pink/10 px-8 py-3 text-lg"
                >
                  Custom Orders
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex text-cake-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    4.9/5 from 500+ reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-cake-pink/10 rounded-3xl rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&crop=center"
                alt="Beautiful chocolate cake"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-cake-pink/20">
                <div className="flex items-center space-x-3">
                  <Clock className="h-8 w-8 text-cake-pink" />
                  <div>
                    <p className="font-semibold text-foreground">
                      Same Day Delivery
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Order before 2 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-2">
                <Users className="h-8 w-8 text-cake-pink mx-auto" />
              </div>
              <div className="text-3xl font-bold text-foreground">10,000+</div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <Award className="h-8 w-8 text-cake-pink mx-auto" />
              </div>
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <Clock className="h-8 w-8 text-cake-pink mx-auto" />
              </div>
              <div className="text-3xl font-bold text-foreground">9</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2">
                <Star className="h-8 w-8 text-cake-pink mx-auto" />
              </div>
              <div className="text-3xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Delights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and beloved creations, crafted with
              premium ingredients and artistic flair.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCakes.map((cake) => (
              <Card
                key={cake.id}
                className="group hover:shadow-lg transition-all duration-300 border-cake-pink/20 hover:border-cake-pink/40"
              >
                <div className="relative">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    {cake.isNew && (
                      <Badge className="bg-cake-gold text-cake-brown">
                        New
                      </Badge>
                    )}
                    {cake.isBestseller && (
                      <Badge className="bg-cake-pink text-white">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className={cn(
                      "absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white",
                      isInWishlist(cake.id) &&
                        "opacity-100 bg-cake-pink/90 text-white hover:bg-cake-pink",
                    )}
                    onClick={() => handleToggleWishlist(cake)}
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4",
                        isInWishlist(cake.id) && "fill-current",
                      )}
                    />
                  </Button>
                </div>

                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="text-xs text-cake-pink border-cake-pink/30"
                    >
                      {cake.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-cake-pink transition-colors">
                      {cake.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <div className="flex text-cake-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {cake.rating} ({cake.reviews})
                      </span>
                    </div>
                    <div className="flex items-start justify-start space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        ${cake.price}
                      </span>
                      {cake.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {cake.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button
                    className="flex-1 bg-cake-pink hover:bg-cake-pink/90 text-white"
                    onClick={() => handleAddToCart(cake)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={cn(
                      "border-cake-pink text-cake-pink hover:bg-cake-pink/10 shrink-0",
                      isInWishlist(cake.id) &&
                        "bg-cake-pink text-white hover:bg-cake-pink/90",
                    )}
                    onClick={() => handleToggleWishlist(cake)}
                    title={
                      isInWishlist(cake.id)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                  >
                    <Heart
                      className={cn(
                        "h-4 w-4",
                        isInWishlist(cake.id) && "fill-current",
                      )}
                    />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-cake-pink text-cake-pink hover:bg-cake-pink/10"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From intimate celebrations to grand occasions, we have the perfect
              sweet treats for every moment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-cake-pink/20 hover:border-cake-pink/40 overflow-hidden">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-cake-pink transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
