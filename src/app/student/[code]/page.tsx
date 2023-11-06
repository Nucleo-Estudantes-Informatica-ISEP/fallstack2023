import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import prisma from "@/lib/prisma";

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
      <ProfileSectionContainer
        interests={sanitizedInterests}
        student={student}
      />
    </section>
  );
};

export default profile;
