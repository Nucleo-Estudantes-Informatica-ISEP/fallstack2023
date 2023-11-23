import FactData from "@/types/FactData";

interface FactSectionProps {
  facts: FactData[];
}

const FactSection: React.FC<FactSectionProps> = ({ facts }) => {
  return (
    <section className="my-5 flex flex-col space-y-2 text-sm font-light leading-8 sm:text-sm lg:px-10 lg:text-lg">
      {facts.map((fact, i) => (
        <div key={i} className="my-1 flex flex-row items-center">
          <fact.iconSrc
            className={`${
              fact.className ? fact.className : "h-6 w-6"
            }  left-0 fill-stone-500 sm:h-8 sm:w-8 lg:h-8 lg:w-8`}
          />
          <p className="ml-3 text-left text-black ">{fact.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FactSection;
