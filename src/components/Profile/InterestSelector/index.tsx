"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Interest } from "@prisma/client";
import Skeleton from "react-loading-skeleton";

import { BASE_URL } from "@/services/api";

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
    <div className="flex w-full flex-wrap gap-x-6 gap-y-4">
      {userInterests.length > 0 ? (
        <>
          {orderedInterests.map((interest) => (
            <button
              onClick={() =>
                !userInterests.includes(interest.name) &&
                setUserInterests([...userInterests, interest.name])
              }
              key={interest.id}
              className={`relative rounded-xl px-3 py-1 text-black ${
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
                  className="text-red absolute -right-1 -top-1 z-20 flex h-4 w-4 items-center justify-center rounded-full bg-red-400/80 text-xs text-white"
                >
                  X
                </button>
              )}
            </button>
          ))}
        </>
      ) : (
        <Skeleton height={20} count={20} />
      )}
    </div>
  );
};

export default InterestSelector;
