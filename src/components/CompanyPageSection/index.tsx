import { motion } from "framer-motion";
import { title } from "process";
import { Twitter, Linkedin, Facebook, Instagram, Globe } from "react-bootstrap-icons";
import Skeleton from "react-loading-skeleton";
import CompanyInfo from "../CompanyInfo";
import { ReactNode } from "react";
import { CompanyProps } from "../Company";
import Image from "next/image";
import Link from "next/link";


interface CompanyPageSectionProps  {
  company: {
    props: CompanyProps;
    tier: string;
  };
  modalInformation: {
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
  }
}

const CompanyPageSection: React.FC<CompanyPageSectionProps> = ({ company, modalInformation}) => {
  return (
  <div className="mt-12 h-full w-full items-center justify-center md:my-14">
    <div className="mb-12 mt-4 flex h-full w-full flex-col items-center">
        <div
          className="flex flex-col items-center justify-center pt-8"
        >
          {company.props.logoHref ? (
            <div
            className="relative my-8 flex h-full w-full flex-col items-center"
          >
            <Image
              width={360}
              height={360}
              src={company.props.logoHref}
              alt="profile image"
              className="h-11/12 w-11/12"
            />
          </div>
          ) : (
            <Skeleton circle={true} height={120} width={120} />
          )}
          <div className="flex flex-col gap-y-2 px-4 text-center">
            <p className="text-3xl font-bold capitalize md:text-5xl">
              <span>{company.props.name}</span>
            </p>
          </div>
          <p className="flex gap-x-4 pt-6">
            {modalInformation.twitterLink && (
              <Link
                href={modalInformation.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-10 w-10 md:h-8 md:w-8 hover:scale-105" />
              </Link>
            )}
            {modalInformation.linkedinLink && (
              <Link
                href={modalInformation.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-10 w-10 md:h-8 md:w-8 hover:drop-shadow-2xl hover:scale-105 transition-all" />
              </Link>
            )}
            {modalInformation.facebookLink && (
              <Link
                href={modalInformation.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-10 w-10 md:h-8 md:w-8 hover:drop-shadow-2xl hover:scale-105 transition-all" />
              </Link>
            )}
            {modalInformation.instagramLink && (
              <Link
                href={modalInformation.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-10 w-10 md:h-8 md:w-8 hover:drop-shadow-2xl hover:scale-105 transition-all" />
              </Link>
            )}
            {modalInformation.website && (
              <Link
                href={modalInformation.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-10 w-10 md:h-8 md:w-8 hover:drop-shadow-2xl hover:scale-105 transition-all" />
              </Link>
            )}
          </p>
        </div>
      </div>
			<CompanyInfo
			title={title}
			bodyText={modalInformation.bodyText}
			videoHref={modalInformation.videoHref}
			videoTitle={modalInformation.videoTitle}
			twitterLink={modalInformation.twitterLink}
			facebookLink={modalInformation.facebookLink}
			instagramLink={modalInformation.instagramLink}
			youtubeLink={modalInformation.youtubeLink}
			linkedinLink={modalInformation.linkedinLink}
			website={modalInformation.website}
			tier={company.tier}
			></CompanyInfo>
  </div>
  );
}

export default CompanyPageSection;