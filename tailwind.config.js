/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        dosis: "Dosis",
        inter: "Inter",
      },
      borderRadius: {
        "21xl": "40px",
        "31xl": "50px",
        "26xl": "45px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "37xl": "56px",
      base: "16px",
      "5xs": "8px",
      "7xs-5": "5.5px",
      "6xs": "7px",
      "7xs": "6px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
