import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Image from "next/image";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import PrimaryButton from "@/components/PrimaryButton";
import InterestSelector from "@/components/Profile/InterestSelector";

interface InterestsStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const InterestsStep: FunctionComponent<InterestsStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [interests, setInterests] = useState<string[]>(data.interests || []);

  const handleNext = () => {
    setData({ ...data, interests });
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <div className="mb-5 flex justify-center">
        <Image
          src={"/assets/images/logo_dark.png"}
          width={64}
          height={64}
          alt="Logo"
        />
      </div>

      <p className="mb-1 text-center text-slate-700 md:text-lg">
        Escolhe os teus interesses.
      </p>

      <InterestSelector
        userInterests={interests}
        setUserInterests={setInterests}
        scrollable
      />

      <PrimaryButton onClick={handleNext} className="my-5 font-bold">
        CONTINUAR
      </PrimaryButton>
    </>
  );
};
export default InterestsStep;
