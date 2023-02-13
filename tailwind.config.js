/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree", "sans-serif"],
        kanit: ["Kanit", "sans-serif"],
        sea: ["East Sea Dokdo", "cursive"],
      },
    },
  },
  plugins: [],
};
