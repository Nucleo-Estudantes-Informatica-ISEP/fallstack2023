"use client";

import { BiLogOut } from "react-icons/bi";

import useSession from "@/hooks/useSession";

const LogoutButton: React.FC = () => {
  const session = useSession();

  return (
    <button
      onClick={session.clear}
      className="flex h-full w-full items-center justify-center fill-black text-xl transition-colors hover:text-primary dark:fill-white"
    >
      <BiLogOut />
    </button>
  );
};

export default LogoutButton;
