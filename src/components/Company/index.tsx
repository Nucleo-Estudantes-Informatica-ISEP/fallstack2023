import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { CompaniesTier } from "@/utils/GetColorTier";

import { ModalInformation } from "../../types/ModalProps";

export interface CompanyProps {
  logoHref: StaticImageData;
  name: string;
  websiteUrl?: string;
  modalInformation?: ModalInformation;
  tier?: CompaniesTier;
}

const Company: React.FC<CompanyProps> = ({ logoHref, name, websiteUrl }) => {
  return (
    <div className="flex h-3/4 min-h-[8rem] w-3/4 items-center justify-center transition duration-300 ease-in-out hover:scale-105 lg:min-h-[11rem]">
      <Link
        rel="noreferrer"
        href={websiteUrl ? websiteUrl : "/company/" + name}
        target="_blank"
      >
        <Image className="object-cover" src={logoHref} alt={name} />
      </Link>
    </div>
  );
};

export default Company;
