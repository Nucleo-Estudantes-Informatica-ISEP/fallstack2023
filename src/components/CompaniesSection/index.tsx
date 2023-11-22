import { FunctionComponent } from "react";

import { SilverCompanies } from "../../utils/SilverCompanies";
import CompaniesContainer from "../CompaniesContainer";
import HeadingText from "../HeadingText";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <HeadingText text="Empresas" />
      <CompaniesContainer companies={SilverCompanies} tier="Silver" />
    </section>
  );
};

export default CompaniesSection;
