import { FunctionComponent } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import AnimatedText from "../AnimatedText";
import Image, { StaticImageData } from "next/image";

interface HeaderProps {
  logoSrc: StaticImageData;
  logoAlt: string;
  eventDate: string;
  eventName: string;
  contentRef: React.RefObject<HTMLDivElement>;
}

const Header: FunctionComponent<HeaderProps> = ({
  logoSrc,
  logoAlt,
  eventDate,
  eventName,
  contentRef,
}) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <Image
        className="h-[300px] w-1/3 drop-shadow-md transition-all duration-200 hover:scale-105 hover:drop-shadow-fallstack-logo-shadow lg:h-[400px]"
        src={logoSrc}
        alt={logoAlt}
      />
      <h5 className="text-1xl my-2 mx-0 animate-fade text-center font-good__times text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-2xl">
        {eventDate}
      </h5>
      <h1 className="my-2 mx-0 animate-fade text-center font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-6xl">
        {eventName}
      </h1>
      <h5 className="text-1xl my-2 mx-0 animate-fade text-center font-good__times text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-3xl">
        <div>The time has come for</div>
        <AnimatedText />
      </h5>

      <div className="bottom-4 mx-0 flex h-12 w-12 animate-bounce cursor-pointer items-center justify-center text-center transition-all duration-200 hover:scale-105">
        <a
          className="animate-fade opacity-0"
          onClick={() => contentRef.current?.scrollIntoView()}
        >
          <ChevronDown color="white" size={30} />
        </a>
      </div>
    </section>
  );
};

export default Header;
