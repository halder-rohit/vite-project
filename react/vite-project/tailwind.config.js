/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      myFont: ["Kaushan Script", "sans-serif"],
      myFont2: ["Montserrat", "sans-serif"], // Replace "Roboto" with your font name
    },},
  },
  plugins: [],
}
