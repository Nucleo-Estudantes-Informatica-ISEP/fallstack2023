import React, { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import { getStudents } from "@/lib/students";
import getServerSession from "@/services/getServerSession";
import GiveawaySection from "@/components/GiveawaySection";

import Particles from "react-particles";

const giveaway: React.FC = async () => {
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

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <GiveawaySection students={students} />
    </section>
  );
};

export default giveaway;
