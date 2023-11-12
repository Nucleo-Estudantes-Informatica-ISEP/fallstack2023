import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Image from "next/image";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import { getSignedUrl, uploadToBucket } from "@/lib/upload";
import PrimaryButton from "@/components/PrimaryButton";

interface CvStepProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  data: StudentSignUpData;
  setData: Dispatch<SetStateAction<StudentSignUpData>>;
}

const CvStep: FunctionComponent<CvStepProps> = ({
  currentStep,
  setCurrentStep,
  data,
  setData,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const signed = await getSignedUrl("cv", file.type);
      if (!signed) return; // TODO: show error

      if (file.size > signed.maxSize)
        return setError("O ficheiro é demasiado grande.");

      if (error) setError(null);

      const res = await uploadToBucket(signed, file);

      if (res.status !== 200) return; // TODO: show error

      const cv = {
        name: file.name,
        id: signed.id,
        preview: URL.createObjectURL(file),
      };

      setData({ ...data, cv });
    }
  };

  // TODO: change, preview on new tab & reset file input

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

      <p className="mb-4 text-center text-slate-700 md:text-lg">
        Tens o teu CV pronto?
      </p>

      {data.cv ? (
        <a
          href={data.cv.preview}
          target="_blank"
          className="cursor-pointer text-black underline"
        >
          {data.cv.name}
        </a>
      ) : (
        <input type="file" onChange={onFileChange} accept="application/pdf" />
      )}

      {error && <p className="mt-1 text-sm font-bold text-red-600">{error}</p>}

      <PrimaryButton onClick={handleNext} className="mb-5 mt-4 font-bold">
        CONTINUAR
      </PrimaryButton>

      <button
        onClick={handleNext}
        className="text-center text-sm text-gray-600"
      >
        Ignorar
      </button>
    </>
  );
};
export default CvStep;
