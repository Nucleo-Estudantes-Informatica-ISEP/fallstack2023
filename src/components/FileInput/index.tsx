"use client";

import { FaTrashCan as TrashIcon } from "react-icons/fa6";
import {
  MdOutlineOpenInNew as PreviewIcon,
  MdFileUpload as UploadIcon,
} from "react-icons/md";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  accept: string;
  placeholder: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  file: {
    name: string;
    preview: string;
  } | null;
  icon: React.ReactNode;
  onClear: () => void;
}

const FileInput: React.FC<InputProps> = ({
  name,
  placeholder,
  accept,
  className,
  disabled,
  file,
  icon,
  onClear,
  ...rest
}) => {
  return (
    <div className="flex w-full flex-row items-center justify-center text-slate-700">
      <input
        type="file"
        name={name}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        accept={accept}
        hidden
        className={`rounded-md border border-gray-400 bg-slate-200 px-4 py-1
         text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
        {...rest}
      />
      <label
        className={
          "flex flex-1 cursor-pointer flex-row items-center rounded-md border border-gray-400 bg-slate-200 px-4 py-1 md:text-lg"
        }
        htmlFor={name}
      >
        <span className="mr-2 min-w-min text-lg md:text-xl">
          {file ? icon : <UploadIcon />}
        </span>
        <span className="w-44 truncate">{file ? file.name : name}</span>
        {file && (
          <>
            <button
              onClick={() => window.open(file.preview, "_blank")}
              className="ml-auto rounded-md p-1 transition-colors hover:bg-slate-300"
            >
              <PreviewIcon />
            </button>
            <button
              onClick={onClear}
              className="ml-2 rounded-md p-1 transition-colors hover:bg-red-500 hover:text-white"
            >
              <TrashIcon />
            </button>
          </>
        )}
      </label>
    </div>
  );
};

export default FileInput;
