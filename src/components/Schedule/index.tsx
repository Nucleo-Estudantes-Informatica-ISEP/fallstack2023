"use client";

import React, { useState } from "react";
import useWindowSize from "@rooks/use-window-size";
import { motion } from "framer-motion";

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

  const { innerWidth: width } = useWindowSize();

  const innerWidth = width ? width : 0;

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center"
    >
      <HeadingText text="Horário" />
      <div className="container flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col justify-center md:flex-row">
          <motion.div
            animate={{
              x:
                activeScheduleEventIndex === 1 && innerWidth > 768 ? "100%" : 0,
              y:
                activeScheduleEventIndex === 1 && innerWidth < 768 ? "100%" : 0,
              borderTopLeftRadius:
                activeScheduleEventIndex === 1 && innerWidth > 768
                  ? 0
                  : innerWidth > 768 && activeScheduleEventIndex === 0
                  ? 8
                  : activeScheduleEventIndex === 1
                  ? 0
                  : 8,
              borderTopRightRadius:
                activeScheduleEventIndex === 1 && innerWidth > 768
                  ? 8
                  : innerWidth > 768 && activeScheduleEventIndex === 0
                  ? 0
                  : activeScheduleEventIndex === 1
                  ? 0
                  : 8,
              borderBottomRightRadius:
                activeScheduleEventIndex === 1 && innerWidth > 768
                  ? 8
                  : innerWidth > 768 && activeScheduleEventIndex === 0
                  ? 0
                  : activeScheduleEventIndex === 1
                  ? 8
                  : 0,
              borderBottomLeftRadius:
                activeScheduleEventIndex === 1 && innerWidth > 768
                  ? 0
                  : innerWidth > 768 && activeScheduleEventIndex === 0
                  ? 8
                  : activeScheduleEventIndex === 1
                  ? 8
                  : 0,
            }}
            transition={{
              type: "spring",
              duration: 0.2,
              bounce: 0.5,
            }}
            className="absolute left-0 top-0 -z-10 h-1/2 w-full bg-primary hover:brightness-110 md:h-full md:w-1/2"
          />
          <motion.div
            animate={{
              x:
                activeScheduleEventIndex === 0 && innerWidth > 768 ? "100%" : 0,
              y:
                activeScheduleEventIndex === 0 && innerWidth < 768 ? "100%" : 0,
              borderTopLeftRadius:
                activeScheduleEventIndex === 0 && innerWidth > 768
                  ? 0
                  : innerWidth > 768 && activeScheduleEventIndex === 1
                  ? 8
                  : activeScheduleEventIndex === 0
                  ? 0
                  : 8,
              borderTopRightRadius:
                activeScheduleEventIndex === 0 && innerWidth > 768
                  ? 8
                  : innerWidth > 768 && activeScheduleEventIndex === 1
                  ? 0
                  : activeScheduleEventIndex === 0
                  ? 0
                  : 8,
              borderBottomRightRadius:
                activeScheduleEventIndex === 0 && innerWidth > 768
                  ? 8
                  : innerWidth > 768 && activeScheduleEventIndex === 1
                  ? 0
                  : activeScheduleEventIndex === 0
                  ? 8
                  : 0,
              borderBottomLeftRadius:
                activeScheduleEventIndex === 0 && innerWidth > 768
                  ? 0
                  : innerWidth > 768 && activeScheduleEventIndex === 1
                  ? 8
                  : activeScheduleEventIndex === 0
                  ? 8
                  : 0,
            }}
            transition={{ duration: 0.1, stiffness: 500 }}
            className="absolute left-0 top-0 -z-20 h-1/2 w-full bg-secondary hover:brightness-110 md:h-full md:w-1/2"
          />
          <button
            className="w-full rounded-t-lg px-4 py-2.5 hover:brightness-95 lg:rounded-l-lg lg:rounded-r-none"
            onClick={() => setActiveScheduleEventIndex(0)}
          >
            <span className="z-20">{firstDayTitle}</span>
          </button>
          <button
            className="w-full rounded-b-lg px-4 py-2.5 transition-all duration-300
                    hover:brightness-95 lg:rounded-l-none lg:rounded-r-lg"
            onClick={() => setActiveScheduleEventIndex(1)}
          >
            <span className="z-20">{secondDayTitle}</span>
          </button>
        </div>
        <table className="mt-6 w-full table-auto border-collapse text-lg">
          <thead>
            <tr className="border-b-2 border-gray-500">
              <th className="w-1/3 p-4 text-left">Hora</th>
              <th className="py-4 text-left">Atividade</th>
            </tr>
          </thead>

          <motion.tbody
            initial={{
              opacity: 0,
              x: activeScheduleEventIndex === 0 ? -50 : 50,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            key={activeScheduleEventIndex}
          >
            {scheduleEvents[activeScheduleEventIndex].map((entry, index) => (
              <motion.tr
                className="border-b-2 border-gray-500"
                key={index}
                initial={{
                  opacity: 0,
                  x: activeScheduleEventIndex === 0 ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.1 * index }}
              >
                <td className="p-4">{entry.hour}</td>
                <td className="py-4 pr-4">{entry.activity}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Schedule;
