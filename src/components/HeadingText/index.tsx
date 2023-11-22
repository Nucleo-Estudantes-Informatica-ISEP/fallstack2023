import React from "react";

interface HeadingTextProps {
  text: string;
  className?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text, className }) => {
  return (
    <h1 className={`${className} mb-12 text-center font-poppins text-5xl font-bold uppercase md:text-6xl lg:mb-24 lg:mt-12 lg:text-7xl`}>
      {text}
    </h1>
  );
};

export default HeadingText;
