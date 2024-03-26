/* Animation */ 
  AOS.init();
  
  /* Toggle Menu */
const burger = document.querySelector(".toggle__menu");
const headerA = document.querySelector(".header__mobile");
burger.addEventListener("click", () =>{
    burger.classList.toggle("open");
    headerA.classList.toggle("open");
})

/* Scroll Up */
const scrollToTopButton= document.querySelector(".scroll-to-top");
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        scrollToTopButton.style.display = 'block';
    }else{
        scrollToTopButton.style.display = 'none';
    }
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/* Slider */
var slider = tns({
    container: '.testimonial__wrapper',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    mouseDrag: true,
    navPosition: "bottom"
    
  });

  
 
       


