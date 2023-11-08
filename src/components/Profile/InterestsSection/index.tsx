"use client";

interface InterestsSectionProps {
  userInterests: string[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({
  userInterests,
}) => {
  let orderedInterests = userInterests;
  if (userInterests.length > 0) {
    orderedInterests = userInterests.sort((a, b) => {
      if (userInterests.includes(a)) return -1;
      if (userInterests.includes(b)) return 1;
      return 0;
    });
  }

  return (
    <section className="my-4 flex w-11/12 flex-wrap space-y-5 pl-12 md:mx-0 md:w-2/3">
      <div className="flex flex-col">
        <h3 className="text-left text-xl font-bold text-gray-600">
          Interesses
        </h3>
        <div className="mx-auto mt-2 flex w-3/4 items-center gap-x-6 md:mx-0">
          {orderedInterests.map((interest) => (
            <div
              className="relative flex rounded-xl bg-slate-200 px-3 py-1 text-black"
              key={interest}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
