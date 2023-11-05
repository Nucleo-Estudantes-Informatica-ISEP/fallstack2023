"use client";

import { Student } from "@prisma/client";
import { useState } from "react";
import ProfileSection from "../ProfileSection";
import StatsSection from "../StatsSection";

interface ProfileSectionContainerProps {
  student: Student;
  interests?: string[] | null;
}

const ProfileSectionContainer: React.FC<ProfileSectionContainerProps> = ({
  student,
  interests,
}) => {
  const [activeTab, setActiveTab] = useState("Sumário");

  const TabContent = () => {
    switch (activeTab) {
      case "Sumário":
        return <StatsSection student={student} hidden={true} />;
      case "Perfil":
        return (
          <ProfileSection
            interests={interests}
            student={student}
            hidden={true}
          />
        );
      case "Definições":
        return <ProfileSection student={student} hidden={false} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full max-w-3xl items-center justify-center my-12">
      <div className="flex border-b border-gray-200 space-x-64 justify-around">
        <button
          onClick={() => setActiveTab("Sumário")}
          className={`px-4 py-2 hover:bg-primary ${
            activeTab === "Sumário" ? "border-b-4 border-primary" : ""
          }`}
        >
          Sumário
        </button>
        <button
          onClick={() => setActiveTab("Perfil")}
          className={`px-4 py-2 hover:bg-primary ${
            activeTab === "Perfil" ? "border-b-4 border-primary" : ""
          }`}
        >
          Perfil
        </button>
        <button
          onClick={() => setActiveTab("Definições")}
          className={`px-4 py-2 hover:bg-primary ${
            activeTab === "Definições" ? "border-b-4 border-primary" : ""
          }`}
        >
          Definições
        </button>
      </div>
      <div className="mt-4">
        <TabContent />
      </div>
    </div>
  );
};

export default ProfileSectionContainer;
