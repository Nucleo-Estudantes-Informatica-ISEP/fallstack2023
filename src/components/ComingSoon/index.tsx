import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <section className="mb-6 mt-12 flex flex-col items-center justify-center text-center md:flex-row">
      <h2 className="mr-1 text-center text-xl text-gray-600 lg:text-3xl">
        Mais informações em breve
      </h2>
      <div className="flex flex-row items-center justify-center">
        <span className="animate-bounce text-center text-xl text-gray-600 lg:text-4xl">
          .
        </span>
        <span className="animate-bounce-delayed-1 text-center text-xl text-gray-600 lg:text-4xl">
          .
        </span>
        <span className="animate-bounce-delayed-2 text-center text-xl text-gray-600 lg:text-4xl">
          .
        </span>
      </div>
    </section>
  );
};

export default ComingSoon;
