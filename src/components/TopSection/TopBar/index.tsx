"use client";

import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

import { Logo } from "../../Logo";
import { TopBarNavigation } from "./Navigation";
import { TopBarSearch } from "./Search";
import { TopBarButton } from "./Button";
import { inter } from "@/utils/fonts";

export const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`${inter.className} flex max-[1000px]:justify-between items-center max-[1000px]:mt-4 mb-8 max-md:px-8 md:w-[86.923%] md:mx-auto md:max-w-[1165px]`}
    >
      <div className="md:hidden text-2xl" onClick={() => setShowMenu(true)}>
        <RiMenu2Line />
      </div>
      <Logo
        // paddingTop="md:pt-[2.769vw]"
        // paddingBottom="md:pb-[2.154vw]"
        fontSize="text-[15px]"
        fontColor="text-black"
      />
      <div
        className={`flex flex-col-reverse md:flex-row max-md:h-[100vh] ${
          !showMenu && "max-md:w-0"
        } max-md:fixed max-md:z-10 max-md:top-0 max-md:left-0 max-md:bg-midnight-blue max-md:overflow-x-hidden max-md:duration-500 ${
          showMenu && "w-1/2 max-md:min-w-max"
        }`}
      >
        <TopBarNavigation />
        <div className="flex gap-x-4 items-center max-md:mx-8">
          <TopBarSearch />
          <div className="text-2xl text-sky-blue md:mt-10 md:mb-12">
            <AiFillHeart />
          </div>
        </div>
        <div
          className="md:hidden z-20 text-xl mx-auto text-white"
          onClick={() => setShowMenu(false)}
        >
          <MdClose />
        </div>
      </div>
      <TopBarButton numberOfItems="2" />
    </div>
  );
};
