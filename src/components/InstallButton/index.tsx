"use client";

import { LabelHTMLAttributes, useContext } from "react";

import useIsMobile from "@/hooks/useIsMobile";
import InstallableContext from "@/contexts/InstallableContext";
import { InstallPwaDesktop, InstallPwaMobile } from "@/styles/Icons";

interface InstallButtonProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

const InstallButton: React.FC<InstallButtonProps> = ({ className }) => {
  const { isInstallable, handleConfirm } = useContext(InstallableContext);

  const isMobile = useIsMobile();

  return (
    isInstallable && (
      <button onClick={handleConfirm} className={className}>
        {isMobile ? (
          <InstallPwaMobile className="text-xl" />
        ) : (
          <InstallPwaDesktop className="text-2xl" />
        )}
      </button>
    )
  );
};

export default InstallButton;
