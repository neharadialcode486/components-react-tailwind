/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'linear-green': "linear-gradient(81.75deg, #18FF9E 0%, #1EA56C 126.43%)",
      },
      fontFamily: {
        'lato': "'Lato', sans-serif",
        'inter': "'Inter', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
      },
      colors: {
        'deep-gray': "#151619",
        'light-gray': "#272834",
        'dark-gray': "#BEC4D0",
        'medium-gray': "#0E0F1366",
        'off-white': "#E2E7F0",
        'off-green': "#18F699",
        'light-orange': "#DA6015",
      }
    },
  },
  plugins: [],
}