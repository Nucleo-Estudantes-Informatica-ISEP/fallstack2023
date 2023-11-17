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
import { Company } from "@prisma/client";
import swal from "sweetalert";

import { HistoryData } from "@/types/HistoryData";
import { BASE_URL } from "@/services/api";
import { formatDateDDStrMonthHourMin } from "@/utils/date";

interface HistorySectionProps {
  code?: string;
  company?: Company;
}

const HistorySection = ({ code, company }: HistorySectionProps) => {
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
      if (code) {
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
      } else if (company) {
        try {
          const response = await fetch(
            `${BASE_URL}/companies/${company.id}/history`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();

          if (data.error) swal("Erro ao buscar histórico de scans!");

          setHistoryData(data);
        } catch (error) {
          console.error("Error fetching history data:", error);
        }
      }
    };

    fetchHistoryData();
  }, [code, company]);

  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center">
      <h1 className="mx-auto text-center font-poppins text-2xl font-extrabold uppercase text-black">
        Histórico de Scans
      </h1>
      <Table
        aria-label="Example static collection table"
        className="mt-2 w-5/6 items-center justify-center"
      >
        <TableHeader>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            {code ? "Empresa" : "Aluno"}
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
                <TableCell className="text-center font-poppins font-semibold text-gray-600">
                  {item.company.name}
                </TableCell>
                <TableCell className="text-center font-poppins font-semibold text-gray-600">
                  {formatDateDDStrMonthHourMin(item.createdAt)}
                </TableCell>
                <TableCell className="text-center font-poppins font-semibold text-gray-600">
                  {item.isSaved ? (
                    <span className="text-primary">SALVOU</span>
                  ) : (
                    <span className="text-gray-600">SCAN</span>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="border-t-2 border-gray-600">
              <TableCell className="text-center font-poppins font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-center font-poppins font-semibold text-black">
                --
              </TableCell>
              <TableCell className="text-center font-poppins font-semibold text-black">
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
