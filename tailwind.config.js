/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "375px" },
      // => @media (max-width: 375px) { ... }
    },
    extend: {
      colors: {
        tomato: {
          300: "#FF537B",
          500: "#FF6257",
          700: "#FD6B3F",
        },
        "neutral-gray": {
          300: "#9294A0",
          500: "#36384E",
          700: "#242742",
        },
      },
      fontSize: {
        "4xl": "2.5rem", //40px
        "5xl": "3.375rem", //54px
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        custom: "0 10px 20px rgba(235, 107, 63, 0.25)",
      },
      borderRadius: {
        "4xl": "2.25rem",
      },
    },
    plugins: [],
  },
};
