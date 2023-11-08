import { getStudentInterests } from "@/lib/fetchInterests";
import { getStats } from "@/lib/fetchStats";
import { getStudent } from "@/lib/fetchStudent";
import getServerSession from "@/services/getServerSession";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import Custom404 from "@/app/not-found";

interface ProfileProps {
  params: {
    code: string;
  };
}

const profile: React.FC<ProfileProps> = async ({ params }) => {
  const session = await getServerSession();

  const student = await getStudent(params.code);

  if (!student) {
    return Custom404();
  }

  const interests = await getStudentInterests(student);

  const sanitizedInterests = interests.map(
    (interest) => interest.interest.name
  );

  const stats = await getStats(student.code);

  return (
    <section className="flex w-full flex-col items-center">
      <ProfileSectionContainer
        interests={sanitizedInterests}
        student={student}
        stats={stats}
        isOwnProfile={
          !!session && !!session.student && session.student.code === params.code
        }
      />
    </section>
  );
};

export default profile;
