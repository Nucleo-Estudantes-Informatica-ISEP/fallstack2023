import { FunctionComponent } from "react";

interface HeroContainerProps {
  backgroundSrc?: string;
  children: React.ReactNode;
}

const HeroContainer: FunctionComponent<HeroContainerProps> = ({ children }) => {
  return (
    <section className="aspect-auto min-h-screen w-full overflow-x-hidden font-sans">
      {children}
    </section>
  );
};

export default HeroContainer;
