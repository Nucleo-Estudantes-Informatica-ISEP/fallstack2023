"use client";

import React from "react";

import { BsQrCodeScan } from "react-icons/bs";

const QRCodeButton: React.FC = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <button className="hover:text-white-dark flex h-6 w-6 items-center justify-center p-0.5 text-white transition-colors dark:text-primary dark:hover:text-white">
      <BsQrCodeScan onClick={() => setIsHidden(!isHidden)} size={20} />
    </button>
  );
};

export default QRCodeButton;
