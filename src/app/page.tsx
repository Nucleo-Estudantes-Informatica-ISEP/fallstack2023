"use client";

import { FunctionComponent, useRef } from "react";

import ComingSoon from "@/components/ComingSoon";
import HeroContainer from "@/components/HeroContainer";

import LogoDark from "../../public/assets/images/logo_dark.png";
import LogoWhite from "../../public/assets/images/logo_white.png";
import NeiLogoBlack from "../../public/assets/images/logo-black.png";
import NeiLogoWhite from "../../public/assets/images/logo-white.png";
import Content from "../components/Content";
import Footer from "../components/Footer";
import GenericContainer from "../components/GenericContainer";
import HeadsUp from "../components/HeadsUp";
import Hero from "../components/Hero";

const App: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <HeroContainer>
      <GenericContainer>
        <Hero
          logoSrc={{
            white: LogoWhite,
            dark: LogoDark,
          }}
          logoAlt="Logo principal do evento Fall-Stack 2023"
          contentRef={contentRef}
        />
        <Content contentRef={contentRef} />
        <ComingSoon />
        <HeadsUp />
        <Footer
          lastEditionUrl="https://fallstack2022.nei-isep.org/"
          neiLogoSrc={{
            white: NeiLogoWhite,
            dark: NeiLogoBlack,
          }}
        />
      </GenericContainer>
    </HeroContainer>
  );
};

export default App;
