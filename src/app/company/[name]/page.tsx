import React from "react";
import {CompanyProps} from "@/components/Company";
import {DiamondCompanies} from "@/utils/DiamondCompanies";
import {GoldCompanies} from "@/utils/GoldCompanies";
import {SilverCompanies} from "@/utils/SilverCompanies";
import GenericContainer from "@/components/GenericContainer";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/HeroContainer";
import {notFound} from "next/navigation";
import CompanyInfo from "@/components/CompanyInfo";
import {CompaniesTier} from "@/utils/GetColorTier";
import findCompanyByName from "@/utils/CompanyByName";

interface CompanySearchProps {
    params: {
        name: string;
    }
    tier: CompaniesTier;
}


const company: React.FC<CompanySearchProps> = ({params}) => {
    const company = findCompanyByName(params.name);

    if (company === null || company.tier === 'Silver') {
        return notFound();
    }

    const companyProps = company.props;
    const modalInformation = companyProps.modalInformation;

    const {
        title,
        bodyText,
        videoHref,
        videoTitle,
        twitterLink,
        facebookLink,
        instagramLink,
        youtubeLink,
        linkedinLink,
        website
    } = modalInformation || {};

    return (
        <HeroContainer>
            <GenericContainer>
                <h1 className="my-2 mx-0 animate-fade text-center font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-6xl">
                    {title || companyProps.name}
                </h1>
                <CompanyInfo
                    title={title}
                    bodyText={bodyText}
                    videoHref={videoHref}
                    videoTitle={videoTitle}
                    twitterLink={twitterLink}
                    facebookLink={facebookLink}
                    instagramLink={instagramLink}
                    youtubeLink={youtubeLink}
                    linkedinLink={linkedinLink}
                    website={website}
                    tier={company.tier}
                ></CompanyInfo>

                <Footer lastEditionUrl="https://fallstack-22-23.nei-isep.org/"/>
            </GenericContainer>
        </HeroContainer>
    );
}

/*
<section
                        //ref={contentRef}
                        className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-10 sm:w-3/4 lg:p-14"
                    >
                    </section>
 */

export default company;