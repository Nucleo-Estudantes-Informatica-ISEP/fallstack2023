"use client";

import React, { useState } from "react";

import { UserWithProfile } from "@/types/UserWithProfile";

import QRCodeModal from "../QRCodeModal";

import { BsQrCodeScan } from "react-icons/bs";

interface QRCodeButtonProps {
  user: UserWithProfile;
}

const QRCodeButton: React.FC<QRCodeButtonProps> = ({ user }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <button className="flex h-6 w-6 items-center justify-center fill-black p-0.5 text-2xl transition-colors hover:text-primary dark:fill-white">
        <BsQrCodeScan onClick={() => setIsHidden(false)} size={20} />
      </button>

      <QRCodeModal setHidden={setIsHidden} hidden={isHidden} user={user} />
    </>
  );
};

export default QRCodeButton;
