const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        bgDark: "#121212",
        bgLight: "#ffffff",
      },
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
