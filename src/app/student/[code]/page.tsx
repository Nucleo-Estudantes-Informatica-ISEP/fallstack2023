import ProfileSectionContainer from "@/components/ProfileSectionContainer";
import UserImage from "@/components/UserImage";
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

  console.log("sanitizedInterests", sanitizedInterests);

  return (
    <section className="w-full flex flex-col items-center">
      <UserImage />

      <p className="text-xl font-semibold text-center px-4">
        <span className="font-bold">{student.name}</span>
      </p>
      <p className="text-center px-4">
        O teu perfil já foi gravado{" "}
        <span className="text-primary font-bold">{0} vezes</span> hoje.
      </p>
      <ProfileSectionContainer
        interests={sanitizedInterests}
        student={student}
      />
    </section>
  );
};

export default profile;
