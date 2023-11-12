import Image from "next/image";
import Link from "next/link";

import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const NameStep = () => {
  return (
    <>
      <div className="mb-5 flex justify-center">
        <Image
          src={"/assets/images/logo_dark.png"}
          width={128}
          height={128}
          alt="Logo"
        />
      </div>

      <p className="mb-2 text-center text-2xl font-bold text-secondary">
        Bem-vindo!
      </p>

      <Input
        name="Precisamos de roubar os teus dados para criar a tua conta. Qual é o teu nome?"
        placeholder="Insere o teu nome"
        className="mb-4"
        center
      />

      <PrimaryButton className="mb-5 font-bold">CONTINUAR</PrimaryButton>

      <Link href="/login" className="text-center text-sm text-gray-600">
        Já tenho uma conta
      </Link>
    </>
  );
};
export default NameStep;
