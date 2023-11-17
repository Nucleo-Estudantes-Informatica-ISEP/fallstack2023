import { FunctionComponent } from "react";

import HighlightInfoBit from "../HighlightInfoBit";
import InfoBit from "../InfoBit";

import { Alarm, CalendarEvent, GeoAlt } from "react-bootstrap-icons";

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
    <section className="mx-auto my-16 flex flex-col justify-around gap-8 text-lg lg:my-0 lg:justify-center lg:px-28 lg:text-2xl">
      <HighlightInfoBit
        icon={<CalendarEvent />}
        info={`${days.join(" e ")} de ${month}`}
        highlightColor="accent"
      />
      <HighlightInfoBit
        icon={<Alarm />}
        info={`${beginningTime} - ${endTime}`}
        highlightColor="primary"
      />
      <InfoBit
        icon={<GeoAlt />}
        info={"Instituto Superior de Engenharia do Porto"}
      />
    </section>
  );
};

export default EventInfos;
