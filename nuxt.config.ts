// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@nuxt/ui'],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    clientId: process.env.NUXT_CLIENT_ID,
    clientSecret: process.env.NUXT_CLIENT_SECRET,
  }
})