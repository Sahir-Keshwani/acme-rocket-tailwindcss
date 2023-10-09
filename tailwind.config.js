/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"] ;
  // content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        wideScreen: { raw: "(min-aspect-ratio : 3/2)" },
        tallScreen: { raw: "(min-aspect-ratio : 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": "{transform: scaleY(0)}",
          "80%": "{transform: scaleY(1.2)}",
          "100%": "{transform: scaleY(1)}",
        },
      },
      animation: {
        "open-menu": "open-menu 05s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
