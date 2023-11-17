import React from "react";

import Sponsor, { SponsorProps } from "../Sponsor";

interface SponsorsContainerProps {
  sponsors: SponsorProps[];
}
const SponsorsContainer: React.FC<SponsorsContainerProps> = ({ sponsors }) => {
  return (
    <div className="mx-auto flex w-full flex-wrap items-center justify-around md:w-[80%]">
      {sponsors.map(({ name, logoHref, website }) => (
        <Sponsor key={name} logoHref={logoHref} name={name} website={website} />
      ))}
    </div>
  );
};

export default SponsorsContainer;
