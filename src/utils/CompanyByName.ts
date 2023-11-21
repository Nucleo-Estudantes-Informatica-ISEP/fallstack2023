import { DiamondCompanies } from "./DiamondCompanies";
import { GoldCompanies } from "./GoldCompanies";
import { SilverCompanies } from "./SilverCompanies";
import { CompanyProps } from "@/components/Company";

interface CompanyDetails {
    props: CompanyProps;
    tier: string;
}

export default function findCompanyByName(name: string): CompanyDetails | null {
    console.log(name);

    name = name.replaceAll('%20', ' ');

    for (const company of DiamondCompanies) {
        if (company.name === name) {
            return { props: company, tier: 'Diamond' };
        }
    }

    for (const company of GoldCompanies) {
        if (company.name === name) {
            return { props: company, tier: 'Gold' };
        }
    }

    for (const company of SilverCompanies) {
        if (company.name === name) {
            return { props: company, tier: 'Silver' };
        }
    }

    return null;
}