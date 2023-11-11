import { FunctionComponent } from 'react';

interface InfoBitProps {
    icon: React.ReactNode;
    info: string;
}

const InfoBit: FunctionComponent<InfoBitProps> = ({ icon, info }) => {
    return (
        <span className="flex lg:w-auto items-center gap-4">
            <span className="text-3xl">{icon}</span>
            <b className="w-[20ch] ">{info}</b>
        </span>
    );
};

export default InfoBit;
