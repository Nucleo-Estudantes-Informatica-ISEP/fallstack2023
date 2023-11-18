"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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

import OpenCvSectionCompany from "../OpenCvSectionCompany";

interface HistorySectionProps {
  company: Company;
}

const CompanyHistorySection = ({ company }: HistorySectionProps) => {
  const [historyData, setHistoryData] = useState<HistoryData[]>([]);

  useEffect(() => {
    const fetchHistoryData = async () => {
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
    };

    fetchHistoryData();
  }, [company]);

  return (
    <div className="mt-12 flex w-full flex-col items-center justify-center">
      <Table
        aria-label="Example static collection table"
        className="mt-2 w-3/4 items-center justify-center"
      >
        <TableHeader>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Aluno
          </TableColumn>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Interesses
          </TableColumn>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            Data
          </TableColumn>
          <TableColumn className="w-1/3 text-center text-lg text-black">
            CV
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
                <TableCell className="text-center font-semibold text-black">
                  <Link
                    href={`/student/${item.student?.code}`}
                    className="text-primary"
                    target="_blank"
                  >
                    {item.student.name}
                  </Link>
                </TableCell>
                <TableCell className="text-center font-semibold text-black">
                  {item.student.interests ? (
                    item.student.interests.map((interest) => (
                      <span
                        className="h-12 overflow-x-hidden"
                        key={interest.name}
                      >
                        {interest.name},{" "}
                      </span>
                    ))
                  ) : (
                    <span>--</span>
                  )}
                </TableCell>
                <TableCell className="text-center font-semibold text-black">
                  {formatDateDDStrMonthHourMin(item.createdAt)}
                </TableCell>
                <TableCell className="text-center font-semibold text-black">
                  {item.student?.cv ? (
                    <OpenCvSectionCompany code={item.student?.code} />
                  ) : (
                    <span>--</span>
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

export default CompanyHistorySection;
