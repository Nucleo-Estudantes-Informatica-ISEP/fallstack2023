import Image, { StaticImageData } from "next/image";
import { FunctionComponent } from "react";

interface ActivityProps {
  logo: StaticImageData;
  title: string;
  day: number;
  children?: React.ReactNode;
}

const Activity2: FunctionComponent<ActivityProps> = ({
  logo,
  title,
  day,
  children,
}) => {
  return (
    <section className="grid w-full grind-rows-3 grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 items-center justify-center place-contant-center">
      <h5 className="mt-5 mb-24 ml-10 lg:col-span-2 font-good__times text-5xl text-white font-bold">
        Dia {day} - {title}
      </h5>
      <div className="leading-8 lg:text-2xl md:w-10/12 lg:mx-0 lg:ml-auto mx-auto text-justify">{children}</div>

      <div id="w-full" className="row-start-2 lg:col-start-2">
        <Image src={logo} alt={`Atividade ${title}`} className="w-1/2 lg:w-3/5 mx-auto mb-10 lg:mb-0" />
      </div>
    </section>
  );
};

export default Activity2;