import { dmSans } from "@/utils/fonts";
import { Logo } from "../Logo";
import { FooterTextComponent } from "@/types";

export const FooterContactAndAddress = () => {
  const TextComponent = ({ textValue1, textValue2 }: FooterTextComponent) => (
    <div className={`${dmSans.className} text-off-white`}>
      <p className="text-lg font-normal mb-[1.154vw]">{textValue1}</p>
      <p className="text-xl font-bold italic">{textValue2}</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-y-10">
      <Logo fontSize="text-2xl" fontColor="text-white" />
      <TextComponent
        textValue1="Phone Number:"
        textValue2="your phone number here"
      />
      <TextComponent textValue1="Location:" textValue2="your location here" />
    </div>
  );
};
