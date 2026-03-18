import { CalendarSection } from "../components/Home/CalendarSection";
import { AudienceSection } from "../components/Home/AudienceSection";
import { HeroSection } from "../components/Home/HeroSection";
import { FeaturesSection } from "../components/Home/FeaturesSection";
import { HomeCtaSection } from "../components/Home/HomeCtaSection";

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
