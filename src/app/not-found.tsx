import Link from "next/link";

export default function Custom404() {
  return (
    <section className="mt-52 flex h-full w-full items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center gap-12 md:w-full">
        <h1 className="text-xl font-semibold md:text-3xl">
          Não encontramos a página que estás à procura...
        </h1>
        <h1 className="text-7xl font-bold text-primary md:text-9xl">404</h1>

        <p>
          Dica: experimenta voltar à{" "}
          <Link href="/" className="font-semibold text-primary">
            Página inicial
          </Link>
        </p>
      </div>
    </section>
  );
}
