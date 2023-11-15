"use client";

import { useState } from "react";
import { Student, User } from "@prisma/client";
import { motion } from "framer-motion";

import { ProfileData } from "@/types/ProfileData";
import UserImage from "@/components/UserImage";
import { Github, Linkedin } from "@/styles/Icons";

import ProfileSection from "../ProfileSection";
import SettingsSection from "../SettingsSection";
import StatsSection from "../StatsSection";

interface ProfileSectionContainerProps {
  student: Student & { user: User };
  interests: string[];
  globalStats: number[];
  todayStats: number;
  totalCompanies: number;
}

const ProfileSectionContainer: React.FC<ProfileSectionContainerProps> = ({
  student,
  interests,
  globalStats,
  todayStats,
  totalCompanies,
}) => {
  const [activeTab, setActiveTab] = useState<
    "Sumário" | "Perfil" | "Definições"
  >("Sumário");

  const [profile, setProfile] = useState<ProfileData>({
    interests,
    bio: student.bio,
    linkedin: student.linkedin,
    github: student.github,
    cv: student.cv,
  });

  return (
    <div className="h-full w-full items-center justify-center md:mb-12">
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
          <UserImage student={student} />

          <p className="px-4 text-center text-xl font-semibold">
            <span className="font-bold">{student.name}</span>
          </p>
          <p className="p-2 text-center">
            O teu perfil já foi gravado{" "}
            <span className="font-bold text-primary">{todayStats} vezes</span>{" "}
            hoje.
          </p>
          <p className="flex gap-x-4 pt-6">
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-10 w-10 md:h-8 md:w-8" />
              </a>
            )}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-10 w-10 md:h-8 md:w-8" />
              </a>
            )}
          </p>
        </motion.div>

        <div className="relative mt-8 flex w-full max-w-4xl flex-row justify-between text-center md:w-5/6 md:flex-row">
          <motion.div
            className="absolute bottom-0 left-0 hidden w-52 border-b-4 border-primary md:visible"
            animate={{
              x:
                activeTab === "Sumário"
                  ? 0
                  : activeTab === "Perfil"
                  ? 300
                  : 600,
            }}
            initial={"165%"}
          ></motion.div>
          <button
            onClick={() => setActiveTab("Sumário")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Sumário" ? "font-bold text-primary" : "font-normal"
            }`}
          >
            Sumário
          </button>
          <button
            onClick={() => setActiveTab("Perfil")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Perfil" ? "font-bold text-primary" : "font-normal"
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab("Definições")}
            className={`w-52 rounded-md px-4 py-2 md:hover:bg-slate-200/30 ${
              activeTab === "Definições"
                ? "font-bold text-primary"
                : "font-normal"
            }`}
          >
            Definições
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-4xl md:w-5/6">
        {activeTab === "Sumário" && (
          <StatsSection
            student={student}
            stats={globalStats}
            companies={totalCompanies}
          />
        )}
        {activeTab === "Perfil" && (
          <ProfileSection
            student={student}
            interests={interests}
            profile={profile}
          />
        )}
        {activeTab === "Definições" && (
          <SettingsSection
            student={student}
            interests={interests}
            profile={profile}
            setProfile={setProfile}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileSectionContainer;
