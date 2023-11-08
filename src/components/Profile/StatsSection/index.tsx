import { useEffect, useState } from "react";
import { Student } from "@prisma/client";

import { BASE_URL } from "@/services/api";

import HistorySection from "../../HistorySection";

interface StatsProps {
  student: Student;
}

const StatsSection: React.FC<StatsProps> = ({ student }) => {
  const [companiesLeft, setCompaniesLeft] = useState(0);

  useEffect(() => {
    async function fetchCompaniesLeft() {
      const res = await fetch(`${BASE_URL}/students/${student.code}/stats`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.json();
      if (res.status !== 200) {
        console.log(json);
        return;
      }
      setCompaniesLeft(json);
    }

    fetchCompaniesLeft();
  }, [student.code]);

  return (
    <section className="flex w-full flex-col rounded-md bg-white pb-8">
      <div className="mx-12 mb-4 mt-12 flex justify-around">
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Total de scans
          </h2>
          <p className="text-left text-3xl font-bold text-black">10</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Total de gravações de perfil
          </h2>
          <p className="text-left text-3xl font-bold text-black">6</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Empresas restantes
          </h2>
          <p className="text-left text-3xl font-bold text-black">
            {companiesLeft}
          </p>
        </div>
      </div>
      <HistorySection />
    </section>
  );
};

export default StatsSection;
