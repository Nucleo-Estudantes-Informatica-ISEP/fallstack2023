import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/Theme/ThemeProvider";
import Topbar from "@/components/TopBar";

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
      <body>
        <ThemeProvider>
          <Topbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
