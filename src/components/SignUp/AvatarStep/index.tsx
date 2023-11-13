import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Image from "next/image";
import { Student } from "@prisma/client";
import { Area } from "react-easy-crop";

import { getSignedUrl, setTarget, uploadToBucket } from "@/lib/upload";
import AvatarCropper from "@/components/AvatarCropper";
import PrimaryButton from "@/components/PrimaryButton";
import { getCroppedImg } from "@/utils/canvas";

interface AvatarStepProps {
  student: Student;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const AvatarStep: FunctionComponent<AvatarStepProps> = ({ student }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const handleSubmit = async () => {
    try {
      if (!imageSrc || !croppedAreaPixels) return;

      const image = await getCroppedImg(imageSrc, croppedAreaPixels);
      if (!image) return;

      const signed = await getSignedUrl("avatar", image.type);
      if (!signed) return; // TODO: show error

      await uploadToBucket(signed, image);

      const imgUrl = await setTarget(student.code, signed);
      window.open(imgUrl, "_blank");
    } catch (e) {
      console.error(e);
    }
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

      <p className="mb-4 text-center text-slate-700 md:text-lg">
        Está quase! Só falta a tua foto de perfil.
      </p>

      <AvatarCropper {...{ imageSrc, setImageSrc, setCroppedAreaPixels }} />

      <PrimaryButton onClick={handleSubmit} className="mb-5 mt-4 font-bold">
        CONCLUIR
      </PrimaryButton>
    </>
  );
};
export default AvatarStep;
