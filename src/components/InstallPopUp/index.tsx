"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { BeforeInstallPromptEvent } from "@/types/BeforeInstallPromptEvent";
import config from "@/config";
import useIsMobile from "@/hooks/useIsMobile";
import PrimaryButton from "@/components/PrimaryButton";

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPrompt(e);

      const hide = localStorage.getItem(config.localStorage.hideInstallPrompt);
      setVisible(!hide);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleConfirm = () => {
    if (!prompt) return;

    prompt.prompt();

    prompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("The app was added to the home screen");
      } else {
        console.log("The app was not added to the home screen");
      }

      setVisible(false);
    });
  };

  const handleHideForever = () => {
    localStorage.setItem(config.localStorage.hideInstallPrompt, "yes");
    setVisible(false);
  };

  const position = isMobile ? -160 : -80;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed -bottom-40 left-0 flex w-full flex-col items-center justify-between gap-4 border-t-gray-100 bg-background px-8 py-4 shadow-lg shadow-black md:-bottom-20 md:flex-row"
          animate={{ y: [0, position] }}
          exit={{ y: [position, 0] }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div>
            <p className="font-medium">
              ✨ Adiciona o FallStack ao teu ecrã inicial!
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 max-md:w-full max-md:flex-col-reverse md:gap-4">
            <a
              onClick={handleHideForever}
              className="cursor-pointer hover:underline"
            >
              Não mostrar mais
            </a>
            <PrimaryButton
              onClick={handleConfirm}
              className="font-bold max-md:w-full"
              tabIndex={2}
            >
              Adicionar
            </PrimaryButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
