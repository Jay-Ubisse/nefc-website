/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        'app-blue': {
          100: '#669bbc',
          200: '#003049',
        },
      },
      backgroundImage: {
        'background1': "url('/src/assets/img/background-1.jpg')",
        'background2': "url('/src/assets/img/background-2.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

