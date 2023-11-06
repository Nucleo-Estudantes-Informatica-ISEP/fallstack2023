"use client";

import { Dispatch, Ref, SetStateAction } from "react";

interface InputProps {
  type: "text" | "textarea";
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value?: string | null;
  rows?: number;
  ref?: Ref<HTMLTextAreaElement>;
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
      {type === "textarea" && (
        <textarea
          name={name}
          disabled={disabled}
          id={name}
          ref={ref}
          rows={rows}
          placeholder={placeholder}
          defaultValue={value ?? undefined}
          className={`px-4 py-2 bg-slate-200 text-black disabled:text-gray-600
         rounded-md border border-gray-300 focus:border-primary focus:ring-0 ${className}`}
        />
      )}
    </div>
  );
};

export default Input;
