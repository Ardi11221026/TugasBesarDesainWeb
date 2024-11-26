/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Aktifkan dark mode menggunakan class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'serif'], // Custom font named 'times'
      },
      colors: {
        dark: {
          bg: '#121212',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
