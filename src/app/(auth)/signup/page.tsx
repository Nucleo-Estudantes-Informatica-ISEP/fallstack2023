"use client";

import { useState } from "react";
import { Student } from "@prisma/client";
import { MdOutlineArrowBack as BackIcon } from "react-icons/md";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import useSession from "@/hooks/useSession";
import AvatarStep from "@/components/SignUp/AvatarStep";
import BioStep from "@/components/SignUp/BioStep";
import CvStep from "@/components/SignUp/CvStep";
import EmailStep from "@/components/SignUp/EmailStep";
import InterestsStep from "@/components/SignUp/InterestsStep";
import NameStep from "@/components/SignUp/NameStep";
import PasswordStep from "@/components/SignUp/PasswordStep";

const SignUpPage: React.FC = () => {
  const session = useSession();

  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<StudentSignUpData>({} as StudentSignUpData);

  const steps = [
    <NameStep key={"0"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <EmailStep key={"1"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <PasswordStep
      key={"2"}
      {...{ currentStep, setCurrentStep, data, setData }}
    />,
    <BioStep key={"3"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <InterestsStep
      key={"4"}
      {...{ currentStep, setCurrentStep, data, setData }}
    />,
    <CvStep key={"5"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <AvatarStep
      key={"6"}
      student={session.user?.student as Student}
      {...{ currentStep, setCurrentStep }}
    />,
  ];

  const handlePrev = () => setCurrentStep(currentStep - 1);

  return (
    <section className="relative flex w-full flex-col max-md:h-96 md:mt-4">
      {currentStep > 0 && (
        <button
          onClick={handlePrev}
          className="absolute -left-2 -top-12 rounded-full text-3xl text-secondary"
        >
          <BackIcon />
        </button>
      )}
      {steps[currentStep]}
    </section>
  );
};

export default SignUpPage;
