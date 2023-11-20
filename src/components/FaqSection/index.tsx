import { FunctionComponent } from "react";

import { FAQ } from "../../utils/FAQ";
import FaqContainer from "../FaqContainer";
import HeadingText from "../HeadingText";

const FaqSection: FunctionComponent = () => {
  return (
    <section className="mb-12 w-full">
      <HeadingText text="FAQ" />
      <FaqContainer faqs={FAQ} />
    </section>
  );
};

export default FaqSection;
