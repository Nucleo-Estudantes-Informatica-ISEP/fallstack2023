import React, { useId } from "react";

import FactData from "@/types/FactData";
import CompanyDescription from "@/components/CompanyDescription";

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
      {facts && (
        <section className="my-5 flex flex-col space-y-2 text-sm font-light leading-8 sm:text-sm lg:px-10 lg:text-lg">
          {facts.map((fact, i) => (
            <div key={i} className="my-1 flex flex-row items-center">
              <fact.iconSrc
                className={`${
                  fact.className ? fact.className : "h-6 w-6"
                }  left-0 fill-stone-500 sm:h-8 sm:w-8 lg:h-8 lg:w-8`}
              />
              <p className="ml-3 text-left text-black ">{fact.description}</p>
            </div>
          ))}
        </section>
      )}
      {tier === "Diamond" && (
        <div className="mt-10 flex flex-col  space-y-2 leading-8 lg:px-10  lg:text-lg">
          <h1 className="my-5 text-left text-lg font-medium text-black sm:text-lg md:text-xl lg:text-2xl">
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
            <span
              key={interest}
              className="relative flex h-8 cursor-default items-center justify-center rounded-xl bg-slate-200 px-3 py-1 text-black hover:brightness-90"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
