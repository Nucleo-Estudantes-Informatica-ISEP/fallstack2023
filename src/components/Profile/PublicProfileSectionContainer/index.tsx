"use client";

import { Student, User } from "@prisma/client";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

import UserImage from "@/components/UserImage";
import { Github, Linkedin } from "@/styles/Icons";

import BioSection from "../BioSection";
import ContactSection from "../ContactSection";
import InterestsSection from "../InterestsSection";
import CvSection from "../OpenCvSection";

interface PublicProfileSectionContainerProps {
  student: Student & { user: User };
  interests: string[];
}

const ProfileSectionContainer: React.FC<PublicProfileSectionContainerProps> = ({
  student,
  interests,
}) => {
  return (
    <div className="mt-14 h-full w-full items-center justify-center md:my-14">
      <div className="mb-12 flex h-full w-full flex-col items-center">
        <motion.div
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          {student.avatar ? (
            <UserImage student={student} />
          ) : (
            <Skeleton circle={true} height={120} width={120} />
          )}
          <div className="mt-3">
            <p className="px-4 text-center text-3xl font-bold md:text-5xl">
              <span>{student.name}</span>
            </p>
            <p className="px-4 pt-3 text-center text-lg md:text-xl">
              <span>{student.year}</span>
            </p>
          </div>
          <p className="flex gap-x-4 pt-6">
            {student.github && (
              <a
                href={student.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-10 w-10 md:h-8 md:w-8" />
              </a>
            )}
            {student.linkedin && (
              <a
                href={student.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-10 w-10 md:h-8 md:w-8" />
              </a>
            )}
          </p>
        </motion.div>
      </div>
      <section className="mx-auto flex h-full w-full max-w-4xl flex-col rounded-md bg-white py-4 md:w-5/6">
        {student.bio && <BioSection bio={student.bio} />}
        <ContactSection email={student.user.email} />
        {student.cv && (
          <CvSection student={student} text={"Abrir o CV de " + student.name} />
        )}
        {interests.length > 0 && <InterestsSection userInterests={interests} />}
      </section>
    </div>
  );
};
export default ProfileSectionContainer;
