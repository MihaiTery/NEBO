import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00FFFF',
          blue: '#00B6FF',
          navy: '#0A1628',
          dark: '#0D1F3C',
          mid: '#0066CC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00FFFF 0%, #00B6FF 100%)',
        'brand-gradient-dark': 'linear-gradient(135deg, #0099DD 0%, #0066BB 100%)',
      },
    },
  },
  plugins: [],
}

export default config
