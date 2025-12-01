import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  app: {
    head: {
      title: 'Gemma Blake Interior Design',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Gemma Blake Interior Design – high-end residential and commercial interior design studio based in Bromsgrove, Worcestershire.'
        }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css'],

  googleFonts: {
    display: 'swap',
    families: {
      'Bodoni Moda': [500, 600, 700],
      Montserrat: [300, 400, 500, 600],
      'Great Vibes': [400]
    }
  },

  typescript: {
    strict: true
  }
})


