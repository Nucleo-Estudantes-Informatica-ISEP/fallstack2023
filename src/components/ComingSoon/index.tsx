import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <section className="mb-8 flex w-full items-center justify-center text-center text-xl md:text-4xl">
      <h2 className="mr-1 text-center font-poppins">
        Mais informações em breve
      </h2>
      <div className="flex flex-row items-center justify-center">
        <span className="animate-bounce text-center">.</span>
        <span className="animate-bounce-delayed-1 text-center">.</span>
        <span className="animate-bounce-delayed-2 text-center">.</span>
      </div>
    </section>
  );
};

export default ComingSoon;
