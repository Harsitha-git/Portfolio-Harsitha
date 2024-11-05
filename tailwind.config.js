/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 10px rgba(255, 255, 255, 0.5), 0 2px 20px rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

