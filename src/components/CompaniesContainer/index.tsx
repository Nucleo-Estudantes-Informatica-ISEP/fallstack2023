import {FunctionComponent} from "react";

import {CompaniesTier} from "../../utils/GetColorTier";
import Company, {CompanyProps} from "../Company";

interface CompaniesContainerProps {
    tier: CompaniesTier;
    companies: CompanyProps[];
}

const CompaniesContainer: FunctionComponent<CompaniesContainerProps> = ({
                                                                            tier,
                                                                            companies,
                                                                        }) => {
    const getTierStyling = (tier: CompaniesTier): string => {
        switch (tier) {
            case "Diamond":
                return `border-blue-500 text-blue-500 drop-shadow-[0px_0px_4px_#3b82f6] text-4xl md:text-6xl`;
            case "Gold":
                return `border-yellow-400 text-yellow-400 drop-shadow-[0px_0px_4px_#facc15] text-4xl md:text-6xl`;
            case "Silver":
                return `border-gray-500 drop-shadow-[0px_0px_4px_#6b7280] text-gray-500  text-4xl md:text-6xl`;
            default:
                throw new Error("Tier not found");
        }
    };

    return (
        <section className="mb-12">
            <div className='flex flex-row justify-center'>
                <div className={`${getTierStyling(
                    tier
                )} border-b-2 w-10 mb-12 lg:w-14 lg:border-b-4`}/>
                <h2
                    className={`${getTierStyling(
                        tier
                    )} z-0 mb-8 text-center lg:mb-4 mx-2`}
                >
                    {tier}
                </h2>
                <div className={`${getTierStyling(
                    tier
                )} border-b-2 w-10 mb-12 lg:w-14 lg:border-b-4`}/>
            </div>

            <div
                className="mt-4 grid grid-cols-responsiveness-180px-columns grid-cols-2 place-items-center justify-center gap-x-12 gap-y-4 lg:mt-12  xl:grid-cols-2">
                {companies.map((company) => {
                    return <Company key={company.name} {...company} />;
                })}
            </div>
        </section>
    );
};

export default CompaniesContainer;
