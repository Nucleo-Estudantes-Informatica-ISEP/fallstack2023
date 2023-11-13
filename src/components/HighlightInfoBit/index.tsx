"use client";

import { FunctionComponent } from "react";
import { motion } from "framer-motion";

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
  const side = highlightColor === "accent" ? "right" : "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        marginLeft: side === "left" ? -500 : 100,
      }}
      whileInView={{
        opacity: 1,
        marginLeft: 0,
      }}
      viewport={{
        once: true,
      }}
      className="flex items-center gap-x-6 lg:w-auto"
    >
      <span className="text-3xl">{icon}</span>
      <Highlight color={highlightColor} tilt={side}>
        <b>{info}</b>
      </Highlight>
    </motion.div>
  );
};

export default HighlightInfoBit;
