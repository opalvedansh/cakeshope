import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cake, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-cake-pink/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="mx-auto h-16 w-16 rounded-full bg-cake-pink/10 flex items-center justify-center mb-4">
                    <Cake className="h-8 w-8 text-cake-pink" />
                  </div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
                  <p className="text-muted-foreground">{description}</p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    This page is currently being prepared with love, just like our cakes! 
                    Please check back soon or continue prompting to help us build this section.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                      </Link>
                    </Button>
                    <Button variant="default" className="bg-cake-pink hover:bg-cake-pink/90">
                      Contact Us for Updates
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PlaceholderPage;
