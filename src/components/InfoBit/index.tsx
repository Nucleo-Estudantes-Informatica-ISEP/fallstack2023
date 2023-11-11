import { FunctionComponent } from "react";

interface InfoBitProps {
  icon: React.ReactNode;
  info: string;
}

const InfoBit: FunctionComponent<InfoBitProps> = ({ icon, info }) => {
  return (
    <span className="flex w-full items-center justify-center gap-4">
      <span className="text-3xl">{icon}</span>
      <b className="w-[20ch] ">{info}</b>
    </span>
  );
};

export default InfoBit;
