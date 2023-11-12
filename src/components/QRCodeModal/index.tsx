import React from "react";
import Image, { StaticImageData } from "next/image";

import { useDisableBodyScroll } from "../../hooks/disableBackgroundMoving";

import { X } from "react-bootstrap-icons";

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
      className="scrollbar-hide fixed inset-5 z-10 overflow-y-scroll"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => setHidden(true)}
    >
      <div className="fixed inset-5 bg-gray-500 bg-opacity-0 transition-opacity"></div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="max-w-7/8 relative w-full">
          <div
            className="relative h-screen w-full transform  bg-white text-left shadow-xl transition-all"
            onClick={handleModalClick}
          >
            <div className="grid grid-cols-1 text-black lg:grid-cols-3">
              <div className="lg:col-span-2">01</div>
              <div className="lg:col-span-1">02</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default QRCodeModal;
