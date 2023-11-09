import { Student, User } from "@prisma/client";

import BioSection from "../BioSection";
import CvSection from "../CvSection";
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
    <section className="flex w-full flex-col rounded-t-3xl bg-white py-4 md:rounded-md">
      <div className="mx-4 mb-12 flex flex-col gap-y-4 md:mx-12 md:flex-row">
        <div className="my-4 flex flex-col md:mb-0 md:w-1/2">
          <h2 className="text-center text-xl font-semibold text-gray-600 md:text-left">
            Nome
          </h2>
          <p className="text-center text-2xl font-bold text-black md:text-left md:text-3xl">
            {student.name}
          </p>
        </div>
        <div className="mt-4 flex flex-col md:w-1/2">
          <h2 className="text-center text-xl font-semibold text-gray-600 md:text-left">
            Ano
          </h2>
          <p className="text-center text-2xl font-bold text-black md:text-left md:text-3xl">
            {student.year}
          </p>
        </div>
      </div>
      {student.bio && <BioSection bio={student.bio} />}
      {student.cv && <CvSection student={student} text={"Abrir o meu CV"} />}
      {interests.length > 0 && <InterestsSection userInterests={interests} />}
    </section>
  );
};

export default ProfileSection;
