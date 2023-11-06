"use client";

import UserImage from "@/components/UserImage";
import { Student, User } from "@prisma/client";
import Input from "../Input";
import InterestSelector from "../InterestSelector";
import { useRef, useState } from "react";

interface SettingsSectionProps {
  student: Student & { user: User };
  interests: string[];
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  interests,
  student,
}) => {
  const [userInterests, setUserInterests] = useState<string[]>(interests);
  const bioRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="flex justify-center my-8 w-full">
        <UserImage editable={true} />
      </div>

      <div className="mx-12 gap-y-4 flex flex-col mb-12">
        <div className="grid grid-cols-[3fr,1fr] gap-x-8">
          <Input name="Nome" value={student.name} type="text" disabled={true} />
          <Input
            name="Ano"
            value={`${student.year}º Ano Licenciatura`}
            type="text"
            disabled={true}
          />
        </div>

        <Input
          name="Email"
          value={student.user.email}
          type="text"
          disabled={true}
        />

        <Input
          name="Bio"
          value={student.bio}
          type="textarea"
          rows={5}
          ref={bioRef}
          placeholder="Escreve algo sobre ti..."
        />

        <label className="text-lg text-slate-700">Interesses</label>
        <InterestSelector
          userInterests={userInterests}
          setUserInterests={setUserInterests}
        />

        <button className="bg-primary rounded-lg py-1.5 mt-4 hover:brightness-95 duration-100">
          Salvar
        </button>
      </div>
    </section>
  );
};

export default SettingsSection;
