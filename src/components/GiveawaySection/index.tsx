"use client";

import { FunctionComponent, useState } from "react";

interface Student {
  name: string;
  id: number;
}

interface GiveawaySectionProps {
  students: Student[];
}

const GiveawaySection: FunctionComponent<GiveawaySectionProps> = ({
  students,
}) => {
  const maxRows = 10;
  const numRows = Math.ceil(students.length / maxRows);

  const generateRandomStudentId = () => {
    const randomStudent = Math.floor(Math.random() * students.length);
    return students[randomStudent].id;
  };

  const [selectedStudentId, setSelectedStudentId] = useState<Number>();

  const [isRandomizing, setIsRandomizing] = useState(false);

  const numberOfRandomStudents = 50;

  const handleGiveaway = (numberOfRandomStudents: number): void => {
    setIsRandomizing(true);
    const timeoutTimer = 100;

    for (let i = 0; i < numberOfRandomStudents; i++) {
      setTimeout(() => {
        setSelectedStudentId(generateRandomStudentId());
      }, timeoutTimer * i);
    }

    setTimeout(() => {
      setIsRandomizing(false);
    }, timeoutTimer * numberOfRandomStudents);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 rounded-3xl bg-white p-8">
      <h1 className="text-4xl font-bold text-black">
        Inscritos - {students.length}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
        {Array.from({ length: numRows }, (_, rowIndex) => {
          return students
            .slice(rowIndex * maxRows, (rowIndex + 1) * maxRows)
            .map((student, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className={`border px-4 py-2 text-center font-semibold text-primary ${
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
          handleGiveaway(numberOfRandomStudents);
        }}
        disabled={isRandomizing}
        className="rounded-xl bg-[#D9D9D9] px-8 py-4 text-lg font-semibold text-black transition-colors duration-200 ease-in-out hover:bg-[#BFBFBF] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#D9D9D9]"
      >
        Selecionar vencedor
      </button>
    </div>
  );
};

export default GiveawaySection;
