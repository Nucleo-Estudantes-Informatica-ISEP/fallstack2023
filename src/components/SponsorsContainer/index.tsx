import React from "react";

import Sponsor, { SponsorProps } from "../Sponsor";

import { useTheme } from "next-themes";

interface SponsorsContainerProps {
  sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
  const { theme } = useTheme();

  return (
    <section
      className={`mx-auto mb-12 w-full rounded-3xl  border-2 border-black/50 p-4 md:w-5/6 md:p-8 ${
        theme === "light" ? "bg-gray-800/20" : "bg-white/20"
      }`}
    >
      <div className="mx-auto flex w-full flex-wrap items-center justify-around md:w-[80%]">
        {sponsors.map(({ name, logoHref, website }) => (
          <Sponsor
            key={name}
            logoHref={logoHref}
            name={name}
            website={website}
          />
        ))}
      </div>
    </section>
  );
};

export default SponsorsContainer;
