import { FunctionComponent } from "react";
import Image from "next/image";

import NeiLogo from "../../../public/assets/images/logo-white.png";

import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

interface FooterProps {
  lastEditionUrl: string;
}

const Footer: FunctionComponent<FooterProps> = ({ lastEditionUrl }) => {
  const currentYear = new Date().getFullYear();
  const NEI_WEBSITE_URL = "https://nei-isep.org";

  return (
    <footer className="w-full text-center">
      <div className="flex justify-center drop-shadow-lg hover:drop-shadow-xl lg:m-8">
        <div className="my-6 w-max  transition-all duration-300 hover:scale-105">
          <a href={lastEditionUrl} target="_blank" rel="noreferrer">
            <div className="rounded-3xl border-[5px] border-double border-white p-5 text-2xl text-white drop-shadow-3xl transition-all duration-300 lg:text-[2.5rem]">
              Edição Anterior
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:m-8">
        <div className="mx-8 my-4 max-h-[200px] max-w-[350px] transition-all duration-300 hover:scale-105">
          <a href={NEI_WEBSITE_URL} target="_blank" rel="noreferrer">
            <Image
              className="mx-auto block h-auto max-w-full drop-shadow-3xl transition-all duration-300 hover:drop-shadow-4xl"
              src={NeiLogo}
              alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
            />
          </a>
        </div>
      </div>

      <div className="m-8 flex items-center justify-center gap-14 lg:gap-20">
        <a
          className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
          href="https://www.facebook.com/nei.isep"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook color="white" size={30} />
        </a>
        <a
          className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
          href="https://twitter.com/nei_isep"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter color="white" size={30} />
        </a>
        <a
          className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
          href="https://www.instagram.com/nei_isep"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram color="white" size={30} />
        </a>
        <a
          className="drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
          href="https://www.linkedin.com/company/nei-isep"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin color="white" size={30} />
        </a>
      </div>

      <h4 className="select-none py-6 text-center text-white drop-shadow-3xl">
        Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
      </h4>
    </footer>
  );
};
export default Footer;
