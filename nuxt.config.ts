// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/components", pathPrefix: false }],
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      siteName: "Nuxt boilerplate",
      siteDescription: "Welcome to Nuxt boilerplate",
      siteLanguage: "fr-CA",
    },
  },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
