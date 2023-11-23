import { FunctionComponent } from "react";

import { GoldCompanies } from "@/utils/GoldCompanies";

import { SilverCompanies } from "../../utils/SilverCompanies";
import CompaniesContainer from "../CompaniesContainer";
import HeadingText from "../HeadingText";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center text-center">
      <HeadingText text="Empresas" />
      <CompaniesContainer companies={GoldCompanies} tier="Gold" />
      <CompaniesContainer companies={SilverCompanies} tier="Silver" />
    </section>
  );
};

export default CompaniesSection;
