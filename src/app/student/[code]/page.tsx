import { getStudentInterests } from "@/lib/fetchInterests";
import { getStats } from "@/lib/fetchStats";
import { getStudent } from "@/lib/fetchStudent";
import getServerSession from "@/services/getServerSession";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import PublicProfileSectionContainer from "@/components/Profile/PublicProfileSectionContainer";
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
      {!session || session.student?.code !== params.code ? (
        <PublicProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
        />
      ) : (
        <ProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
          stats={stats}
        />
      )}
    </section>
  );
};

export default profile;
