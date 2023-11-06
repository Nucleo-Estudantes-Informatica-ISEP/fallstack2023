"use client";

import UserImage from "@/components/UserImage";
import { Student, User } from "@prisma/client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProfileSection from "../ProfileSection";
import SettingsSection from "../SettingsSection";
import StatsSection from "../StatsSection";

interface ProfileSectionContainerProps {
  student: Student & { user: User };
  interests: string[];
}

const ProfileSectionContainer: React.FC<
  ProfileSectionContainerProps
> = ({ student, interests }) => {
  const [activeTab, setActiveTab] = useState<
    "Sumário" | "Perfil" | "Definições"
  >("Sumário");

  return (
    <div className="w-full items-center justify-center mb-12">
      <div
        className={`w-full flex items-center flex-col ${
          activeTab === "Definições" ? "pt-12" : ""
        } mb-12 bg-secondary h-full`}
      >
        <motion.div
          animate={{
            height: activeTab !== "Definições" ? "auto" : 0,
            visibility:
              activeTab !== "Definições" ? "visible" : "hidden",
            marginTop: activeTab !== "Definições" ? "3rem" : 0,
            opacity: activeTab !== "Definições" ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <UserImage />
          <p className="text-xl font-semibold text-center px-4">
            <span className="font-bold">{student.name}</span>
          </p>
          <p className="text-center px-4">
            O teu perfil já foi gravado{" "}
            <span className="text-primary font-bold">{0} vezes</span>{" "}
            hoje.
          </p>
        </motion.div>

        <div className="flex mt-8 justify-around max-w-4xl w-5/6">
          <button
            onClick={() => setActiveTab("Sumário")}
            className={`px-4 py-2 rounded-md hover:bg-slate-200/30 w-52 ${
              activeTab === "Sumário"
                ? "border-b-4 border-primary"
                : ""
            }`}
          >
            Sumário
          </button>
          <button
            onClick={() => setActiveTab("Perfil")}
            className={`px-4 py-2 rounded-md hover:bg-slate-200/30 w-52 ${
              activeTab === "Perfil"
                ? "border-b-4 border-primary"
                : ""
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab("Definições")}
            className={`px-4 py-2 rounded-md hover:bg-slate-200/30 w-52 ${
              activeTab === "Definições"
                ? "border-b-4 border-primary"
                : ""
            }`}
          >
            Definições
          </button>
        </div>
      </div>

      <div className="w-5/6 mx-auto max-w-4xl">
        {activeTab === "Sumário" && (
          <StatsSection student={student} />
        )}
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
