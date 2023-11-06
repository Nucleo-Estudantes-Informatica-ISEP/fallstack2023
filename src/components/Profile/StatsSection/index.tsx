import { Student } from "@prisma/client";
import HistorySection from "../../HistorySection";

interface StatsProps {
  student: Student;
}

const StatsSection: React.FC<StatsProps> = ({ student }) => {
  return (
    <section className="w-full flex flex-col bg-white rounded-md pb-8">
      <div className="flex mx-12 mt-12 mb-4 justify-around">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-left text-gray-600">
            Total de scans
          </h2>
          <p className="text-3xl font-bold text-left text-black">
            10
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-left text-gray-600">
            Total de gravações de perfil
          </h2>
          <p className="text-3xl font-bold text-left text-black">6</p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-left text-gray-600">
            Empresas restantes
          </h2>
          <p className="text-3xl font-bold text-left text-black">6</p>
        </div>
      </div>
      <HistorySection />
    </section>
  );
};

export default StatsSection;
