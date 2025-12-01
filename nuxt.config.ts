// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Enable SSG
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts'
  ],

  fonts: {
    families: [
      { name: 'Bodoni Moda', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'Cormorant Garamond', provider: 'google', weights: [300, 400, 500, 600] }
    ]
  },

  app: {
    head: {
      title: 'Gemma Blake Interior Design | Luxury Interiors in Worcestershire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Gemma Blake Interior Design - Specialist interior design studio based in Bromsgrove, Worcestershire, specialising in high-end residential and commercial projects.' },
        { name: 'theme-color', content: '#001F3F' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css']
})
