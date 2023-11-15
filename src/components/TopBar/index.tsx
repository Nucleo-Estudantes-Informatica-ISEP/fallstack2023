"use client";

import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";

import useSession from "@/hooks/useSession";
import LogoutButton from "@/components/LogoutButton";
import UserButton from "@/components/UserButton";

import PrimaryButton from "../PrimaryButton";
import ThemeChanger from "../Theme/ThemeChanger";

const TopBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const session = useSession();
  const router = useRouter();

  const opacity = useTransform(() => scrollYProgress.get() * 1.5);

  return (
    <nav className="fixed z-20 h-16 w-full overflow-hidden font-poppins">
      <motion.div
        className="absolute left-0 top-0 h-16 w-screen bg-secondary"
        style={{
          opacity,
        }}
      />
      <div className="absolute right-4 top-2 flex h-12 justify-end space-x-4 px-5 py-2">
        <ThemeChanger />
        {!session.user ? (
          <PrimaryButton
            onClick={() => router.push("/login")}
            className="w-32 py-0 font-bold"
          >
            Inicia Sessão
          </PrimaryButton>
        ) : (
          <>
            <UserButton user={session.user} />
            <LogoutButton />
          </>
        )}
      </div>
    </nav>
  );
};

export default TopBar;
