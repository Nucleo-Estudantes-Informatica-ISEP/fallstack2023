import { FunctionComponent } from "react";

interface EventDescriptionProps {
  children?: React.ReactNode;
}

const EventDescription: FunctionComponent<EventDescriptionProps> = ({
  children,
}) => {
  return (
    <section className="flex flex-col space-y-2 text-center leading-7 md:text-left md:text-2xl md:leading-8 lg:px-10">
      {children}
    </section>
  );
};

export default EventDescription;
