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
        // 'off-blue': "#076787",
        // 'light-blue': "#82B2C2",
        // 'light-green': "#85B6A6",
        // 'off-white': "#FFFFFF33",
        // 'off-gray': "#AFCBD521",
        // 'medium-orange': "#FF8C00",
        // 'lighter-orange': "#FF8C0033",
        'off-pink': "#FFDEDD",
      }
    },
  },
  plugins: [],
}