import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'vivid-sky-blue': '#00ABE4',
        'light-soft-blue': '#E9F1FA'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

