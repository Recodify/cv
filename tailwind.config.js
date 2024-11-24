// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This is crucial - it tells Tailwind where to look for class names
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}