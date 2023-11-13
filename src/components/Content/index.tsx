import Connect from "../../../public/assets/images/connect.png";
import Pitch from "../../../public/assets/images/pitch.png";
import Activity from "../Activity";
import InfoText from "../InfoText";

interface ContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
  return (
    <section
      ref={contentRef}
      className="container mx-auto rounded-lg p-8 sm:w-3/4 lg:w-full lg:pt-14"
    >
      <InfoText
        days={[28, 29]}
        month="Novembro"
        beginningTime="9h00"
        endTime="17:30h"
      />

      <section className="my-16 grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-rows-2 md:gap-y-14">
        <Activity logo={Pitch} title={"Pitch"} day={28}>
          O primeiro dia é dedicado aos{" "}
          <span className="font-bold text-orange-600">pitches </span>
          por parte das empresas presentes no evento.
          <br />
          Ao longo do dia terás a oportunidade de{" "}
          <span className="font-bold text-orange-600">conhecer </span>
          melhor as empresas de forma a conseguires filtrar os teus
          <span className="font-bold text-orange-600"> interesses</span> para o
          próximo dia.
        </Activity>

        <Activity
          logo={Connect}
          title={"Connection's Train"}
          day={29}
          imageOrientation="right"
        >
          No segundo dia terás a oportunidade de{" "}
          <span className="font-bold text-orange-600">interagir </span>
          diretamente com os representantes das empresas presentes de forma a
          <span className="font-bold text-orange-600"> esclareceres</span> as
          tuas dúvidas. Aproveita esta oportunidade para aumentares a tua rede
          de contactos e receberes
          <span className="font-bold text-orange-600"> feedback</span> por parte
          das empresas do teu interesse.
        </Activity>
      </section>
    </section>
  );
};

export default Content;
