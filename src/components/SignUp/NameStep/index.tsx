import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

interface NameStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const NameStep: FunctionComponent<NameStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (!inputRef.current?.value) return setError("Este campo é obrigatório.");

    setData({ ...data, name: inputRef.current.value });
    setCurrentStep(currentStep + 1);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleNext();
  };

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
        name="Precisamos de alguns dados para criar a tua conta. Qual é o teu nome?"
        placeholder="Insere o teu nome"
        center
        inputRef={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={data.name ? data.name : undefined}
        className={`${error ? "border-2 border-red-600" : ""} z-10`}
      />

      {error && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{
            y: [-15, 0],
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        >
          {error}
        </motion.p>
      )}

      <PrimaryButton onClick={handleNext} className="mb-5 mt-4 font-bold">
        CONTINUAR
      </PrimaryButton>

      <Link href="/login" className="text-center text-sm text-gray-600">
        Já tenho uma conta
      </Link>
    </>
  );
};
export default NameStep;
