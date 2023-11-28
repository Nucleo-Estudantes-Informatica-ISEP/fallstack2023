"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import swal from "sweetalert";

import { logIn } from "@/lib/auth";
import useSession from "@/hooks/useSession";
import { BASE_URL } from "@/services/api";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const PasswordResetPage: React.FC = () => {
  const { token } = useParams();

  const session = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [pwError, setPwError] = useState<string | null>(null);
  const [repeatPwError, setRepeatPwError] = useState<string | null>(null);

  if (session.user) router.push("/");

  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    setPwError(null);
    setRepeatPwError(null);

    let error = false;

    if (!repeatPasswordRef.current?.value) {
      setRepeatPwError("Volta a inserir a tua password.");
      error = true;
    }

    if (!passwordRef.current?.value) {
      error = true;
      setPwError("Insere a tua password.");
    }

    if (error) return;

    const passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/);
    const password = passwordRef.current?.value as string;

    if (password.length < 8)
      return setPwError("A password deve conter pelo menos 8 caracteres.");
    if (!password.match(passwordRegex))
      return setPwError(
        "A password deve conter pelo menos 1 letra maiúscula, 1 letra minúscula e 1 número."
      );

    if (!password.match(repeatPasswordRef.current?.value as string))
      return setPwError("As passwords não coincidem.");

    setLoading(true);

    const res = await fetch(BASE_URL + "/auth/password-reset", {
      method: "POST",
      body: JSON.stringify({ token, password }),
    });

    if (res.status === 403) {
      setLoading(false);
      return setPwError("Token inválido.");
    }

    if (!res.ok) {
      setLoading(false);
      return setPwError((await res.json()).error);
    }

    swal(
      "Successo",
      "Password resetada com sucesso. Volta a iniciar sessão.",
      "success"
    );
    router.push("/login");
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <section className="flex w-full flex-col md:mt-12">
      <div className="mb-5 flex justify-center">
        <Image
          src={"/assets/images/logo_dark.png"}
          width={128}
          height={128}
          alt="Logo"
        />
      </div>

      <span className="mt-4"></span>

      <Input
        name="Password"
        placeholder="Insere a tua password"
        type="password"
        inputRef={passwordRef}
        autoFocus={!!pwError}
        onKeyUp={handleKeyUp}
      />

      {pwError && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{
            y: [-15, 0],
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        >
          {pwError}
        </motion.p>
      )}

      <span className="mb-4"></span>

      <Input
        name="Repete a Password"
        placeholder="Repete a tua password"
        type="password"
        inputRef={repeatPasswordRef}
        onKeyUp={handleKeyUp}
      />

      {pwError && (
        <motion.p
          className="mt-1 text-sm font-bold text-red-600"
          animate={{
            y: [-15, 0],
          }}
          transition={{
            ease: "easeOut",
            duration: 0.2,
          }}
        >
          {repeatPwError}
        </motion.p>
      )}

      <PrimaryButton
        loading={loading}
        onClick={handleClick}
        className="mb-5 mt-4 font-bold"
      >
        CONFIRMAR
      </PrimaryButton>
    </section>
  );
};

export default PasswordResetPage;
