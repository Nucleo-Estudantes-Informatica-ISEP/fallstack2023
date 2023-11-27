import React from "react";
import Link from "next/link";

const about: React.FC = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center px-12">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl">
          Made By
        </h1>
        <p className="text-center text-lg">
          <Link
            href="https://nei.isep.ipp.pt/"
            className="font-normal text-primary"
          >
            NEI-ISEP
          </Link>
        </p>
      </div>
      <div className="my-12 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl sm:text-4xl md:text-4xl">
          Git Repository
        </h1>
        <p className="my-4 text-center text-lg">
          <Link
            href="https://github.com/Nucleo-Estudantes-Informatica-ISEP/fallstack2023"
            className="font-normal text-primary"
          >
            https://github.com/Nucleo-Estudantes-Informatica-ISEP/fallstack2023
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl">
          Precisas de ajuda? Contacta-nos!
        </h1>

        <p className="my-2 text-center text-lg">
          Envia-nos um email para{" "}
          <Link
            href="mailto:support@nei-isep.org"
            className="font-normal text-primary"
          >
            support@nei-isep.org
          </Link>
        </p>
      </div>
    </section>
  );
};

export default about;
