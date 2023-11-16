import { getCompany } from "@/lib/fetchCompany";
import getServerSession from "@/services/getServerSession";
import Custom404 from "@/app/not-found";

interface ProfileProps {
  params: {
    name: string;
  };
}

const profile: React.FC<ProfileProps> = async ({ params }) => {
  const session = await getServerSession();

  if (!session) {
    return Custom404();
  }

  const company = await getCompany(session?.id);

  if (!company) {
    return Custom404();
  }

  return (
    <section className="flex h-full min-h-screen w-full flex-col items-center"></section>
  );
};

export default profile;
