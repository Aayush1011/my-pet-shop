import Image from "next/image";

export const AboutUsImageSection = () => (
  <div className="sm:w-[60%] relative">
    <div className=" aspect-[524/605]">
      <Image className="object-cover" src="/about-us.png" alt="about-us" fill />
    </div>
  </div>
);
