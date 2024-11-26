/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Add custom dark mode colors if needed
      backgroundColor: {
        dark: {
          primary: '#1a202c',
          secondary: '#2d3748'
        }
      },
      textColor: {
        dark: {
          primary: '#e2e8f0',
          secondary: '#cbd5e0'
        }
      }
    },
  },
  plugins: [],
}