// Nav Bar
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Of NavBar

// Swiper Slider 1
var swiper = new Swiper(".hero", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        },
    navigation: {
    nextEl: ".hero .swiper-button-next",
    prevEl: ".hero .swiper-button-prev",
    },
});
// End Of Swiper Slider 1

// Swiper Slider 2
var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
    el: ".project-slider",
    clickable: true,
    },
    navigation: {
    nextEl: ".project-slider .swiper-button-next",
    prevEl: ".project-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 40,
        },
        1024: {
        slidesPerView: 2,
        spaceBetween: 50,
        },
    }
});

// End Of Swiper Slider 2