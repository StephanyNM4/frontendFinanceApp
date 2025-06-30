/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#387F39",
        secondary: "#5CB338",
        tertiary: "#BEDC74",
      },
      fontFamily: {
        sans: ['Montserrat_400Regular'],
    },
    },
  },
  plugins: [],
};
