"use client";

import { BASE_URL } from "@/services/api";
import { Interest } from "@prisma/client";
import { useEffect, useState } from "react";

interface InterestsSectionProps {
  userInterests: string[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  userInterests,
}) => {
  let orderedInterests = userInterests;
  if (userInterests.length > 0) {
    orderedInterests = userInterests.sort((a, b) => {
      if (userInterests.includes(a)) return -1;
      if (userInterests.includes(b)) return 1;
      return 0;
    });
  }

  return (
    <section className="flex flex-wrap mb-16 space-y-5 w-11/12 md:w-2/3 pl-12 md:mx-0">
      <div className="flex flex-col">
        <h3 className="font-bold text-left text-xl text-gray-600 my-2">
          Interesses
        </h3>
        <div className="flex items-center w-3/4 mx-auto md:mx-0 gap-x-6">
          {orderedInterests.map((interest) => (
            <div
              className="flex relative py-1 px-3 rounded-xl text-black bg-slate-200"
              key={interest}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
