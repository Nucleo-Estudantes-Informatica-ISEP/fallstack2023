import React from "react";
import {ModalInformation} from "../../types/ModalProps";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {CompaniesTier} from "@/utils/GetColorTier";

export interface CompanyProps {
    logoHref: StaticImageData;
    name: string;
    websiteUrl?: string;
    modalInformation?: ModalInformation;
    tier?: CompaniesTier;
}

const Company: React.FC<CompanyProps> = ({
                                             logoHref,
                                             name,
                                             modalInformation,
                                             websiteUrl,
                                             tier
                                         }) => {
    // const [isHidden, setIsHidden] = React.useState(true);
    const href = hrefByCompanyTier(tier || 'Silver', name, websiteUrl);
    return (
        <>
            <div
                className="flex min-h-[8rem] cursor-pointer items-center justify-center transition duration-300 ease-in-out hover:scale-105 lg:min-h-[11rem]"
            >
                <Link
                    legacyBehavior={true} // so it doesn't comply about the <a> tag
                    href={href}
                >
                    <a>
                        <Image
                            className="h-full w-full max-h-36 max-w-[12rem] object-contain lg:max-h-28 lg:max-w-[18rem] xl:max-h-32 xl:max-w-[16rem]"
                            src={logoHref}
                            alt={name}
                        />

                    </a>
                </Link>
            </div>

        </>
    );
};

/*
 {modalInformation && (
                <Modal
                    setHidden={setIsHidden}
                    hidden={isHidden}
                    modalInformation={modalInformation}
                />
            )}
 */

function hrefByCompanyTier(tier: CompaniesTier, name: string, websiteUrl: string | undefined): string {
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

export default Company;
