import BioSection from "@/components/BioSection";
import UserImage from "@/components/UserImage";
import prisma from "@/lib/prisma";
import { formatDateDDStrMonthYYYY } from "@/utils/date";

interface ProfileProps {
  params: {
    code: string;
  };
}

const profile: React.FC<ProfileProps> = async ({ params }) => {
  // TODO: get session from user

  const student = await prisma.student.findUnique({
    where: {
      code: params.code,
    },
  });

  if (!student) {
    return (
      <section className="w-full flex flex-col items-center">
        <p className="md:text-2xl text-xl font-bold uppercase text-center py-4">
          Não encontramos o teu perfil...
        </p>
      </section>
    );
  }

  return (
    <section className="w-full flex flex-col items-center">
      <p className="md:text-2xl text-xl font-bold uppercase text-center py-4">
        O teu <span className="text-primary">perfil</span>
      </p>
      <UserImage />

      <p className="text-xl font-semibold text-center px-4">
        Boas vindas,{" "}
        <span className="font-bold text-primary">{student.name}</span>!
      </p>
      <p className="pt-2 pb-5 text-center">
        Hoje é dia {formatDateDDStrMonthYYYY(new Date().getTime())}.
      </p>
      <BioSection code={params.code} bio={student?.bio} />
    </section>
  );
};

export default profile;
