// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt'
  ],
  css: ['./app/assets/css/main.css'],
  alias: {
    '@': resolve(__dirname, 'app'),
    '~': resolve(__dirname, '.'),
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'Ui',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui'
  },
})