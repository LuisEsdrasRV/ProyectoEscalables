/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0b132b',
        'brand-blue': '#1c2541',
        'brand-primary': '#3a506b',
        'brand-accent': '#ff3333'
      }
    },
  },
  plugins: [],
}