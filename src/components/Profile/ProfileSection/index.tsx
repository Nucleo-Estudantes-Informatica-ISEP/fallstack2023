import { Student, User } from "@prisma/client";

import { ProfileData } from "@/types/ProfileData";

import BioSection from "../BioSection";
import InterestsSection from "../InterestsSection";

interface ProfileSectionProps {
  student: Student & { user: User };
  interests: string[];
  profile: ProfileData;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  // interests,
  student,
  profile,
}) => {
  return (
    <section className="flex w-full flex-col rounded-md bg-white py-4">
      <div className="mx-4 mb-12 flex flex-col gap-y-4 md:mx-12 md:flex-row">
        <div className="my-4 flex flex-col md:mb-0 md:w-1/2">
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
            {student.year}
          </p>
        </div>
      </div>
      {profile.bio && (
        <div className="mb-8">
          <BioSection bio={profile.bio} />
        </div>
      )}
      {profile.interests.length > 0 && (
        <InterestsSection userInterests={profile.interests} />
      )}
    </section>
  );
};

export default ProfileSection;
