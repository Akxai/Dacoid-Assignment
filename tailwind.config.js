/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  plugins: [],
};
