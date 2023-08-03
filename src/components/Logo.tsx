import { inter } from "@/utils/fonts";
import { LogoProps } from "../types";

export const Logo = ({
  // paddingTop,
  // paddingBottom,
  fontSize,
  fontColor,
}: LogoProps) => (
  // ${paddingTop} ${paddingBottom}
  <div
    className={` ${inter.className} ${fontSize} ${fontColor} w-fit text-center uppercase font-bold cursor-pointer`}
  >
    <p className="whitespace-nowrap">your logo</p>
    <p>here</p>
  </div>
);
