import { dmSans } from "@/utils/fonts";
import Image from "next/image";

export const FooterGallery = () => {
  const images = ["1", "2", "3", "4"];
  return (
    <div>
      <div className={`${dmSans.className} mb-[2.385vw] text-off-white ps-4`}>
        <p className="font-bold text-xl">Gallery</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 gap-[15px] max-w-[255px]">
        {images.map((image) => (
          <div className="relative aspect-square">
            <Image
              className="object-cover rounded-2xl"
              src={`/gallery-${image}.png`}
              alt="gallery-image"
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};
