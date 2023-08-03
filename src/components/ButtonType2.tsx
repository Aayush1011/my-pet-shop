import { inter } from "@/utils/fonts";
import { ButtonType2Props } from "../types";

export const ButtonType2 = ({ text }: ButtonType2Props) => (
  <div
    className={`${inter.className} cursor-pointer px-3 py-[10px] text-xs text-white font-bold bg-midnight-blue rounded-[5px] capitalize`}
  >
    {text}
  </div>
);
