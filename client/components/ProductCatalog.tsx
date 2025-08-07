import { useState, useMemo } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  Heart,
  ShoppingCart,
  Search,
  Filter,
  Grid,
  List,
} from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

interface ProductCatalogProps {
  products: Product[];
  categories: string[];
  title: string;
  description: string;
}

type SortOption = "name" | "price-low" | "price-high" | "rating" | "newest";
type ViewMode = "grid" | "list";

export function ProductCatalog({
  products,
  categories,
  title,
  description,
}: ProductCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const { addItem } = useCart();
  const {
    addItem: addToWishlist,
    removeItem: removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product.description &&
            product.description
              .toLowerCase()
              .includes(searchQuery.toLowerCase())),
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      if (selectedCategory === "All Cakes") {
        filtered = filtered.filter(
          (product) =>
            product.category.includes("Cakes") ||
            product.category === "Chocolate Cakes" ||
            product.category === "Wedding Cakes" ||
            product.category === "Birthday Cakes" ||
            product.category === "Specialty Cakes",
        );
      } else {
        filtered = filtered.filter(
          (product) => product.category === selectedCategory,
        );
      }
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  const handleToggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const formatPrice = (price: number) => `$${price.toFixed(2)}`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Filters and Search */}
      <div className="bg-muted/30 rounded-lg p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-end">
          {/* Search */}
          <div className="sm:col-span-2 md:col-span-2">
            <label className="text-sm font-medium text-foreground mb-2 block">
              Search Products
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cakes, flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Category
            </label>
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Products</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Sort By
            </label>
            <Select
              value={sortBy}
              onValueChange={(value: SortOption) => setSortBy(value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Mode */}
          <div className="sm:col-span-2 md:col-span-1">
            <label className="text-sm font-medium text-foreground mb-2 block">
              View
            </label>
            <div className="flex gap-2 sm:justify-center md:justify-start">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-cake-pink hover:bg-cake-pink/90"
                    : ""
                }
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-cake-pink hover:bg-cake-pink/90"
                    : ""
                }
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredAndSortedProducts.length} of {products.length}{" "}
            products
          </p>
          {(searchQuery || selectedCategory !== "All") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="text-cake-pink hover:text-cake-pink/80"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      {/* Products Grid/List */}
      {filteredAndSortedProducts.length > 0 ? (
        <div
          className={cn(
            viewMode === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4",
          )}
        >
          {filteredAndSortedProducts.map((product) => (
            <Card
              key={product.id}
              className={cn(
                "group hover:shadow-lg transition-all duration-300 border-cake-pink/20 hover:border-cake-pink/40",
                viewMode === "list" && "flex flex-row overflow-hidden",
              )}
            >
              <div
                className={cn(
                  "relative",
                  viewMode === "list" ? "w-48 flex-shrink-0" : "",
                )}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={cn(
                    "object-cover",
                    viewMode === "grid"
                      ? "w-full h-48 rounded-t-lg"
                      : "w-full h-full",
                  )}
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-cake-gold text-cake-brown">New</Badge>
                  )}
                  {product.isBestseller && (
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
                    isInWishlist(product.id) &&
                      "opacity-100 bg-cake-pink/90 text-white hover:bg-cake-pink",
                  )}
                  onClick={() => handleToggleWishlist(product)}
                >
                  <Heart
                    className={cn(
                      "h-4 w-4",
                      isInWishlist(product.id) && "fill-current",
                    )}
                  />
                </Button>
              </div>

              <div
                className={cn(
                  "flex flex-col",
                  viewMode === "list" ? "flex-1 p-4" : "",
                )}
              >
                <CardContent
                  className={cn(viewMode === "grid" ? "p-4" : "p-0 flex-1")}
                >
                  <div className="space-y-2">
                    <Badge
                      variant="outline"
                      className="text-xs text-cake-pink border-cake-pink/30"
                    >
                      {product.category}
                    </Badge>
                    <h3 className="font-semibold text-foreground group-hover:text-cake-pink transition-colors">
                      {product.name}
                    </h3>
                    {viewMode === "list" && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    <div className="flex items-center space-x-1">
                      <div className="flex text-cake-gold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-start justify-start space-x-2">
                      <span className="text-lg font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter
                  className={cn(
                    "flex gap-2",
                    viewMode === "grid" ? "p-4 pt-0" : "p-0 mt-4",
                  )}
                >
                  <Button
                    className="flex-1 bg-cake-pink hover:bg-cake-pink/90 text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  {viewMode === "list" && (
                    <Button
                      variant="outline"
                      size="icon"
                      className={cn(
                        "border-cake-pink text-cake-pink hover:bg-cake-pink/10 shrink-0",
                        isInWishlist(product.id) &&
                          "bg-cake-pink text-white hover:bg-cake-pink/90",
                      )}
                      onClick={() => handleToggleWishlist(product)}
                    >
                      <Heart
                        className={cn(
                          "h-4 w-4",
                          isInWishlist(product.id) && "fill-current",
                        )}
                      />
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No products found
          </h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search or filter criteria
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
}
