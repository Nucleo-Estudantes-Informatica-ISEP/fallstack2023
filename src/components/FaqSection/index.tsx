import { FunctionComponent } from 'react';
import { FAQ } from '../../utils/FAQ';
import HeadingText from '../HeadingText';
import FaqContainer from '../FaqContainer';

const FaqSection: FunctionComponent = () => {
    return (
        <section className="w-full pb-8">
            <HeadingText text="FAQ" />
            <FaqContainer faqs={FAQ} />
        </section>
    );
};

export default FaqSection;