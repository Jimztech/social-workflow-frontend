import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Features } from "@/components/landing/Features";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <ProductPreview />
        <UseCases />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}