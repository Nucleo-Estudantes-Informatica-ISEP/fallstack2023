"use client";

import { FunctionComponent, useRef } from "react";

import Topbar from "@/components/TopBar";

import LogoDark from "../../public/assets/images/logo_dark.png";
import LogoWhite from "../../public/assets/images/logo_white.png";
import Content from "../components/Content";
import Footer from "../components/Footer";
import GenericContainer from "../components/GenericContainer";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";

const App: FunctionComponent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
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
        <Footer lastEditionUrl="https://fallstack-22-23.nei-isep.org/" />
      </GenericContainer>
    </HeroContainer>
  );
};

export default App;
