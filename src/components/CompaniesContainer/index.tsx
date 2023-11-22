import { FunctionComponent } from "react";

import { CompaniesTier } from "../../utils/GetColorTier";
import Company, { CompanyProps } from "../Company";

import { useTheme } from "next-themes";

interface CompaniesContainerProps {
  tier: CompaniesTier;
  companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
  tier,
  companies,
}) => {
  const { theme } = useTheme();

  const getTierStyling = (tier: CompaniesTier): string => {
    switch (tier) {
      case "Diamond":
        return `border-blue-500 text-blue-500 drop-shadow-[0px_0px_4px_#3b82f6] text-4xl md:text-6xl`;
      case "Gold":
        return `border-yellow-400 text-yellow-400 drop-shadow-[0px_0px_4px_#facc15] text-4xl md:text-6xl`;
      case "Silver":
        return `border-gray-500 drop-shadow-[2px_6px_4px_#c0c0c0] text-gray-300  text-4xl md:text-6xl`;
      default:
        throw new Error("Tier not found");
    }
  };

  return (
    <section
      className={`mb-12 w-3/4 rounded-3xl border-2 border-black border-opacity-50 ${
        theme === "light" ? "bg-gray-800" : "bg-white"
      } bg-opacity-20 pt-10`}
    >
      <h2
        className={`${getTierStyling(
          tier
        )} z-0 mx-2 mb-8 text-center font-semibold lg:mb-4`}
      >
        {tier}
      </h2>

      <div className="mt-2 grid grid-cols-1 place-items-center justify-center gap-x-12 gap-y-2 xl:grid-cols-2">
        {companies.map((company) => {
          return <Company key={company.name} {...company} />;
        })}
      </div>
    </section>
  );
};

export default CompaniesContainer;
