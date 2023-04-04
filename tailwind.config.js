/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit"), require("@tailwindcss/forms")],
};
