import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        'theme-beige': '#E5D9C7',
        'theme-gray': '#D3D3D3',
        'theme-navy': '#001F3F',
        'theme-brown': '#8B4513',
        'theme-gold': '#D4AF37',
      },
      fontFamily: {
        'bodoni': ['"Bodoni Moda"', 'serif'],
        'signerica': ['"Signerica Fat"', 'cursive'],
        'sans': ['Montserrat', 'sans-serif'], // Fallback/body font mentioned in INFO.md
        'serif': ['"Playfair Display"', 'serif'], // Fallback
      },
      borderRadius: {
        DEFAULT: '5px',
      }
    }
  },
  plugins: [],
}

