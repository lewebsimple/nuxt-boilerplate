// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { htmlAttrs: { lang: "en-US" } },
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/assets/svg", extensions: ["svg"], prefix: "svg" },
  ],
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-unhead",
    "nuxt-schema-org",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-svgo",
  ],
  nitro: {
    prerender: { crawlLinks: true, routes: ["/"] },
  },
  runtimeConfig: {
    public: {
      siteName: "Nuxt boilerplate",
      siteDescription: "Welcome to Nuxt boilerplate",
      siteUrl: "http://localhost:3000",
    },
  },
  schemaOrg: { inLanguage: "en-US" },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
