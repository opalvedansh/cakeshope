import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import CustomOrder from "./pages/CustomOrder";
import AboutPage from "./pages/AboutPage";
import CakesPage from "./pages/CakesPage";
import CupcakesPage from "./pages/CupcakesPage";
import PastriesPage from "./pages/PastriesPage";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <WishlistProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cakes" element={<CakesPage />} />
          <Route path="/cupcakes" element={<CupcakesPage />} />
          <Route path="/pastries" element={<PastriesPage />} />
          <Route path="/custom" element={<CustomOrder />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team for orders, questions, or special requests." />} />
          <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" description="Find answers to common questions about our products, ordering, and delivery." />} />
          <Route path="/shipping" element={<PlaceholderPage title="Shipping Information" description="Learn about our delivery options, areas we serve, and shipping policies." />} />
          <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" description="Information about our return policy and how to handle any issues with your order." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" description="Our terms of service, privacy policy, and legal information." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
