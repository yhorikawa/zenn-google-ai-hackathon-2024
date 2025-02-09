import * as flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content({ base: "../../" }),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-lusitana)", // 英語用
          "var(--font-noto-serif-jp)", // 日本語用
          "YuMincho",
          "Hiragino Mincho ProN",
          "HiraMinProN-W3",
          "MS PMincho",
          "serif",
        ],
      leading: {
        loose: "1.8",
      },
      opacity: {
        "8": ".08",
        "12": ".12",
        "38": ".38",
        "60": ".6",
        "70": ".7",
        "87": ".87",
      },
      colors: {
        "on-surface": {
          DEFAULT: colors.black,
          variant: colors.black,
          disable: colors.black,
          inverse: colors.white,
          primary: colors.indigo[800],
          error: colors.red[600],
        },
        surface: {
          brigght: colors.white,
          DEFAULT: colors.gray[50],
          dim: colors.gray[100],
          disable: colors.gray[200],
          inverse: colors.gray[800],
          primary: colors.indigo[50],
          variant: colors.indigo[100],
          "primary-inverse": colors.indigo[600],
          error: colors.red[50],
        },
        outline: {
          DEFAULT: colors.white,
          variant: colors.black,
          primary: colors.indigo[600],
          "primary-variant": colors.indigo[300],
          error: colors.red[400],
          focus: colors.blue[600],
        },
        scrim: colors.black,
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "rough-paper": "url('/rough-paper.svg')",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
