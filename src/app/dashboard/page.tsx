import { getCompanyStats } from "@/lib/fetchStats";
import { getStudents } from "@/lib/students";
import getServerSession from "@/services/getServerSession";
import CompanyProfileSectionContainer from "@/components/CompanyProfile/CompanyProfileSectionContainer";

import Custom404 from "../not-found";

const Dashboard: React.FC = async () => {
  const session = await getServerSession();

  if (!session || !session.company) {
    return Custom404();
  }

  const globalStats = await getCompanyStats(session.company.id);
  const students = await getStudents();

  const totalStudents = students.length;

  return (
    <section
      className={`bg-company flex h-full min-h-screen w-full flex-col items-center`}
    >
      <CompanyProfileSectionContainer
        company={session.company}
        globalStats={globalStats}
        totalStudents={totalStudents}
      />
    </section>
  );
};

export default Dashboard;
