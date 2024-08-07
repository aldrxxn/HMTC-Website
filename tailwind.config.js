/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hitam: '#121212'
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        adelphe: ['Adelphe', 'serif'],
      },
    },
  },
  plugins: [],
}
