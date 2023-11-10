import { FunctionComponent } from "react";

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
    <section className="my-6 flex flex-col items-center justify-around gap-4 md:px-28 lg:flex-row lg:justify-center">
      <InfoBit
        icon={<CalendarEvent />}
        info={`${days.join(" e ")} de ${month}`}
      />
      <InfoBit icon={<Alarm />} info={`${beginningTime} - ${endTime}`} />
      <InfoBit
        icon={<GeoAlt />}
        info={"Instituto Superior de Engenharia do Porto"}
      />
    </section>
  );
};

export default EventInfos;
