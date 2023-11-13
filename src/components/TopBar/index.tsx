"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import ThemeChanger from "../Theme/ThemeChanger";

const TopBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(() => scrollYProgress.get() * 1.2);

  return (
    <nav className="fixed z-20 h-16 w-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-16 w-screen bg-secondary"
        style={{
          opacity,
        }}
      />
      <div className="absolute right-4 top-2 z-10 flex h-12 justify-end space-x-5 p-5">
        <ThemeChanger />
      </div>
    </nav>
  );
};

export default TopBar;
