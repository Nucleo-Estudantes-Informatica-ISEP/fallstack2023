import FactData from "@/types/FactData";

interface FactSectionProps {
  facts: FactData[];
}

const FactSection: React.FC<FactSectionProps> = ({ facts }) => {
  return (
    <section className="my-5 flex flex-col space-y-2 text-sm font-light leading-8 sm:text-sm lg:px-10 lg:text-lg">
      {facts.map((fact, i) => (
        <div key={i} className="my-1 grid grid-cols-10 items-center">
          <fact.iconSrc className="left-0 fill-stone-500 text-2xl" />
          <div className="col-span-9 ml-3 text-left leading-5 text-black ">
            {fact.description}
          </div>
        </div>
      ))}
    </section>
  );
};

export default FactSection;
