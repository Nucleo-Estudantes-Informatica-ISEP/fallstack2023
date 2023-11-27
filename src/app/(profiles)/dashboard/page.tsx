import { HttpError } from "@/types/HttpError";
import { getCompanyStats } from "@/lib/fetchStats";
import getCompanyHistory from "@/lib/getCompanyHistory";
import { getStudents } from "@/lib/students";
import getServerSession from "@/services/getServerSession";
import CompanyProfileSectionContainer from "@/components/CompanyProfile/CompanyProfileSectionContainer";
import Custom404 from "@/app/not-found";

const Dashboard: React.FC = async () => {
  const session = await getServerSession();

  if (!session || !session.company) {
    return Custom404();
  }

  const globalStats = await getCompanyStats(session.company.id);
  const students = await getStudents();

  const totalStudents = students.length;

  const history = await getCompanyHistory();

  return (
    <section
      className={`flex h-full min-h-screen w-full flex-col items-center bg-company`}
    >
      <CompanyProfileSectionContainer
        company={session.company}
        globalStats={globalStats}
        totalStudents={totalStudents}
        history={history instanceof HttpError ? [] : history}
      />
    </section>
  );
};

export default Dashboard;
