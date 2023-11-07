"use client";

import { useState } from "react";
import { Student, User } from "@prisma/client";
import swal from "sweetalert";

import { BASE_URL } from "@/services/api";
import UserImage from "@/components/UserImage";

import Input from "../Input";
import InterestSelector from "../InterestSelector";
import UserBioTextArea from "../UserBioTextArea";

interface SettingsSectionProps {
  student: Student & { user: User };
  interests: string[];
}

const SettingsSection: React.FC<SettingsSectionProps> = ({
  interests,
  student,
}) => {
  const LIMIT = 255;

  const [userInterests, setUserInterests] = useState<string[]>(interests);
  const [userBio, setUserBio] = useState<string>(student.bio ?? "");

  console.log("settings user =>", student);
  console.log("user bio =>", userBio);

  function handleUserBioChange(bio: string) {
    if (bio.length > LIMIT) return;
    setUserBio(bio);
  }

  const handleSave = async () => {
    if (userBio && userBio?.length > LIMIT) {
      swal(`A tua bio não pode ter mais de ${LIMIT} caracteres!`);
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
          <Input name="Nome" defaultValue={student.name} disabled={true} />
          <Input
            name="Ano"
            defaultValue={`${student.year}º Ano Licenciatura`}
            disabled={true}
          />
        </div>

        <Input name="Email" defaultValue={student.user.email} disabled={true} />

        <UserBioTextArea
          defaultValue={userBio}
          rows={5}
          placeholder="Escreve algo sobre ti..."
          setValue={handleUserBioChange}
          value={userBio}
          limit={LIMIT}
          warningLimit={LIMIT - 30}
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
