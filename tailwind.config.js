/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ['./src/**/*.{tsx,ts}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3366FF',
          600: '#1D4ED8',
        },
        secondary: {
          500: '#059669',
          600: '#047857',
        },
      },
    },
  },
  plugins: [],
};
