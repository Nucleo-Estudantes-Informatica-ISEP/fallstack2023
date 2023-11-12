import Image from "next/image";
import { MdOutlineArrowBack as BackIcon } from "react-icons/md";

import PrimaryButton from "@/components/PrimaryButton";

const InterestsStep = () => {
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
        És interessado? Então diz lá os teus interesses.
      </p>

      <PrimaryButton className="mb-5 font-bold">CONTINUAR</PrimaryButton>
    </>
  );
};
export default InterestsStep;
