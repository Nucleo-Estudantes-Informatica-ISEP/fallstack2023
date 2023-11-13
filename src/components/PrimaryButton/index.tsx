interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`rounded-lg border border-transparent bg-primary px-4 py-1 text-center
        text-sm leading-5 text-white transition-colors duration-150 focus:outline-none focus:ring active:bg-primary disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
