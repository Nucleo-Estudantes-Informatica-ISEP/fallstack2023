"use client";

import { FunctionComponent, useState } from "react";
import Swal from "sweetalert";

import { StudentsWithEmail } from "@/types/StudentsWithEmail";

import ConfettiEffect from "../ConfettiEffect";

interface GiveawaySectionProps {
  students: StudentsWithEmail[];
  numberOfRandomizedStudents: number;
  tableRows: number;
}

const GiveawaySection: FunctionComponent<GiveawaySectionProps> = ({
  students,
  numberOfRandomizedStudents,
  tableRows,
}) => {
  const [selectedStudentId, setSelectedStudentId] = useState<number>();
  const [isConfettiVisible, setIsConfettiVisible] = useState<boolean>(false);
  const [isRandomizing, setIsRandomizing] = useState<boolean>(false);

  const numRows = Math.ceil(students.length / tableRows);

  const generateRandomStudentId = () => {
    const randomStudent = Math.floor(Math.random() * students.length);
    return students[randomStudent].id;
  };

  const handleGiveaway = (numberOfRandomStudents: number): void => {
    setIsRandomizing(true);
    const timeoutTimer = 100;

    let id: number = 0;
    for (let i = 0; i < numberOfRandomStudents; i++) {
      setTimeout(() => {
        id = generateRandomStudentId();
        setSelectedStudentId(id);
      }, timeoutTimer * i);
    }

    setTimeout(() => {
      setIsConfettiVisible(true);
    }, timeoutTimer * numberOfRandomStudents);

    setTimeout(
      () => {
        Swal({
          title: "Parabéns!",
          text: `O vencedor(a) foi ${students.find(
            (student) => student.id === id
          )?.name} 🎉 \n ${students.find((student) => student.id === id)?.user
            .email}`,
          icon: "success",
        });
      },
      timeoutTimer * numberOfRandomStudents + 500
    );

    setTimeout(
      () => {
        setIsConfettiVisible(false);
        setIsRandomizing(false);
      },
      timeoutTimer * numberOfRandomStudents + 3000
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 rounded-3xl bg-white p-8">
      <h1 className="text-4xl font-bold text-black">
        Inscritos - {students.length}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
        {Array.from({ length: numRows }, (_, rowIndex) => {
          return students
            .slice(rowIndex * tableRows, (rowIndex + 1) * tableRows)
            .map((student, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className={`flex items-center justify-center border px-4 py-2 text-center font-semibold text-primary ${
                    student.id === selectedStudentId && "bg-primary text-white"
                  }`}
                >
                  {student.name}
                </div>
              );
            });
        })}
      </div>
      <button
        onClick={() => {
          handleGiveaway(numberOfRandomizedStudents);
        }}
        disabled={isRandomizing}
        className="rounded-xl bg-[#D9D9D9] px-8 py-4 text-lg font-semibold text-black transition-colors duration-200 ease-in-out hover:bg-[#BFBFBF] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#D9D9D9]"
      >
        Selecionar vencedor 🎉
      </button>
      <ConfettiEffect visible={isConfettiVisible} />
    </div>
  );
};

export default GiveawaySection;
