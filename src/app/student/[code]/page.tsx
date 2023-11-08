import prisma from "@/lib/prisma";
import getServerSession from "@/services/getServerSession";
import ProfileSectionContainer from "@/components/Profile/ProfileSectionContainer";
import PublicProfileSectionContainer from "@/components/Profile/PublicProfileSectionContainer";

interface ProfileProps {
  params: {
    code: string;
  };
}

const profile: React.FC<ProfileProps> = async ({ params }) => {
  const session = await getServerSession();

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
      {!session || session.student?.code !== params.code ? (
        <PublicProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
        />
      ) : (
        <ProfileSectionContainer
          interests={sanitizedInterests}
          student={student}
        />
      )}
    </section>
  );
};

export default profile;
