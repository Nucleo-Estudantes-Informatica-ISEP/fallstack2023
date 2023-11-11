import { FunctionComponent } from 'react';
import { Alarm, CalendarEvent, GeoAlt } from 'react-bootstrap-icons';
import HighlightInfoBit from '../HighlightInfoBit';
import InfoBit from '../InfoBit';

interface EventInfosProps {
  days: number[];
  month: string;
  beginningTime: string;
  endTime: string;
}

const EventInfos: FunctionComponent<EventInfosProps> = ({
  days,
  month,
  beginningTime,
  endTime,
}) => {
    return (
        <section className="flex flex-col my-16 inline-flex gap-8 mx-auto justify-around lg:px-28 lg:my-0 lg:justify-center">
            <HighlightInfoBit icon={<CalendarEvent />} info={`${days.join(' e ')} de ${month}`} highlightColor='accent' />
            <HighlightInfoBit icon={<Alarm />} info={`${beginningTime} - ${endTime}`} highlightColor='primary' />
            <InfoBit icon={<GeoAlt />} info={'Instituto Superior de Engenharia do Porto'} />
        </section>
    );
};

export default EventInfos;
