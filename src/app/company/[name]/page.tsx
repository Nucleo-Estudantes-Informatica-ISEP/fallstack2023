import React from "react";
import {CompaniesTier} from "@/utils/GetColorTier";
import Custom404 from "@/app/not-found";
import findCompanyByName from "@/utils/CompanyByName";
import CompanyPageSection from "@/components/CompanyPageSection";

interface CompanySearchProps {
    params: {
        name: string;
    }
}


const CompanyPage: React.FC<CompanySearchProps> = ({params}) => {
    const company = findCompanyByName(params.name);

    console.log(company);

    if (company === null || company.tier === 'Silver') {
        return Custom404();
    }

    const companyProps = company.props;
    const modalInformation = companyProps.modalInformation;

    if (modalInformation === undefined) {
        return Custom404();
    }

    return (
        <section className="flex h-full min-h-screen w-full flex-col items-center">
            <CompanyPageSection company={company} modalInformation={modalInformation}/>
        </section>
    );
}

/*
<section
                        //ref={contentRef}
                        className="center container mx-auto w-11/12 rounded-lg bg-slate-100 p-10 sm:w-3/4 lg:p-14"
                    >
                    </section>
 */

export default CompanyPage;