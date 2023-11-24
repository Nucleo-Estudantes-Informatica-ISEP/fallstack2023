import { getCompanies } from "@/lib/companies";
import { getStats, getTodayStats } from "@/lib/fetchStats";
import { getStudent } from "@/lib/fetchStudent";
import { isSaved } from "@/lib/savedStudents";
import getServerSession from "@/services/getServerSession";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import PublicProfileSectionContainer from "@/components/Profile/PublicProfileSectionContainer";
import Custom404 from "@/app/not-found";

interface ProfileProps {
  params: {
    code: string;
  };
}

const StudentPage: React.FC<ProfileProps> = async ({ params }) => {
  const session = await getServerSession();
  console.log(session);

  if (!session) return Custom404();

  const { code } = params;

  console.log(code);

  const student = await getStudent(code);
  if (!student) return Custom404();

  console.log(session.student?.code);

  console.log(session.student && session.student?.code.match(code));
  console.log(!(await isSaved(session.id, code)));

  if (session.student && !session.student.code.match(code)) return Custom404();

  const sanitizedInterests = student.interests.map((interest) => interest.name);

  const globalStats = await getStats(student.code);
  const todayStats = await getTodayStats(student.id);

  const companies = await getCompanies();

  const totalCompanies = companies.length;

  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center">
      {!session || session.student?.code !== params.code ? (
        <PublicProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
        />
      ) : (
        <ProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
          globalStats={globalStats}
          todayStats={todayStats}
          totalCompanies={totalCompanies}
        />
      )}
    </section>
  );
};

export default StudentPage;
