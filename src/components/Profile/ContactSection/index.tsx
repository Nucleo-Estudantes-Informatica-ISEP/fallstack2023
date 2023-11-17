"use client";

import React from "react";

import { Email } from "@/styles/Icons";

interface ContactSectionProps {
  email: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ email }) => {
  return (
    <div className="my-4 flex flex-col space-y-2 px-12 text-black">
      <div className="flex">
        <h3 className="text-left text-xl font-bold text-gray-600">Contactos</h3>
      </div>
      <div className="flex items-center">
        <Email className="h-5 w-5"></Email>
        <p className="pl-2">{email}</p>
      </div>
    </div>
  );
};

export default ContactSection;
