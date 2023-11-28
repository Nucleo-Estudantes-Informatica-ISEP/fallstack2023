"use client";

import React from "react";

import { BASE_URL } from "@/services/api";
import { OpenCv } from "@/styles/Icons";

interface OpenCvProps {
  code?: string;
  className?: string;
}

const OpenCvSectionCompany: React.FC<OpenCvProps> = ({ code, className }) => {
  const handleCv = async (code: string) => {
    const res = await fetch(BASE_URL + `/students/${code}/cv`);
    const { url } = await res.json();
    window.open(url, "_blank");
  };
  return (
    <div className={`flex flex-col items-center text-black ${className}`}>
      {code && (
        <a
          onClick={() => handleCv(code)}
          className="cursor-pointer pl-2 underline"
        >
          <OpenCv className="mb-1 h-5 w-5 text-primary"></OpenCv>
        </a>
      )}
    </div>
  );
};

export default OpenCvSectionCompany;
