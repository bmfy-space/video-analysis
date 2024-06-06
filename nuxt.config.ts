// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  buildDir: '.nuxt',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  },
  modules: ["@nuxt/ui"]
})