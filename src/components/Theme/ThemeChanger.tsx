"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  // This to prevent the theme change from being rendered on the server
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Show default icons while loading from the server.
    return (
      <div className="flex h-5 w-5 items-center justify-center rounded-full text-primary dark:text-primary ">
        <BsMoonStarsFill className="dark:hidden" size={20} />
        <BsFillSunFill className="hidden dark:block" size={20} />
      </div>
    );
  }

  return (
    <button className="flex h-6 w-6 items-center justify-center p-0.5 text-primary transition-colors hover:text-primary dark:text-primary dark:hover:text-white">
      {theme === "light" ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={20} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={20} />
      )}
    </button>
  );
}
