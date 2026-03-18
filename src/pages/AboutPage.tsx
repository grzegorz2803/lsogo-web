import { FaqSection } from "../components/About/FaqSection";
import { FinalCtaSection } from "../components/About/FinalCtaSection";
import { HeroSection } from "../components/About/HeroSection";
import { HowItWorksSection } from "../components/About/HowItWorksSection";
import { ValuesSection } from "../components/About/ValuesSection";

export function AboutPage() {
  return (
    <div className="relative min-h-screen w-full">
      <HeroSection />
      <ValuesSection />
      <HowItWorksSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
