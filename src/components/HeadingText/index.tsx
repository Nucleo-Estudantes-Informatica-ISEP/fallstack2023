import React from "react";

interface HeadingTextProps {
  text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
  return (
    <h1 className="my-6 text-center text-2xl text-gray-600 md:text-3xl lg:my-12 lg:text-5xl">
      {text}
    </h1>
  );
};

export default HeadingText;
