export default defineNuxtConfig({
  typescript: {
    shim: false,
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
