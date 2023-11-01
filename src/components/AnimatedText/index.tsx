import { FunctionComponent } from "react";
import Typewriter from "typewriter-effect";

interface AnimatedTextProps {
  textToDisplay?: string[];
  autoStart?: boolean;
  loop?: boolean;
  delay?: number;
}

const defaultAnimatedText = [
  "students.",
  "companies.",
  "enthusiasts.",
  "your career prospects.",
];

const AnimatedText: FunctionComponent<AnimatedTextProps> = ({
  textToDisplay = defaultAnimatedText,
  autoStart = true,
  loop = true,
  delay = 200,
}) => {
  return (
    <>
      <Typewriter
        options={{
          strings: textToDisplay,
          autoStart,
          loop,
          delay,
        }}
      />
    </>
  );
};

export default AnimatedText;
