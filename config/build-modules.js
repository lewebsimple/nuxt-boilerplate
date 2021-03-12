import tailwindcss from "./modules/tailwindcss";

export default [
  "@nuxt/typescript-build",
  "@nuxtjs/composition-api",
  "@nuxtjs/pwa",
  ["@nuxtjs/tailwindcss", tailwindcss],
];
