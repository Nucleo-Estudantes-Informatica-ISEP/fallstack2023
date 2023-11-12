import Image from "next/image";
import { MdOutlineArrowBack as BackIcon } from "react-icons/md";

import PrimaryButton from "@/components/PrimaryButton";

const CvStep = () => {
  return (
    <>
      <div className="absolute -left-2 -top-12 cursor-pointer text-3xl text-secondary">
        <BackIcon />
      </div>
      <div className="mb-5 flex justify-center">
        <Image
          src={"/assets/images/logo_dark.png"}
          width={128}
          height={128}
          alt="Logo"
        />
      </div>

      <p className="mb-4 text-center text-slate-700 md:text-lg">
        Tens o teu CV pronto?
      </p>

      <PrimaryButton className="mb-5 font-bold">CONTINUAR</PrimaryButton>

      <p className="text-center text-sm text-gray-600">Ignorar</p>
    </>
  );
};
export default CvStep;
