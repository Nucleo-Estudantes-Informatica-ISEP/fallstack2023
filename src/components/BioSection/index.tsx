"use client";

import { BASE_URL } from "@/services/api";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

interface BioSectionProps {
  code: string;
  bio?: string | null;
}

const BioSection: React.FC<BioSectionProps> = ({ code, bio }) => {
  const router = useRouter();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  async function handleSubmit() {
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
    <div className="flex flex-col mt-4 space-y-2 w-11/12 pl-12 md:mx-0">
      <div className="flex">
        <h3 className="font-bold text-left text-xl text-gray-600">
          Sobre
        </h3>
      </div>
      <textarea
        ref={inputRef}
        rows={3}
        id="bio"
        name="bio"
        onFocus={() => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Enter" && e.ctrlKey) handleSubmit();
          });
          removeEventListener();
        }}
        onBlur={addListener}
        className="bg-transparent block w-full h-32 text-base mx-auto mt-1 rounded-md resize-none focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600"
        defaultValue={bio?.toString()}
      />
    </div>
  );
};

export default BioSection;
