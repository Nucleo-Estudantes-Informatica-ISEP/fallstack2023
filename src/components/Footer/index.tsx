import { FunctionComponent, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaInfo } from "react-icons/fa6";
import { MdOutlinePrivacyTip } from "react-icons/md";
import {
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXFill,
} from "react-icons/ri";

import InstallButton from "../InstallButton";

import { useTheme } from "next-themes";

interface FooterProps {
  lastEditionUrl: string;
  neiLogoSrc: {
    white: StaticImageData;
    dark: StaticImageData;
  };
}

const Footer: FunctionComponent<FooterProps> = ({
  lastEditionUrl,
  neiLogoSrc,
}) => {
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
        <a href={lastEditionUrl} target="_blank" rel="noreferrer">
          <div className="my-6 rounded-2xl bg-secondary/40 px-8 py-4 font-poppins text-2xl font-bold transition-all duration-300 hover:scale-105 lg:text-4xl">
            Edição Anterior
          </div>
        </a>
      </div>

      <div className="flex items-center justify-center lg:m-8">
        <div className="mx-8 my-4 max-h-[200px] max-w-[200px] transition-all duration-300 hover:scale-105 sm:max-w-[275px] lg:max-w-[350px]">
          <a href={NEI_WEBSITE_URL} target="_blank" rel="noreferrer">
            <Image
              className="mx-auto block h-auto max-w-full drop-shadow-xl transition-all duration-300 hover:drop-shadow-2xl"
              src={
                mounted && theme === "light"
                  ? neiLogoSrc.dark
                  : neiLogoSrc.white
              }
              alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
            />
          </a>
        </div>
      </div>
      <div className="pt-2">
        <hr className="mx-auto my-4 h-1 w-11/12 border-0 bg-text"></hr>
      </div>
      <div className="justify-between lg:flex lg:pb-6">
        <h4 className="right-10 select-none pb-3 drop-shadow-xl sm:text-center lg:pb-0 lg:pl-20">
          Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
        </h4>
        <div className="mb-8 flex justify-between px-4 md:items-center md:gap-x-5 md:px-0 lg:pr-20">
          <div className="flex gap-5">
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.facebook.com/nei.isep"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <RiFacebookCircleFill color="text" size={24} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.linkedin.com/company/nei-isep"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <RiLinkedinBoxFill color="text" size={26} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://www.instagram.com/nei_isep"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <RiInstagramLine color="accent" size={24} />
            </Link>
            <Link
              className="text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              href="https://twitter.com/nei_isep"
              target="_blank"
              rel="noreferrer"
              title="Twitter"
            >
              <RiTwitterXFill color="text" size={24} />
            </Link>
          </div>
          <div className="right-0 flex gap-5">
            <InstallButton />
            <Link
              href="/about"
              className="h-max text-xl drop-shadow-xl transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl"
              title="Info"
            >
              <FaInfo size={20} />
            </Link>
            <Link
              href="/privacy-policy"
              title="Política de Privacidade"
              className="text-xl"
            >
              <MdOutlinePrivacyTip color="text" size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
