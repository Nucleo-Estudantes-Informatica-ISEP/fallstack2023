"use client";

import { BASE_URL } from "@/services/api";
import { Interest } from "@prisma/client";
import { useEffect, useState } from "react";

interface InterestSelectorProps {
  userInterests: string[];
}

const InterestSelector: React.FC<InterestSelectorProps> = ({
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
    <div className="w-full flex flex-wrap gap-x-6 gap-y-4">
      {orderedInterests.map((interest) => (
        <span
          key={interest.id}
          className={`relative py-1 px-3 rounded-xl text-black ${
            userInterests.includes(interest.name)
              ? "bg-primary/40"
              : "bg-slate-200"
          }`}
        >
          {interest.name}
          <button className="absolute -right-1 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full text-red text-white bg-red-400/80">
            X
          </button>
        </span>
      ))}
    </div>
  );
};

export default InterestSelector;
