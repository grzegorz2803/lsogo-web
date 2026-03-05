import { ParishBenefitsSection } from "../components/Parish/ParishBenefitsSection";
import { ParishFaqAndCtaSection } from "../components/Parish/ParishFaqAndCtaSection";
import { ParishHeroSection } from "../components/Parish/ParishHeroSection";
import { ParishImplementationSection } from "../components/Parish/ParishImplementationSection";

export function ParishPage() {
  return (
    <div className="relative min-h-screen w-full">
      <ParishHeroSection />
      <ParishBenefitsSection />
      <ParishImplementationSection />
      <ParishFaqAndCtaSection />
    </div>
  );
}
