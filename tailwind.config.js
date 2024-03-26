/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        homeBanner: "url(../dist/img/home/sprite.svg)",
        aboutHome: "url(../dist/img/home/services.jpg)",
        Banner: "url(../dist/img/home/bg3.svg)",
      },
      colors:{
        primary: "#6a103f",
        dark: "#2b2b2b",
        light: "#ffffff",
        lightpink: "#be2a76",
      },
      keyframes:{
        'transition':{
          '0%':{
            transform: 'translateX(20%) translateY(30%)'
          },
          '100%':{
            transform:'translateX(10%) translateY(0%) '
          }
        },
      },
      animation:{
        'transition':'transition 5s ease forwards'
      }
    },
  },
  plugins: [],
}

