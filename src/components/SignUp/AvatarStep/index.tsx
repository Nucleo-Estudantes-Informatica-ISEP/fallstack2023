import { FunctionComponent, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Area } from "react-easy-crop";
import { toast } from "react-toastify";

import { StudentSignUpData } from "@/types/StudentSignUpData";
import { signUp } from "@/lib/auth";
import { getSignedUrl, uploadToBucket } from "@/lib/upload";
import useSession from "@/hooks/useSession";
import AvatarCropper from "@/components/AvatarCropper";
import PrimaryButton from "@/components/PrimaryButton";
import { getCroppedImg } from "@/utils/canvas";

interface AvatarStepProps {
  data: StudentSignUpData;
}

const AvatarStep: FunctionComponent<AvatarStepProps> = ({ data }) => {
  const session = useSession();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const tacRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      if (!tacRef.current?.checked)
        return setError("Tens de aceitar os termos e condições.");

      setLoading(true);

      let avatar = null;
      if (imageSrc && croppedAreaPixels) {
        const image = await getCroppedImg(imageSrc, croppedAreaPixels);
        if (!image) return setLoading(false);

        const signed = await getSignedUrl("avatar", image.type);
        if (!signed) return setLoading(false);

        await uploadToBucket(signed, image);
        avatar = signed.id;
      }

      const signup = await signUp({ ...data, avatar });

      if (signup instanceof Error) {
        toast.error(signup.message);
        return setLoading(false);
      }

      if (!signup) {
        toast.error("Ocorreu um erro ao criar a conta.");
        return setLoading(false);
      }

      session.fetchSession();
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="mb-5 flex justify-center">
        <Image
          src={"/assets/images/logo_dark.png"}
          width={32}
          height={32}
          alt="Logo"
        />
      </div>

      <p className="mb-4 text-center text-slate-700 md:text-lg">
        Está quase! Só falta a tua foto de perfil.
      </p>

      <AvatarCropper {...{ imageSrc, setImageSrc, setCroppedAreaPixels }} />

      <label htmlFor="tac" className="z-10 mt-4 text-black">
        <input type="checkbox" id="tac" className="mr-3" ref={tacRef} />
        Aceito a{" "}
        <Link href={"/privacy-policy"} className="text-primary underline">
          política de privacidade
        </Link>
        .
      </label>

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

      <PrimaryButton
        loading={loading}
        onClick={handleSubmit}
        className="mb-5 mt-4 font-bold"
      >
        CONCLUIR
      </PrimaryButton>
    </>
  );
};
export default AvatarStep;
