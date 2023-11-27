"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import { getStudents } from "@/lib/students";
import getServerSession from "@/services/getServerSession";

import Particles from "react-particles";

const giveaway: React.FC = () => {
  // const session = await getServerSession();

  // if (!session || !session.company) {
  //   return Custom404();
  // }
  interface Student {
    name: string;
    id: number;
  }

  const students: Student[] = [];

  for (let i = 1; i <= 200; i++) {
    const student = {
      name: `Student ${i}`,
      id: i,
    };
    students.push(student);
  }

  const maxRows = 10;
  const numRows = Math.ceil(students.length / maxRows);

  const generateRandomStudentId = () => {
    const randomStudent = Math.floor(Math.random() * students.length);
    return students[randomStudent].id;
  };

  const [selectedStudentId, setSelectedStudentId] = useState<Number>();

  const [isRandomizing, setIsRandomizing] = useState(false);

  const numberOfRandomStudents = 50;

  const handleGiveaway = (numberOfRandomStudents: number): void => {
    setIsRandomizing(true);
    const timeoutTimer = 100;

    for (let i = 0; i < numberOfRandomStudents; i++) {
      setTimeout(() => {
        setSelectedStudentId(generateRandomStudentId());
      }, timeoutTimer * i);
    }

    setTimeout(() => {
      setIsRandomizing(false);
    }, timeoutTimer * numberOfRandomStudents);
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          name: "Click Confetti",
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "emitter",
              },
            },
            modes: {
              emitters: {
                direction: "none",
                spawnColor: {
                  value: "#ff0000",
                  animation: {
                    h: {
                      enable: true,
                      offset: {
                        min: -1.4,
                        max: 1.4,
                      },
                      speed: 0.1,
                      sync: false,
                    },
                    l: {
                      enable: true,
                      offset: {
                        min: 20,
                        max: 80,
                      },
                      speed: 0,
                      sync: false,
                    },
                  },
                },
                life: {
                  count: 1,
                  duration: 0.1,
                  delay: 0.6,
                },
                rate: {
                  delay: 0.1,
                  quantity: 100,
                },
                size: {
                  width: 0,
                  height: 0,
                },
              },
            },
          },
          particles: {
            number: {
              value: 0,
            },
            color: {
              value: "#f00",
            },
            shape: {
              type: ["circle", "square", "polygon"],
              options: {
                polygon: {
                  sides: 6,
                },
              },
            },
            opacity: {
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                startValue: "max",
                destroy: "min",
              },
            },
            size: {
              value: {
                min: 3,
                max: 7,
              },
            },
            life: {
              duration: {
                sync: true,
                value: 7,
              },
              count: 1,
            },
            move: {
              enable: true,
              gravity: {
                enable: true,
              },
              drift: {
                min: -2,
                max: 2,
              },
              speed: {
                min: 10,
                max: 30,
              },
              decay: 0.1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "destroy",
                top: "none",
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              move: true,
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              move: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 25,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              move: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex flex-col items-center justify-center gap-16 rounded-3xl bg-white p-8">
        <h1 className="text-4xl font-bold text-black">
          Inscritos - {students.length}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {Array.from({ length: numRows }, (_, rowIndex) => {
            return students
              .slice(rowIndex * maxRows, (rowIndex + 1) * maxRows)
              .map((student, colIndex) => {
                return (
                  <div
                    key={colIndex}
                    className={`border px-4 py-2 text-center font-semibold text-primary ${
                      student.id === selectedStudentId &&
                      "bg-primary text-white"
                    }`}
                  >
                    {student.name}
                  </div>
                );
              });
          })}
        </div>
        <button
          onClick={() => {
            handleGiveaway(numberOfRandomStudents);
          }}
          disabled={isRandomizing}
          className="rounded-xl bg-[#D9D9D9] px-8 py-4 text-lg font-semibold text-black transition-colors duration-200 ease-in-out hover:bg-[#BFBFBF] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#D9D9D9]"
        >
          Selecionar vencedor
        </button>
      </div>
    </section>
  );
};

export default giveaway;
