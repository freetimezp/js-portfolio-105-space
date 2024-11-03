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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home__data, .contact__container`);
sr.reveal(`.home__img`, { origin: 'bottom' });
sr.reveal(`.home__ovni`, { delay: 800 });
sr.reveal(`.history__card`, { interval: 200 });
sr.reveal(`.explore__img`, { origin: 'left' });
sr.reveal(`.explore__data`, { origin: 'right' });
sr.reveal(`.explore__planet`, { origin: 'right', delay: 800 });
sr.reveal(`.history__planet-1`, { orogin: 'left', delay: 1000 });
sr.reveal(`.history__planet-2`, { orogin: 'right', delay: 1200 });
sr.reveal(`.footer__planet-1`, { orogin: 'bottom', delay: 600 });
sr.reveal(`.footer__planet-2`, { delay: 800 });



/*=============== SWIPER PLANETS ===============*/
const travelSwiper = new Swiper(".travel__swiper", {
    loop: true,
    spaceBetween: "32",
    grabCursor: true,
    slidesPerView: 1,
    centeredSlides: "auto",

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        900: {
            slidesPerView: 3,
        },
    }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
}

window.addEventListener('scroll', scrollActive);













