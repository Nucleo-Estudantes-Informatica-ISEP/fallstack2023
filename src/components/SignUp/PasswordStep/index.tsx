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

  const inputRefPassword = useRef<HTMLInputElement>(null);
  const inputRefPasswordRepeat = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    if (!inputRefPassword.current?.value)
      return setError("Este campo é obrigatório.");
    if (!inputRefPasswordRepeat.current?.value)
      return setError("Este campo é obrigatório.");

    if (inputRefPassword.current.value !== inputRefPasswordRepeat.current.value)
      return setError("As passwords não coincidem.");

    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);

    const password = inputRefPassword.current.value;

    if (password.length < 8)
      return setError("A password deve conter pelo menos 8 caracteres.");
    if (!password.match(passwordRegex))
      return setError(
        "A password deve conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número."
      );

    setData({ ...data, password: inputRefPassword.current.value });
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

      <div className="flex flex-col justify-center gap-y-4">
        <Input
          type="password"
          name="Escolhe uma password segura."
          placeholder="Insere uma password"
          center
          inputRef={inputRefPassword}
          onKeyUp={handleKeyUp}
          defaultValue={data.password ? data.password : undefined}
          autoFocus
          className={`${error ? "border-2 border-red-600" : ""} z-10 `}
        />
        <Input
          type="password"
          name="Repete a password."
          placeholder="Repete a password"
          center
          inputRef={inputRefPasswordRepeat}
          onKeyUp={handleKeyUp}
          defaultValue={data.password ? data.password : undefined}
          autoFocus
          className={`${error ? "border-2 border-red-600" : ""} z-10 `}
        />
      </div>
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
