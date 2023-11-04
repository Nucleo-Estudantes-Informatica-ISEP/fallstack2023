import React from "react";
import HeadingText from "@/components/HeadingText";

interface CompanyDescriptionProps {
    description: React.ReactNode
}

const CompanyDescription: React.FC<CompanyDescriptionProps> = ({ description }) => {
    return (
        <>
            <HeadingText text='Detalhes'/>
            <div className="text-justify">{description}</div>
        </>
    );
};

export default CompanyDescription;