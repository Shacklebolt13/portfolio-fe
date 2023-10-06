import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
      colo: {
        primary: "#2dd4bf",
      },
    },
  },
  plugins: [],
};
export default config;
