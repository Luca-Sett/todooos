export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],
  imports: {
    dirs: ["stores", "types"],
  },
  css: ["~/assets/css/tailwind.css"],
  experimental: {
    reactivityTransform: true,
  },
});
