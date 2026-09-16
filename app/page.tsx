import { Header } from "@/components/Header";
import { HeroRedesign } from "@/components/HeroRedesign";
import { FamiliarQuestions } from "@/components/FamiliarQuestions";
import { ProductTheatre } from "@/components/ProductTheatre";
import { SectorRows } from "@/components/SectorRows";
import { CompactModules } from "@/components/CompactModules";
import { PricingSection } from "@/components/PricingSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";
import { FaqRedesign } from "@/components/FaqRedesign";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroRedesign />
        <FamiliarQuestions />
        <ProductTheatre />
        <SectorRows />
        <CompactModules />
        <PricingSection />
        <CredibilitySection />
        <ClosingDemoSection />
        <FaqRedesign />
      </main>
      <Footer />
    </>
  );
}
