import { Student } from "@prisma/client";
import BioSection from "../BioSection";
import InterestsSection from "../InterestsSection";

interface ProfileSectionProps {
  student: Student;
  hidden?: boolean;
  interests?: string[] | null;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  interests,
  student,
  hidden,
}) => {
  return (
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="flex flex-col">
        <div className="flex p-8">
          <div className="flex flex-col pr-80">
            <h2 className="text-xl font-semibold text-left text-gray-600">
              Nome
            </h2>
            <p className="text-3xl font-bold text-left text-black">
              {student.name}
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-left text-gray-600">
              Ano
            </h2>
            <p className="text-3xl font-bold text-left text-black">
              {student.year}º Ano
            </p>
          </div>
        </div>
        <BioSection code={student.code} bio={student.bio} hidden={hidden} />
        <InterestsSection
          code={student.code}
          hidden={hidden}
          interests={interests}
        />
      </div>
    </section>
  );
};

export default ProfileSection;
