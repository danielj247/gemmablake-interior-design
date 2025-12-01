/** @type {import('tailwindcss').Config} */
export default {
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
        cream: '#E5D9C7',
        'cream-light': '#F5EFE6',
        'cream-dark': '#D4C7B5',
        gray: {
          light: '#D3D3D3',
          DEFAULT: '#A9A9A9',
          dark: '#6B6B6B'
        },
        navy: '#001F3F',
        'navy-light': '#003366',
        brown: '#8B4513',
        'brown-light': '#A0522D',
        gold: '#D4AF37',
        'gold-light': '#E6C65C',
        'gold-dark': '#B8960F'
      },
      fontFamily: {
        serif: ['Bodoni Moda', 'Georgia', 'serif'],
        script: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem'
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2'
      },
      letterSpacing: {
        'widest': '0.2em',
        'ultra': '0.3em'
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}

