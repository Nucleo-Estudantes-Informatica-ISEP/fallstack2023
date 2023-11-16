import { FunctionComponent } from "react";
import { CgSpinner } from "react-icons/cg";

interface SpinnerProps {
  className?: string;
}

const Spinner: FunctionComponent<SpinnerProps> = ({ className }) => {
  return (
    <span
      className={`flex flex-1 animate-spin justify-center text-xl ${className}`}
    >
      <CgSpinner />
    </span>
  );
};

export default Spinner;
