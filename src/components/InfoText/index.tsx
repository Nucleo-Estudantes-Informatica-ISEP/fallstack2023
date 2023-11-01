import React from 'react';
import EventDescription from '../EventDescription';
import EventInfos from '../EventInfos/index';
import HeadingText from '../HeadingText';

interface InfoTextProps {
    days: number[];
    month: string;
    beginningTime: string;
    endTime: string;
}

const InfoText: React.FC<InfoTextProps> = ({ days, month, beginningTime, endTime }) => {
    return (
        <>
            <HeadingText text="O que é o Fallstack?" />
            <EventInfos days={days} month={month} beginningTime={beginningTime} endTime={endTime} />

            <EventDescription>
                <p className="text-justify">
                    O evento Fallstack do Instituto Superior de Engenharia do Porto está finalmente
                    de volta para mais uma edição imperdível! Este evento, já na sua 5ª edição,
                    realiza-se nos dias {days.join(' e ')} de {month}, e proporciona a oportunidade
                    única a finalistas de Engenharia Informática de contactarem com diversas
                    empresas, oferecendo inúmeras possíveis oportunidades de estágio curricular.
                </p>

                <p className="text-justify">
                    É gratuito a todos os estudantes e contempla duas atividades: a Sessão de
                    Entrevistas e o Connection's Train. No primeiro dia, decorre a Sessão de
                    Entrevistas, cujo objetivo é as empresas participantes darem-se a conhecer aos
                    estudantes, desde a área onde trabalham até às propostas de estágio.
                </p>

                <p className="mt-4 text-justify">
                    {' '}
                    No segundo dia, é a vez do Connection's Train, onde os estudantes poderão
                    interagir diretamente com todas as empresas presentes e esclarecer eventuais
                    dúvidas que possam ter surgido ou ainda obter mais informações sobre as mesmas.
                </p>
            </EventDescription>
        </>
    );
};

export default InfoText;
