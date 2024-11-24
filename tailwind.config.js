// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        accent: 'var(--accent)',
        titleDecoration: 'var(--title-decoration)',
        highlight: 'var(--highlight)',
      }
    },
  },
  plugins: [],
  extend: {
    '.print-version-styled': {
      '@media print': {
        display: 'block',
      },
    },
    '.print-version-plain': {
      '@media print': {
        display: 'block',
      },
    },
  },
}