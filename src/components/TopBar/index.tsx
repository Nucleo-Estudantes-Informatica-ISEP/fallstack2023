import Image from "next/image";
import Link from "next/link";
import TopbarLink from "../TopBarLink";
import logo from "../../assets/images/logo.png";

const Topbar: React.FC = () => {
  return (
    <nav className="w-full bg-orange-200">
      <div className="flex space-x-5 p-5 justify-end">
        <TopbarLink href="/">Home</TopbarLink>
        <TopbarLink href="/login">Login</TopbarLink>
      </div>
    </nav>
  );
};

export default Topbar;
