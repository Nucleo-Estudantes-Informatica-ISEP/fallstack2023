import { Company } from "@prisma/client";

import { BASE_URL } from "@/services/api";
import { DownloadIcon } from "@/styles/Icons";

import CompanySavesSection from "../CompanyHistorySection";

import download from "downloadjs";

interface StatsProps {
  company: Company;
}

const CompanySavedProfilesSection: React.FC<StatsProps> = ({ company }) => {
  const handleDownload = async () => {
    const res = await fetch(BASE_URL + "/export");
    const blob = await res.blob();
    download(blob, "fallstack2023.csv", "text/csv");
  };

  return (
    <section className="flex w-full flex-col items-center justify-center rounded-t-3xl bg-white p-4 text-black md:rounded-md md:p-8">
      <div className="relative w-full">
        <h1 className="mx-auto mt-6 w-3/4 text-center font-poppins text-2xl font-extrabold uppercase">
          Perfis Salvos
        </h1>
        <span
          className="absolute right-2 top-6 cursor-pointer text-3xl transition-colors hover:text-primary"
          onClick={handleDownload}
          title="Exportar para CSV"
        >
          <DownloadIcon />
        </span>
      </div>
      <CompanySavesSection company={company} />
    </section>
  );
};

export default CompanySavedProfilesSection;
