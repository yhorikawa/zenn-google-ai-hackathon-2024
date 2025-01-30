import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants/site";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_TITLE}`,
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`bg-rough-paper ${geistSans.variable} ${geistMono.variable}`}
      >
        <div className="container mx-auto max-w-5xl mb-3">
          <div className="mx-4 lg:mx-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
