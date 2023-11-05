"use client";

import { BASE_URL } from "@/services/api";
import { useRef, useState, useEffect } from "react";
import { CheckboxGroup } from "@nextui-org/react";
import { CustomCheckbox } from "@/components/CustomCheckBox";
import React from "react";
import { useRouter } from "next/navigation";
import { Interest } from "@prisma/client";

interface InterestsSectionProps {
  code: string;
  interests?: string[] | null;
  hidden?: boolean;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  code,
  interests,
  hidden,
}) => {
  const router = useRouter();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isEditable, setIsEditable] = useState(!hidden);
  const [fetchedInterests, setFetchedInterests] = useState<Interest[]>([]);
  const [groupSelected, setGroupSelected] = React.useState([]);

  const handleChange = () => {
    setIsEditable(true);
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  async function handleSubmit() {
    setIsEditable(false);

    const res = await fetch(`${BASE_URL}/students/${code}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // TODO: get session from user
      },
      body: JSON.stringify({
        interests: groupSelected,
      }),
    });
    console.log(res.status);
    if (res.status === 200) {
      router.refresh();
    } else alert("Erro ao atualizar Interesses.");
  }

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const res = await fetch(`${BASE_URL}/interests`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // TODO: get session from user
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch interests");
        }

        const interests = await res.json();
        setFetchedInterests(interests);
      } catch (error) {
        console.error("Error fetching interests:", error);
      }
    };

    fetchInterests();
  }, []);

  return (
    <section className="flex flex-col mb-16 space-y-5 w-11/12 md:w-2/3 pl-8 md:mx-0">
      <div className="flex flex-col">
        <h3 className="font-bold text-left text-xl text-gray-600 my-2">
          Interesses
        </h3>
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6">
          {!hidden && (
            <div className="flex flex-col gap-2 w-full">
              <CheckboxGroup
                className="gap-1 text-black"
                label="Seleciona os teus interesses:"
                orientation="horizontal"
                value={groupSelected}
                onChange={setGroupSelected}
                style={{ maxHeight: "300px", overflow: "auto" }}
              >
                {fetchedInterests.map((interest, index) => (
                  <CustomCheckbox key={index} value={interest}>
                    {interest.name}
                  </CustomCheckbox>
                ))}
              </CheckboxGroup>
              {groupSelected.length > 0 && (
                <button
                  onClick={handleSubmit}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Save
                </button>
              )}
            </div>
          )}
          {hidden && interests && (
            <>
              {interests.map((selectedInterest, index) => (
                <div
                  key={index}
                  className="flex items-start px-2 py-1 rounded-lg bg-gray-200 border text-black"
                >
                  {selectedInterest}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default InterestsSection;
