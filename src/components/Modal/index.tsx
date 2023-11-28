"use client";

import React, { Dispatch, SetStateAction } from "react";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  setIsVisible,
  children,
  className,
  ...rest
}) => {
  if (!isVisible) return null;

  return (
    <section className="fixed left-0 top-0 z-50 h-full w-full bg-black/60">
      <div
        className="fixed h-full w-full"
        onClick={() => setIsVisible(false)}
      ></div>
      <main
        className={
          "z-60 fixed left-1/2 top-1/2  w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-8 text-black md:w-3/4 " +
          className
        }
        {...rest}
      >
        {children}
      </main>
    </section>
  );
};

export default Modal;
