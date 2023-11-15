"use client";

interface InputSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  center?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  inputRef?: React.Ref<HTMLSelectElement>;
  options: string[];
}

const InputSelect: React.FC<InputSelectProps> = ({
  name,
  center,
  placeholder,
  className,
  disabled,
  inputRef,
  options,
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
      <select
        name={name}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        ref={inputRef}
        className={`rounded-md border border-gray-400 bg-slate-200 px-4 py-1
         text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
