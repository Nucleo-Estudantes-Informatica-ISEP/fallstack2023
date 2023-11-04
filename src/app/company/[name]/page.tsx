import React, {useId} from "react";
import {CompanyProps} from "@/components/Company";
import {DiamondCompanies} from "@/utils/DiamondCompanies";
import {GoldCompanies} from "@/utils/GoldCompanies";
import {SilverCompanies} from "@/utils/SilverCompanies";
import GenericContainer from "@/components/GenericContainer";
import Topbar from "@/components/TopBar";
import Header from "@/components/Header";
import Logo from "../../../../public/assets/images/logo.png";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/HeroContainer";
import {notFound, useRouter} from "next/navigation";
import HeadingText from "@/components/HeadingText";
import CompanyInfo from "@/components/CompanyInfo";
import {CompaniesTier} from "@/utils/GetColorTier";

interface CompanySearchProps {
    params: {
        name: string;
    }
    tier: CompaniesTier;
}

interface CompanyDetails {
    props: CompanyProps;
    tag: string;
}


const company : React.FC<CompanySearchProps> = ({params}) => {
    const company = findCompanyByName(params.name);

    if(company === null || company.tag === 'Silver') {
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
                <Topbar />
                    <h1 className="my-2 mx-0 animate-fade text-center font-good__times text-4xl text-white opacity-0 drop-shadow-3xl lg:my-6 lg:text-6xl">
                        {title || companyProps.name}
                    </h1>
                    <section
                        //ref={contentRef}
                        className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-10 sm:w-3/4 lg:p-14"
                    >
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
                            tag={company.tag}
                        ></CompanyInfo>
                    </section>
                <Footer lastEditionUrl="https://fallstack-22-23.nei-isep.org/" />
            </GenericContainer>
        </HeroContainer>
    );
}

function findCompanyByName(name: string) : CompanyDetails | null {

    name = name.replaceAll('%20', ' ');

    for(const company of DiamondCompanies) {
        if(company.name === name) {
            return {props: company, tag: 'Diamond'};
        }
    }

    for(const company of GoldCompanies) {
        if(company.name === name) {
            return {props: company, tag: 'Gold'};
        }
    }

    for(const company of SilverCompanies) {
        if(company.name === name) {
            return {props: company, tag: 'Silver'};
        }
    }

    return null;
}



export default company;