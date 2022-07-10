/** @type {import('tailwindcss').Config} */
const brandColors =  {
  grey: "#1d1b26",
  blueMarine: "#00d9c0",
  birdBlue: '#1D9BF0',
  platinum: '#E7E9EA',
  silver: '#71767B',
  onix: '#333639',
  richBlack: '#15202B'
}


module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {


    colors: {
      ...brandColors,

      backgroundColor: brandColors.richBlack,
      textColor: brandColors.platinum
    },


    extend: {
      height: {
        '90vh': '90vh',
      }
    },


    backgroundImage: {
      'blur': "url('../public/blur.png')"
    }
  },
  plugins: [],
}