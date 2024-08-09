/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '68': '0.68',
      },
      colors: {
        hitam: '#121212'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        adelphe: ['Adelphe', 'serif'],
        'libre-caslon-condensed': ['"Libre Caslon Condensed"', 'serif'],
      },
    },
  },
  plugins: [],
}
