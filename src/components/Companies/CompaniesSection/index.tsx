import { FunctionComponent } from "react";

import { DiamondCompanies } from "@/utils/DiamondCompanies";
import { GoldCompanies } from "@/utils/GoldCompanies";

import { SilverCompanies } from "../../../utils/SilverCompanies";
import HeadingText from "../../HeadingText";
import CompaniesContainer from "../CompaniesContainer";

const CompaniesSection: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center gap-y-10 text-center md:gap-y-16">
      <HeadingText text="Empresas" />
      <CompaniesContainer companies={DiamondCompanies} tier="Diamond" />
      <CompaniesContainer companies={GoldCompanies} tier="Gold" />
      <CompaniesContainer companies={SilverCompanies} tier="Silver" />
    </section>
  );
};

export default CompaniesSection;
