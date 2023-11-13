"use client";

import { useState } from "react";
import { Student } from "@prisma/client";
import { motion } from "framer-motion";
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
import YearStep from "@/components/SignUp/YearStep";

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
    <YearStep key={"3"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <BioStep key={"4"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <InterestsStep
      key={"5"}
      {...{ currentStep, setCurrentStep, data, setData }}
    />,
    <CvStep key={"6"} {...{ currentStep, setCurrentStep, data, setData }} />,
    <AvatarStep
      key={"7"}
      student={session.user?.student as Student}
      {...{ currentStep, setCurrentStep, data, setData }}
    />,
  ];

  const handlePrev = () => setCurrentStep(currentStep - 1);

  return (
    <div className="relative w-full max-md:h-96 md:mt-4">
      {currentStep > 0 && (
        <button
          onClick={handlePrev}
          className="absolute -left-2 -top-12 rounded-full text-3xl text-secondary"
        >
          <BackIcon />
        </button>
      )}
      <motion.section
        key={currentStep}
        initial={{ x: "100%" }}
        animate={{ x: "0" }}
        exit={{ x: "-100%" }}
        transition={{
          bounce: 0,
        }}
        className="flex flex-col"
      >
        {steps[currentStep]}
      </motion.section>
    </div>
  );
};

export default SignUpPage;
