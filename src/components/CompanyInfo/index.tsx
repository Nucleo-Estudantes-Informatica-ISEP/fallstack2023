import React, {useId} from "react";
import CompanyDescription from "@/components/CompanyDescription";
import HeadingText from "@/components/HeadingText";
import CompanySocials from "@/components/CompanySocials";

interface CompanyInfoProps {
    title: string | undefined;
    bodyText: React.ReactNode
    videoHref: string | undefined;
    videoTitle: string | undefined;
    twitterLink: string | undefined;
    facebookLink: string | undefined;
    instagramLink: string | undefined;
    youtubeLink: string | undefined;
    linkedinLink: string | undefined;
    website: string | undefined;
    tag: string;
}

const CompanyInfo : React.FC<CompanyInfoProps> = (
    {
        title,
        bodyText,
        videoHref,
        videoTitle,
        twitterLink,
        facebookLink,
        instagramLink,
        youtubeLink,
        linkedinLink,
        website,
        tag
    }) => {

    const hasSocials : boolean = !!(twitterLink || linkedinLink || facebookLink || youtubeLink || instagramLink || website);

    return (
        <>
            {bodyText && (
                <CompanyDescription description={bodyText} />
            )}
            {hasSocials && (<CompanySocials
                    twitterLink={twitterLink}
                    facebookLink={facebookLink}
                    instagramLink={instagramLink}
                    youtubeLink={youtubeLink}
                    linkedinLink={linkedinLink}
                    website={website}
                />
            )}
            {tag === 'Diamond' &&
                <>
                    <HeadingText text={videoTitle || 'Vídeo promocional'}/>
                    <div className="flex h-full w-full items-center justify-center" key={useId()}>
                        <iframe
                            className="max-w-full rounded-lg"
                            width="560"
                            height="315"
                            src={videoHref}
                            title={videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </>
            }

        </>
    );
};



export default CompanyInfo;