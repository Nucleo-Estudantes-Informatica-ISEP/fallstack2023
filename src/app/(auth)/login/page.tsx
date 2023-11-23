"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { logIn } from "@/lib/auth";
import useSession from "@/hooks/useSession";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const LoginPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [pwError, setPwError] = useState<string | null>(null);

  if (session.user) router.push("/");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    setEmailError(null);
    setPwError(null);

    let error = false;

    if (!emailRef.current?.value) {
      error = true;
      setEmailError("Insere o teu email.");
    }

    if (!passwordRef.current?.value) {
      error = true;
      setPwError("Insere a tua password.");
    }

    if (error) return;

    setLoading(true);

    const email = emailRef.current?.value as string;
    const password = passwordRef.current?.value as string;

    if (await logIn(email, password)) {
      session.fetchSession();
      router.push("/");
      return router.refresh();
    }

    setEmailError("Email ou password incorretos.");
    setPwError("Email ou password incorretos.");
    setLoading(false);
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
      <Input
        name="Email"
        placeholder="Insere o teu email"
        inputRef={emailRef}
        autoFocus={!!emailError}
        onKeyUp={handleKeyUp}
      />

      {emailError && (
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
          {emailError}
        </motion.p>
      )}

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

      <PrimaryButton
        loading={loading}
        onClick={handleClick}
        className="mb-5 mt-4 font-bold"
      >
        LOGIN
      </PrimaryButton>

      <hr className="mb-4 border-secondary" />

      <Link href="/signup" className="text-sm text-black">
        Ainda não tens uma conta?
      </Link>
    </section>
  );
};

export default LoginPage;
