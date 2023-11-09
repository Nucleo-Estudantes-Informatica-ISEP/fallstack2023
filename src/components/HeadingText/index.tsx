import React from 'react';

interface HeadingTextProps {
    text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
    return (
        <h1 className="my-6 text-center font-poppins text-2xl text-white font-bold md:text-3xl lg:mt-12 lg:mb-24 lg:text-5xl">
            {text}
        </h1>
    );
};

export default HeadingText;
