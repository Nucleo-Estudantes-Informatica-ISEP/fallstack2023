"use client";

import { useState } from "react";

import { BASE_URL } from "@/services/api";
import { DownloadIcon } from "@/styles/Icons";

import Spinner from "../Spinner";

import download from "downloadjs";

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className }) => {
  const handleDownload = async () => {
    if (isLoading) return;
    setIsLoading(true);
    const res = await fetch(BASE_URL + "/export");
    const data = await res.blob();
    download(data, "fallstack2023.csv", "text/csv");
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <span
      className={`cursor-pointer transition-colors hover:text-primary ${
        isLoading && "text-primary"
      } ${className}`}
      onClick={handleDownload}
      title="Exportar para CSV"
    >
      {isLoading ? <Spinner /> : <DownloadIcon />}
    </span>
  );
};

export default DownloadButton;
