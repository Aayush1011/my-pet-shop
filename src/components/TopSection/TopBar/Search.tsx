import { AiOutlineSearch } from "react-icons/ai";

export const TopBarSearch = () => (
  <div className="mt-5 mb-8 relative">
    <div className="text-white cursor-pointer bg-sky-blue w-10 h-10 rounded-full flex justify-center items-center text-2xl absolute right-[0.615vw] top-[5px]">
      <AiOutlineSearch />
    </div>
    <input
      type="text"
      placeholder="Search......"
      className="border-2 md:border-sky-blue rounded-full w-[290px] md:w-[22.308vw] md:min-w-[200px] h-[50px] py-4 ps-4  placeholder:text-xs"
    />
  </div>
);
