import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";

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
    <section className="grid w-full grid-cols-1 grid-rows-3 items-center justify-center lg:grid-cols-2 lg:grid-rows-2">
      <h5 className="w-full text-center text-4xl font-bold md:text-left md:text-5xl lg:col-span-2 lg:ml-10">
        Dia {day} - {title}
      </h5>
      <div className="mx-auto text-center text-xl leading-7 md:w-10/12 md:text-justify md:leading-8 lg:mx-0 lg:ml-auto lg:text-2xl">
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
          className="mx-auto mb-10 w-3/4 lg:w-4/5"
        />
      </div>
    </section>
  );
};

export default Activity;
