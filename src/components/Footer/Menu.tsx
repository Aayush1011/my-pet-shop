import { dmSans } from "@/utils/fonts";

export const FooterMenu = () => {
  const menuItems = ["home", "about", "services", "breeds", "shop", "contact"];

  return (
    <div className={`${dmSans.className} text-off-white lg:mx-auto`}>
      <div className="mb-[3.077vw]">
        <p className="font-bold text-xl ">Menu</p>
      </div>
      <ul className="flex flex-col gap-y-[1.385vw]">
        {menuItems.map((menuItem) => (
          <li key={menuItem} className="text-lg capitalize cursor-pointer">
            {menuItem}
          </li>
        ))}
      </ul>
    </div>
  );
};
