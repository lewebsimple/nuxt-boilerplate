export default {
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  darkMode: false,
  plugins: [],
  purge: [
    "./src/components/**/*.{vue,js}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./config/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
