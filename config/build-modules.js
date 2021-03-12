import { resolve } from "path";

export default [
  "@nuxt/typescript-build",
  "@nuxtjs/composition-api",
  [
    "@nuxtjs/tailwindcss",
    {
      configPath: resolve("./tailwind.config.js"),
      viewer: false,
    },
  ],
];
