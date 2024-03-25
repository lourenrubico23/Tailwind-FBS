/* Toggle Menu */
const burger = document.querySelector(".toggle__menu");
const headerA = document.querySelector(".header__mobile");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})



