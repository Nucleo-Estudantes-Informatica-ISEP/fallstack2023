import React from "react";
import HeadingText from "@/components/HeadingText";
import {Facebook, Globe, Instagram, Linkedin, Twitter, Youtube} from "react-bootstrap-icons";
import SocialMediaCard from "@/components/SocialMediaCard";

interface CompanySocialsProps {
    twitterLink: string | undefined;
    facebookLink: string | undefined;
    instagramLink: string | undefined;
    youtubeLink: string | undefined;
    linkedinLink: string | undefined;
    website: string | undefined;
}

const CompanySocials: React.FC<CompanySocialsProps> = ({
    twitterLink,
    facebookLink,
    instagramLink,
    youtubeLink,
    linkedinLink,
    website
                                                       }) => {
    return (
        <>
            <HeadingText className="text-black" text='Redes sociais'/>
            <ul className="flex flex-row flex-wrap items-center justify-around px-4">
                {twitterLink && (
                    <SocialMediaCard href={twitterLink} icon={<Twitter />} title="Twitter" />
                )}
                {linkedinLink && (
                    <SocialMediaCard href={linkedinLink} icon={<Linkedin />} title="Linkedin" />
                )}
                {facebookLink && (
                    <SocialMediaCard href={facebookLink} icon={<Facebook />} title="Facebook" />
                )}
                {youtubeLink && (
                    <SocialMediaCard href={youtubeLink} icon={<Youtube />} title="Youtube" />
                )}
                {instagramLink && (
                    <SocialMediaCard href={instagramLink} icon={<Instagram />} title="Instagram" />
                )}
                {website && <SocialMediaCard href={website} icon={<Globe />} title="Website" />}
            </ul>
        </>
    );
}

export default CompanySocials;