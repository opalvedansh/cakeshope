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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cakes" element={<PlaceholderPage title="Cakes Collection" description="Explore our beautiful selection of custom cakes for weddings, birthdays, and special occasions." />} />
          <Route path="/cupcakes" element={<PlaceholderPage title="Cupcakes" description="Delicious individual treats perfect for any celebration or everyday indulgence." />} />
          <Route path="/pastries" element={<PlaceholderPage title="Pastries & Desserts" description="Artisanal pastries, cookies, and desserts made fresh daily with premium ingredients." />} />
          <Route path="/custom" element={<PlaceholderPage title="Custom Orders" description="Let us create something unique for your special event. Custom designs and flavors available." />} />
          <Route path="/about" element={<PlaceholderPage title="About Sweet Delights" description="Learn about our story, our passion for baking, and our commitment to quality." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our team for orders, questions, or special requests." />} />
          <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" description="Find answers to common questions about our products, ordering, and delivery." />} />
          <Route path="/shipping" element={<PlaceholderPage title="Shipping Information" description="Learn about our delivery options, areas we serve, and shipping policies." />} />
          <Route path="/returns" element={<PlaceholderPage title="Returns & Exchanges" description="Information about our return policy and how to handle any issues with your order." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms & Conditions" description="Our terms of service, privacy policy, and legal information." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
