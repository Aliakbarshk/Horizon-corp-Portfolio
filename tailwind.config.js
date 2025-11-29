/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        horizon: {
          dark: '#0a0a0a',
          blue: '#2563eb',
          purple: '#7c3aed',
          accent: '#f43f5e'
        }
      }
    },
  },
  plugins: [],
}