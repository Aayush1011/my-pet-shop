import { ButtonType1 } from "../../ButtonType1";
import { LiaCheckCircleSolid } from "react-icons/lia";

export const AboutUsTextSection = () => (
  <div className="sm:w-[40%] sm:flex sm:flex-col sm:justify-center">
    <h2 className="section_header_styles mb-[2.154vw]">About Us</h2>
    <p className="section_text_styles mb-[3.692vw]">
      Pet House & Animal clinic was established with moto to provide qualitative
      and affordable animal healthcare service to your doorstep.
    </p>
    <ol className="mb-[3.692vw]">
      {[
        "Comprehensive",
        "Professional",
        "Compassionate veterinary service",
      ].map((listItem) => (
        <li className="flex gap-x-[1.231vw] items-center">
          <div className="text-sky-blue">
            <LiaCheckCircleSolid />
          </div>
          <div className="font-semibold text-[18px]">{listItem}</div>
        </li>
      ))}
    </ol>
    <ButtonType1
      text="contact"
      textColor="text-white"
      buttonColor="bg-sky-blue"
      chevronColor="text-sky-blue"
      chevronCircleColor="bg-white"
    />
  </div>
);
