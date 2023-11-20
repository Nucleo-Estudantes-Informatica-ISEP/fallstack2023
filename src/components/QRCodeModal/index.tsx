"use client";

import React from "react";

import { UserWithProfile } from "@/types/UserWithProfile";

import { useDisableBodyScroll } from "../../hooks/disableBackgroundMoving";
import QRCodeTab from "../QRCodeTab";
import PerfilTab from "../QRCodeTab/PerfilTab";
import ScanTab from "../QRCodeTab/ScanTab";

import { BsX } from "react-icons/bs";

interface QRCodeModalProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserWithProfile;
}
const QRCodeModal: React.FC<QRCodeModalProps> = ({
  hidden,
  setHidden,
  user,
}) => {
  // disable body scroll
  useDisableBodyScroll({ modalIsHidden: hidden });

  const tabTitles = ["Perfil", "Scan"];
  const tabs = [<PerfilTab user={user} />, <ScanTab user={user} />];
  const modalTitle = [
    <>
      Partilha o teu <span className="text-primary">Perfil</span>
    </>,
    <>
      Dá <span className="text-primary">scan</span> num estudante
    </>,
  ];

  const [titleIndex, setTitleIndex] = React.useState<number>(0);

  return !hidden ? (
    <div
      className="scrollbar-hide fixed inset-6 end-4 start-4 z-10 animate-fade-imm overflow-y-hidden rounded-lg transition-opacity sm:inset-4 sm:end-6 sm:start-6 md:inset-14 md:end-12 md:start-8  lg:inset-16 lg:end-14 lg:start-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen  items-center justify-center">
        <div className="max-w-7/8 relative w-full ">
          <div className="relative h-screen w-full transform bg-white text-left shadow-xl transition-all">
            {/* Close button */}
            <button
              className="absolute right-4 top-4 z-10 cursor-pointer text-gray-500"
              style={{ pointerEvents: "auto" }}
              onClick={() => setHidden(true)}
            >
              <BsX size={34} />
            </button>
            <div className="flex min-h-screen items-start justify-center">
              <div className="max-w-7/8 w-full">
                <div className="relative h-screen p-10 text-center shadow-xl sm:p-0 md:p-0 lg:p-6">
                  <h1 className="mb-6 mt-3 text-3xl font-bold text-black sm:mb-0 sm:mt-6 sm:text-3xl md:text-4xl lg:text-6xl">
                    {user.role === "STUDENT" ? modalTitle[titleIndex] : modalTitle[1]}
                  </h1>

                  {/* Grid */}
                  {user.role === "STUDENT" ? (
                    <QRCodeTab tabTitles={tabTitles} tabs={tabs} setTitleIndex={setTitleIndex}></QRCodeTab>
                  ) : (
                    <ScanTab user={user} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default QRCodeModal;
