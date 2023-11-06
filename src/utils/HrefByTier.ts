import {CompaniesTier} from "@/utils/GetColorTier";

export default function hrefByCompanyTier(tier: CompaniesTier, name: string, websiteUrl: string | undefined): string {
    switch (tier) {
        case 'Diamond':
            return `/company/${name}`;
        case 'Gold':
            return `/company/${name}`;
        case 'Silver':
            return websiteUrl || '/';
        default:
            throw new Error('Tier not found');
    }
}