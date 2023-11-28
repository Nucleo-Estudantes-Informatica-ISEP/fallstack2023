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
      <div className="flex w-full flex-row items-center justify-between border-b-2 border-black py-3 font-bold">
        <div className="flex w-1/3 justify-center px-1 max-md:w-5/12">Nome</div>
        <div className="flex w-1/3 justify-center px-1 max-md:w-4/12">Data</div>
        <div className="flex w-1/3 justify-center px-1 max-md:w-3/12">Ação</div>
      </div>
      <div className="max-h-80 w-full overflow-y-scroll">
        {!historyData.length ? (
          <div className="flex flex-row py-3">
            <div className="flex w-full justify-center">
              Os teus scans aparecerão aqui!
            </div>
          </div>
        ) : (
          historyData.map((item) => (
            <div
              key={item.studentId}
              className="flex flex-row items-center border-t-2 py-4 first:border-0"
            >
              <div className="flex w-1/3 justify-center px-1 text-center max-md:w-5/12">
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

      {/* <Table
        aria-label="Example static collection table"
        className="mt-2 w-5/6 items-center justify-center"
        classNames={{
          base: "max-h-[275px] overflow-y-scroll",
        }}
      >
        <TableHeader>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Nome
          </TableColumn>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Data
          </TableColumn>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Ação
          </TableColumn>
        </TableHeader>
        <TableBody className="justify-center text-center">
          {historyData && historyData.length !== 0 ? (
            historyData.map((item) => (
              <TableRow
                key={item.studentId}
                className={
                  historyData.indexOf(item) === 0
                    ? "border-t-2 border-gray-600"
                    : "border-t-2 border-gray-300"
                }
              >
                <TableCell className="text-center font-semibold text-gray-600">
                  {isCompany
                    ? item.student.name
                    : item.savedBy.company
                    ? item.savedBy.company.name
                    : item.savedBy.student?.name}
                </TableCell>
                <TableCell className="text-center font-semibold text-black">
                  {formatDateDDStrMonthHourMin(item.createdAt)}
                </TableCell>
                <TableCell className="text-center font-semibold text-black">
                  {item.isSaved ? (
                    <span className="text-primary">SALVO</span>
                  ) : (
                    <span className="text-black">SCAN</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="border-t-2 border-gray-600">
              <TableCell className="text-center font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-center font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-center font-semibold text-black">
                --
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table> */}
    </div>
  );
};

export default HistorySection;
