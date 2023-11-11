import { FunctionComponent, ReactNode } from "react";

interface HighlightProps {
  children: ReactNode;
  color?: "accent" | "primary";
  tilt?: "left" | "right";
}

const Highlight: FunctionComponent<HighlightProps> = ({
  children,
  color,
  tilt,
}) => {
  color = color || "primary";
  tilt = tilt || "left";
  return (
    <span
      className={`relative after:absolute after:-left-2 after:-z-10 after:box-content after:h-[90%] after:w-full after:rounded-[66px] ${
        color === "accent" ? "after:bg-accent" : "after:bg-primary"
      }
       ${
         tilt === "left"
           ? "after:top-0 after:-rotate-2"
           : "after:bottom-0 after:rotate-2"
       }
       after:px-2`}
    >
      {children}
    </span>
  );
};

export default Highlight;
