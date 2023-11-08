"use client";

import { useRef, useState } from "react";
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

  const githubRef = useRef<HTMLInputElement>(null);
  const linkedinRef = useRef<HTMLInputElement>(null);

  function handleUserBioChange(bio: string) {
    if (bio.length > LIMIT) return;
    setUserBio(bio);
  }

  const handleSave = async () => {
    console.log(linkedinRef.current?.value);

    if (userBio && userBio?.length > LIMIT) {
      swal(`A tua bio não pode ter mais de ${LIMIT} caracteres!`);
      return;
    }

    // check if linkedin follows the format https://www.linkedin.com/in/example/
    if (
      linkedinRef.current?.value &&
      !linkedinRef.current?.value?.match(
        /^(https:\/\/www\.linkedin\.com\/in\/)([a-zA-Z0-9_-]+\/?)+$/
      )
    ) {
      swal("O teu Linkedin não segue o formato correto!");
      return;
    }

    // check if github follows the format https://github/example
    if (
      githubRef.current?.value &&
      !githubRef.current?.value?.match(
        /^(https:\/\/github\.com\/)([a-zA-Z0-9_-]+\/?)+$/
      )
    ) {
      swal("O teu Github não segue o formato correto!");
      return;
    }

    const res = await fetch(`${BASE_URL}/students/${student.code}`, {
      method: "PATCH",
      body: JSON.stringify({
        bio: userBio,
        github: githubRef.current?.value,
        linkedin: linkedinRef.current?.value,
      }),
    });

    if (res.status === 200) swal("Perfil atualizado com sucesso!");
    else swal("Ocorreu um erro ao atualizar o teu perfil...");
  };

  return (
    <section className="flex w-full flex-col rounded-md bg-white">
      <div className="mx-4 flex flex-col items-center md:mx-12 md:flex-row">
        <div className="my-8 flex-1 justify-center p-3">
          <UserImage editable={true} />
        </div>

        <div className="flex w-full flex-col gap-y-4 md:ml-12">
          <Input name="Nome" defaultValue={student.name} disabled={true} />
          <Input name="Ano" defaultValue={student.year} disabled={true} />
          <Input
            name="Email"
            defaultValue={student.user.email}
            disabled={true}
          />
        </div>
      </div>

      <div className="mx-4 mb-12 mt-4 flex flex-col gap-y-4 md:mx-12">
        <Input
          name="Linkedin"
          defaultValue={student.linkedin}
          placeholder="https://www.linkedin.com/in/example/"
          inputRef={linkedinRef}
        />
        <Input
          name="Github"
          defaultValue={student.github}
          placeholder="https://github.com/example"
          inputRef={githubRef}
        />

        <UserBioTextArea
          name="Bio"
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
          className="mt-4 rounded-lg bg-primary py-2 duration-100 hover:brightness-95"
        >
          Salvar
        </button>
      </div>
    </section>
  );
};

export default SettingsSection;
