/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tali/*.{html,js}"],
  theme: {
    screens: {
       sm:'480px',
       md:'768px',
       lg:'976px',
       xl:'1440px'
    },
    extend: {
      colors: {
        brightred:'hsl(12,88% ,59%)',
        brightredlight:'hsl(12,88% ,69%)',
        brightRedSupLight:'hsl(12,88% ,95%)',
        darkblue:'hsl(228,39% ,23%)',
        darkgrayishBlue:'hsl(227,12% ,61%)',
        veryDarkBlue:'hsl(233,12%,13%)',
        veryPaleRed:'hsl(13 ,100% ,96%)',
        veryLightGray:'hsl(0,0% ,98%)',
      }
    },
  },
  plugins: [],
}

