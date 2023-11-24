import React, { useId } from "react";

import FactData from "@/types/FactData";
import CompanyDescription from "@/components/Companies/CompanyDescription";

import FactSection from "../FactSection";

interface CompanyInfoProps {
  bodyText: React.ReactNode;
  videoHref: string | undefined;
  videoTitle: string | undefined;
  tier: string;
  interests?: string[];
  facts?: FactData[];
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  bodyText,
  videoHref,
  videoTitle,
  interests,
  facts,
  tier,
}) => {
  return (
    <section className="mx-auto w-11/12 rounded-lg bg-white p-10 sm:w-3/4 lg:p-12">
      {bodyText && (
        <CompanyDescription>
          <h1 className="mb-4 text-left text-lg font-bold uppercase text-black sm:text-lg md:text-xl lg:text-2xl">
            Sobre
          </h1>
          <div className="text-left font-light text-black md:text-lg lg:text-xl">
            {bodyText}
          </div>
        </CompanyDescription>
      )}
      {facts && <FactSection facts={facts} />}
      {tier === "Diamond" && (
        <div className="mt-10 flex flex-col  space-y-2 leading-8 lg:px-10  lg:text-lg">
          <h1 className="mb-4 text-left text-lg font-bold uppercase text-black sm:text-lg md:text-xl lg:text-2xl">
            {videoTitle || "Vídeo"}
          </h1>
          <div className="flex items-center justify-center" key={useId()}>
            <iframe
              className="my-2.5 aspect-video w-full max-w-full rounded-lg"
              src={videoHref}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="px-10">
        <h1 className="mb-4 mt-8 text-left text-lg font-bold uppercase text-black sm:text-lg md:text-xl lg:text-2xl">
          Interesses
        </h1>
        <div className="flex w-full flex-wrap gap-4">
          {interests?.map((interest) => (
            <div
              key={interest}
              className="relative flex rounded-xl bg-slate-200 px-3 py-1 text-black"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
