import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { AuthContextProvider } from "@/contexts/AuthContext";
import ThemeProvider from "@/components/Theme/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <AuthContextProvider>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
