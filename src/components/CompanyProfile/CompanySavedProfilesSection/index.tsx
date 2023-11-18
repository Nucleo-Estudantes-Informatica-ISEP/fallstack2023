import { Company } from "@prisma/client";

import CompanyHistorySection from "../CompanyHistorySection";

interface StatsProps {
  company: Company;
}

const CompanySavedProfilesSection: React.FC<StatsProps> = ({ company }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-t-3xl bg-white p-4 md:rounded-md md:p-8">
      <h1 className="mx-auto my-2 w-1/2 text-center font-poppins text-2xl font-extrabold uppercase text-black">
        Perfis Salvos
      </h1>
      <CompanyHistorySection company={company} />
    </section>
  );
};

export default CompanySavedProfilesSection;
