import { FunctionComponent } from 'react';

interface EventDescriptionProps {
    children?: React.ReactNode;
}

const EventDescription: FunctionComponent<EventDescriptionProps> = ({ children }) => {
    return (
        <section className="flex flex-col space-y-2  leading-8 lg:px-10 lg:text-lg">
            {children}
        </section>
    );
};

export default EventDescription;
