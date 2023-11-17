import Image from "next/image";

import mapImage from "../../../public/assets/images/map.png";
import HeadingText from "../HeadingText";

const Map: React.FC = () => {
  return (
    <section className="container mx-auto w-full lg:max-w-3xl">
      <HeadingText text="Mapa" />
      <Image
        className="mx-auto my-2 shadow-lg"
        src={mapImage}
        alt="Mapa Informativo dos locais das Atividades"
      />
    </section>
  );
};

export default Map;
