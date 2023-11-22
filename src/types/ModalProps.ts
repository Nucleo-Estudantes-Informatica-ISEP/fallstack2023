import React, { ReactNode } from "react";
import FactData from "@/types/FactData";

export default interface ModalProps {
  hidden: boolean;
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  modalInformation: ModalInformation;
}

export interface ModalInformation {
  title: string;
  bodyText: ReactNode;
  videoHref?: string;
  videoTitle?: string;
  twitterLink?: string;
  facebookLink?: string;
  instagramLink?: string;
  youtubeLink?: string;
  linkedinLink?: string;
  website?: string;
  facts?: FactData[];
}
