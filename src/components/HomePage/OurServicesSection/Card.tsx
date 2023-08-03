import Image from "next/image";
import { OurServicesSectionCardProps } from "../../../types";
import { ButtonType2 } from "@/components/ButtonType2";

export const OurServicesSectionCard = ({
  imageName,
  title,
  description,
}: OurServicesSectionCardProps) => (
  <div className="flex flex-col flex-1 relative border border-light-grey rounded-xl h-full">
    <div className="absolute top-0 left-0 aspect-[334/188] w-full h-[185px]">
      <Image
        className="object-cover rounded-t-xl"
        src={`/our-services-${imageName}.png`}
        alt="our-services-card-image"
        fill
      />
    </div>
    <div className="mx-[22px] mt-[215px] mb-8">
      <p className="text-xl font-extrabold mb-[18px]">{title}</p>
      <p className="text-sm font-medium">{description}</p>
    </div>
    <div className="mt-auto mb-7 ms-[calc(50%-43px)] w-fit">
      <ButtonType2 text="view more" />
    </div>
  </div>
);
