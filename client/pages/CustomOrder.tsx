import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  ChefHat,
  Clock,
  Palette,
  Layers,
  ShoppingCart,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CustomOrderData {
  cakeType: string;
  size: string;
  flavor: string;
  filling: string[];
  frosting: string;
  decorations: string[];
  colors: string[];
  message: string;
  specialInstructions: string;
  servings: number;
  deliveryDate: string;
}

export default function CustomOrder() {
  const { addItem } = useCart();
  const [orderData, setOrderData] = useState<CustomOrderData>({
    cakeType: "",
    size: "",
    flavor: "",
    filling: [],
    frosting: "",
    decorations: [],
    colors: [],
    message: "",
    specialInstructions: "",
    servings: 12,
    deliveryDate: "",
  });

  const cakeTypes = [
    {
      id: "round",
      name: "Round Cake",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    },
    {
      id: "square",
      name: "Square Cake",
      price: 50,
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    },
    {
      id: "tiered",
      name: "Tiered Cake",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=200&fit=crop",
    },
    {
      id: "cupcakes",
      name: "Cupcake Set (12)",
      price: 36,
      image:
        "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=300&h=200&fit=crop",
    },
  ];

  const sizes = [
    { id: "6inch", name: "6 inch", servings: "6-8", price: 0 },
    { id: "8inch", name: "8 inch", servings: "12-15", price: 15 },
    { id: "10inch", name: "10 inch", servings: "20-25", price: 30 },
    { id: "12inch", name: "12 inch", servings: "30-35", price: 50 },
  ];

  const flavors = [
    { id: "vanilla", name: "Classic Vanilla", price: 0, popular: true },
    { id: "chocolate", name: "Rich Chocolate", price: 5, popular: true },
    { id: "strawberry", name: "Fresh Strawberry", price: 8 },
    { id: "red-velvet", name: "Red Velvet", price: 10, popular: true },
    { id: "lemon", name: "Zesty Lemon", price: 8 },
    { id: "carrot", name: "Spiced Carrot", price: 12 },
    { id: "coffee", name: "Mocha Coffee", price: 10 },
    { id: "coconut", name: "Tropical Coconut", price: 12 },
  ];

  const fillings = [
    { id: "buttercream", name: "Vanilla Buttercream", price: 0 },
    { id: "chocolate-ganache", name: "Chocolate Ganache", price: 8 },
    { id: "fruit-compote", name: "Fresh Fruit Compote", price: 10 },
    { id: "cream-cheese", name: "Cream Cheese", price: 6 },
    { id: "caramel", name: "Salted Caramel", price: 12 },
    { id: "nutella", name: "Nutella", price: 15 },
  ];

  const frostings = [
    { id: "buttercream", name: "Classic Buttercream", price: 0 },
    { id: "cream-cheese", name: "Cream Cheese Frosting", price: 8 },
    { id: "whipped", name: "Whipped Cream", price: 5 },
    { id: "fondant", name: "Smooth Fondant", price: 20 },
    { id: "ganache", name: "Chocolate Ganache", price: 15 },
  ];

  const decorations = [
    { id: "flowers", name: "Fresh Flowers", price: 25 },
    { id: "berries", name: "Fresh Berries", price: 15 },
    { id: "chocolate-drip", name: "Chocolate Drip", price: 12 },
    { id: "gold-leaf", name: "Edible Gold Leaf", price: 30 },
    { id: "macarons", name: "Macarons", price: 20 },
    { id: "sprinkles", name: "Premium Sprinkles", price: 5 },
  ];

  const colors = [
    { id: "pink", name: "Blush Pink", hex: "#FFB6C1" },
    { id: "blue", name: "Sky Blue", hex: "#87CEEB" },
    { id: "lavender", name: "Lavender", hex: "#E6E6FA" },
    { id: "gold", name: "Gold", hex: "#FFD700" },
    { id: "white", name: "Pure White", hex: "#FFFFFF" },
    { id: "mint", name: "Mint Green", hex: "#98FB98" },
  ];

  const calculatePrice = () => {
    let total = 0;

    // Base cake price
    const selectedCakeType = cakeTypes.find(
      (type) => type.id === orderData.cakeType,
    );
    if (selectedCakeType) total += selectedCakeType.price;

    // Size price
    const selectedSize = sizes.find((size) => size.id === orderData.size);
    if (selectedSize) total += selectedSize.price;

    // Flavor price
    const selectedFlavor = flavors.find(
      (flavor) => flavor.id === orderData.flavor,
    );
    if (selectedFlavor) total += selectedFlavor.price;

    // Fillings price
    orderData.filling.forEach((fillingId) => {
      const filling = fillings.find((f) => f.id === fillingId);
      if (filling) total += filling.price;
    });

    // Frosting price
    const selectedFrosting = frostings.find(
      (frosting) => frosting.id === orderData.frosting,
    );
    if (selectedFrosting) total += selectedFrosting.price;

    // Decorations price
    orderData.decorations.forEach((decorationId) => {
      const decoration = decorations.find((d) => d.id === decorationId);
      if (decoration) total += decoration.price;
    });

    return total;
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: Date.now(), // Unique ID for custom order
      name: `Custom ${cakeTypes.find((t) => t.id === orderData.cakeType)?.name || "Cake"}`,
      price: calculatePrice(),
      rating: 5.0,
      reviews: 0,
      image: cakeTypes.find((t) => t.id === orderData.cakeType)?.image || "",
      category: "Custom Orders",
      description: `Custom cake with ${flavors.find((f) => f.id === orderData.flavor)?.name} flavor`,
      isNew: true,
      isBestseller: false,
      inStock: true,
    };

    addItem(customProduct);
  };

  const updateOrderData = (field: keyof CustomOrderData, value: any) => {
    setOrderData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleArrayField = (
    field: "filling" | "decorations" | "colors",
    value: string,
  ) => {
    setOrderData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-cake-pink/10 to-cake-gold/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <ChefHat className="h-12 w-12 sm:h-16 sm:w-16 text-cake-pink mx-auto mb-4" />
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Create Your Dream Cake
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Design a completely custom cake with your choice of flavors,
                  decorations, and special touches. Our master bakers will bring
                  your vision to life.
                </p>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cake-pink" />
                  <span>48-72 hour preparation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-cake-gold" />
                  <span>Master baker crafted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-6 sm:py-12">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Step 1: Cake Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-cake-pink" />
                    Step 1: Choose Your Cake Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cakeTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`relative rounded-lg border-2 cursor-pointer transition-all ${
                          orderData.cakeType === type.id
                            ? "border-cake-pink bg-cake-pink/5"
                            : "border-border hover:border-cake-pink/50"
                        }`}
                        onClick={() => updateOrderData("cakeType", type.id)}
                      >
                        <img
                          src={type.image}
                          alt={type.name}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold">{type.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Starting at ${type.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Step 2: Size */}
              {orderData.cakeType && orderData.cakeType !== "cupcakes" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 2: Select Size</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={orderData.size}
                      onValueChange={(value) => updateOrderData("size", value)}
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        {sizes.map((size) => (
                          <div
                            key={size.id}
                            className="flex items-center space-x-2 p-4 rounded-lg border"
                          >
                            <RadioGroupItem value={size.id} id={size.id} />
                            <Label
                              htmlFor={size.id}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="font-medium">{size.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    Serves {size.servings}
                                  </div>
                                </div>
                                <div className="font-semibold">
                                  {size.price > 0
                                    ? `+$${size.price}`
                                    : "Base price"}
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Flavor */}
              {orderData.cakeType && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 3: Choose Your Flavor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={orderData.flavor}
                      onValueChange={(value) =>
                        updateOrderData("flavor", value)
                      }
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        {flavors.map((flavor) => (
                          <div
                            key={flavor.id}
                            className="flex items-center space-x-2 p-4 rounded-lg border"
                          >
                            <RadioGroupItem value={flavor.id} id={flavor.id} />
                            <Label
                              htmlFor={flavor.id}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {flavor.name}
                                  </span>
                                  {flavor.popular && (
                                    <Badge
                                      variant="secondary"
                                      className="bg-cake-gold/20 text-cake-brown text-xs"
                                    >
                                      Popular
                                    </Badge>
                                  )}
                                </div>
                                <div className="font-semibold">
                                  {flavor.price > 0
                                    ? `+$${flavor.price}`
                                    : "Included"}
                                </div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Fillings */}
              {orderData.flavor && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 4: Add Fillings (Optional)</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Select multiple fillings for extra flavor layers
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {fillings.map((filling) => (
                        <div
                          key={filling.id}
                          className="flex items-center space-x-2 p-4 rounded-lg border"
                        >
                          <Checkbox
                            id={filling.id}
                            checked={orderData.filling.includes(filling.id)}
                            onCheckedChange={() =>
                              toggleArrayField("filling", filling.id)
                            }
                          />
                          <Label
                            htmlFor={filling.id}
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                {filling.name}
                              </span>
                              <span className="font-semibold">
                                {filling.price > 0
                                  ? `+$${filling.price}`
                                  : "Free"}
                              </span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 5: Frosting */}
              {orderData.flavor && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 5: Choose Frosting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={orderData.frosting}
                      onValueChange={(value) =>
                        updateOrderData("frosting", value)
                      }
                    >
                      <div className="space-y-3">
                        {frostings.map((frosting) => (
                          <div
                            key={frosting.id}
                            className="flex items-center space-x-2 p-4 rounded-lg border"
                          >
                            <RadioGroupItem
                              value={frosting.id}
                              id={frosting.id}
                            />
                            <Label
                              htmlFor={frosting.id}
                              className="flex-1 cursor-pointer"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-medium">
                                  {frosting.name}
                                </span>
                                <span className="font-semibold">
                                  {frosting.price > 0
                                    ? `+$${frosting.price}`
                                    : "Included"}
                                </span>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              )}

              {/* Step 6: Decorations */}
              {orderData.frosting && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5 text-cake-pink" />
                      Step 6: Add Decorations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {decorations.map((decoration) => (
                        <div
                          key={decoration.id}
                          className="flex items-center space-x-2 p-4 rounded-lg border"
                        >
                          <Checkbox
                            id={decoration.id}
                            checked={orderData.decorations.includes(
                              decoration.id,
                            )}
                            onCheckedChange={() =>
                              toggleArrayField("decorations", decoration.id)
                            }
                          />
                          <Label
                            htmlFor={decoration.id}
                            className="flex-1 cursor-pointer"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium">
                                {decoration.name}
                              </span>
                              <span className="font-semibold">
                                +${decoration.price}
                              </span>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 7: Colors */}
              {orderData.frosting && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 7: Choose Colors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                      {colors.map((color) => (
                        <div
                          key={color.id}
                          className={`relative p-4 rounded-lg border-2 cursor-pointer text-center transition-all ${
                            orderData.colors.includes(color.id)
                              ? "border-cake-pink bg-cake-pink/5"
                              : "border-border hover:border-cake-pink/50"
                          }`}
                          onClick={() => toggleArrayField("colors", color.id)}
                        >
                          <div
                            className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-gray-200"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-xs font-medium">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 8: Personal Message */}
              {orderData.frosting && (
                <Card>
                  <CardHeader>
                    <CardTitle>Step 8: Personal Message (Optional)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="message">
                        Message on cake (e.g., "Happy Birthday Sarah!")
                      </Label>
                      <Input
                        id="message"
                        value={orderData.message}
                        onChange={(e) =>
                          updateOrderData("message", e.target.value)
                        }
                        placeholder="Enter your message..."
                        maxLength={50}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {orderData.message.length}/50 characters
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Textarea
                        id="instructions"
                        value={orderData.specialInstructions}
                        onChange={(e) =>
                          updateOrderData("specialInstructions", e.target.value)
                        }
                        placeholder="Any special requests, dietary restrictions, or design details..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="delivery-date">
                        Preferred Delivery Date
                      </Label>
                      <Input
                        id="delivery-date"
                        type="date"
                        value={orderData.deliveryDate}
                        onChange={(e) =>
                          updateOrderData("deliveryDate", e.target.value)
                        }
                        min={
                          new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
                            .toISOString()
                            .split("T")[0]
                        }
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Minimum 3 days advance notice required
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderData.cakeType && (
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Base Cake</span>
                        <span>
                          $
                          {cakeTypes.find((t) => t.id === orderData.cakeType)
                            ?.price || 0}
                        </span>
                      </div>

                      {orderData.size && (
                        <div className="flex justify-between">
                          <span>
                            Size (
                            {sizes.find((s) => s.id === orderData.size)?.name})
                          </span>
                          <span>
                            +$
                            {sizes.find((s) => s.id === orderData.size)
                              ?.price || 0}
                          </span>
                        </div>
                      )}

                      {orderData.flavor && (
                        <div className="flex justify-between">
                          <span>Flavor</span>
                          <span>
                            +$
                            {flavors.find((f) => f.id === orderData.flavor)
                              ?.price || 0}
                          </span>
                        </div>
                      )}

                      {orderData.filling.length > 0 && (
                        <div className="flex justify-between">
                          <span>Fillings ({orderData.filling.length})</span>
                          <span>
                            +$
                            {orderData.filling.reduce((sum, fillingId) => {
                              const filling = fillings.find(
                                (f) => f.id === fillingId,
                              );
                              return sum + (filling?.price || 0);
                            }, 0)}
                          </span>
                        </div>
                      )}

                      {orderData.frosting && (
                        <div className="flex justify-between">
                          <span>Frosting</span>
                          <span>
                            +$
                            {frostings.find((f) => f.id === orderData.frosting)
                              ?.price || 0}
                          </span>
                        </div>
                      )}

                      {orderData.decorations.length > 0 && (
                        <div className="flex justify-between">
                          <span>
                            Decorations ({orderData.decorations.length})
                          </span>
                          <span>
                            +$
                            {orderData.decorations.reduce(
                              (sum, decorationId) => {
                                const decoration = decorations.find(
                                  (d) => d.id === decorationId,
                                );
                                return sum + (decoration?.price || 0);
                              },
                              0,
                            )}
                          </span>
                        </div>
                      )}

                      <Separator />

                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-cake-pink">
                          ${calculatePrice()}
                        </span>
                      </div>

                      <Button
                        className="w-full bg-cake-pink hover:bg-cake-pink/90"
                        onClick={handleAddToCart}
                        disabled={
                          !orderData.cakeType ||
                          !orderData.flavor ||
                          !orderData.frosting
                        }
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>

                      <div className="text-xs text-muted-foreground text-center">
                        Final price may vary based on complexity. We'll contact
                        you to confirm details and pricing.
                      </div>
                    </div>
                  )}

                  {!orderData.cakeType && (
                    <div className="text-center text-muted-foreground py-8">
                      <ChefHat className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                      <p>Start designing your cake to see the price</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
