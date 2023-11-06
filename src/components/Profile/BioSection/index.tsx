"use client";

import React, { useRef } from "react";

interface BioSectionProps {
  bio?: string | null;
}

const BioSection: React.FC<BioSectionProps> = ({ bio }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="flex flex-col mt-4 space-y-2 w-11/12 pl-12 md:mx-0">
      <div className="flex">
        <h3 className="font-bold text-left text-xl text-gray-600">Sobre</h3>
      </div>
      <textarea
        ref={inputRef}
        rows={3}
        id="bio"
        name="bio"
        className="text-black bg-transparent block w-full h-32 text-base mx-auto mt-1 rounded-md resize-none focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
        defaultValue={bio?.toString()}
        disabled={true}
      />
    </div>
  );
};

export default BioSection;
