import Interview from "../../../public/assets/images/interview.png";
import Roundtables from "../../../public/assets/images/roundtables.png";
import Activity from "../Activity";
import InfoText from "../InfoText";

interface ContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
  return (
    <section
      ref={contentRef}
      className="container mx-auto w-11/12 rounded-lg p-10 sm:w-3/4 lg:p-14"
    >
      <InfoText
        days={[19, 20]}
        month="Dezembro"
        beginningTime="9h00"
        endTime="17:30h"
      />

      <section className="my-16 grid w-full grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5">
        <div className="col-span-1">
          <Activity logo={Interview} title={"Sessão de entrevistas"} day={19}>
            O objetivo da <strong>Sessão de Entrevistas</strong> é as empresas
            presentes darem-se a conhecer aos estudantes, através de uma breve
            apresentação e esclarecendo as questões que os estudantes tiverem
            para colocar.
          </Activity>
        </div>

        <div className="col-span-1">
          <Activity logo={Roundtables} title={"Connection's train"} day={20}>
            <p>
              O objetivo das <strong>Connection&apos;s train</strong> é o
              estudante ter contacto com todas as empresas presentes no evento.
            </p>
            <p>
              Poderão ainda entrar em contacto com as empresas que mais
              despertaram interesse <strong>sem restrições de tempo</strong>!
            </p>
          </Activity>
        </div>
      </section>
    </section>
  );
};

export default Content;
