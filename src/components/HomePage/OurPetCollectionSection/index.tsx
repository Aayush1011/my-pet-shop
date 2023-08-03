import { ButtonType1 } from "@/components/ButtonType1";
import { OurPetCollectionSectionGrid } from "./Grid";

export const OurPetCollectionSection = () => (
  <div className="section_styles">
    <div className="mb-[4.923vw]">
      <h2 className="section_header_styles text-center mb-[1.538vw]">
        Our Pet Collections
      </h2>
      <p className="section_text_styles text-center">
        "Bring joy to your home with a furry companion from our pet selection."
      </p>
    </div>
    <OurPetCollectionSectionGrid />
    <div className="flex justify-center">
      <ButtonType1
        text="view all"
        textColor="text-white"
        buttonColor="bg-sky-blue"
        chevronColor="text-sky-blue"
        chevronCircleColor="bg-white"
      />
    </div>
  </div>
);
