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
        'off-yellow': "#FFED00",
        'dark-gray': "#EAE9E3",
      }
    },
  },
  plugins: [],
}