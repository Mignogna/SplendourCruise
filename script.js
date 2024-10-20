/* Scroll */
window.addEventListener("scroll", function () {
  let header = document.querySelector(".header");
  header.classList.toggle("change-color", window.scrollY > 530);
});
/* Carousel */
let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 13,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
});

/* Menu Mobile */

let btnMenuMob = document.querySelector("#btn-menu-mob");
let line1 = document.querySelector(".line-menuMob-1");
let line2 = document.querySelector(".line-menuMob-2");
let menuMobile = document.querySelector("#menu-mobile");
let body = document.querySelector("body");
let menuLinks = document.querySelectorAll("#menu-mobile a");


btnMenuMob.addEventListener("click", () => {
  line1.classList.toggle("ativo1");
  line2.classList.toggle("ativo2");
  menuMobile.classList.toggle("abrir");
  body.classList.toggle("no-overflow");
})

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    line1.classList.remove("ativo1");
    line2.classList.remove("ativo2");
    menuMobile.classList.remove("abrir");
    body.classList.remove("no-overflow");
  });
});