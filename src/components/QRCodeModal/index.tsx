import React from "react";
import Image, { StaticImageData } from "next/image";

import { useDisableBodyScroll } from "../../hooks/disableBackgroundMoving";

import { BsFillClipboardFill, BsQrCodeScan, BsX } from "react-icons/bs";

interface QRCodeModalProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}
const QRCodeModal: React.FC<QRCodeModalProps> = ({ hidden, setHidden }) => {
  useDisableBodyScroll({ modalIsHidden: hidden });

  // Prevent closing the modal when clicking on its content
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return !hidden ? (
    <div
      className="scrollbar-hide fixed inset-6 start-2 z-10 animate-fade-imm overflow-y-hidden rounded-lg transition-opacity sm:inset-4 sm:end-6 sm:start-6 md:inset-14 md:end-12 md:start-8  lg:inset-16 lg:end-14 lg:start-10"
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
                    Partilha o teu <span className="text-primary">Perfil</span>
                  </h1>
                  {/* Grid */}
                  <div className="mt-10 grid grid-cols-1 sm:mt-0 sm:grid-cols-2 md:mt-6 lg:mt-20">
                    {/* left column */}
                    <div className="flex items-center justify-center ">
                      {/* THIS GONNA BE ADJUSTED WHEN THE QR CODE IS REALLY IMPLEMENTED FOR NOW ITS JUST AN ICON*/}
                      <BsQrCodeScan
                        style={{ fontSize: "15rem", color: "#000" }}
                      />
                    </div>
                    {/* right column */}
                    <div className="flex items-center justify-center pb-0 pt-14 sm:pb-0 sm:pt-0">
                      <div className="flex flex-col items-center">
                        <div className="rounded-lg bg-gray-200 p-2 sm:p-2 md:p-2">
                          <div className="flex items-center">
                            <input
                              type="text"
                              value="CODE"
                              className="w-56 border-none bg-gray-200 p-2 text-center text-xl font-bold text-black focus:outline-none sm:w-56 sm:text-3xl md:w-72 "
                              disabled
                            />
                            <BsFillClipboardFill
                              style={{ fontSize: "1.5rem", color: "#718096" }}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                        <p className="lg-mr-0 mt-6 text-sm text-black sm:mr-6 md:mr-4 md:text-sm lg:text-base">
                          Partilha o teu <b>código</b> com as empresas de forma
                          a poderem <b>guardar</b> o teu perfil!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default QRCodeModal;
