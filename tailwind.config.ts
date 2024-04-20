import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        purple: "#4B2A63",
        "dark-purple": "#241330",
        "light-purple": "#451A64",
        gray: "#4F4F4F",
        "light-gray":"#F8F8F8"
      },
    },
  },
  plugins: [],
};
export default config;
