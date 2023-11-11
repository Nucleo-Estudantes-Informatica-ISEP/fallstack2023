import { FunctionComponent } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { RiTwitterXFill } from "react-icons/ri";
import NeiLogo from "../../../public/assets/images/logo-white.png";
import Image from "next/image";

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
            <div className="rounded-2xl bg-secondary p-6 lg:p-7 font-poppins font-bold text-2xl text-white drop-shadow-3xl transition-all duration-300 sm:text-[2.5rem] lg:text-[3.5rem]">
              Edição Anterior
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center lg:m-8">
        <div className="my-4 mx-8 max-h-[200px] max-w-[350px] transition-all duration-300 hover:scale-105">
          <a href={NEI_WEBSITE_URL} target="_blank" rel="noreferrer">
            <Image
              className="mx-auto block h-auto max-w-full drop-shadow-3xl transition-all duration-300 hover:drop-shadow-4xl"
              src={NeiLogo}
              alt="Logo branco do Núcleo de Estudantes de Informática do ISEP (NEI)"
            />
          </a>
        </div>
      </div>
      <div className="pt-2">
        <hr className="lg:w-11/12 md:w-6/12 sm:5/12 w-7/12  h-1 mx-auto my-4 bg-white border-0"></hr>
      </div>
      <div className="lg:flex justify-between lg:pb-6">
        <h4 className="select-none sm:text-center lg:pb-0 pb-3 right-10 lg:pl-20 font-good__times text-white drop-shadow-3xl">
          Copyright &copy; {currentYear} NEI-ISEP. All rights reserved.
        </h4>
        <div className="mb-8 flex justify-center lg:pr-20 items-center gap-5">
          <a
            className="facebook drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.facebook.com/nei.isep"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook color="white" size={20} />
          </a>
          <a
            className="linkedin drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.linkedin.com/company/nei-isep"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size={20} />
          </a>
          <a
            className="instagram drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://www.instagram.com/nei_isep"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram color="white" size={20} />
          </a>
          <a
            className="twitter drop-shadow-3xl transition-all duration-300 hover:scale-110 hover:drop-shadow-4xl"
            href="https://twitter.com/nei_isep"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterXFill color="white" size={20} />
          </a>
        </div>
      </div>
      
    </footer>
  );
};
export default Footer;
