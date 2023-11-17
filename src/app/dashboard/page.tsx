import getServerSession from "@/services/getServerSession";
import CompanyProfileSectionContainer from "@/components/CompanyProfile/CompanyProfileSectionContainer";

import Custom404 from "../not-found";

const Dashboard: React.FC = async () => {
  const session = await getServerSession();

  if (!session || !session.company) {
    return Custom404();
  }

  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center">
      <CompanyProfileSectionContainer
        company={session.company}
        globalStats={[]}
        totalStudents={0}
      />
    </section>
  );
};

export default Dashboard;
