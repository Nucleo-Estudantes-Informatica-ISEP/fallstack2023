import { FunctionComponent, ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  topY?: number;
}

const Highlight: FunctionComponent<HighlightProps> = ({ children, topY }) => {
  return (
    <span className="relative after:absolute after:-left-2 after:-z-10 after:box-content after:h-[90%] after:w-full after:rotate-2 after:rounded-[66px] after:bg-accent after:px-2">
      {children}
    </span>
  );
};

export default Highlight;
