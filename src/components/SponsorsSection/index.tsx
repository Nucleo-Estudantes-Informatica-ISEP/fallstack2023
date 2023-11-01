import { FunctionComponent } from 'react';
import { Sponsors } from '../../utils/Sponsors';
import HeadingText from '../HeadingText';
import SponsorsContainer from '../SponsorsContainer';

const CompaniesSection: FunctionComponent = () => {
    return (
        <section className="w-full pb-8">
            <HeadingText text="Patrocinadores" />
            <SponsorsContainer sponsors={Sponsors} />
        </section>
    );
};

export default CompaniesSection;
