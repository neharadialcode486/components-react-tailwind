/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      backgroundImage: {
        'line': "url('./assets/images/webp/roadmap-line.webp')",
        'circle': "url('./assets/images/webp/circle-image.webp')",
        'roadmap-line': "url('./assets/images/webp/roadmap-line-image.png')",
        'question-one': "url('./assets/images/webp/question-one.webp')",
        'question-two': "url('./assets/images/webp/question-two.webp')",
        'question-three': "url('./assets/images/webp/question-three.webp')",
        'question-four': "url('./assets/images/webp/question-four.webp')",
      },
    },
    plugins: [],
  }
}

