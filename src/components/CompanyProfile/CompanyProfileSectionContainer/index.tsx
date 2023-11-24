"use client";

import { useState } from "react";
import { Company } from "@prisma/client";
import { motion } from "framer-motion";

import CompanyImage from "../CompanyImage";
import CompanySavedProfilesSection from "../CompanySavedProfilesSection";
import CompanyStatsSection from "../CompanyStatsSection";

interface CompanyProfileSectionContainerProps {
  company: Company;
  globalStats: number[];
  totalStudents: number;
}

const CompanyProfileSectionContainer: React.FC<
  CompanyProfileSectionContainerProps
> = ({ company, globalStats, totalStudents }) => {
  const [activeTab, setActiveTab] = useState<"Sumário" | "Perfis Salvos">(
    "Sumário"
  );
  return (
    <div className="bg-company-secondary h-full w-full items-center justify-center md:mb-12">
      <div
        className={`bg-company mb-12 flex h-full w-full flex-col items-center pt-4`}
      >
        <motion.div
          animate={{}}
          transition={{ duration: 0.5 }}
          className="mt-4 flex flex-col items-center justify-center"
        >
          <CompanyImage company={company} />
          <p className="my-2 items-center text-2xl">
            Bem vindo/a {company.name}
          </p>
        </motion.div>

        <div className="relative mb-4 mt-8 flex w-full max-w-3xl flex-col items-center justify-between gap-y-4 text-center text-lg md:mb-0 md:flex-row lg:w-5/6">
          <motion.div
            className="absolute bottom-0 left-0 hidden w-44 border-b-4 border-primary md:block"
            animate={{
              x:
                activeTab === "Sumário"
                  ? 0
                  : activeTab === "Perfis Salvos"
                  ? "337%"
                  : 0,
            }}
            initial={"165%"}
          ></motion.div>
          <button
            onClick={() => setActiveTab("Sumário")}
            className={`w-44 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Sumário" ? "font-bold text-primary" : "font-normal"
            }`}
          >
            Sumário
          </button>
          <button
            onClick={() => setActiveTab("Perfis Salvos")}
            className={`w-44 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Perfis Salvos"
                ? "font-bold text-primary"
                : "font-normal"
            }`}
          >
            Perfis Salvos
          </button>
        </div>
      </div>

      <div className="mx-auto mb-12 w-full max-w-4xl md:w-5/6">
        {activeTab === "Sumário" && (
          <CompanyStatsSection
            company={company}
            stats={globalStats}
            students={totalStudents}
          />
        )}
        {activeTab === "Perfis Salvos" && (
          <CompanySavedProfilesSection company={company} />
        )}
      </div>
    </div>
  );
};

export default CompanyProfileSectionContainer;
