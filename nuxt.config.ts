// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { htmlAttrs: { lang: "en-US" } },
  },
  build: { transpile: [] },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/assets/svg", extensions: ["svg"], prefix: "svg" },
  ],
  modules: [
    "@lewebsimple/nuxt3-svg",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-schema-org",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
  ],
  nitro: {
    prerender: { crawlLinks: true, routes: ["/"] },
  },
  routeRules: {},
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
