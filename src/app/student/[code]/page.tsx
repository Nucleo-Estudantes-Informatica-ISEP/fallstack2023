import BioSection from "@/components/BioSection";
import InterestsSection from "@/components/InterestsSection";
import UserImage from "@/components/UserImage";
import YearSection from "@/components/YearSection";
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

  const interests = await prisma.studentInterest.findMany({
    where: {
      studentId: student.id,
    },
    select: {
      interest: true,
    },
  });

  const sanitizedInterests = interests.map(
    (interest) => interest.interest.name
  );

  return (
    <section className="w-full flex flex-col items-center">
      <p className="md:text-2xl text-xl font-bold uppercase text-center py-4">
        O teu <span className="text-primary">perfil</span>
      </p>
      <UserImage />

      <p className="text-xl font-semibold text-center px-4">
        <span className="font-bold text-primary">{student.name}</span>
      </p>
      <YearSection />
      <BioSection code={params.code} bio={student?.bio} />
      <InterestsSection code={params.code} interests={sanitizedInterests} />
    </section>
  );
};

export default profile;
