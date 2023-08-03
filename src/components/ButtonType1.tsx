import { BiSolidChevronRight } from "react-icons/bi";
import { ButtonType1Props } from "../types";

export const ButtonType1 = ({
  text,
  textColor,
  buttonColor,
  chevronColor,
  chevronCircleColor,
}: ButtonType1Props) => (
  <div
    className={`${buttonColor} rounded-3xl relative max-w-fit cursor-pointer`}
  >
    <div className="ps-5 pe-18 py-3 ">
      <p className={`${textColor} text-base font-semibold capitalize`}>
        {text}
      </p>
    </div>
    <div
      className={`${chevronColor} ${chevronCircleColor} w-8 h-8 rounded-full flex justify-center items-center absolute right-2 top-2`}
    >
      <BiSolidChevronRight />
    </div>
  </div>
);
