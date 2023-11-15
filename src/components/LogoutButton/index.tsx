"use client";

import { useRouter } from "next/navigation";
import { BiLogOut } from "react-icons/bi";

import useSession from "@/hooks/useSession";
import { BASE_URL } from "@/services/api";

const LogoutButton: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch(BASE_URL + "/auth/logout", { method: "POST" });
    if (res.status === 200) {
      session.clear();
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex h-full w-full items-center justify-center fill-black text-xl transition-colors hover:text-primary dark:fill-white"
    >
      <BiLogOut />
    </button>
  );
};

export default LogoutButton;
