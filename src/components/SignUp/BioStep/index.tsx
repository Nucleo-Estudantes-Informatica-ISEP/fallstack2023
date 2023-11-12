import Image from "next/image";
import { MdOutlineArrowBack as BackIcon } from "react-icons/md";

import PrimaryButton from "@/components/PrimaryButton";
import TextArea from "@/components/TextArea";

const BioStep = () => {
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

      <TextArea
        name="Conta-nos mais sobre ti. Queremos saber tudo."
        placeholder="Insere a tua bio"
        className="mb-4"
        center
      />

      <PrimaryButton className="mb-5 font-bold">CONTINUAR</PrimaryButton>
    </>
  );
};
export default BioStep;
