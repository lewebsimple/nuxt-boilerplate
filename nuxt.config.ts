// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/components", pathPrefix: false }],
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: { viewer: false },
  typescript: { typeCheck: "build" },
});
