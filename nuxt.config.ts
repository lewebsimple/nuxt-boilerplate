// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { htmlAttrs: { lang: "fr-CA" } },
  },
  components: [{ path: "~/components", pathPrefix: false }],
  modules: ["@nuxtjs/tailwindcss", "nuxt-unhead"],
  runtimeConfig: {
    public: {
      siteName: "Nuxt boilerplate",
      siteDescription: "Welcome to Nuxt boilerplate",
    },
  },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
