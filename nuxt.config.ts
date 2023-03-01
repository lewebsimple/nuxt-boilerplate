// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: { htmlAttrs: { lang: "fr-CA" } },
  },
  components: [
    { path: "~/components", pathPrefix: false },
    { path: "~/assets/svg", extensions: ["svg"], prefix: "svg" },
  ],
  modules: ["@nuxtjs/tailwindcss", "nuxt-unhead", "nuxt-simple-robots", "nuxt-simple-sitemap", "nuxt-svgo"],
  nitro: {
    prerender: { crawlLinks: true, routes: ["/"] },
  },
  runtimeConfig: {
    public: {
      siteName: "Nuxt boilerplate",
      siteDescription: "Welcome to Nuxt boilerplate",
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
    },
  },
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
