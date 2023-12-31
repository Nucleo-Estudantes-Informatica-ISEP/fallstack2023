import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import InputSelect from "@/components/InputSelect";
import PrimaryButton from "@/components/PrimaryButton";

interface YearStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const YearStep: FunctionComponent<YearStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLSelectElement>(null);

  const handleNext = () => {
    if (!inputRef.current?.value) return setError("Este campo é obrigatório.");

    setData({ ...data, year: inputRef.current.value });
    setCurrentStep(currentStep + 1);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    if (e.key === "Enter") handleNext();
  };

  const options = [
    "1º Ano Licenciatura",
    "2º Ano Licenciatura",
    "3º Ano Licenciatura",
    "1º Ano Mestrado",
    "2º Ano Mestrado",
  ];

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

      <InputSelect
        name="Insere o teu ano."
        placeholder="Insere o ano"
        center
        inputRef={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={data.year ? data.year : undefined}
        autoFocus
        className={`${error ? "border-2 border-red-600" : ""} z-10`}
        options={options}
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
    </>
  );
};
export default YearStep;
