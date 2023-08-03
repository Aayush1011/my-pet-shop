import { FaShoppingCart } from "react-icons/fa";
import { TopBarButtonProps } from "../../../types";

export const TopBarButton = ({ numberOfItems }: TopBarButtonProps) => (
  <div className="md:mt-5 md:ms-[2.46vw] md:mb-8 flex gap-x-3 items-center px-6 py-4 border-2 rounded-xl border-sky-blue cursor-pointer">
    <div className="text-sky-blue">
      <FaShoppingCart />
    </div>
    <p className="text-base whitespace-nowrap">{numberOfItems} item</p>
  </div>
);
