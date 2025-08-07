import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getProductsByCategory } from "@/lib/products";

export default function CupcakesPage() {
  const cupcakes = getProductsByCategory("Cupcakes");
  const categories = ["All", "Cupcakes"];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-cake-pink/10 to-cake-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Delightful Cupcakes
              </h1>
              <p className="text-xl text-muted-foreground">
                Perfect individual treats for any occasion. Our cupcakes are
                baked fresh daily with creative flavors and beautiful
                decorations.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <ProductCatalog
            products={cupcakes}
            categories={categories}
            title="Cupcake Collection"
            description="Individual treats perfect for sharing or savoring solo"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
