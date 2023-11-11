"use client";

import { ChangeEvent } from "react";
import Image from "next/image";
import { AnimationProps, motion } from "framer-motion";

interface UserImageProps {
  image?: string;
  hidden?: boolean;
  editable?: boolean;
  code: string;
}

const UserImage: React.FC<UserImageProps> = ({ image, hidden, editable }) => {
  const animation: AnimationProps = {
    variants: {
      initial: { opacity: 0 },
      hover: { opacity: 1 },
    },
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    //TODO: upload image
  };

  if (!editable)
    return (
      <div className="relative my-2 flex h-24 w-24 flex-col items-center rounded-full md:h-52 md:w-52">
        <Image
          width={328}
          height={328}
          src={image ? image : `/assets/images/default_user.png`}
          alt="profile image"
          className="h-full w-full rounded-full"
        />
      </div>
    );

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative my-2 flex h-24 w-24 flex-col items-center rounded-full hover:cursor-pointer md:h-52 md:w-52"
    >
      <Image
        width={328}
        height={328}
        src={`/assets/images/${image || "default_user"}.png`}
        alt="profile image"
        className="h-full w-full rounded-full"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-full bg-black bg-opacity-0 hover:bg-opacity-30">
        <motion.div
          {...animation}
          className="absolute left-0 top-0 h-full w-full rounded-full bg-primary bg-opacity-70"
        />
        <motion.input
          onChange={handleChange}
          accept="*"
          type="file"
          className="absolute left-0 top-0 z-10 h-full w-full rounded-full opacity-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        ></motion.input>
        {!hidden && (
          <motion.div
            {...animation}
            className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-full"
          >
            <p className="text-2xl text-white">+</p>
            <p className="text-sm text-white">Adicionar</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default UserImage;
