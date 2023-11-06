"use client";

import { BASE_URL } from "@/services/api";
import { Interest } from "@prisma/client";
import { useEffect, useState } from "react";

interface InterestsSectionProps {
  code: string;
  userInterests: string[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  userInterests,
}) => {
  const [interests, setInterests] = useState<Interest[]>([]);

  async function fetchInterests() {
    const res = await fetch(BASE_URL + "/interests");
    const json = await res.json();
    setInterests(json);
  }

  useEffect(() => {
    fetchInterests();
  }, []);

  const orderedInterests = interests.sort((a, b) => {
    if (userInterests.includes(a.name)) return -1;
    if (userInterests.includes(b.name)) return 1;
    return 0;
  });

  return (
    <section className="flex flex-col mb-16 space-y-5 w-11/12 md:w-2/3 pl-12 md:mx-0">
      <div className="flex flex-col">
        <h3 className="font-bold text-left text-xl text-gray-600 my-2">
          Interesses
        </h3>
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6">
          {orderedInterests.map((interest) => (
            <div
              className="flex items-start px-2 py-1 rounded-lg bg-gray-200 border text-black"
              key={interest.id}
            >
              {interest.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
