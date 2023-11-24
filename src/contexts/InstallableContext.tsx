"use client";

import { createContext, useEffect, useState } from "react";

import { BeforeInstallPromptEvent } from "@/types/BeforeInstallPromptEvent";

export interface InstallableContextData {
  isInstallable: boolean;
  handleConfirm: () => void;
}

interface InstallableContextProviderProps {
  children: React.ReactNode;
}

const InstallableContext = createContext<InstallableContextData>(
  {} as InstallableContextData
);

export function InstallableContextProvider({
  children,
  ...props
}: InstallableContextProviderProps) {
  const [isInstallable, setIsInstallable] = useState(false);
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setPrompt(e);
      setIsInstallable(true);
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
    });
  };

  return (
    <InstallableContext.Provider
      value={{ isInstallable, handleConfirm }}
      {...props}
    >
      {children}
    </InstallableContext.Provider>
  );
}

export default InstallableContext;
