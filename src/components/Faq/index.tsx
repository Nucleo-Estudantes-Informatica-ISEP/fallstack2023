export interface FaqProps {
    question: string;
    answer: string;
}

const Faq: React.FC<FaqProps> = ({ question, answer }) => {
    return (
        <div className="flex flex-col justify-center">
            <div className="my-4">
                <p
                    className="font-bold px-2 pt-5 text-4xl text-orange-600 lg:text-left text-center"
                >
                    {question}

                </p>
            </div>
            <div className="mb-4">
                <p
                    className="font-light lg:text-left text-2xl px-2 text-center"
                >
                    {answer}

                </p>
            </div>
        </div>
    );
};

export default Faq;