import {
  Children,
  FunctionComponent,
  ReactNode,
  useMemo,
  useState,
} from "react";

interface OnboardingProps {
  children: ReactNode;
}

const Onboarding: FunctionComponent<OnboardingProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const steps = useMemo(() => Children.toArray(children), [children]);

  const handleNext = () => setCurrent((prev) => prev + 1);
  const handlePrev = () => setCurrent((prev) => prev - 1);

  return null;
};

export default Onboarding;
