import { CalendarSection } from "../components/CalendarSection";
import { AudienceSection } from "../components/AudienceSection";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HomeCtaSection } from "../components/HomeCtaSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CalendarSection />
      <AudienceSection />
      <FeaturesSection />
      <HomeCtaSection />
    </>
  );
}
