"use client";

import { BASE_URL } from "@/services/api";
import { Interest } from "@prisma/client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface InterestSelectorProps {
  userInterests: string[];
  setUserInterests: Dispatch<SetStateAction<string[]>>;
}

const InterestSelector: React.FC<InterestSelectorProps> = ({
  setUserInterests,
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
        <button
          onClick={() =>
            !userInterests.includes(interest.name) &&
            setUserInterests([...userInterests, interest.name])
          }
          key={interest.id}
          className={`relative py-1 px-3 rounded-xl text-black ${
            userInterests.includes(interest.name)
              ? "bg-orange-300/80"
              : "bg-slate-200"
          }`}
        >
          {interest.name}
          {userInterests.includes(interest.name) && (
            <button
              onClick={() =>
                setUserInterests((cur) =>
                  cur.filter((i) => i !== interest.name)
                )
              }
              className="absolute -right-1 -top-1 w-4 h-4 flex items-center justify-center text-xs rounded-full text-red text-white bg-red-400/80 z-20"
            >
              X
            </button>
          )}
        </button>
      ))}
    </div>
  );
};

export default InterestSelector;
