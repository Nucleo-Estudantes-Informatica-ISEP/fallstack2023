"use client";

import { motion } from "framer-motion";

export interface FaqProps {
  question: string;
  answer: string;
  index: number;
}

const Faq: React.FC<FaqProps> = ({ question, answer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{ delay: index * 0.1 }}
      className="mb-8 flex flex-col justify-center gap-y-4"
    >
      <p className="pt-4 text-center text-xl font-bold leading-6 text-orange-600 md:text-left md:text-3xl">
        {question}
      </p>
      <p className="text-justify text-lg font-light leading-7 md:text-2xl md:leading-9">
        {answer}
      </p>
    </motion.div>
  );
};

export default Faq;
