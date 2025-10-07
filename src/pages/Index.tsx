import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Transformation from "@/components/Transformation";
import ProductDemo from "@/components/ProductDemo";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import ROI from "@/components/ROI";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Transformation />
      <ProductDemo />
      <Testimonials />
      <Features />
      <ROI />
      <ClosingCTA />
      <Footer />
    </main>
  );
};

export default Index;
