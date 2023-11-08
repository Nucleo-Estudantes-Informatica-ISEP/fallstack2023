import type { Metadata } from "next";

import "./globals.css";

import { AuthContextProvider } from "@/contexts/AuthContext";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Topbar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "FallStack 23",
  description: "Website do evento FallStack 23",
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
            <main>{children}</main>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
