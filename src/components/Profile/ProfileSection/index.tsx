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
    <section className="flex w-full flex-col rounded-md bg-white">
      <div className="mx-4 mb-12 flex flex-col gap-y-4 md:mx-12 md:flex-row">
        <div className="mb-4 mt-4 flex flex-col md:mb-0 md:w-1/2">
          <h2 className="text-center text-xl font-semibold text-gray-600 md:text-left">
            Nome
          </h2>
          <p className="text-center text-3xl font-bold text-black md:text-left">
            {student.name}
          </p>
        </div>
        <div className="mt-4 flex flex-col md:w-1/2">
          <h2 className="text-center text-xl font-semibold text-gray-600 md:text-left">
            Ano
          </h2>
          <p className="text-center text-3xl font-bold text-black md:text-left">
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
