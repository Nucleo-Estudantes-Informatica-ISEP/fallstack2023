import UserImage from "@/components/UserImage";
import { Student, User } from "@prisma/client";
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
  return (
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="flex justify-center my-8 w-full">
        <UserImage editable={true} />
      </div>

      <div className="mx-12 gap-y-4 flex flex-col mb-12">
        <div className="grid grid-cols-[3fr,1fr] gap-x-8">
          <Input name="Nome" value={student.name} type="text" />
          <Input
            name="Ano"
            value={`${student.year}º Ano Licenciatura`}
            type="text"
          />
        </div>

        <Input name="Email" value={student.user.email} type="text" />

        <Input
          name="Bio"
          value={student.bio}
          type="textarea"
          rows={5}
          placeholder="Escreve algo sobre ti..."
        />

        <label className="text-lg text-slate-700">Interesses</label>
        <InterestSelector userInterests={interests} />
      </div>
    </section>
  );
};

export default SettingsSection;
