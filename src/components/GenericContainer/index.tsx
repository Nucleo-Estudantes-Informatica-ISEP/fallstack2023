import { FunctionComponent } from "react";

interface GenericContainerProps {
  children: React.ReactNode;
  width?: string;
}

const GenericContainer: FunctionComponent<GenericContainerProps> = ({
  children,
  width = "w-3/4",
}) => {
  return <div className={`lg:${width} mx-auto my-0 w-full`}>{children}</div>;
};

export default GenericContainer;
