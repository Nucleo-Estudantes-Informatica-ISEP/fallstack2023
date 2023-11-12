"use client";

import { Student } from "@prisma/client";

import useSession from "@/hooks/useSession";
import AvatarStep from "@/components/SignUp/AvatarStep";
import BioStep from "@/components/SignUp/BioStep";
import CvStep from "@/components/SignUp/CvStep";
import EmailStep from "@/components/SignUp/EmailStep";
import InterestsStep from "@/components/SignUp/InterestsStep";
import NameStep from "@/components/SignUp/NameStep";

const SignUpPage: React.FC = () => {
  const session = useSession();

  return (
    <section className="relative flex w-full flex-col md:mt-12">
      {/* <NameStep /> */}
      {/* <BioStep /> */}
      {/* <InterestsStep /> */}
      {/* <CvStep /> */}
      <AvatarStep student={session.user?.student as Student} />
    </section>
  );
};

export default SignUpPage;
