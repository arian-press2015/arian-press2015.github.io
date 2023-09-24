/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#4E4E4E",
        "light-gray": "#9E9E9E",
        "dark-gray": "#484848",
      },
      fontFamily: {
        optima: ["Optima"],
        branch: ["Branch"],
      },
    },
  },
  plugins: [],
};
