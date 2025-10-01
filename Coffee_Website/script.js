const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})

// Close menu when close button is clicked
// menuCloseButton.addEventListener("click", () => {
//     document.body.classList.toggle("show-mobile-menu")
// })
// OR
menuCloseButton.addEventListener("click", () => menuOpenButton.click());


//  Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    //  If we need pagnation
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //  Responsive breakpoints, kitne cards/review dikhege
    breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        1024: {
            slidesPerView:3
        }
    }
});

// Close menu when nav link is clicked
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});