"use client";

import UserImage from "@/components/UserImage";
import { BASE_URL } from "@/services/api";
import { Student, User } from "@prisma/client";
import { useRef, useState } from "react";
import swal from "sweetalert";
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
  const [userInterests, setUserInterests] =
    useState<string[]>(interests);
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
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="flex justify-center my-8 w-full">
        <UserImage editable={true} />
      </div>

      <div className="mx-4 md:mx-12 gap-y-4 flex flex-col mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
          <Input
            name="Nome"
            value={student.name}
            type="text"
            disabled={true}
          />
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
          className="bg-primary rounded-lg py-1.5 mt-4 hover:brightness-95 duration-100"
        >
          Salvar
        </button>
      </div>
    </section>
  );
};

export default SettingsSection;
