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

interface PasswordStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const PasswordStep: FunctionComponent<PasswordStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [error, setError] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (!inputRef.current?.value) return setError("Este campo é obrigatório.");

    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

    const password = inputRef.current.value;

    if (password.length < 8)
      return setError("A password deve conter pelo menos 8 caracteres.");
    if (!password.match(passwordRegex))
      return setError(
        "A password deve conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número."
      );

    setData({ ...data, password: inputRef.current.value });
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
        type="password"
        name="Escolhe uma password segura."
        placeholder="Insere uma password"
        center
        inputRef={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={data.password ? data.password : undefined}
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
export default PasswordStep;
