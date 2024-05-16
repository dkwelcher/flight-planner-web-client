/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "manage-aircraft-intro-desktop":
          "url('/src/assets/prop-countryside.png')",
        "transparent-shadow": "linear-gradient(rgb(0 0 0/40%) 0 0)",
      },
      fontFamily: {
        primary: ["Prompt", "sans-serif"],
        secondary: ["Play", "sans-serif"],
      },
      textShadow: {
        default:
          "-1px -1px 0 rgb(64 64 64), 1px -1px 0 rgb(64 64 64), -1px 1px 0 #000, 1px 1px 0 rgb(64 64 64)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: theme("textShadow.default"),
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
