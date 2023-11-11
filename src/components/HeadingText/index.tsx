import React from 'react';

interface HeadingTextProps {
    text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
    return (
        <h1 className="mt-40 text-center font-poppins text-5xl text-current font-bold md:text-6xl lg:mt-12 lg:mb-24 lg:text-7xl">
            {text}
        </h1>
    );
};

export default HeadingText;
