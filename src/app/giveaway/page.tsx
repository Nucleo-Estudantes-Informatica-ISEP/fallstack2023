import React from "react";

import { getStudents } from "@/lib/students";
import getServerSession from "@/services/getServerSession";
import GiveawaySection from "@/components/GiveawaySection";

const giveaway: React.FC = async () => {
  // const session = await getServerSession();

  // if (!session || !session.isAdmin) {
  //   return Custom404();
  // }

  // const students = await getStudents();

  interface Student {
    name: string;
    id: number;
  }

  const students: Student[] = [];
  const tableRows = 10;
  const numberOfRandomizedStudents = 50;

  for (let i = 1; i <= 200; i++) {
    const student = {
      name: `Student ${i}`,
      id: i,
    };
    students.push(student);
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center px-8 py-24 md:px-24">
      <GiveawaySection
        students={students}
        tableRows={tableRows}
        numberOfRandomizedStudents={numberOfRandomizedStudents}
      />
    </section>
  );
};

export default giveaway;
