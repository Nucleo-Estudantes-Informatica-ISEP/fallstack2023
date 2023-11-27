import React from "react";

interface HeadingTextProps {
  text: string;
  className?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text, className }) => {
  return (
    <h1
      className={`${
        className ? className : "text-5xl md:text-6xl"
      } mb-12 text-center font-poppins font-bold uppercase md:text-6xl lg:mt-12 lg:text-7xl`}
    >
      {text}
    </h1>
  );
};

export default HeadingText;
