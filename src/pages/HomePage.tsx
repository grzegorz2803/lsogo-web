import { CalendarSection } from "../components/CalendarSection";
import { AudienceSection } from "../components/AudienceSection";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { Footer } from "../components/Footer";
export function HomePage() {
  return (
    <>
      <HeroSection />
      <CalendarSection />
      <AudienceSection />
      <FeaturesSection />
      <Footer />
    </>
  );
}
