"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Company, Interest } from "@prisma/client";
import Skeleton from "react-loading-skeleton";
import swal from "sweetalert";

import { HistoryData } from "@/types/HistoryData";
import { BASE_URL } from "@/services/api";
import { formatDateDDStrMonthHourMin } from "@/utils/date";

import OpenCvSectionCompany from "../OpenCvSectionCompany";

interface HistorySectionProps {
  company: Company;
}

const CompanySavesSection = ({ company }: HistorySectionProps) => {
  const [historyData, setHistoryData] = useState<HistoryData[] | null>(null);

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch(BASE_URL + "/companies/history");
        const data = await response.json();

        if (data.error) swal("Erro ao buscar histórico de scans!");

        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching history data:", error);
      }
    };

    fetchHistoryData();
  }, [company]);

  function shuffleArray<T>(array: T[]) {
    const newArr: T[] = array.map((e) => e);
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  return (
    <div className="my-4 flex w-full flex-col items-center justify-center text-black">
      <div className="flex w-full flex-row items-center justify-between border-b-2 border-black px-1 py-3 font-bold">
        <div className="flex w-3/12 justify-center px-1 max-md:w-1/2">
          Aluno
        </div>
        <div className="flex w-1/6 justify-center px-1 max-md:w-1/3">Data</div>
        <div className="flex w-1/2 justify-center px-1 max-md:hidden">
          Interesses
        </div>
        <div className="flex w-1/12 justify-center px-1 max-md:w-1/6">CV</div>
      </div>
      <div
        className="firefox-scrollbar-margin max-h-80 w-full overflow-y-scroll pl-1 scrollbar scrollbar-track-transparent scrollbar-thumb-slate-500 scrollbar-thumb-rounded-lg scrollbar-w-1"
        style={{ scrollbarGutter: "stable" }}
      >
        {!historyData ? (
          Array(3)
            .fill(1)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-row items-center border-t-2 py-4 first:border-0"
              >
                <div className="flex w-full justify-center">
                  <Skeleton containerClassName="flex-1" />
                </div>
              </div>
            ))
        ) : !historyData.length ? (
          <div className="flex flex-row py-3">
            <div className="flex w-full justify-center">Sem perfis salvos.</div>
          </div>
        ) : (
          historyData.map((item) => (
            <div
              key={item.studentId}
              className="flex flex-row items-center border-t-2 py-4 first:border-0"
            >
              <div className="flex w-3/12 justify-center px-1 text-center text-primary hover:underline max-md:w-1/2">
                <Link
                  href={"/student/" + item.student.code}
                  className="w-full truncate font-bold"
                >
                  {item.student.name}
                </Link>
              </div>
              <div className="flex w-1/6 justify-center px-1 text-center max-md:w-1/3">
                {formatDateDDStrMonthHourMin(item.createdAt)}
              </div>
              <div className="flex w-1/2 justify-center px-1 max-md:hidden">
                <span
                  className="truncate"
                  title="Aceda ao perfil para ver as informações completas."
                >
                  {!item.student.interests.length ? (
                    <span className="text-gray-400">—</span>
                  ) : (
                    shuffleArray<Interest>(item.student.interests).map(
                      (interest, i) => (
                        <>
                          {interest.name}
                          {i !== item.student.interests.length - 1 ? ", " : ""}
                        </>
                      )
                    )
                  )}
                </span>
              </div>
              <div className="flex w-1/12 justify-center px-1 max-md:w-1/6">
                {item.student.cv ? (
                  <OpenCvSectionCompany code={item.student.code} />
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CompanySavesSection;
