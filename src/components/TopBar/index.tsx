"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import useSession from "@/hooks/useSession";
import LogoutButton from "@/components/LogoutButton";
import UserButton from "@/components/UserButton";

import ThemeChanger from "../Theme/ThemeChanger";

const TopBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const session = useSession();

  const opacity = useTransform(() => scrollYProgress.get() * 1.5);

  return (
    <nav className="fixed z-20 h-16 w-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-16 w-screen bg-secondary"
        style={{
          opacity,
        }}
      />
      <div className="absolute right-4 top-2 flex h-12 justify-end space-x-3 p-5">
        <ThemeChanger />
        {!!session.user && (
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
