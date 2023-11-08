import type { Metadata } from "next";

import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
