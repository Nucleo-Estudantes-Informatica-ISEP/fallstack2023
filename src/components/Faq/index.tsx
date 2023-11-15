export interface FaqProps {
    question: string;
    answer: string;
}

const Sponsor: React.FC<FaqProps> = ({ question, answer }) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="my-4">
                <p
                    className="font-bold text-3xl text-orange-600 text-center "
                >
                    {question}

                </p>
            </div>
            <div className="mb-4">
                <p
                    className="font-light text-xl px-2 text-justify"
                >
                    {answer}

                </p>
            </div>
        </div>
    );
};

export default Sponsor;