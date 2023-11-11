"use client";

import { FunctionComponent, useRef } from "react";

<<<<<<< HEAD
import Logo from "../../public/assets/images/logo_white.png";
=======
import ComingSoon from "@/components/ComingSoon";
import ThemeProvider from "@/components/Theme/ThemeProvider";

import LogoDark from "../../public/assets/images/logo_dark.png";
import LogoWhite from "../../public/assets/images/logo_white.png";
import NeiLogoBlack from "../../public/assets/images/logo-black.png";
import NeiLogoWhite from "../../public/assets/images/logo-white.png";
>>>>>>> dev
import Content from "../components/Content";
import Footer from "../components/Footer";
import GenericContainer from "../components/GenericContainer";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";

const App: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
<<<<<<< HEAD
    <HeroContainer>
      <GenericContainer>
        <Header
          logoSrc={Logo}
          logoAlt="Logo principal do evento Fall-Stack 2023"
          eventName="FALLSTACK"
          eventDate="28 e 29 de Novembro"
          contentRef={contentRef}
        />
        <Content contentRef={contentRef} />
        <Footer lastEditionUrl="https://fallstack-22-23.nei-isep.org/" />
      </GenericContainer>
    </HeroContainer>
=======
    <ThemeProvider>
      <HeroContainer>
        <GenericContainer>
          <Topbar />
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
>>>>>>> dev
  );
};

export default App;
