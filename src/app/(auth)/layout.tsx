import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen items-center justify-center px-6 md:p-0">
      <div className="flex max-w-4xl flex-1 flex-col items-start justify-between rounded-xl bg-white shadow-xl md:h-3/4 md:flex-row">
        <div className="relative h-60 w-full md:h-full">
          <Image
            src={"/assets/images/auth-component.jpg"}
            fill
            alt="Auth Header"
            className="object-cover max-md:rounded-t-xl md:rounded-l-xl"
          />
        </div>
        <div className="flex w-full items-start justify-center p-16 pb-40 md:py-16">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
