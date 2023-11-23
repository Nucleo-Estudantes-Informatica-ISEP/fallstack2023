"use client";

import { LabelHTMLAttributes, useContext } from "react";

import InstallableContext from "@/contexts/InstallableContext";
import { InstallPwa } from "@/styles/Icons";

interface InstallButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const InstallButton: React.FC<InstallButtonProps> = ({ className }) => {
  const { isInstallable, handleConfirm } = useContext(InstallableContext);

  return (
    isInstallable && (
      <button onClick={handleConfirm} className={className}>
        <InstallPwa></InstallPwa>
      </button>
    )
  );
};

export default InstallButton;
