"use client";

import { FunctionComponent, useRef } from "react";

import ComingSoon from "@/components/ComingSoon";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import GenericContainer from "@/components/GenericContainer";
import Header from "@/components/Header";
import HeroContainer from "@/components/HeroContainer";
import ThemeProvider from "@/components/Theme/ThemeProvider";

import LogoDark from "../../public/assets/images/logo_dark.png";
import LogoWhite from "../../public/assets/images/logo_white.png";
import NeiLogoBlack from "../../public/assets/images/logo-black.png";
import NeiLogoWhite from "../../public/assets/images/logo-white.png";

const App: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider>
      <HeroContainer>
        <GenericContainer>
          <Header
            logoSrc={{
              white: LogoWhite,
              dark: LogoDark,
            }}
            logoAlt="Logo principal do evento Fall-Stack 2023"
            contentRef={contentRef}
          />
          <Content contentRef={contentRef} />
          <ComingSoon />
          <Footer
            lastEditionUrl="https://fallstack-22-23.nei-isep.org/"
            neiLogoSrc={{
              white: NeiLogoWhite,
              dark: NeiLogoBlack,
            }}
          />
        </GenericContainer>
      </HeroContainer>
    </ThemeProvider>
  );
};

export default App;
