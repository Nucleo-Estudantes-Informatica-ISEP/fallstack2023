"use client";

import { Pencil } from "@/styles/Icons";
import InputLabel from "../InputLabel";
import { useRef, useState } from "react";

const BioSection = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [hidden, setHidden] = useState(true);
  const [isEditable, setIsEditable] = useState(false);

  function handleSubmit() {
    setHidden(true);
    setIsEditable(false);
  }

  const handleWrite = () => {
    setHidden(false);
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
    <div className="flex flex-col mb-5 space-y-5 w-11/12 md:w-2/3 mx-auto md:mx-0">
      <div className="flex">
        <InputLabel value="Sobre" className="font-bold text-left text-xl" />
        <button className="text-black" onClick={handleWrite}>
          <Pencil className="relative right-0 bottom-0 w-6 h-6 text-black ml-2" />
        </button>
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
        className={`block w-full mx-auto mt-1 rounded-md resize-none md:mx-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus-within:text-primary-600 ${
          isEditable
            ? "border-4 border-primary-500 text-black"
            : "bg-fallstack-color-blue text-white"
        }`}
        disabled={!isEditable}
      ></textarea>
      {!hidden && (
        <div className="flex items-center w-5/6 mx-auto md:mx-0 gap-x-6">
          <button
            onClick={handleSubmit}
            className="w-full h-10 md:w-32 border-2 bg-fallstack-color"
          >
            Salvar
          </button>
        </div>
      )}
    </div>
  );
};

export default BioSection;
