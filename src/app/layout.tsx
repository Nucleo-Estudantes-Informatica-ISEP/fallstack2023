import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import { ToastContainer } from "react-toastify";

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
            <ToastContainer position="bottom-right" />
          </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
