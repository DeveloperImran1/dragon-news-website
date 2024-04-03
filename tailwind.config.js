/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}



// google font k amra index.css file a import kore, kono custom className dia oi className ta element a bosia style korte pari.
// same kajtai taiwind.config.js file a extend: {fontFamily: {poppins: '"Poppins", sans-serif' }}, aivabew use korte pari.