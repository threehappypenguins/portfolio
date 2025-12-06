/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [plugin],
};
