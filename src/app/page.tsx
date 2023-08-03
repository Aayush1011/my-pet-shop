import { AboutUsSection } from "@/components/HomePage/AboutUsSection";
import { CallToActionSection } from "@/components/HomePage/CallToActionSection";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { OurBlogsSection } from "@/components/HomePage/OurBlogsSection";
import { OurPetCollectionSection } from "@/components/HomePage/OurPetCollectionSection";
import { OurServicesSection } from "@/components/HomePage/OurServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <OurPetCollectionSection />
      <CallToActionSection />
      <OurBlogsSection />
    </main>
  );
}
