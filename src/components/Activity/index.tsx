import { FunctionComponent } from "react";
import Image, { StaticImageData } from "next/image";

interface ActivityProps {
  logo: StaticImageData;
  title: string;
  day: number;
  children?: React.ReactNode;
}

const Activity: FunctionComponent<ActivityProps> = ({
  logo,
  title,
  day,
  children,
}) => {
  return (
    <section className="flex w-full flex-col items-center justify-center text-center">
      <div className="flex min-h-[16.5rem] flex-col items-center justify-center">
        <div id="w-full">
          <Image src={logo} alt={`Atividade ${title}`} className="w-32" />
        </div>
        <h5 className="font-good__times my-5 text-2xl text-gray-600">
          {title}
          <br />
          (Dia {day})
        </h5>
      </div>

      <div className="leading-8 lg:text-lg">{children}</div>
    </section>
  );
};

export default Activity;
