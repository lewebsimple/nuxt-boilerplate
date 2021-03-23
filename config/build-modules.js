import tailwindcss from "./tailwindcss";
import villus from "./villus";

export default [
  "@nuxt/typescript-build",
  "@nuxtjs/composition-api",
  ["@nuxtjs/tailwindcss", tailwindcss],
  ["nuxt-villus", villus],
];
