import { Lusitana, Noto_Serif_JP, Zilla_Slab } from "next/font/google";

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lusitana",
});

export const notoSerifJP = Noto_Serif_JP({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const zillaSlab = Zilla_Slab({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zilla-slab",
});
