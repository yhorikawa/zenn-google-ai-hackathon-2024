import type { Metadata } from "next";
import { lusitana, notoSerifJP } from "./fonts/fonts";
import "./globals.css";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION, SITE_TITLE } from "../constants/site";

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
        className={`bg-rough-paper text-on-surface ${lusitana.variable} ${notoSerifJP.variable}`}
      >
        <div className="container mx-auto md:max-w-screen-md lg:max-w-screen-lg">
          {children}
        </div>
      </body>
    </html>
  );
}
