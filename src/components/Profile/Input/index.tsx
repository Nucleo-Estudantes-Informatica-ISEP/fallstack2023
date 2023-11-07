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
  setValue?: Dispatch<SetStateAction<string | null>>;
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
  setValue,
}) => {
  return (
    <div className="flex w-full flex-col">
      <label className="text-lg text-slate-700" htmlFor={name}>
        {name}
      </label>
      {type === "text" && (
        <input
          type={type}
          name={name}
          disabled={disabled}
          id={name}
          onChange={(e) => setValue && setValue(e.target.value)}
          placeholder={placeholder}
          defaultValue={value ?? undefined}
          className={`rounded-md border border-gray-300 bg-slate-200 px-4
         py-2 text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
        />
      )}
      {type === "textarea" && setValue && (
        <>
          <textarea
            name={name}
            disabled={disabled}
            id={name}
            ref={ref}
            rows={rows}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            defaultValue={value ?? undefined}
            style={{
              resize: "vertical",
              minHeight: "100px",
              maxHeight: "200px",
            }}
            className={`rounded-md border border-gray-300 bg-slate-200 px-4
          py-2 text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
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
