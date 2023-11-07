"use client";

import { useRef, useState } from "react";
import { Student, User } from "@prisma/client";
import swal from "sweetalert";

import { BASE_URL } from "@/services/api";
import UserImage from "@/components/UserImage";

import Input from "../Input";
import InterestSelector from "../InterestSelector";

interface SettingsSectionProps {
  student: Student & { user: User };
  interests: string[];
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  interests,
  student,
}) => {
  const [userInterests, setUserInterests] = useState<string[]>(interests);
  const [userBio, setUserBio] = useState<string | null>(student.bio);
  const bioRef = useRef<HTMLTextAreaElement>(null);

  console.log("settings user =>", student);
  console.log("user bio =>", userBio);

  const handleSave = async () => {
    if (userBio && userBio?.length > 255) {
      swal("A tua bio não pode ter mais de 255 caracteres!");
      return;
    }
    const res = await fetch(`${BASE_URL}/students/${student.code}`, {
      method: "PATCH",
      body: JSON.stringify({
        bio: userBio,
      }),
    });

    if (res.status === 200) swal("Perfil atualizado com sucesso!");
    else swal("Ocorreu um erro ao atualizar o teu perfil...");
  };

  return (
    <section className="flex w-full flex-col rounded-md bg-white">
      <div className="my-8 flex w-full justify-center">
        <UserImage editable={true} />
      </div>

      <div className="mx-4 mb-12 flex flex-col gap-y-4 md:mx-12">
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-8">
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
          value={userBio}
          type="textarea"
          rows={5}
          ref={bioRef}
          placeholder="Escreve algo sobre ti..."
          setUserBio={setUserBio}
        />

        <label className="text-lg text-slate-700">Interesses</label>
        <InterestSelector
          userInterests={userInterests}
          setUserInterests={setUserInterests}
        />

        <button
          onClick={handleSave}
          className="mt-4 rounded-lg bg-primary py-1.5 duration-100 hover:brightness-95"
        >
          Salvar
        </button>
      </div>
    </section>
  );
};

export default SettingsSection;
