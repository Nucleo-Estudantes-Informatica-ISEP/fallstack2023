"use client";

import { useState } from "react";
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
  const [userGithub, setUserGithub] = useState<string | null>(student.github);
  const [userLinkedin, setUserLinkedin] = useState<string | null>(
    student.linkedin
  );

  const handleSave = async () => {
    if (userBio && userBio?.length > 255) {
      swal("A tua bio não pode ter mais de 255 caracteres!");
      return;
    }

    // check if linkedin follows the format https://www.linkedin.com/in/example/
    if (
      userLinkedin &&
      !userLinkedin?.match(
        /^(https:\/\/www\.linkedin\.com\/in\/)([a-zA-Z0-9_-]+\/?)+$/
      )
    ) {
      swal("O teu Linkedin não segue o formato correto!");
      return;
    }

    // check if github follows the format https://github/example
    if (
      userGithub &&
      !userGithub?.match(/^(https:\/\/github\.com\/)([a-zA-Z0-9_-]+\/?)+$/)
    ) {
      swal("O teu Github não segue o formato correto!");
      return;
    }

    const res = await fetch(`${BASE_URL}/students/${student.code}`, {
      method: "PATCH",
      body: JSON.stringify({
        bio: userBio,
        github: userGithub,
        linkedin: userLinkedin,
      }),
    });

    if (res.status === 200) swal("Perfil atualizado com sucesso!");
    else swal("Ocorreu um erro ao atualizar o teu perfil...");
  };

  return (
    <section className="flex w-full flex-col rounded-md bg-white">
      <div className="mx-4 flex flex-col items-center gap-y-4 md:mx-12 md:flex-row">
        <div className="my-8 flex-1 justify-center p-3">
          <UserImage editable={true} />
        </div>

        <div className="w-full grid-cols-1 gap-y-4 md:mx-12">
          <Input name="Nome" value={student.name} type="text" disabled={true} />
          <Input
            name="Ano"
            value={`${student.year}º Ano Licenciatura`}
            type="text"
            disabled={true}
          />
          <Input
            name="Email"
            value={student.user.email}
            type="text"
            disabled={true}
          />
        </div>
      </div>

      <div className="mx-4 mb-12 flex flex-col gap-y-4 md:mx-12">
        <Input
          name="Linkedin"
          value={userLinkedin}
          type="text"
          placeholder="https://www.linkedin.com/in/example/"
          setValue={setUserLinkedin}
        />
        <Input
          name="Github"
          value={userGithub}
          type="text"
          placeholder="https://github.com/example"
          setValue={setUserGithub}
        />

        <Input
          name="Bio"
          value={userBio}
          type="textarea"
          rows={5}
          placeholder="Escreve algo sobre ti..."
          setValue={setUserBio}
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
