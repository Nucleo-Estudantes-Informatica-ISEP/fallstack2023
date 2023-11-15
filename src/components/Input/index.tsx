"use client";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  center?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  center,
  placeholder,
  className,
  disabled,
  inputRef,
  type = "text",
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col">
      <label
        className={`text-slate-700 md:text-lg ${
          center ? " mb-4 text-center" : ""
        }`}
        htmlFor={name}
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        ref={inputRef}
        className={`rounded-md border border-gray-400 bg-slate-200 px-4 py-1
         text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
