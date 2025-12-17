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
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'Gemma Blake Interior Design | Luxury Interiors in Worcestershire',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Gemma Blake Interior Design - Specialist interior design studio based in Bromsgrove, Worcestershire, specialising in high-end residential and commercial projects.' },
        { name: 'theme-color', content: '#111111' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cantata+One&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css']
})
