import React from 'react';
import useTabWidth from '../../hooks/useTabWidth';

interface ModalTabsProps {
    activeTabIndex: number;
    setActiveTabIndex: React.Dispatch<React.SetStateAction<number>>;
    hasDetailsSection: boolean;
    hasLinksSection: boolean;
    hasVideoSection: boolean;
}

const ModalTabs: React.FC<ModalTabsProps> = ({
    activeTabIndex,
    setActiveTabIndex,
    hasDetailsSection,
    hasLinksSection,
    hasVideoSection
}) => {
    const [tabWidth] = useTabWidth(hasDetailsSection, hasLinksSection, hasVideoSection);

    return (
        <div className="mx-auto flex w-full flex-col items-center justify-between md:flex-row">
            <div
                className={`absolute top-28 left-0 ${tabWidth} mt-2 mr-2 hidden h-1 rounded-lg bg-modal-accent transition-transform duration-300 ease-in-out hover:brightness-90 sm:block ${
                    activeTabIndex === 0
                        ? 'md:translate-x-0'
                        : activeTabIndex === 1
                        ? 'md:translate-x-full'
                        : 'md:translate-x-200'
                }`}
                aria-hidden
            />
            {hasDetailsSection && (
                <li
                    className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 0 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 0 ? 'text-modal-active' : 'text-black'}
                ${activeTabIndex !== 0 && 'hover:bg-modal-hover-accent'}`}
                    onClick={() => setActiveTabIndex(0)}>
                    Detalhes
                </li>
            )}
            {hasLinksSection && (
                <li
                    className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 1 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 1 ? 'text-modal-active' : 'text-black'}
                ${activeTabIndex !== 1 && 'hover:bg-modal-hover-accent'}`}
                    onClick={() => setActiveTabIndex(1)}>
                    Links
                </li>
            )}
            {hasVideoSection && (
                <li
                    className={`z-10 mx-4 h-full max-h-10 flex-1 cursor-pointer list-none rounded-lg py-2 text-center text-lg font-semibold 
                ${activeTabIndex === 2 ? 'font-semibold' : 'font-thin'}
                ${activeTabIndex === 2 ? 'text-modal-active' : 'text-black'}
                ${activeTabIndex !== 2 && 'hover:bg-modal-hover-accent'}`}
                    onClick={() => setActiveTabIndex(2)}>
                    Vídeo
                </li>
            )}
        </div>
    );
};

export default ModalTabs;
