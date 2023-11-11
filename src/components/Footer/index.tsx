import { FunctionComponent, useEffect, useState } from "react";
import { RiTwitterXFill, RiFacebookCircleFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

interface FooterProps {
  lastEditionUrl: string;
  neiLogoSrc: {
    white: StaticImageData;
    dark: StaticImageData;
  };
}

const Footer: FunctionComponent<FooterProps> = ({ lastEditionUrl, neiLogoSrc }) => {
  const currentYear = new Date().getFullYear();
  const NEI_WEBSITE_URL = "https://nei-isep.org";
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // If we don't wait for the theme to be loaded, the image will be broken -> always being false until the theme is changed
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <footer className="w-full text-center">
      <div className="flex justify-center drop-shadow-lg hover:drop-shadow-xl lg:m-8">
        <div className="my-6 w-max  transition-all duration-300 hover:scale-105">
          <a href={lastEditionUrl} target="_blank" rel="noreferrer">
            <div className="rounded-2xl bg-secondary p-6 lg:p-7 font-poppins font-bold text-2xl drop-shadow-3xl transition-all duration-300 sm:text-[2.5rem] lg:text-[3.5rem] text-[2rem]">
              Edição Anterior
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:m-8">
        <div className="my-4 mx-8 max-h-[200px] lg:max-w-[350px] sm:max-w-[275px] max-w-[200px] transition-all duration-300 hover:scale-105">
          <a href={NEI_WEBSITE_URL} target="_blank" rel="noreferrer">
            <Image
              className="mx-auto block h-auto max-w-full drop-shadow-3xl transition-all duration-300 hover:drop-shadow-4xl"
              src={mounted && theme === "light" ? neiLogoSrc.dark : neiLogoSrc.white}
              alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
            />
          </a>
        </div>
      </div>
      <div className="pt-2">
        <hr className="w-11/12 h-1 mx-auto my-4 bg-text border-0"></hr>
      </div>
      <div className="lg:flex justify-between lg:pb-6">
        <h4 className="select-none sm:text-center lg:pb-0 pb-3 right-10 lg:pl-20 drop-shadow-3xl">
          Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
        </h4>
        <div className="mb-8 flex justify-center lg:pr-20 items-center gap-5">
          <a
            className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.facebook.com/nei.isep"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleFill color="text" size={24} />
          </a>
          <a
            className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.linkedin.com/company/nei-isep"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxFill color="text" size={26} />
          </a>
          <a
            className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.instagram.com/nei_isep"
            target="_blank"
            rel="noreferrer"
          >
            <RiInstagramLine color="accent" size={24} />
          </a>
          <a
            className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://twitter.com/nei_isep"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterXFill color="text" size={24} />
          </a>
        </div>
      </div>
      
    </footer>
  );
};
export default Footer;
