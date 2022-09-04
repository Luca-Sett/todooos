import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@vueuse/nuxt"],
  build: {
    transpile: ["@headlessui/vue"],
  },
  css: ["~/assets/css/tailwind.css"],
  experimental: {
    reactivityTransform: true,
  },
});
