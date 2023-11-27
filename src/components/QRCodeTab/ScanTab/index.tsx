"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { UserWithProfile } from "@/types/UserWithProfile";
import { BASE_URL } from "@/services/api";

import QRCodeScanner from "../../QRCodeScanner";

interface ScanTabProps {
  user: UserWithProfile;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScanTab: React.FC<ScanTabProps> = ({ user, setHidden }) => {
  const [processing, setProcessing] = React.useState<boolean>(false);
  const router = useRouter();

  // handle scan for the companies
  const handleScan = async (data: string) => {
    try {
      setProcessing(true);

      await fetch(BASE_URL + "/saved", {
        method: "POST",
        body: JSON.stringify({ token: data }),
      });

      setHidden(true);
      router.push(`/student/${data}/preview`);

      /* it's dumb doing this for sure, but if i dont set a delay, on mobile, it wont let open the
       camera again and the user will need to close and open the modal again so, this is a workaround
       the user won't even feel the delay delay */

      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      toast.error("Ocorreu um erro a dar scan no QR Code do estudante...");
    }
  };

  return (
    <div className="mt-6 grid grid-cols-1 sm:mt-0 sm:grid-cols-1 md:mt-0 lg:mt-12">
      <div className="flex items-center justify-center ">
        {processing ? (
          <div
            className="mt-24 inline-block h-24 w-24 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              A processar...
            </span>
          </div>
        ) : (
          <QRCodeScanner handleScan={handleScan} />
        )}
      </div>
    </div>
  );
};

export default ScanTab;
