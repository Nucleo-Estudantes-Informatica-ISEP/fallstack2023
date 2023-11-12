"use client";

interface TextAreaProps {
  name: string;
  center?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  defaultValue?: string | null;
  ref?: React.Ref<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  center,
  placeholder,
  className,
  disabled,
  defaultValue,
  maxLength,
  ref,
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
      <textarea
        name={name}
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue ?? undefined}
        ref={ref}
        maxLength={maxLength}
        className={`rounded-md border border-gray-400 bg-slate-200 px-4 py-1
         text-black focus:border-primary focus:ring-0 disabled:text-gray-600 ${className}`}
      />
    </div>
  );
};

export default TextArea;
