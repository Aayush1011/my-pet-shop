"use client";

import { useState } from "react";
import { RiArrowRightSFill, RiArrowDownSFill } from "react-icons/ri";

export const TopBarNavigation = () => {
  const [active, setActive] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const navigationItems = [
    "home",
    "about",
    "services",
    "breeds",
    "shop",
    "gallery",
  ];

  const navigationLinks = navigationItems.map((item) => (
    <p
      key={item}
      className={`capitalize text-base leading-4 ${
        active !== item &&
        "text-white min-[1000px]:text-midnight-blue no-underline font-medium cursor-pointer"
      }  ${
        active === item &&
        "text-sky-blue underline decoration-sky-blue decoration-2 font-bold cursor-default"
      }`}
      onClick={() => setActive(item)}
    >
      {item}
    </p>
  ));

  return (
    <div className="ms-[4.31vw] me-[5.54vw] py-11 relative">
      <div
        className="max-md:hidden flex gap-x-1 items-center min-[1000px]:hidden "
        onClick={() => setShowLinks((previousValue) => !previousValue)}
      >
        <div className="text-2xl">
          {showLinks ? <RiArrowDownSFill /> : <RiArrowRightSFill />}
        </div>
        <div className=" text-black text-base font-medium">Links</div>
      </div>
      <div
        className={`${
          !showLinks && "max-[1000px]:hidden"
        } min-[1000px]:flex min-[1000px]:flex-row  min-[1000px]:w-[36.154vw] min-[1000px]:justify-between  max-[1000px]:text-center
      ${
        showLinks &&
        "absolute top-18 -left-4 flex flex-col gap-y-9 p-7 bg-midnight-blue z-50"
      } max-md:flex max-md:flex-col max-md:gap-y-9 max-md:static`}
      >
        {navigationLinks}
      </div>
    </div>
  );
};
