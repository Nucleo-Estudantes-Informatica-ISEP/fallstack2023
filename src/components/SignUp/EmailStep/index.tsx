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
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

interface EmailStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const EmailStep: FunctionComponent<EmailStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (!inputRef.current?.value) return setError("Este campo é obrigatório.");

    const emailRegex = new RegExp(/^([0-9]{7}|[a-zA-Z]{3})+@isep.ipp.pt$/i);

    const email = inputRef.current.value;

    if (!email.match(emailRegex))
      return setError("Insere um email institucional válido.");

    setData({ ...data, email: inputRef.current.value });
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

      <Input
        type="email"
        name="Insere o teu email institucional."
        placeholder="Insere o teu email"
        center
        inputRef={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={data.email ? data.email : undefined}
        autoFocus
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
    </>
  );
};
export default EmailStep;
