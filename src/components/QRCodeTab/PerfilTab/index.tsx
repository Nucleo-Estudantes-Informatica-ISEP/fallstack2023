"use client";

import React from "react";
import QRCode from "qrcode.react";
import { UserWithProfile } from "@/types/UserWithProfile";
import { BsFillClipboardFill } from "react-icons/bs";

interface PerfilTabProps {
    user: UserWithProfile;
}

const PerfilTab: React.FC<PerfilTabProps> = ({user}) => {
  // student url
  const baseUrl = window.location.origin;

  const profileUrl =
    user.role === "STUDENT" && user.student
      ? `${baseUrl}/student/${user.student.code}`
      : "";

  const handleCopyClick = () => {
    if (user.student?.code) {
      navigator.clipboard.writeText(user.student?.code).catch(() => {});
    }
  };

  return (
    <div className="mt-10 grid grid-cols-1 sm:mt-0 sm:grid-cols-1 md:mt-6 md:grid-cols-2 lg:mt-20 xl:mt-44">
      {/* left column */}
      <div className="flex items-center justify-center ">
        <QRCode size={150} value={profileUrl} />
      </div>
      {/* right column */}
      <div className="flex items-center justify-center pb-0 pt-14 sm:pb-0 sm:pt-0">
        <div className="flex flex-col items-center">
          <div
            className="rounded-lg bg-gray-200 p-2 sm:p-2 md:p-2"
            onClick={handleCopyClick}
          >
            <div className="flex items-center">
              <div className="w-56 cursor-pointer border-none bg-gray-200 p-2 text-center text-xl font-bold text-black focus:outline-none sm:w-56 sm:text-3xl md:w-72">
                {user.student?.code}
              </div>
              <BsFillClipboardFill
                style={{
                  fontSize: "1.5rem",
                  color: "#718096",
                }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <p className="lg-mr-0 mt-6 text-sm text-black sm:mr-6 md:mr-4 md:text-sm lg:text-base">
            Partilha o teu <b>código</b> com as empresas de forma a poderem{" "}
            <b>guardar</b> o teu perfil!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerfilTab;