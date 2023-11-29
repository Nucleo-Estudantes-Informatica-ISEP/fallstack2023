import { Company } from "@prisma/client";

import DownloadButton from "@/components/DownloadButton";

import CompanySavesSection from "../CompanyHistorySection";

interface StatsProps {
  company: Company;
}

const CompanySavedProfilesSection: React.FC<StatsProps> = ({ company }) => {
  return (
    <section className="flex w-full flex-col items-center justify-center rounded-t-3xl bg-white p-4 text-black md:rounded-md md:p-8">
      <div className="relative w-full">
        <h1 className="mx-auto mt-6 w-3/4 text-center font-poppins text-2xl font-extrabold uppercase">
          Perfis Salvos
        </h1>
        <DownloadButton className="absolute right-2 top-6 text-3xl" />
      </div>
      <CompanySavesSection company={company} />
    </section>
  );
};

export default CompanySavedProfilesSection;
