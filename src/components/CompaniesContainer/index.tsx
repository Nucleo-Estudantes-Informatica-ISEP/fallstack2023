import { FunctionComponent } from "react";

import { CompaniesTier } from "../../utils/GetColorTier";
import Company, { CompanyProps } from "../Company";

interface CompaniesContainerProps {
  tier: CompaniesTier;
  companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
  tier,
  companies,
}) => {
  const getTierStyling = (tier: CompaniesTier): string => {
    switch (tier) {
      case "Diamond":
        return `border-blue-500 text-blue-500 drop-shadow-[0px_0px_4px_#3b82f6] text-xl md:text-6xl`;
      case "Gold":
        return `border-yellow-400 text-yellow-400 drop-shadow-[0px_0px_4px_#facc15] text-xl md:text-6xl`;
      case "Silver":
        return `border-gray-500 text-gray-500 drop-shadow-[0px_0px_4px_#6b7280] text-xl md:text-6xl`;
      default:
        throw new Error("Tier not found");
    }
  };

  return (
    <section className="mb-12">
      <div>
        <h2
          className={`${getTierStyling(
            tier
          )} z-0 mb-8 border-b-2 text-center lg:mb-4`}
        >
          {tier}
        </h2>
      </div>

      <div className="mt-4 grid grid-cols-responsiveness-180px-columns place-items-center justify-center gap-x-12 gap-y-4 lg:mt-12  xl:grid-cols-3">
        {companies.map((company) => {
          return <Company key={company.name} {...company} />;
        })}
      </div>
    </section>
  );
};

export default CompaniesContainer;
