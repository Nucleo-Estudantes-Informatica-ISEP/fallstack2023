"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import useSession from "@/hooks/useSession";
import Input from "@/components/Input";
import PrimaryButton from "@/components/PrimaryButton";

const LoginPage: React.FC = () => {
  const session = useSession();
  const router = useRouter();

  if (session.user) router.push("/");

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
      <Input name="Email" placeholder="Insere o teu email" className="mb-4" />
      <Input
        name="Password"
        placeholder="Insere a tua password"
        className="mb-5"
      />
      <PrimaryButton className="mb-5 font-bold">LOGIN</PrimaryButton>

      <hr className="mb-4 border-secondary" />

      <Link href="/signup" className="text-sm text-secondary">
        Ainda não tens uma conta?
      </Link>
    </section>
  );
};

export default LoginPage;
