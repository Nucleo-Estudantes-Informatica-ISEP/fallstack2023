import Interview from "../../../public/assets/images/interview.png";
import Roundtables from "../../../public/assets/images/roundtables.png";
import { ScheduleDays } from "../../utils/ScheduleDays";
import Activity from "../Activity";
import CompaniesSection from "../CompaniesSection";
import InfoText from "../InfoText";
import Map from "../Map";
import Schedule from "../Schedule";
import SponsorsSection from "../SponsorsSection";

interface ContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

const Content: React.FC<ContentProps> = ({ contentRef }) => {
  const REGISTRATION_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSfKNCeOUtT_RboqnAFRfaiWRB6y969mhC__QElflp4rEJe-nA/viewform";

  return (
    <section
      ref={contentRef}
      className="center container mx-auto rounded-lg p-10 sm:w-3/4 lg:py-14 lg:w-full"
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
