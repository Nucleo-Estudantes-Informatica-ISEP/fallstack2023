import { FunctionComponent, useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // If we don't wait for the theme to be loaded, the image will be broken -> always being false until the theme is changed
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-28 md:px-14 lg:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
          <h1 className="w-min font-poppins text-7xl font-bold max-lg:text-center md:text-8xl lg:w-fit">
            <Highlight color="primary" tilt="left">
              Internship
            </Highlight>{" "}
            Kickstart
          </h1>
          <h2 className="font-poppins text-5xl font-medium max-sm:text-center lg:text-7xl">
            Your{" "}
            <Highlight color="accent" tilt="right">
              future
            </Highlight>{" "}
            starts here
          </h2>
        </div>
        <Image
          className="h-[440px] object-contain drop-shadow-md lg:h-[580px] lg:w-1/4"
          src={mounted && theme === "light" ? logoSrc.dark : logoSrc.white}
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
