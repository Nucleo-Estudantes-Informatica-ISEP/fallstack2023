import type { Metadata } from "next";

import "./globals.css";

import { AuthContextProvider } from "@/contexts/AuthContext";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Topbar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "FallStack 23",
  description:
    "Website do evento FallStack 23. O evento decorrerá nos dias 28 e 29 de novembro no Instituto Superior de Engenharia do Porto. O evento é organizado pelo Núcleo de Estudantes de Informática do ISEP (NEI-ISEP).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ThemeProvider>
            <Topbar />
            {children}
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
