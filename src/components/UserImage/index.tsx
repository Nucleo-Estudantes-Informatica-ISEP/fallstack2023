"use client";

import { ChangeEvent } from "react";
import Image from "next/image";
import { AnimationProps, motion } from "framer-motion";
import swal from "sweetalert";

import { BASE_URL } from "@/services/api";

interface UserImageProps {
  image?: string;
  hidden?: boolean;
  editable?: boolean;
  code?: string;
}

const UserImage: React.FC<UserImageProps> = ({
  image,
  hidden,
  editable,
  code,
}) => {
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

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploadPost = await fetch(`${BASE_URL}/upload/`, {
      method: "POST",
      body: JSON.stringify({
        target: "profile",
        contentType: "image/png",
      }),
    });

    if (!uploadPost.ok) swal("Erro ao fazer upload da imagem!");

    const { url, headers } = await uploadPost.json();

    console.log(url, headers);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);

    const uploadPut = await fetch(url + headers, {
      method: "PUT",
      body: formData,
    });

    if (!uploadPut.ok) swal("Erro ao fazer upload da imagem!");

    const { id } = await uploadPut.json();

    const res = await fetch(`${BASE_URL}/students/${code}/avatar/${id}`, {
      method: "POST",
      body: JSON.stringify({
        uploadId: id,
      }),
    });

    if (!res.ok) swal("Erro ao fazer upload da imagem!");
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
          className="bg-primary/50 absolute left-0 top-0 h-full w-full rounded-full"
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
