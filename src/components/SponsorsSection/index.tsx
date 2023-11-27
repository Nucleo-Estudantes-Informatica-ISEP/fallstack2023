import { FunctionComponent } from "react";

import { Sponsors } from "../../utils/Sponsors";
import HeadingText from "../HeadingText";
import SponsorsContainer from "../SponsorsContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="my-24 w-full">
      <HeadingText text="Patrocinadores" />
      <SponsorsContainer sponsors={Sponsors} />
    </section>
  );
};

export default CompaniesSection;
