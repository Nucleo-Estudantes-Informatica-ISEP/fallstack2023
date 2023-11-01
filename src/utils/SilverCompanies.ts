import { CompanyProps } from '../components/Company';
import {
    craftableLogo,
    delloiteLogo,
    glinttLogo,
    jumiaLogo,
    konkLogo,
    minderaLogo,
    optimizerLogo
} from './CompaniesImages';

export const SilverCompanies: CompanyProps[] = [
    {
        logoHref: craftableLogo,
        name: 'Craftable Software',
        websiteUrl: 'https://www.craftablesoftware.com'
    },
    {
        logoHref: glinttLogo,
        name: 'Glintt',
        websiteUrl: 'https://www.glintt.com/'
    },
    {
        logoHref: konkLogo,
        name: 'Konk',
        websiteUrl: 'https://www.konkconsulting.com/'
    },
    {
        logoHref: minderaLogo,
        name: 'Mindera',
        websiteUrl: 'https://mindera.com/'
    },
    {
        logoHref: delloiteLogo,
        name: 'Deloitte',
        websiteUrl: 'https://www2.deloitte.com'
    },
    {
        logoHref: optimizerLogo,
        name: 'Optimizer',
        websiteUrl: 'https://www.optimizer.pt'
    },
    {
        logoHref: jumiaLogo,
        name: 'Jumia',
        websiteUrl: 'https://group.jumia.com'
    }
];
