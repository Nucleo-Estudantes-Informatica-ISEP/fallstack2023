import React from "react";

interface CompanyDescriptionProps {
  children: React.ReactNode;
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({
  children,
}) => {
  return (
    <section className="flex flex-col space-y-2  leading-8 lg:px-10 lg:text-lg">
      {children}
    </section>
  );
};

export default CompanyDescription;
