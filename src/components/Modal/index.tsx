import React, { useEffect, useId } from 'react';

import { Facebook, Globe, Instagram, Linkedin, Twitter, X, Youtube } from 'react-bootstrap-icons';
import { useDisableBodyScroll } from '../../hooks/disableBackgroundMoving';
import ModalProps from '../../types/ModalProps';
import ModalTabs from '../ModalTabs';
import SocialMediaCard from '../SocialMediaCard';

const Modal: React.FC<ModalProps> = ({ hidden, setHidden, modalInformation }) => {
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
    } = modalInformation;

    const hasLinksSection = () =>
        !!(twitterLink || linkedinLink || facebookLink || youtubeLink || instagramLink || website);

    useDisableBodyScroll({ modalIsHidden: hidden });

    useEffect(() => {
        const onKeyPress = (e: KeyboardEvent) => {
            if (!hidden && e.key === 'Escape') setHidden(true);
        };

        window.addEventListener('keydown', onKeyPress);
        return () => window.removeEventListener('keydown', onKeyPress);
    }, [hidden, setHidden]);

    const [activeTabIndex, setActiveTabIndex] = React.useState(0);

    const tabs: React.ReactNode[] = [
        <p
            key={useId()}
            className="mb-4 text-justify text-sm leading-relaxed text-slate-500 lg:text-base">
            {bodyText}
        </p>,
        <ul key={useId()} className="flex flex-row flex-wrap items-center justify-around px-4">
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
            {website && <SocialMediaCard href={website} icon={<Globe />} title="Webiste" />}
        </ul>,
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
    ];

    return !hidden ? (
        <div className="fixed inset-0 z-10 animate-fade-imm bg-gray-700/60 transition-opacity">
            <div className="fixed inset-0 my-auto flex h-[90%] items-center justify-center overflow-hidden rounded-lg outline-none focus:outline-none md:h-3/5">
                <div className="scrollbar-medium relative mx-auto h-full w-4/5 max-w-3xl overflow-y-scroll rounded-lg scrollbar scrollbar-track-white scrollbar-thumb-slate-200">
                    <div className="min-h-full w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                        <div className="flex w-full items-start justify-center rounded-t border-b border-solid border-slate-200 p-5">
                            <h3 className="w-full text-center text-3xl font-semibold capitalize">
                                {title}
                            </h3>
                            <button
                                className="absolute right-4 ml-auto rounded-xl border-0 bg-transparent p-1 text-3xl font-semibold leading-none transition-colors duration-300 ease-in-out focus:outline-none hover:rounded-full hover:bg-gray-100"
                                onClick={() => setHidden(true)}>
                                {<X className="text-red-600" />}
                            </button>
                        </div>

                        <ModalTabs
                            activeTabIndex={activeTabIndex}
                            setActiveTabIndex={setActiveTabIndex}
                            hasLinksSection={hasLinksSection()}
                            hasDetailsSection={!!bodyText}
                            hasVideoSection={!!videoHref}
                        />
                        <div className="h-min-fit relative z-30 h-full flex-auto py-6 px-8 md:px-12">
                            {tabs[activeTabIndex]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Modal;
