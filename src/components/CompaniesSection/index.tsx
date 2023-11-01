import { FunctionComponent } from 'react';
import { DiamondCompanies } from '../../utils/DiamondCompanies';
import { GoldCompanies } from '../../utils/GoldCompanies';
import { SilverCompanies } from '../../utils/SilverCompanies';
import CompaniesContainer from '../CompaniesContainer';

import HeadingText from '../HeadingText';

const CompaniesSection: FunctionComponent = () => {
    return (
        <section>
            <HeadingText text="Empresas" />
            <CompaniesContainer companies={DiamondCompanies} tier="Diamond" />
            <CompaniesContainer companies={GoldCompanies} tier="Gold" />
            <CompaniesContainer companies={SilverCompanies} tier="Silver" />
        </section>
    );
};

export default CompaniesSection;
