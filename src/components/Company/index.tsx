import React from "react";
import { ModalInformation } from "../../types/ModalProps";
import Modal from "../Modal";
import Image, { StaticImageData } from "next/image";

export interface CompanyProps {
  logoHref: StaticImageData;
  name: string;
  websiteUrl?: string;
  modalInformation?: ModalInformation;
}

const Company: React.FC<CompanyProps> = ({
  logoHref,
  name,
  modalInformation,
  websiteUrl,
}) => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <>
      <div
        className="flex min-h-[8rem] cursor-pointer items-center justify-center transition duration-300 ease-in-out hover:scale-105 lg:min-h-[11rem]"
        onClick={() => setIsHidden(false)}
      >
        <a rel="noreferrer" href={websiteUrl} target="_blank">
          <Image
            className="h-full max-h-36 w-full max-w-[12rem] object-cover lg:max-h-28  lg:max-w-[18rem] xl:max-h-32 xl:max-w-[16rem]"
            src={logoHref}
            alt={name}
          />
        </a>
      </div>
      {modalInformation && (
        <Modal
          setHidden={setIsHidden}
          hidden={isHidden}
          modalInformation={modalInformation}
        />
      )}
    </>
  );
};

export default Company;
