"use client";

import { motion } from "framer-motion";

import EventInfos from "../EventInfos/index";
import HeadingText from "../HeadingText";

interface InfoTextProps {
  days: number[];
  month: string;
  beginningTime: string;
  endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({
  days,
  month,
  beginningTime,
  endTime,
}) => {
  return (
    <>
      <HeadingText text="Fallstack" />
      <div className="mb-24 flex flex-col text-xl lg:flex-row">
        <EventInfos
          days={days}
          month={month}
          beginningTime={beginningTime}
          endTime={endTime}
        />

        <motion.section
          initial={{
            opacity: 0,
            marginRight: -500,
          }}
          whileInView={{
            marginRight: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col space-y-2 text-center leading-7 md:text-left md:text-2xl md:leading-8 lg:px-10"
        >
          <p>
            O <span className="font-bold text-orange-600">Fallstack</span>{" "}
            aproxima, todos os anos, estudantes do curso de Engenharia
            Informática do
            <span className="font-bold">
              {" "}
              Instituto Superior de Engenharia do Porto{" "}
            </span>
            de empresas que atuam no setor informático.
          </p>

          <p className="mt-6">
            Graças a este evento, os estudantes têm uma oportunidade única de
            <span className="font-bold text-orange-600"> interagir</span> com
            empresas diretamente ao longo de dois dias de evento repletos de
            <span className="font-bold text-orange-600"> partilha</span> de
            conhecimento e experiências.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default InfoText;
