import React from "react";
import Link from "next/link";
import {CompaniesTier} from "@/utils/GetColorTier";
import hrefByCompanyTier from "@/utils/HrefByTier";
import Image, { StaticImageData } from "next/image";

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
    <>
      <div className="flex min-h-[8rem] cursor-pointer items-center justify-center transition duration-300 ease-in-out hover:scale-105 lg:min-h-[11rem]">
        <Link rel="noreferrer" href={websiteUrl ? websiteUrl : "/company/" + name} target="_blank">
          <Image
            className="h-full max-h-36 w-full max-w-[12rem] object-cover lg:max-h-28  lg:max-w-[18rem] xl:max-h-32 xl:max-w-[16rem]"
            src={logoHref}
            alt={name}
          />
        </Link>
      </div>
    </>
  );
};

/*
 {modalInformation && (
                <Modal
                    setHidden={setIsHidden}
                    hidden={isHidden}
                    modalInformation={modalInformation}
                />
            )}
 */

export default Company;
