export default defineNuxtConfig({
  // Nuxt
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // App
  css: ['@/assets/css/main.css'],

  modules: ['@nuxt/eslint', '@unocss/nuxt', '@nuxtjs/seo'],

  nitro: {
    preset: 'vercel',
  },

  // Modules config
  eslint: {
    config: {
      standalone: false,
    },
  },

  // SEO
  site: {
    url: 'https://tobynguyen.net',
    name: 'Toby Nguyen',
  },
  robots: {
    blockNonSeoBots: true,
  },
})
