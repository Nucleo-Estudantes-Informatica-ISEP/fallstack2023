"use client";

import { useState } from "react";
import { Student, User } from "@prisma/client";
import { motion } from "framer-motion";

import UserImage from "@/components/UserImage";
import { Github, Linkedin } from "@/styles/Icons";

import ProfileSection from "../ProfileSection";
import SettingsSection from "../SettingsSection";
import StatsSection from "../StatsSection";

interface ProfileSectionContainerProps {
  student: Student & { user: User };
  interests: string[];
  isOwnProfile: boolean;
}

const ProfileSectionContainer: React.FC<ProfileSectionContainerProps> = ({
  student,
  interests,
  isOwnProfile,
}) => {
  const [activeTab, setActiveTab] = useState<
    "Sumário" | "Perfil" | "Definições"
  >(isOwnProfile ? "Sumário" : "Perfil");

  console.log(isOwnProfile);

  return (
    <div className="mb-12 w-full items-center justify-center">
      <div
        className={`flex w-full flex-col items-center ${
          activeTab === "Definições" ? "pt-12" : ""
        } mb-12 h-full bg-secondary`}
      >
        <motion.div
          animate={{
            height: activeTab !== "Definições" ? "auto" : 0,
            visibility: activeTab !== "Definições" ? "visible" : "hidden",
            marginTop: activeTab !== "Definições" ? "3rem" : 0,
            opacity: activeTab !== "Definições" ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <UserImage />
          <p className="px-4 text-center text-xl font-semibold">
            <span className="font-bold">{student.name}</span>
          </p>
          <p className="px-4 text-center">
            O teu perfil já foi gravado{" "}
            <span className="font-bold text-primary">{0} vezes</span> hoje.
          </p>
          <p className="flex gap-x-4 pt-6">
            {student.github && (
              <a
                href={student.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-10 w-10 md:h-6 md:w-6" />
              </a>
            )}
            {student.linkedin && (
              <a
                href={student.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-10 w-10 md:h-6 md:w-6" />
              </a>
            )}
          </p>
        </motion.div>

        <div className="relative mt-8 flex w-full max-w-4xl flex-col items-center justify-center text-center md:w-5/6 md:flex-row md:justify-between">
          <motion.div
            className="invisible absolute bottom-0 left-0 w-52 border-b-4 border-primary md:visible"
            animate={{
              x:
                activeTab === "Sumário"
                  ? 0
                  : activeTab === "Perfil"
                  ? 300
                  : 600,
            }}
            initial={{ x: isOwnProfile ? "22.5%" : "165%" }}
          ></motion.div>
          <button
            onClick={() => setActiveTab("Sumário")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Sumário"
                ? "font-bold text-primary"
                : "font-normal text-white"
            }`}
          >
            Sumário
          </button>
          <button
            onClick={() => setActiveTab("Perfil")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Perfil"
                ? "font-bold text-primary"
                : "font-normal text-white"
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab("Definições")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Definições"
                ? "font-bold text-primary"
                : "font-normal text-white"
            }`}
          >
            Definições
          </button>
        </div>
      </div>

      <div className="mx-auto w-5/6 max-w-4xl">
        {activeTab === "Sumário" && <StatsSection student={student} />}
        {activeTab === "Perfil" && (
          <ProfileSection student={student} interests={interests} />
        )}
        {activeTab === "Definições" && (
          <SettingsSection student={student} interests={interests} />
        )}
      </div>
    </div>
  );
};

export default ProfileSectionContainer;
