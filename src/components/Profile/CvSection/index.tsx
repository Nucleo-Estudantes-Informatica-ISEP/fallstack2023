"use client";

import React from "react";

import { CV } from "@/styles/Icons";

interface ContactSectionProps {
  cv: string;
  name: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ cv, name }) => {
  return (
    <div className="my-4 flex flex-col space-y-2 px-12 text-black">
      <div className="flex">
        <h3 className="text-left text-xl font-bold text-gray-600">
          Curriculum Vitae
        </h3>
      </div>
      <div className="flex items-center">
        <CV className="h-5 w-5"></CV>
        <a className="pl-2" target="_blank" rel="noopener noreferrer" href={cv}>
          Abrir o CV de {name}
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
