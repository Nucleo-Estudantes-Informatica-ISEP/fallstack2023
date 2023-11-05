import { Student } from "@prisma/client";
import HistorySection from "../HistorySection";

interface StatsProps {
  student: Student;
  hidden?: boolean;
}

const StatsSection: React.FC<StatsProps> = ({ student, hidden }) => {
  return (
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="flex flex-col">
        <div className="flex p-10 space-x-10">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-left text-gray-600">
              Total de scans
            </h2>
            <p className="text-3xl font-bold text-left text-black">10</p>
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
      </div>
    </section>
  );
};

export default StatsSection;
