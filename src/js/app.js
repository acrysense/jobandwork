document.addEventListener("DOMContentLoaded", function () {
    // SELECTRIC
    $('select').selectric();

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
    $('.articles__wrapper--slider, .resume__wrapper').slick({
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

      $('.vacancy__wrapper').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="arrow-left"><img src="img/dist/sprite.svg#arrow-left" alt=""></button>',
        nextArrow: '<button class="arrow-right"><img src="img/dist/sprite.svg#arrow-right" alt=""></button>',
      });

      // TABS
      document.querySelectorAll('.filter__item').forEach((item, i) => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.filter__item').forEach((child) => child.classList.remove('active'))
            document.querySelectorAll('.tabs__content').forEach((child) => child.classList.remove('active'))

            item.classList.add('active')
            document.querySelectorAll('.tabs__content')[i].classList.add('active')
        })
    })

    // CHECKBOX
    document.querySelectorAll('.custom-checkbox__input').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.custom-checkbox').forEach((child) => {
                child.classList.remove('active');
            })
            item.setAttribute('checked', 'checked');
            item.parentNode.classList.add('active');
        })
    );

    // MODAL
    const modalBtn = document.querySelectorAll('.enter'),
        editBtn = document.querySelectorAll('.person__edit'),
        modal = document.querySelector('.modal'),
        modalEdit = document.querySelector('.modal--edit'),
        modalClose = document.querySelector('.modal__close'),
        modalOverlay = document.querySelector('.modal-overlay');
    
    if (modalBtn) {
        modalBtn.forEach(function(item){
            item.addEventListener('click', function (event) {
                event.preventDefault();
    
                document.body.classList.add('scroll-disabled');
                modal.classList.add('modal--active');
                modalOverlay.classList.add('modal-overlay--active');
            });
        });
    }

    if (editBtn) {
        editBtn.forEach(function(item){
            item.addEventListener('click', function (event) {
                event.preventDefault();
    
                document.body.classList.add('scroll-disabled');
                modalEdit.classList.add('modal--active');
                modalOverlay.classList.add('modal-overlay--active');
            });
        });
    }

    document.body.addEventListener('keyup', function (event) {
        let key = event.keyCode;

        if (key == 27) {
            document.body.classList.remove('scroll-disabled');
            document.querySelector('.modal.modal--active').classList.remove('modal--active');
            document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
        };
    }, false);


    if (modalOverlay) {
        modalOverlay.addEventListener('click', function() {
            document.body.classList.remove('scroll-disabled');
            document.querySelector('.modal.modal--active').classList.remove('modal--active');
            this.classList.remove('modal-overlay--active');
        });
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            document.body.classList.remove('scroll-disabled');
            document.querySelector('.modal.modal--active').classList.remove('modal--active');
            modalOverlay.classList.remove('modal-overlay--active');
        });
    }
});