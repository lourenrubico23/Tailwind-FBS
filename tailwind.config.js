/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        homeBanner: "url(../dist/img/home/sprite.svg)",
        aboutHome: "url(../dist/img/home/services.jpg)",
      },
      colors:{
        primary: "#6a103f",
        dark: "#2b2b2b",
        light: "#ffffff",
        lightpink: "#be2a76",
      }
    },
  },
  plugins: [],
}

