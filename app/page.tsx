import Hero from "@/components/Hero";
import Features from "@/components/home/Features";
import Navbar from "@/components/Navbar";
import PricingMinimal from "@/components/pricing-minimal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* navigation */}
      <Navbar />
      <Hero />
      <Features />
      <PricingMinimal />
    </div>
  );
}
