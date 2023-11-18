import React from "react";

interface HeadingTextProps {
  text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
  return (
    <h1 className="mb-6 mt-12 text-center font-poppins text-5xl font-bold uppercase md:mb-12 md:mt-32 md:text-6xl lg:text-7xl">
      {text}
    </h1>
  );
};

export default HeadingText;
