import { AboutUsImageSection } from "./ImageSection";
import { AboutUsTextSection } from "./TextSection";

export const AboutUsSection = () => (
  <div className="section_styles flex max-sm:flex-col-reverse sm:gap-x-[6.923vw]">
    <AboutUsImageSection />
    <AboutUsTextSection />
  </div>
);
