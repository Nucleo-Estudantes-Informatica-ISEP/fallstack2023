import { FunctionComponent } from "react";

import { Sponsors } from "../../utils/Sponsors";
import HeadingText from "../HeadingText";
import SponsorsContainer from "../SponsorsContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center gap-y-10 text-center md:gap-y-16">
      <HeadingText className={"text-3xl md:text-5xl"} text="Agradecimentos" />
      <SponsorsContainer sponsors={Sponsors} />
    </section>
  );
};

export default CompaniesSection;
