"use client";


interface InputProps {
  name: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  defaultValue?: string | null;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  className,
  disabled,
  defaultValue,
}) => {
  return (
    <div className="w-full flex flex-col">
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
          className={`px-4 py-2 bg-slate-200 text-black disabled:text-gray-600
         rounded-md border border-gray-300 focus:border-primary focus:ring-0 ${className}`}
        />
    </div>
  );
};

export default Input;
