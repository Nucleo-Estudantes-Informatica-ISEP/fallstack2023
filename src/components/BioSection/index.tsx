"use client";

import { Pencil } from "@/styles/Icons";
import InputLabel from "../InputLabel";
import React, { useRef, useState } from "react";
import { BASE_URL } from "@/services/api";
import { useRouter } from "next/navigation";

interface BioSectionProps {
  code: string;
  bio?: string | null;
  hidden?: boolean;
}

const BioSection: React.FC<BioSectionProps> = ({ code, bio, hidden }) => {
  const router = useRouter();

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isEditable, setIsEditable] = useState(!hidden);

  async function handleSubmit() {
    setIsEditable(false);

    const res = await fetch(`${BASE_URL}/students/${code}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // TODO: get session from user
      },
      body: JSON.stringify({
        bio: inputRef.current?.value,
      }),
    });
    console.log(res.status);
    if (res.status === 200) {
      router.refresh();
    } else alert("Erro ao atualizar a bio.");
  }

  const handleWrite = () => {
    setIsEditable(true);
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const addListener = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        handleSubmit();
      }
    });
  };

  const removeEventListener = () => {
    document.removeEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        handleSubmit();
      }
    });
  };

  return (
    <div className="flex flex-col mt-4 space-y-2 w-11/12 pl-8 md:mx-0">
      <div className="flex">
        <h3 className="font-bold text-left text-xl text-gray-600">Sobre</h3>
      </div>
      <textarea
        ref={inputRef}
        rows={3}
        id="bio"
        name="bio"
        onFocus={() => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && e.ctrlKey) {
              handleSubmit();
            }
          });
          removeEventListener();
        }}
        onBlur={addListener}
        className={`bg-transparent block w-full h-32 text-base mx-auto mt-1 rounded-md resize-none focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600 ${
          isEditable ? "border-4 border-primary-500 text-black" : "text-black"
        }`}
        disabled={!isEditable}
        defaultValue={bio?.toString()}
      />
      {!hidden && (
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6 py-4">
          <button
            onClick={handleSubmit}
            className="w-full h-10 md:w-32 border-2 text-black bg-primary border-primary rounded-md"
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default BioSection;
