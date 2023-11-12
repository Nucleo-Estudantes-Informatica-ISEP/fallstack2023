"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useSession from "@/hooks/useSession";
import { BASE_URL } from "@/services/api";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const LoginPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  if (session.user) router.push("/");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleClick = async () => {
    console.log(emailRef);

    if (!emailRef.current || !passwordRef.current) return;

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await fetch(BASE_URL + "/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      session.fetchSession();
      router.push("/");
    } catch (e) {
      console.error(e);
    }
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
        className="mb-4"
        inputRef={emailRef}
      />
      <Input
        name="Password"
        placeholder="Insere a tua password"
        className="mb-5"
        type="password"
        inputRef={passwordRef}
      />
      <PrimaryButton onClick={handleClick} className="mb-5 font-bold">
        LOGIN
      </PrimaryButton>

      <hr className="mb-4 border-secondary" />

      <Link href="/signup" className="text-sm text-secondary">
        Ainda não tens uma conta?
      </Link>
    </section>
  );
};

export default LoginPage;
