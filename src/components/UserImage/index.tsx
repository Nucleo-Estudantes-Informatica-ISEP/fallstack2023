"use client";

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { Student } from "@prisma/client";
import { AnimationProps, motion } from "framer-motion";
import swal from "sweetalert";

import { ProfileData } from "@/types/ProfileData";
import { getSignedUrl, setTarget, uploadToBucket } from "@/lib/upload";
import { BASE_URL } from "@/services/api";

interface UserImageProps {
  student: Student;
  hidden?: boolean;
  editable?: boolean;
  setProfile?: Dispatch<SetStateAction<ProfileData>>;
}

const UserImage: React.FC<UserImageProps> = ({ student, hidden, editable }) => {
  const [image, setImage] = useState("");

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

    const file = e.target.files[0];

    const uploadPost = await getSignedUrl("profile", file.type);

    if (!uploadPost) swal("Erro ao fazer upload da imagem!");

    const uploadPut = await uploadToBucket(uploadPost, file);
    if (!uploadPut.ok) swal("Erro ao fazer upload da imagem!");

    const res = await setTarget(student.code, uploadPost);

    if (!res) swal("Erro ao fazer upload da imagem!");
  };

  const getImage = async (student: Student) => {
    if (!student.image) return "/assets/images/default_user.png";
    const res = await fetch(
      BASE_URL + "/students/" + student.code + "/profile"
    );
    const { url } = await res.json();
    setImage(url);
  };

  useEffect(() => {
    getImage(student);
  }, [student]);

  if (!image) {
    return (
      <div className="relative my-2 flex h-24 w-24 flex-col items-center rounded-full md:h-52 md:w-52">
        <Image
          width={328}
          height={328}
          src="/assets/images/default_user.png"
          alt="profile image"
          className="h-full w-full rounded-full"
        />
      </div>
    );
  }

  if (!editable)
    return (
      <div className="relative my-2 flex h-24 w-24 flex-col items-center rounded-full md:h-52 md:w-52">
        <Image
          width={328}
          height={328}
          src={image}
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
        src={image}
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
