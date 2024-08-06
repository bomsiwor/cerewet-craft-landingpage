/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "main": "#8c191c",
        "main-light": "#fbceb7"
      }
    },
    fontFamily: {
      "vogue": ["vogue", "sans-serif"],
      "lemon": ["Lemon", "sans-serif"],
    },
  },
  plugins: [],
}

