"use client";

import { FunctionComponent, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

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

const Hero: FunctionComponent<HeaderProps> = ({
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
    <section className="relative flex h-full min-h-screen w-full flex-col items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          marginTop: 200,
        }}
        whileInView={{
          opacity: 1,
          marginTop: 0,
        }}
        viewport={{
          once: true,
        }}
        className="flex w-full flex-col-reverse items-center justify-center gap-28 md:px-14 lg:flex-row"
      >
        <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
          <h1 className="w-min font-poppins text-6xl font-bold max-lg:text-center md:text-8xl lg:w-fit">
            <Highlight color="primary" tilt="left">
              Internship
            </Highlight>{" "}
            Kickstart
          </h1>
          <h2 className="font-poppins text-3xl font-medium max-sm:text-center md:text-5xl lg:text-7xl">
            Your{" "}
            <Highlight color="accent" tilt="right">
              future
            </Highlight>{" "}
            starts here
          </h2>
        </div>
        <Image
          className="max-h-[440px] w-1/2 object-contain drop-shadow-md lg:max-h-[580px] lg:w-1/4"
          src={mounted && theme === "light" ? logoSrc.dark : logoSrc.white}
          alt={logoAlt}
        />
      </motion.div>
      <a
        className="absolute bottom-4 flex animate-bounce cursor-pointer items-center justify-center text-center transition-all duration-200 hover:scale-105"
        onClick={() => contentRef.current?.scrollIntoView()}
      >
        <ChevronDown className="mt-4 h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;
