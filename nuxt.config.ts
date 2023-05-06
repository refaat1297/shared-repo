// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${join(currentDir, './assets/scss/_variables.scss')}";`,
        },
      },
    },
  },
  css: [
    join(currentDir, './assets/scss/main.scss')
  ]
})
