import React from "react";

import EventDescription from "../EventDescription";
import EventInfos from "../EventInfos/index";
import HeadingText from "../HeadingText";

interface InfoTextProps {
  days: number[];
  month: string;
  beginningTime: string;
  endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({ days, month, beginningTime, endTime }) => {
    return (
        <>
            <HeadingText text="FALLSTACK" />
            <div className="flex flex-col mb-24 lg:flex-row">
                <EventInfos days={days} month={month} beginningTime={beginningTime} endTime={endTime} />

                <EventDescription>
                    <p className="text-justify">
                        O <span className="font-bold text-orange-600">Fallstack</span> aproxima, 
                        todos os anos, estudantes do curso de Engenharia Informática do 
                        <span className="font-bold"> Instituto Superior de Engenharia do Porto</span> 
                        de empresas que atuam no setor informático.
                    </p>

                    <p className="mt-6 text-justify">
                        Graças a este evento, os estudantes têm uma oportunidade única de 
                        <span className="font-bold text-orange-600"> interagir</span> com empresas 
                        diretamente ao longo de dois dias de evento repletos de 
                        <span className="font-bold text-orange-600"> partilha</span> de conhecimento 
                        e experiências.
                    </p>
                </EventDescription>
            </div>
        </>
    );
};

export default InfoText;
