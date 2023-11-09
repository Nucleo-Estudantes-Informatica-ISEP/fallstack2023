import { Student } from "@prisma/client";

import HistorySection from "../../HistorySection";

interface StatsProps {
  student: Student;
  stats?: number[];
}

const StatsSection: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="flex w-full flex-col rounded-t-3xl bg-white py-4 md:rounded-md">
      <div className="mx-12 mb-4 mt-12 flex justify-around">
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Total de scans
          </h2>
          <p className="text-left text-3xl font-bold text-black">
            {stats ? stats[0] : 0}
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Total de gravações de perfil
          </h2>
          <p className="text-left text-3xl font-bold text-black">
            {stats ? stats[1] : 0}
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-left text-xl font-semibold text-gray-600">
            Empresas restantes
          </h2>
          <p className="text-left text-3xl font-bold text-black">{10}</p>
        </div>
      </div>
      <HistorySection />
    </section>
  );
};

export default StatsSection;
