import { FunctionComponent } from "react";

import Highlight from "../Highlight";

interface InfoBitProps {
  icon: React.ReactNode;
  info: string;
  highlightColor?: "accent" | "primary";
}

const HighlightInfoBit: FunctionComponent<InfoBitProps> = ({
  icon,
  info,
  highlightColor,
}) => {
  highlightColor = highlightColor || "primary";
  return (
    <span className="flex items-center gap-x-6 lg:w-auto">
      <span className="text-3xl">{icon}</span>
      <Highlight
        color={highlightColor}
        tilt={highlightColor === "accent" ? "right" : "left"}
        className={
          highlightColor === "accent" ? "after:bottom-0.5" : "after:top-0.5"
        }
      >
        <b>{info}</b>
      </Highlight>
    </span>
  );
};

export default HighlightInfoBit;
