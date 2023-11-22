import { FunctionComponent } from "react";
import { motion } from "framer-motion";

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
        return `border-blue-500 text-blue-500 drop-shadow-[0px_0px_4px_#3b82f6] md:text-6xl`;
      case "Gold":
        return `border-yellow-400 text-yellow-400 drop-shadow-[0px_0px_4px_#facc15] md:text-6xl`;
      case "Silver":
        return `${
          theme === "light"
            ? "text-gray-500 drop-shadow-[2px_2px_20px_#6b7280]"
            : "text-gray-300 drop-shadow-[2px_2px_20px_#c0c0c0]"
        }  border-gray-500 md:text-6xl`;
      default:
        throw new Error("Tier not found");
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      viewport={{ once: true }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      className="flex flex-col items-center justify-center"
    >
      <h2
        className={`${getTierStyling(
          tier
        )} z-0 mx-2 mb-8 text-center font-poppins text-5xl font-semibold lg:mb-4`}
      >
        {tier}
      </h2>
      <section
        className={`mb-12 w-full rounded-3xl  border-2 border-black/50 p-4 md:w-5/6 md:p-8 ${
          theme === "light" ? "bg-gray-800/20" : "bg-white/20"
        }`}
      >
        <div className="mt-2 grid grid-cols-1 items-center justify-items-center gap-x-12 gap-y-2 xl:grid-cols-2">
          {companies.map((company) => {
            return <Company key={company.name} {...company} />;
          })}
        </div>
      </section>
    </motion.div>
  );
};

export default CompaniesContainer;
