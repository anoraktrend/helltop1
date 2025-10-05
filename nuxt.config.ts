// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
    ],
  },
  experimental: { appManifest: false },
  modules: ["@nuxt/icon", "@nuxt/image"],
  image: {
    provider: 'ipx'
  },
  compatibilityDate: "2024-12-18",
});
