import { Dispatch, FunctionComponent, SetStateAction, useRef } from "react";
import Image from "next/image";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import PrimaryButton from "@/components/PrimaryButton";
import TextArea from "@/components/TextArea";

interface BioStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const BioStep: FunctionComponent<BioStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleNext = () => {
    if (inputRef.current?.value)
      setData({ ...data, bio: inputRef.current.value });
    setCurrentStep(currentStep + 1);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      // shift
      if (e.shiftKey) return;

      // remove new line (last char)
      if (inputRef?.current?.value)
        inputRef.current.value = inputRef.current.value.slice(0, -1);

      handleNext();
    }
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

      <TextArea
        name="Conta-nos mais sobre ti. (Opcional)"
        placeholder="Insere a tua bio"
        className="mb-4"
        center
        inputRef={inputRef}
        onKeyUp={handleKeyUp}
        defaultValue={data.bio ? data.bio : undefined}
        autoFocus
      />

      <PrimaryButton onClick={handleNext} className="mb-5 font-bold">
        CONTINUAR
      </PrimaryButton>
    </>
  );
};
export default BioStep;
