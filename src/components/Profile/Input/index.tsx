"use client";

interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: string | null;
  inputRef?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  className,
  disabled,
  defaultValue,
  inputRef,
}) => {
  return (
    <div className="flex w-full flex-col">
      <label className="text-lg text-slate-700" htmlFor={name}>
        {name}
      </label>
      <input
        type="text"
        name={name}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue ?? undefined}
        ref={inputRef}
        className={`rounded-md border border-gray-300 bg-slate-200 px-4
         py-2 text-black placeholder:text-gray-400 focus:border-primary focus:ring-0 disabled:cursor-not-allowed disabled:text-gray-800 ${className}`}
      />
    </div>
  );
};

export default Input;
