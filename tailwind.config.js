/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sunny': "url('./assets/sunny.jpg')",
      },
    },
  },
  plugins: [],
};