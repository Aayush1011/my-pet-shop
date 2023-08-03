import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoYoutube,
} from "react-icons/bi";

export const FooterSocials = () => {
  const socialsComponents = [
    <BiLogoFacebook />,
    <BiLogoTwitter />,
    <BiLogoInstagramAlt />,
    <BiLogoLinkedin />,
    <BiLogoYoutube />,
  ];
  return (
    <div className="flex gap-[14px] mt-auto sm:mx-auto w-fit h-fit">
      {socialsComponents.map((socialsComponent) => (
        <div className="text-midnight-blue bg-socials-grey rounded-lg p-2 text-xl">
          {socialsComponent}
        </div>
      ))}
    </div>
  );
};
