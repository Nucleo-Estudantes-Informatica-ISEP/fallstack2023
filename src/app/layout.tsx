import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import React from "react";
import { ToastContainer } from "react-toastify";

import { AuthContextProvider } from "@/contexts/AuthContext";
import { InstallableContextProvider } from "@/contexts/InstallableContext";
import InstallPopUp from "@/components/InstallPopUp";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Topbar from "@/components/TopBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Fallstack 2023",
  title: "Fallstack 2023",
  description:
    "Website do evento Fallstack 2023. O evento decorrerá nos dias 28 e 29 de novembro no Instituto Superior de Engenharia do Porto. O evento é organizado pelo Núcleo de Estudantes de Informática do ISEP (NEI-ISEP).",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-[100svh]">
      <body className={inter.className}>
        <AuthContextProvider>
          <InstallableContextProvider>
            <ThemeProvider>
              <Topbar />
              <main>{children}</main>
              <ToastContainer position="bottom-right" />
              <InstallPopUp />
            </ThemeProvider>
          </InstallableContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
