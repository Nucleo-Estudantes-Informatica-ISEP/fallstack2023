"use client";

import { Dispatch, Ref, SetStateAction } from "react";
import swal from "sweetalert";

interface InputProps {
  type: "text" | "textarea";
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string | null;
  rows?: number;
  ref?: Ref<HTMLTextAreaElement>;
  setUserBio?: Dispatch<SetStateAction<string | null>>;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  className,
  disabled,
  rows,
  ref,
  value,
  setUserBio,
}) => {
  return (
    <div className="w-full flex flex-col">
      <label className="text-lg text-slate-700" htmlFor={name}>
        {name}
      </label>
      {type === "text" && (
        <input
          type={type}
          name={name}
          disabled={disabled}
          id={name}
          placeholder={placeholder}
          defaultValue={value ?? undefined}
          className={`px-4 py-2 bg-slate-200 text-black disabled:text-gray-600
         rounded-md border border-gray-300 focus:border-primary focus:ring-0 ${className}`}
        />
      )}
      {type === "textarea" && setUserBio && (
        <>
          <textarea
            name={name}
            disabled={disabled}
            id={name}
            ref={ref}
            rows={rows}
            onChange={(e) => setUserBio(e.target.value)}
            placeholder={placeholder}
            defaultValue={value ?? undefined}
            style={{
              resize: "vertical",
              minHeight: "100px",
              maxHeight: "200px",
            }}
            className={`px-4 py-2 bg-slate-200 text-black disabled:text-gray-600
          rounded-md border border-gray-300 focus:border-primary focus:ring-0 ${className}`}
          />
          <p
            className={`text-right text-slate-700 ${
              value && value.length > 255 ? "text-red-500" : ""
            }`}
          >
            {value?.length} / 255 caracteres
          </p>
        </>
      )}
    </div>
  );
};

export default Input;
