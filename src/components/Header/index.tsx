import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";

import Highlight from "../Highlight";

import { useTheme } from "next-themes";
import { ChevronDown } from "react-bootstrap-icons";

interface HeaderProps {
  logoSrc: {
    white: StaticImageData;
    dark: StaticImageData;
  };
  logoAlt: string;
  contentRef: React.RefObject<HTMLDivElement>;
}

const Header: FunctionComponent<HeaderProps> = ({
  logoSrc,
  logoAlt,
  contentRef,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-28 md:px-14 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
          <h1 className="font-poppins text-7xl font-bold max-md:w-min max-md:text-center lg:text-8xl">
            <Highlight>Internship</Highlight> Kickstart
          </h1>
          <h2 className="font-poppins text-5xl font-medium max-sm:text-center lg:text-7xl">
            Your <Highlight>future</Highlight> starts here
          </h2>
        </div>
        <Image
          className="h-[440px] object-contain drop-shadow-md lg:h-[580px] lg:w-1/4"
          src={theme === "dark" ? logoSrc.white : logoSrc.dark}
          alt={logoAlt}
        />
      </div>
      <div className="bottom-4 mx-0 flex h-12 w-12 animate-bounce cursor-pointer items-center justify-center text-center transition-all duration-200 hover:scale-105">
        <a
          className="animate-fade opacity-0"
          onClick={() => contentRef.current?.scrollIntoView()}
        >
          <ChevronDown color="white" size={30} />
        </a>
      </div>
    </section>
  );
};

export default Header;
