// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { htmlAttrs: { lang: "fr-CA" } },
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/assets/svg", extensions: ["svg"], prefix: "svg" },
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-unhead", "nuxt-simple-robots", "nuxt-svgo"],
  runtimeConfig: {
    public: {
      siteName: "Nuxt boilerplate",
      siteDescription: "Welcome to Nuxt boilerplate",
    },
  },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
