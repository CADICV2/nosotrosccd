import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
      keyframes: {
        scaleAnimation: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        colorChange: {
          '0%, 100%': { color: 'black' },
          '50%': { color: '#027FE8' },
        },
      },
      animation: {
        scaleAnimation: 'scaleAnimation 3s infinite',
        colorChange: 'colorChange 3s infinite',
        
        
      },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
};


export default config;
