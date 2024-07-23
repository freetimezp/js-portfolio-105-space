/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navs = document.querySelectorAll(".nav__link");

navs.forEach(el => el.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
}))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50 ? header.classList.add("blur-header") : header.classList.remove("blur-header");
};

window.addEventListener("scroll", blurHeader);


/*=============== SWIPER PLANETS ===============*/
const travelSwiper = new Swiper(".travel__swiper", {
    loop: true,
    spaceBetween: "32",
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto",

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
    }
});

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

