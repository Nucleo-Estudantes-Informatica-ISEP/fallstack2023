import { getCompanies } from "@/lib/companies";
import { getStats, getTodayStats } from "@/lib/fetchStats";
import { getStudent } from "@/lib/fetchStudent";
import getServerSession from "@/services/getServerSession";
import CompanyViewProfileSectionContainer from "@/components/CompanyProfile/CompanyViewProfileSectionContainer";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import PublicProfileSectionContainer from "@/components/Profile/PublicProfileSectionContainer";
import Custom404 from "@/app/not-found";

interface ProfileProps {
  params: {
    slug: string[];
  };
}

const StudentPage: React.FC<ProfileProps> = async ({ params }) => {
  const session = await getServerSession();

  if (!session) return Custom404();

  const { slug } = params;

  const student = await getStudent(slug[0]);
  if (!student) return Custom404();

  if (
    (session.student && !session.student.code.match(slug[0])) ||
    (session.company &&
      slug[1] !== String(session.company.id) &&
      !(await isSaved(session.id, slug[0])))
  )
    return Custom404();

  const sanitizedInterests = student.interests.map((interest) => interest.name);

  const globalStats = await getStats(student.code);
  const todayStats = await getTodayStats(student.id);

  const companies = await getCompanies();

  const totalCompanies = companies.length;

  return (
    <section
      className={`${
        session && session.role === "COMPANY" ? "bg-company" : "bg-inherit"
      } flex h-full min-h-screen w-full flex-col items-center`}
    >
      {session && session.role === "COMPANY" ? (
        <CompanyViewProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
          company={session?.company}
        />
      ) : !session || session.student?.code !== slug[0] ? (
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
