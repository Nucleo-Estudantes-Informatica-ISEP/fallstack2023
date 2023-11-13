"use client";

import React from "react";
import { Student } from "@prisma/client";

import { BASE_URL } from "@/services/api";
import { OpenCv } from "@/styles/Icons";

interface OpenCvProps {
  student: Student;
  text: string;
}

const OpenCvSection: React.FC<OpenCvProps> = ({ student, text }) => {
  const handleCv = async (student: Student) => {
    const res = await fetch(BASE_URL + `/students/${student.code}/cv`);
    const { url } = await res.json();
    window.open(url, "_blank");
  };
  return (
    <div className="my-4 flex flex-col space-y-2 px-12 text-black">
      <div className="flex">
        <h3 className="text-left text-xl font-bold text-gray-600">
          Curriculum Vitae
        </h3>
      </div>
      <div className="flex items-center">
        <OpenCv className="mb-1 h-5 w-5"></OpenCv>
        <a
          onClick={() => handleCv(student)}
          className="cursor-pointer pl-2 underline"
        >
          {text}
        </a>
      </div>
    </div>
  );
};

export default OpenCvSection;
