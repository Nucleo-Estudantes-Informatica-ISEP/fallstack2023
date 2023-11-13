"use client";

import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ActivityProps {
  logo: StaticImageData;
  title: string;
  day: number;
  children?: React.ReactNode;
  imageOrientation?: "left" | "right";
}

const Activity: FunctionComponent<ActivityProps> = ({
  logo,
  title,
  day,
  children,
  imageOrientation,
}) => {
  imageOrientation = imageOrientation || "left";

  return (
    <motion.section
      initial={{
        opacity: 0,
        marginLeft: imageOrientation === "left" ? -500 : 1000,
      }}
      whileInView={{
        opacity: 1,
        marginLeft: 0,
      }}
      viewport={{
        once: true,
      }}
      className="my-12 grid w-full grid-cols-1 grid-rows-[1fr_3fr_3fr] items-center justify-center gap-8 lg:grid-cols-2 lg:grid-rows-[1fr_4fr]"
    >
      <h5 className="w-full text-center font-poppins text-4xl font-bold md:text-left md:text-5xl lg:col-span-2">
        Dia {day} - {title}
      </h5>
      <div className="mx-auto w-full text-center text-xl leading-7 md:text-justify md:leading-8 lg:text-2xl">
        {children}
      </div>

      <div
        id="w-full"
        className={`row-start-2 ${
          imageOrientation === "right" ? "lg:col-start-2" : "lg:col-start-1"
        }`}
      >
        <Image
          src={logo}
          alt={`Atividade ${title}`}
          className="mx-auto w-3/4 lg:w-4/5"
        />
      </div>
    </motion.section>
  );
};

export default Activity;
