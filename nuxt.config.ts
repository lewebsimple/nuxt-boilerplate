import { defineNuxtConfig } from "@nuxtjs/composition-api";
import build from "./config/build";
import head from "./config/head";

export default defineNuxtConfig({
  build,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api",
    [
      "@nuxtjs/tailwindcss",
      {
        jit: true,
        viewer: false,
      },
    ],
    [
      "nuxt-villus",
      {
        httpEndpoint: "https://rickandmortyapi.com/graphql",
      },
    ],
  ],
  components: true,
  css: ["~/assets/styles/main.scss"],
  head,
  srcDir: "./src",
});
