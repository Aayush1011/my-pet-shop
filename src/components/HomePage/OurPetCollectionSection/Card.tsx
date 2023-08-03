import Image from "next/image";
import { OurPetCollectionSectionCardProps } from "../../../types";

export const OurPetCollectionSectionCard = ({
  imageName,
  breed,
  gender,
  age,
}: OurPetCollectionSectionCardProps) => (
  <div className="flex flex-col flex-1 border border-light-grey rounded-xl w-full h-full cursor-pointer">
    <div className="relative mt-2 mx-2 aspect-square">
      <Image
        className="object-cover rounded-[10px]"
        src={`/our-pet-collection-${imageName}.png`}
        alt="our-pet-collection-card-image"
        fill
      />
    </div>
    <div className="pt-[15px] pb-5 px-[14px]">
      <p className="text-base font-extrabold mb-3">{breed}</p>
      <div className="text-xs flex gap-x-8">
        <div>
          <span className="font-normal">Gender: </span>
          <span className="font-bold">{gender}</span>
        </div>
        <div>
          <span className="font-normal">Age: </span>
          <span className="font-bold">{age}</span>
        </div>
      </div>
    </div>
  </div>
);
