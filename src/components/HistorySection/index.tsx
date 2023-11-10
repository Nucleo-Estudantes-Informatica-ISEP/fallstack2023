"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import swal from "sweetalert";

import { HistoryData } from "@/types/HistoryData";
import { BASE_URL } from "@/services/api";
import { formatDateDDStrMonthHourMin } from "@/utils/date";

interface HistorySectionProps {
  code: string;
}

const HistorySection = ({ code }: HistorySectionProps) => {
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/students/${code}/history`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (data.error) swal("Erro ao buscar histórico de scans!");

        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, [code]);

  return (
    <div className="my-2 flex w-full flex-col items-center justify-center">
      <h1 className="mx-auto w-1/2 text-center font-poppins text-lg font-semibold uppercase text-black">
        Histórico de Scans
      </h1>
      <Table
        aria-label="Example static collection table"
        className="w-3/4 items-center justify-center"
      >
        <TableHeader>
          <TableColumn className="text-start text-gray-500">
            Empresa
          </TableColumn>
          <TableColumn className="text-start text-gray-500">Data</TableColumn>
          <TableColumn className="text-start text-gray-500">Ação</TableColumn>
        </TableHeader>
        <TableBody className="justify-center text-center">
          {historyData ? (
            historyData.map((item) => (
              <TableRow
                key={item.studentId}
                className="border-t-2 border-gray-500"
              >
                <TableCell className="text-start font-poppins font-semibold text-black">
                  {item.company.name}
                </TableCell>
                <TableCell className="text-start font-poppins font-semibold text-black">
                  {formatDateDDStrMonthHourMin(item.createdAt)}
                </TableCell>
                <TableCell className="text-start font-poppins font-semibold text-black">
                  {item.isScanned ? (
                    <span className="text-primary">SALVOU</span>
                  ) : (
                    <span className="text-secondary">SCAN</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="border-t-2 border-gray-500">
              <TableCell className="text-start font-poppins font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-start font-poppins font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-start font-poppins font-semibold text-black">
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
