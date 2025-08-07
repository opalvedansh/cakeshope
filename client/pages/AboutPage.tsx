import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  Award,
  Users,
  ChefHat,
  Star,
  Calendar,
  Shield,
  Truck,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    {
      icon: Users,
      label: "Happy Customers",
      value: "10,000+",
      color: "text-cake-pink",
    },
    { icon: Award, label: "Awards Won", value: "50+", color: "text-cake-gold" },
    {
      icon: Calendar,
      label: "Years Experience",
      value: "9",
      color: "text-cake-brown",
    },
    {
      icon: Star,
      label: "Average Rating",
      value: "4.9",
      color: "text-cake-gold",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Every cake is crafted with passion and attention to detail, ensuring each bite brings joy to your special moments.",
    },
    {
      icon: Shield,
      title: "Quality Ingredients",
      description:
        "We source only the finest, premium ingredients to create cakes that not only look beautiful but taste exceptional.",
    },
    {
      icon: ChefHat,
      title: "Expert Craftsmanship",
      description:
        "Our master bakers bring years of experience and artistic flair to every creation, from simple cupcakes to elaborate wedding cakes.",
    },
    {
      icon: Truck,
      title: "Fresh Daily",
      description:
        "All our products are baked fresh daily using traditional techniques combined with modern innovation.",
    },
  ];

  const team = [
    {
      name: "Maria Rodriguez",
      role: "Master Baker & Owner",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0101ba9e8c1?w=300&h=300&fit=crop&crop=face",
      description:
        "With 15 years of experience in pastry arts, Maria founded Sweet Delights to bring artisanal baking to the community.",
    },
    {
      name: "James Wilson",
      role: "Head Decorator",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description:
        "James specializes in custom cake designs and has won multiple awards for his creative and stunning decorations.",
    },
    {
      name: "Sophie Chen",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5aa?w=300&h=300&fit=crop&crop=face",
      description:
        "Sophie brings innovation to traditional recipes, creating unique flavors that have become customer favorites.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-cake-white to-cake-cream/20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-cake-pink/10 via-cake-cream/20 to-cake-gold/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge
                    variant="secondary"
                    className="bg-cake-pink/10 text-cake-pink border-cake-pink/20"
                  >
                    ✨ Since 2015
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    About
                    <span className="text-cake-pink block">Sweet Delights</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Born from a passion for baking and a love for bringing joy
                    to life's sweetest moments, Sweet Delights has been crafting
                    exceptional cakes and pastries for nearly a decade.
                  </p>
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
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                  alt="Sweet Delights bakery interior"
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2">
                    <stat.icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground">
                  From humble beginnings to becoming the neighborhood's favorite
                  bakery
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Sweet Delights began in 2015 when Maria Rodriguez, a
                    passionate baker with dreams bigger than her small kitchen,
                    decided to share her family's traditional recipes with the
                    world. What started as weekend farmers market visits quickly
                    grew into something magical.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Located in the heart of the Bakery District, our shop has
                    become a cornerstone of the community. We've celebrated
                    thousands of birthdays, weddings, anniversaries, and
                    everyday moments with our handcrafted cakes and pastries.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we're proud to be a family-owned business that
                    combines time-honored baking traditions with modern
                    innovation, creating unique flavors and designs that bring
                    smiles to faces and sweetness to life's most precious
                    moments.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=500&h=400&fit=crop"
                    alt="Maria Rodriguez baking"
                    className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-cake-pink/20">
                    <div className="text-center">
                      <p className="font-semibold text-foreground">Founded</p>
                      <p className="text-2xl font-bold text-cake-pink">2015</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values guide everything we do, from selecting
                ingredients to serving our customers
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-cake-pink/20">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <value.icon className="h-12 w-12 text-cake-pink mx-auto" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The talented bakers and artists behind every Sweet Delights
                creation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-cake-pink/20">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-foreground text-lg">
                      {member.name}
                    </h3>
                    <p className="text-cake-pink font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Contact */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Visit Our Bakery
              </h2>
              <p className="text-lg text-muted-foreground">
                Come experience the magic in person at our cozy bakery in the
                heart of the city
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="border-cake-pink/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-cake-pink" />
                      Location & Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-cake-pink mt-1" />
                        <div>
                          <p className="font-medium text-foreground">
                            Sweet Delights Bakery
                          </p>
                          <p className="text-muted-foreground">
                            123 Sweet Street
                          </p>
                          <p className="text-muted-foreground">
                            Bakery District, NY 10001
                          </p>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-cake-pink mt-1" />
                        <div>
                          <p className="font-medium text-foreground mb-2">
                            Store Hours
                          </p>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>
                              <span className="font-medium">
                                Monday - Saturday:
                              </span>{" "}
                              8:00 AM - 8:00 PM
                            </p>
                            <p>
                              <span className="font-medium">Sunday:</span> 9:00
                              AM - 6:00 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-cake-pink/20">
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-cake-pink" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <p className="text-muted-foreground">(555) 123-CAKE</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-cake-pink" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-muted-foreground">
                          hello@sweetdelights.com
                        </p>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <p className="font-medium text-foreground">Follow Us</p>
                      <div className="flex space-x-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cake-pink text-cake-pink hover:bg-cake-pink/10"
                        >
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cake-pink text-cake-pink hover:bg-cake-pink/10"
                        >
                          Instagram
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-cake-pink text-cake-pink hover:bg-cake-pink/10"
                        >
                          Twitter
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map/Image */}
              <div className="space-y-6">
                <Card className="border-cake-pink/20">
                  <CardContent className="p-0">
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop"
                        alt="Sweet Delights storefront"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold">
                          Our Beautiful Storefront
                        </p>
                        <p className="text-sm opacity-90">
                          Welcome to Sweet Delights!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-cake-pink/20 bg-cake-pink/5">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Planning a Visit?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      For custom orders and wedding consultations, we recommend
                      scheduling an appointment to ensure we can give you our
                      full attention.
                    </p>
                    <Button className="bg-cake-pink hover:bg-cake-pink/90">
                      Schedule Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
