"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import swal from "sweetalert";

import { jwtStudent } from "@/lib/jwtStudent";
import useIsMobile from "@/hooks/useIsMobile";

import ScanTab from "../ScanTab";

import { BsFillClipboardFill } from "react-icons/bs";
import { BASE_URL } from "@/services/api";

interface CompanyTabProps {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyTab: React.FC<CompanyTabProps> = ({ setHidden }) => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  const handleClick = async () => {
    if (!inputRef.current?.value) toast.error("Sem código inserido.");

    const code = inputRef.current?.value;

    if (code) {
      const token = await jwtStudent(code);

      if (!token)
        return swal("Erro", "O código introduzido é inválido.", "error");

        await fetch(BASE_URL + "/saved", {
          method: "POST",
          body: JSON.stringify({ code }),
        });

      router.push(`/student/${token}/preview`);

      setHidden(true);
    } else {
      toast.error("Ocorreu um erro.");
    }
  };

  return (
    <div className="mt-14 flex flex-col items-center justify-center">
      {!isMobile ? (
        <>
          <div className="flex flex-col items-center justify-center pb-0 pt-14 sm:py-0">
            <div className="mt-14 rounded-xl bg-gray-200 p-2 sm:p-2 md:p-6">
              <div className="my-2 flex items-center justify-center">
                <BsFillClipboardFill size={20} className="fill-black" />
                <input
                  type="text"
                  name="Insere o código do estudante."
                  className={`z-10 ml-2 bg-slate-100 p-2 text-center text-xl font-bold uppercase text-black`}
                  ref={inputRef}
                  onKeyUp={handleKeyUp}
                  maxLength={4}
                />
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 1 }}
              onClick={handleClick}
              className="mt-4 rounded-xl bg-primary px-4 py-2 text-lg font-bold text-white hover:opacity-50"
            >
              Ir para o perfil
            </motion.button>
          </div>
        </>
      ) : (
        <ScanTab setHidden={setHidden} />
      )}
    </div>
  );
};

export default CompanyTab;
