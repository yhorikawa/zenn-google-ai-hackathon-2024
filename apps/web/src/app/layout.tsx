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
        className={`bg-rough-paper ${lusitana.variable} ${notoSerifJP.variable}`}
      >
        <div className="container mx-auto max-w-5xl mb-3">
          <div className="mx-4 lg:mx-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
