import { resolve } from "path";

export default [
  "@nuxt/typescript-build",
  "@nuxtjs/composition-api",
  [
    "@nuxtjs/pwa",
    {
      manifest: {
        name: "Nuxt boilerplate",
        lang: "fr",
      },
      meta: {
        name: "nuxt-boilerplate",
        description: "Nuxt.js application boilerplate",
        lang: "fr",
        // TODO: Open Graph / Teitter Cards
      },
    },
  ],
  [
    "@nuxtjs/tailwindcss",
    {
      configPath: resolve("./tailwind.config.js"),
      viewer: false,
    },
  ],
];
