"use client";

import React, { useRef } from "react";

interface BioSectionProps {
  bio?: string | null;
}

const BioSection: React.FC<BioSectionProps> = ({ bio }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="mt-4 flex w-11/12 flex-col space-y-2 pl-12 text-black">
      <div className="flex">
        <h3 className="text-left text-xl font-bold text-gray-600">Sobre</h3>
      </div>
      <textarea
        ref={inputRef}
        id="bio"
        name="bio"
        className="mx-auto mt-1 block w-full resize-none rounded-md bg-transparent text-base text-black focus-within:text-primary focus:border-primary focus:ring-primary"
        defaultValue={bio?.toString()}
        disabled={true}
      />
    </div>
  );
};

export default BioSection;
