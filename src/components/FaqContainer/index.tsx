import React, { useId } from 'react';
import Faq, { FaqProps } from '../Faq';

interface FaqContainerProps {
    faqs: FaqProps[];
}
const FaqContainer: React.FC<FaqContainerProps> = ({ faqs }) => {
    return (
        <div className="mx-auto grid gap-4 grid-flow-row-dense justify-around md:w-[80%] grid-rows-4">
            {faqs.map(({ question , answer }) => {
                const id = useId();
                return <Faq key={id} question = {question} answer = {answer} />;
            })}
        </div>
    );
};

export default FaqContainer;