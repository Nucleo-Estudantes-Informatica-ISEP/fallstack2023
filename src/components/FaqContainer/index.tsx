import React, { useId } from 'react';
import Faq, { FaqProps } from '../Faq';

interface FaqContainerProps {
    faqs: FaqProps[];
}
const FaqContainer: React.FC<FaqContainerProps> = ({ faqs }) => {
    return (
        <div className="mx-auto grid grid-flow-col gap-4 justify-around md:w-[80%] grid-rows-4">
            {faqs.map(({ question , answer }) => {
                const id = useId();
                return <Faq key={id} question = {question} answer = {answer} />;
            })}
        </div>
    );
};

export default FaqContainer;