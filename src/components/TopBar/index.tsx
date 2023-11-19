"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoIosLogIn } from "react-icons/io";

import useSession from "@/hooks/useSession";
import LogoutButton from "@/components/LogoutButton";
import UserButton from "@/components/UserButton";

import ThemeChanger from "../Theme/ThemeChanger";

import { useTheme } from "next-themes";

const TopBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const session = useSession();

  const opacity = useTransform(() => scrollYProgress.get() * 1.5);

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // If we don't wait for the theme to be loaded, the image will be broken -> always being false until the theme is changed
  useEffect(() => {
    setMounted(true);
  }, []);

  const logos = {
    light: "/assets/images/logo_white.png",
    dark: "/assets/images/logo_dark.png",
  };

  return (
    <nav className={`fixed z-20 h-16 w-full overflow-hidden font-poppins`}>
      <motion.div
        className={`absolute left-0 top-0 flex h-16 w-screen items-center justify-between bg-secondary`}
        style={{
          opacity,
        }}
      />
      <div className="absolute right-4 top-2 flex h-12 w-full items-center justify-between space-x-4 px-4 py-2">
        <Link href="/" className="ml-6">
          <Image
            src={mounted && theme === "light" ? logos.dark : logos.light}
            alt="FallStack"
            width={32}
            height={32}
          />
        </Link>
        <div className="flex items-center gap-x-4">
          <ThemeChanger />
          {!session.user ? (
            <Link
              href="/login"
              className="z-20 flex h-full w-full items-center justify-center fill-black text-2xl transition-colors hover:text-primary dark:fill-white"
            >
              <IoIosLogIn />
            </Link>
          ) : (
            <>
              <UserButton user={session.user} />
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
