import prisma from "@/lib/prisma";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";

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
    include: {
      user: true,
    },
  });

  if (!student) {
    return (
      <section className="flex w-full flex-col items-center">
        <p className="py-4 text-center text-xl font-bold uppercase md:text-2xl">
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
    <section className="flex w-full flex-col items-center">
      <ProfileSectionContainer
        interests={sanitizedInterests}
        student={student}
      />
    </section>
  );
};

export default profile;
