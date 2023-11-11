"use client";

import React, { useState } from "react";

import { BsQrCodeScan } from "react-icons/bs";
import QRCodeModal from "../QRCodeModal";

const QRCodeButton: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <button className="flex h-6 w-6 items-center justify-center p-0.5 text-black transition-colors hover:text-slate-400 dark:text-white dark:hover:text-slate-400">
        <BsQrCodeScan onClick={() => setIsHidden(false)} size={20} />
      </button>
      
        <QRCodeModal
          setHidden={setIsHidden}
          hidden={isHidden}
        />
    
    </>
  );
};

export default QRCodeButton;
