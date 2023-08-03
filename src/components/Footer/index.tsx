import { dmSans } from "@/utils/fonts";
import { FooterContactAndAddress } from "./ContactAndAddress";
import { FooterGallery } from "./Gallery";
import { FooterMenu } from "./Menu";
import { FooterSocials } from "./Socials";
import { FooterAboutUs } from "./AboutUs";

export const Footer = () => (
  <div className="bg-midnight-blue pt-[5.692vw] pb-[6.923vw] min-[1300px]:pt-[74px] min-[1300px]:pb-[90px] ">
    <div className="mx-8 sm:mx-auto mb-[90px] sm:w-[86.923vw] sm:max-w-[1140px] grid gap-y-15 gap-x-8 lg:gap-10 grid-flow-row lg:auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <FooterContactAndAddress />
      <FooterAboutUs />
      <FooterMenu />
      <FooterGallery />
    </div>
    <div className="mx-8 sm:mx-auto sm:w-[86.923vw] sm:max-w-[1140px] border-t border-light-grey flex flex-col-reverse sm:flex-row max-sm:gap-10 sm:justify-between">
      <div className="sm:mt-[34px]">
        <p className={`${dmSans.className} text-lg text-off-white`}>
          Copyright © 2023 City Pet House & Animal Clinic | All Rights Reserved
        </p>
      </div>
      <div className="max-sm:mt-[34px] mt-4">
        <FooterSocials />
      </div>
    </div>
  </div>
);
