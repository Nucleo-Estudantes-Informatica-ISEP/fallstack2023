import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Image from "next/image";

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

    const passwordRegex = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

    const password = inputRef.current.value;

    if (!password.match(passwordRegex))
      return setError("A password é demasiado insegura.");

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
        className={error ? "border-2 border-red-600" : ""}
      />

      {error && <p className="mt-1 text-sm font-bold text-red-600">{error}</p>}

      <PrimaryButton onClick={handleNext} className="mb-5 mt-4 font-bold">
        CONTINUAR
      </PrimaryButton>
    </>
  );
};
export default PasswordStep;
