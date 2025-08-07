import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getProductsByCategory } from "@/lib/products";

export default function PastriesPage() {
  const pastries = getProductsByCategory("Pastries");
  const categories = ["All", "Pastries"];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-cake-pink/10 to-cake-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Artisan Pastries
              </h1>
              <p className="text-xl text-muted-foreground">
                From delicate French macarons to flaky croissants, explore our
                collection of artisanal pastries and desserts crafted with
                traditional techniques.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <ProductCatalog
            products={pastries}
            categories={categories}
            title="Pastry Collection"
            description="Traditional techniques meet modern flavors in every bite"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
