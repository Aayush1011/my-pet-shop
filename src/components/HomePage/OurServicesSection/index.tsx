import { OurServicesSectionGrid } from "./Grid";

export const OurServicesSection = () => (
  <div className="section_styles">
    <div className="mb-[4.923vw]">
      <h2 className="section_header_styles text-center mb-[2vw]">
        Our Services
      </h2>
      <p className="section_text_styles text-center">
        We provide a wide range of products & services for pets such as food,
        toys, grooming supplies, and veterinary care. We aim to meet the needs
        of pet owners and ensure the health and happiness of their furry
        friends.
      </p>
    </div>
    <OurServicesSectionGrid />
  </div>
);
