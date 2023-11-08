import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";

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
      <div className="lg flex w-full flex-col-reverse items-center justify-center gap-28 md:px-14 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
          <h1 className="relative font-poppins text-7xl font-bold max-md:w-min max-md:text-center lg:text-8xl">
            <span className="absolute -left-2 top-4 -z-10 h-12 w-fit flex-shrink-0 -rotate-1 rounded-[66px] bg-primary px-2 text-transparent lg:h-20">
              Internship
            </span>{" "}
            Internship Kickstart
          </h1>
          <h2 className="font-poppins text-5xl font-medium max-sm:text-center lg:text-7xl">
            Your{" "}
            <span className="relative">
              <span className="absolute -left-3 top-4 -z-10 h-6 w-fit flex-shrink-0 rotate-1 rounded-[66px] bg-accent px-3 text-transparent lg:top-6 lg:h-9">
                future
              </span>
              future starts here
            </span>
          </h2>
        </div>
        {theme === "light" ? (
          <Image
            className="h-[440px] object-contain drop-shadow-md lg:h-[580px] lg:w-1/4"
            src={logoSrc.dark}
            alt={logoAlt}
          />
        ) : (
          <Image
            className="h-[440px] object-contain drop-shadow-md lg:h-[580px] lg:w-1/4"
            src={logoSrc.white}
            alt={logoAlt}
          />
        )}
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
