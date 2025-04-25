import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#fbbf24',
        terciary: '#10B981'
        // Pode adicionar mais cores personalizadas aqui
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // hand: ['"Comic Sans MS"', 'cursive'], // exemplo divertido
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/postcss')
  ],
}

export default config
