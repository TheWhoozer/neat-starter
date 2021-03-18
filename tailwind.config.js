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
        bg: "#121212",
      },
    },
  },
  darkMode: 'class',
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
