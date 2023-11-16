import Link from "next/link";
import { LiaUser } from "react-icons/lia";

import { UserWithProfile } from "@/types/UserWithProfile";

interface UserButtonProps {
  user: UserWithProfile;
}

const UserButton: React.FC<UserButtonProps> = ({ user }) => {
  const profileUrl =
    user.role === "COMPANY" && !!user.company
      ? "/company/" + user.company.id
      : !!user.student
      ? "/student/" + user.student.code
      : "";

  return (
    <Link
      href={profileUrl}
      className="z-20 flex h-full w-full items-center justify-center fill-black text-2xl transition-colors hover:text-primary dark:fill-white"
    >
      <LiaUser />
    </Link>
  );
};

export default UserButton;
