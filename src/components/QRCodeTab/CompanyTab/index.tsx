"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { UserWithProfile } from "@/types/UserWithProfile";
import useIsMobile from "@/hooks/useIsMobile";

import ScanTab from "../ScanTab";

import { BsFillClipboardFill } from "react-icons/bs";

interface CompanyTabProps {
  user: UserWithProfile;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompanyTab: React.FC<CompanyTabProps> = ({ user, setHidden }) => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef.current?.value) toast.error("Sem código inserido.");

    const code = inputRef.current?.value;

    if (code) {
      router.push(`/student/${code}`);

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
            <div className="mt-14 rounded-xl bg-gray-200 p-2 sm:p-2 md:p-4">
              <div className="my-2 flex items-center justify-center">
                <BsFillClipboardFill size={20} className="fill-black" />
                <input
                  type="text"
                  name="Insere o teu email institucional."
                  className={`z-10 ml-2 bg-slate-100 text-center font-bold text-black`}
                  ref={inputRef}
                  maxLength={4}
                />
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              initial={{ scale: 1 }}
              onClick={handleClick}
              className="mt-4 rounded-xl bg-primary px-3 py-1 font-bold text-white hover:opacity-50"
            >
              Ir para o perfil
            </motion.button>
          </div>
        </>
      ) : (
        <ScanTab user={user} setHidden={setHidden} />
      )}
    </div>
  );
};

export default CompanyTab;
