import Spinner from "@/components/Spinner";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  loading,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      disabled={disabled || loading}
      className={`rounded-lg border border-transparent bg-primary px-4 py-1 text-center
        text-sm leading-5 text-white transition-opacity duration-200 focus:outline-none focus:ring active:bg-primary disabled:opacity-80 ${className}`}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default PrimaryButton;
