import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        "fill-available": "-webkit-fill-available",
      },
      minWidth: {
        "fill-available": "-webkit-fill-available",
      },
      maxWidth: {
        "fill-available": "-webkit-fill-available",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#2dd4bf",
            secondary: "#2dd4bf",
            background: "#fff",
            foreground: "#000",
            content1: "#000",
            content2: "#000",
            content3: "#000",
            content4: "#000",
            divider: "#000",
            focus: "#000",
            overlay: "#000",
          },
        },
        dark: {
          colors: {
            primary: "#2dd4bf",
            secondary: "#2dd4bf",
            background: "black",
            foreground: "grey",
            content1: "#222222",
            content2: "#fff",
            content3: "#fff",
            content4: "#fff",
            divider: "magenta",
            focus: "#3d3d3d",
            overlay: "black",
          },
        },
      },
    }),
  ],
};
export default config;
