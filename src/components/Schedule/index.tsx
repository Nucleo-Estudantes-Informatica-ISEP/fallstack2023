import React, { useState } from "react";

import HeadingText from "../HeadingText";

export interface ScheduleDay {
  hour: string;
  activity: string;
}

interface Props {
  firstDayTitle: string;
  secondDayTitle: string;
  scheduleEvents: ScheduleDay[][];
}

const Schedule: React.FC<Props> = ({
  firstDayTitle,
  secondDayTitle,
  scheduleEvents,
}) => {
  const [activeScheduleEventIndex, setActiveScheduleEventIndex] =
    useState<number>(0);

  return (
    <div className="container flex flex-col items-center justify-center">
      <HeadingText text="Horário" />
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="flex w-full flex-col justify-center  lg:flex-row">
          <button
            className={`
                    ${
                      activeScheduleEventIndex == 0
                        ? "bg-orange-400"
                        : "bg-gray-200"
                    }
                    ${
                      activeScheduleEventIndex == 0
                        ? "text-white"
                        : "text-black"
                    }
                    w-full rounded-t-lg px-4 py-2.5 hover:brightness-95 lg:rounded-l-lg lg:rounded-r-none`}
            onClick={() => setActiveScheduleEventIndex(0)}
          >
            {firstDayTitle}
          </button>
          <button
            className={`
                    ${
                      activeScheduleEventIndex == 1
                        ? "bg-orange-400"
                        : "bg-gray-200"
                    } 
                    ${
                      activeScheduleEventIndex == 1
                        ? "text-white"
                        : "text-black"
                    }
                    w-full
                    rounded-b-lg px-4 py-2.5 transition-all duration-300
                    hover:brightness-95 lg:rounded-l-none lg:rounded-r-lg`}
            onClick={() => setActiveScheduleEventIndex(1)}
          >
            {secondDayTitle}
          </button>
        </div>
        <table className="text-md w-98 mt-6 w-full table-auto border-collapse ">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="w-1/3 p-4 text-left">Hora</th>
              <th className="py-4 text-left">Atividade</th>
            </tr>
          </thead>

          <tbody>
            {scheduleEvents[activeScheduleEventIndex].map((entry, index) => (
              <tr className="border-b-2 border-gray-500" key={index}>
                <td className="p-4">{entry.hour}</td>
                <td className="py-4 pr-4">{entry.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
