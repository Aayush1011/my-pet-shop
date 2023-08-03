import { BiSolidChevronLeft } from "react-icons/bi";
import { BiSolidChevronRight } from "react-icons/bi";
import Image from "next/image";

export const HeroSection = () => (
  <div className="relative min-h-[300px] max-w-full aspect-[13/5] mb-[9.538vw] max-[550px]:mb-[50px] min-[1300px]:mb-[122px]">
    <div className="text-white cursor-pointer bg-sky-blue hover:text-sky-blue hover:bg-white w-10 h-10 rounded-full flex justify-center items-center absolute left-[1.692vw] top-1/2">
      <BiSolidChevronLeft />
    </div>
    <div>
      <Image
        className="object-cover -z-20"
        src="/hero-img.png"
        alt="hero image"
        fill
      />
    </div>
    <div className="text-center max-[425px]:mx-3 pt-[2.769vw]">
      <h1 className="text-3xl sm:text-[40px] mb-[2vw] font-black">
        We provide the best care to our furry friends!
      </h1>
      <p className="text-xl sm:text-[26px] font-semibold">
        Top Quality of Pet Product Store
      </p>
    </div>
    <div className="text-white cursor-pointer bg-sky-blue hover:text-sky-blue hover:bg-white w-10 h-10 rounded-full flex justify-center items-center absolute right-[1.692vw] top-1/2">
      <BiSolidChevronRight />
    </div>
  </div>
);
