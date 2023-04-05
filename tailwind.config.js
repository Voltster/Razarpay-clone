/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
        deepBlue2: "#181C2E",
      },
      dropShadow: {
        "3xl": "-20px 64px 64px rgba(247,247,247,1)",
        "4xl": "-20px 64px 64px rgba(19,23,37,1)",
      },
    },
  },
  plugins: [],
};
