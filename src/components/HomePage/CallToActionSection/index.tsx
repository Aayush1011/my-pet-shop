import { ButtonType1 } from "@/components/ButtonType1";
import { inter } from "@/utils/fonts";
import Image from "next/image";

export const CallToActionSection = () => (
  <div className="flex flex-col md:flex-row justify-between mx-[0.923vw] mb-[9.538vw] min-[1300px]:mb-[122px] px-[5.231vw] md:ps-[5.231vw] md:pe-[1.231vw] bg-cta-orange rounded-3xl  text-white max-sm:min-h-[600px] overflow-hidden">
    <div className="pt-[6.462vw] md:pb-[4.231vw]">
      <div className="mb-[2.154vw]">
        <p className={`${inter.className} text-xl font-semibold`}>
          One More Friend Thousands More Fun!
        </p>
      </div>
      <div className="mb-[3.846vw]">
        <p className="text-[34px] font-black ">
          "Find your furry soulmate at Our Pet Shop."
        </p>
      </div>
      <ButtonType1
        text="Get Now"
        textColor="text-cta-orange"
        buttonColor="bg-white"
        chevronColor="text-white"
        chevronCircleColor="bg-cta-orange"
      />
    </div>
    <div className="relative w-[75%] lg:w-[31.8125%] aspect-[368/385] max-h-[380px] mx-auto mt-auto">
      <Image
        className="object-cover"
        src="/call-to-action1.png"
        alt="dog wearing glasses"
        fill
      />
    </div>
  </div>
);
