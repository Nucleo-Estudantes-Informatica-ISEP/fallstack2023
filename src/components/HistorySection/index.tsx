import { SavedStudentWithSavedBy } from "@/types/SavedStudentWithSavedBy";
import { formatDateDDStrMonthHourMin } from "@/utils/date";

interface HistorySectionProps {
  historyData: SavedStudentWithSavedBy[];
  isCompany?: boolean;
}

const HistorySection = ({ historyData, isCompany }: HistorySectionProps) => {
  return (
    <div className="mb-8 mt-12 flex w-full flex-col items-center justify-center text-black">
      <h1 className="mx-auto mb-4 text-center font-poppins text-2xl font-extrabold uppercase text-black">
        Histórico de Scans
      </h1>
      <div className="flex w-full flex-row items-center justify-between border-b-2 border-black px-1 py-3 font-bold">
        <div className="flex w-1/3 justify-center px-1 max-md:w-5/12">Nome</div>
        <div className="flex w-1/3 justify-center px-1 max-md:w-4/12">Data</div>
        <div className="flex w-1/3 justify-center px-1 max-md:w-3/12">Ação</div>
      </div>
      <div
        className="firefox-scrollbar-margin max-h-80 w-full overflow-y-auto pl-1 scrollbar scrollbar-track-transparent scrollbar-thumb-slate-500 scrollbar-thumb-rounded-lg scrollbar-w-1"
        style={{ scrollbarGutter: "stable" }}
      >
        {!historyData.length ? (
          <div className="flex flex-row py-3">
            <div className="flex w-full justify-center">
              Os teus scans aparecerão aqui!
            </div>
          </div>
        ) : (
          historyData.map((item) => (
            <div
              key={`${item.studentId}-${item.isSaved}`}
              className="flex flex-row items-center border-t-2 py-4 first:border-0"
            >
              <div className="flex w-1/3 justify-center px-1 text-center font-bold max-md:w-5/12">
                <span className="w-full truncate">
                  {isCompany
                    ? item.student.name
                    : item.savedBy.company
                    ? item.savedBy.company.name
                    : item.savedBy.student?.name}
                </span>
              </div>
              <div className="flex w-1/3 justify-center px-1 max-md:w-4/12">
                {formatDateDDStrMonthHourMin(item.createdAt)}
              </div>
              <div className="flex w-1/3 justify-center px-1 font-bold max-md:w-3/12">
                {item.isSaved ? (
                  <span className="text-primary">SALVO</span>
                ) : (
                  <span className="text-black">SCAN</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistorySection;
