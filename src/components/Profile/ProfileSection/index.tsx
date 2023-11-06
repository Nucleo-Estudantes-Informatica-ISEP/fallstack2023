import { Student, User } from "@prisma/client";
import BioSection from "../BioSection";
import InterestsSection from "../InterestsSection";

interface ProfileSectionProps {
  student: Student & { user: User };
  interests: string[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  interests,
  student,
}) => {
  return (
    <section className="w-full flex flex-col bg-white rounded-md">
      <div className="mx-4 md:mx-12 gap-y-4 flex flex-col md:flex-row mb-12">
        <div className="flex flex-col mb-4 md:mb-0 md:w-1/2 mt-4">
          <h2 className="text-xl font-semibold text-center md:text-left text-gray-600">
            Nome
          </h2>
          <p className="text-3xl font-bold text-center md:text-left text-black">
            {student.name}
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 mt-4">
          <h2 className="text-xl font-semibold text-center md:text-left text-gray-600">
            Ano
          </h2>
          <p className="text-3xl font-bold text-center md:text-left text-black">
            {student.year}º Ano Licenciatura
          </p>
        </div>
      </div>
      <BioSection bio={student.bio} />
      <InterestsSection userInterests={interests} />
    </section>
  );
};

export default ProfileSection;
