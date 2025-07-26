/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Vite, React, Next.js gibi projeler için
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e11d48', // örnek: kırmızı
        secondary: '#0f172a', // örnek: koyu gri
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

