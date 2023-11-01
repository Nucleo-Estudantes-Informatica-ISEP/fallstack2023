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
      className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-10 sm:w-3/4 lg:p-14"
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

      <section className="d-flex flex-column align-items-center justify-content-center mt-12 mb-6 text-center">
        <a rel="noreferrer" target="_blank" href={REGISTRATION_LINK}>
          <h6 className="mb-6 inline-block text-center font-good__times text-lg text-fallstack-color transition-all duration-300 hover:scale-105 hover:drop-shadow-fallstack-text-shadow lg:text-2xl">
            Inscrição no google forms
          </h6>
        </a>
      </section>

      <hr />

      <CompaniesSection />

      <hr />

      <SponsorsSection />

      <hr />

      <Schedule
        firstDayTitle="Segunda-Feira - Auditório Magno"
        secondDayTitle="Terça-Feira - Sala de Eventos"
        scheduleEvents={ScheduleDays}
      />

      <hr />

      <Map />
    </section>
  );
};

export default Content;
