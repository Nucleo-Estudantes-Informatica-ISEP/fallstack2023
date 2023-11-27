import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { SavedStudentWithSavedBy } from "@/types/SavedStudentWithSavedBy";
import { formatDateDDStrMonthHourMin } from "@/utils/date";

interface HistorySectionProps {
  historyData: SavedStudentWithSavedBy[];
}

const HistorySection = ({ historyData }: HistorySectionProps) => {
  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center">
      <h1 className="mx-auto text-center font-poppins text-2xl font-extrabold uppercase text-black">
        Histórico de Scans
      </h1>
      <Table
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
                  {item.savedBy.company
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
      </Table>
    </div>
  );
};

export default HistorySection;
