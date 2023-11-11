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
      className="fixed inset-5 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={() => setHidden(true)}
    >
      <div className="fixed inset-5 bg-gray-500 bg-opacity-0 transition-opacity"></div>

      <div className="flex min-h-screen items-center justify-center">
        <div className="relative w-full max-w-7/8   ">
          <div
            className="relative h-screen w-full transform overflow-hidden bg-white text-left shadow-xl transition-all"
            onClick={handleModalClick}
          >
            <div className="no-scrollbar bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
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
