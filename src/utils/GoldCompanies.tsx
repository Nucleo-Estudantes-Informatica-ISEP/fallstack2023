import { CompanyProps } from '../components/Company';
import { AccentureLogo, NatixisLogo, ParfoisLogo } from './CompaniesImages';

/**
    Gold Companies
    Accenture: 
    Parfois:
    Natixis: 
 */

export const GoldCompanies: CompanyProps[] = [
    {
        logoHref: AccentureLogo,
        name: 'Accenture',
        modalInformation: {
            title: 'Accenture',
            bodyText: (
                <>
                    <p>
                        Accenture is a global professional services company with leading
                        capabilities in digital, cloud and security.
                    </p>
                    <br />
                    <p>
                        Combining unmatched experience and specialized skills across more than 40
                        industries, we offer Strategy and Consulting, Interactive, Technology and
                        Operations services, all powered by the world’s largest network of Advanced
                        Technology and Intelligent Operations centers.
                    </p>
                    <br />
                    <p>
                        Our 735,000 people deliver on the promise of technology and human ingenuity
                        every day, serving clients in more than 120 countries. We embrace the power
                        of change to create value and shared success for our clients, people,
                        shareholders, partners and communities.
                    </p>
                </>
            ),
            website: 'https://www.accenture.pt'
        }
    },
    {
        logoHref: NatixisLogo,
        name: 'Natixis',
        modalInformation: {
            title: 'Natixis',
            bodyText: (
                <>
                    <p>
                        Natixis in Portugal belongs to Global Financial Services business unit, the
                        global arm of Groupe BPCE, which focuses on two global businesses: Asset &
                        Wealth Management and Corporate & Investment Banking.
                    </p>
                    <br />
                    <p>
                        Based in Porto, Natixis Center of Expertise mission is to transform
                        traditional banking by developing innovative solutions for the bank’s
                        business, operations and work culture worldwide, as a key driver of the
                        company’s culture of agility and innovation: a perfect fit in Portuguese
                        labour culture. Teams of IT and Banking Support Activities work in an
                        integrated, inclusive and transversal way, supporting all the business lines
                        and country platforms.
                    </p>
                    <br />
                    <p>
                        Join a team where you can make things change, achieve limitless perspectives
                        to evolve and grow, become an expert and reach your full potential! Because
                        you deserve much more than a job.
                    </p>
                </>
            ),
            instagramLink: 'https://www.instagram.com/natixisinportugal/?hl=en',
            linkedinLink: 'https://www.linkedin.com/company/natixis-in-portugal/'
        }
    },
    {
        logoHref: ParfoisLogo,
        name: 'Parfois',
        modalInformation: {
            title: 'Parfois',
            bodyText: (
                <>
                    <p>
                        Parfois is a global women’s fashion accessories brand, created in 1994.
                        Aiming to be the best women’s fashion accessories brand in every market
                        wherever it decides to operate. That is only possible with a team of
                        talented, passionate, ambitious and committed professionals.
                    </p>
                    <br />
                    <p>
                        Parfois is an accessories brand with savy, chic, affordable and desirable
                        fashion for every woman.
                    </p>
                    <br />
                    <p>
                        It all started in Portugal. Now, everyone can find Parfois all over the
                        world. We have more than 1000 stores present in over 70 countries!
                    </p>
                </>
            ),
            website: 'https://www.parfois.com/'
        }
    }
];
