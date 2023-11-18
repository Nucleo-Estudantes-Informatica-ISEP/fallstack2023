"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import { Company } from "@prisma/client";
import { motion } from "framer-motion";

import { ProfileData } from "@/types/ProfileData";

interface UserImageProps {
  company: Company;
  hidden?: boolean;
  editable?: boolean;
  setProfile?: Dispatch<SetStateAction<ProfileData>>;
}

const CompanyImage: React.FC<UserImageProps> = ({ company }) => {
  const [image, setImage] = useState<string | null>(null);

  const getImage = async (company: Company) => {
    if (!company.image) return "/assets/images/default_user.png";

    setImage(image ? company.image : "/assets/images/default_user.png");
  };

  useEffect(() => {
    getImage(company);
  }, [company]);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative my-2 flex h-24 w-24 flex-col items-center md:h-52 md:w-52"
    >
      <Image
        width={328}
        height={328}
        src={company.image || "/assets/images/default_user.png"}
        alt="profile image"
        className="h-full w-full"
      />
    </motion.div>
  );
};

export default CompanyImage;
