import Image from "next/image";
import { MdOutlineArrowBack as BackIcon } from "react-icons/md";

import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const PasswordStep = () => {
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

      <Input
        name="Escolhe uma password segura."
        placeholder="Insere uma password"
        className="mb-4"
        center
      />

      <PrimaryButton className="mb-5 font-bold">CONTINUAR</PrimaryButton>
    </>
  );
};
export default PasswordStep;
