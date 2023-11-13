"use client";

import React from "react";

import { ImportCv } from "@/styles/Icons";

interface ContactSectionProps {
  text: string;
  inputRef: React.Ref<HTMLInputElement>;
}

const ContactSection: React.FC<ContactSectionProps> = ({ inputRef, text }) => {
  return (
    <div className="my-4 flex flex-col space-y-2 text-black">
      <label className="text-lg text-slate-700">Curriculum Vitae</label>
      <div className="flex items-center space-x-2">
        <ImportCv className="mb-2 h-6 w-6"></ImportCv>
        <a
          onClick={() => document.getElementById("inputCv")?.click()}
          className="cursor-pointer pl-2"
        >
          <label className="underline">{text}</label>

          <label id="lbl" className="ml-4 text-sm" htmlFor=""></label>
        </a>
        <input
          id="inputCv"
          onChange={() => {
            document.getElementById("lbl")!.innerHTML =
              "(" +
              (document.getElementById("inputCv") as HTMLInputElement).files![0]
                .name +
              ")";
          }}
          type="file"
          accept=".pdf"
          ref={inputRef}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ContactSection;
