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

  useEffect(() => {
    const getImage = async (company: Company) => {
      if (!company.image) return "/assets/images/companies/armis_logo.png";

      setImage(
        image ? company.image : "/assets/images/companies/armis_logo.png"
      );
    };

    getImage(company);
  }, [company, image]);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative my-8 flex h-full w-full flex-col items-center"
    >
      <Image
        width={400}
        height={400}
        src={company.image || "/assets/images/companies/diamond/armis_logo.png"}
        alt="profile image"
        className="h-3/4 w-3/4"
      />
    </motion.div>
  );
};

export default CompanyImage;
