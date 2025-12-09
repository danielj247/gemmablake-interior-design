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
        cream: '#f3eee7',
        'cream-light': '#f7f4ef',
        'cream-dark': '#d8cec2',
        gray: {
          light: '#d9d4cc',
          DEFAULT: '#b3aba0',
          dark: '#7a7269'
        },
        navy: '#111111',
        'navy-light': '#2c2a28',
        brown: '#8b7c6c',
        'brown-light': '#a69586',
        gold: '#b6a694',
        'gold-light': '#cfc4b4',
        'gold-dark': '#9c8c7b',
        'theme-beige': '#f7f4ef',
        'theme-gray': '#b3aba0',
        'theme-navy': '#111111',
        'theme-brown': '#8b7c6c',
        'theme-gold': '#b6a694',
      },
      fontFamily: {
        'bodoni': ['"Bodoni Moda"', 'serif'],
        'signerica': ['"Signerica Fat"', 'cursive'],
        'sans': ['"Bodoni Moda"', 'serif'],
        'serif': ['"Bodoni Moda"', 'serif'],
      },
      borderRadius: {
        DEFAULT: '5px',
      }
    }
  },
  plugins: [],
}

