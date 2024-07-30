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
        'black': '#000000',
        'white': '#ffffff',
        'blue-500': '#3b82f6',
        'gray-300': '#d1d5db',
        'gray-600': '#4b5563',
      },
    },
  },
  plugins: [],
};
export default config;
