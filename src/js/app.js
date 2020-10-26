document.addEventListener("DOMContentLoaded", function () {
    // MOBILE MENU
    const hamburger = document.getElementById('hamburger-toggle')
    const overlay = document.getElementsByClassName('overlay')[0]

    hamburger.addEventListener('click', () => {
        if (hamburger.classList.contains('hamburger--active') && overlay.classList.contains('overlay--open')) {
            hamburger.classList.remove("hamburger--active");
            overlay.classList.remove("overlay--open");
            document.body.classList.remove("scroll-disabled");
        } else {
            hamburger.classList.add("hamburger--active");
            overlay.classList.add("overlay--open");
            document.body.classList.add("scroll-disabled");
        }
    });

    // SLICK
    $('.articles__wrapper--slider').slick({
        mobileFirst: true,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="arrow-left"><img src="img/dist/sprite.svg#arrow-left" alt=""></button>',
        nextArrow: '<button class="arrow-right"><img src="img/dist/sprite.svg#arrow-right" alt=""></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                     slidesToShow: 2
                 }
            },
            {
               breakpoint: 279,
               settings: {
                    slidesToShow: 1
                }
            }
         ]
      });
});