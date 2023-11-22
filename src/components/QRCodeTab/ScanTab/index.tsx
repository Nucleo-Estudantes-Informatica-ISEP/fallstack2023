

"use client";

import React from "react";

import { UserWithProfile } from "@/types/UserWithProfile";

import { BASE_URL } from "@/services/api";

import QRCodeScanner from "../../QRCodeScanner";
import { toast } from "react-toastify";

interface ScanTabProps {
    user: UserWithProfile;
}

const ScanTab: React.FC<ScanTabProps> = ({user}) => {
  const [processing, setProcessing] = React.useState<boolean>(false);

      // handle scan for the companies
  const handleScan = async (data: string) => {
    if (!data.includes(window.location.origin)) return;

    try {
      setProcessing(true);

      // if the user is a company
      if (user.role === "COMPANY" && user.company) {
        new URL(data);

        const studentCode = data.split("/").pop();

        const res = await fetch(`${BASE_URL}/companies/history`, {
          method: "POST",
          body: JSON.stringify({
            studentCode: studentCode,
          }),
        });

        if (res.status === 201) {
          toast.success("Perfil do estudante guardado com sucesso!");
        } else if (res.status === 200) {
          toast.success("Este perfil já foi guardado!");
        } else {
          toast.error("Ocorreu um erro ao guardar o perfil do estudante...");
        }
      }

      /* it's dumb doing this for sure, but if i dont set a delay, on mobile, it wont let open the
       camera again and the user will need to close and open the modal again so, this is a workaround
       the user won't even feel the delay delay */
       window.open(data, "_self");

      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      toast.error("Ocorreu um erro a dar scan no QR Code do estudante...");
    }
  };

  return (
    <div className="mt-6 md:mt-0 grid grid-cols-1 sm:mt-0 sm:grid-cols-1 md:mt-6 lg:mt-20 xl:mt-44">
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