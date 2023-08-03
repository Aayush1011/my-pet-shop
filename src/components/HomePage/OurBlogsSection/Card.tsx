import Image from "next/image";
import { OurBlogsSectionProps } from "../../../types";
import { ButtonType2 } from "@/components/ButtonType2";

export const OurBlogsSectionCard = ({
  imageName,
  title,
  description,
}: OurBlogsSectionProps) => (
  <div className="flex flex-col flex-1 h-full">
    <div className="relative w-full aspect-[350/220]">
      <Image
        className="object-cover rounded-2xl"
        src={`/our-blogs-${imageName}.png`}
        alt="our-blogs-image"
        fill
      />
    </div>
    <div className="mt-4">
      <p className="text-lg font-bold mb-[10px]">{title}</p>
      <p className="text-sm font-medium mb-6">{description}</p>
    </div>
    <div className="mt-auto w-fit">
      <ButtonType2 text="View Details" />
    </div>
  </div>
);
