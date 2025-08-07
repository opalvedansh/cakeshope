import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCatalog } from "@/components/ProductCatalog";
import { getProductsByCategory, getCakeCategories } from "@/lib/products";

export default function CakesPage() {
  const cakes = getProductsByCategory("Cakes");
  const categories = getCakeCategories();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-cake-pink/10 to-cake-gold/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Our Cake Collection
              </h1>
              <p className="text-xl text-muted-foreground">
                From elegant wedding cakes to fun birthday celebrations,
                discover our handcrafted cakes made with premium ingredients and
                artistic flair.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <ProductCatalog
            products={cakes}
            categories={categories}
            title="Premium Cakes"
            description="Handcrafted with love using the finest ingredients"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
