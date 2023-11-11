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
    <span className="flex items-center gap-4 lg:w-auto">
      <span className="text-3xl">{icon}</span>
      <Highlight
        color={highlightColor}
        tilt={highlightColor === "accent" ? "right" : "left"}
      >
        <b className="w-[20ch] ">{info}</b>
      </Highlight>
    </span>
  );
};

export default HighlightInfoBit;
