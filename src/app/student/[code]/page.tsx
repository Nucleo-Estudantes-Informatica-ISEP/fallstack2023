import BioSection from "@/components/BioSection";
import UserImage from "@/components/UserImage";
import { formatDateDDStrMonthYYYY } from "@/utils/date";

interface ProfileProps {
  params: {
    code: string;
  };
}

const profile: React.FC<ProfileProps> = ({ params }) => {
  // TODO: get student data from code
  // TODO: get session from user

  return (
    <section className="w-full flex flex-col items-center">
      <p className="md:text-2xl text-xl font-bold uppercase text-center py-4">
        O teu <span className="text-primary">perfil</span>
      </p>
      <UserImage />

      <p className="text-xl font-semibold text-center px-4">
        Boas vindas,{" "}
        <span className="font-bold text-primary">{"John Doe"}</span>!
      </p>
      <p className="pt-2 pb-5 text-center">
        Hoje é dia {formatDateDDStrMonthYYYY(new Date().getTime())}.
      </p>
      <BioSection />
    </section>
  );
};

export default profile;
