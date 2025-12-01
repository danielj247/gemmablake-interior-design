/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.{vue,js,ts}',
    './error.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        beige: '#E5D9C7',
        'light-gray': '#D3D3D3',
        navy: '#001F3F',
        brown: '#8B4513',
        gold: '#D4AF37'
      },
      fontFamily: {
        heading: ['"Bodoni Moda"', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0, 0, 0, 0.12)'
      }
    }
  },
  plugins: []
}


